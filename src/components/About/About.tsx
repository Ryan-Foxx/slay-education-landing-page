import man from "@/assets/images/asian-man.jpg";
import { Button } from "@/ui/Button";
import TickIcon from "@/assets/icons/tick.svg?react";
import {
    aboutContainer,
    aboutLeftContent,
    aboutLeftImage,
    aboutRightContent,
    aboutRightIcon,
    aboutRightItem,
    aboutRightList,
    aboutRightText,
    aboutRightTitle,
    aboutWrapper,
} from "./About.styles";

function About() {
    return (
        <>
            <div className={aboutContainer()}>
                {/* About Section */}
                <div className={aboutWrapper()}>
                    {/* Left Content */}
                    <div className={aboutLeftContent()}>
                        <img
                            src={man}
                            className={aboutLeftImage()}
                            alt="asian-man"
                        />
                    </div>
                    {/* Right Content */}
                    <div className={aboutRightContent()}>
                        <h2 className={aboutRightTitle()}>
                            Engage with Our Education Platform
                        </h2>
                        <p className={aboutRightText()}>
                            Step into a world where learning is not just a
                            solitary activity, but a vibrant, interactive
                            experience.
                        </p>
                        <ul className={aboutRightList()}>
                            <li>
                                <TickIcon className={aboutRightIcon()} />
                                <span className={aboutRightItem()}>
                                    Custom Learning Paths
                                </span>
                            </li>
                            <li>
                                <TickIcon className={aboutRightIcon()} />
                                <span className={aboutRightItem()}>
                                    Live Interactive Classes
                                </span>
                            </li>
                            <li>
                                <TickIcon className={aboutRightIcon()} />
                                <span className={aboutRightItem()}>
                                    Skill-Based Assessments
                                </span>
                            </li>
                            <li>
                                <TickIcon className={aboutRightIcon()} />
                                <span className={aboutRightItem()}>
                                    Career Development Workshops
                                </span>
                            </li>
                        </ul>
                        <Button size={"md"}>Learn More</Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
