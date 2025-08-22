import { cva } from "class-variance-authority";

export const servicesContainer = cva("container");
export const servicesSectionWrapper = cva("mt-24");
export const servicesHeaderContent = cva("text-center mb-21");
export const servicesHeaderTitle = cva("font-PoppinsBold text-[64px] mb-2.5");
export const servicesHeaderText = cva("font-PoppinsLight");
export const servicesCardsWrapper = cva(
    "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 xxl:gap-x-11"
);
export const servicesCard = cva(
    "flex flex-col items-center pt-12 px-[27px] pb-[76px] bg-primary/8 rounded-[36px]"
);
export const servicesCardIcon = cva(
    "text-primary bg-primary/20 rounded-full mb-5"
);
export const servicesCardTitle = cva(
    "font-PoppinsBold text-lg/normal md:text-[22px] mb-6"
);
export const servicesCardText = cva("font-PoppinsLight text-center leading-7");
