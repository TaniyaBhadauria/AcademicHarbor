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
import org.harbor.pojos.Sample;

import java.io.UnsupportedEncodingException;
import java.util.concurrent.atomic.AtomicLong;

@Path("/hello-world")
@Produces(MediaType.APPLICATION_JSON)
public class AcademicHarborResource {

    public AcademicHarborResource() {

    }

    @GET
    @Path("/notification")
    @Timed
    public Notification getNotifications(@QueryParam("name") String name) throws UnsupportedEncodingException {
        FindIterable<Document> documents = new MongoDBExample().getNotifications("Notification");
        // Iterate over the documents and print details
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

                return n;
            }
        }
        return null;
    }
}