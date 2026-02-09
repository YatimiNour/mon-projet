import { useState } from "react";
import { useLocation } from "react-router-dom";

function Rater() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    commentaire: "",
  });

  const [comments, setComments] = useState([]);

  // Si tu passes un plat via navigate ou state
  const location = useLocation();
  const platChoisi = location.state?.platNom || ""; // récupère le plat choisi depuis Plats.jsx

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.nom && formData.prenom && formData.commentaire) {
      setComments([...comments, { ...formData, plat: platChoisi }]);
      setFormData({ nom: "", prenom: "", commentaire: "" });
    }
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4">Ratez les plats!</h2>

      {platChoisi && (
        <div className="mb-4 p-3 bg-light border rounded">
          <strong>Plat sélectionné :</strong> {platChoisi}
        </div>
      )}

      {/* Formulaire */}
      <form onSubmit={handleSubmit} className="mb-5">
        <div className="mb-3">
          <label className="form-label">Nom</label>
          <input
            type="text"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            className="form-control"
            placeholder="Entrez votre nom"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Prénom</label>
          <input
            type="text"
            name="prenom"
            value={formData.prenom}
            onChange={handleChange}
            className="form-control"
            placeholder="Entrez votre prénom"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Commentaire</label>
          <textarea
            name="commentaire"
            value={formData.commentaire}
            onChange={handleChange}
            className="form-control"
            rows="3"
            placeholder="Votre commentaire..."
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Envoyer
        </button>
      </form>

      {/* Liste des commentaires */}
      <div className="comments">
        {comments.map((c, index) => (
          <div
            key={index}
            className="d-flex align-items-start mb-3 p-3 border rounded shadow-sm bg-light"
          >
            <img
              src={`https://ui-avatars.com/api/?name=${c.nom}+${c.prenom}`}
              alt="user"
              className="rounded-circle me-3"
              width="50"
              height="50"
            />
            <div>
              <strong>{c.nom} {c.prenom}</strong>
              {c.plat && <p className="mb-1"><em>Plat : {c.plat}</em></p>}
              <p className="mb-0">{c.commentaire}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rater;
