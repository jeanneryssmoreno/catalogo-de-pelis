

const movies = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    year: 1994,
    genre: "Drama",
    genreClass: "drama",
    rating: 9.3,
    poster: "https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
    featured: true,
    gridClass: "grid-hero" // 2x2 - HERO destacado principal
  },
  {
    id: 2,
    title: "The Godfather",
    year: 1972,
    genre: "Crimen",
    genreClass: "crime",
    rating: 9.2,
    poster: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    gridClass: "grid-normal" // 1x1
  },
  {
    id: 3,
    title: "The Dark Knight",
    year: 2008,
    genre: "Acción",
    genreClass: "action",
    rating: 9.0,
    poster: "https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
    gridClass: "grid-tall" // 1x2 - Vertical
  },
  {
    id: 4,
    title: "Pulp Fiction",
    year: 1994,
    genre: "Crimen",
    genreClass: "crime",
    rating: 8.9,
    poster: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    gridClass: "grid-normal" // 1x1
  },
  {
    id: 5,
    title: "Forrest Gump",
    year: 1994,
    genre: "Drama",
    genreClass: "drama",
    rating: 8.8,
    poster: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
    gridClass: "grid-normal" // 1x1
  },
  {
    id: 6,
    title: "Inception",
    year: 2010,
    genre: "Sci-Fi",
    genreClass: "scifi",
    rating: 8.8,
    poster: "https://image.tmdb.org/t/p/w500/ljsZTbVsrQSqZgWeep2B1QiDKuh.jpg",
    gridClass: "grid-wide" // 2x1 - Horizontal destacado
  },
  {
    id: 7,
    title: "Interstellar",
    year: 2014,
    genre: "Sci-Fi",
    genreClass: "scifi",
    rating: 8.6,
    poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    gridClass: "grid-tall" // 1x2 - Vertical
  },
  {
    id: 8,
    title: "Fight Club",
    year: 1999,
    genre: "Drama",
    genreClass: "drama",
    rating: 8.8,
    poster: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
    gridClass: "grid-normal" // 1x1
  },
  {
    id: 9,
    title: "The Matrix",
    year: 1999,
    genre: "Sci-Fi",
    genreClass: "scifi",
    rating: 8.7,
    poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    gridClass: "grid-normal" // 1x1
  },
  {
    id: 10,
    title: "Parasite",
    year: 2019,
    genre: "Thriller",
    genreClass: "thriller",
    rating: 8.6,
    poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    gridClass: "grid-normal" // 1x1
  },
  {
    id: 11,
    title: "Gladiator",
    year: 2000,
    genre: "Acción",
    genreClass: "action",
    rating: 8.5,
    poster: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    gridClass: "grid-wide" // 2x1 - Horizontal destacado
  },
  {
    id: 12,
    title: "The Prestige",
    year: 2006,
    genre: "Thriller",
    genreClass: "thriller",
    rating: 8.5,
    poster: "https://image.tmdb.org/t/p/w500/tRNlZbgNCNOpLpbPEz5L8G8A0JN.jpg",
    gridClass: "grid-normal" // 1x1
  },
  {
    id: 13,
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
    genre: "Aventura",
    genreClass: "action",
    rating: 8.9,
    poster: "https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
    gridClass: "grid-tall" // 1x2 - Vertical
  },
  {
    id: 14,
    title: "Goodfellas",
    year: 1990,
    genre: "Crimen",
    genreClass: "crime",
    rating: 8.7,
    poster: "https://image.tmdb.org/t/p/w500/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
    gridClass: "grid-normal" // 1x1
  },
  {
    id: 15,
    title: "The Silence of the Lambs",
    year: 1991,
    genre: "Thriller",
    genreClass: "thriller",
    rating: 8.6,
    poster: "https://image.tmdb.org/t/p/w500/uS9m8OBk1A8eM9I042bx8XXpqAq.jpg",
    gridClass: "grid-normal" // 1x1
  },
  {
    id: 16,
    title: "Saving Private Ryan",
    year: 1998,
    genre: "Drama",
    genreClass: "drama",
    rating: 8.6,
    poster: "https://image.tmdb.org/t/p/w500/uqx37cS8cpHg8U35f9U5IBlrCV3.jpg",
    gridClass: "grid-wide" // 2x1 - Horizontal destacado
  },
  {
    id: 17,
    title: "The Green Mile",
    year: 1999,
    genre: "Drama",
    genreClass: "drama",
    rating: 8.6,
    poster: "https://image.tmdb.org/t/p/w500/velWPhVMQeQKcxggNEU8YmIo52R.jpg",
    gridClass: "grid-normal" // 1x1
  },
  {
    id: 18,
    title: "Se7en",
    year: 1995,
    genre: "Thriller",
    genreClass: "thriller",
    rating: 8.6,
    poster: "https://image.tmdb.org/t/p/w500/6yoghtyTpznpBik8EngEmJskVUO.jpg",
    gridClass: "grid-normal" // 1x1
  },
  {
    id: 19,
    title: "The Departed",
    year: 2006,
    genre: "Crimen",
    genreClass: "crime",
    rating: 8.5,
    poster: "https://image.tmdb.org/t/p/w500/nT97ifVT2J1yMQmeq20Qblg61T.jpg",
    gridClass: "grid-normal" // 1x1
  },
  {
    id: 20,
    title: "Whiplash",
    year: 2014,
    genre: "Drama",
    genreClass: "drama",
    rating: 8.5,
    poster: "https://image.tmdb.org/t/p/w500/7fn624j5lj3xTme2SgiLCeuedmO.jpg",
    gridClass: "grid-normal" // 1x1
  }
];

// ========================================
// RENDER MOVIES
// ========================================

/**
 * Generate HTML for a single movie card
 * @param {Object} movie - Movie data object
 * @param {boolean} isGrid - Whether this is for grid layout
 * @returns {string} HTML string for the movie card
 */
function createMovieCardHTML(movie, isGrid = false) {
  const gridClassAttr = isGrid && movie.gridClass ? ` ${movie.gridClass}` : '';
  const featuredBadge = isGrid && movie.featured 
    ? '<span class="featured-badge">MÁS VISTA</span>' 
    : '';
  
  return `
    <article class="movie-card${gridClassAttr}">
      <div class="movie-poster-container">
        <img
          src="${movie.poster}"
          alt="Poster de la película ${movie.title}"
          class="movie-poster"
          loading="lazy"
        />
        <div class="movie-overlay">
          <button
            class="play-button"
            aria-label="Reproducir ${movie.title}"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      </div>
      <div class="movie-info">
        ${featuredBadge}
        <h3 class="movie-title">${movie.title}</h3>
        <div class="movie-meta">
          <span class="movie-year">${movie.year}</span>
          <span class="genre-badge ${movie.genreClass}">${movie.genre}</span>
          <span class="movie-rating">
            <svg
              class="star-icon"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
              />
            </svg>
            ${movie.rating}
          </span>
        </div>
      </div>
    </article>
  `;
}

/**
 * Render all movies into the catalog containers
 */
function renderMovies() {
  const flexContainer = document.querySelector('#flexbox-panel .catalog-flex');
  const gridContainer = document.querySelector('#grid-panel .catalog-grid');
  
  if (!flexContainer || !gridContainer) {
    console.error('Catalog containers not found');
    return;
  }
  
  // Clear existing content
  flexContainer.innerHTML = '';
  gridContainer.innerHTML = '';
  
  // Render movies for both layouts
  movies.forEach(movie => {
    flexContainer.innerHTML += createMovieCardHTML(movie, false);
    gridContainer.innerHTML += createMovieCardHTML(movie, true);
  });
  
  console.log(`✅ Rendered ${movies.length} movies`);
}

// ========================================
// TAB SWITCHING FUNCTIONALITY
// ========================================

/**
 * Initialize tab switching functionality
 */
function initTabSwitching() {
  const tabButtons = document.querySelectorAll(".tab-button");
  const catalogSections = document.querySelectorAll(".catalog-section");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      switchTab(button, tabButtons, catalogSections);
    });

    // Keyboard navigation support
    button.addEventListener("keydown", (e) => {
      handleTabKeyboard(e, button, tabButtons, catalogSections);
    });
  });
}

/**
 * Switch to the selected tab
 * @param {HTMLElement} selectedButton - The clicked tab button
 * @param {NodeList} allButtons - All tab buttons
 * @param {NodeList} allSections - All catalog sections
 */
function switchTab(selectedButton, allButtons, allSections) {
  const targetTab = selectedButton.dataset.tab;

  // Remove active class from all buttons
  allButtons.forEach((btn) => {
    btn.classList.remove("active");
    btn.setAttribute("aria-selected", "false");
  });

  // Add active class to selected button
  selectedButton.classList.add("active");
  selectedButton.setAttribute("aria-selected", "true");

  // Hide all sections
  allSections.forEach((section) => {
    section.classList.remove("active");
    section.setAttribute("aria-hidden", "true");
  });

  // Show selected section
  const targetSection = document.getElementById(`${targetTab}-panel`);
  if (targetSection) {
    targetSection.classList.add("active");
    targetSection.setAttribute("aria-hidden", "false");

    // Update dynamic branding
    updateBranding(targetTab);

    // Announce to screen readers
    announceTabChange(targetTab);
  }
}

/**
 * Update dynamic logo branding based on active tab
 * @param {string} tabName - Name of the active tab ('flexbox' or 'grid')
 */
function updateBranding(tabName) {
  const logoDynamic = document.getElementById("logo-dynamic");
  
  if (!logoDynamic) return;
  
  if (tabName === "flexbox") {
    logoDynamic.textContent = "FLEX";
    logoDynamic.style.color = "var(--color-flex)"; // Cyan
  } else if (tabName === "grid") {
    logoDynamic.textContent = "GRID";
    logoDynamic.style.color = "var(--color-grid)"; // Green
  }
}

/**
 * Handle keyboard navigation for tabs
 * @param {KeyboardEvent} e - The keyboard event
 * @param {HTMLElement} currentButton - Current focused button
 * @param {NodeList} allButtons - All tab buttons
 * @param {NodeList} allSections - All catalog sections
 */
function handleTabKeyboard(e, currentButton, allButtons, allSections) {
  const buttonsArray = Array.from(allButtons);
  const currentIndex = buttonsArray.indexOf(currentButton);

  let targetIndex = currentIndex;

  // Arrow key navigation
  if (e.key === "ArrowRight" || e.key === "ArrowDown") {
    e.preventDefault();
    targetIndex = (currentIndex + 1) % buttonsArray.length;
  } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
    e.preventDefault();
    targetIndex =
      (currentIndex - 1 + buttonsArray.length) % buttonsArray.length;
  } else if (e.key === "Home") {
    e.preventDefault();
    targetIndex = 0;
  } else if (e.key === "End") {
    e.preventDefault();
    targetIndex = buttonsArray.length - 1;
  }

  // Switch to target tab and focus
  if (targetIndex !== currentIndex) {
    const targetButton = buttonsArray[targetIndex];
    switchTab(targetButton, allButtons, allSections);
    targetButton.focus();
  }
}

/**
 * Announce tab change to screen readers
 * @param {string} tabName - Name of the activated tab
 */
function announceTabChange(tabName) {
  const announcement = document.createElement("div");
  announcement.setAttribute("role", "status");
  announcement.setAttribute("aria-live", "polite");
  announcement.className = "visually-hidden";
  announcement.textContent = `Mostrando layout ${tabName === "flexbox" ? "Flexbox" : "Grid"}`;

  document.body.appendChild(announcement);

  // Remove after announcement
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
}

// ========================================
// SEARCH FUNCTIONALITY (BONUS)
// ========================================

/**
 * Initialize search functionality
 */
function initSearch() {
  const searchInput = document.getElementById("search-input");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const searchTerm = e.target.value.toLowerCase().trim();
      filterMovies(searchTerm);
    });
  }
}

/**
 * Filter movies based on search term
 * @param {string} searchTerm - The search query
 */
function filterMovies(searchTerm) {
  const allMovieCards = document.querySelectorAll(".movie-card");

  allMovieCards.forEach((card) => {
    const title = card.querySelector(".movie-title").textContent.toLowerCase();
    const year = card.querySelector(".movie-year").textContent.toLowerCase();
    const genre = card.querySelector(".genre-badge").textContent.toLowerCase();

    const matches =
      title.includes(searchTerm) ||
      year.includes(searchTerm) ||
      genre.includes(searchTerm);

    if (matches || searchTerm === "") {
      card.style.display = "";
      card.style.animation = "fadeIn 0.3s ease";
    } else {
      card.style.display = "none";
    }
  });
}

// ========================================
// SMOOTH SCROLL FOR SKIP LINK
// ========================================

/**
 * Initialize smooth scroll for skip link
 */
function initSkipLink() {
  const skipLink = document.querySelector(".skip-link");

  if (skipLink) {
    skipLink.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = skipLink.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.focus();
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }
}

// ========================================
// MOVIE CARD INTERACTIONS
// ========================================

/**
 * Add interaction effects to movie cards
 */
function initMovieCardInteractions() {
  const movieCards = document.querySelectorAll(".movie-card");

  movieCards.forEach((card) => {
    // Add keyboard support for play button
    const playButton = card.querySelector(".play-button");

    if (playButton) {
      playButton.addEventListener("click", (e) => {
        e.stopPropagation();
        handlePlayMovie(card);
      });

      playButton.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          e.stopPropagation();
          handlePlayMovie(card);
        }
      });
    }

    // Make entire card clickable
    card.addEventListener("click", () => {
      handlePlayMovie(card);
    });

    // Keyboard support for cards
    card.setAttribute("tabindex", "0");
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handlePlayMovie(card);
      }
    });
  });
}

/**
 * Handle play movie action
 * @param {HTMLElement} card - The movie card element
 */
function handlePlayMovie(card) {
  const title = card.querySelector(".movie-title").textContent;

  // Create a visual feedback
  const playButton = card.querySelector(".play-button");
  if (playButton) {
    playButton.style.transform = "scale(1.3)";
    setTimeout(() => {
      playButton.style.transform = "";
    }, 200);
  }

  // In a real application, this would open a video player
  console.log(`Playing: ${title}`);

  // Show a simple alert (can be replaced with a modal in production)
  showNotification(`Reproduciendo: ${title}`);
}

/**
 * Show a notification message
 * @param {string} message - The notification message
 */
function showNotification(message) {
  // Check if notification already exists
  let notification = document.querySelector(".notification");

  if (!notification) {
    notification = document.createElement("div");
    notification.className = "notification";
    notification.style.cssText = `
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            background: linear-gradient(135deg, #e50914 0%, #b20710 100%);
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
            font-family: var(--font-primary);
            font-weight: 600;
            z-index: 10000;
            animation: slideIn 0.3s ease;
        `;
    document.body.appendChild(notification);
  }

  notification.textContent = message;
  notification.style.display = "block";

  // Auto-hide after 3 seconds
  setTimeout(() => {
    notification.style.animation = "slideOut 0.3s ease";
    setTimeout(() => {
      notification.style.display = "none";
    }, 300);
  }, 3000);
}

// Add notification animations
const style = document.createElement("style");
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ========================================
// INITIALIZATION
// ========================================

/**
 * Initialize all functionality when DOM is ready
 */
document.addEventListener("DOMContentLoaded", () => {
  console.log("🎬 CineMax - Initializing...");

  // Render movies first
  renderMovies();

  // Initialize core features
  initTabSwitching();
  initSearch();
  initSkipLink();
  initMovieCardInteractions();
  initSkeletonLoading();

  console.log("✅ CineMax - Ready!");
  console.log("💡 Tip: Use arrow keys to navigate between tabs");
});

// ========================================
// SKELETON LOADING
// ========================================

/**
 * Initialize skeleton loading effect
 * Simulates content loading by removing skeleton after delay
 */
function initSkeletonLoading() {
  const movieCards = document.querySelectorAll(".movie-card");
  
  movieCards.forEach((card, index) => {
    // Stagger the loading effect
    const delay = 300 + (index * 50); // 300ms base + 50ms per card
    
    setTimeout(() => {
      card.classList.add("loaded");
    }, delay);
  });
}

// ========================================
// PERFORMANCE OPTIMIZATION
// ========================================

/**
 * Lazy load images when they come into viewport
 */
if ("IntersectionObserver" in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src || img.src;
        img.classList.add("loaded");
        observer.unobserve(img);
      }
    });
  });

  // Observe all movie posters
  document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".movie-poster");
    images.forEach((img) => imageObserver.observe(img));
  });
}
