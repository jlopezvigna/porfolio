var language = {
    eng: {
        title: 'Hi, I´m Julián',
        aboutMe: 'About me',
        titleAboutMe: 'About me',
        descriptionAboutMe: 'I’m Fullstack web developer, I love tecnology and I have worked with PHP and Javascript. I always learn new things as much as I can. Also I have worked with Angular and Vue I’m Fullstack web developer, I love tecnology and I have worked with PHP and Javascript. I always learn new things as much as I can. Also I have worked with Angular andI’m Fullstack web developer, I love tecnology and I have worked with PHP and Javascript. I always learn new things as much as I can. Also I have worked with Angular and Vue I’m Fullstack web developer, I love tecnology and I have worked with PHP and Javascript. I always learn new things as much as I can. Also I have worked with Angular and Vue',
        titleWhatIDo: 'What I do',
        serviceOne: 'Develop back-end',
        serviceDescriptionOne: 'Desarrollos sistemas a medida para mediana y grandes empresas',
        serviceTwo: 'Develop front-end',
        serviceDescriptionTwo: 'Desarrollos sistemas a medida para mediana y grandes empresas',
        serviceThree: 'Hosting',
        serviceDescriptionThree: 'Desarrollos sistemas a medida para mediana y grandes empresas',
        titleProjects: 'Last Projects',

    },
    es: {
        title: 'Hola, soy Julián',
        aboutMe: 'Conoceme',
        titleAboutMe: 'Sobre mi',
        descriptionAboutMe: 'Hace 2 años descubrí un mundo nuevo en mi vida, la programación, el desarrollo de sistemas, arquitecturas y formas de resolver problemas, hoy en día me desarrollo como Full-Stack Developer trabajando para una empresa de rubro ecommerce logístico, tengo tareas como la mejora continua de la herramienta tanto para el back como para el front, doy soporte diario para clientes y provedores, tambíen hago integraciones con otras plataformas y correos nacionales e internacionales, actualizaciones y fix dentro del ambiente productivo de la empresa, utilizo symfony como framework de back-end y actualmente estamos haciendo una migración de angular a react para el front-end, me encantan la palabras aprender y desafíos, descubrir cosas nuevas y encarar proyectos dificiles es lo que me despierta interes, abierto a incorporar nuevas tecnologias.',
        titleWhatIDo: 'Mis servicios',
        serviceOne: 'Desarrollos back-end',
        serviceDescriptionOne: 'Sistemas para grandes y medianas empresas, desarrollos con PHP',
        serviceTwo: 'Desarrollos front-end',
        serviceDescriptionTwo: 'Diseño web, landing pages, institucionales, desarrollos con Vue y React',
        serviceThree: 'Hosting',
        serviceDescriptionThree: 'Hosting para tus sistemas, varios paquetes.',
        titleProjects: 'Últimos trabajos',
        }
};


if (navigator.language.indexOf("es") !== -1 || navigator.userLanguage.indexOf("es") !== -1){
    title.textContent = language.es.title;
    aboutMe.textContent = language.es.aboutMe;
    titleAboutMe.textContent = language.es.titleAboutMe;
    descriptionAboutMe.textContent = language.es.descriptionAboutMe;
    titleWhatIDo.textContent = language.es.titleWhatIDo;
    serviceOne.textContent = language.es.serviceOne;
    serviceDescriptionOne.textContent = language.es.serviceDescriptionOne;
    serviceTwo.textContent = language.es.serviceTwo;
    serviceDescriptionTwo.textContent = language.es.serviceDescriptionTwo;
    serviceThree.textContent = language.es.serviceThree;
    serviceDescriptionThree.textContent = language.es.serviceDescriptionThree;
    titleProjects.textContent = language.es.titleProjects;
}