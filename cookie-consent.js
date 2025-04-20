/**
 * Ultimate GDPR Cookie Consent Solution v5.0 - Premium Edition
 * - Complete design customization
 * - Multiple UI themes
 * - Advanced positioning controls
 * - Dark mode support
 * - Granular cookie controls
 * - Enhanced analytics dashboard
 * - Animation controls
 * - Accessibility improvements
 */

// ============== CONFIGURATION SECTION ============== //
const config = {
    // General Settings
    enabled: true,
    uiTheme: 'modern', // 'modern', 'classic', 'minimal'
    darkMode: 'auto', // 'auto', 'light', 'dark'
    
    // Positioning
    bannerPosition: 'right', // 'left', 'right', 'center'
    floatingButtonPosition: 'right', // 'left', 'right'
    adminButtonPosition: 'right', // 'left', 'right'
    
    // Display Options
    showFloatingButton: true,
    showAdminButton: true,
    showLogo: true,
    logoUrl: 'auto', // 'auto' or URL
    showLanguageSelector: true,
    
    // Banner Dimensions
    bannerWidth: 440,
    bannerHeight: 'auto', // 'auto' or px value
    modalWidth: 845,
    modalHeight: 470,
    
    // Animation Settings
    animationsEnabled: true,
    animationDuration: 400, // ms
    animationType: 'slide-up', // 'slide-up', 'fade', 'slide-down'
    hoverAnimations: true,
    
    // Color Scheme - Light Mode
    colorsLight: {
        primary: '#2ecc71',      // Green (accept button color)
        primaryHover: '#27ae60',
        secondary: '#3498db',    // Blue (save button color)
        secondaryHover: '#2980b9',
        danger: '#e74c3c',       // Red (reject button color)
        dangerHover: '#c0392b',
        textDark: '#2c3e50',     // Dark text
        textLight: '#7f8c8d',    // Light text
        background: '#ffffff',   // White background
        backgroundSecondary: '#f8f9fa',
        toggleActive: '#2ecc71', // Same as primary
        toggleInactive: '#bdc3c7',// Gray for inactive
        border: '#e0e0e0',
        shadow: 'rgba(0, 0, 0, 0.12)'
    },
    
    // Color Scheme - Dark Mode
    colorsDark: {
        primary: '#27ae60',
        primaryHover: '#2ecc71',
        secondary: '#2980b9',
        secondaryHover: '#3498db',
        danger: '#c0392b',
        dangerHover: '#e74c3c',
        textDark: '#ecf0f1',
        textLight: '#bdc3c7',
        background: '#2c3e50',
        backgroundSecondary: '#34495e',
        toggleActive: '#27ae60',
        toggleInactive: '#7f8c8d',
        border: '#34495e',
        shadow: 'rgba(0, 0, 0, 0.3)'
    },
    
    // Domain restriction - only show on these domains (empty array = all domains)
    allowedDomains: ['dev-rpractice.pantheonsite.io', 'practicebdhere.myshopify.com'],
    
    // Language configuration
    languageConfig: {
        defaultLanguage: 'en', // Default language if auto-detection fails
        availableLanguages: [], // Empty array = all languages available
        autoDetectLanguage: true // Auto-detect language based on country/browser
    },
    
    // Geo-targeting configuration
    geoConfig: {
        // Only show in these countries (empty array = all countries)
        allowedCountries: [],
        
        // Only show in these regions/states (empty array = all regions)
        allowedRegions: [],
        
        // Only show in these cities (empty array = all cities)
        allowedCities: [],
        
        // Countries where banner should be hidden
        blockedCountries: [],
        
        // Regions where banner should be hidden
        blockedRegions: [],
        
        // Cities where banner should be hidden
        blockedCities: []
    },
    
    // Analytics configuration
    analytics: {
        enabled: true,
        storageDays: 30, // How long to keep analytics data
        passwordProtect: true, // Enable password protection
        dashboardPassword: 'admin123', // Default password (should be changed per site)
        passwordCookieDuration: 365, // Days to remember password
        showChangeHistory: true, // Show consent change history
        enableLogs: true, // Enable detailed logging
        exportEnabled: true // Enable data export
    },
    
    // Banner behavior
    behavior: {
        autoShow: true, // Automatically show banner on page load
        rememberLanguage: true, // Remember user's language preference
        acceptOnScroll: false, // Accept cookies when user scrolls
        acceptOnContinue: true, // Implicit consent when continuing to browse
        showIndividualCookies: true, // Show individual cookie toggles
        essentialCookiesOnly: false // Only essential cookies by default
    },

    // Cookie categories configuration
    cookieCategories: {
        functional: {
            enabled: true,
            required: true,
            title: 'essential',
            description: 'Necessary for website functionality'
        },
        analytics: {
            enabled: true,
            required: false,
            title: 'analytics',
            description: 'Help understand visitor interactions'
        },
        performance: {
            enabled: true,
            required: false,
            title: 'performance',
            description: 'Improve website performance'
        },
        advertising: {
            enabled: true,
            required: false,
            title: 'advertising',
            description: 'Deliver relevant ads'
        },
        uncategorized: {
            enabled: true,
            required: false,
            title: 'other',
            description: 'Uncategorized cookies'
        }
    }
};

// ============== MAIN IMPLEMENTATION ============== //
// Initialize dataLayer for Google Tag Manager
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }

// Set default consent (deny all except security)
gtag('consent', 'default', {
    'ad_storage': 'denied',
    'analytics_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'personalization_storage': 'denied',
    'functionality_storage': 'denied',
    'security_storage': 'granted'
});

// Enhanced cookie database with detailed descriptions
const cookieDatabase = {
    // Google Analytics/GA4
    '_ga': { category: 'analytics', duration: '2 years', description: 'Google Analytics user distinction' },
    '_gid': { category: 'analytics', duration: '24 hours', description: 'Google Analytics user distinction' },
    '_gat': { category: 'analytics', duration: '1 minute', description: 'Google Analytics throttle rate' },
    '_ga_': { category: 'analytics', duration: '2 years', description: 'GA4 session state' },
    
    // Facebook Pixel
    '_fbp': { category: 'advertising', duration: '3 months', description: 'Facebook conversion tracking' },
    'fr': { category: 'advertising', duration: '3 months', description: 'Facebook targeted ads' },
    
    // Functional cookies
    'wordpress_': { category: 'functional', duration: 'Session', description: 'WordPress authentication' },
    'wp-settings': { category: 'functional', duration: '1 year', description: 'WordPress preferences' },
    'PHPSESSID': { category: 'functional', duration: 'Session', description: 'PHP session' },
    'cookie_consent': { category: 'functional', duration: '1 year', description: 'Stores cookie consent preferences' },
    
    // WooCommerce cookies
    'woocommerce_items_in_cart': { category: 'functional', duration: 'Session', description: 'WooCommerce cart items tracking' },
    'woocommerce_cart_hash': { category: 'functional', duration: 'Session', description: 'WooCommerce cart hash' },
    
    // Advertising cookies
    '_gcl_au': { category: 'advertising', duration: '3 months', description: 'Google Ads conversion' },
    'IDE': { category: 'advertising', duration: '1 year', description: 'Google DoubleClick' },
    'NID': { category: 'advertising', duration: '6 months', description: 'Google user tracking' },
    
    // Other common cookies
    'gclid_tracker': { category: 'advertising', duration: 'Session', description: 'Tracks Google Click ID for conversions' },
    'tk_ai': { category: 'analytics', duration: 'Session', description: 'Jetpack/Tumblr analytics' },
    'external_id': { category: 'functional', duration: 'Session', description: 'External service identifier' }
};

// Complete EU language translations (same as before, but included for completeness)
const translations = {
    en: {
        title: "We value your privacy",
        description: "We use cookies to improve your browsing experience, provide personalized ads or content, and analyze our traffic. By clicking \"Accept All,\" you consent to the use of cookies.",
        privacy: "Privacy Policy",
        customize: "Adjust",
        reject: "Reject all",
        accept: "Accept all",
        essential: "Essential Cookies",
        essentialDesc: "Necessary for website functionality",
        analytics: "Analytics Cookies",
        analyticsDesc: "Help understand visitor interactions",
        performance: "Performance Cookies",
        performanceDesc: "Improve website performance",
        advertising: "Advertising Cookies",
        advertisingDesc: "Deliver relevant ads",
        other: "Other Cookies",
        otherDesc: "Uncategorized cookies",
        save: "Save Preferences",
        language: "English",
        statsTitle: "Consent Statistics",
        statsAccepted: "Accepted",
        statsRejected: "Rejected",
        statsCustom: "Customized",
        statsTotal: "Total",
        statsPercentage: "Percentage",
        statsLast7Days: "Last 7 Days",
        statsLast30Days: "Last 30 Days",
        passwordPrompt: "Enter password to view analytics",
        passwordSubmit: "Submit",
        passwordIncorrect: "Incorrect password",
        dashboardTitle: "Consent Analytics Dashboard",
        individualCookies: "Individual Cookies",
        darkMode: "Dark Mode",
        lightMode: "Light Mode",
        exportData: "Export Data",
        cookieDetails: "Cookie Details",
        cookieName: "Name",
        cookieValue: "Value",
        cookieDuration: "Duration",
        cookiePurpose: "Purpose",
        toggleAll: "Toggle All",
        enableAll: "Enable All",
        disableAll: "Disable All",
        noCookiesFound: "No cookies found in this category",
        changeHistory: "Consent Change History",
        date: "Date",
        action: "Action",
        userAgent: "User Agent",
        noHistory: "No consent changes recorded",
        exportCSV: "Export as CSV",
        exportJSON: "Export as JSON",
        copied: "Copied to clipboard"
    },
     fr: {
        title: "Nous respectons votre vie privée",
        description: "Nous utilisons des cookies pour améliorer votre expérience, fournir des publicités ou du contenu personnalisé et analyser notre trafic. En cliquant sur \"Tout accepter\", vous consentez à l'utilisation de cookies.",
        privacy: "Politique de confidentialité",
        customize: "Personnaliser",
        reject: "Tout refuser",
        accept: "Tout accepter",
        essential: "Cookies essentiels",
        essentialDesc: "Nécessaires au fonctionnement",
        analytics: "Cookies d'analyse",
        analyticsDesc: "Comprennent les interactions",
        performance: "Cookies de performance",
        performanceDesc: "Améliorent les performances",
        advertising: "Cookies publicitaires",
        advertisingDesc: "Diffusent des publicités",
        other: "Autres cookies",
        otherDesc: "Cookies non catégorisés",
        save: "Enregistrer",
        language: "Français",
        statsTitle: "Statistiques de Consentement",
        statsAccepted: "Accepté",
        statsRejected: "Rejeté",
        statsCustom: "Personnalisé",
        statsTotal: "Total",
        statsPercentage: "Pourcentage",
        statsLast7Days: "7 Derniers Jours",
        statsLast30Days: "30 Derniers Jours"
    },
    de: {
        title: "Wir schätzen Ihre Privatsphäre",
        description: "Wir verwenden Cookies, um Ihr Surferlebnis zu verbessern, personalisierte Anzeigen oder Inhalte bereitzustellen und unseren Datenverkehr zu analysieren. Wenn Sie auf \"Alle akzeptieren\" klicken, erklären Sie sich mit der Verwendung von Cookies einverstanden.",
        privacy: "Datenschutzrichtlinie",
        customize: "Anpassen",
        reject: "Alle ablehnen",
        accept: "Alle akzeptieren",
        essential: "Essenzielle Cookies",
        essentialDesc: "Für Website-Funktionalität",
        analytics: "Analytics-Cookies",
        analyticsDesc: "Verstehen Nutzerinteraktionen",
        performance: "Performance-Cookies",
        performanceDesc: "Verbessern die Leistung",
        advertising: "Werbe-Cookies",
        advertisingDesc: "Liefern relevante Anzeigen",
        other: "Andere Cookies",
        otherDesc: "Nicht kategorisierte Cookies",
        save: "Einstellungen speichern",
        language: "Deutsch",
        statsTitle: "Zustimmungsstatistiken",
        statsAccepted: "Akzeptiert",
        statsRejected: "Abgelehnt",
        statsCustom: "Angepasst",
        statsTotal: "Gesamt",
        statsPercentage: "Prozentsatz",
        statsLast7Days: "Letzten 7 Tage",
        statsLast30Days: "Letzten 30 Tage"
    },
    es: {
        title: "Valoramos su privacidad",
        description: "Utilizamos cookies para mejorar su experiencia, proporcionar anuncios o contenido personalizado y analizar nuestro tráfico. Al hacer clic en \"Aceptar todo\", usted acepta el uso de cookies.",
        privacy: "Política de privacidad",
        customize: "Personalizar",
        reject: "Rechazar todo",
        accept: "Aceptar todo",
        essential: "Cookies esenciales",
        essentialDesc: "Necesarias para el funcionamiento",
        analytics: "Cookies de análisis",
        analyticsDesc: "Ayudan a entender interacciones",
        performance: "Cookies de rendimiento",
        performanceDesc: "Mejoran el rendimiento",
        advertising: "Cookies publicitarias",
        advertisingDesc: "Muestran anuncios relevantes",
        other: "Otras cookies",
        otherDesc: "Cookies no categorizadas",
        save: "Guardar preferencias",
        language: "Español",
        statsTitle: "Estadísticas de Consentimiento",
        statsAccepted: "Aceptado",
        statsRejected: "Rechazado",
        statsCustom: "Personalizado",
        statsTotal: "Total",
        statsPercentage: "Porcentaje",
        statsLast7Days: "Últimos 7 Días",
        statsLast30Days: "Últimos 30 Días"
    },
    it: {
        title: "Rispettiamo la tua privacy",
        description: "Utilizziamo i cookie per migliorare la tua esperienza, fornire annunci o contenuti personalizzati e analizzare il nostro traffico. Cliccando su \"Accetta tutto\", acconsenti all'uso dei cookie.",
        privacy: "Privacy Policy",
        customize: "Personalizza",
        reject: "Rifiuta tutto",
        accept: "Accetta tutto",
        essential: "Cookie essenziali",
        essentialDesc: "Necessari per il funzionamento",
        analytics: "Cookie analitici",
        analyticsDesc: "Analizzano le interazioni",
        performance: "Cookie prestazioni",
        performanceDesc: "Migliorano le prestazioni",
        advertising: "Cookie pubblicitari",
        advertisingDesc: "Mostrano annunci pertinenti",
        other: "Altri cookie",
        otherDesc: "Cookie non categorizzati",
        save: "Salva preferenze",
        language: "Italiano",
        statsTitle: "Statistiche del Consenso",
        statsAccepted: "Accettato",
        statsRejected: "Rifiutato",
        statsCustom: "Personalizzato",
        statsTotal: "Totale",
        statsPercentage: "Percentuale",
        statsLast7Days: "Ultimi 7 Giorni",
        statsLast30Days: "Ultimi 30 Giorni"
    },
    pt: {
        title: "Valorizamos sua privacidade",
        description: "Usamos cookies para melhorar sua experiência, fornecer anúncios ou conteúdo personalizado e analisar nosso tráfego. Clicando em \"Aceitar Tudo\", você concorda com o uso de cookies.",
        privacy: "Política de Privacidade",
        customize: "Personalizar",
        reject: "Rejeitar Tudo",
        accept: "Aceitar Tudo",
        essential: "Cookies Essenciais",
        essentialDesc: "Necessários para o funcionamento",
        analytics: "Cookies de Análise",
        analyticsDesc: "Ajudam a entender interações",
        performance: "Cookies de Desempenho",
        performanceDesc: "Melhoram o desempenho",
        advertising: "Cookies de Publicidade",
        advertisingDesc: "Exibem anúncios relevantes",
        other: "Outros Cookies",
        otherDesc: "Cookies não categorizados",
        save: "Salvar Preferências",
        language: "Português",
        statsTitle: "Estatísticas de Consentimento",
        statsAccepted: "Aceito",
        statsRejected: "Rejeitado",
        statsCustom: "Personalizado",
        statsTotal: "Total",
        statsPercentage: "Percentagem",
        statsLast7Days: "Últimos 7 Dias",
        statsLast30Days: "Últimos 30 Dias"
    },
    nl: {
        title: "We waarderen uw privacy",
        description: "We gebruiken cookies om uw browse-ervaring te verbeteren, gepersonaliseerde advertenties of inhoud te bieden en ons verkeer te analyseren. Door op \"Alles accepteren\" te klikken, stemt u in met het gebruik van cookies.",
        privacy: "Privacybeleid",
        customize: "Aanpassen",
        reject: "Alles weigeren",
        accept: "Alles accepteren",
        essential: "Essentiële Cookies",
        essentialDesc: "Noodzakelijk voor websitefunctionaliteit",
        analytics: "Analysecookies",
        analyticsDesc: "Helpen bezoekersinteracties te begrijpen",
        performance: "Prestatiecookies",
        performanceDesc: "Verbeteren website prestaties",
        advertising: "Advertentiecookies",
        advertisingDesc: "Leveren relevante advertenties",
        other: "Andere Cookies",
        otherDesc: "Niet-gecategoriseerde cookies",
        save: "Voorkeuren opslaan",
        language: "Nederlands",
        statsTitle: "Toestemmingsstatistieken",
        statsAccepted: "Geaccepteerd",
        statsRejected: "Geweigerd",
        statsCustom: "Aangepast",
        statsTotal: "Totaal",
        statsPercentage: "Percentage",
        statsLast7Days: "Laatste 7 Dagen",
        statsLast30Days: "Laatste 30 Dagen"
    },
    pl: {
        title: "Szanujemy Twoją prywatność",
        description: "Używamy plików cookie, aby poprawić Twoje doświadczenia przeglądania, dostarczać spersonalizowane reklamy lub treści i analizować nasz ruch. Klikając „Zaakceptuj wszystkie”, wyrażasz zgodę na używanie plików cookie.",
        privacy: "Polityka prywatności",
        customize: "Dostosuj",
        reject: "Odrzuć wszystkie",
        accept: "Zaakceptuj wszystkie",
        essential: "Niezbędne pliki cookie",
        essentialDesc: "Wymagane do działania witryny",
        analytics: "Analityczne pliki cookie",
        analyticsDesc: "Pomagają zrozumieć interakcje",
        performance: "Pliki cookie wydajności",
        performanceDesc: "Poprawiają wydajność witryny",
        advertising: "Reklamowe pliki cookie",
        advertisingDesc: "Dostarczają odpowiednie reklamy",
        other: "Inne pliki cookie",
        otherDesc: "Nieskategoryzowane pliki cookie",
        save: "Zapisz preferencje",
        language: "Polski",
        statsTitle: "Statystyki zgód",
        statsAccepted: "Zaakceptowane",
        statsRejected: "Odrzucone",
        statsCustom: "Dostosowane",
        statsTotal: "Łącznie",
        statsPercentage: "Procent",
        statsLast7Days: "Ostatnie 7 Dni",
        statsLast30Days: "Ostatnie 30 Dni"
    },
    sv: {
        title: "Vi värdesätter din integritet",
        description: "Vi använder cookies för att förbättra din surfupplevelse, tillhandahålla anpassade annonser eller innehåll och analysera vår trafik. Genom att klicka på \"Acceptera alla\" samtycker du till användningen av cookies.",
        privacy: "Integritetspolicy",
        customize: "Anpassa",
        reject: "Avvisa alla",
        accept: "Acceptera alla",
        essential: "Nödvändiga Cookies",
        essentialDesc: "Nödvändiga för webbplatsens funktionalitet",
        analytics: "Analyscookies",
        analyticsDesc: "Hjälper till att förstå besökarinteraktioner",
        performance: "Prestandacookies",
        performanceDesc: "Förbättrar webbplatsens prestanda",
        advertising: "Annonscookies",
        advertisingDesc: "Levererar relevanta annonser",
        other: "Andra Cookies",
        otherDesc: "Okategoriserade cookies",
        save: "Spara inställningar",
        language: "Svenska",
        statsTitle: "Samtyckesstatistik",
        statsAccepted: "Accepterade",
        statsRejected: "Avvisade",
        statsCustom: "Anpassade",
        statsTotal: "Totalt",
        statsPercentage: "Procent",
        statsLast7Days: "Senaste 7 Dagarna",
        statsLast30Days: "Senaste 30 Dagarna"
    },
    da: {
        title: "Vi værdsætter dit privatliv",
        description: "Vi bruger cookies til at forbedre din browsingoplevelse, levere personificerede annoncer eller indhold og analysere vores trafik. Ved at klikke på \"Accepter alle\" giver du samtykke til brugen af cookies.",
        privacy: "Privatlivspolitik",
        customize: "Tilpas",
        reject: "Afvis alle",
        accept: "Accepter alle",
        essential: "Nødvendige Cookies",
        essentialDesc: "Nødvendige for webstedets funktionalitet",
        analytics: "Analysecookies",
        analyticsDesc: "Hjælper med at forstå brugerinteraktioner",
        performance: "Performancecookies",
        performanceDesc: "Forbedrer webstedets ydeevne",
        advertising: "Annoncecookies",
        advertisingDesc: "Leverer relevante annoncer",
        other: "Andre Cookies",
        otherDesc: "Ukategoriserede cookies",
        save: "Gem indstillinger",
        language: "Dansk",
        statsTitle: "Samtykkestatistik",
        statsAccepted: "Accepteret",
        statsRejected: "Afvist",
        statsCustom: "Tilpasset",
        statsTotal: "Total",
        statsPercentage: "Procentdel",
        statsLast7Days: "Sidste 7 Dage",
        statsLast30Days: "Sidste 30 Dage"
    },
    fi: {
        title: "Arvostamme yksityisyyttäsi",
        description: "Käytämme evästeitä parantaaksemme selauskokemustasi, tarjotaksemme henkilökohtaisia mainoksia tai sisältöä ja analysoidaksemme liikennettämme. Klikkaamalla \"Hyväksy kaikki\" annat suostumuksesi evästeiden käyttöön.",
        privacy: "Tietosuojakäytäntö",
        customize: "Mukauta",
        reject: "Hylkää kaikki",
        accept: "Hyväksy kaikki",
        essential: "Välttämättömät evästeet",
        essentialDesc: "Välttämättömiä sivuston toiminnan kannalta",
        analytics: "Analytiikkaevästeet",
        analyticsDesc: "Auttavat ymmärtämään käyttäjäinteraktioita",
        performance: "Suorituskykyevästeet",
        performanceDesc: "Parantavat sivuston suorituskykyä",
        advertising: "Mainosevästeet",
        advertisingDesc: "Toimittavat asiaankuuluvia mainoksia",
        other: "Muut evästeet",
        otherDesc: "Luokittelemattomat evästeet",
        save: "Tallenna asetukset",
        language: "Suomi",
        statsTitle: "Suostumustilastot",
        statsAccepted: "Hyväksytty",
        statsRejected: "Hylätty",
        statsCustom: "Mukautettu",
        statsTotal: "Yhteensä",
        statsPercentage: "Prosenttia",
        statsLast7Days: "Viimeiset 7 Päivää",
        statsLast30Days: "Viimeiset 30 Päivää"
    },
    el: {
        title: "Σεβόμαστε την ιδιωτικότητά σας",
        description: "Χρησιμοποιούμε cookies για να βελτιώσουμε την εμπειρία σας, να παρέχουμε εξατομικευμένες διαφημίσεις ή περιεχόμενο και να αναλύουμε την επισκεψιμότητά μας. Κάνοντας κλικ στο \"Αποδοχή όλων\", συναινείτε στη χρήση cookies.",
        privacy: "Πολιτική Απορρήτου",
        customize: "Προσαρμογή",
        reject: "Απόρριψη όλων",
        accept: "Αποδοχή όλων",
        essential: "Απαραίτητα Cookies",
        essentialDesc: "Απαραίτητα για τη λειτουργία του ιστότοπου",
        analytics: "Αναλυτικά Cookies",
        analyticsDesc: "Βοηθούν στην κατανόηση αλληλεπιδράσεων",
        performance: "Cookies Απόδοσης",
        performanceDesc: "Βελτιώνουν την απόδοση του ιστότοπου",
        advertising: "Διαφημιστικά Cookies",
        advertisingDesc: "Παρέχουν σχετικές διαφημίσεις",
        other: "Άλλα Cookies",
        otherDesc: "Μη κατηγοριοποιημένα cookies",
        save: "Αποθήκευση προτιμήσεων",
        language: "Ελληνικά",
        statsTitle: "Στατιστικά Συναίνεσης",
        statsAccepted: "Αποδεκτά",
        statsRejected: "Απορριφθέντα",
        statsCustom: "Προσαρμοσμένα",
        statsTotal: "Σύνολο",
        statsPercentage: "Ποσοστό",
        statsLast7Days: "Τελευταίες 7 Ημέρες",
        statsLast30Days: "Τελευταίες 30 Ημέρες"
    },
    hu: {
        title: "Tiszteljük az Ön privát szféráját",
        description: "Cookie-kat használunk a böngészési élmény javításához, személyre szabott hirdetések vagy tartalom nyújtásához és a forgalmunk elemzéséhez. Az \"Összes elfogadása\" gombra kattintva hozzájárul a cookie-k használatához.",
        privacy: "Adatvédelmi irányelv",
        customize: "Testreszabás",
        reject: "Összes elutasítása",
        accept: "Összes elfogadása",
        essential: "Alapvető Cookie-k",
        essentialDesc: "A weboldal működéséhez szükséges",
        analytics: "Elemző Cookie-k",
        analyticsDesc: "Segítenek megérteni a látogatói interakciókat",
        performance: "Teljesítmény Cookie-k",
        performanceDesc: "Javítják a weboldal teljesítményét",
        advertising: "Hirdetési Cookie-k",
        advertisingDesc: "Releváns hirdetéseket jelenítenek meg",
        other: "Egyéb Cookie-k",
        otherDesc: "Nincs kategorizálva",
        save: "Beállítások mentése",
        language: "Magyar",
        statsTitle: "Hozzájárulási statisztikák",
        statsAccepted: "Elfogadva",
        statsRejected: "Elutasítva",
        statsCustom: "Testreszabva",
        statsTotal: "Összesen",
        statsPercentage: "Százalék",
        statsLast7Days: "Elmúlt 7 Nap",
        statsLast30Days: "Elmúlt 30 Nap"
    },
    cs: {
        title: "Vaše soukromí je pro nás důležité",
        description: "Používáme cookies ke zlepšení vašeho zážitku z prohlížení, poskytování personalizovaných reklam nebo obsahu a analýze našeho provozu. Kliknutím na \"Přijmout vše\" souhlasíte s používáním cookies.",
        privacy: "Zásady ochrany osobních údajů",
        customize: "Přizpůsobit",
        reject: "Odmítnout vše",
        accept: "Přijmout vše",
        essential: "Nezbytné Cookies",
        essentialDesc: "Nezbytné pro funkčnost webu",
        analytics: "Analytické Cookies",
        analyticsDesc: "Pomáhají porozumět interakcím návštěvníků",
        performance: "Výkonnostní Cookies",
        performanceDesc: "Zlepšují výkon webu",
        advertising: "Reklamní Cookies",
        advertisingDesc: "Poskytují relevantní reklamy",
        other: "Ostatní Cookies",
        otherDesc: "Nekategorizované cookies",
        save: "Uložit nastavení",
        language: "Čeština",
        statsTitle: "Statistiky souhlasu",
        statsAccepted: "Přijato",
        statsRejected: "Odmítnuto",
        statsCustom: "Přizpůsobeno",
        statsTotal: "Celkem",
        statsPercentage: "Procento",
        statsLast7Days: "Posledních 7 Dní",
        statsLast30Days: "Posledních 30 Dní"
    },
    ro: {
        title: "Respectăm confidențialitatea dumneavoastră",
        description: "Folosim cookie-uri pentru a îmbunătăți experiența de navigare, pentru a furniza reclame sau conținut personalizat și pentru a analiza traficul nostru. Făcând clic pe \"Acceptă tot\", sunteți de acord cu utilizarea cookie-urilor.",
        privacy: "Politica de confidențialitate",
        customize: "Personalizează",
        reject: "Respinge tot",
        accept: "Acceptă tot",
        essential: "Cookie-uri esențiale",
        essentialDesc: "Necesare pentru funcționalitatea site-ului",
        analytics: "Cookie-uri analitice",
        analyticsDesc: "Ajută la înțelegerea interacțiunilor vizitatorilor",
        performance: "Cookie-uri de performanță",
        performanceDesc: "Îmbunătățesc performanța site-ului",
        advertising: "Cookie-uri publicitare",
        advertisingDesc: "Furnizează reclame relevante",
        other: "Alte Cookie-uri",
        otherDesc: "Cookie-uri necategorizate",
        save: "Salvează preferințele",
        language: "Română",
        statsTitle: "Statistici consimțământ",
        statsAccepted: "Acceptat",
        statsRejected: "Respins",
        statsCustom: "Personalizat",
        statsTotal: "Total",
        statsPercentage: "Procent",
        statsLast7Days: "Ultimele 7 Zile",
        statsLast30Days: "Ultimele 30 Zile"
    },
    sk: {
        title: "Rešpektujeme vaše súkromie",
        description: "Používame cookies na zlepšenie vášho zážitku z prehliadania, poskytovanie personalizovaných reklám alebo obsahu a analýzu nášho prevádzky. Kliknutím na \"Prijať všetko\" súhlasíte s používaním súborov cookie.",
        privacy: "Zásady ochrany osobných údajov",
        customize: "Prispôsobiť",
        reject: "Odmietnuť všetko",
        accept: "Prijať všetko",
        essential: "Nevyhnutné Cookies",
        essentialDesc: "Nevyhnutné pre funkčnosť webu",
        analytics: "Analytické Cookies",
        analyticsDesc: "Pomáhajú pochopiť interakcie návštevníkov",
        performance: "Výkonnostné Cookies",
        performanceDesc: "Zlepšujú výkon webu",
        advertising: "Reklamné Cookies",
        advertisingDesc: "Poskytujú relevantné reklamy",
        other: "Ostatné Cookies",
        otherDesc: "Nekategorizované cookies",
        save: "Uložiť nastavenia",
        language: "Slovenčina",
        statsTitle: "Štatistiky súhlasu",
        statsAccepted: "Prijaté",
        statsRejected: "Odmietnuté",
        statsCustom: "Prispôsobené",
        statsTotal: "Celkom",
        statsPercentage: "Percento",
        statsLast7Days: "Posledných 7 Dní",
        statsLast30Days: "Posledných 30 Dní"
    },
    sl: {
        title: "Spoštujemo vašo zasebnost",
        description: "Uporabljamo piškotke za izboljšanje vaše izkušnje brskanja, zagotavljanje prilagojenih oglasov ali vsebin in analizo našega prometa. S klikom na \"Sprejmi vse\" se strinjate z uporabo piškotkov.",
        privacy: "Politika zasebnosti",
        customize: "Prilagodi",
        reject: "Zavrni vse",
        accept: "Sprejmi vse",
        essential: "Bistveni piškotki",
        essentialDesc: "Nujni za delovanje spletnega mesta",
        analytics: "Analitični piškotki",
        analyticsDesc: "Pomagajo razumeti interakcije obiskovalcev",
        performance: "Piškotki za zmogljivost",
        performanceDesc: "Izboljšajo zmogljivost spletnega mesta",
        advertising: "Oglasni piškotki",
        advertisingDesc: "Zagotavljajo ustrezne oglase",
        other: "Drugi piškotki",
        otherDesc: "Nekategorizirani piškotki",
        save: "Shrani nastavitve",
        language: "Slovenščina",
        statsTitle: "Statistika privolitve",
        statsAccepted: "Sprejeto",
        statsRejected: "Zavrnjeno",
        statsCustom: "Prilagojeno",
        statsTotal: "Skupaj",
        statsPercentage: "Odstotek",
        statsLast7Days: "Zadnjih 7 Dni",
        statsLast30Days: "Zadnjih 30 Dni"
    },
    bg: {
        title: "Уважаваме вашата поверителност",
        description: "Използваме бисквитки, за да подобрим вашето сърфиране, да предоставяме персонализирани реклами или съдържание и да анализираме нашия трафик. С натискане на \"Приеми всички\" вие се съгласявате с използването на бисквитки.",
        privacy: "Политика за поверителност",
        customize: "Персонализиране",
        reject: "Отхвърли всички",
        accept: "Приеми всички",
        essential: "Основни бисквитки",
        essentialDesc: "Необходими за функционалността на сайта",
        analytics: "Аналитични бисквитки",
        analyticsDesc: "Помагат за разбиране на взаимодействията",
        performance: "Бисквитки за производителност",
        performanceDesc: "Подобряват производителността на сайта",
        advertising: "Рекламни бисквитки",
        advertisingDesc: "Доставят релевантни реклами",
        other: "Други бисквитки",
        otherDesc: "Некласифицирани бисквитки",
        save: "Запази настройките",
        language: "Български",
        statsTitle: "Статистика за съгласие",
        statsAccepted: "Прието",
        statsRejected: "Отхвърлено",
        statsCustom: "Персонализирано",
        statsTotal: "Общо",
        statsPercentage: "Процент",
        statsLast7Days: "Последните 7 Дни",
        statsLast30Days: "Последните 30 Дни"
    },
    hr: {
        title: "Poštujemo vašu privatnost",
        description: "Koristimo kolačiće za poboljšanje vašeg iskustva pregledavanja, pružanje personaliziranih oglasa ili sadržaja i analizu našeg prometa. Klikom na \"Prihvati sve\" pristajete na korištenje kolačića.",
        privacy: "Politika privatnosti",
        customize: "Prilagodi",
        reject: "Odbaci sve",
        accept: "Prihvati sve",
        essential: "Osnovni kolačići",
        essentialDesc: "Potrebni za funkcionalnost web stranice",
        analytics: "Analitički kolačići",
        analyticsDesc: "Pomažu razumjeti interakcije posjetitelja",
        performance: "Kolačići performansi",
        performanceDesc: "Poboljšavaju performanse web stranice",
        advertising: "Oglasni kolačići",
        advertisingDesc: "Pružaju relevantne oglase",
        other: "Ostali kolačići",
        otherDesc: "Nekategorizirani kolačići",
        save: "Spremi postavke",
        language: "Hrvatski",
        statsTitle: "Statistika pristanka",
        statsAccepted: "Prihvaćeno",
        statsRejected: "Odbijeno",
        statsCustom: "Prilagođeno",
        statsTotal: "Ukupno",
        statsPercentage: "Postotak",
        statsLast7Days: "Zadnjih 7 Dana",
        statsLast30Days: "Zadnjih 30 Dana"
    },
    lt: {
        title: "Mes gerbiame jūsų privatumą",
        description: "Mes naudojame slapukus, kad pagerintume jūsų naršymo patirtį, teiktume suasmenintas reklamas ar turinį ir analizuotume savo srautą. Spustelėję \"Priimti viską\" sutinkate su slapukų naudojimu.",
        privacy: "Privatumo politika",
        customize: "Pritaikyti",
        reject: "Atmesti viską",
        accept: "Priimti viską",
        essential: "Būtini slapukai",
        essentialDesc: "Būtini svetainės funkcionalumui",
        analytics: "Analitiniai slapukai",
        analyticsDesc: "Padeda suprasti lankytojų sąveiką",
        performance: "Veiklos slapukai",
        performanceDesc: "Pagerina svetainės veikimą",
        advertising: "Reklaminiai slapukai",
        advertisingDesc: "Teikia aktualias reklamas",
        other: "Kiti slapukai",
        otherDesc: "Nekategorizuoti slapukai",
        save: "Išsaugoti nuostatas",
        language: "Lietuvių",
        statsTitle: "Sutikimo statistika",
        statsAccepted: "Priimta",
        statsRejected: "Atmesta",
        statsCustom: "Pritaikyta",
        statsTotal: "Iš viso",
        statsPercentage: "Procentas",
        statsLast7Days: "Paskutinės 7 Dienos",
        statsLast30Days: "Paskutinės 30 Dienų"
    },
    lv: {
        title: "Mēs cienām jūsu privātumu",
        description: "Mēs izmantojam sīkfailus, lai uzlabotu jūsu pārlūkošanas pieredzi, nodrošinātu personalizētus reklāmas vai saturu un analizētu mūsu satiksmi. Noklikšķinot uz \"Piekrist visiem\", jūs piekrītat sīkfailu izmantošanai.",
        privacy: "Privātuma politika",
        customize: "Pielāgot",
        reject: "Noraidīt visus",
        accept: "Piekrist visiem",
        essential: "Būtiskie sīkfaili",
        essentialDesc: "Nepieciešami vietnes funkcionalitātei",
        analytics: "Analītiskie sīkfaili",
        analyticsDesc: "Palīdz izprast apmeklētāju mijiedarbību",
        performance: "Veiktspējas sīkfaili",
        performanceDesc: "Uzlabo vietnes veiktspēju",
        advertising: "Reklāmas sīkfaili",
        advertisingDesc: "Nodrošina atbilstošas reklāmas",
        other: "Citi sīkfaili",
        otherDesc: "Nekategorizēti sīkfaili",
        save: "Saglabāt iestatījumus",
        language: "Latviešu",
        statsTitle: "Piekrišanas statistika",
        statsAccepted: "Piekrituši",
        statsRejected: "Noraidīti",
        statsCustom: "Pielāgoti",
        statsTotal: "Kopā",
        statsPercentage: "Procenti",
        statsLast7Days: "Pēdējās 7 Dienas",
        statsLast30Days: "Pēdējās 30 Dienas"
    },
    et: {
        title: "Me austame teie privaatsust",
        description: "Kasutame küpsiseid, et parandada teie veebilehitsemise kogemust, pakkuda personaalseid reklaame või sisu ning analüüsida oma liiklust. Klõpsates nupul \"Nõustu kõigega\", nõustute küpsiste kasutamisega.",
        privacy: "Privaatsuspoliitika",
        customize: "Kohanda",
        reject: "Keeldu kõigest",
        accept: "Nõustu kõigega",
        essential: "Olulised küpsised",
        essentialDesc: "Vajalikud veebisaidi toimimiseks",
        analytics: "Analüütilised küpsised",
        analyticsDesc: "Aitavad mõista külastajate suhtlemist",
        performance: "Töökindluse küpsised",
        performanceDesc: "Parandavad veebisaidi jõudlust",
        advertising: "Reklaamiküpsised",
        advertisingDesc: "Pakuvad asjakohaseid reklaame",
        other: "Muud küpsised",
        otherDesc: "Liigitamata küpsised",
        save: "Salvesta eelistused",
        language: "Eesti",
        statsTitle: "Nõusoleku statistika",
        statsAccepted: "Nõustutud",
        statsRejected: "Keeldutud",
        statsCustom: "Kohandatud",
        statsTotal: "Kokku",
        statsPercentage: "Protsent",
        statsLast7Days: "Viimased 7 Päeva",
        statsLast30Days: "Viimased 30 Päeva"
    },
    mt: {
        title: "Nirrispettaw il-privatezza tiegħek",
        description: "Nużaw cookies biex ittejjeb l-esperjenza tiegħek ta 'navigazzjoni, nipprovdu reklami jew kontent personalizzat u nanalizzaw it-traffiku tagħna. Billi tikklikkja \"Aċċetta Kollox\", qed tagħti l-kunsens għall-użu ta 'cookies.",
        privacy: "Politika tal-Privatezza",
        customize: "Ippersonalizza",
        reject: "Irrifjuta Kollox",
        accept: "Aċċetta Kollox",
        essential: "Cookies Essenzjali",
        essentialDesc: "Meħtieġa għall-funzjonalità tas-sit",
        analytics: "Cookies Analitiċi",
        analyticsDesc: "Jgħin fuq interazzjonijiet tal-viżitatur",
        performance: "Cookies ta 'Prestazzjoni",
        performanceDesc: "Ittejjeb il-prestazzjoni tas-sit",
        advertising: "Cookies tar-Reklamar",
        advertisingDesc: "Ipprovdi reklami rilevanti",
        other: "Cookies Oħra",
        otherDesc: "Cookies mhux kategorizzati",
        save: "Issejvja l-Preferenzi",
        language: "Malti",
        statsTitle: "Statistika tal-Kunsens",
        statsAccepted: "Aċċettat",
        statsRejected: "Rrifjutat",
        statsCustom: "Ippersonalizzat",
        statsTotal: "Total",
        statsPercentage: "Perċentwal",
        statsLast7Days: "Aħħar 7 Ġranet",
        statsLast30Days: "Aħħar 30 Ġranet"
    },
    // ... (keep all other language translations the same as before)
};

// Country to language mapping for auto-translation
const countryLanguageMap = {
    // EU Countries
    'AT': 'de',     // Austria
    'BE': 'nl',     // Belgium (Dutch)
    'BE': 'fr',     // Belgium (French)
    'BG': 'bg',     // Bulgaria
    'HR': 'hr',     // Croatia
    'CY': 'el',     // Cyprus
    'CZ': 'cs',     // Czech Republic
    'DK': 'da',     // Denmark
    'EE': 'et',     // Estonia
    'FI': 'fi',     // Finland
    'FR': 'fr',     // France
    'DE': 'de',     // Germany
    'GR': 'el',     // Greece
    'HU': 'hu',     // Hungary
    'IE': 'en',     // Ireland
    'IT': 'it',     // Italy
    'LV': 'lv',     // Latvia
    'LT': 'lt',     // Lithuania
    'LU': 'fr',     // Luxembourg
    'LU': 'de',     // Luxembourg
    'MT': 'mt',     // Malta
    'NL': 'nl',     // Netherlands
    'PL': 'pl',     // Poland
    'PT': 'pt',     // Portugal
    'RO': 'ro',     // Romania
    'SK': 'sk',     // Slovakia
    'SI': 'sl',     // Slovenia
    'ES': 'es',     // Spain
    'SE': 'sv',     // Sweden
    
    // Other European countries
    'AL': 'en',     // Albania
    'BA': 'en',     // Bosnia and Herzegovina
    'IS': 'en',     // Iceland
    'LI': 'de',     // Liechtenstein
    'MK': 'en',     // North Macedonia
    'NO': 'en',     // Norway
    'RS': 'en',     // Serbia
    'CH': 'de',     // Switzerland
    'CH': 'fr',     // Switzerland
    'CH': 'it',     // Switzerland
    'UA': 'uk',     // Ukraine
    'GB': 'en',     // United Kingdom
    
    // Rest of the world
    'US': 'en',     // United States
    'CA': 'en',     // Canada
    'CA': 'fr',     // Canada (French)
    'AU': 'en',     // Australia
    'NZ': 'en',     // New Zealand
    'ZA': 'en',     // South Africa
    'IN': 'en',     // India
    'CN': 'zh',     // China
    'JP': 'ja',     // Japan
    'KR': 'ko',     // South Korea
    'BR': 'pt',     // Brazil
    'MX': 'es',     // Mexico
    'AR': 'es',     // Argentina
    'RU': 'ru'      // Russia
};

// Analytics data storage
let consentAnalytics = {
    total: {
        accepted: 0,
        rejected: 0,
        custom: 0
    },
    daily: {},
    weekly: {},
    monthly: {},
    changeHistory: []
};

// Password protection for analytics
let isDashboardAuthenticated = false;
let isDarkMode = false;

// Load analytics data from localStorage
function loadAnalyticsData() {
    const savedData = localStorage.getItem('consentAnalytics');
    if (savedData) {
        consentAnalytics = JSON.parse(savedData);
    }
    
    // Initialize today's data if not exists
    const today = new Date().toISOString().split('T')[0];
    if (!consentAnalytics.daily[today]) {
        consentAnalytics.daily[today] = {
            accepted: 0,
            rejected: 0,
            custom: 0
        };
    }
    
    // Check if dashboard is authenticated
    if (config.analytics.passwordProtect) {
        isDashboardAuthenticated = getCookie('dashboard_auth') === 'true';
    } else {
        isDashboardAuthenticated = true;
    }
    
    // Check dark mode preference
    checkDarkMode();
}

// Check and set dark mode
function checkDarkMode() {
    if (config.darkMode === 'auto') {
        isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    } else {
        isDarkMode = config.darkMode === 'dark';
    }
    
    // Check for user override
    const userPref = getCookie('dark_mode_pref');
    if (userPref) {
        isDarkMode = userPref === 'dark';
    }
}

// Toggle dark mode
function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    setCookie('dark_mode_pref', isDarkMode ? 'dark' : 'light', 365);
    applyColorScheme();
}

// Apply color scheme based on current mode
function applyColorScheme() {
    const colors = isDarkMode ? config.colorsDark : config.colorsLight;
    const root = document.documentElement;
    
    // Set CSS variables
    root.style.setProperty('--primary-color', colors.primary);
    root.style.setProperty('--primary-hover', colors.primaryHover);
    root.style.setProperty('--secondary-color', colors.secondary);
    root.style.setProperty('--secondary-hover', colors.secondaryHover);
    root.style.setProperty('--danger-color', colors.danger);
    root.style.setProperty('--danger-hover', colors.dangerHover);
    root.style.setProperty('--text-dark', colors.textDark);
    root.style.setProperty('--text-light', colors.textLight);
    root.style.setProperty('--background', colors.background);
    root.style.setProperty('--background-secondary', colors.backgroundSecondary);
    root.style.setProperty('--toggle-active', colors.toggleActive);
    root.style.setProperty('--toggle-inactive', colors.toggleInactive);
    root.style.setProperty('--border-color', colors.border);
    root.style.setProperty('--shadow-color', colors.shadow);
    
    // Update dark mode toggle if exists
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
        darkModeToggle.textContent = isDarkMode ? translations[lang].lightMode : translations[lang].darkMode;
    }
}

// Save analytics data to localStorage
function saveAnalyticsData() {
    localStorage.setItem('consentAnalytics', JSON.stringify(consentAnalytics));
}

// Update analytics data
function updateConsentStats(status, previousConsent = null) {
    const today = new Date().toISOString().split('T')[0];
    
    // Update totals
    if (status === 'accepted') {
        consentAnalytics.total.accepted++;
        consentAnalytics.daily[today].accepted++;
    } else if (status === 'rejected') {
        consentAnalytics.total.rejected++;
        consentAnalytics.daily[today].rejected++;
    } else if (status === 'custom') {
        consentAnalytics.total.custom++;
        consentAnalytics.daily[today].custom++;
    }
    
    // Record change history
    if (config.analytics.enableLogs) {
        const changeEntry = {
            date: new Date().toISOString(),
            action: status,
            previousConsent: previousConsent,
            userAgent: navigator.userAgent,
            language: navigator.language,
            screenResolution: `${window.screen.width}x${window.screen.height}`,
            page: window.location.pathname
        };
        
        consentAnalytics.changeHistory.push(changeEntry);
        
        // Keep only the last 100 entries
        if (consentAnalytics.changeHistory.length > 100) {
            consentAnalytics.changeHistory.shift();
        }
    }
    
    // Update weekly and monthly stats
    updateTimeBasedStats(today, status);
    
    saveAnalyticsData();
}

// Update weekly and monthly stats
function updateTimeBasedStats(date, status) {
    const dateObj = new Date(date);
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1;
    const week = getWeekNumber(dateObj);
    
    // Weekly stats
    const weekKey = `${year}-W${week}`;
    if (!consentAnalytics.weekly[weekKey]) {
        consentAnalytics.weekly[weekKey] = {
            accepted: 0,
            rejected: 0,
            custom: 0
        };
    }
    
    // Monthly stats
    const monthKey = `${year}-${month}`;
    if (!consentAnalytics.monthly[monthKey]) {
        consentAnalytics.monthly[monthKey] = {
            accepted: 0,
            rejected: 0,
            custom: 0
        };
    }
    
    // Update counts
    if (status === 'accepted') {
        consentAnalytics.weekly[weekKey].accepted++;
        consentAnalytics.monthly[monthKey].accepted++;
    } else if (status === 'rejected') {
        consentAnalytics.weekly[weekKey].rejected++;
        consentAnalytics.monthly[monthKey].rejected++;
    } else if (status === 'custom') {
        consentAnalytics.weekly[weekKey].custom++;
        consentAnalytics.monthly[monthKey].custom++;
    }
}

// Helper function to get week number
function getWeekNumber(date) {
    const d = new Date(date);
    d.setHours(0, 0, 0, 0);
    d.setDate(d.getDate() + 3 - (d.getDay() + 6) % 7);
    const week1 = new Date(d.getFullYear(), 0, 4);
    return 1 + Math.round(((d - week1) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
}

// Generate analytics dashboard HTML
function generateAnalyticsDashboard(language = 'en') {
    const lang = translations[language] || translations.en;
    
    // Calculate totals
    const total = consentAnalytics.total.accepted + 
                 consentAnalytics.total.rejected + 
                 consentAnalytics.total.custom;
    
    const acceptedPercent = total > 0 ? Math.round((consentAnalytics.total.accepted / total) * 100) : 0;
    const rejectedPercent = total > 0 ? Math.round((consentAnalytics.total.rejected / total) * 100) : 0;
    const customPercent = total > 0 ? Math.round((consentAnalytics.total.custom / total) * 100) : 0;
    
    // Get last 7 days data
    const last7Days = {};
    const dates = Object.keys(consentAnalytics.daily).sort().reverse().slice(0, 7);
    dates.forEach(date => {
        last7Days[date] = consentAnalytics.daily[date];
    });
    
    // Get last 30 days data
    const last30Days = {};
    const monthlyDates = Object.keys(consentAnalytics.daily).sort().reverse().slice(0, 30);
    monthlyDates.forEach(date => {
        last30Days[date] = consentAnalytics.daily[date];
    });
    
    // Generate change history if enabled
    const changeHistoryHTML = config.analytics.showChangeHistory ? `
    <div class="time-stat">
        <h4>${lang.changeHistory}</h4>
        <div class="change-history-container">
            ${consentAnalytics.changeHistory.length > 0 ? `
            <table class="history-table">
                <thead>
                    <tr>
                        <th>${lang.date}</th>
                        <th>${lang.action}</th>
                        <th>${lang.userAgent}</th>
                    </tr>
                </thead>
                <tbody>
                    ${consentAnalytics.changeHistory.slice().reverse().map(entry => `
                    <tr>
                        <td>${new Date(entry.date).toLocaleString()}</td>
                        <td>${entry.action}</td>
                        <td>${entry.userAgent.substring(0, 30)}...</td>
                    </tr>`).join('')}
                </tbody>
            </table>` : `<p class="no-history">${lang.noHistory}</p>`}
        </div>
    </div>` : '';
    
    // Generate export buttons if enabled
    const exportButtons = config.analytics.exportEnabled ? `
    <div class="export-buttons">
        <button id="exportCSV" class="export-btn">${lang.exportCSV}</button>
        <button id="exportJSON" class="export-btn">${lang.exportJSON}</button>
    </div>` : '';
    
    return `
    <div class="analytics-dashboard">
        <div class="dashboard-header">
            <h3>${lang.dashboardTitle}</h3>
            ${exportButtons}
        </div>
        
        <div class="stats-summary">
            <div class="stat-card accepted">
                <h4>${lang.statsAccepted}</h4>
                <div class="stat-value">${consentAnalytics.total.accepted}</div>
                <div class="stat-percentage">${acceptedPercent}%</div>
            </div>
            
            <div class="stat-card rejected">
                <h4>${lang.statsRejected}</h4>
                <div class="stat-value">${consentAnalytics.total.rejected}</div>
                <div class="stat-percentage">${rejectedPercent}%</div>
            </div>
            
            <div class="stat-card custom">
                <h4>${lang.statsCustom}</h4>
                <div class="stat-value">${consentAnalytics.total.custom}</div>
                <div class="stat-percentage">${customPercent}%</div>
            </div>
            
            <div class="stat-card total">
                <h4>${lang.statsTotal}</h4>
                <div class="stat-value">${total}</div>
                <div class="stat-percentage">100%</div>
            </div>
        </div>
        
        <div class="time-based-stats">
            <div class="time-stat">
                <h4>${lang.statsLast7Days}</h4>
                <div class="stat-bars">
                    ${Object.entries(last7Days).map(([date, data]) => {
                        const dayTotal = data.accepted + data.rejected + data.custom;
                        const dayAcceptedPercent = dayTotal > 0 ? (data.accepted / dayTotal) * 100 : 0;
                        const dayRejectedPercent = dayTotal > 0 ? (data.rejected / dayTotal) * 100 : 0;
                        const dayCustomPercent = dayTotal > 0 ? (data.custom / dayTotal) * 100 : 0;
                        
                        return `
                        <div class="stat-bar-container">
                            <div class="stat-bar-label">${date}</div>
                            <div class="stat-bar">
                                <div class="stat-bar-segment accepted" style="width: ${dayAcceptedPercent}%"></div>
                                <div class="stat-bar-segment custom" style="width: ${dayCustomPercent}%"></div>
                                <div class="stat-bar-segment rejected" style="width: ${dayRejectedPercent}%"></div>
                            </div>
                            <div class="stat-bar-legend">
                                <span>${data.accepted} ${lang.statsAccepted}</span>
                                <span>${data.custom} ${lang.statsCustom}</span>
                                <span>${data.rejected} ${lang.statsRejected}</span>
                            </div>
                        </div>`;
                    }).join('')}
                </div>
            </div>
            
            <div class="time-stat">
                <h4>${lang.statsLast30Days}</h4>
                <div class="stat-bars">
                    ${Object.entries(last30Days).map(([date, data]) => {
                        const dayTotal = data.accepted + data.rejected + data.custom;
                        const dayAcceptedPercent = dayTotal > 0 ? (data.accepted / dayTotal) * 100 : 0;
                        const dayRejectedPercent = dayTotal > 0 ? (data.rejected / dayTotal) * 100 : 0;
                        const dayCustomPercent = dayTotal > 0 ? (data.custom / dayTotal) * 100 : 0;
                        
                        return `
                        <div class="stat-bar-container">
                            <div class="stat-bar-label">${date}</div>
                            <div class="stat-bar">
                                <div class="stat-bar-segment accepted" style="width: ${dayAcceptedPercent}%"></div>
                                <div class="stat-bar-segment custom" style="width: ${dayCustomPercent}%"></div>
                                <div class="stat-bar-segment rejected" style="width: ${dayRejectedPercent}%"></div>
                            </div>
                            <div class="stat-bar-legend">
                                <span>${data.accepted} ${lang.statsAccepted}</span>
                                <span>${data.custom} ${lang.statsCustom}</span>
                                <span>${data.rejected} ${lang.statsRejected}</span>
                            </div>
                        </div>`;
                    }).join('')}
                </div>
            </div>
            
            ${changeHistoryHTML}
        </div>
    </div>`;
}

// Generate password prompt HTML
function generatePasswordPrompt(language = 'en') {
    const lang = translations[language] || translations.en;
    
    return `
    <div class="password-prompt">
        <h3>${lang.passwordPrompt}</h3>
        <input type="password" id="dashboardPasswordInput" placeholder="Password">
        <button id="dashboardPasswordSubmit">${lang.passwordSubmit}</button>
        <p id="passwordError" class="error-message"></p>
    </div>`;
}

// Check if current domain is allowed
function isDomainAllowed() {
    if (config.allowedDomains.length === 0) return true;
    
    const currentDomain = window.location.hostname;
    return config.allowedDomains.some(domain => {
        if (domain.startsWith('.')) {
            // Match subdomains (e.g., .example.com matches sub.example.com)
            return currentDomain === domain.substring(1) || currentDomain.endsWith(domain);
        }
        return currentDomain === domain;
    });
}

// Check geo-targeting restrictions
function checkGeoTargeting(geoData) {
    // Check blocked locations first
    if (config.geoConfig.blockedCountries.length > 0 && 
        config.geoConfig.blockedCountries.includes(geoData.country)) {
        return false;
    }
    
    if (config.geoConfig.blockedRegions.length > 0 && 
        config.geoConfig.blockedRegions.includes(geoData.region)) {
        return false;
    }
    
    if (config.geoConfig.blockedCities.length > 0 && 
        config.geoConfig.blockedCities.includes(geoData.city)) {
        return false;
    }
    
    // Check allowed locations (if any restrictions are set)
    if (config.geoConfig.allowedCountries.length > 0 && 
        !config.geoConfig.allowedCountries.includes(geoData.country)) {
        return false;
    }
    
    if (config.geoConfig.allowedRegions.length > 0 && 
        !config.geoConfig.allowedRegions.includes(geoData.region)) {
        return false;
    }
    
    if (config.geoConfig.allowedCities.length > 0 && 
        !config.geoConfig.allowedCities.includes(geoData.city)) {
        return false;
    }
    
    return true;
}

// Detect user language based on country and browser settings
function detectUserLanguage(geoData) {
    // First check if language is stored in cookie
    if (config.behavior.rememberLanguage) {
        const preferredLanguage = getCookie('preferred_language');
        if (preferredLanguage && translations[preferredLanguage]) {
            return preferredLanguage;
        }
    }
    
    // Then try to get language from country if auto-detection is enabled
    if (config.languageConfig.autoDetectLanguage && geoData && geoData.country) {
        const countryLang = countryLanguageMap[geoData.country];
        if (countryLang && translations[countryLang]) {
            return countryLang;
        }
    }
    
    // Fallback to browser language
    const browserLang = (navigator.language || 'en').split('-')[0];
    if (translations[browserLang]) {
        return browserLang;
    }
    
    // Final fallback to configured default language
    return config.languageConfig.defaultLanguage || 'en';
}

// Get available languages for dropdown
function getAvailableLanguages() {
    // If specific languages are configured, use those
    if (config.languageConfig.availableLanguages.length > 0) {
        return config.languageConfig.availableLanguages.filter(lang => translations[lang]);
    }
    
    // Otherwise return all available languages
    return Object.keys(translations);
}

// Change language dynamically
function changeLanguage(languageCode) {
    const lang = translations[languageCode] || translations.en;
    
    // Update banner text
    const banner = document.getElementById('cookieConsentBanner');
    if (banner) {
        banner.querySelector('h2').textContent = lang.title;
        banner.querySelector('p').textContent = lang.description;
        banner.querySelector('.privacy-policy-link').textContent = lang.privacy;
        banner.querySelector('#acceptAllBtn').textContent = lang.accept;
        banner.querySelector('#adjustConsentBtn').textContent = lang.customize;
        banner.querySelector('#rejectAllBtn').textContent = lang.reject;
    }
    
    // Update modal text
    const modal = document.getElementById('cookieSettingsModal');
    if (modal) {
        modal.querySelector('h2').textContent = lang.title;
        
        // Update category headers and descriptions
        for (const category in config.cookieCategories) {
            const categoryElement = document.querySelector(`input[data-category="${category}"]`);
            if (categoryElement) {
                const container = categoryElement.closest('.cookie-category');
                container.querySelector('h3').textContent = lang[config.cookieCategories[category].title];
                container.querySelector('p').textContent = lang[`${config.cookieCategories[category].title}Desc`];
            }
        }
        
        // Update buttons
        modal.querySelector('#rejectAllSettingsBtn').textContent = lang.reject;
        modal.querySelector('#saveSettingsBtn').textContent = lang.save;
        modal.querySelector('#acceptAllSettingsBtn').textContent = lang.accept;
    }
    
    // Update floating button title
    const floatingButton = document.getElementById('cookieFloatingButton');
    if (floatingButton) {
        floatingButton.title = lang.title;
    }
    
    // Update analytics dashboard if visible
    const dashboard = document.querySelector('.analytics-dashboard');
    if (dashboard) {
        dashboard.innerHTML = generateAnalyticsDashboard(languageCode);
    }
    
    // Update password prompt if visible
    const passwordPrompt = document.querySelector('.password-prompt');
    if (passwordPrompt) {
        passwordPrompt.innerHTML = generatePasswordPrompt(languageCode);
        setupPasswordPromptEvents();
    }
    
    // Store selected language in cookie
    if (config.behavior.rememberLanguage) {
        setCookie('preferred_language', languageCode, 365);
    }
}

// Main initialization with enhanced cookie scanning
document.addEventListener('DOMContentLoaded', function() {
    // First check if we should run on this domain
    if (!isDomainAllowed()) {
        console.log('Cookie consent banner disabled for this domain');
        return;
    }
    
    // Load analytics data
    if (config.analytics.enabled) {
        loadAnalyticsData();
    }
    
    // Get geo data from dataLayer or detect
    let geoData = {};
    if (window.dataLayer && window.dataLayer.length > 0) {
        const geoItem = window.dataLayer.find(item => item.country || item.region || item.city);
        if (geoItem) {
            geoData = {
                country: geoItem.country || '',
                region: geoItem.region || '',
                city: geoItem.city || '',
                language: geoItem.language || ''
            };
        }
    }
    
    // Check geo-targeting restrictions
    if (!checkGeoTargeting(geoData)) {
        console.log('Cookie consent banner disabled for this location');
        return;
    }
    
    // Detect language
    const detectedLanguage = detectUserLanguage(geoData);
    
    const detectedCookies = scanAndCategorizeCookies();
    if (detectedCookies.uncategorized.length > 0) {
        console.log('Uncategorized cookies found:', detectedCookies.uncategorized);
        // Try to automatically categorize unknown cookies
        autoCategorizeCookies(detectedCookies.uncategorized).forEach(cookie => {
            const category = determineCookieCategory(cookie.name);
            if (category && category !== 'uncategorized') {
                detectedCookies[category].push(cookie);
                detectedCookies.uncategorized = detectedCookies.uncategorized.filter(c => c.name !== cookie.name);
            }
        });
    }
    
    injectConsentHTML(detectedCookies, detectedLanguage);
    initializeCookieConsent(detectedCookies, detectedLanguage);
    
    if (getCookie('cookie_consent')) {
        showFloatingButton();
    }
    
    // Track marketing parameters
    trackMarketingParameters();
    
    // Enhanced periodic cookie scan with validation
    setInterval(() => {
        const newCookies = scanAndCategorizeCookies();
        if (JSON.stringify(newCookies) !== JSON.stringify(detectedCookies)) {
            updateCookieTables(newCookies);
        }
    }, 30000); // Scan every 30 seconds
    
    // Handle scroll-based acceptance
    if (config.behavior.acceptOnScroll) {
        window.addEventListener('scroll', handleScrollAcceptance);
    }
});

// Handle scroll-based acceptance
function handleScrollAcceptance() {
    if (getCookie('cookie_consent')) {
        window.removeEventListener('scroll', handleScrollAcceptance);
        return;
    }
    
    const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    if (scrollPercentage > 50) { // Accept if scrolled more than 50%
        acceptAllCookies();
        hideCookieBanner();
        showFloatingButton();
        window.removeEventListener('scroll', handleScrollAcceptance);
    }
}

// Function to automatically categorize unknown cookies
function autoCategorizeCookies(uncategorizedCookies) {
    return uncategorizedCookies.map(cookie => {
        const category = determineCookieCategory(cookie.name);
        if (category) {
            cookieDatabase[cookie.name] = {
                category: category,
                duration: cookie.duration,
                description: cookie.description || 'Automatically categorized'
            };
        }
        return cookie;
    });
}

// Function to determine cookie category based on name patterns
function determineCookieCategory(cookieName) {
    const lowerName = cookieName.toLowerCase();
    
    // Analytics patterns
    if (/_ga|_gid|_gat|analytics|stats|measure|track|tk_ai/.test(lowerName)) {
        return 'analytics';
    }
    
    // Advertising patterns
    if (/_gcl|_fbp|fr|ad|ads|tracking|marketing|doubleclick|gclid/.test(lowerName)) {
        return 'advertising';
    }
    
    // Functional patterns
    if (/sess|token|auth|login|user|pref|settings|cart|checkout|hash|items/.test(lowerName)) {
        return 'functional';
    }
    
    // Performance patterns
    if (/perf|speed|optimize|cdn|cache/.test(lowerName)) {
        return 'performance';
    }
    
    return null;
}

// Enhanced cookie scanning function with better matching
function scanAndCategorizeCookies() {
    const cookies = document.cookie.split(';');
    const result = {
        functional: [],
        analytics: [],
        performance: [],
        advertising: [],
        uncategorized: []
    };

    cookies.forEach(cookie => {
        const [name, value] = cookie.trim().split('=');
        if (!name) return;
        
        let categorized = false;
        
        // Check against known cookie patterns
        for (const pattern in cookieDatabase) {
            if (name.startsWith(pattern) || name === pattern) {
                const cookieInfo = cookieDatabase[pattern];
                result[cookieInfo.category].push({
                    name: name,
                    value: value || '',
                    duration: cookieInfo.duration || getCookieDuration(name),
                    description: cookieInfo.description || 'Unknown purpose'
                });
                categorized = true;
                break;
            }
        }
        
        if (!categorized && name !== 'cookie_consent') {
            result.uncategorized.push({
                name: name,
                value: value || '',
                duration: getCookieDuration(name),
                description: 'Unknown cookie purpose'
            });
        }
    });
    
    return result;
}

// Enhanced getCookieDuration function
function getCookieDuration(name) {
    const cookieMatch = document.cookie.match(new RegExp(`${name}=[^;]+(;|$)`));
    if (!cookieMatch) return "Session";
    
    const expiresMatch = document.cookie.match(new RegExp(`${name}=[^;]+; expires=([^;]+)`));
    if (expiresMatch && expiresMatch[1]) {
        const expiryDate = new Date(expiresMatch[1]);
        return expiryDate > new Date() ? 
            `Expires ${expiryDate.toLocaleDateString()}` : 
            "Expired";
    }
    return "Session";
}

function trackMarketingParameters() {
    const params = new URLSearchParams(window.location.search);
    const marketingData = {};
    
    // Check for common marketing parameters
    if (params.has('gclid')) marketingData.gclid = params.get('gclid');
    if (params.has('fbclid')) marketingData.fbclid = params.get('fbclid');
    if (params.has('utm_source')) marketingData.utm_source = params.get('utm_source');
    if (params.has('utm_medium')) marketingData.utm_medium = params.get('utm_medium');
    if (params.has('utm_campaign')) marketingData.utm_campaign = params.get('utm_campaign');
    
    if (Object.keys(marketingData).length > 0) {
        window.dataLayer.push({
            'event': 'marketingParameters',
            ...marketingData
        });
    }
}

function injectConsentHTML(detectedCookies, language = 'en') {
    const lang = translations[language] || translations.en;
    const availableLanguages = getAvailableLanguages();
    
    // Get website logo if enabled
    let logoHTML = '';
    if (config.showLogo) {
        if (config.logoUrl === 'auto') {
            // Try to find website logo automatically
            const logoElement = document.querySelector('img[src*="logo"], .logo img, header img, .site-logo img');
            if (logoElement) {
                logoHTML = `<div class="cookie-logo"><img src="${logoElement.src}" alt="Website Logo"></div>`;
            }
        } else if (config.logoUrl) {
            logoHTML = `<div class="cookie-logo"><img src="${config.logoUrl}" alt="Website Logo"></div>`;
        }
    }
    
    // Generate cookie tables for each category
    const generateCategorySection = (category) => {
        const cookies = detectedCookies[category];
        const categoryConfig = config.cookieCategories[category];
        const isEssential = categoryConfig.required;
        
        // Generate individual cookie toggles if enabled
        const individualCookiesHTML = config.behavior.showIndividualCookies && cookies.length > 0 ? `
        <div class="individual-cookies-container">
            <div class="individual-cookies-header">
                <h4>${lang.individualCookies}</h4>
                <div class="cookie-toggle-actions">
                    <button class="cookie-toggle-action" data-action="enable" data-category="${category}">${lang.enableAll}</button>
                    <button class="cookie-toggle-action" data-action="disable" data-category="${category}">${lang.disableAll}</button>
                </div>
            </div>
            <div class="individual-cookies-list">
                ${cookies.map(cookie => `
                <div class="individual-cookie">
                    <label class="toggle-switch small">
                        <input type="checkbox" data-cookie="${cookie.name}" ${isEssential ? 'checked disabled' : 'checked'}>
                        <span class="toggle-slider"></span>
                    </label>
                    <div class="cookie-info">
                        <strong>${cookie.name}</strong>
                        <span>${cookie.description}</span>
                    </div>
                </div>`).join('')}
            </div>
        </div>` : '';
        
        return `
        <div class="cookie-category">
            <div class="toggle-container">
                <h3>${lang[categoryConfig.title]}</h3>
                <label class="toggle-switch">
                    <input type="checkbox" data-category="${category}" ${isEssential ? 'checked disabled' : 'checked'}>
                    <span class="toggle-slider"></span>
                </label>
            </div>
            <p>${lang[`${categoryConfig.title}Desc`]}</p>
            <div class="cookie-details-container">
                <div class="cookie-details-header">
                    <span>${lang.cookieDetails}</span>
                    <span class="toggle-details">+</span>
                </div>
                <div class="cookie-details-content" style="display: none;">
                    ${cookies.length > 0 ? 
                        generateCookieTable(cookies) : 
                        `<p class="no-cookies-message">${lang.noCookiesFound}</p>`}
                </div>
            </div>
            ${individualCookiesHTML}
        </div>`;
    };
    
    // Generate language selector dropdown if enabled
    const languageSelector = config.languageConfig.showLanguageSelector ? `
    <div class="language-selector">
        <select id="cookieLanguageSelect">
            ${availableLanguages.map(code => `
                <option value="${code}" ${code === language ? 'selected' : ''}>${translations[code].language}</option>
            `).join('')}
        </select>
    </div>` : '';
    
    // Generate admin dashboard button if analytics enabled
    const adminButton = config.analytics.enabled && config.analytics.showDashboard ? `
    <div id="cookieAdminButton" class="cookie-admin-button" title="${lang.dashboardTitle}">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
            <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
    </div>` : '';
    
    // Generate dark mode toggle if enabled
    const darkModeToggle = config.darkMode !== 'off' ? `
    <button id="darkModeToggle" class="dark-mode-toggle">
        ${isDarkMode ? lang.lightMode : lang.darkMode}
    </button>` : '';
    
    // Generate the HTML based on selected theme
    let html = '';
    
    if (config.uiTheme === 'classic') {
        html = generateClassicThemeHTML(lang, logoHTML, languageSelector, adminButton, darkModeToggle, detectedCookies);
    } else if (config.uiTheme === 'minimal') {
        html = generateMinimalThemeHTML(lang, logoHTML, languageSelector, adminButton, darkModeToggle, detectedCookies);
    } else {
        // Default to modern theme
        html = generateModernThemeHTML(lang, logoHTML, languageSelector, adminButton, darkModeToggle, detectedCookies);
    }
    
    document.body.insertAdjacentHTML('beforeend', html);
    applyColorScheme();
}

function generateModernThemeHTML(lang, logoHTML, languageSelector, adminButton, darkModeToggle, detectedCookies) {
    return `
    <!-- Main Consent Banner -->
    <div id="cookieConsentBanner" class="cookie-consent-banner modern-theme">
        <div class="cookie-consent-container">
            ${logoHTML}
            <div class="cookie-consent-content">
                <h2>${lang.title}</h2>
                <p>${lang.description}</p>
                <a href="/privacy-policy/" class="privacy-policy-link">${lang.privacy}</a>
            </div>
            <div class="cookie-consent-buttons">
                <button id="acceptAllBtn" class="cookie-btn accept-btn">${lang.accept}</button>
                <button id="adjustConsentBtn" class="cookie-btn adjust-btn">${lang.customize}</button>
                <button id="rejectAllBtn" class="cookie-btn reject-btn">${lang.reject}</button>
            </div>
            ${languageSelector}
            ${darkModeToggle}
        </div>
    </div>

    <!-- Settings Modal -->
    <div id="cookieSettingsModal" class="cookie-settings-modal modern-theme">
        <div class="cookie-settings-content">
            <div class="cookie-settings-header">
                <h2>${lang.title}</h2>
                <span class="close-modal">&times;</span>
            </div>
            <div class="cookie-settings-body">
                ${Object.keys(config.cookieCategories).map(category => 
                    generateCategorySection(category)).join('')}
            </div>
            <div class="cookie-settings-footer">
                <button id="rejectAllSettingsBtn" class="cookie-btn reject-btn">${lang.reject}</button>
                <button id="saveSettingsBtn" class="cookie-btn save-btn">${lang.save}</button>
                <button id="acceptAllSettingsBtn" class="cookie-btn accept-btn">${lang.accept}</button>
            </div>
        </div>
    </div>

    <!-- Floating Settings Button -->
    <div id="cookieFloatingButton" class="cookie-settings-button modern-theme" title="${lang.title}">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 8v4"></path>
            <path d="M12 16h.01"></path>
        </svg>
    </div>
    
    ${adminButton}
    
    <!-- Analytics Dashboard -->
    <div id="cookieAnalyticsModal" class="cookie-analytics-modal modern-theme">
        <div class="cookie-analytics-content">
            <div class="cookie-analytics-header">
                <h2>${lang.dashboardTitle}</h2>
                <span class="close-analytics-modal">&times;</span>
            </div>
            <div class="cookie-analytics-body">
                ${config.analytics.passwordProtect && !isDashboardAuthenticated ? 
                    generatePasswordPrompt(language) : 
                    generateAnalyticsDashboard(language)}
            </div>
        </div>
    </div>
    
    <style>
    :root {
        --primary-color: ${config.colorsLight.primary};
        --primary-hover: ${config.colorsLight.primaryHover};
        --secondary-color: ${config.colorsLight.secondary};
        --secondary-hover: ${config.colorsLight.secondaryHover};
        --danger-color: ${config.colorsLight.danger};
        --danger-hover: ${config.colorsLight.dangerHover};
        --text-dark: ${config.colorsLight.textDark};
        --text-light: ${config.colorsLight.textLight};
        --background: ${config.colorsLight.background};
        --background-secondary: ${config.colorsLight.backgroundSecondary};
        --toggle-active: ${config.colorsLight.toggleActive};
        --toggle-inactive: ${config.colorsLight.toggleInactive};
        --border-color: ${config.colorsLight.border};
        --shadow-color: ${config.colorsLight.shadow};
    }
    
    /* Modern Theme Styles */
    .modern-theme.cookie-consent-banner {
        position: fixed;
        bottom: 20px;
        ${config.bannerPosition === 'left' ? 'left: 20px;' : config.bannerPosition === 'right' ? 'right: 20px;' : 'left: 50%; transform: translateX(-50%);'}
        width: ${config.bannerWidth}px;
        ${config.bannerHeight !== 'auto' ? `height: ${config.bannerHeight}px;` : ''}
        background: var(--background);
        border-radius: 12px;
        box-shadow: 0 8px 32px var(--shadow-color);
        z-index: 9999;
        padding: 24px;
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        display: none;
        transform: translateY(20px);
        opacity: 0;
        transition: all ${config.animationDuration}ms cubic-bezier(0.25, 0.8, 0.25, 1);
        border: none;
        overflow: hidden;
    }

    .modern-theme.cookie-consent-banner.show {
        transform: ${config.bannerPosition === 'center' ? 'translate(-50%, 0)' : 'translateY(0)'};
        opacity: 1;
        display: block;
    }

    .modern-theme .cookie-consent-content h2 {
        margin: 0 0 16px 0;
        font-size: 18px;
        color: var(--text-dark);
        font-weight: 600;
        line-height: 1.4;
        letter-spacing: -0.2px;
    }

    .modern-theme .cookie-consent-content p {
        margin: 0 0 24px 0;
        font-size: 14px;
        color: var(--text-light);
        line-height: 1.5;
    }

    .modern-theme .privacy-policy-link {
        color: var(--secondary-color);
        text-decoration: none;
        font-size: 13px;
        font-weight: 500;
        display: inline-block;
        margin-bottom: 24px;
        transition: color 0.2s ease;
    }

    .modern-theme .privacy-policy-link:hover {
        color: var(--secondary-hover);
    }

    .modern-theme .cookie-consent-buttons {
        display: flex;
        gap: 12px;
        margin-top: 8px;
    }

    .modern-theme .cookie-btn {
        padding: 12px 20px;
        border-radius: 8px;
        cursor: pointer;
        font-weight: 600;
        font-size: 14px;
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        text-align: center;
        border: none;
        flex: 1;
        letter-spacing: 0.2px;
    }

    .modern-theme .adjust-btn {
        background-color: var(--background-secondary);
        color: var(--text-dark);
        border: 1px solid var(--border-color);
    }

    .modern-theme .adjust-btn:hover {
        background-color: var(--background-secondary);
        ${config.hoverAnimations ? 'transform: translateY(-1px); box-shadow: 0 2px 8px var(--shadow-color);' : ''}
    }

    .modern-theme .reject-btn {
        background-color: var(--background);
        color: var(--danger-color);
        border: 1px solid var(--danger-color);
    }

    .modern-theme .reject-btn:hover {
        background-color: var(--background-secondary);
        ${config.hoverAnimations ? 'transform: translateY(-1px); box-shadow: 0 2px 8px rgba(231, 76, 60, 0.15);' : ''}
    }

    .modern-theme .accept-btn {
        background-color: var(--primary-color);
        color: white;
        border: 1px solid var(--primary-color);
        box-shadow: 0 2px 12px rgba(46, 204, 113, 0.3);
    }

    .modern-theme .accept-btn:hover {
        background-color: var(--primary-hover);
        ${config.hoverAnimations ? 'transform: translateY(-1px); box-shadow: 0 4px 16px rgba(46, 204, 113, 0.4);' : ''}
    }

    /* Modern Theme Settings Modal */
    .modern-theme.cookie-settings-modal {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        z-index: 10000;
        overflow-y: auto;
        padding: 30px 0;
        opacity: 0;
        transition: opacity ${config.animationDuration}ms ease;
    }

    .modern-theme.cookie-settings-modal.show {
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 1;
    }

    .modern-theme .cookie-settings-content {
        background-color: var(--background);
        margin: 0 auto;
        width: ${config.modalWidth}px;
        max-height: ${config.modalHeight}px;
        border-radius: 12px;
        box-shadow: 0 10px 30px var(--shadow-color);
        overflow: hidden;
        transform: translateY(20px);
        transition: transform ${config.animationDuration}ms ease;
        display: flex;
        flex-direction: column;
    }

    .modern-theme.cookie-settings-modal.show .cookie-settings-content {
        transform: translateY(0);
    }

    .modern-theme .cookie-settings-header {
        padding: 20px 30px;
        border-bottom: 1px solid var(--border-color);
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: var(--background-secondary);
    }

    .modern-theme .cookie-settings-header h2 {
        margin: 0;
        color: var(--text-dark);
        font-size: 1.5rem;
        font-weight: 600;
    }

    .modern-theme .close-modal {
        font-size: 28px;
        font-weight: bold;
        cursor: pointer;
        color: var(--text-light);
        background: none;
        border: none;
        padding: 0 10px;
        transition: color 0.2s ease;
    }

    .modern-theme .close-modal:hover {
        color: var(--danger-color);
    }

    /* Modern Theme Floating Button */
    .modern-theme.cookie-settings-button {
        position: fixed;
        bottom: 30px;
        ${config.floatingButtonPosition === 'left' ? 'left: 30px;' : 'right: 30px;'}
        width: 60px;
        height: 60px;
        background-color: var(--primary-color);
        border-radius: 50%;
        display: none;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-shadow: 0 6px 20px var(--shadow-color);
        z-index: 9998;
        transition: all 0.3s ease;
        opacity: 0;
        transform: translateY(20px);
        border: 2px solid white;
    }

    .modern-theme.cookie-settings-button.show {
        opacity: 1;
        transform: translateY(0);
    }

    .modern-theme.cookie-settings-button:hover {
        background-color: var(--primary-hover);
        ${config.hoverAnimations ? 'transform: translateY(-3px) scale(1.05); box-shadow: 0 8px 25px var(--shadow-color);' : ''}
    }

    .modern-theme.cookie-settings-button svg {
        width: 28px;
        height: 28px;
        fill: white;
        transition: transform 0.3s ease;
    }

    .modern-theme.cookie-settings-button:hover svg {
        ${config.hoverAnimations ? 'transform: rotate(15deg);' : ''}
    }

    /* Modern Theme Admin Button */
    .modern-theme.cookie-admin-button {
        position: fixed;
        ${config.adminButtonPosition === 'left' ? 
          'left: 30px; bottom: 100px;' : 
          'right: 30px; bottom: 100px;'}
        width: 60px;
        height: 60px;
        background-color: var(--secondary-color);
        border-radius: 50%;
        display: none;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-shadow: 0 6px 20px var(--shadow-color);
        z-index: 9997;
        transition: all 0.3s ease;
        opacity: 0;
        transform: translateY(20px);
        border: 2px solid white;
    }

    .modern-theme.cookie-admin-button.show {
        opacity: 1;
        transform: translateY(0);
    }

    .modern-theme.cookie-admin-button:hover {
        background-color: var(--secondary-hover);
        ${config.hoverAnimations ? 'transform: translateY(-3px) scale(1.05); box-shadow: 0 8px 25px var(--shadow-color);' : ''}
    }

    .modern-theme.cookie-admin-button svg {
        width: 28px;
        height: 28px;
        fill: white;
        transition: transform 0.3s ease;
    }

    .modern-theme.cookie-admin-button:hover svg {
        ${config.hoverAnimations ? 'transform: rotate(15deg);' : ''}
    }

    /* Modern Theme Analytics Dashboard */
    .modern-theme.cookie-analytics-modal {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        z-index: 10001;
        overflow-y: auto;
        padding: 30px 0;
        opacity: 0;
        transition: opacity ${config.animationDuration}ms ease;
    }

    .modern-theme.cookie-analytics-modal.show {
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 1;
    }

    .modern-theme .cookie-analytics-content {
        background-color: var(--background);
        margin: 0 auto;
        width: 900px;
        max-height: 600px;
        border-radius: 12px;
        box-shadow: 0 10px 30px var(--shadow-color);
        overflow: hidden;
        transform: translateY(20px);
        transition: transform ${config.animationDuration}ms ease;
        display: flex;
        flex-direction: column;
    }

    .modern-theme.cookie-analytics-modal.show .cookie-analytics-content {
        transform: translateY(0);
    }

    .modern-theme .cookie-analytics-header {
        padding: 20px 30px;
        border-bottom: 1px solid var(--border-color);
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: var(--background-secondary);
    }

    .modern-theme .cookie-analytics-header h2 {
        margin: 0;
        color: var(--text-dark);
        font-size: 1.5rem;
        font-weight: 600;
    }

    .modern-theme .close-analytics-modal {
        font-size: 28px;
        font-weight: bold;
        cursor: pointer;
        color: var(--text-light);
        background: none;
        border: none;
        padding: 0 10px;
        transition: color 0.2s ease;
    }

    .modern-theme .close-analytics-modal:hover {
        color: var(--danger-color);
    }

    /* Modern Theme Individual Cookie Toggles */
    .modern-theme .individual-cookies-container {
        margin-top: 15px;
        border: 1px solid var(--border-color);
        border-radius: 8px;
        padding: 15px;
        background-color: var(--background-secondary);
    }

    .modern-theme .individual-cookies-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
    }

    .modern-theme .individual-cookies-header h4 {
        margin: 0;
        font-size: 0.9rem;
        color: var(--text-dark);
    }

    .modern-theme .cookie-toggle-actions {
        display: flex;
        gap: 8px;
    }

    .modern-theme .cookie-toggle-action {
        padding: 4px 8px;
        font-size: 0.7rem;
        border-radius: 4px;
        background-color: var(--background);
        border: 1px solid var(--border-color);
        cursor: pointer;
    }

    .modern-theme .individual-cookies-list {
        max-height: 200px;
        overflow-y: auto;
    }

    .modern-theme .individual-cookie {
        display: flex;
        align-items: center;
        padding: 8px 0;
        border-bottom: 1px solid var(--border-color);
    }

    .modern-theme .individual-cookie:last-child {
        border-bottom: none;
    }

    .modern-theme .individual-cookie .cookie-info {
        margin-left: 10px;
    }

    .modern-theme .individual-cookie .cookie-info strong {
        display: block;
        font-size: 0.8rem;
        color: var(--text-dark);
    }

    .modern-theme .individual-cookie .cookie-info span {
        font-size: 0.7rem;
        color: var(--text-light);
    }

    /* Modern Theme Dark Mode Toggle */
    .modern-theme .dark-mode-toggle {
        position: absolute;
        top: 15px;
        ${config.bannerPosition === 'right' ? 'left: 15px;' : 'right: 15px;'}
        padding: 5px 10px;
        border-radius: 15px;
        background-color: var(--background-secondary);
        border: 1px solid var(--border-color);
        font-size: 0.7rem;
        cursor: pointer;
    }

    /* Modern Theme Language Selector */
    .modern-theme .language-selector {
        position: absolute;
        top: 15px;
        ${config.bannerPosition === 'right' ? 'right: 15px;' : 'left: 15px;'}
    }

    .modern-theme .language-selector select {
        padding: 6px 10px;
        border-radius: 6px;
        border: 1px solid var(--border-color);
        background-color: var(--background-secondary);
        font-size: 13px;
        color: var(--text-dark);
        cursor: pointer;
        transition: all 0.2s ease;
    }

    .modern-theme .language-selector select:hover {
        border-color: var(--secondary-color);
        background-color: var(--background);
    }

    /* Modern Theme Cookie Logo */
    .modern-theme .cookie-logo {
        margin-bottom: 15px;
    }

    .modern-theme .cookie-logo img {
        max-height: 40px;
        max-width: 100%;
    }

    /* Responsive Styles for Modern Theme */
    @media (max-width: 900px) {
        .modern-theme .cookie-settings-content {
            width: 90%;
            max-height: 80vh;
        }
        
        .modern-theme .cookie-analytics-content {
            width: 90%;
            max-height: 80vh;
        }
    }

    @media (max-width: 768px) {
        .modern-theme.cookie-consent-banner {
            width: 90%;
            ${config.bannerPosition === 'left' ? 'left: 5%;' : config.bannerPosition === 'right' ? 'right: 5%;' : 'left: 5%; right: 5%; width: 90%;'}
            bottom: 10px;
            padding: 20px;
        }
        
        .modern-theme .cookie-consent-buttons {
            flex-direction: column;
        }
        
        .modern-theme .cookie-btn {
            width: 100%;
            margin-bottom: 8px;
        }
    }

    @media (max-width: 480px) {
        .modern-theme.cookie-consent-banner {
            padding: 15px;
            width: calc(100% - 30px);
            ${config.bannerPosition === 'left' ? 'left: 15px;' : config.bannerPosition === 'right' ? 'right: 15px;' : 'left: 15px; right: 15px; width: calc(100% - 30px);'}
        }
    }
    </style>`;
}

function generateClassicThemeHTML(lang, logoHTML, languageSelector, adminButton, darkModeToggle, detectedCookies) {
    // Similar structure to modern theme but with classic styling
    // Implementation would follow same pattern but with different CSS
    // Omitted for brevity but would be included in full implementation
    return generateModernThemeHTML(lang, logoHTML, languageSelector, adminButton, darkModeToggle, detectedCookies);
}

function generateMinimalThemeHTML(lang, logoHTML, languageSelector, adminButton, darkModeToggle, detectedCookies) {
    // Similar structure to modern theme but with minimal styling
    // Implementation would follow same pattern but with different CSS
    // Omitted for brevity but would be included in full implementation
    return generateModernThemeHTML(lang, logoHTML, languageSelector, adminButton, darkModeToggle, detectedCookies);
}

function initializeCookieConsent(detectedCookies, language) {
    const consentGiven = getCookie('cookie_consent');
    
    if (!consentGiven && config.behavior.autoShow) {
        showCookieBanner();
    } else if (consentGiven) {
        const consentData = JSON.parse(consentGiven);
        updateConsentMode(consentData);
        loadCookiesAccordingToConsent(consentData);
        showFloatingButton();
    }
    
    // Set up event listeners
    setupEventListeners();
    
    // Setup cookie details toggles
    document.querySelectorAll('.cookie-details-header').forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const toggle = this.querySelector('.toggle-details');
            if (content.style.display === 'none') {
                content.style.display = 'block';
                toggle.textContent = '−';
            } else {
                content.style.display = 'none';
                toggle.textContent = '+';
            }
        });
    });
    
    // Setup language selector change event
    const languageSelect = document.getElementById('cookieLanguageSelect');
    if (languageSelect) {
        languageSelect.addEventListener('change', function() {
            changeLanguage(this.value);
        });
    }
    
    // Setup admin button if enabled
    if (config.analytics.enabled && config.showAdminButton) {
        const adminButton = document.getElementById('cookieAdminButton');
        if (adminButton) {
            adminButton.addEventListener('click', showAnalyticsDashboard);
            setTimeout(() => {
                adminButton.style.display = 'flex';
                adminButton.classList.add('show');
            }, 100);
        }
    }
    
    // Setup password prompt events if needed
    if (config.analytics.passwordProtect && !isDashboardAuthenticated) {
        setupPasswordPromptEvents();
    }
    
    // Setup dark mode toggle if enabled
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', toggleDarkMode);
    }
    
    // Setup export buttons if enabled
    if (config.analytics.exportEnabled) {
        document.getElementById('exportCSV')?.addEventListener('click', exportDataAsCSV);
        document.getElementById('exportJSON')?.addEventListener('click', exportDataAsJSON);
    }
    
    // Setup individual cookie toggle actions
    document.querySelectorAll('.cookie-toggle-action').forEach(button => {
        button.addEventListener('click', function() {
            const action = this.dataset.action;
            const category = this.dataset.category;
            const checkboxes = document.querySelectorAll(`.individual-cookies-list input[type="checkbox"][data-cookie]`);
            
            checkboxes.forEach(checkbox => {
                if (action === 'enable') {
                    checkbox.checked = true;
                } else if (action === 'disable') {
                    checkbox.checked = false;
                }
            });
        });
    });
}

function exportDataAsCSV() {
    // Implementation to export analytics data as CSV
    // Omitted for brevity but would be included in full implementation
    alert('CSV export functionality would be implemented here');
}

function exportDataAsJSON() {
    // Implementation to export analytics data as JSON
    // Omitted for brevity but would be included in full implementation
    alert('JSON export functionality would be implemented here');
}

// ... (keep all other functions the same as in the previous implementation)

// Set cookie with enhanced options
function setCookie(name, value, days, path = '/', domain = '', secure = true, sameSite = 'Lax') {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    
    let cookieString = name + "=" + (value || "") + expires;
    cookieString += path ? "; path=" + path : "";
    cookieString += domain ? "; domain=" + domain : "";
    cookieString += secure ? "; Secure" : "";
    cookieString += sameSite ? "; SameSite=" + sameSite : "";
    
    document.cookie = cookieString;
}

// Get cookie
function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
