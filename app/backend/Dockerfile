# --- Stage 1: Build the JAR ---
FROM maven:3.9.6-eclipse-temurin-17 AS build
WORKDIR /app

# Copy the project files
COPY pom.xml .
COPY src ./src

# Build the app (This will download dependencies automatically)
RUN mvn clean package -DskipTests

# --- Stage 2: Create the Final Image ---
FROM eclipse-temurin:17-jdk-alpine
WORKDIR /app

# Copy the JAR from the build stage
COPY --from=build /app/target/*.jar app.jar

# Expose the port (We use 8080 as the internal container port)
EXPOSE 8080

# Run the app
ENTRYPOINT ["java", "-jar", "app.jar"]