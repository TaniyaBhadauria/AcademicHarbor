package org.harbor.pojos;

public class Project {
    private int projectId;
    private String projectTitle;
    private String projectDescription;
    private String startDate;
    private String endDate;
    private String projectCoordinator;
    private int teamId;
    private String projectDepartment;
    private String concentration;
    private String projectStatus;

    // Constructors
    public Project() {
    }

    public Project(int projectId, String projectTitle, String projectDescription, String startDate, String endDate,
                   String projectCoordinator, int teamId, String projectDepartment, String concentration,
                   String projectStatus) {
        this.projectId = projectId;
        this.projectTitle = projectTitle;
        this.projectDescription = projectDescription;
        this.startDate = startDate;
        this.endDate = endDate;
        this.projectCoordinator = projectCoordinator;
        this.teamId = teamId;
        this.projectDepartment = projectDepartment;
        this.concentration = concentration;
        this.projectStatus = projectStatus;
    }

    // Getters and Setters
    public int getProjectId() {
        return projectId;
    }

    public void setProjectId(int projectId) {
        this.projectId = projectId;
    }

    public String getProjectTitle() {
        return projectTitle;
    }

    public void setProjectTitle(String projectTitle) {
        this.projectTitle = projectTitle;
    }

    public String getProjectDescription() {
        return projectDescription;
    }

    public void setProjectDescription(String projectDescription) {
        this.projectDescription = projectDescription;
    }

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }

    public String getProjectCoordinator() {
        return projectCoordinator;
    }

    public void setProjectCoordinator(String projectCoordinator) {
        this.projectCoordinator = projectCoordinator;
    }

    public int getTeamId() {
        return teamId;
    }

    public void setTeamId(int teamId) {
        this.teamId = teamId;
    }

    public String getProjectDepartment() {
        return projectDepartment;
    }

    public void setProjectDepartment(String projectDepartment) {
        this.projectDepartment = projectDepartment;
    }

    public String getConcentration() {
        return concentration;
    }

    public void setConcentration(String concentration) {
        this.concentration = concentration;
    }

    public String getProjectStatus() {
        return projectStatus;
    }

    public void setProjectStatus(String projectStatus) {
        this.projectStatus = projectStatus;
    }

}
