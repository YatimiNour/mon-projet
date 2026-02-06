import { useState } from "react";

function Inscription() {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [mdp, setMdp] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation nom
    if (nom.trim() === "") {
      setError("Le nom ne doit pas être vide");
      return;
    }

    // Validation email
    if (!email.endsWith("@gmail.com")) {
      setError("L'email doit se terminer par @gmail.com");
      return;
    }

    // Validation mot de passe majuscule
    if (mdp !== mdp.toUpperCase()) {
      setError("Le mot de passe doit être en MAJUSCULES");
      return;
    }

    setError("");
    alert("Inscription réussie ✅");
    // ici tu peux envoyer les données au backend
  };

  return (
    <div className="card p-4 shadow-sm">
      <h2 className="mb-4">Inscription</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nom</label>
          <input
            className="form-control"
            type="text"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            className="form-control"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Mot de passe</label>
          <input
            className="form-control"
            type="password"
            value={mdp}
            onChange={(e) => setMdp(e.target.value)}
          />
        </div>

        {error && <p className="text-danger">{error}</p>}

        <button className="btn btn-primary w-100" type="submit">
          S'inscrire
        </button>
      </form>
    </div>
  );
}

export default Inscription;
