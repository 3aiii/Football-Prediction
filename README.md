# ⚽ Football Match Predictor (Premier League)

A web application that predicts the outcome of Premier League football matches using historical data and an AI model (LSTM). This project is primarily built for practice and learning — combining **AI**, **API development**, and **full-stack integration**.

> ⚠️ **Note**: The prediction accuracy is still a work-in-progress and is not yet suitable for production deployment.

---

## 🔧 Tech Stack

### Frontend
- **React**
- **TailwindCSS**
- **Axios**
- **React DOM**
- **UUID**

### Backend
- **Flask** (Python)

### Database
- **MongoDB**

### Machine Learning Model
- **LSTM (Long Short-Term Memory)** neural network

---

## 🚀 Features
- Predicts match outcomes (Win/Draw/Lose) with probability percentages
- Fetches prediction results through a Flask API
- Interactive frontend to input match details and view results
- Stores prediction history in MongoDB
- Built with modular structure to practice real-world development

---

## 📁 Project Structure

```bash
football-prediction/
├── backend/
│   ├── app.py
│   ├── model/ 
│       └── lstm_model.py (not include in project becase i'm use gitignore in that file)
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── tailwind.config.js
├── README.md
└── requirements.txt
