package org.harbor.pojos;

import java.io.*;

public class ShellScriptRunner {
    public static void main(String[] args) {
        try {
            // Directory to change to
            String directory = "C:\\kafka_2.13-3.7.0";

            // Path to the kafka-topics.sh script
            String scriptPath = directory + "\\bin\\kafka-topics.sh";

            // Command to change directory and execute the shell script
            String[] command = {"cmd", "/c", "cd", "/d", directory, "&&", scriptPath, "--create", "--topic", "quickstart-events", "--bootstrap-server", "localhost:9092"};

            // Creating ProcessBuilder instance
            ProcessBuilder pb = new ProcessBuilder(command);

            // Redirect error stream to output stream
            pb.redirectErrorStream(true);

            // Start the process
            Process process = pb.start();

            // Reading output
            BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
            String line;
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }

            // Wait for the process to finish
            int exitCode = process.waitFor();
            System.out.println("Exited with error code: " + exitCode);

        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
    }
}
