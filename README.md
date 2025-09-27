# ✍️ sign-be

**sign-be** is the backend server for a web application that generates **digital signatures** from a user’s drawn input.  
Built with **Node.js** and **Express.js**, it provides RESTful APIs to manage application data and business logic.

---

## 🌟 Features
- 🔗 **REST API** endpoints for core functionalities  
- 📁 **Modular structure** with controllers, routes, and models  
- 🛠️ **Utilities** for helper functions and configuration  
- ⚡ **Configurable** and easy to extend for future integrations  

---

## 🧩 Tech Stack
| Category      | Technologies |
|----------------|--------------|
| **Backend**   | ![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/-Express.js-000000?logo=express&logoColor=white) |
| **Language**  | ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=black) |
| **Security**  | ![JWT](https://img.shields.io/badge/-JWT-000000?logo=jsonwebtokens&logoColor=white) ![bcrypt](https://img.shields.io/badge/-bcrypt-003B57?logoColor=white) |
| **Dev Tools** | ![Nodemon](https://img.shields.io/badge/-Nodemon-76D04B?logo=nodemon&logoColor=black) |

---

## ⚡ Setup & Usage
Follow these steps to run the backend locally:

```bash
# 1️⃣ Clone the repository
git clone https://github.com/Jeelislive/sign-be.git
cd sign-be

# 2️⃣ Install dependencies
npm install

# 3️⃣ Configure environment variables
# Create a .env file in the root directory and set values
# (e.g., database URL, JWT secret)

# 4️⃣ Start the development server
npm run dev
The backend will run on http://localhost:5000
 (or your configured port).

💡 About

This backend powers a web application where users can draw a basic version of their signature, export it, and use it as a digital signature.
