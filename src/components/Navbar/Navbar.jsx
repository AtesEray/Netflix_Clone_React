import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_icon from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import { logout } from '../../firebase'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navRef = useRef();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const searchRef = useRef();

  // Search function
  const searchMovies = async (query) => {
    if (!query.trim()) {
      setSearchResults([]);
      setShowSearchResults(false);
      return;
    }

    setIsSearching(true);
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTllNWFhMDc3ZjJkMDczOTM4ZjM4OGY3NjFlZDAxZSIsIm5iZiI6MTc1Njc2MjY4OC4wODYwMDAyLCJzdWIiOiI2OGI2MTI0MDY4ZjdkM2M1MjUyMDBlZTIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.8ldLfOs1tPlGrY3-ujiZU7I6-VccQv9IcuU4NinmOeY'
      }
    };

    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=${encodeURIComponent(query)}`, options);
      const data = await response.json();
      setSearchResults(data.results || []);
      setShowSearchResults(true);
    } catch (error) {
      console.error('Search error:', error);
      setSearchResults([]);
    } finally {
      setIsSearching(false);
    }
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    // Debounce search
    const timeoutId = setTimeout(() => {
      searchMovies(query);
    }, 500);

    return () => clearTimeout(timeoutId);
  };

  // Handle movie selection
  const handleMovieSelect = (movieId) => {
    navigate(`/player/${movieId}`);
    setSearchQuery('');
    setShowSearchResults(false);
  };

  useEffect(() => {
    const handleScroll = () => {
    if (window.scrollY >= 80) {
      navRef.current.classList.add('nav-dark');
    } else {
      navRef.current.classList.remove('nav-dark');
    }
  };

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setShowSearchResults(false);
    }
  };

  window.addEventListener('scroll', handleScroll);
  document.addEventListener('mousedown', handleClickOutside);

  return () => {
    window.removeEventListener('scroll', handleScroll);
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, []);

  return (
    <div ref={navRef} className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Brows by Language</li>
        </ul>
      </div>
      <div className="navbar-right">
        <div className="search-container" ref={searchRef}>
          <img src={search_icon} alt="" className='icons search-icon'/>
          <input
            type="text"
            placeholder="Search movies..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-input"
            onFocus={() => searchQuery && setShowSearchResults(true)}
          />
          {showSearchResults && (
            <div className="search-results">
              {isSearching ? (
                <div className="search-loading">Searching...</div>
              ) : searchResults.length > 0 ? (
                searchResults.slice(0, 8).map((movie) => (
                  <div
                    key={movie.id}
                    className="search-result-item"
                    onClick={() => handleMovieSelect(movie.id)}
                  >
                    <img
                      src={movie.poster_path ? `https://image.tmdb.org/t/p/w92${movie.poster_path}` : '/placeholder-poster.jpg'}
                      alt={movie.title}
                      className="search-result-poster"
                    />
                    <div className="search-result-info">
                      <h4>{movie.title}</h4>
                      <p>{movie.release_date ? movie.release_date.slice(0, 4) : 'N/A'}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="search-no-results">No movies found</div>
              )}
            </div>
          )}
        </div>
        <p>Children</p>
        <img src={bell_icon} alt=""  className='icons'/>

        <div className="navbar-profile">
          <img src={profile_icon} alt=""  className='profile'/>
          <img src={caret_icon} alt=""  className='profile'/>
          <div className="dropdown">
            <p onClick={()=>{logout()}}>Sign Out</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
