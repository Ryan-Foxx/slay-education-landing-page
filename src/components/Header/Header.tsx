import NavBar from "@components/NavBar";
import { Button } from "@/ui/Button";
import {
    headerContainer,
    headerContent,
    headerLeftWrapper,
    headerLeftButtons,
    headerLefText,
    headerLeftTitle,
    headerRightWrapper,
    headerRightBgBlur,
    headerRightImage,
} from "./Header.styles";
import person from "@/assets/images/pngs/slay-person.png";

function Header() {
    return (
        <>
            <header>
                {/* Header Top */}
                <NavBar />
                {/* Header Body */}
                <div className={headerContainer()}>
                    <div className={headerContent()}>
                        {/* Header Left Content */}
                        <div className={headerLeftWrapper()}>
                            <h2 className={headerLeftTitle()}>
                                Connect with Our Educational Network
                            </h2>
                            <p className={headerLefText()}>
                                Embark on a transformative journey with our
                                comprehensive educational platform, where
                                learning knows no bounds.
                            </p>
                            <div className={headerLeftButtons()}>
                                <Button>Get Started</Button>
                                <Button appearance={"outline"}>Contact</Button>
                            </div>
                        </div>
                        {/* Header Right Content */}
                        <div className={headerRightWrapper()}>
                            <img src={person} className={headerRightImage()} />
                            <div className={headerRightBgBlur()}></div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
