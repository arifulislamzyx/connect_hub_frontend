# Real-Time Chat Application

A high-performance real-time chat application built with modern web technologies to ensure **low latency, scalability, and reliability**.

## 🚀 Features

- **Real-time messaging** with `Socket.io`
- **Scalable architecture** using `Kafka`
- **Efficient caching** with `Redis`
- **Microservices-ready** with `Docker`
- **Optimized for performance** with `Next.js` and `Node.js`

## 🛠️ Technologies Used

- **Frontend:** Next.js (React)
- **Backend:** Node.js, Express
- **WebSockets:** Socket.io
- **Message Queue:** Kafka
- **Caching:** Redis
- **Containerization:** Docker

## 📦 Installation & Setup

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-repo/chat-app.git
   cd chat-app
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Run Redis and Kafka using Docker**
   ```bash
   docker-compose up -d
   ```
4. **Start the backend server**
   ```bash
   npm run server
   ```
5. **Start the frontend**
   ```bash
   npm run dev
   ```
6. **Access the app** at `http://localhost:3000`

## ⚙️ Environment Variables

Create a `.env` file and configure the following:

```env
REDIS_HOST=localhost
REDIS_PORT=6379
KAFKA_BROKER=localhost:9092
PORT=5000
```

## 📜 API Endpoints

| Endpoint       | Method | Description         |
| -------------- | ------ | ------------------- |
| `/api/login`   | POST   | User authentication |
| `/api/chat`    | GET    | Fetch chat history  |
| `/api/message` | POST   | Send a new message  |

## 🛠 Future Improvements

- Implementing **user authentication with JWT**
- Enhancing **UI with animations and themes**
- Deploying with **Kubernetes for scalability**

## 🤝 Contributing

Feel free to submit **issues** and **pull requests** to improve the app!

## 📄 License

This project is licensed under the **MIT License**.

---

### 💡 Made with ❤️ by [Your Name]
