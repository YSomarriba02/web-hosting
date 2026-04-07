interface recursos {
    nombre: string;
    valor: string;
}

export interface Plan {
    nombre: string;
    precio: string;
    precioAnterior: string,
    recursos: recursos[];
    herramientas: string[];
}


const esencial: Plan = {
    nombre: "Esencial",
    precio: "5.99",
    precioAnterior: "7.99",
    herramientas: ["SSL gratuito", "cPanel", "Hasta 3x más rápido(LiteSpeed)", "Crea tu sitio en minutos (SitePad)", "Backups semanales + Copias de seguridad automáticas", "1-click install"],
    recursos: [
        { nombre: "Almacenamiento", valor: "10 GB NVMe SSD" },
        { nombre: "Sitios Web", valor: "1" },
        { nombre: "Ancho de banda", valor: "Ilimitado" },
        { nombre: "Email", valor: "Cuentas ilimitadas" },
        { nombre: "soporte", valor: "Estandar" }
    ]
}

const pro: Plan = {
    nombre: "Pro",
    precio: "9.99",
    precioAnterior: "12.99",
    herramientas: ["SSL gratuito", "cPanel", "Hasts 3x más rápido(LiteSpeed)", "Crea tu sitio en minutos (SitePad)", "Aislamiento total(CloudLinux)", "Backups diarios (Jetbackup)", "1-click install", "Protección anti-malware(Monarx)"],
    recursos: [
        { nombre: "Almacenamiento", valor: "25 GB NVMe SSD" },
        { nombre: "Sitios Web", valor: "5" },
        { nombre: "Ancho de banda", valor: "Ilimitado" },
        { nombre: "Email", valor: "Cuentas ilimitadas + 50mb adjuntos" },
        { nombre: "soporte", valor: "Prioritario" }
    ]
}

const supreme: Plan = {
    nombre: "Supreme",
    precio: "15.99",
    precioAnterior: "19.99",
    herramientas: ["SSL gratuito", "cPanel", "Hasta 3x más rápido(LiteSpeed)", "Aislamiento total(CloudLinux)", "Backups diarios (Jetbackup)", "1-click install", "Monarx Security"],
    recursos: [
        { nombre: "Almacenamiento", valor: "50 GB NVMe SSD" },
        { nombre: "Sitios Web", valor: "10" },
        { nombre: "Ancho de banda", valor: "Ilimitado" },
        { nombre: "Email", valor: "Cuentas ilimitadas + 50mb adjuntos" },
        { nombre: "soporte", valor: "Maxima prioridad" }
    ]
}

function withDominio(plan: Plan, precio: string): Plan {
    return {
        ...plan,
        precio,
        recursos: [
            ...plan.recursos,
            { nombre: "Dominio", valor: "GRATIS (1 año)" }
        ]
    }
}

export const mensual: Plan[] = [esencial, pro, supreme]


export const trimestral: Plan[] = [
    { ...esencial, precio: "15.99" },
    { ...pro, precio: "27.99" },
    { ...supreme, precio: "44.99" }
]

export const anual: Plan[] = [
    withDominio(esencial, "59.99"),
    withDominio(pro, "99.99"),
    withDominio(supreme, "159.99")
] 