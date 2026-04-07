export interface Question {
    title: string,
    content?: string,
    header?: string,
    segmentos?: string[],
    footer?: string
}

export const questionsList: Question[] = [
    { title: "Qué es el hosting web?", content: "El hosting web es un servicio que permite que tu sitio esté disponible en internet. Básamente, es el espacio donde se almacenan todos los archivos, imágenes y datos de tu página para que cualquier persona pueda acceder a ella en línea." },

    { title: "Ofrecen soporte técnico?", content: "Sí. Nuestro equipo de soporte está disponible para ayudarte cuando lo necesites." },

    { title: "Qué plan de hostin debería de elegir?", header: "Depende del tipo de proyecto que tengas.", segmentos: ["Sitios pequeños o personales → plan básico", "Negocios o páginas en crecimiento → plan intermedio", "Proyectos grandes o con mucho tráfico → plan avanzado"], footer: "Siempre puedes comenzar con un plan pequeño y escalar más adelante." },

    { title: "Incluye dominio con el hosting?", content: "Sí, nuestros planes de hosting incluyen un dominio gratuito durante el primer año en planes con facturación anual o superior. En planes mensuales, el dominio se adquiere por separado." },

    { title: "Puedo tener correos personalizados?", content: "Claro. Puedes crear cuentas de correo con tu propio dominio (por ejemplo: contacto@tudominio.com), lo que le da una imagen más profesional a tu negocio." },

    { title: "Qué tan rapido será mi sitio web?", content: "Nuestros servidores están optimizados para ofrecer alto rendimiento, lo que se traduce en tiempos de carga rápidos y una mejor experiencia para tus visitantes." },

    { title: "Mi sitio web estará seguro?", content: "Sí. Incluimos certificados SSL, protección contra amenazas y monitoreo constante para mantener tu sitio seguro en todo momento." },

    { title: "Puedo alojar varios sitios en un mismo lugar?", content: "Dependiendo del plan que elijas, podrás alojar uno o múltiples sitios web sin problemas." },

    { title: "Hacen copias de seguridad?", content: "Sí, realizamos respaldos automáticos para que puedas recuperar tu información en caso de cualquier inconveniente." },

    { title: "Qué pasa si mi sitio crece?", content: "No hay problema. Puedes actualizar tu plan en cualquier momento para obtener más recursos y soportar mayor tráfico." },
]