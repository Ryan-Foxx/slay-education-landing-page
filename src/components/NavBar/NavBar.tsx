import { Button } from "@/ui/Button";
import {
    navbarContainer,
    navbar,
    navbarTitle,
    navbarMenu,
} from "./NavBar.styles";

function NavBar() {
    return (
        <div className={navbarContainer()}>
            <nav className={navbar()}>
                <h1 className={navbarTitle()}>Slay</h1>

                <ul className={navbarMenu()}>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                    <li>
                        <a href="#">Blog</a>
                    </li>
                    <li>
                        <a href="#">Testimonials</a>
                    </li>
                </ul>
                <Button>Sign Up</Button>
            </nav>
        </div>
    );
}

export default NavBar;
