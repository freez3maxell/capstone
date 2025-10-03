function Chicago() {
    return (
        <section className="chicago-section-container">
            <div className="chicago-section container text-start d-flex justify-content-between m-auto">
                <article className="d-flex flex-column align-items-center align-items-md-start">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a
                        modern twist.</p>
                    <button>Reserve a Table</button>
                </article>

                <div className="image-container d-none d-md-block">
                    <img className="obj" src="../../public/assets/restauranfood.jpg" alt="restaurant food"/>
                </div>
            </div>
        </section>
    )
}

export default Chicago;

