import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Welcome to My First Static Web App</h1>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="home">
          <h2>Home</h2>
          <p>This is the home section of the web app.</p>
        </section>
        <section id="about">
          <h2>About</h2>
          <p>This is the about section where you can learn more about the app.</p>
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <p>This is the contact section to get in touch with us.</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 My First Static Web App</p>
      </footer>
    </div>
  );
}

export default App;
