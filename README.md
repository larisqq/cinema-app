# Cinema App

**Cinema App** is a fully functional web application for managing and displaying movies in a cinema. It allows users to view available movies, access detailed information about them, and manage bookings. The project is built with a modern tech stack, using a React frontend and a Node.js backend connected to a PostgreSQL database.

## Main Features

- Display a list of movies fetched from a database.
- Detailed information for each movie, including genre, duration, ratings, and cast.
- Management of movie images stored in a local `/assets/images` folder.
- Attractive and user-friendly interface designed for end users.

## Technologies Used

1. **Frontend:**
   - **React.js**: For building the user interface.
   - **CSS**: Custom design and animations for the app components.

2. **Backend:**
   - **Node.js**: Backend server.
   - **Express.js**: For handling API routes.
   - **PostgreSQL**: Database for storing movie information.

3. **Additional Libraries and Tools:**
   - **Axios**: For API requests.
   - **pg**: PostgreSQL connector.
   - **dotenv**: For managing environment variables.

## Project Structure

- `cinema-app-frontend/` - Source code for the client side.
- `cinema-app-backend/` - Source code for the server side.
- `assets/images/` - Storage for movie images.

## How to Run the Project?

1. **Set up the database:**
   - Create a PostgreSQL database using the provided `CREATE TABLE` scripts and insert initial data.

2. **Start the backend:**
   - Navigate to the backend folder:
     ```bash
     cd cinema-app-backend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the server:
     ```bash
     npm start
     ```

3. **Start the frontend:**
   - Navigate to the frontend folder:
     ```bash
     cd cinema-app-frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the React application:
     ```bash
     npm start
     ```

4. Access the app in your browser at [http://localhost:3000](http://localhost:3000).
