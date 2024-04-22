package org.harbor.pojos;

import java.util.List;

public class Resume {
    private String Resume_ID;
    public Resume(){}
    public Resume(String resume_ID, List<Resume.Education> education, List<Resume.Experience> experience, List<Project> projects, String attachment_ID, String university) {
        Resume_ID = resume_ID;
        Education = education;
        Experience = experience;
        Projects = projects;
        Attachment_ID = attachment_ID;
        University = university;
    }

    private List<Education> Education;
    private List<Experience> Experience;
    private List<Project> Projects;
    private String Attachment_ID;
    private String University;

    public String getResume_ID() {
        return Resume_ID;
    }

    public void setResume_ID(String resume_ID) {
        Resume_ID = resume_ID;
    }

    public List<Education> getEducation() {
        return Education;
    }

    public void setEducation(List<Education> education) {
        Education = education;
    }

    public List<Experience> getExperience() {
        return Experience;
    }

    public void setExperience(List<Experience> experience) {
        Experience = experience;
    }

    public List<Project> getProjects() {
        return Projects;
    }

    public void setProjects(List<Project> projects) {
        Projects = projects;
    }

    public String getAttachment_ID() {
        return Attachment_ID;
    }

    public void setAttachment_ID(String attachment_ID) {
        Attachment_ID = attachment_ID;
    }

    public String getUniversity() {
        return University;
    }

    public void setUniversity(String university) {
        University = university;
    }

    public static class Education {
        private String Degree;
        private String University;
        private String Year;

        public String getDegree() {
            return Degree;
        }

        public void setDegree(String degree) {
            Degree = degree;
        }

        public String getUniversity() {
            return University;
        }

        public void setUniversity(String university) {
            University = university;
        }

        public String getYear() {
            return Year;
        }

        public void setYear(String year) {
            Year = year;
        }
    }

    public static class Experience {
        private String Position;
        private String Company;
        private String Duration;

        public String getPosition() {
            return Position;
        }

        public void setPosition(String position) {
            Position = position;
        }

        public String getCompany() {
            return Company;
        }

        public void setCompany(String company) {
            Company = company;
        }

        public String getDuration() {
            return Duration;
        }

        public void setDuration(String duration) {
            Duration = duration;
        }
    }

    public static class Project {
        private String Title;
        private String Description;
        private String Duration;

        public String getTitle() {
            return Title;
        }

        public void setTitle(String title) {
            Title = title;
        }

        public String getDescription() {
            return Description;
        }

        public void setDescription(String description) {
            Description = description;
        }

        public String getDuration() {
            return Duration;
        }

        public void setDuration(String duration) {
            Duration = duration;
        }
    }
}
