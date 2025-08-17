import { button } from "./variants";
import type { ButtonProps } from "./types";
import { cn } from "@/utils/cn";

export function Button({ intent, appearance, size, className, children, ...props }: ButtonProps) {
    return (
        <button
            className={cn(button({ intent, appearance, size }), className)}
            {...props}
        >
            {children}
        </button>
    );
}
