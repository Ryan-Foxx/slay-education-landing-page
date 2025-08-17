import { cva } from "class-variance-authority";

export const navbarContainer = cva("container");
export const navbar = cva("flex items-center justify-between mt-14");
export const navbarTitle = cva("font-PoppinsExtraBold text-[22px]");
export const navbarMenu = cva(
    "flex *:font-PoppinsMedium *:transition-colors *:hover:text-blue-400 gap-x-12"
);
