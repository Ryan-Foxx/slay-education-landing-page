import type { VariantProps } from "class-variance-authority";
import type { button } from "./variants";

export type ButtonVariantProps = VariantProps<typeof button>;

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, ButtonVariantProps {
    className?: string;
}
