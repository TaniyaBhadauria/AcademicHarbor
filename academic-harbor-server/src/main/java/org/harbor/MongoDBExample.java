package org.harbor;

import com.mongodb.ConnectionString;
import com.mongodb.MongoClientSettings;
import com.mongodb.ServerApiVersion;
import com.mongodb.client.*;
import org.bson.Document;
import com.mongodb.ServerApi;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class MongoDBExample {
    public static void main (String []args){
        getProjectData();
    }

    public FindIterable<Document> getNotifications(String tablename) throws UnsupportedEncodingException {
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
            MongoCollection<Document> collection = database.getCollection(tablename);

            // Find all documents in the collection
            FindIterable<Document> documents = collection.find();

            return documents;
        } catch (
                Exception e) {
            System.err.println("Error: " + e.getMessage());
        }
        return null;
    }

    public static void getProjectData() {
        // JDBC URL, username, and password
        String url = "jdbc:mysql://localhost:3306/academicharbor";
        String user = "root";
        String password = "Taniya@123";

        // SQL query to select all columns from the ProjectRepository table
        String query = "SELECT * FROM ProjectRepository";

        try {
            // Connect to the database
            Connection connection = DriverManager.getConnection(url, user, password);

            // Create a PreparedStatement with the SQL query
            PreparedStatement preparedStatement = connection.prepareStatement(query);

            // Execute the query and get the ResultSet
            ResultSet resultSet = preparedStatement.executeQuery();

            // Iterate over the ResultSet and print each row
            while (resultSet.next()) {
                int projectID = resultSet.getInt("ProjectID");
                String projectTitle = resultSet.getString("ProjectTitle");
                String projectDescription = resultSet.getString("ProjectDescription");
                String startDate = resultSet.getString("StartDate");
                String endDate = resultSet.getString("EndDate");
                String projectCoordinator = resultSet.getString("ProjectCoordinator");
                int teamID = resultSet.getInt("TeamID");
                String projectDepartment = resultSet.getString("ProjectDepartment");
                String concentration = resultSet.getString("Concentration");
                String projectStatus = resultSet.getString("ProjectStatus");

                System.out.println("ProjectID: " + projectID);
                System.out.println("ProjectTitle: " + projectTitle);
                System.out.println("ProjectDescription: " + projectDescription);
                System.out.println("StartDate: " + startDate);
                System.out.println("EndDate: " + endDate);
                System.out.println("ProjectCoordinator: " + projectCoordinator);
                System.out.println("TeamID: " + teamID);
                System.out.println("ProjectDepartment: " + projectDepartment);
                System.out.println("Concentration: " + concentration);
                System.out.println("ProjectStatus: " + projectStatus);
                System.out.println();
            }

            // Close the resources
            resultSet.close();
            preparedStatement.close();
            connection.close();

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
    public static MongoCollection<Document> getCollection(String tablename) throws UnsupportedEncodingException {
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
            MongoCollection<Document> collection = database.getCollection(tablename);
            return collection;
        } catch (Exception e){
            e.printStackTrace();
        }
        return null;}
}

