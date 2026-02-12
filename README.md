# CineMax - Catálogo de Películas 🎬

![CineMax Logo](https://img.shields.io/badge/CineMax-Flexbox%20vs%20Grid-e50914?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

Proyecto educativo que demuestra las diferencias entre **Flexbox** y **CSS Grid** mediante un catálogo de películas con diseño inspirado en Netflix.

---

## 📋 Descripción

CineMax es una aplicación web responsive que presenta un catálogo de 12 películas populares con dos implementaciones de layout diferentes:

- **Flexbox Layout**: Cards con bordes redondeados y efecto de elevación
- **Grid Layout**: Cards con bordes rectos y efecto de brillo rojizo

El proyecto utiliza HTML semántico, CSS moderno con custom properties, y JavaScript vanilla para crear una experiencia de usuario premium y accesible.

---

## 🚀 Cómo Ejecutar

### Opción 1: Abrir Directamente

1. Descarga o clona este repositorio
2. Navega hasta la carpeta del proyecto
3. Abre el archivo `index.html` en tu navegador favorito

### Opción 2: Live Server (Recomendado)

1. Instala la extensión [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) en VS Code
2. Abre la carpeta del proyecto en VS Code
3. Click derecho en `index.html` → "Open with Live Server"
4. El navegador se abrirá automáticamente en `http://localhost:5500`

### Opción 3: Servidor HTTP Simple

```bash
# Python 3
python -m http.server 8000

# Node.js (con http-server instalado)
npx http-server -p 8000
```

Luego abre `http://localhost:8000` en tu navegador.

---

## 📁 Estructura del Proyecto

```
jeannerys-moreno-grid-flex/
├── index.html          # Estructura HTML semántica
├── styles.css          # Estilos con diseño Netflix
├── app.js              # Lógica de interacción
├── README.md           # Este archivo

```

---

## ✨ Características Implementadas

### ✅ Requisitos Obligatorios

- [x] Estructura HTML semántica con `<header>`, `<main>`, `<footer>`
- [x] Sistema de tabs funcional (Flexbox / Grid)
- [x] 12 películas con poster, título, año, género y rating
- [x] Diseño responsive mobile-first
- [x] Breakpoints: móvil (1 col), tablet (2 cols), desktop (4 cols)
- [x] Dos implementaciones de layout visualmente diferentes
- [x] Accesibilidad WCAG 2.1 AA completa

### 🎁 Características Bonus

- [x] Búsqueda en tiempo real por título, año o género
- [x] Animaciones suaves y transiciones
- [x] Navegación por teclado (flechas, Tab, Enter)
- [x] Efectos hover premium
- [x] Notificaciones visuales
- [x] Skip-to-content link para accesibilidad
- [x] Lazy loading de imágenes

---

## 🎨 Capturas de Pantalla

### movile - Flexbox Layout
![Captura de pantalla 2026-02-12 144802](https://github.com/user-attachments/assets/f3fc11e2-e50b-42bb-b92e-5b1b554ab944)


### Desktop - Grid Layout
![Captura de pantalla 2026-02-12 144914](https://github.com/user-attachments/assets/6e32bf15-b8d3-4a27-9cc2-9d3c07a92f2c)

---

## 🔍 Flexbox vs Grid: 3 Diferencias Clave

### 1. **Control de Distribución**

**Flexbox:**

```css
.catalog-flex {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.catalog-flex .movie-card {
  flex: 1 1 calc(25% - 1.5rem);
}
```

- **Ventaja**: Flexbox es unidimensional (fila o columna)
- **Uso ideal**: Cuando necesitas que los elementos se ajusten dinámicamente al espacio disponible
- **En este proyecto**: Las cards se distribuyen automáticamente y se adaptan si hay espacio irregular

**Grid:**

```css
.catalog-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}
```

- **Ventaja**: Grid es bidimensional (filas Y columnas simultáneamente)
- **Uso ideal**: Cuando necesitas control preciso sobre filas y columnas
- **En este proyecto**: Las cards mantienen una cuadrícula perfecta sin importar el contenido

---

### 2. **Alineación y Espaciado**

**Flexbox:**

- Usa `justify-content` para el eje principal
- Usa `align-items` para el eje transversal
- El gap se aplica entre elementos flexibles
- **Resultado**: Más flexible pero requiere más cálculos para layouts complejos

**Grid:**

- Usa `justify-items` y `align-items` para celdas individuales
- Usa `justify-content` y `align-content` para toda la cuadrícula
- El gap se aplica entre filas y columnas
- **Resultado**: Control más granular y predecible

---

### 3. **Comportamiento Responsive**

**Flexbox:**

```css
@media (min-width: 768px) {
  .catalog-flex .movie-card {
    flex: 1 1 calc(50% - 1.5rem);
  }
}
```

- Requiere cambiar el `flex-basis` en cada breakpoint
- Los elementos se "envuelven" naturalmente
- **Ventaja**: Más fluido en transiciones entre tamaños

**Grid:**

```css
@media (min-width: 768px) {
  .catalog-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

- Solo necesitas cambiar `grid-template-columns`
- La cuadrícula se reconstruye completamente
- **Ventaja**: Código más limpio y mantenible

---

## ♿ Accesibilidad

Este proyecto implementa accesibilidad completa según WCAG 2.1 AA:

- ✅ **Navegación por teclado**: Tab, flechas, Enter, Space
- ✅ **ARIA labels**: `role="tablist"`, `aria-selected`, `aria-hidden`
- ✅ **Focus visible**: Indicadores claros con outline rojo
- ✅ **Alt text**: Descripciones detalladas en todas las imágenes
- ✅ **Contraste de color**: Mínimo 4.5:1 en todo el texto
- ✅ **Skip link**: Saltar al contenido principal
- ✅ **Jerarquía semántica**: H1 → H2 → H3 correcta
- ✅ **Anuncios a lectores de pantalla**: Cambios de estado comunicados

---

## 🎯 Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**:
  - Custom Properties (variables CSS)
  - Flexbox y Grid
  - Media Queries
  - Transitions y Animations
  - Glassmorphism
- **JavaScript (Vanilla)**:
  - Event Listeners
  - DOM Manipulation
  - Keyboard Navigation
  - Intersection Observer (lazy loading)
- **Google Fonts**: Inter y Outfit
- **TMDB Images**: Posters de películas reales

---

## 🎨 Paleta de Colores (Netflix-Inspired)

```css
--color-netflix-red: #e50914; /* Rojo principal */
--color-bg-primary: #141414; /* Fondo oscuro */
--color-bg-card: #2a2a2a; /* Fondo de cards */
--color-text-primary: #ffffff; /* Texto principal */
--color-text-secondary: #b3b3b3; /* Texto secundario */
```

---

## 🧪 Testing

### Navegadores Probados

- ✅ Chrome/Edge (Chromium)
- ✅ Firefox
- ✅ Safari (WebKit)

### Dispositivos Probados

- ✅ Desktop (1920x1080)
- ✅ Tablet (768x1024)
- ✅ Mobile (375x667)

### Validación

- ✅ HTML válido (W3C Validator)
- ✅ CSS válido
- ✅ Accesibilidad verificada (Lighthouse)

---

## 📚 Aprendizajes Clave

1. **Flexbox es mejor para**:
   - Componentes unidimensionales (navbar, cards en fila)
   - Layouts que necesitan adaptarse dinámicamente
   - Alineación de elementos en un eje

2. **Grid es mejor para**:
   - Layouts bidimensionales complejos
   - Galerías y cuadrículas perfectas
   - Cuando necesitas control preciso de filas y columnas

3. **Ambos pueden combinarse**:
   - Grid para el layout principal
   - Flexbox para componentes internos
   - No son excluyentes, son complementarios

---

## 👨‍💻 Autor

**Jeannerys Moreno**  
Proyecto educativo - Intensivo Spartan Tasks  
Práctica Final CSS: Flexbox vs Grid

