/**
 * Ultimate GDPR Cookie Consent Solution v5.0 - Premium Edition
 * - Now with dual design options, advanced customization, and enhanced controls
 * - All features configurable through a centralized configuration object
 */

// ============== CONFIGURATION SECTION ============== //
const config = {
    // General Settings
    bannerDesign: 'default', // 'default' or 'modern'
    bannerPosition: 'right', // 'left', 'right', or 'center'
    bannerDelay: 0, // Seconds to delay banner appearance (0 for immediate)
    
    // Domain restriction - only show on these domains (empty array = all domains)
    allowedDomains: ['dev-rpractice.pantheonsite.io', 'yourdomain.com'],
    
    // UI Controls
    showWebsiteLogo: true, // Automatically detect and show website logo
    logoUrl: '', // Custom logo URL (overrides automatic detection)
    darkMode: 'auto', // 'auto', 'light', or 'dark'
    
    // Floating Button Controls
    floatingButton: {
        enabled: true,
        position: 'right', // 'left' or 'right'
        icon: 'default', // 'default' or 'modern'
        animation: true,
        hoverEffect: true
    },
    
    // Admin Button Controls
    adminButton: {
        enabled: true,
        position: 'right', // 'left' or 'right'
        icon: 'default', // 'default' or 'modern'
        animation: true,
        hoverEffect: true
    },
    
    // Banner Size Controls (in pixels)
    bannerSize: {
        width: 440,
        minWidth: 300,
        maxWidth: 600,
        height: 'auto', // 'auto' or specific px value
        borderRadius: 12,
        borderWidth: 0,
        borderColor: '#e0e0e0'
    },
    
    // Animation Controls
    animations: {
        enabled: true,
        entrance: 'fadeInUp', // 'fadeIn', 'fadeInUp', 'slideUp', 'slideRight'
        exit: 'fadeOutDown', // 'fadeOut', 'fadeOutDown', 'slideDown', 'slideLeft'
        duration: 400, // ms
        easing: 'cubic-bezier(0.25, 0.8, 0.25, 1)'
    },
    
    // Color Schemes
    colors: {
        light: {
            primary: '#2ecc71',      // Green (accept button color)
            secondary: '#3498db',    // Blue (save button color)
            danger: '#e74c3c',       // Red (reject button color)
            textDark: '#2c3e50',     // Dark text
            textLight: '#7f8c8d',    // Light text
            background: '#ffffff',   // White background
            toggleActive: '#2ecc71', // Same as primary
            toggleInactive: '#bdc3c7',// Gray for inactive
            bannerBg: '#ffffff',
            bannerBorder: '#e0e0e0',
            buttonText: '#ffffff',
            buttonHover: {
                accept: '#27ae60',
                reject: '#c0392b',
                save: '#2980b9',
                adjust: '#f0f2f5'
            }
        },
        dark: {
            primary: '#27ae60',
            secondary: '#2980b9',
            danger: '#c0392b',
            textDark: '#ecf0f1',
            textLight: '#bdc3c7',
            background: '#2c3e50',
            toggleActive: '#27ae60',
            toggleInactive: '#7f8c8d',
            bannerBg: '#34495e',
            bannerBorder: '#2c3e50',
            buttonText: '#ffffff',
            buttonHover: {
                accept: '#219955',
                reject: '#ab3326',
                save: '#2472a4',
                adjust: '#3d566e'
            }
        }
    },
    
    // Button Styles
    buttons: {
        borderRadius: 8,
        borderWidth: 1,
        padding: '12px 20px',
        hoverEffect: true,
        shadow: true
    },
    
    // Language configuration
    languageConfig: {
        defaultLanguage: 'en', // Default language if auto-detection fails
        availableLanguages: [], // Empty array = all languages available
        showLanguageSelector: true, // Show/hide language dropdown
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
        showDashboard: true, // Show analytics dashboard button
        passwordProtect: true, // Enable password protection
        dashboardPassword: 'admin123', // Default password (should be changed per site)
        passwordCookieDuration: 365, // Days to remember password
        individualCookies: true, // Show individual cookie toggles
        consentHistory: true, // Track consent changes
        exportEnabled: true // Allow data export
    },
    
    // Banner behavior
    behavior: {
        autoShow: true, // Automatically show banner on page load
        rememberLanguage: true, // Remember user's language preference
        acceptOnScroll: false, // Accept cookies when user scrolls
        acceptOnContinue: true, // Implicit consent when continuing to browse
        showCloseButton: true // Show close button on banner
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

// Complete EU language translations (same as before, but I'll include it for completeness)
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
        cookieDetails: "Cookie Details",
        toggleDetails: "+",
        individualCookies: "Individual Cookies",
        exportData: "Export Data",
        close: "Close",
        darkMode: "Dark Mode",
        lightMode: "Light Mode"
    },
    // ... (keep all other language translations the same as before)
    // Note: Add translations for new strings in all languages
};

// Country to language mapping for auto-translation
const countryLanguageMap = {
    // ... (keep existing country to language mapping)
};

// Analytics data storage with consent history
let consentAnalytics = {
    total: {
        accepted: 0,
        rejected: 0,
        custom: 0
    },
    daily: {},
    weekly: {},
    monthly: {},
    history: [] // Track all consent changes
};

// Password protection for analytics
let isDashboardAuthenticated = false;

// Current color scheme based on dark mode
let currentColorScheme = config.colors.light;

// Detect preferred color scheme
function detectColorScheme() {
    if (config.darkMode === 'auto') {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            currentColorScheme = config.colors.dark;
        } else {
            currentColorScheme = config.colors.light;
        }
    } else if (config.darkMode === 'dark') {
        currentColorScheme = config.colors.dark;
    } else {
        currentColorScheme = config.colors.light;
    }
}

// Toggle dark mode
function toggleDarkMode() {
    if (currentColorScheme === config.colors.light) {
        currentColorScheme = config.colors.dark;
        setCookie('color_scheme', 'dark', 365);
    } else {
        currentColorScheme = config.colors.light;
        setCookie('color_scheme', 'light', 365);
    }
    applyColorScheme();
}

// Apply current color scheme to UI
function applyColorScheme() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
        darkModeToggle.textContent = currentColorScheme === config.colors.dark ? 
            translations[lang].lightMode : translations[lang].darkMode;
    }
    
    // Update banner and modal styles
    updateUITheme();
}

// Update UI elements with current theme
function updateUITheme() {
    const banner = document.getElementById('cookieConsentBanner');
    const modal = document.getElementById('cookieSettingsModal');
    const analyticsModal = document.getElementById('cookieAnalyticsModal');
    
    if (banner) {
        banner.style.backgroundColor = currentColorScheme.bannerBg;
        banner.style.color = currentColorScheme.textDark;
        banner.style.borderColor = currentColorScheme.bannerBorder;
    }
    
    if (modal) {
        modal.querySelector('.cookie-settings-content').style.backgroundColor = currentColorScheme.background;
        modal.querySelector('.cookie-settings-header').style.backgroundColor = currentColorScheme.bannerBg;
        modal.querySelector('.cookie-settings-header h2').style.color = currentColorScheme.textDark;
    }
    
    if (analyticsModal) {
        analyticsModal.querySelector('.cookie-analytics-content').style.backgroundColor = currentColorScheme.background;
        analyticsModal.querySelector('.cookie-analytics-header').style.backgroundColor = currentColorScheme.bannerBg;
        analyticsModal.querySelector('.cookie-analytics-header h2').style.color = currentColorScheme.textDark;
    }
    
    // Update button colors
    document.querySelectorAll('.cookie-btn').forEach(btn => {
        if (btn.classList.contains('accept-btn')) {
            btn.style.backgroundColor = currentColorScheme.primary;
            btn.style.color = currentColorScheme.buttonText;
        } else if (btn.classList.contains('reject-btn')) {
            btn.style.backgroundColor = currentColorScheme.danger;
            btn.style.color = currentColorScheme.buttonText;
        } else if (btn.classList.contains('save-btn')) {
            btn.style.backgroundColor = currentColorScheme.secondary;
            btn.style.color = currentColorScheme.buttonText;
        }
    });
}

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
    
    // Load color scheme preference
    const savedColorScheme = getCookie('color_scheme');
    if (savedColorScheme === 'dark') {
        currentColorScheme = config.colors.dark;
    } else if (savedColorScheme === 'light') {
        currentColorScheme = config.colors.light;
    }
}

// Save analytics data to localStorage
function saveAnalyticsData() {
    localStorage.setItem('consentAnalytics', JSON.stringify(consentAnalytics));
}

// Update analytics data with consent history
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
    
    // Add to history
    if (config.analytics.consentHistory) {
        consentAnalytics.history.push({
            timestamp: new Date().toISOString(),
            status: status,
            previousConsent: previousConsent,
            userAgent: navigator.userAgent,
            ip: '', // Would be filled server-side
            page: window.location.href
        });
        
        // Keep only last 100 history items
        if (consentAnalytics.history.length > 100) {
            consentAnalytics.history.shift();
        }
    }
    
    // Update weekly and monthly stats
    updateTimeBasedStats(today, status);
    
    saveAnalyticsData();
}

// Generate consent history table for dashboard
function generateConsentHistory(language = 'en') {
    const lang = translations[language] || translations.en;
    
    return `
    <div class="consent-history">
        <h4>Consent Change History</h4>
        <div class="history-table-container">
            <table class="history-table">
                <thead>
                    <tr>
                        <th>Timestamp</th>
                        <th>Action</th>
                        <th>Previous Consent</th>
                        <th>Page</th>
                    </tr>
                </thead>
                <tbody>
                    ${consentAnalytics.history.slice().reverse().map(item => `
                    <tr>
                        <td>${new Date(item.timestamp).toLocaleString()}</td>
                        <td class="history-status ${item.status}">${item.status}</td>
                        <td>${item.previousConsent ? JSON.stringify(item.previousConsent.categories) : 'N/A'}</td>
                        <td><a href="${item.page}" target="_blank">View Page</a></td>
                    </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    </div>`;
}

// Export analytics data
function exportAnalyticsData(format = 'csv') {
    if (!config.analytics.exportEnabled) return;
    
    let data;
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    
    if (format === 'json') {
        data = JSON.stringify(consentAnalytics, null, 2);
        downloadFile(`cookie-consent-analytics-${timestamp}.json`, data, 'application/json');
    } else {
        // CSV format
        let csv = 'Date,Accepted,Rejected,Custom\n';
        
        // Add daily stats
        Object.keys(consentAnalytics.daily).sort().forEach(date => {
            const day = consentAnalytics.daily[date];
            csv += `${date},${day.accepted},${day.rejected},${day.custom}\n`;
        });
        
        downloadFile(`cookie-consent-analytics-${timestamp}.csv`, csv, 'text/csv');
    }
}

// Helper function to download files
function downloadFile(filename, content, mimeType) {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// ... [Previous functions like scanAndCategorizeCookies, getCookieDuration, etc.]

// Enhanced injectConsentHTML with dual design options
function injectConsentHTML(detectedCookies, language = 'en') {
    const lang = translations[language] || translations.en;
    const availableLanguages = getAvailableLanguages();
    
    // Detect website logo if enabled
    let websiteLogo = '';
    if (config.showWebsiteLogo) {
        const logo = document.querySelector('img[alt*="logo"], img[src*="logo"], .logo img');
        if (logo) {
            websiteLogo = `<img src="${logo.src}" alt="Website Logo" class="website-logo">`;
        } else if (config.logoUrl) {
            websiteLogo = `<img src="${config.logoUrl}" alt="Website Logo" class="website-logo">`;
        }
    }
    
    // Generate cookie tables for each category
    const generateCategorySection = (category) => {
        const cookies = detectedCookies[category];
        const categoryKey = category === 'functional' ? 'essential' : category;
        const isEssential = category === 'functional';
        
        // Generate individual cookie toggles if enabled
        const individualToggles = config.analytics.individualCookies && cookies.length > 0 ? `
        <div class="individual-cookies" style="display: none;">
            <h4>${lang.individualCookies}</h4>
            <table class="cookie-toggle-table">
                ${cookies.map(cookie => `
                <tr>
                    <td><code>${cookie.name}</code></td>
                    <td>${cookie.duration}</td>
                    <td>${cookie.description}</td>
                    <td>
                        <label class="toggle-switch small">
                            <input type="checkbox" data-cookie="${cookie.name}" ${isEssential ? 'checked disabled' : 'checked'}>
                            <span class="toggle-slider"></span>
                        </label>
                    </td>
                </tr>
                `).join('')}
            </table>
        </div>` : '';
        
        return `
        <div class="cookie-category">
            <div class="toggle-container">
                <h3>${lang[categoryKey]}</h3>
                <label class="toggle-switch">
                    <input type="checkbox" data-category="${category}" ${isEssential ? 'checked disabled' : 'checked'}>
                    <span class="toggle-slider"></span>
                </label>
            </div>
            <p>${lang[`${categoryKey}Desc`]}</p>
            <div class="cookie-details-container">
                <div class="cookie-details-header">
                    <span>${lang.cookieDetails}</span>
                    <span class="toggle-details">${lang.toggleDetails}</span>
                </div>
                <div class="cookie-details-content" style="display: none;">
                    ${cookies.length > 0 ? 
                        generateCookieTable(cookies) : 
                        `<p class="no-cookies-message">No cookies in this category detected.</p>`}
                    ${individualToggles}
                </div>
            </div>
        </div>`;
    };
    
    // Generate modern design banner
    const generateModernBanner = () => {
        return `
        <div id="cookieConsentBanner" class="cookie-consent-banner modern">
            ${websiteLogo}
            <div class="cookie-consent-content">
                <h2>${lang.title}</h2>
                <p>${lang.description}</p>
                <a href="/privacy-policy/" class="privacy-policy-link">${lang.privacy}</a>
            </div>
            <div class="cookie-consent-buttons">
                <button id="rejectAllBtn" class="cookie-btn reject-btn">${lang.reject}</button>
                <button id="adjustConsentBtn" class="cookie-btn adjust-btn">${lang.customize}</button>
                <button id="acceptAllBtn" class="cookie-btn accept-btn">${lang.accept}</button>
            </div>
            ${config.behavior.showCloseButton ? `<button class="close-banner">&times;</button>` : ''}
        </div>`;
    };
    
    // Generate default design banner
    const generateDefaultBanner = () => {
        return `
        <div id="cookieConsentBanner" class="cookie-consent-banner default">
            <div class="cookie-consent-container">
                ${config.languageConfig.showLanguageSelector ? `
                <div class="language-selector">
                    <select id="cookieLanguageSelect">
                        ${availableLanguages.map(code => `
                            <option value="${code}" ${code === language ? 'selected' : ''}>${translations[code].language}</option>
                        `).join('')}
                    </select>
                </div>` : ''}
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
            </div>
        </div>`;
    };
    
    // Generate floating button SVG based on style
    const getFloatingButtonIcon = (type) => {
        if (type === 'modern') {
            return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M257.5 27.6c-.8-5.4-4.9-9.8-10.3-10.6c-22.1-3.1-44.6 .9-64.4 11.4l-74 39.5C89.1 78.4 73.2 94.9 63.4 115L26.7 190.6c-9.8 20.1-13 42.9-9.1 64.9l14.5 82.8c3.9 22.1 14.6 42.3 30.7 57.9l60.3 58.4c16.1 15.6 36.6 25.6 58.7 28.7l83 11.7c22.1 3.1 44.6-.9-64.4-11.4l74-39.5c19.7-10.5 35.6-27 45.4-47.2l36.7-75.5c9.8-20.1 13-42.9 9.1-64.9c-.9-5.7-5.9-9.9-11.6-9.9c-51.5 0-101.5-14.7-144.9-42.3l-61.2-42.4c-10.1-7-21.8-11.1-33.9-11.9c-12.1-.9-24.1 1.6-34.9 7.2l-61.2 35.1c-6.4 3.7-14.6 1.9-19.3-4.1s-4.7-13.7 1.1-18.4l61.2-42.4c43.4-30.1 97.1-46.4 151.8-46.4c5.7 0 10.7-4.1 11.6-9.8zM133.4 303.6c-25.9 0-46.9-21-46.9-46.9s21-46.9 46.9-46.9s46.9 21 46.9 46.9s-21 46.9-46.9 46.9zm116.1-90.3c-26.5 0-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48s-21.5-48-48-48zm92.3 99.7c-26.5 0-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48s-21.5-48-48-48z"/>
            </svg>`;
        }
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M510.5 225.5c-4.6-11.4-23.1-29.9-47.2-48.3C439.9 159 401.3 137 357.4 120.5c-43.9-16.5-91.9-25.8-141.9-26.1h-3.1c-50 0-98 9.3-141.9 26.1C24.7 137-14 159-47.8 177.2c-24.1 18.4-42.6 36.9-47.2 48.3c-4.6 11.4-5.3 32.4 19.8 54.7c24.8 21.9 71.7 44.1 125.3 59.6c53.6 15.6 109.9 23.5 163.6 23.2c53.7 .3 110-7.6 163.6-23.2c53.6-15.5 100.5-37.7 125.3-59.6c25.1-22.3 24.4-43.3 19.8-54.7zM48 256c12-21.2 41.3-41.9 89.2-61.3c46.8-18.9 105.1-29.7 165.2-30c60.1 .3 118.4 11.1 165.2 30c47.9 19.4 77.2 40.1 89.2 61.3c-12 21.2-41.3 41.9-89.2 61.3c-46.8 18.9-105.1 29.7-165.2 30c-60.1-.3-118.4-11.1-165.2-30C89.3 297.9 60 277.2 48 256zM224 128c0-17.7 14.3-32 32-32s32 14.3 32 32v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V128zm0 256c0-17.7 14.3-32 32-32s32 14.3 32 32v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V384zm0-128c0-17.7 14.3-32 32-32s32 14.3 32 32v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V256z"/>
        </svg>`;
    };
    
    // Generate admin button SVG based on style
    const getAdminButtonIcon = (type) => {
        if (type === 'modern') {
            return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M288 160C252.7 160 224 188.7 224 224C224 259.3 252.7 288 288 288C323.3 288 352 259.3 352 224C352 188.7 323.3 160 288 160zM95.4 112.6C142.5 68.84 207.2 32 288 32C368.8 32 433.5 68.84 480.6 112.6C527.4 156 558.7 207.1 573.5 243.7C576.8 251.6 576.8 260.4 573.5 268.3C558.7 304 527.4 355.1 480.6 399.4C433.5 443.2 368.8 480 288 480C207.2 480 142.5 443.2 95.4 399.4C48.6 355.1 17.3 304 2.5 268.3C-.8 260.4-.8 251.6 2.5 243.7C17.3 207.1 48.6 156 95.4 112.6V112.6zM288 80C218.6 80 160 138.6 160 208C160 277.4 218.6 336 288 336C357.4 336 416 277.4 416 208C416 138.6 357.4 80 288 80zM44.96 256C56.53 286.1 83.51 329.2 124.4 368C165.3 406.8 219.1 432 288 432C356.9 432 410.7 406.8 451.6 368C492.5 329.2 519.5 286.1 531 256C519.5 225.9 492.5 182.8 451.6 144C410.7 105.2 356.9 80 288 80C219.1 80 165.3 105.2 124.4 144C83.51 182.8 56.53 225.9 44.96 256V256z"/>
            </svg>`;
        }
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path d="M384 160c-17.7 0-32-14.3-32-32s14.3-32 32-32H544c17.7 0 32 14.3 32 32V288c0 17.7-14.3 32-32 32s-32-14.3-32-32V205.3L342.6 374.6c-12.5 12.5-32.8 12.5-45.3 0L192 269.3 54.6 406.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160c12.5-12.5 32.8-12.5 45.3 0L320 306.7 466.7 160H384z"/>
        </svg>`;
    };
    
    // Generate the appropriate banner based on config
    const bannerHTML = config.bannerDesign === 'modern' ? generateModernBanner() : generateDefaultBanner();
    
    const html = `
    ${bannerHTML}
    
    <!-- Settings Modal -->
    <div id="cookieSettingsModal" class="cookie-settings-modal">
        <div class="cookie-settings-content">
            <div class="cookie-settings-header">
                <h2>${lang.title}</h2>
                <button class="close-modal">&times;</button>
            </div>
            <div class="cookie-settings-body">
                ${generateCategorySection('functional')}
                ${generateCategorySection('analytics')}
                ${generateCategorySection('performance')}
                ${generateCategorySection('advertising')}
                ${detectedCookies.uncategorized.length > 0 ? generateCategorySection('uncategorized') : ''}
            </div>
            <div class="cookie-settings-footer">
                <button id="rejectAllSettingsBtn" class="cookie-btn reject-btn">${lang.reject}</button>
                <button id="saveSettingsBtn" class="cookie-btn save-btn">${lang.save}</button>
                <button id="acceptAllSettingsBtn" class="cookie-btn accept-btn">${lang.accept}</button>
            </div>
        </div>
    </div>

    <!-- Floating Settings Button -->
    ${config.floatingButton.enabled ? `
    <div id="cookieFloatingButton" class="cookie-settings-button" title="${lang.title}">
        ${getFloatingButtonIcon(config.floatingButton.icon)}
    </div>` : ''}
    
    <!-- Admin Button -->
    ${config.adminButton.enabled && config.analytics.enabled && config.analytics.showDashboard ? `
    <div id="cookieAdminButton" class="cookie-admin-button" title="${lang.dashboardTitle}">
        ${getAdminButtonIcon(config.adminButton.icon)}
    </div>` : ''}
    
    <!-- Analytics Dashboard -->
    <div id="cookieAnalyticsModal" class="cookie-analytics-modal">
        <div class="cookie-analytics-content">
            <div class="cookie-analytics-header">
                <h2>${lang.dashboardTitle}</h2>
                <div class="analytics-header-controls">
                    ${config.analytics.exportEnabled ? `
                    <button id="exportAnalyticsBtn" class="cookie-btn export-btn">${lang.exportData}</button>
                    ` : ''}
                    <button class="close-analytics-modal">${lang.close}</button>
                </div>
            </div>
            <div class="cookie-analytics-body">
                ${config.analytics.passwordProtect && !isDashboardAuthenticated ? 
                    generatePasswordPrompt(language) : 
                    generateAnalyticsDashboard(language)}
                ${config.analytics.consentHistory ? generateConsentHistory(language) : ''}
            </div>
        </div>
    </div>
    
    <!-- Dark Mode Toggle (for admin) -->
    <button id="darkModeToggle" class="dark-mode-toggle">
        ${currentColorScheme === config.colors.dark ? lang.lightMode : lang.darkMode}
    </button>
    
    <style>
    /* Base Styles */
    .cookie-consent-banner, 
    .cookie-settings-modal, 
    .cookie-analytics-modal {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        box-sizing: border-box;
    }
    
    /* Modern Banner Styles */
    .cookie-consent-banner.modern {
        position: fixed;
        ${getBannerPosition()}
        width: ${config.bannerSize.width}px;
        min-width: ${config.bannerSize.minWidth}px;
        max-width: ${config.bannerSize.maxWidth}px;
        ${config.bannerSize.height === 'auto' ? '' : `height: ${config.bannerSize.height}px;`}
        background: ${currentColorScheme.bannerBg};
        border-radius: ${config.bannerSize.borderRadius}px;
        ${config.bannerSize.borderWidth > 0 ? `border: ${config.bannerSize.borderWidth}px solid ${currentColorScheme.bannerBorder};` : ''}
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
        z-index: 9999;
        padding: 24px;
        display: none;
        ${getAnimationStyle('entrance')}
        transition: all ${config.animations.duration}ms ${config.animations.easing};
    }
    
    .cookie-consent-banner.modern.show {
        ${getAnimationStyle('entrance', true)}
        display: flex;
        flex-direction: column;
    }
    
    .cookie-consent-banner.modern .website-logo {
        max-width: 60px;
        margin-bottom: 15px;
    }
    
    .cookie-consent-banner.modern .cookie-consent-content {
        flex: 1;
    }
    
    .cookie-consent-banner.modern .cookie-consent-buttons {
        display: flex;
        gap: 12px;
        margin-top: 20px;
    }
    
    .cookie-consent-banner.modern .close-banner {
        position: absolute;
        top: 10px;
        right: 10px;
        background: none;
        border: none;
        font-size: 20px;
        cursor: pointer;
        color: ${currentColorScheme.textLight};
    }
    
    /* Default Banner Styles */
    .cookie-consent-banner.default {
        position: fixed;
        ${getBannerPosition()}
        width: ${config.bannerSize.width}px;
        min-width: ${config.bannerSize.minWidth}px;
        max-width: ${config.bannerSize.maxWidth}px;
        ${config.bannerSize.height === 'auto' ? '' : `height: ${config.bannerSize.height}px;`}
        background: ${currentColorScheme.bannerBg};
        border-radius: ${config.bannerSize.borderRadius}px;
        ${config.bannerSize.borderWidth > 0 ? `border: ${config.bannerSize.borderWidth}px solid ${currentColorScheme.bannerBorder};` : ''}
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
        z-index: 9999;
        padding: 24px;
        display: none;
        ${getAnimationStyle('entrance')}
        transition: all ${config.animations.duration}ms ${config.animations.easing};
    }
    
    .cookie-consent-banner.default.show {
        ${getAnimationStyle('entrance', true)}
        display: block;
    }
    
    /* Common Banner Elements */
    .cookie-consent-content h2 {
        margin: 0 0 16px 0;
        font-size: 18px;
        color: ${currentColorScheme.textDark};
        font-weight: 600;
        line-height: 1.4;
    }
    
    .cookie-consent-content p {
        margin: 0 0 24px 0;
        font-size: 14px;
        color: ${currentColorScheme.textLight};
        line-height: 1.5;
    }
    
    .privacy-policy-link {
        color: ${currentColorScheme.secondary};
        text-decoration: none;
        font-size: 13px;
        font-weight: 500;
        display: inline-block;
        margin-bottom: 24px;
        transition: color 0.2s ease;
    }
    
    .privacy-policy-link:hover {
        color: ${darkenColor(currentColorScheme.secondary, 20)};
    }
    
    .cookie-consent-buttons {
        display: flex;
        gap: 12px;
        margin-top: 8px;
    }
    
    .cookie-btn {
        padding: ${config.buttons.padding};
        border-radius: ${config.buttons.borderRadius}px;
        cursor: pointer;
        font-weight: 600;
        font-size: 14px;
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        text-align: center;
        border: ${config.buttons.borderWidth}px solid transparent;
        ${config.buttons.shadow ? 'box-shadow: 0 2px 5px rgba(0,0,0,0.1);' : ''}
        ${config.buttons.hoverEffect ? 'transform: translateY(0);' : ''}
    }
    
    .cookie-btn:hover {
        ${config.buttons.hoverEffect ? `
        transform: translateY(-2px);
        box-shadow: 0 5px 10px rgba(0,0,0,0.15);
        ` : ''}
    }
    
    .adjust-btn {
        background-color: ${currentColorScheme.background === '#ffffff' ? '#f8f9fa' : lightenColor(currentColorScheme.background, 10)};
        color: ${currentColorScheme.textDark};
        border: 1px solid ${currentColorScheme.textLight};
    }
    
    .adjust-btn:hover {
        background-color: ${currentColorScheme.buttonHover.adjust};
    }
    
    .reject-btn {
        background-color: ${currentColorScheme.danger};
        color: ${currentColorScheme.buttonText};
        border: 1px solid ${currentColorScheme.danger};
    }
    
    .reject-btn:hover {
        background-color: ${currentColorScheme.buttonHover.reject};
    }
    
    .accept-btn {
        background-color: ${currentColorScheme.primary};
        color: ${currentColorScheme.buttonText};
        border: 1px solid ${currentColorScheme.primary};
        ${config.buttons.shadow ? `box-shadow: 0 2px 12px ${hexToRgba(currentColorScheme.primary, 0.3)};` : ''}
    }
    
    .accept-btn:hover {
        background-color: ${currentColorScheme.buttonHover.accept};
    }
    
    .export-btn {
        background-color: ${currentColorScheme.secondary};
        color: ${currentColorScheme.buttonText};
        border: 1px solid ${currentColorScheme.secondary};
    }
    
    .export-btn:hover {
        background-color: ${currentColorScheme.buttonHover.save};
    }
    
    /* Language Selector */
    .language-selector {
        position: absolute;
        top: 15px;
        right: 15px;
    }
    
    .language-selector select {
        padding: 6px 10px;
        border-radius: 6px;
        border: 1px solid ${currentColorScheme.textLight};
        background-color: ${currentColorScheme.background === '#ffffff' ? '#f8f9fa' : lightenColor(currentColorScheme.background, 10)};
        font-size: 13px;
        color: ${currentColorScheme.textDark};
        cursor: pointer;
        transition: all 0.2s ease;
    }
    
    .language-selector select:hover {
        border-color: ${currentColorScheme.secondary};
        background-color: ${currentColorScheme.background};
    }
    
    /* Settings Modal */
    .cookie-settings-modal {
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
        transition: opacity ${config.animations.duration}ms ${config.animations.easing};
    }
    
    .cookie-settings-modal.show {
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 1;
    }
    
    .cookie-settings-content {
        background-color: ${currentColorScheme.background};
        margin: 0 auto;
        width: 845px;
        max-height: 80vh;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        overflow: hidden;
        transform: translateY(20px);
        transition: transform ${config.animations.duration}ms ${config.animations.easing};
        display: flex;
        flex-direction: column;
    }
    
    .cookie-settings-modal.show .cookie-settings-content {
        transform: translateY(0);
    }
    
    /* ... [Rest of the CSS styles] ... */
    
    /* Dark Mode Toggle */
    .dark-mode-toggle {
        position: fixed;
        bottom: 30px;
        left: 30px;
        padding: 8px 12px;
        background-color: ${currentColorScheme.primary};
        color: white;
        border: none;
        border-radius: 20px;
        cursor: pointer;
        z-index: 9996;
        font-size: 12px;
        font-weight: 600;
    }
    
    /* Responsive Styles */
    @media (max-width: 900px) {
        .cookie-settings-content, .cookie-analytics-content {
            width: 90%;
        }
    }
    
    @media (max-width: 768px) {
        .cookie-consent-banner {
            width: 90%;
            ${config.bannerPosition === 'left' ? 'left: 5%;' : config.bannerPosition === 'right' ? 'right: 5%;' : 'left: 5%; right: 5%;'}
            bottom: 10px;
        }
        
        .cookie-consent-buttons {
            flex-direction: column;
        }
    }
    
    @media (max-width: 480px) {
        .cookie-consent-banner {
            padding: 15px;
            width: calc(100% - 30px);
        }
        
        .cookie-settings-button, .cookie-admin-button {
            width: 50px;
            height: 50px;
        }
    }
    </style>`;
    
    document.body.insertAdjacentHTML('beforeend', html);
}

// Helper function to get banner position
function getBannerPosition() {
    switch (config.bannerPosition) {
        case 'left':
            return 'left: 20px; bottom: 20px;';
        case 'right':
            return 'right: 20px; bottom: 20px;';
        case 'center':
            return 'left: 50%; bottom: 20px; transform: translateX(-50%);';
        default:
            return 'right: 20px; bottom: 20px;';
    }
}

// Helper function to get animation styles
function getAnimationStyle(type, show = false) {
    if (!config.animations.enabled) return '';
    
    const duration = config.animations.duration;
    const easing = config.animations.easing;
    
    if (type === 'entrance') {
        if (show) {
            switch (config.animations.entrance) {
                case 'fadeIn':
                    return 'opacity: 1;';
                case 'fadeInUp':
                    return 'opacity: 1; transform: translateY(0);';
                case 'slideUp':
                    return 'transform: translateY(0);';
                case 'slideRight':
                    return 'transform: translateX(0);';
                default:
                    return 'opacity: 1; transform: translateY(0);';
            }
        } else {
            switch (config.animations.entrance) {
                case 'fadeIn':
                    return 'opacity: 0;';
                case 'fadeInUp':
                    return 'opacity: 0; transform: translateY(20px);';
                case 'slideUp':
                    return 'transform: translateY(100px);';
                case 'slideRight':
                    return 'transform: translateX(100px);';
                default:
                    return 'opacity: 0; transform: translateY(20px);';
            }
        }
    } else { // exit
        if (show) {
            return '';
        } else {
            switch (config.animations.exit) {
                case 'fadeOut':
                    return 'opacity: 0;';
                case 'fadeOutDown':
                    return 'opacity: 0; transform: translateY(20px);';
                case 'slideDown':
                    return 'transform: translateY(100px);';
                case 'slideLeft':
                    return 'transform: translateX(-100px);';
                default:
                    return 'opacity: 0; transform: translateY(20px);';
            }
        }
    }
}

// Helper function to darken a color
function darkenColor(color, percent) {
    // ... implementation ...
}

// Helper function to lighten a color
function lightenColor(color, percent) {
    // ... implementation ...
}

// Helper function to convert hex to rgba
function hexToRgba(hex, alpha) {
    // ... implementation ...
}

// ... [Rest of the implementation functions] ...

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Detect color scheme
    detectColorScheme();
    
    // Load analytics data
    if (config.analytics.enabled) {
        loadAnalyticsData();
    }
    
    // Check domain restrictions
    if (!isDomainAllowed()) {
        console.log('Cookie consent banner disabled for this domain');
        return;
    }
    
    // Get geo data
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
    
    // Scan and categorize cookies
    const detectedCookies = scanAndCategorizeCookies();
    
    // Inject HTML
    injectConsentHTML(detectedCookies, detectedLanguage);
    initializeCookieConsent(detectedCookies, detectedLanguage);
    
    // Apply color scheme
    applyColorScheme();
    
    // Set up dark mode toggle
    document.getElementById('darkModeToggle')?.addEventListener('click', toggleDarkMode);
    
    // Delay banner if configured
    if (config.bannerDelay > 0) {
        setTimeout(() => {
            if (!getCookie('cookie_consent')) {
                showCookieBanner();
            }
        }, config.bannerDelay * 1000);
    }
});

// ... [All other existing functions] ...
