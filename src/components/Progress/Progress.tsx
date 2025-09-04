import { Button } from "@/ui/Button";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import {
    progressAmount,
    progressBarWrapper,
    progressBg,
    progressContainer,
    progressLeftButton,
    progressLeftContent,
    progressLeftIcon,
    progressLeftText,
    progressLeftTitle,
    progressLine,
    progressRightContent,
    progressRightTitle,
    progressSection,
    progressWrapper,
} from "./Progress.styles";

function Progress() {
    return (
        <>
            <div className={progressSection()}>
                <div className={progressContainer()}>
                    <div className={progressWrapper()}>
                        {/* Left Content */}
                        <div className={progressLeftContent()}>
                            <h2 className={progressLeftTitle()}>
                                Engage with Our Education Platform
                            </h2>
                            <p className={progressLeftText()}>
                                Step into a dynamic realm of learning where
                                engagement is para mount and knowledge knows no
                                bounds.
                            </p>
                            <Button
                                size={"lg"}
                                className={progressLeftButton()}
                            >
                                <span>Get Your Course</span>
                                <ChevronRightIcon
                                    className={progressLeftIcon()}
                                />
                            </Button>
                        </div>
                        {/* Right Content */}
                        <div className={progressRightContent()}>
                            {/* Progress */}
                            <div>
                                <p className={progressRightTitle()}>
                                    Unlocking Potential
                                </p>
                                <div className={progressBarWrapper()}>
                                    <div className={progressBg()}>
                                        <div
                                            className={progressLine({
                                                amount: "one",
                                            })}
                                        ></div>
                                    </div>
                                    <span className={progressAmount()}>
                                        67%
                                    </span>
                                </div>
                            </div>
                            <div>
                                <p className={progressRightTitle()}>
                                    Innovation in Education
                                </p>
                                <div className={progressBarWrapper()}>
                                    <div className={progressBg()}>
                                        <div
                                            className={progressLine({
                                                amount: "two",
                                            })}
                                        ></div>
                                    </div>
                                    <span className={progressAmount()}>
                                        35%
                                    </span>
                                </div>
                            </div>
                            <div>
                                <p className={progressRightTitle()}>
                                    Pathways to Success
                                </p>
                                <div className={progressBarWrapper()}>
                                    <div className={progressBg()}>
                                        <div
                                            className={progressLine({
                                                amount: "three",
                                            })}
                                        ></div>
                                    </div>
                                    <span className={progressAmount()}>
                                        84%
                                    </span>
                                </div>
                            </div>
                            <div>
                                <p className={progressRightTitle()}>
                                    Success Students
                                </p>
                                <div className={progressBarWrapper()}>
                                    <div className={progressBg()}>
                                        <div
                                            className={progressLine({
                                                amount: "four",
                                            })}
                                        ></div>
                                    </div>
                                    <span className={progressAmount()}>
                                        52%
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Progress;
