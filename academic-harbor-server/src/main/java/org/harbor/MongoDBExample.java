package org.harbor;

import com.mongodb.ConnectionString;
import com.mongodb.MongoClientSettings;
import com.mongodb.ServerApiVersion;
import com.mongodb.client.*;
import org.bson.Document;
import com.mongodb.ServerApi;
import org.harbor.pojos.Notification;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;

public class MongoDBExample {

    public FindIterable<Document> getNotifications(String notification) throws UnsupportedEncodingException {
        // Connect to MongoDB
        String username = URLEncoder.encode("admin", "UTF-8");
        String password = URLEncoder.encode("Taniya@123", "UTF-8");

        String connectionString =
                "mongodb+srv://" + username + ":" + password + "@" + "cluster0.y0nl8eb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

        try {

            ServerApi serverApi = ServerApi.builder()
                    .version(ServerApiVersion.V1)
                    .build();
            MongoClientSettings settings = MongoClientSettings.builder()
                    .applyConnectionString(new ConnectionString(connectionString))
                    .serverApi(serverApi)
                    .build();
            MongoClient mongoClient = MongoClients.create(settings);
            MongoDatabase database = mongoClient.getDatabase("AcademicHarbor");

            // Access the collection
            MongoCollection<Document> collection = database.getCollection("Notification");

            // Find all documents in the collection
            FindIterable<Document> documents = collection.find();

            return documents;
        } catch (
                Exception e) {
            System.err.println("Error: " + e.getMessage());
        }
        return null;
    }
}

