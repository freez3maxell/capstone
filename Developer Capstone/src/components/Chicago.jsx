function Chicago() {
    return (
        <article className="chicago-section-container" aria-label="About Little Lemon Chicago">
            <div className="chicago-section container text-start d-flex justify-content-between m-auto">
                <article className="d-flex flex-column align-items-center align-items-md-start">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a
                        modern twist.</p>
                    <button aria-label="Reserve a Table" onClick={() => window.location.href = '/booking'}>Reserve a Table</button>                </article>
                <figure className="image-container d-none d-md-block">
                    <img className="obj" src="/assets/restauranfood.jpg" alt="restaurant food" />
                    <figcaption className="visually-hidden">Restaurant food at Little Lemon Chicago</figcaption>
                </figure>
            </div>
        </article>
    )
}

export default Chicago;
