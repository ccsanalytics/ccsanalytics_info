const translations = {
    "it": {
        "prodotti": "Prodotti",
        "soluzioni": "Soluzioni",
        "azienda": "Azienda",
        "contattaci": "Contattaci",
        "prodotti-titolo": "I nostri prodotti",
        "prodotti-descrizione": "Descrizione dei prodotti offerti...",
        "soluzioni-titolo": "Le nostre soluzioni",
        "soluzioni-descrizione": "Descrizione delle soluzioni proposte...",
        "azienda-titolo": "Chi siamo",
        "azienda-descrizione": "Informazioni sull'azienda...",
        "contattaci-titolo": "Contattaci",
        "contattaci-descrizione": "Modulo di contatto e informazioni di contatto..."
    },
    "en": {
        "prodotti": "Products",
        "soluzioni": "Solutions",
        "azienda": "Company",
        "contattaci": "Contact Us",
        "prodotti-titolo": "Our Products",
        "prodotti-descrizione": "Description of the offered products...",
        "soluzioni-titolo": "Our Solutions",
        "soluzioni-descrizione": "Description of proposed solutions...",
        "azienda-titolo": "About Us",
        "azienda-descrizione": "Information about the company...",
        "contattaci-titolo": "Contact Us",
        "contattaci-descrizione": "Contact form and contact information..."
    }
};

function setLanguage(language) {
    document.querySelectorAll('.translate').forEach((element) => {
        const key = element.getAttribute('data-key');
        element.innerText = translations[language][key];
    });
}

document.getElementById('language-selector').addEventListener('change', (event) => {
    setLanguage(event.target.value);
});

document.addEventListener('DOMContentLoaded', () => {
    const userLang = navigator.language.startsWith('it') ? 'it' : 'en';
    document.getElementById('language-selector').value = userLang;
    setLanguage(userLang);
});
