import { ShoppingBag } from "lucide-react";

type LogoProps = {
    isDarkBg?: boolean;
};

export const Logo = ({ isDarkBg }: LogoProps) => (
    <div className="flex items-center gap-2.5">
        <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shrink-0">
            <ShoppingBag className="w-5 h-5 text-primary-foreground" strokeWidth={2.5} />
        </div>
        <span className={`font-display font-extrabold text-lg tracking-tight ${isDarkBg ? 'text-white' : 'text-secondary'}`}>
            Carry<span className="text-primary">Mart</span>
        </span>
    </div>
);
