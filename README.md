Hotel Linking Application This project is a hotel linking application that allows users to manage promotions and redeem codes. It consists of a frontend built with Next.js and a backend API made with PHP Laravel that communicates with a MySQL database.

Prerequisites Before running the application, ensure you have the following installed on your machine:

 - Docker 

 - Docker Compose 

 - Node.js (if you want to run the frontend locally outside of Docker) 

 - Laravel:
```bash
composer global require laravel/installer
```


Getting Started

1. Clone the Repository:

```bash
git clone https://github.com/Lucas52352/hotelinking-test.git
```

```bash
cd hotelinking-test
```

2. In hotelinking-test-backend run the following commands:

```bash
composer install
```

```bash
php artisan serve
```

3. Here you have two options:

3-1. Navigate back to the project root directory (hotelinking-test/) and run the following command to start the Docker containers:

```bash
docker-compose up -d
```
This command will start the MySQL database and the NextJs frontend application.

3-2. Navigate to the frontend directory and install the dependencies tu run it locally:

```bash
npm install
```

```bash
npm run dev
```

Access the Application in your web browser at:

http://localhost:3000

The backend API should be accessible at:

http://localhost:8000/api

Troubleshooting

If you encounter any issues with permissions or running containers, try restarting Docker or your machine. Ensure that the Docker containers are running properly by checking the logs:

docker-compose logs
