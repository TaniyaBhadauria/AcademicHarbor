package org.harbor.pojos;

public class Team {
    private int teamId;
    private int userId;
    private String teamName;
    private int projectId;

    // Constructors
    public Team() {
    }

    public Team(int teamId, int userId, String teamName, int projectId) {
        this.teamId = teamId;
        this.userId = userId;
        this.teamName = teamName;
        this.projectId = projectId;
    }

    // Getters and Setters
    public int getTeamId() {
        return teamId;
    }

    public void setTeamId(int teamId) {
        this.teamId = teamId;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getTeamName() {
        return teamName;
    }

    public void setTeamName(String teamName) {
        this.teamName = teamName;
    }

    public int getProjectId() {
        return projectId;
    }

    public void setProjectId(int projectId) {
        this.projectId = projectId;
    }

    // toString method
    @Override
    public String toString() {
        return "Team{" +
                "teamId=" + teamId +
                ", userId=" + userId +
                ", teamName='" + teamName + '\'' +
                ", projectId=" + projectId +
                '}';
    }
}
