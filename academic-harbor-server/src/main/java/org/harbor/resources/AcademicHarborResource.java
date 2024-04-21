package org.harbor.resources;

import com.codahale.metrics.annotation.Timed;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.QueryParam;
import jakarta.ws.rs.core.MediaType;
import org.bson.Document;
import org.harbor.MongoDBExample;
import org.harbor.pojos.Notification;
import org.harbor.pojos.Project;
import org.harbor.pojos.Sample;
import org.harbor.pojos.User;

import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

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