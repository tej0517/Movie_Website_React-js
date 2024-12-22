## 🎬 React Movie App

A feature-rich **React JS** web application that allows users to explore popular, top-rated, and upcoming movies, view detailed movie information, and explore cast details.

---

### 🚀 Features

- **Home Page**: Displays popular movies with pagination.
- **Top Rated Movies**: Lists top-rated movies with detailed information.
- **Upcoming Movies**: Showcases upcoming movies with release dates.
- **Movie Details**:
  - Overview, genres, runtime, release date, and rating.
  - Horizontal cast slider with actor profiles.
- **Dynamic Theming**: Unified dark theme for a modern look and consistent user experience.

---

### 🛠️ Tech Stack

- **Frontend**: React JS
- **API**: [The Movie Database (TMDB)](https://www.themoviedb.org/)
- **Styling**: CSS with responsive design
- **Routing**: React Router DOM
- **HTTP Client**: Axios

---

### 📂 Folder Structure

```
src/
├── components/
│   ├── MovieCard.jsx         # Movie card component for displaying movie posters and details
│   ├── Pagination.jsx        # Pagination component for navigation
│   ├── Navbar.jsx
├── pages/
│   ├── Home.jsx              # Popular movies page
│   ├── TopRated.jsx          # Top-rated movies page
│   ├── Upcoming.jsx          # Upcoming movies page
│   ├── MovieDetails.jsx      # Detailed movie information page
├── App.jsx                   # Main app component with routing
├── index.js                  # ReactDOM rendering
               
```
---
### 🔧 Installation and Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/react-movie-app.git
   cd react-movie-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the application**:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`.

---

### 📚 How to Use

1. **Home Page**: Browse popular movies.
2. **Navigation**: Use the navigation bar to switch between:
   - Popular Movies
   - Top Rated Movies
   - Upcoming Movies
3. **View Movie Details**: Click on a movie to see detailed information, including cast members.
4. **Pagination**: Navigate through the pages for more movies.
