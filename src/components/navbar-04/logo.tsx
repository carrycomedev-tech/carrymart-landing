import { ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";

type LogoProps = {
    isDarkBg?: boolean;
    /** Drops the wordmark below 360px. Only the navbar needs this: the mark,
        the wordmark, the CTA and the menu button together need 346px, so on a
        320px screen the menu button used to sit off the edge. */
    compact?: boolean;
};

export const Logo = ({ isDarkBg, compact }: LogoProps) => (
    <div className="flex items-center gap-2.5">
        <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shrink-0">
            <ShoppingBag className="w-5 h-5 text-primary-foreground" strokeWidth={2.5} />
        </div>
        <span
            className={cn(
                "font-display font-extrabold text-lg tracking-tight",
                isDarkBg ? "text-white" : "text-secondary",
                compact && "max-[359px]:hidden"
            )}
        >
            Carry<span className="text-primary">Mart</span>
        </span>
    </div>
);
