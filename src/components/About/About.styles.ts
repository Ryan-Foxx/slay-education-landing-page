import { cva } from "class-variance-authority";

export const aboutContainer = cva("container");
export const aboutWrapper = cva(
    "lg:flex lg:items-center lg:justify-between mt-21 lg:mt-32 xxl:mt-51"
);
export const aboutLeftContent = cva(
    "h-150 lg:w-120 lg:h-130 xl:w-120 xl:h-120 xxl:w-170 xxl:h-150 rounded-[64px] overflow-hidden"
);
export const aboutLeftImage = cva(
    "w-full h-full object-cover md:object-[50%_41%] lg:object-center xxl:object-[50%_43%]"
);
export const aboutRightContent = cva("lg:w-100 xl:w-141");
export const aboutRightTitle = cva(
    "font-PoppinsBold text-2xl/normal xxl:text-[52px] my-5 lg:mt-0 lg:mb-2.5"
);
export const aboutRightText = cva("font-PoppinsLight mb-10 lg:mb-5 xl:mb-11");
export const aboutRightList = cva(
    "*:flex *:items-center space-y-3.5 mb-10 lg:mb-5 xl:mb-10"
);
export const aboutRightIcon = cva("bg-primary/20 text-primary rounded-full");
export const aboutRightItem = cva("font-PoppinsLight ml-4");
