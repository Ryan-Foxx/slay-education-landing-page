import { cva } from "class-variance-authority";

export const aboutContainer = cva("container");
export const aboutWrapper = cva("flex items-center justify-between mt-51");
export const aboutLeftContent = cva(
    "w-170 h-150 rounded-[64px] overflow-hidden"
);
export const aboutLeftImage = cva(
    "w-full h-full object-cover object-[50%_43%]"
);
export const aboutRightContent = cva("w-141");
export const aboutRightTitle = cva("font-PoppinsBold text-[52px] mb-2.5");
export const aboutRightText = cva("font-PoppinsLight mb-11");
export const aboutRightList = cva("*:flex *:items-center space-y-3.5 mb-10");
export const aboutRightIcon = cva("bg-primary/20 text-primary rounded-full");
export const aboutRightItem = cva("font-PoppinsLight ml-4");
