package org.harbor.resources;

import com.codahale.metrics.annotation.Timed;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import com.mongodb.client.model.Filters;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import org.bson.Document;
import org.bson.conversions.Bson;
import org.eclipse.jetty.server.Response;
import org.harbor.MongoDBExample;
import org.harbor.pojos.*;

import java.io.UnsupportedEncodingException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

import static com.mongodb.client.model.Filters.exists;
import static com.mongodb.client.model.Sorts.descending;

@Path("/hello-world")
@Produces(MediaType.APPLICATION_JSON)
public class AcademicHarborResource {

    public AcademicHarborResource() {
    }

    public static void main(String[] args) throws UnsupportedEncodingException {
        new AcademicHarborResource().getAllProjects();
    }

    @GET
    @Path("/notification")
    @Timed
    public List<Notification> getNotifications(@QueryParam("name") String name) throws UnsupportedEncodingException {
        FindIterable<Document> documents = new MongoDBExample().getNotifications("Notification");
        // Iterate over the documents and print details
        List<Notification> list = new ArrayList<>();
        MongoCursor<Document> cursor = documents.iterator();
        while (cursor.hasNext()) {
            Document doc = cursor.next();
            if (name.equals(doc.getInteger("UserID").toString())) {
                Notification n = new Notification(doc.getInteger("NotificationID"), doc.getString("Message"),
                        doc.getInteger("UserID"), doc.getString("SentDate"), doc.getString("SentTime"), doc.getString("Status"));
                System.out.println("Notification ID: " + doc.getInteger("NotificationID"));
                System.out.println("Message: " + doc.getString("Message"));
                System.out.println("User ID: " + doc.getInteger("UserID"));
                System.out.println("Sent Date: " + doc.getString("SentDate"));
                System.out.println("Sent Time: " + doc.getString("SentTime"));
                System.out.println("Status: " + doc.getString("Status"));
                System.out.println();
                list.add(n);
            }
        }
        return list;
    }
    @GET
    @Path("/users")
    @Timed
    public List<User> getUsers() throws UnsupportedEncodingException {
        FindIterable<Document> documents = new MongoDBExample().getNotifications("User");
        // Iterate over the documents and print details
        List<User> list = new ArrayList<>();
        MongoCursor<Document> cursor = documents.iterator();
        while (cursor.hasNext()) {
            Document userDdoc = cursor.next();
            User u = new User(userDdoc.getInteger("userId"), userDdoc.getString("userName"),
                    userDdoc.getString("profilePicture"), userDdoc.getString("emailId"),
                    userDdoc.getString("password"), userDdoc.getString("linkedin")
                    , userDdoc.getString("phone"), userDdoc.getString("resumeId")
                    , userDdoc.getString("role")
                    , userDdoc.getString("registrationDate"));
            list.add(u);
        }
        return list;
    }
    @GET
    @Path("/usersName")
    @Timed
    public User getUsersBasedOnName(@QueryParam("name") String id) throws UnsupportedEncodingException {
        FindIterable<Document> documents = new MongoDBExample().getNotifications("User");
        // Iterate over the documents and print details
        List<User> list = new ArrayList<>();
        MongoCursor<Document> cursor = documents.iterator();
        while (cursor.hasNext()) {
            Document userDdoc = cursor.next();
            if (id.equals(userDdoc.getInteger("userId").toString())) {
                User u = new User(userDdoc.getInteger("userId"), userDdoc.getString("userName"),
                        userDdoc.getString("profilePicture"), userDdoc.getString("emailId"),
                        userDdoc.getString("password"), userDdoc.getString("linkedin")
                        , userDdoc.getString("phone"), userDdoc.getString("resumeId")
                        , userDdoc.getString("role")
                        , userDdoc.getString("registrationDate"));
                return u;}
        }
        return null;
    }

    @GET
    @Path("/all-projects")
    @Timed
    public List<Project> getAllProjects() throws UnsupportedEncodingException {
        FindIterable<Document> documents = new MongoDBExample().getNotifications("ProjectRepository");
        MongoCollection<Document> teamCollection = new MongoDBExample().getCollection("Team");
        MongoCollection<Document> userCollection = new MongoDBExample().getCollection("User");
        // Iterate over the documents and print details
        List<Project> list = new ArrayList<>();
        List<User> users = new ArrayList<>();
        MongoCursor<Document> cursor = documents.iterator();
        while (cursor.hasNext()) {
            Document doc = cursor.next();
            Document query = new Document("teamId", doc.getInteger("TeamID"))
                    .append("projectId", doc.getInteger("ProjectID"));
            MongoCursor<Document> teamCursor = teamCollection.find(query).iterator();
            while (teamCursor.hasNext()) {
                Document teamDoc = teamCursor.next();
                Document userQuery = new Document("userId", teamDoc.getInteger("userId"));
                MongoCursor<Document> userCursor = userCollection.find(userQuery).iterator();
                while (userCursor.hasNext()) {
                    Document userDdoc = userCursor.next();
                    User u = new User(userDdoc.getInteger("userId"), userDdoc.getString("userName"),
                            userDdoc.getString("profilePicture"), userDdoc.getString("emailId"),
                            userDdoc.getString("password"), userDdoc.getString("linkedin")
                            , userDdoc.getString("phone"), userDdoc.getString("resumeId")
                            , userDdoc.getString("role")
                            , userDdoc.getString("registrationDate"));
                    users.add(u);
                }
            }
            Project p = new Project(doc.getInteger("ProjectID"), doc.getString("ProjectTitle"),
                    doc.getString("ProjectDescription"), doc.getString("StartDate"),
                    doc.getString("EndDate"), doc.getString("ProjectCoordinator")
                    , users, doc.getString("ProjectDepartment")
                    , doc.getString("Concentration")
                    , doc.getString("ProjectStatus"));
            list.add(p);
        }

        return list;
    }
    @GET
    @Path("/login")
    @Timed
    public User loginUser(@QueryParam("username") String username, @QueryParam("password") String password) throws UnsupportedEncodingException {
        // Connect to the MongoDB database
        MongoCollection<Document> userCollection = new MongoDBExample().getCollection("User");

        // Query the database to find the user with the provided username and password
        Document query = new Document("userName", username)
                .append("password", password);
        Document userDocument = userCollection.find(query).first();

        if (userDocument != null) {
            // User found, return user details
            return documentToUser(userDocument);
        } else {
            // User not found, return null or handle appropriately
            return null;
        }
    }
    @GET
    @Path("/register")
    public String registerUser(@QueryParam("username") String username,
                               @QueryParam("password") String password,
                               @QueryParam("email") String email,
                               @QueryParam("profilePicture") String profilePicture,
                               @QueryParam("linkedin") String linkedin,
                               @QueryParam("phone") String phone,
                               @QueryParam("resumeId") String resumeId,
                               @QueryParam("role") String role,
                               @QueryParam("registrationDate") String registrationDate) throws UnsupportedEncodingException {

        // Connect to the MongoDB database
        MongoCollection<Document> userCollection = new MongoDBExample().getCollection("User");

        // Create a new user document
        Document userDocument = new Document("userName", username)
                .append("password", password)
                .append("emailId", email)
                .append("profilePicture", profilePicture)
                .append("linkedin", linkedin)
                .append("phone", phone)
                .append("resumeId", resumeId)
                .append("role", role)
                .append("registrationDate", registrationDate);

        // Insert the user document into the database
        userCollection.insertOne(userDocument);

        // Return success response
        return "User registered successfully";
    }

    @GET
    @Path("/send-message")
    public String sendMessage(
                               @QueryParam("description") String description,
                               @QueryParam("senderId") String senderId,
                               @QueryParam("recipientId") String recipientId,
                               @QueryParam("subject") String subject,
                               @QueryParam("body") String body,
                               @QueryParam("resumeId") String resumeId,
                               @QueryParam("role") String role,
                               @QueryParam("registrationDate") String registrationDate) throws UnsupportedEncodingException {

        // Connect to the MongoDB database
        MongoCollection<Document> userCollection = new MongoDBExample().getCollection("Messages");

        LocalDateTime now = LocalDateTime.now();

        // Define the formatter for the desired format
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss'Z'");

        // Format the timestamp into the desired string format
        String formattedTimestamp = now.format(formatter);
        Bson filter = exists("messageId");

        // Find the document with the largest messageId
        FindIterable<Document> result = userCollection.find(filter)
                .sort(descending("messageId"))
                .limit(1);

        // Get the first document from the result
        Document largestMessage = result.first();

        // Extract the messageId field from the document
        String messageId = largestMessage.getString("messageId");
        // Create a new document for the message
        Document messageDocument = new Document("messageId", messageId)
                .append("description", description)
                .append("senderId", senderId)
                .append("recipientId", recipientId)
                .append("subject",subject)
                .append("body", body)
                .append("timeStamp", formattedTimestamp)
                .append("attachmentId", "attachmentId128");

        // Insert the user document into the database
        userCollection.insertOne(messageDocument);

        // Return success response
        return "User registered successfully";
    }

    @GET
    @Path("/messages-inbox")
    @Timed
    public List<Messages> getMessageDetails(@QueryParam("recipientId") String recipientId) throws UnsupportedEncodingException {
            FindIterable<Document> documents = new MongoDBExample().getNotifications("Messages");
            List<Messages> messageList = new ArrayList<>();
            MongoCursor<Document> cursor = documents.iterator();
            while (cursor.hasNext()) {
                Document doc = cursor.next();
                if (recipientId.equals(doc.getString("recipientId"))) {
                    Messages message = new Messages(
                            doc.getString("messageId"),
                            doc.getString("description"),
                            doc.getString("senderId"),
                            doc.getString("recipientId"),
                            doc.getString("subject"),
                            doc.getString("body"),
                            doc.getString("timeStamp"),
                            doc.getString("attachmentId")
                    );
                    messageList.add(message);
                }
            }
            return messageList;
    }
    @GET
    @Path("/messages-outbox")
    @Timed
    public List<Messages> getOutboxMessageDetails(@QueryParam("senderId") String senderId) throws UnsupportedEncodingException {
        FindIterable<Document> documents = new MongoDBExample().getNotifications("Messages");
        List<Messages> messageList = new ArrayList<>();
        MongoCursor<Document> cursor = documents.iterator();
        while (cursor.hasNext()) {
            Document doc = cursor.next();
            if (senderId.equals(doc.getString("senderId"))) {
                Messages message = new Messages(
                        doc.getString("messageId"),
                        doc.getString("description"),
                        doc.getString("senderId"),
                        doc.getString("recipientId"),
                        doc.getString("subject"),
                        doc.getString("body"),
                        doc.getString("timeStamp"),
                        doc.getString("attachmentId")
                );
                messageList.add(message);
            }
        }
        return messageList;
    }
    @POST
    @Path("/update")
    public String updateUser(@QueryParam("userId") String userId,
                             @QueryParam("username") String username,
                             @QueryParam("email") String email,
                             @QueryParam("profilePicture") String profilePicture,
                             @QueryParam("linkedin") String linkedin,
                             @QueryParam("phone") String phone,
                             @QueryParam("resumeId") String resumeId,
                             @QueryParam("role") String role) throws UnsupportedEncodingException {

        // Connect to the MongoDB database
        MongoCollection<Document> userCollection = new MongoDBExample().getCollection("User");

        // Create a query to find the user document by userId
        Document query = new Document("userName", username);
        Document userDocument = userCollection.find(query).first();
        System.out.println(userDocument.getString("userName"));
        // Create a document with updated user data
        Document updateData = new Document("userName", username)
                .append("emailId", email)
                .append("profilePicture", profilePicture)
                .append("linkedin", linkedin)
                .append("phone", phone)
                .append("resumeId", resumeId)
                .append("role", role);

        // Create a document with update operation
        Document updateOperation = new Document("$set", updateData);

        // Perform the update operation
        userCollection.updateOne(query, updateOperation);

        // Return success response
        return "User updated successfully";
    }
    @GET
    @Path("/resumedetails")
    public Resume getResumeDetails(@QueryParam("resumeID") String resumeID) throws UnsupportedEncodingException {
        // Connect to the MongoDB database
        MongoCollection<Document> resumeCollection = new MongoDBExample().getCollection("Resume");

        // Query the database to find the resume with the provided Resume_ID
        Document query = new Document("Resume_ID", resumeID);
        Document resumeDocument = resumeCollection.find(Filters.eq("Resume_ID", resumeID)).first();

        if (resumeDocument != null) {
            // Resume found, convert the document to a Resume object
            Resume resume = documentToResume(resumeDocument);
            return resume;
        } else {
            Resume resume = new Resume();
            return resume;
        }
    }

    @GET
    @Path("/application-details")
    public List<Document> getApplicationDetails(@QueryParam("senderID") String senderID, @QueryParam("recipientID") String recipientID) throws UnsupportedEncodingException {
        // Connect to the MongoDB database
        MongoCollection<Document> applicationCollection = new MongoDBExample().getCollection("Applications");
        Document query = new Document("senderID", senderID);
        // Define the query

        // Query the database to find the application details
        FindIterable<Document> result = applicationCollection.find(query);

        // Convert the result to JSON and return
        List<Document> applicationDetails = new ArrayList<>();
        result.forEach(applicationDetails::add);

        return applicationDetails;
    }
    @GET
    @Path("/received-application-details")
    public List<Document> getReceivedApplicationDetails(@QueryParam("recipientID") String recipientID) throws UnsupportedEncodingException {
        // Connect to the MongoDB database
        MongoCollection<Document> applicationCollection = new MongoDBExample().getCollection("Applications");
        Document query = new Document("recipientID", recipientID);
        // Define the query

        // Query the database to find the application details
        FindIterable<Document> result = applicationCollection.find(query);

        // Convert the result to JSON and return
        List<Document> applicationDetails = new ArrayList<>();
        result.forEach(applicationDetails::add);

        return applicationDetails;
    }
    private Resume documentToResume(Document document) {
        Resume resume = new Resume();
        resume.setResume_ID(document.getString("Resume_ID"));
        resume.setUniversity(document.getString("University"));
        resume.setAttachment_ID(document.getString("Attachment_ID"));

        List<Resume.Education> educationList = new ArrayList<>();
        List<Document> educationDocuments = (List<Document>) document.get("Education");
        for (Document eduDoc : educationDocuments) {
            Resume.Education education = new Resume.Education();
            education.setDegree(eduDoc.getString("Degree"));
            education.setUniversity(eduDoc.getString("University"));
            education.setYear(eduDoc.getString("Year"));
            educationList.add(education);
        }
        resume.setEducation(educationList);

        List<Resume.Experience> experienceList = new ArrayList<>();
        List<Document> experienceDocuments = (List<Document>) document.get("Experience");
        for (Document expDoc : experienceDocuments) {
            Resume.Experience experience = new Resume.Experience();
            experience.setPosition(expDoc.getString("Position"));
            experience.setCompany(expDoc.getString("Company"));
            experience.setDuration(expDoc.getString("Duration"));
            experienceList.add(experience);
        }
        resume.setExperience(experienceList);

        List<Resume.Project> projectList = new ArrayList<>();
        List<Document> projectDocuments = (List<Document>) document.get("Projects");
        for (Document projDoc : projectDocuments) {
            Resume.Project project = new Resume.Project();
            project.setTitle(projDoc.getString("Title"));
            project.setDescription(projDoc.getString("Description"));
            project.setDuration(projDoc.getString("Duration"));
            projectList.add(project);
        }
        resume.setProjects(projectList);

        return resume;
    }

    // Helper method to convert a MongoDB Document to a User object
    private User documentToUser(Document document) {
        User user = new User();
        user.setUserId(document.getInteger("userId"));
        user.setUserName(document.getString("userName"));
        user.setProfilePicture(document.getString("profilePicture"));
        user.setEmailId(document.getString("emailId"));
        user.setPassword(document.getString("password"));
        user.setLinkedin(document.getString("linkedin"));
        user.setPhone(document.getString("phone"));
        user.setResumeId(document.getString("resumeId"));
        user.setRole(document.getString("role"));
        user.setRegistrationDate(document.getString("registrationDate"));
        return user;
    }

}