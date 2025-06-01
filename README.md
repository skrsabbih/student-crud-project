# 🎓 Student CRUD Full-Stack Application

A complete Student Management System built using **Laravel (API)** and **React (Frontend)** with Tailwind CSS. This project allows users to perform Create, Read, Update, and Delete operations on student data through a responsive UI and RESTful API.

---

## 👨‍💻 Developed By

**Md. Sabbih Sarker**  
Department of CSE  
Khwaja Yunus Ali University

---

## 🚀 Features

- Student Create, Read, Update, Delete (CRUD)
- Laravel REST API
- React + Axios frontend
- Tailwind CSS for styling
- Clean and simple UI
- Responsive Design

---

## 🧰 Technologies Used

| Backend       | Frontend     | Others         |
| ------------- | ------------ | -------------- |
| Laravel 12    | React 19     | Axios          |
| PHP 8.x       | TypeScript (optional) | Tailwind CSS   |
| MySQL         | React Hooks  | .env Config    |

---

## 📸 Project Screenshots

> 📂 Place your screenshots in the `assets/images/` folder and use the below format to show them.

```md
![Student List Page](assets/images/student-list.png)
![Student Create Page](assets/images/student-create.png)
![image](https://github.com/user-attachments/assets/c464f93d-769a-41cb-8e2f-a7426d87b212)


## How to Run This Project

### Step 1: Clone the Repository

```bash
git clone https://github.com/your-username/student-crud-project.git
cd student-crud-project
Step 2: Backend Setup (Laravel API)
Navigate to the backend directory:

bash
Copy
Edit
cd backend
Install PHP dependencies using Composer:

bash
Copy
Edit
composer install
Copy the example environment file and set your environment variables:

bash
Copy
Edit
cp .env.example .env
Generate an application key:

bash
Copy
Edit
php artisan key:generate
Run database migrations:

bash
Copy
Edit
php artisan migrate
Start the Laravel development server:

bash
Copy
Edit
php artisan serve
Your backend API will be running at http://127.0.0.1:8000

Step 3: Frontend Setup (React)
Navigate to the frontend directory:

bash
Copy
Edit
cd ../frontend
Install Node.js dependencies:

bash
Copy
Edit
npm install
Start the React development server:

bash
Copy
Edit
npm run dev
Your React frontend will be running at http://localhost:5173 (or the port shown in your terminal)

Technologies Used
Backend: Laravel (PHP Framework)

Frontend: React.js

Database: MySQL / MariaDB (configured in .env file)

Notes
Make sure you have PHP, Composer, Node.js, and npm installed on your system.

Configure your database credentials properly in the .env file in the backend folder before running migrations.

To stop the servers, press Ctrl + C in the terminal windows.
🙏 Thank You!
