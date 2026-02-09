function Plats() {

  const plats = [
    {
      id: 1,
      nom: "Pizza Margherita",
      img: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143"
    },
    {
      id: 2,
      nom: "Pasta Carbonara",
      img: "https://images.unsplash.com/photo-1525755662778-989d0524087e"
    },
    {
      id: 3,
      nom: "Burger Maison",
      img: "https://images.unsplash.com/photo-1550547660-d9450f859349"
    },
    {
      id: 4,
      nom: "Tacos Poulet",
      img: "https://images.pexels.com/photos/35346016/pexels-photo-35346016.jpeg"
    },
    {
      id: 5,
      nom: "Couscous Royal",
      img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d"
    },
    {
      id: 6,
      nom: "Salade César",
      img: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9"
    }
  ];

  return (
    <div className="container-fluid px-5">
      <div className="row justify-content-center">
        {plats.map((plat) => (
          <div
            key={plat.id}
            className="col-lg-4 col-md-6 mb-5 d-flex justify-content-center"
          >
            <div
              className="card shadow-lg rounded-4"
              style={{ width: "280px" }}
            >
              <img
                src={plat.img}
                alt={plat.nom}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderTopLeftRadius: "1rem",
                  borderTopRightRadius: "1rem"
                }}
              />

              <div className="card-body text-center d-flex flex-column">
                <h5 className="card-title mb-3">{plat.nom}</h5>

                <div className="mb-3">
                  <span className="text-warning fs-5">★★★★★</span>
                </div>

                <button className="btn btn-primary mt-auto">
                  Ratez
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Plats;
