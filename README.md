Hotel Linking Application This project is a hotel linking application that allows users to manage promotions and redeem codes. It consists of a frontend built with Next.js and a backend API made with PHP Laravel that communicates with a MySQL database.

Prerequisites Before running the application, ensure you have the following installed on your machine:

Docker Docker Compose Node.js (if you want to run the frontend locally outside of Docker) Getting Started

Clone the Repository

git clone https://github.com/Lucas52352/hotelinking-test.git

cd hotelinking-test

Create a .env file in the root of your project directory and define the necessary environment variables. Here’s a sample:
MYSQL_DATABASE=hotelinking_test
MYSQL_ROOT_USER=root
MYSQL_ROOT_PASSWORD=

Run Docker Containers
Navigate to the project root directory and run the following command to start the Docker containers:

docker-compose up -d

This command will start the MySQL database and the frontend application.

Migrate the Database If you have a migration setup for the backend, run the migrations to set up the database schema. You can do this by connecting to the Docker container running your backend API (replace backend-container with the name of your backend container): bash Copy code docker exec -it backend-container php artisan migrate

Access the Application Once the containers are up and running, you can access the frontend application in your web browser at:
http://localhost:3000

The backend API should be accessible at:

http://localhost:8000/api

Troubleshooting

If you encounter any issues with permissions or running containers, try restarting Docker or your machine. Ensure that the Docker containers are running properly by checking the logs:

docker-compose logs
