import { House, type LucideIcon } from "lucide-react"
import { ChartNoAxesGantt } from "lucide-react";
import { Headset } from "lucide-react";
import { Sparkle } from "lucide-react"

interface Link {
    text: string;
    link: string;
    icon: LucideIcon
}

export const linksArray: Link[] = [
    { link: "/", text: "Home", icon: House },
    { link: "/planes", text: "Planes", icon: ChartNoAxesGantt },
    { link: "/web", text: "Creación", icon: Sparkle },
    { link: "/nosotros", text: "Contactanos", icon: Headset }
]
