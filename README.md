# 🚀 Base Apparel coming soon page

💡 A fullstack implementation of the classic Frontend Mentor challenge.
This project takes the original "coming soon" landing page design and enhances it with a backend to handle email subscriptions using Node.js + SQLite.

---

## 📑 Table of Contents

- [🚀 Base Apparel coming soon page](#-base-apparel-coming-soon-page)
  - [📑 Table of Contents](#-table-of-contents)
  - [📝 About](#-about)
  - [🛠️ Tech Stack](#️-tech-stack)
  - [✨ Features](#-features)
  - [⚙️ Installation](#️-installation)
  - [🚀 Usage](#-usage)
  - [🤝 Contributing](#-contributing)
  - [📄 License](#-license)
  - [📬 Contact](#-contact)

---

## 📝 About

This project is a responsive landing page with an integrated email subscription system.
Users can enter their email address, which is validated on the frontend and stored securely in a local SQLite database via the backend.

> 🧩 Challenge from [Frontend Mentor](https://www.frontendmentor.io)  
> 💼 Solution by [@Fransuelton](https://www.frontendmentor.io/profile/Fransuelton)

---

## 🛠️ Tech Stack

Technologies and tools used in this project:

- 🌐 Frontend: Vue 3 + Vite + TailwindCSS
- ⚙️ Backend: Node.js (Express)
- 🗄️ Database: SQLite with sqlite3
- 🎨 UI Reference: Figma (Frontend Mentor design files)

---

## ✨ Features

Main features of this project:

- 📱 Responsive design for both mobile and desktop
- ✅ Real-time email validation on the frontend
- 📨 Email persistence in a local SQLite database
- ⚡ Fast development setup with Vite
- 🔒 Simple but structured backend API with error handling (409 Conflict for duplicates)

---

## ⚙️ Installation

To run this project locally:

```bash
# Clone this repository
git clone https://github.com/Fransuelton/fem-base-apparel-page.git

# Navigate into the project folder
cd fem-base-apparel-page

# Frontend setup
cd frontend
npm install
npm run dev

# Backend setup
cd backend
npm install
node app.js
```

---

## 🚀 Usage

1. Start both the frontend and backend servers
2. Open http://localhost:5173 (Vite default) in your browser
3. Enter your email in the input field
4. If valid, it will be stored in the subscribers.db SQLite database
5. Duplicate emails return a 409 Conflict error

---

## 🤝 Contributing

Want to contribute? Here's how:

1. Fork the repository  
2. Create a new branch: `git checkout -b feature-name`  
3. Commit your changes: `git commit -m "Add some feature"`  
4. Push to your fork: `git push origin feature-name`  
5. Open a Pull Request  

---

## 📄 License

This project is licensed under the MIT License.  
See the [LICENSE](LICENSE) file for more information.

---

## 📬 Contact

**Fransuelton Francisco** – fransuelton.dev@gmail.com  
🌐 [Portfolio](https://fransuelton.dev)  
💼 [GitHub](https://github.com/Fransuelton)  
🎯 [Frontend Mentor](https://www.frontendmentor.io/profile/Fransuelton)

---

⭐️ If you found this project useful, don’t forget to give it a star!
