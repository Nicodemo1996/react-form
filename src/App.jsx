import { useState } from "react";

export default function App() {
  const [articles, setArticles] = useState([
    { id: 1, title: "Manifestazione pro Palestina" },
    { id: 2, title: "Firenze" },
    { id: 3, title: "Milan campione d'Italia" },
  ]);

  const [newTitle, setNewTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTitle.trim() === "") return;

    const newArticle = {
      id: Date.now(),
      title: newTitle,
    };

    setArticles([...articles, newArticle]);
    setNewTitle("");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#87CEEB",
        color: "#000000",
        fontFamily: "sans-serif",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "30px 40px",
          borderRadius: "12px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
          width: "100%",       // adatta alla larghezza del viewport
          maxWidth: "500px",   // ma non troppo larga su schermi grandi
          textAlign: "center",
        }}
      >
        <h1 style={{ marginBottom: "20px" }}> ItalyForum</h1>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          style={{
            marginBottom: "20px",
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            flexWrap: "wrap",  // rende responsivo l'input e il bottone
          }}
        >
          <input
            type="text"
            placeholder="Scrivi il titolo..."
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            style={{
              padding: "8px",
              flex: "1 1 200px", // cresce e riduce in base allo spazio
              border: "1px solid #ccc",
              borderRadius: "6px",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "8px 16px",
              border: "none",
              backgroundColor: "#007bff",
              color: "white",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Aggiungi
          </button>
        </form>

        {/* LISTA ARTICOLI */}
        <ul style={{ listStyle: "none", padding: 0, textAlign: "left" }}>
          {articles.map((article) => (
            <li
              key={article.id}
              style={{
                backgroundColor: "white",
                padding: "10px",
                borderRadius: "6px",
                marginBottom: "8px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              }}
            >
              {article.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
