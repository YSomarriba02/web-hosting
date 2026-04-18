export interface planWeb {
    nombre: string;
    titulo: string;
    tipo: string;
    precioRecurrente: string;
    setup: string;
    tiempo: string;

    caracteristicas: string[];

    isPopular?: boolean
}


export const planes: planWeb[] = [
    {
        nombre: "Web Esencial",
        titulo: "Empieza sin complicaciones",
        tiempo: "mensual",
        tipo: "Ideal para empezar",
        setup: "49",
        precioRecurrente: "19.99",
        caracteristicas: ["1-3 páginas profesionales", "Diseño moderno y adaptable", "Hosting incluido", "1 revisión incluida", "Correos profesionales"]
    },
    {
        nombre: "Web Negocio",
        titulo: "Haz crecer tu negocio online",
        tiempo: "mensual",
        tipo: "Ideal para tu negocio",
        precioRecurrente: "26.99",
        setup: "70",
        caracteristicas: ["5-7 páginas profesionales", "Diseño optimizado para conversiones", "SEO estandar", "Correos profesionales ilimitados", "Formulario de contacto", "2 revisiones incluidas", "Backups diarios automáticos", "Hosting + mantenimiento incluido"],

        isPopular: true
    },
    {
        nombre: "Web Profesional",
        titulo: "Para negocios que necesitan algo único",
        tipo: "Solucion profesional",
        precioRecurrente: "38.99",
        setup: "100",
        tiempo: "mensual",
        caracteristicas: ["Diseño totalmente personalizado", "Funciones avanzadas", "Optimización de rendimiento", "Correos profesionales ilimitados", "Hosting premium", "Backups diarios prioritarios", "Soporte prioritario", "Panel de administracion", "Seguridad avanzada + monitoreo"]
    }
]
