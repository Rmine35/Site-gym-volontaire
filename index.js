

function ouvrirNouvelleFenetre() {
    // Ouvre une nouvelle fenêtre avec les dimensions spécifiées
    const nouvelleFenetre = window.open("", "NouvelleFenetre", "width=400,height=200");
    nouvelleFenetre.document.write("<h1>Mentions Légales</h1>");
    nouvelleFenetre.document.close(); // Ferme le document pour le rendre visible
}

function ouvrirNouvelleFenetre2() {
    // Ouvre une nouvelle fenêtre avec les dimensions spécifiées
    const nouvelleFenetre = window.open("", "NouvelleFenetre", "width=600,height=400");
    
    // Écrit le contenu dans la nouvelle fenêtre
    nouvelleFenetre.document.write(`
        <html>
            <head>
                <title>Politique de Confidentialité</title>
                <style>
                    body { font-family: Arial, sans-serif; padding: 20px; }
                    h1 { color: #4213A1; }
                    p { font-size: 16px; line-height: 1.5; }
                </style>
            </head>
            <body>
                <h1>Politique de Confidentialité</h1>
                <p>
                    Protection contre le spam avec Google reCAPTCHA.<br>
                    Nous avons mis en œuvre Google reCAPTCHA dans les formulaires sur notre site web pour vérifier si les données saisies dans les formulaires proviennent de visiteurs humains ou de machines ou de programmes automatisés, également connus sous le nom de "bots". Cet outil analyse automatiquement le comportement des visiteurs du site web dès qu'ils interagissent avec le site web, en utilisant diverses informations comme l'adresse IP, la durée du séjour et les mouvements de la souris. Les données traitées comprennent les données d'utilisation telles que le site web consulté, la date et l'heure d'accès, et les mouvements de la souris, ainsi que les données de communication comme les adresses IP, le type de navigateur et le système d'exploitation. Ce traitement est destiné aux visiteurs du site web et aux utilisateurs de services en ligne. Le but principal de ce traitement est de prévenir l'abus de notre formulaire de contact, améliorant ainsi la sécurité. La base légale de ceci est notre intérêt légitime selon l'Art. 6 para. 1 p. 1 lit. f. GDPR. Les destinataires des données comprennent Google Ireland Ltd, basé à Google Building Gordon House, Barrow St, Dublin 4, Ireland, (https://policies.google.com/privacy) et notre fournisseur d'hébergement de site web. Tandis que vos données personnelles sont traitées au sein de l'UE, le temps de rétention pour les données traitées est déterminé par Google Ireland Limited. Des informations supplémentaires peuvent être trouvées dans la politique de confidentialité de Google reCAPTCHA: <a href="https://policies.google.com/privacy" target="_blank">https://policies.google.com/privacy</a>.
                </p>
            </body>
        </html>
    `);
    nouvelleFenetre.document.close(); // Ferme le document pour le rendre visible
}


function ouvrirNouvelleFenetre3() {
    // Ouvre une nouvelle fenêtre avec les dimensions spécifiées
    const nouvelleFenetre = window.open("", "NouvelleFenetre", "width=400,height=200");
    nouvelleFenetre.document.write("<h1>Politique des cookies</h1>");
    nouvelleFenetre.document.close(); // Ferme le document pour le rendre visible
}
////
////



document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card-chiffre-cle');
    let hasScrolled = false;

    // Fonction pour démarrer l'observation après le premier scroll
    const onScrollStart = () => {
        if (!hasScrolled) {
            hasScrolled = true;
            startObserving(); // Lancer l'observation
        }
    };

    // Ajout de l'écouteur de scroll
    window.addEventListener('scroll', onScrollStart);

    // Fonction pour démarrer IntersectionObserver
    const startObserving = () => {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Ajouter la classe visible avec un délai basé sur l'index
                    const cardIndex = [...cards].indexOf(entry.target); // Trouver l'index de la carte
                    entry.target.style.transitionDelay = `${cardIndex * 0.3}s`; // Délai en secondes
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Arrêter d'observer
                }
            });
        }, {
            threshold: 0.2 // 20% de visibilité pour déclencher
        });

        cards.forEach(card => observer.observe(card)); // Observer chaque carte
    };
});









document.addEventListener('DOMContentLoaded', () => {
    const horairesSection = document.querySelector('.horaires');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Ajouter la classe visible
                observer.unobserve(entry.target); // Arrêter d'observer après l'animation
            }
        });
    }, {
        threshold: 0.6 // 30% visible pour déclencher
    });

    observer.observe(horairesSection);
});






document.addEventListener('DOMContentLoaded', () => {
    const tarifBlocks = document.querySelectorAll('.tarifs-text > div');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const index = [...tarifBlocks].indexOf(entry.target); // Obtenez l'index du bloc
                entry.target.style.transitionDelay = `${index * 0.3}s`; // Ajoutez un délai dynamique
                entry.target.classList.add('visible'); // Ajoutez la classe visible
                observer.unobserve(entry.target); // Arrêter d'observer cet élément
            }
        });
    }, {
        threshold: 0.2 // 20% visible pour déclencher l'animation
    });

    tarifBlocks.forEach(block => observer.observe(block)); // Observer chaque bloc
});





document.addEventListener('DOMContentLoaded', () => {
    const informationsSection = document.querySelector('.informations');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Ajouter la classe visible
                observer.unobserve(entry.target); // Arrêter d'observer cet élément
            }
        });
    }, {
        threshold: 0.3 // Déclenche l'animation quand 30% de l'élément est visible
    });

    observer.observe(informationsSection); // Observer la section entière
});






document.addEventListener('DOMContentLoaded', () => {
    const citationSection = document.querySelector('.citation');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Ajouter la classe 'visible'
                observer.unobserve(entry.target); // Arrêter d'observer une fois l'animation effectuée
            }
        });
    }, {
        threshold: 0.3 // Déclenche l'animation quand 30% de l'élément est visible
    });

    observer.observe(citationSection); // Observer la section contenant la citation
});
