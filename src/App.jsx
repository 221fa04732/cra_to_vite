import './App.css';

function App() {
  return (
    <section className="intro-section">
    <div className="intro-box">
      <h1 className="intro-title">Modernized with Vite</h1>
      <p className="intro-text">
        Our website has transitioned from <strong>Create React App</strong> to <strong>Vite</strong> for a faster, cleaner, and more efficient developer experience.
      </p>
      <p className="intro-text">
        Explore the docs to learn more about the tools powering this transformation.
      </p>
      <div className="intro-links">
        <a
          href="https://create-react-app.dev/docs/getting-started"
          target="_blank"
          rel="noopener noreferrer"
          className="intro-doc-button"
        >
          CRA Docs
        </a>
        <a
          href="https://vite.dev/guide/"
          target="_blank"
          rel="noopener noreferrer"
          className="intro-doc-button"
        >
          Vite Docs
        </a>
      </div>
    </div>
  </section>
  );
}

export default App;
