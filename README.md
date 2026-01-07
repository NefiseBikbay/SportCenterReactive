# Sport Center Project With React


A dynamic and responsive single-page application for a modern sports center, built with **React 19** and **Vite**. This project demonstrates a component-based architecture with interactive features like a real-time BMI calculator and a tabbed class schedule.


[**Local Preview**](https://nefisebikbay.github.io/SportCenterReactive/)
<img width="1454" height="819" alt="Ekran Resmi 2026-01-07 15 49 02" src="https://github.com/user-attachments/assets/2ddcabad-4ee7-40aa-aea3-a2b9a96a6e44" />


## 🚀Features

Interactive BMI Calculator
- **Real-time Logic**: Calculates Body Mass Index instantly as users input height and weight.
- **Visual Feedback**: Features a dynamic arrow indicator that moves across a BMI chart image to visually represent the user's health category (Underweight, Normal, Overweight, Obese, Extremely Obese).
- **Implementation**: Uses `useRef` to manipulate the DOM arrow position based on calculated values.

Dynamic Class Schedule
- **Tabbed Interface**: Users can seamlessly switch between different class categories (Yoga, Group, Solo, Stretching) without page reloads.
- **State Management**: specific `activeTab` state controls the visibility of content.

Responsive & Interactive Navigation
- **Scroll Awareness**: The navigation bar changes style (background color) upon scrolling using a custom `useEffect` hook.
- **Mobile Menu**: A fully functional hamburger menu implemented for mobile devices (576px breakpoint).

Trainer Profiles
- A dedicated section showcasing trainers with hover effects and detailed information.

  
## 🛠️Technologies Used

### Core Stack
- **React 19**: Utilizing Functional Components and Hooks (`useState`, `useEffect`, `useRef`).
- **Vite**: For fast development server.
- **JavaScript (ES6+)**: Modern JavaScript syntax.

### Styling
- **CSS3**: Modular CSS architecture (`src/css/section/`, `src/css/layouts/`).
- **Bootstrap Icons**: For consistent and scalable iconography.
- **Google Fonts**: Integrated for typography.

## Project Structure

```bash
src/
├── assets/          # Static images and icons
├── components/      # React components (Header, content logic)
│   ├── Bmi.jsx      # BMI Calculator logic
│   ├── Classes.jsx  # Schedule tab logic
│   ├── Header.jsx   # Navigation & scroll logic
│   └── ...
├── css/             # Stylesheets modularized by section
│   ├── layouts/     # Header, Footer styles
│   └── section/     # Home, Contact, Trainers styles
├── App.jsx          # Main application layout
└── main.jsx         # Entry point
```
