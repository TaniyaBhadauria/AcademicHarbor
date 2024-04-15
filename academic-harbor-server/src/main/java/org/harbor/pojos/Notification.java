package org.harbor.pojos;

import java.util.Date;

public class Notification {
    private int notificationID;
    private String message;
    private int userID;
    private String sentDate;
    private String sentTime;
    private String status;

    // Constructors
    public Notification() {
    }

    public Notification(int notificationID, String message, int userID, String sentDate, String sentTime, String status) {
        this.notificationID = notificationID;
        this.message = message;
        this.userID = userID;
        this.sentDate = sentDate;
        this.sentTime = sentTime;
        this.status = status;
    }

    // Getters and setters
    public int getNotificationID() {
        return notificationID;
    }

    public void setNotificationID(int notificationID) {
        this.notificationID = notificationID;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public int getUserID() {
        return userID;
    }

    public void setUserID(int userID) {
        this.userID = userID;
    }

    public String getSentDate() {
        return sentDate;
    }

    public void setSentDate(String sentDate) {
        this.sentDate = sentDate;
    }

    public String getSentTime() {
        return sentTime;
    }

    public void setSentTime(String sentTime) {
        this.sentTime = sentTime;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
