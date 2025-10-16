export default function Menu() {
    return (

        <main className="d-flex d-flex align-items-center justify-content-center" aria-label="Menu Main Content">
            <section aria-label="Menu Section" className="menu-main container">
                <article className="container specials-container py-4 mb-lg-5 px-0" aria-label="Specials Section">
                    <div className="row g-4">
                        <div className="recipe col-12 col-md-6 col-lg-4">
                            <div className="card h-100 shadow rounded-4 border-2">
                                <img src="/assets/greek salad.jpg"
                                     className="specials-card-image card-img-top rounded-top-4" alt="Greek Salad"/>
                                <div className="card-body d-flex flex-column justify-content-between">
                                    <div>
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <h3 className="fw-bold mb-0">Greek Salad</h3>
                                            <span className="fw-bold text-success fs-5">$12.99</span>
                                        </div>
                                        <p className="card-text text-secondary">
                                            The famous greek salad of crispy lettuce, peppers, olives and our Chicago
                                            style feta cheese, garnished with crunchy garlic and rosemary croutons.
                                        </p>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center mt-3">
                                        <button type="button"
                                                className="btn btn-warning fw-bold fs-5 w-100 d-flex align-items-center justify-content-center gap-2"
                                                aria-label="Order Delivery">
                                            Order Delivery
                                            <span className="fs-4"><i className="bi bi-car-front"></i></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="recipe col-12 col-md-6 col-lg-4">
                            <div className="card h-100 shadow rounded-4 border-2">
                                <img src="/assets/bruchetta.svg"
                                     className="specials-card-image card-img-top rounded-top-4" alt="Bruchetta"/>
                                <div className="card-body d-flex flex-column justify-content-between">
                                    <div>
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <h3 className="fw-bold mb-0">Bruchetta</h3>
                                            <span className="fw-bold text-success fs-5">$5.99</span>
                                        </div>
                                        <p className="card-text text-secondary">
                                            Our Bruschetta is made from grilled bread that has been smeared with garlic
                                            and seasoned with salt and olive oil.
                                        </p>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center mt-3">
                                        <button type="button"
                                                className="btn btn-warning fw-bold fs-5 w-100 d-flex align-items-center justify-content-center gap-2"
                                                aria-label="Order Delivery">
                                            Order Delivery
                                            <span className="fs-4"><i className="bi bi-car-front"></i></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="recipe col-12 col-md-6 col-lg-4">
                            <div className="card h-100 shadow rounded-4 border-2">
                                <img src="/assets/lemon dessert.jpg"
                                     className="specials-card-image card-img-top rounded-top-4" alt="Lemon Dessert"/>
                                <div className="card-body d-flex flex-column justify-content-between">
                                    <div>
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <h3 className="fw-bold mb-0">Lemon Dessert</h3>
                                            <span className="fw-bold text-success fs-5">$5.00</span>
                                        </div>
                                        <p className="card-text text-secondary">
                                            This comes straight from grandma's recipe book, every last ingredient has
                                            been sourced and is as authentic as can be imagined.
                                        </p>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center mt-3">
                                        <button type="button"
                                                className="btn btn-warning fw-bold fs-5 w-100 d-flex align-items-center justify-content-center gap-2"
                                                aria-label="Order Delivery">
                                            Order Delivery
                                            <span className="fs-4"><i className="bi bi-car-front"></i></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="recipe col-12 col-md-6 col-lg-4">
                            <div className="card h-100 shadow rounded-4 border-2">
                                <img src="/assets/caprese.webp"
                                     className="specials-card-image card-img-top rounded-top-4" alt="Caprese Salad"/>
                                <div className="card-body d-flex flex-column justify-content-between">
                                    <div>
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <h3 className="fw-bold mb-0">Caprese Salad</h3>
                                            <span className="fw-bold text-success fs-5">$10.99</span>
                                        </div>
                                        <p className="card-text text-secondary">
                                            A classic Italian salad featuring ripe tomatoes, creamy mozzarella, and
                                            fresh basil leaves. Drizzled with extra virgin olive oil and a touch of
                                            balsamic glaze, this refreshing dish is perfect as a starter or a light
                                            meal. The vibrant colors and flavors make it a favorite for summer
                                            gatherings and healthy eating. Enjoy the simplicity and elegance of
                                            authentic Mediterranean cuisine.
                                        </p>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center mt-3">
                                        <button type="button"
                                                className="btn btn-warning fw-bold fs-5 w-100 d-flex align-items-center justify-content-center gap-2"
                                                aria-label="Order Delivery">
                                            Order Delivery
                                            <span className="fs-4"><i className="bi bi-car-front"></i></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="recipe col-12 col-md-6 col-lg-4">
                            <div className="card h-100 shadow rounded-4 border-2">
                                <img src="/assets/MARGHERITA.jpg"
                                     className="specials-card-image card-img-top rounded-top-4" alt="Margherita Pizza"/>
                                <div className="card-body d-flex flex-column justify-content-between">
                                    <div>
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <h3 className="fw-bold mb-0">Margherita Pizza</h3>
                                            <span className="fw-bold text-success fs-5">$14.99</span>
                                        </div>
                                        <p className="card-text text-secondary">
                                            Our Margherita Pizza is a timeless favorite, topped with tangy tomato sauce,
                                            creamy mozzarella, and fragrant basil leaves. Baked to perfection in a
                                            wood-fired oven, the crispy crust and gooey cheese create a mouthwatering
                                            experience. Each bite delivers a harmonious blend of flavors that celebrates
                                            the essence of Italian tradition. Perfect for sharing or savoring solo.
                                        </p>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center mt-3">
                                        <button type="button"
                                                className="btn btn-warning fw-bold fs-5 w-100 d-flex align-items-center justify-content-center gap-2"
                                                aria-label="Order Delivery">
                                            Order Delivery
                                            <span className="fs-4"><i className="bi bi-car-front"></i></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="recipe col-12 col-md-6 col-lg-4">
                            <div className="card h-100 shadow rounded-4 border-2">
                                <img src="/assets/souvlaki.jpg"
                                     className="specials-card-image card-img-top rounded-top-4" alt="Chicken Souvlaki"/>
                                <div className="card-body d-flex flex-column justify-content-between">
                                    <div>
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <h3 className="fw-bold mb-0">Chicken Souvlaki</h3>
                                            <span className="fw-bold text-success fs-5">$13.99</span>
                                        </div>
                                        <p className="card-text text-secondary">
                                            Tender pieces of chicken marinated in lemon, garlic, and Mediterranean
                                            spices, grilled on skewers for a smoky flavor. Served with warm pita bread,
                                            crisp vegetables, and a side of creamy tzatziki sauce. This Greek street
                                            food favorite is both satisfying and healthy, making it a popular choice for
                                            lunch or dinner. Experience the taste of Greece in every bite.
                                        </p>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center mt-3">
                                        <button type="button"
                                                className="btn btn-warning fw-bold fs-5 w-100 d-flex align-items-center justify-content-center gap-2"
                                                aria-label="Order Delivery">
                                            Order Delivery
                                            <span className="fs-4"><i className="bi bi-car-front"></i></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="recipe col-12 col-md-6 col-lg-4">
                            <div className="card h-100 shadow rounded-4 border-2">
                                <img src="/assets/FalafelWrap.jpg"
                                     className="specials-card-image card-img-top rounded-top-4" alt="Falafel Wrap"/>
                                <div className="card-body d-flex flex-column justify-content-between">
                                    <div>
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <h3 className="fw-bold mb-0">Falafel Wrap</h3>
                                            <span className="fw-bold text-success fs-5">$8.99</span>
                                        </div>
                                        <p className="card-text text-secondary">
                                            Crispy falafel balls made from chickpeas and herbs, wrapped in a soft pita
                                            with lettuce, tomato, cucumber, and tangy tahini sauce. This vegetarian
                                            delight is packed with protein and flavor, offering a satisfying meal for
                                            any time of day. Enjoy the crunch and zest of Middle Eastern cuisine in a
                                            convenient handheld wrap. Perfect for on-the-go eating.
                                        </p>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center mt-3">
                                        <button type="button"
                                                className="btn btn-warning fw-bold fs-5 w-100 d-flex align-items-center justify-content-center gap-2"
                                                aria-label="Order Delivery">
                                            Order Delivery
                                            <span className="fs-4"><i className="bi bi-car-front"></i></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="recipe col-12 col-md-6 col-lg-4">
                            <div className="card h-100 shadow rounded-4 border-2">
                                <img src="/assets/Tiramisu.jpg"
                                     className="specials-card-image card-img-top rounded-top-4" alt="Tiramisu"/>
                                <div className="card-body d-flex flex-column justify-content-between">
                                    <div>
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <h3 className="fw-bold mb-0">Tiramisu</h3>
                                            <span className="fw-bold text-success fs-5">$7.99</span>
                                        </div>
                                        <p className="card-text text-secondary">
                                            Indulge in layers of espresso-soaked ladyfingers, rich mascarpone cream, and
                                            a dusting of cocoa powder. This classic Italian dessert is both decadent and
                                            light, offering a perfect balance of sweetness and coffee flavor. Each
                                            spoonful melts in your mouth, making it a favorite for celebrations and
                                            special occasions. Treat yourself to a taste of Italy's finest.
                                        </p>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center mt-3">
                                        <button type="button"
                                                className="btn btn-warning fw-bold fs-5 w-100 d-flex align-items-center justify-content-center gap-2"
                                                aria-label="Order Delivery">
                                            Order Delivery
                                            <span className="fs-4"><i className="bi bi-car-front"></i></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="recipe col-12 col-md-6 col-lg-4">
                            <div className="card h-100 shadow rounded-4 border-2">
                                <img src="/assets/Spanakopita.jpg"
                                     className="specials-card-image card-img-top rounded-top-4" alt="Spanakopita"/>
                                <div className="card-body d-flex flex-column justify-content-between">
                                    <div>
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <h3 className="fw-bold mb-0">Spanakopita</h3>
                                            <span className="fw-bold text-success fs-5">$6.99</span>
                                        </div>
                                        <p className="card-text text-secondary">
                                            Flaky phyllo pastry filled with a savory mixture of spinach, feta cheese,
                                            onions, and herbs. Baked until golden and crisp, this Greek classic is
                                            perfect as an appetizer or a light meal. The combination of creamy cheese
                                            and fresh greens creates a delightful texture and flavor. Enjoy a slice of
                                            Mediterranean tradition with every bite.
                                        </p>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center mt-3">
                                        <button type="button"
                                                className="btn btn-warning fw-bold fs-5 w-100 d-flex align-items-center justify-content-center gap-2"
                                                aria-label="Order Delivery">
                                            Order Delivery
                                            <span className="fs-4"><i className="bi bi-car-front"></i></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="recipe col-12 col-md-6 col-lg-4">
                            <div className="card h-100 shadow rounded-4 border-2">
                                <img src="/assets/Baklava.jpeg"
                                     className="specials-card-image card-img-top rounded-top-4" alt="Baklava"/>
                                <div className="card-body d-flex flex-column justify-content-between">
                                    <div>
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <h3 className="fw-bold mb-0">Baklava</h3>
                                            <span className="fw-bold text-success fs-5">$6.50</span>
                                        </div>
                                        <p className="card-text text-secondary">
                                            Sweet layers of crisp phyllo dough, filled with chopped walnuts and
                                            pistachios, and soaked in honey syrup. This Middle Eastern dessert is rich,
                                            nutty, and perfectly sweet, offering a delightful crunch in every bite.
                                            Baklava is a festive treat, often enjoyed during holidays and celebrations.
                                            Savor the luxurious taste of tradition and craftsmanship.
                                        </p>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center mt-3">
                                        <button type="button"
                                                className="btn btn-warning fw-bold fs-5 w-100 d-flex align-items-center justify-content-center gap-2"
                                                aria-label="Order Delivery">
                                            Order Delivery
                                            <span className="fs-4"><i className="bi bi-car-front"></i></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="recipe col-12 col-md-6 col-lg-4">
                            <div className="card h-100 shadow rounded-4 border-2">
                                <img src="/assets/PastaPrimavera.jpg"
                                     className="specials-card-image card-img-top rounded-top-4" alt="Pasta Primavera"/>
                                <div className="card-body d-flex flex-column justify-content-between">
                                    <div>
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <h3 className="fw-bold mb-0">Pasta Primavera</h3>
                                            <span className="fw-bold text-success fs-5">$11.99</span>
                                        </div>
                                        <p className="card-text text-secondary">
                                            Colorful pasta tossed with a medley of fresh seasonal vegetables, garlic,
                                            and olive oil. This light and healthy dish is bursting with flavor and
                                            nutrients, making it a favorite for vegetarians and pasta lovers alike.
                                            Finished with a sprinkle of parmesan cheese, Pasta Primavera is a
                                            celebration of garden-fresh ingredients and Italian simplicity.
                                        </p>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center mt-3">
                                        <button type="button"
                                                className="btn btn-warning fw-bold fs-5 w-100 d-flex align-items-center justify-content-center gap-2"
                                                aria-label="Order Delivery">
                                            Order Delivery
                                            <span className="fs-4"><i className="bi bi-car-front"></i></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="recipe col-12 col-md-6 col-lg-4">
                            <div className="card h-100 shadow rounded-4 border-2">
                                <img src="assets/StuffedPeppers.webp"
                                     className="specials-card-image card-img-top rounded-top-4" alt="Stuffed Peppers"/>
                                <div className="card-body d-flex flex-column justify-content-between">
                                    <div>
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <h3 className="fw-bold mb-0">Stuffed Peppers</h3>
                                            <span className="fw-bold text-success fs-5">$9.99</span>
                                        </div>
                                        <p className="card-text text-secondary">
                                            Bell peppers filled with a savory mixture of rice, ground beef, tomatoes,
                                            and herbs, baked until tender and flavorful. This hearty dish is a
                                            comforting favorite, offering a satisfying blend of textures and tastes.
                                            Each pepper is topped with a sprinkle of cheese and served with a side of
                                            tomato sauce. Enjoy a wholesome meal that brings warmth to your table.
                                        </p>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center mt-3">
                                        <button type="button"
                                                className="btn btn-warning fw-bold fs-5 w-100 d-flex align-items-center justify-content-center gap-2"
                                                aria-label="Order Delivery">
                                            Order Delivery
                                            <span className="fs-4"><i className="bi bi-car-front"></i></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        </main>
    );
}
