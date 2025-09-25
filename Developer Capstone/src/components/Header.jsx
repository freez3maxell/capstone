import Nav from "./Nav.jsx";
export default function Header() {
    return (
        <header>
            <div className="header-container m-auto px-0 d-flex justify-content-between align-items-center">
                <img src="../../public/assets/Logo.svg" alt="Little Lemon Logo" height='50px'/>
                <Nav/>
            </div>
        </header>
    );
}