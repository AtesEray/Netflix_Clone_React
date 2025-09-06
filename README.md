# Netflix Clone 🎬

This project is a **Netflix Clone** built with **React**, **Firebase Authentication**, and the **TMDB Movie API**.  
Users can sign up / log in, browse popular movies, and watch trailers through a custom video player.

---

## 🚀 Features
- 🔐 User authentication with **Firebase Auth**  
- 🎞️ Fetching movie data from **TMDB API**  
- 📺 Click on a movie card to watch the trailer  
- 🎨 Netflix-style modern UI design  
- 📱 Fully responsive (mobile, tablet, desktop)  
- 🔥 Real-time user data storage with **Firestore**

---

## 🛠️ Tech Stack
- [React](https://react.dev/)  
- [Firebase](https://firebase.google.com/) (Authentication & Firestore)  
- [TMDB API](https://www.themoviedb.org/documentation/api)  
- [Vite](https://vitejs.dev/) (React development environment)  
- [React Router DOM](https://reactrouter.com/) (Routing)
- [React Toastify](https://fkhadra.github.io/react-toastify/) (Notifications)
- Custom **CSS** for a Netflix-like UI  

---

## 📂 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/AtesEray/Netflix_Clone_React.git
cd Netflix_Clone_React
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Variables Setup

#### 3.1 Create Environment File
Create a `.env` file in the root directory and add the following variables:

```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id

# TMDB API Configuration
VITE_TMDB_TOKEN=your_tmdb_api_token
```

#### 3.2 Firebase Setup
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or select an existing one
3. Enable **Authentication** and **Firestore Database**
4. In Authentication, enable **Email/Password** sign-in method
5. In Firestore Database, create a database in **test mode**
6. Go to Project Settings → General → Your apps
7. Add a web app and copy the configuration values to your `.env` file

#### 3.3 TMDB API Setup
1. Visit [TMDB Website](https://www.themoviedb.org/)
2. Create an account or sign in
3. Go to [API Settings](https://www.themoviedb.org/settings/api)
4. Request an API key (v3 auth)
5. Copy your **API Read Access Token** to the `.env` file

### 4. Run the Application
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

---

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

---

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Footer/         # Footer component
│   ├── Navbar/         # Navigation bar
│   └── TittleCards/    # Movie cards component
├── pages/              # Main application pages
│   ├── Home/           # Home page with movie listings
│   ├── Login/          # Authentication page
│   └── Player/         # Video player page
├── assets/             # Static assets (images, icons)
├── firebase.js         # Firebase configuration
└── App.jsx            # Main application component
```

---

## 🎯 API Endpoints Used

### TMDB API
- **Base URL**: `https://api.themoviedb.org/3/`
- **Endpoints**:
  - `movie/popular` - Popular movies
  - `movie/now_playing` - Now playing movies
  - `movie/top_rated` - Top rated movies
  - `movie/upcoming` - Upcoming movies
  - `movie/{id}/videos` - Movie trailers

### Firebase Services
- **Authentication**: User sign up, sign in, sign out
- **Firestore**: User profile data storage

---

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel/Netlify
1. Connect your GitHub repository
2. Set environment variables in deployment settings
3. Deploy automatically on push to main branch

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [TMDB](https://www.themoviedb.org/) for providing the movie database API
- [Firebase](https://firebase.google.com/) for authentication and database services
- [React](https://react.dev/) for the amazing frontend framework
