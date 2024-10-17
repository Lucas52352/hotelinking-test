Hotel Linking Application
This project is a hotel linking application that allows users to manage promotions and redeem codes. It consists of a frontend built with Next.js and a backend API made with PHP Laravel that communicates with a MySQL database.

Prerequisites
Before running the application, ensure you have the following installed on your machine:

Docker
Docker Compose
Node.js (if you want to run the frontend locally outside of Docker)
Getting Started
1. Clone the Repository

git clone https://github.com/Lucas52352/hotelinking-test.git
cd hotelinking-test
2. Set Up Environment Variables
Create a .env file in the root of your project directory and define the necessary environment variables. Here’s a sample:

NEXT_PUBLIC_BACKEND_URL=http://localhost:8000
3. Run Docker Containers
Navigate to the project root directory and run the following command to start the Docker containers:

bash
Copy code
docker-compose up -d
This command will start the MySQL database and the frontend application.

4. Migrate the Database
If you have a migration setup for the backend, run the migrations to set up the database schema. You can do this by connecting to the Docker container running your backend API (replace backend-container with the name of your backend container):

bash
Copy code
docker exec -it backend-container php artisan migrate
5. Access the Application
Once the containers are up and running, you can access the frontend application in your web browser at:

http://localhost:3000

The backend API should be accessible at:

http://localhost:8000/api
6. Running Tests
To run the tests for the application, you can execute the following command in the backend container:

bash
Copy code
docker exec -it backend-container php artisan test
Troubleshooting
If you encounter any issues with permissions or running containers, try restarting Docker or your machine.
Ensure that the Docker containers are running properly by checking the logs:
bash
Copy code
docker-compose logs
Contributing
If you would like to contribute to this project, please create a new branch and submit a pull request.

License
This project is licensed under the MIT License - see the LICENSE file for details.
