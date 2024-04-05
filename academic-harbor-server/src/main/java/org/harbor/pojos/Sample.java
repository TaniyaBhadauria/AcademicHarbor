package org.harbor.pojos;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Sample {
    private long id;
    private String content;

    public Sample() {
        // Jackson deserialization
    }

    public Sample(long id, String content) {
        this.id = id;
        this.content = content;
    }

    @JsonProperty
    public long getId() {
        return id;
    }

    @JsonProperty
    public String getContent() {
        return content;
    }
}