import { cva } from "class-variance-authority";

export const button = cva(
    "rounded-lg font-PoppinsSemibold text-base transition-colors hover:bg-primary/70 hover:cursor-pointer",
    {
        variants: {
            intent: {
                primary: "bg-primary",
            },
            appearance: {
                solid: "",
                outline: "bg-transparent border border-white",
            },
            size: {
                sm: "w-32 h-12",
                md: "w-40 h-13.25",
                lg: "w-54.5 h-13.25",
                xl: "w-50 h-15",
            },
        },
        defaultVariants: {
            intent: "primary",
            size: "sm",
        },
    }
);
