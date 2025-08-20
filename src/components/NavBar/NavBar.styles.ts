import { cva } from "class-variance-authority";
// @ Desktop Menu
export const navbarContainer = cva("container");
export const navbar = cva(
    "hidden sm:flex items-center justify-between mt-10 md:mt-14"
);
export const navbarTitle = cva("font-PoppinsExtraBold text-[22px]");
export const navbarMenu = cva(
    "flex *:font-PoppinsMedium *:transition-colors *:hover:text-blue-400 gap-x-8 lg:gap-x-12"
);
export const navbarButton = cva("hidden md:block");
// @ Mobile Menu
export const mobileHeaderContainer = cva(
    "sm:hidden h-16 flex items-center justify-between px-2.5 bg-primary"
);
export const mobileBars3Icon = cva("w-9 h-9 cursor-pointer");
export const mobileHeaderTitle = cva("font-PoppinsMedium text-lg");
export const mobileHeaderLogo = cva("font-PoppinsExtraBold text-[22px]");
export const mobileNavContainer = cva(
    "fixed sm:hidden top-0 bottom-0 w-72 min-h-screen bg-primary transition-all z-20",
    {
        variants: {
            open: {
                true: "left-0",
                false: "-left-72",
            },
        },
        defaultVariants: {
            open: false,
        },
    }
);
export const mobileNavHeader = cva(
    "flex items-center justify-between my-5 px-3 pb-5 border-b border-white/50"
);
export const mobileNavHeaderLogo = cva("font-PoppinsExtraBold text-[22px]");
export const mobileXMarkIcon = cva("w-8 h-8 stroke-2 cursor-pointer");
export const mobileNavMenu = cva("space-y-3 px-3 *:font-PoppinsMedium");
export const mobileNavBackdrop = cva(
    "fixed sm:hidden inset-0 w-full h-full bg-black/45 z-10 transition-opacity duration-300",
    {
        variants: {
            open: {
                true: "opacity-100 visible",
                false: "opacity-0 invisible",
            },
        },
        defaultVariants: {
            open: false,
        },
    }
);
