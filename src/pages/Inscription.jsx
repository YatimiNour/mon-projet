function Inscription() {
  return (
    <div className="card p-4 shadow-sm">
      <h2 className="mb-4">Inscription</h2>

      <div className="mb-3">
        <label className="form-label">Nom</label>
        <input className="form-control" type="text" />
      </div>

      <div className="mb-3">
        <label className="form-label">Email</label>
        <input className="form-control" type="email" />
      </div>

      <div className="mb-3">
        <label className="form-label">Mot de passe</label>
        <input className="form-control" type="password" />
      </div>

      <button className="btn btn-primary w-100">S'inscrire</button>
    </div>
  )
}

export default Inscription
