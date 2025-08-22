import PenIcon from "@/assets/icons/pen.svg?react";
import BookIcon from "@/assets/icons/book.svg?react";
import PersonIcon from "@/assets/icons/person.svg?react";
import ShareIcon from "@/assets/icons/share.svg?react";
import {
    servicesCard,
    servicesCardIcon,
    servicesCardsWrapper,
    servicesCardText,
    servicesCardTitle,
    servicesContainer,
    servicesHeaderContent,
    servicesHeaderText,
    servicesHeaderTitle,
    servicesSectionWrapper,
} from "./Services.styles";

function Services() {
    return (
        <>
            <div className={servicesContainer()}>
                <div className={servicesSectionWrapper()}>
                    <div className={servicesHeaderContent()}>
                        <h2 className={servicesHeaderTitle()}>Our Service</h2>
                        <p className={servicesHeaderText()}>
                            What we serve for our client
                        </p>
                    </div>
                    {/* Service Cards */}
                    <div className={servicesCardsWrapper()}>
                        <div className={servicesCard()}>
                            <PenIcon className={servicesCardIcon()} />
                            <h3 className={servicesCardTitle()}>
                                Online Courses
                            </h3>
                            <p className={servicesCardText()}>
                                Dive into our diverse range of online courses
                                tailored to suit various interests.
                            </p>
                        </div>
                        <div className={servicesCard()}>
                            <BookIcon className={servicesCardIcon()} />
                            <h3 className={servicesCardTitle()}>
                                Learning Resources
                            </h3>
                            <p className={servicesCardText()}>
                                Our curated collection covers a wide range of
                                subjects and topics
                            </p>
                        </div>
                        <div className={servicesCard()}>
                            <PersonIcon className={servicesCardIcon()} />
                            <h3 className={servicesCardTitle()}>
                                Virtual Classroom
                            </h3>
                            <p className={servicesCardText()}>
                                Join live lectures, interactive dis cussions,
                                and group activities led by experienced
                            </p>
                        </div>
                        <div className={servicesCard()}>
                            <ShareIcon className={servicesCardIcon()} />
                            <h3 className={servicesCardTitle()}>
                                Expert Mentorship
                            </h3>
                            <p className={servicesCardText()}>
                                Access to expert metorship and mentors who
                                provide personalized guidance.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Services;
