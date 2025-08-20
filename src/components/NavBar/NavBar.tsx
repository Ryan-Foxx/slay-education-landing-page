import { Button } from "@/ui/Button";
import {
    navbarContainer,
    navbar,
    navbarTitle,
    navbarMenu,
    navbarButton,
    mobileNavContainer,
    mobileNavBackdrop,
    mobileHeaderContainer,
    mobileBars3Icon,
    mobileHeaderTitle,
    mobileHeaderLogo,
    mobileNavHeader,
    mobileNavHeaderLogo,
    mobileXMarkIcon,
    mobileNavMenu,
} from "./NavBar.styles";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

function NavBar() {
    return (
        <>
            <div className={navbarContainer()}>
                {/* Desktop Menu */}
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
                    <Button className={navbarButton()}>Sign Up</Button>
                </nav>
            </div>
            {/* Mobile Menu */}
            <MobileNavBar />
        </>
    );
}

export default NavBar;

function MobileNavBar() {
    const [navOpen, setNavOpen] = useState(false);

    return (
        <>
            {/* Mobile Header */}
            <div className={mobileHeaderContainer()}>
                <Bars3Icon
                    onClick={() => setNavOpen((prevOpen) => !prevOpen)}
                    className={mobileBars3Icon()}
                />
                <h3 className={mobileHeaderTitle()}>Welcome</h3>
                <h1 className={mobileHeaderLogo()}>Slay</h1>
            </div>
            {/* Mobile Menu */}
            <div className={mobileNavContainer({ open: navOpen })}>
                <div className={mobileNavHeader()}>
                    <h2 className={mobileNavHeaderLogo()}>Slay</h2>
                    <XMarkIcon
                        onClick={() => setNavOpen((prevOpen) => !prevOpen)}
                        className={mobileXMarkIcon()}
                    />
                </div>
                <ul className={mobileNavMenu()}>
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
            </div>
            {/* Mobile Menu Backdrop */}
            <div
                onClick={() => setNavOpen((prevOpen) => !prevOpen)}
                className={mobileNavBackdrop({ open: navOpen })}
            ></div>
        </>
    );
}
