import Image from "next/image";

type LogoProps = {
    isDarkBg?: boolean;
};

export const Logo = ({ isDarkBg }: LogoProps) => (

    <div className="flex items-center">
        {
            isDarkBg ?
                <div className="bg-white/70 rounded-full mr-5">
                    <Image src="/carrycome.svg" alt="CarryCome logo" width={64} height={64} />
                </div> :
                <Image src="/carrycome.svg" alt="CarryCome logo" width={64} height={64} />
        }
        <h1 className="font-bold hidden md:block">CarryCome</h1>
    </div>
);
