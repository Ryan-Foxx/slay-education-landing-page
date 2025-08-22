import { cva } from "class-variance-authority";

export const headerContainer = cva("container");
export const headerContent = cva(
    "flex flex-col-reverse mt-20 gap-y-24 md:flex-row md:items-center"
);
export const headerLeftWrapper = cva("text-center md:text-left md:w-1/2");
export const headerLeftTitle = cva(
    "font-PoppinsBold text-3xl/normal lg:text-4xl/normal xl:text-5xl/normal xxl:text-[64px] xxl:leading-24"
);
export const headerLefText = cva("mt-8 mb-11 font-PoppinsLight");
export const headerLeftButtons = cva(
    "flex flex-col items-center space-y-8 sm:block sm:space-x-8 *:w-50 *:h-15 *:md:w-32 *:md:h-12 *:lg:w-40 *:lg:h-13.25"
);
export const headerRightWrapper = cva("md:w-1/2 relative");
export const headerRightImage = cva("w-full");
export const headerRightBgBlur = cva(
    "w-full h-full top-0 bg-primary/20 blur-[175px] absolute -z-10"
);
