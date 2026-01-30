# Movie Search App

A simple, elegant movie search application using the OMDb API.

## Features

- 🎬 Search movies by title
- 📺 Display movie poster, title, year, director, genre, plot, and rating
- ⚡ Responsive design
- 🎨 Beautiful gradient UI
- ♿ Accessible and mobile-friendly
- 🔄 Loading state while fetching

## Getting Started

### 1. Get Your API Key

1. Visit [OMDb API](https://www.omdbapi.com/apikey.aspx)
2. Select the FREE tier
3. Enter your email and submit
4. Check your email for the API key
5. Copy your API key

### 2. Update API Key

Open `script.js` and replace `YOUR_API_KEY` with your actual API key:

```javascript
const API_KEY = "your_actual_api_key_here";
```

### 3. Run the App

Simply open `index.html` in your browser.

## How It Works

### HTML Structure
- Search input field for movie names
- Search button to trigger the fetch
- Result container to display movie details

### JavaScript Logic
- **API Fetch**: Uses OMDb API to fetch movie data
- **Error Handling**: Handles invalid searches and network errors
- **Loading State**: Shows "Loading..." while fetching
- **Dynamic HTML**: Renders movie details dynamically
- **Enter Key**: Support for searching via Enter key

### CSS Styling
- Gradient background
- Card-based layout for movie display
- Smooth animations and transitions
- Responsive design for mobile devices

## Learning Concepts

✅ API-driven UI
✅ Async/Await with Fetch API
✅ Conditional rendering
✅ Error handling
✅ DOM manipulation
✅ Event listeners
✅ Responsive web design

## Tech Stack

- HTML5
- CSS3 (Flexbox, Gradients, Animations)
- Vanilla JavaScript (ES6+)
- OMDb API

## Future Enhancements

- Add pagination for multiple search results
- Save favorites to localStorage
- Add movie reviews from multiple sources
- Implement debouncing for search
- Add year filter
- Dark mode toggle
# moviesearch
