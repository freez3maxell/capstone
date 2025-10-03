const reviews = [
  {
    name: 'Janet Springs',
    date: '02/21/2024',
    img: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 5,
    text: 'Excellent meal, highly recommend the mac and cheese.'
  },
  {
    name: 'Mia Maria',
    date: '05/14/2024',
    img: 'https://randomuser.me/api/portraits/women/65.jpg',
    rating: 5,
    text: 'Both the Bruchetta and the Lemon Dessert were amazing!'
  },
  {
    name: 'Sara Lopez',
    date: '07/23/2024',
    img: 'https://randomuser.me/api/portraits/women/68.jpg',
    rating: 5,
    text: 'Brought my wife for our anniversary, we both loved everything.'
  },
  {
    name: 'mia Thompson',
    date: '01/05/2025',
    img: 'https://randomuser.me/api/portraits/women/69.jpg',
    rating: 4.5,
    text: 'The service was great! The food was incredible!'
  }
];

function CustomersSay() {
  return (
    <section className="customers-section py-5">
      <div className="container">
        <h2 className="text-center mb-5">Our customers love us!</h2>
        <div className="row justify-content-center">
          {reviews.map((review, idx) => (
            <div className="col-lg-3 col-md-6 col-12 mb-4 d-flex" key={idx}>
              <div className="card shadow-sm flex-fill">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-2">
                    <img src={review.img} alt={review.name} className="rounded-circle me-3" />
                    <div>
                      <h5 className="card-title mb-0">{review.name}</h5>
                      <small className="text-muted">{review.date}</small>
                    </div>
                  </div>
                  <div className="mb-2">
                    {[...Array(Math.floor(review.rating))].map((_, i) => (
                      <i className="bi bi-star-fill text-warning" key={i}></i>
                    ))}
                    {review.rating % 1 !== 0 && <i className="bi bi-star-half text-warning"></i>}
                  </div>
                  <p className="card-text">{review.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default CustomersSay;
