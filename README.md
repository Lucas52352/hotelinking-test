Hotel Linking Application This project is a hotel linking application that allows users to manage promotions and redeem codes. It consists of a frontend built with Next.js and a backend API made with PHP Laravel that communicates with a MySQL database.

Prerequisites Before running the application, ensure you have the following installed on your machine:

Docker 

Docker Compose 

Node.js (if you want to run the frontend locally outside of Docker) 

Laravel: 'composer global require laravel/installer'


Getting Started

1. Clone the Repository:

git clone https://github.com/Lucas52352/hotelinking-test.git

cd hotelinking-test

2. In hotelinking-test-backend run the following command:

composer install

3. Navigate back to the project root directory (hotelinking-test/) and run the following command to start the Docker containers:

docker-compose up -d

This command will start the MySQL database and the NextJs frontend application.

Access the Application Once the containers are up and running, you can access the frontend application in your web browser at:

http://localhost:3000

The backend API should be accessible at:

http://localhost:8000/api

Troubleshooting

If you encounter any issues with permissions or running containers, try restarting Docker or your machine. Ensure that the Docker containers are running properly by checking the logs:

docker-compose logs
