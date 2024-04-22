package org.harbor.pojos;

import java.util.Date;

public class Application {
    private String applicationID;
    private String senderID;
    private Project project;
    private String recipientID;
    private String applicationStatus;
    private Date appliedTimeStamp;

    public Application(String applicationID, String senderID, Project project, String recipientID, String applicationStatus, Date appliedTimeStamp) {
        this.applicationID = applicationID;
        this.senderID = senderID;
        this.project = project;
        this.recipientID = recipientID;
        this.applicationStatus = applicationStatus;
        this.appliedTimeStamp = appliedTimeStamp;
    }

    public String getApplicationID() {
        return applicationID;
    }

    public void setApplicationID(String applicationID) {
        this.applicationID = applicationID;
    }

    public String getSenderID() {
        return senderID;
    }

    public void setSenderID(String senderID) {
        this.senderID = senderID;
    }

    public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
    }

    public String getRecipientID() {
        return recipientID;
    }

    public void setRecipientID(String recipientID) {
        this.recipientID = recipientID;
    }

    public String getApplicationStatus() {
        return applicationStatus;
    }

    public void setApplicationStatus(String applicationStatus) {
        this.applicationStatus = applicationStatus;
    }

    public Date getAppliedTimeStamp() {
        return appliedTimeStamp;
    }

    public void setAppliedTimeStamp(Date appliedTimeStamp) {
        this.appliedTimeStamp = appliedTimeStamp;
    }

    @Override
    public String toString() {
        return "Application{" +
                "applicationID='" + applicationID + '\'' +
                ", senderID='" + senderID + '\'' +
                ", project='" + project + '\'' +
                ", recipientID='" + recipientID + '\'' +
                ", applicationStatus='" + applicationStatus + '\'' +
                ", appliedTimeStamp=" + appliedTimeStamp +
                '}';
    }
}
