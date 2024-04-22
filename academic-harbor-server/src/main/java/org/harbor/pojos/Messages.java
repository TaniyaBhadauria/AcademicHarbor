package org.harbor.pojos;
import java.util.Date;

public class Messages {
    private String messageId;
    private String description;
    private String senderId;
    private String recipientId;
    private String subject;
    private String body;
    private String timeStamp;
    private String attachmentId;

    // Constructor
    public Messages(String messageId, String description, String senderId, String recipientId, String subject,
                    String body, String timeStamp, String attachmentId) {
        this.messageId = messageId;
        this.description = description;
        this.senderId = senderId;
        this.recipientId = recipientId;
        this.subject = subject;
        this.body = body;
        this.timeStamp = timeStamp;
        this.attachmentId = attachmentId;
    }

    // Getters and setters
    public String getMessageId() {
        return messageId;
    }

    public void setMessageId(String messageId) {
        this.messageId = messageId;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getSenderId() {
        return senderId;
    }

    public void setSenderId(String senderId) {
        this.senderId = senderId;
    }

    public String getRecipientId() {
        return recipientId;
    }

    public void setRecipientId(String recipientId) {
        this.recipientId = recipientId;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public String getTimeStamp() {
        return timeStamp;
    }

    public void setTimeStamp(String timeStamp) {
        this.timeStamp = timeStamp;
    }

    public String getAttachmentId() {
        return attachmentId;
    }

    public void setAttachmentId(String attachmentId) {
        this.attachmentId = attachmentId;
    }

    @Override
    public String toString() {
        return "Message{" +
                "messageId='" + messageId + '\'' +
                ", description='" + description + '\'' +
                ", senderId='" + senderId + '\'' +
                ", recipientId='" + recipientId + '\'' +
                ", subject='" + subject + '\'' +
                ", body='" + body + '\'' +
                ", timeStamp=" + timeStamp +
                ", attachmentId='" + attachmentId + '\'' +
                '}';
    }
}
