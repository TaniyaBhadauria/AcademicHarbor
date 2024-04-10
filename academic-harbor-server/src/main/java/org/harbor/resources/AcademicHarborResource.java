package org.harbor.resources;

import com.codahale.metrics.annotation.Timed;
import com.mongodb.client.FindIterable;
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

import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

@Path("/hello-world")
@Produces(MediaType.APPLICATION_JSON)
public class AcademicHarborResource {

    public AcademicHarborResource() {
    }
    public static void main (String []args) throws UnsupportedEncodingException {
        new AcademicHarborResource().getAllProjects();
    }

    @GET
    @Path("/notification")
    @Timed
    public List<Notification>  getNotifications(@QueryParam("name") String name) throws UnsupportedEncodingException {
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
    @Path("/all-projects")
    @Timed
    public List<Project>  getAllProjects() throws UnsupportedEncodingException {
        FindIterable<Document> documents = new MongoDBExample().getNotifications("ProjectRepository");
        // Iterate over the documents and print details
        List<Project> list = new ArrayList<>();
        MongoCursor<Document> cursor = documents.iterator();
        while (cursor.hasNext()) {
            Document doc = cursor.next();
            Project p = new Project(doc.getInteger("ProjectID"), doc.getString("ProjectTitle"),
                    doc.getString("ProjectDescription"), doc.getString("StartDate"),
                    doc.getString("EndDate"), doc.getString("ProjectCoordinator")
                    , doc.getInteger("TeamID"), doc.getString("ProjectDepartment")
                    , doc.getString("Concentration")
                    , doc.getString("ProjectStatus"));
            list.add(p);
        }
        return list;
    }
}