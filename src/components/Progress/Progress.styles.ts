import { cva } from "class-variance-authority";

export const progressSection = cva("bg-primary/8 mt-50 py-[134px]");
export const progressContainer = cva("container");
export const progressWrapper = cva("flex items-center justify-between");
export const progressLeftContent = cva("w-[600px]");
export const progressLeftTitle = cva("font-PoppinsBold leading-21 text-[52px]");
export const progressLeftText = cva("font-PoppinsLight leading-8 mb-[42px]");
export const progressLeftButton = cva(
    "flex items-center justify-center gap-x-3"
);
export const progressLeftIcon = cva("w-4 h-4 stroke-3");
export const progressRightContent = cva("w-[600px] space-y-[85px]");
export const progressRightTitle = cva("text-xl/normal");
export const progressBarWrapper = cva("flex items-center gap-x-7");
export const progressBg = cva("w-full h-2.5 bg-white/10 relative");
export const progressLine = cva("h-full bg-primary absolute", {
    variants: {
        amount: {
            one: "w-[67%]",
            two: "w-[35%]",
            three: "w-[84%]",
            four: "w-[52%]",
        },
    },
});
export const progressAmount = cva(
    "font-PoppinsSemibold text-xl/normal text-primary"
);
