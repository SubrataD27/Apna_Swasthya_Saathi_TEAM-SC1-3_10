# Apna Swasthya Saathi: AI-Powered Rural Healthcare
### Team ID: TEAM(SC1)3_10

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

An AI-driven platform designed to revolutionize healthcare accessibility in rural India by providing preliminary diagnostics, connecting patients with medical practitioners, and integrating with government health schemes.

---

## 🚀 Team Sanjeevni (Team ID: TEAM(SC1)3_10)

| Name                 | Role                            |
| -------------------- | ------------------------------- |
| **Subrata Dhibar** | Team Lead                       |
| **Ayush Kumar Biswal**| Researcher & Content Strategist |
| **Ashmit Raj** | UI/UX Designer                  |
| **Monosmita Behera** | PPT Designer                    |

---

## 📝 Table of Contents

- [Problem Statement](#-problem-statement)
- [Our Solution](#-our-solution)
- [Key Features](#-key-features)
- [Technology Stack](#-technology-stack)
- [Project Structure](#-project-structure)
- [Screenshots](#-screenshots)
- [Getting Started](#-getting-started)
- [Presentation](#-presentation)
- [Demo Video](#-demo-video)
- [Future Scope](#-future-scope)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 Problem Statement

In rural areas, especially in regions like Odisha, timely access to healthcare is a significant challenge. This limitation adversely impacts the quality and effectiveness of medical interventions. The core issues include:

-   **Limited Access to Doctors:** A scarcity of qualified medical professionals in remote locations.
-   **Delayed Diagnosis:** Difficulty in getting timely preliminary diagnoses for common ailments.
-   **Lack of Awareness:** Insufficient knowledge about government health schemes and insurance.
-   **Geographical Barriers:** The distance and cost associated with traveling to urban centers for medical care.

Our project, "Apna Swasthya Saathi," aims to address these challenges by creating an accessible, AI-driven chatbot platform (voice and text-based) that interactively assesses basic health symptoms, categorizes potential health issues, generates detailed preliminary diagnostic reports, and provides referrals to qualified medical practitioners in nearby urban centers.

---

## ✨ Our Solution

**Apna Swasthya Saathi** (Our Health Companion) is a comprehensive ecosystem that bridges the gap between rural communities and healthcare services. Our platform empowers ASHA (Accredited Social Health Activist) workers and individuals with the tools to conduct initial health assessments, access government schemes, and receive timely medical guidance.

Our approach is a **B2G2C (Business-to-Government-to-Consumer)** model, where we partner with government bodies to deliver healthcare services directly to the citizens who need them most.

---

## 🔑 Key Features

-   **AI-Powered Diagnostic Chatbot:** An intelligent, multilingual chatbot (voice and text) that guides users through a symptom assessment process.
-   **Preliminary Diagnostic Reports:** Generates a detailed, easy-to-understand preliminary report based on the user's symptoms.
-   **Find a Doctor:** Helps users locate and connect with nearby doctors and specialists.
-   **Government Scheme Integration:** Provides information and facilitates enrollment in relevant government health schemes like Biju Swasthya Kalyan Yojana (BSKY).
-   **Health Records Management:** A secure system for storing and accessing personal health records.
-   **ASHA Worker Dashboard:** A dedicated interface for ASHA workers to manage community health, track patient cases, and streamline their workflow.

---

## 💻 Technology Stack

Our project is built with a modern and scalable technology stack:

-   **Frontend:** React, Tailwind CSS, HTML5
-   **Backend & Machine Learning (Planned):**
    -   **Framework:** Python (Flask)
    -   **Machine Learning:** TensorFlow, Scikit-learn
    -   **Database:** PostgreSQL, Supabase
-   **APIs & Services:**
    -   **AI Chatbot:** Google Gemini API
    -   **Government Schemes:** Biju Swasthya Kalyan Yojana (BSKY) API
    -   **Mapping (Planned):** MapmyIndia API for location-based doctor search
-   **Deployment:**
    -   **Frontend:** Vercel
    -   **Backend (Planned):** Heroku

---

## 📂 Project Structure

Here is an overview of our project's planned monorepo directory structure, developed by **Team ID: TEAM(SC1)3_10**.

```
Apna_Swasthya_Saathi_TEAM-SC1-3_10/
│
├── frontend/  # React.js Frontend Application
│   ├── public/
│   │   ├── index.html
│   │   └── ...
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── Ai.jsx
│   │   │   ├── Bsky.jsx
│   │   │   └── ...
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .gitignore
│   ├── package.json
│   └── tailwind.config.js
│
├── backend/  # Python Flask Backend (Planned)
│   ├── app.py
│   ├── requirements.txt
│   ├── .env
│   ├── ml_model/
│   │   ├── model.pkl
│   │   └── preprocessor.py
│   ├── routes/
│   │   ├── auth.py
│   │   └── diagnostics.py
│   └── models/
│       └── user.py
│
└── README.md
```

---

## 📸 Screenshots

Here's a glimpse of our application's dashboard:

![Apna Swasthya Saathi Dashboard](https://i.imgur.com/your-screenshot-url.png)
*Caption: The main dashboard providing access to all key features.*

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

-   Node.js and npm (or yarn) installed on your machine.
-   Git for version control.

### Installation

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/SubrataD27/Apna_Swasthya_Saathi_TEAM-SC1-3_10.git](https://github.com/SubrataD27/Apna_Swasthya_Saathi_TEAM-SC1-3_10.git)
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd Apna_Swasthya_Saathi_TEAM-SC1-3_10
    ```
3.  **Install NPM packages:**
    ```sh
    npm install
    ```
4.  **Run the application:**
    ```sh
    npm run dev
    ```

The application will be available at `http://localhost:5173`.

---

## 📊 Presentation

For a detailed overview of our project, please view the presentation created by **Team ID: TEAM(SC1)3_10**.

[**PPT PRESENTATION-SWASTHYA SATHI**](https://drive.google.com/file/d/1bn1lsY94-9JAJpko8O204UWuz8-hvUxQ/view?usp=sharing)

---

## 🎥 Demo Video

Watch our 3-5 minute demo video to see "Apna Swasthya Saathi" in action.

**[Link to Demo Video]** (e.g., YouTube, Google Drive)

---

## 🔮 Future Scope

We have a clear roadmap for enhancing "Apna Swasthya Saathi":

-   **Full Backend Integration:** Develop and integrate the Python-based backend with a robust machine learning model for more accurate diagnostics.
-   **Real-time Video Consultations:** Enable live video calls between patients and doctors.
-   **IoT Device Integration:** Connect with low-cost digital stethoscopes and hemoglobin meters for real-time data collection.
-   **Regional Language Support:** Expand the chatbot's language capabilities to cover more regional languages.
-   **Offline Functionality:** Develop an offline mode for areas with limited internet connectivity.

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.
