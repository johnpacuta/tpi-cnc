// TypeScript React (EngIcons.tsx)
import Image from "next/image";

type IconName = "Blueprint" | "Circuit" | "Factory" | "Gear" | "Wrench" | "Power";

type Props = {
    name: IconName;
    alt?: string;
    size?: number; // px
    className?: string;
    priority?: boolean;
};

const srcMap: Record<IconName, string> = {
    Blueprint: "/EngIcons/Blueprint.svg",
    Circuit: "/EngIcons/Circuit.svg",
    Factory: "/EngIcons/Factory.svg",
    Gear: "/EngIcons/Gear.svg",
    Wrench: "/EngIcons/Wrench.svg",
    Power: "/EngIcons/Power.svg",
};

export function EngIcon({ name, alt, size = 60, className, priority }: Props) {
    const src = srcMap[name];
    return (
        <Image
            src={src}
            alt={alt ?? name}
            width={size}
            height={size}
            className={className}
            priority={priority}
        />
    );
}

// Optional named shortcuts
export const BlueprintIcon = (p: Omit<Props, "name">) => <EngIcon name="Blueprint" {...p} />;
export const CircuitIcon = (p: Omit<Props, "name">) => <EngIcon name="Circuit" {...p} />;
export const FactoryIcon = (p: Omit<Props, "name">) => <EngIcon name="Factory" {...p} />;
export const GearIcon = (p: Omit<Props, "name">) => <EngIcon name="Gear" {...p} />;
export const WrenchIcon = (p: Omit<Props, "name">) => <EngIcon name="Wrench" {...p} />;
export const PowerIcon = (p: Omit<Props, "name">) => <EngIcon name="Power" {...p} />;