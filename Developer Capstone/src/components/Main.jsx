export default function Main() {
    return (
        <main>
            <div className="first-section-container">
                <section className="first-section text-start d-flex justify-content-between m-auto">
                    <div>
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                        <button>Reserve a Table</button>
                    </div>
                    <div className="image-container">
                        <img className="obj" src="../../public/assets/restauranfood.jpg" alt="restaurant food" />
                    </div>
                </section>
            </div>

            <section className="second-section">
                <div className="second-section-head d-flex justify-content-between m-auto">
                    <h2>This weeks specials!</h2>
                    <button>Online Menu</button>
                </div>

                <div>
                    <div>
                        <img src="../../public/assets/greek%20salad.jpg" alt="Greek salad" />
                        <div>
                            <div>
                                <h3>Greek salad</h3>
                                <span>$12.99</span>
                            </div>
                            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                            <span>Order a delivery 🚚</span>
                        </div>
                    </div>
                    <div>
                        <img src="/assets/bruschetta.jpg" alt="Bruschetta" />
                        <div>
                            <div>
                                <h3>Bruschetta</h3>
                                <span>$5.89</span>
                            </div>
                            <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                            <span>Order a delivery 🚚</span>
                        </div>
                    </div>
                    <div>
                        <img src="/assets/lemon-dessert.jpg" alt="Lemon Dessert" />
                        <div>
                            <div>
                                <h3>Lemon Dessert</h3>
                                <span>$5.00</span>
                            </div>
                            <p>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                            <span>Order a delivery 🚚</span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}