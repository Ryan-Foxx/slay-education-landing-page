import { cva } from "class-variance-authority";

export const headerContainer = cva("container");
export const headerContent = cva("flex items-center mt-20");
export const headerLeftWrapper = cva("w-1/2");
export const headerLeftTitle = cva("font-PoppinsBold text-[64px]");
export const headerLefText = cva("mt-8 mb-11 font-PoppinsLight");
export const headerLeftButtons = cva("space-x-8");
export const headerRightWrapper = cva("w-1/2 relative");
export const headerRightImage = cva("w-full");
export const headerRightBgBlur = cva(
    "w-175 h-175 top-0 bg-primary/20 blur-[175px] absolute -z-10"
);
