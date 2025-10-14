import Nav from "./Nav.jsx";
export default function Header() {
    return (
        <header role="banner" aria-label="Site Header">
            <div className="header-container container py-4 d-flex justify-content-between align-items-center">
                <a href="/" aria-label="Go to homepage">
                    <img src="assets/Logo.svg" alt="Little Lemon Logo" height='70px'/>
                </a>

                <Nav/>
            </div>
        </header>
    );
}