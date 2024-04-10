package org.harbor.pojos;


public class User {
    private int userId;
    private String userName;
    private String profilePicture;
    private String emailId;
    private String password;
    private String linkedin;
    private String phone;
    private String resumeId;
    private String role;
    private String registrationDate;

    // Constructors
    public User() {
    }

    public User(int userId, String userName, String profilePicture, String emailId, String password,
                String linkedin, String phone, String resumeId, String role, String registrationDate) {
        this.userId = userId;
        this.userName = userName;
        this.profilePicture = profilePicture;
        this.emailId = emailId;
        this.password = password;
        this.linkedin = linkedin;
        this.phone = phone;
        this.resumeId = resumeId;
        this.role = role;
        this.registrationDate = registrationDate;
    }

    // Getters and Setters
    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getProfilePicture() {
        return profilePicture;
    }

    public void setProfilePicture(String profilePicture) {
        this.profilePicture = profilePicture;
    }

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getLinkedin() {
        return linkedin;
    }

    public void setLinkedin(String linkedin) {
        this.linkedin = linkedin;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone=phone;
    }
}
