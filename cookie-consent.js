/**
 * Ultimate GDPR Cookie Consent Solution v5.0 - Premium Edition
 * - Multiple design options
 * - Complete positioning and sizing controls
 * - Dark/light mode with auto-detection
 * - Advanced animation controls
 * - Granular cookie controls
 * - Enhanced analytics dashboard
 * - Automatic translation based on user's country
 * - Domain restriction controls
 * - Geo-targeting (country/city/state level controls)
 * - Complete EU language support
 * - Built-in analytics dashboard with password protection
 * - Consent Mode v2 and future-proof compliance
 */

// ============== CONFIGURATION SECTION ============== //
const config = {
    // General Settings
    enabled: true, // Master switch for the whole solution
    
    // UI Theme Selection (design1, design2)
    uiTheme: 'design1',
    
    // Banner Position (left, right, center)
    bannerPosition: 'right',
    
    // Banner Dimensions (width in px, height auto-adjusts)
    bannerWidth: 440,
    
    // Floating Elements Configuration
    floatingElements: {
        // Consent Button
        consentButton: {
            enabled: true,
            position: 'right', // left or right
            icon: 'default', // default, cookie, shield, gear
            color: '#2ecc71',
            hoverColor: '#27ae60'
        },
        
        // Analytics Admin Button
        adminButton: {
            enabled: true,
            position: 'right', // left or right
            icon: 'default', // default, chart, analytics, stats
            color: '#3498db',
            hoverColor: '#2980b9',
            verticalOffset: 80 // px from consent button
        }
    },
    
    // Color Scheme Configuration
    colors: {
        // Light Mode Colors
        light: {
            primary: '#2ecc71',      // Green (accept button color)
            secondary: '#3498db',    // Blue (save button color)
            danger: '#e74c3c',       // Red (reject button color)
            textDark: '#2c3e50',     // Dark text
            textLight: '#7f8c8d',    // Light text
            background: '#ffffff',   // White background
            toggleActive: '#2ecc71', // Same as primary
            toggleInactive: '#bdc3c7',// Gray for inactive
            bannerBorder: 'none',    // Border style for banner
            bannerRadius: '12px',    // Border radius for banner
            buttonRadius: '8px',      // Border radius for buttons
            buttonOutline: 'none'    // Button outline style
        },
        
        // Dark Mode Colors
        dark: {
            primary: '#27ae60',
            secondary: '#2980b9',
            danger: '#c0392b',
            textDark: '#ecf0f1',
            textLight: '#bdc3c7',
            background: '#2c3e50',
            toggleActive: '#27ae60',
            toggleInactive: '#7f8c8d',
            bannerBorder: '1px solid #34495e',
            bannerRadius: '12px',
            buttonRadius: '8px',
            buttonOutline: 'none'
        }
    },
    
    // Dark Mode Settings
    darkMode: {
        enabled: true, // Enable dark mode functionality
        autoDetect: true, // Auto-detect user's preferred color scheme
        defaultMode: 'light' // Default mode if autoDetect is off
    },
    
    // Animation Settings
    animations: {
        enabled: true,
        bannerEntrance: 'slideUp', // slideUp, fadeIn, bounce
        bannerExit: 'slideDown',  // slideDown, fadeOut
        modalEntrance: 'fadeIn',  // fadeIn, slideUp, zoomIn
        modalExit: 'fadeOut',     // fadeOut, slideDown, zoomOut
        duration: 0.4, // seconds
        easing: 'cubic-bezier(0.25, 0.8, 0.25, 1)',
        hoverIntensity: 'medium' // low, medium, high
    },
    
    // Logo Settings
    logo: {
        enabled: true,
        url: 'auto', // 'auto' to detect, or URL
        width: '40px',
        height: '40px',
        position: 'left' // left or right
    },
    
    // Domain restriction - only show on these domains (empty array = all domains)
    allowedDomains: ['dev-rpractice.pantheonsite.io', 'practicebdhere.myshopify.com'],
    
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
        exportEnabled: true, // Enable data export
        detailedHistory: true // Keep detailed consent change history
    },
    
    // Cookie Controls
    cookieControls: {
        showIndividualCookies: true, // Show individual cookie toggles
        uncategorizedEnabled: true, // Allow control of uncategorized cookies
        essentialLocked: true // Essential cookies can't be disabled
    },
    
    // Banner behavior
    behavior: {
        autoShow: true, // Automatically show banner on page load
        rememberLanguage: true, // Remember user's language preference
        acceptOnScroll: false, // Accept cookies when user scrolls
        acceptOnContinue: true, // Implicit consent when continuing to browse
        darkModeToggle: true // Show dark mode toggle in banner
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
        darkMode: "Dark Mode",
        lightMode: "Light Mode",
        individualCookies: "Individual Cookies",
        cookieName: "Cookie Name",
        cookiePurpose: "Purpose",
        cookieDuration: "Duration",
        exportData: "Export Data",
        exportCSV: "Export as CSV",
        exportJSON: "Export as JSON",
        consentHistory: "Consent History",
        timestamp: "Timestamp",
        consentStatus: "Status",
        userAgent: "User Agent",
        viewDetails: "View Details",
        close: "Close"
    },
    // ... (keep all other language translations the same as before)
    // Just make sure to add the new translation keys to all languages
};

// Country to language mapping for auto-translation
const countryLanguageMap = {
    // ... (keep same as before)
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
    history: [] // For detailed consent history
};

// Password protection for analytics
let isDashboardAuthenticated = false;
let currentColorScheme = config.darkMode.autoDetect ? 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') : 
    config.darkMode.defaultMode;

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
}

// Save analytics data to localStorage
function saveAnalyticsData() {
    localStorage.setItem('consentAnalytics', JSON.stringify(consentAnalytics));
}

// Update analytics data
function updateConsentStats(status, details = {}) {
    const today = new Date().toISOString().split('T')[0];
    const timestamp = new Date().toISOString();
    
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
    
    // Add to history if enabled
    if (config.analytics.detailedHistory) {
        consentAnalytics.history.push({
            timestamp,
            status,
            categories: details.categories || {},
            userAgent: navigator.userAgent,
            language: navigator.language,
            referrer: document.referrer
        });
        
        // Keep history size manageable
        if (consentAnalytics.history.length > 1000) {
            consentAnalytics.history.shift();
        }
    }
    
    // Update weekly and monthly stats
    updateTimeBasedStats(today, status);
    
    saveAnalyticsData();
}

// ... (keep all other existing functions like updateTimeBasedStats, getWeekNumber, etc.)

// Generate analytics dashboard HTML with enhanced features
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
    
    // Generate history table if enabled
    const historyTable = config.analytics.detailedHistory ? `
    <div class="time-stat">
        <h4>${lang.consentHistory}</h4>
        <div class="history-table-container">
            <table class="history-table">
                <thead>
                    <tr>
                        <th>${lang.timestamp}</th>
                        <th>${lang.consentStatus}</th>
                        <th>${lang.language}</th>
                        <th>${lang.viewDetails}</th>
                    </tr>
                </thead>
                <tbody>
                    ${consentAnalytics.history.slice(0, 10).map(entry => `
                    <tr>
                        <td>${new Date(entry.timestamp).toLocaleString()}</td>
                        <td>${entry.status}</td>
                        <td>${entry.language}</td>
                        <td><button class="view-details-btn" data-timestamp="${entry.timestamp}">${lang.viewDetails}</button></td>
                    </tr>`).join('')}
                </tbody>
            </table>
        </div>
    </div>` : '';
    
    // Export buttons if enabled
    const exportButtons = config.analytics.exportEnabled ? `
    <div class="export-buttons">
        <button id="exportCSV" class="export-btn">${lang.exportCSV}</button>
        <button id="exportJSON" class="export-btn">${lang.exportJSON}</button>
    </div>` : '';
    
    return `
    <div class="analytics-dashboard">
        <h3>${lang.dashboardTitle}</h3>
        
        ${exportButtons}
        
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
            
            ${historyTable}
        </div>
        
        <!-- Details Modal (hidden by default) -->
        <div id="consentDetailsModal" class="consent-details-modal">
            <div class="consent-details-content">
                <div class="consent-details-header">
                    <h4>${lang.consentDetails}</h4>
                    <span class="close-details-modal">&times;</span>
                </div>
                <div class="consent-details-body">
                    <div id="consentDetailsContent"></div>
                </div>
                <div class="consent-details-footer">
                    <button class="close-details-btn">${lang.close}</button>
                </div>
            </div>
        </div>
    </div>`;
}

// ... (keep all other existing functions like isDomainAllowed, checkGeoTargeting, etc.)

// Generate cookie tables for each category with individual toggles if enabled
function generateCategorySection(category, cookies, language = 'en') {
    const lang = translations[language] || translations.en;
    const categoryKey = category === 'functional' ? 'essential' : category;
    const isEssential = category === 'functional' && config.cookieControls.essentialLocked;
    
    // Generate individual cookie toggles if enabled
    const individualToggles = config.cookieControls.showIndividualCookies ? `
    <div class="individual-cookies" style="display: none;">
        <h4>${lang.individualCookies}</h4>
        <table class="cookie-toggle-table">
            <thead>
                <tr>
                    <th>${lang.cookieName}</th>
                    <th>${lang.cookiePurpose}</th>
                    <th>${lang.cookieDuration}</th>
                    <th>Enabled</th>
                </tr>
            </thead>
            <tbody>
                ${cookies.map(cookie => `
                <tr>
                    <td><code>${cookie.name}</code></td>
                    <td>${cookie.description}</td>
                    <td>${cookie.duration}</td>
                    <td>
                        <label class="toggle-switch small">
                            <input type="checkbox" data-cookie="${cookie.name}" ${isEssential ? 'checked disabled' : 'checked'}>
                            <span class="toggle-slider"></span>
                        </label>
                    </td>
                </tr>`).join('')}
            </tbody>
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
                <span>Cookie Details</span>
                <span class="toggle-details">+</span>
            </div>
            <div class="cookie-details-content" style="display: none;">
                ${cookies.length > 0 ? 
                    generateCookieTable(cookies) : 
                    `<p class="no-cookies-message">No cookies in this category detected.</p>`}
                ${individualToggles}
            </div>
        </div>
    </div>`;
}

// ... (keep all other existing functions like detectUserLanguage, getAvailableLanguages, etc.)

// Generate the appropriate HTML based on selected design
function generateConsentHTML(detectedCookies, language = 'en') {
    const lang = translations[language] || translations.en;
    const availableLanguages = getAvailableLanguages();
    const colors = config.colors[currentColorScheme];
    
    // Get logo URL
    let logoUrl = '';
    if (config.logo.enabled) {
        if (config.logo.url === 'auto') {
            // Try to find logo in common locations
            const logoElement = document.querySelector('header img, .logo img, #logo img, img[alt*="logo"], img[src*="logo"]');
            logoUrl = logoElement ? logoElement.src : '';
        } else {
            logoUrl = config.logo.url;
        }
    }
    
    // Generate language selector dropdown if enabled
    const languageSelector = config.languageConfig.showLanguageSelector ? `
    <div class="language-selector">
        <select id="cookieLanguageSelect">
            ${availableLanguages.map(code => `
                <option value="${code}" ${code === language ? 'selected' : ''}>${translations[code].language}</option>
            `).join('')}
        </select>
    </div>` : '';
    
    // Generate dark mode toggle if enabled
    const darkModeToggle = config.behavior.darkModeToggle ? `
    <div class="dark-mode-toggle">
        <label class="toggle-switch small">
            <input type="checkbox" id="darkModeToggle" ${currentColorScheme === 'dark' ? 'checked' : ''}>
            <span class="toggle-slider"></span>
        </label>
        <span>${currentColorScheme === 'dark' ? lang.lightMode : lang.darkMode}</span>
    </div>` : '';
    
    // Generate admin dashboard button if analytics enabled
    const adminButton = config.analytics.enabled && config.analytics.showDashboard ? `
    <div id="cookieAdminButton" class="cookie-admin-button" title="${lang.dashboardTitle}">
        ${getIconSVG('admin')}
    </div>` : '';
    
    // Generate the appropriate banner design
    let bannerHTML = '';
    if (config.uiTheme === 'design1') {
        bannerHTML = generateDesign1Banner(lang, logoUrl, languageSelector, darkModeToggle, detectedCookies);
    } else {
        bannerHTML = generateDesign2Banner(lang, logoUrl, languageSelector, darkModeToggle, detectedCookies);
    }
    
    const html = `
    ${bannerHTML}
    
    <!-- Floating Settings Button -->
    <div id="cookieFloatingButton" class="cookie-settings-button" title="${lang.title}">
        ${getIconSVG('consent')}
    </div>
    
    ${adminButton}
    
    <!-- Analytics Dashboard -->
    <div id="cookieAnalyticsModal" class="cookie-analytics-modal">
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
    /* Main Styles - Dynamic based on config */
    .cookie-consent-banner {
        position: fixed;
        bottom: 20px;
        ${getBannerPosition()}
        width: ${config.bannerWidth}px;
        background: ${colors.background};
        border-radius: ${colors.bannerRadius};
        ${colors.bannerBorder ? `border: ${colors.bannerBorder};` : ''}
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
        z-index: 9999;
        padding: 24px;
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        display: none;
        ${getBannerAnimation('entrance')}
        transition: all ${config.animations.duration}s ${config.animations.easing};
        overflow: hidden;
    }

    .cookie-consent-banner.show {
        ${getBannerAnimation('entrance', true)}
        display: block;
    }

    /* ... (keep all other CSS rules, but update colors to use the dynamic variables) */
    /* For example: */
    .cookie-consent-content h2 {
        color: ${colors.textDark};
    }
    
    .cookie-consent-content p {
        color: ${colors.textLight};
    }
    
    .accept-btn {
        background-color: ${colors.primary};
        border-radius: ${colors.buttonRadius};
        ${colors.buttonOutline ? `outline: ${colors.buttonOutline};` : ''}
    }
    
    /* ... (include all other CSS from before, updated for dynamic colors) */
    </style>`;
    
    document.body.insertAdjacentHTML('beforeend', html);
}

// Helper function to get banner position CSS
function getBannerPosition() {
    switch (config.bannerPosition) {
        case 'left':
            return 'left: 20px;';
        case 'right':
            return 'right: 20px;';
        case 'center':
            return 'left: 50%; transform: translateX(-50%);';
        default:
            return 'right: 20px;';
    }
}

// Helper function to get animation CSS
function getBannerAnimation(type, show = false) {
    if (!config.animations.enabled) {
        return show ? 'opacity: 1; transform: none;' : 'opacity: 0; transform: none;';
    }
    
    const duration = config.animations.duration;
    const easing = config.animations.easing;
    
    if (type === 'entrance') {
        if (show) {
            switch (config.animations.bannerEntrance) {
                case 'slideUp':
                    return `opacity: 1; transform: translateY(0); transition: all ${duration}s ${easing};`;
                case 'fadeIn':
                    return `opacity: 1; transform: none; transition: opacity ${duration}s ${easing};`;
                case 'bounce':
                    return `opacity: 1; transform: translateY(0); transition: all ${duration}s cubic-bezier(0.68, -0.55, 0.265, 1.55);`;
                default:
                    return `opacity: 1; transform: translateY(0);`;
            }
        } else {
            switch (config.animations.bannerEntrance) {
                case 'slideUp':
                    return `opacity: 0; transform: translateY(20px);`;
                case 'fadeIn':
                    return `opacity: 0; transform: none;`;
                case 'bounce':
                    return `opacity: 0; transform: translateY(20px);`;
                default:
                    return `opacity: 0; transform: translateY(20px);`;
            }
        }
    } else {
        // Exit animations
        if (!show) {
            switch (config.animations.bannerExit) {
                case 'slideDown':
                    return `opacity: 0; transform: translateY(20px); transition: all ${duration}s ${easing};`;
                case 'fadeOut':
                    return `opacity: 0; transform: none; transition: opacity ${duration}s ${easing};`;
                default:
                    return `opacity: 0; transform: translateY(20px); transition: all ${duration}s ${easing};`;
            }
        }
    }
    
    return '';
}

// Helper function to get appropriate icon SVG
function getIconSVG(type) {
    if (type === 'consent') {
        switch (config.floatingElements.consentButton.icon) {
            case 'cookie':
                return `<svg viewBox="0 0 512 512"><path d="M257.5 27.6c-.8-5.4-4.9-9.8-10.3-10.6c-22.1-3.1-44.6 .9-64.4 11.4l-74 39.5C89.1 78.4 73.2 94.9 63.4 115L26.7 190.6c-9.8 20.1-13 42.9-9.1 64.9l14.5 82.8c3.9 22.1 14.6 42.3 30.7 57.9l60.3 58.4c16.1 15.6 36.6 25.6 58.7 28.7l83 11.7c22.1 3.1 44.6-.9-64.4-11.4l74-39.5c19.7-10.5 35.6-27 45.4-47.2l36.7-75.5c9.8-20.1 13-42.9 9.1-64.9c-.9-5.7-5.9-9.9-11.6-9.9c-51.5 0-101.5-14.7-144.9-42.3l-61.2-42.4c-10.1-7-21.8-11.1-33.9-11.9c-12.1-.9-24.1 1.6-34.9 7.2l-61.2 35.1c-6.4 3.7-14.6 1.9-19.3-4.1s-4.7-13.7 1.1-18.4l61.2-42.4c43.4-30.1 97.1-46.4 151.8-46.4c5.7 0 10.7-4.1 11.6-9.8zM133.4 303.6c-25.9 0-46.9-21-46.9-46.9s21-46.9 46.9-46.9s46.9 21 46.9 46.9s-21 46.9-46.9 46.9zm116.1-90.3c-26.5 0-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48s-21.5-48-48-48zm92.3 99.7c-26.5 0-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48s-21.5-48-48-48z"/></svg>`;
            case 'shield':
                return `<svg viewBox="0 0 512 512"><path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8V444.8C394 378 431.1 230.1 432 141.4L256 66.8l0 0z"/></svg>`;
            case 'gear':
                return `<svg viewBox="0 0 512 512"><path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4l-55.7 17.7c-8.8 2.8-18.6 .4-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.4 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/></svg>`;
            default:
                return `<svg viewBox="0 0 512 512"><path d="M257.5 27.6c-.8-5.4-4.9-9.8-10.3-10.6c-22.1-3.1-44.6 .9-64.4 11.4l-74 39.5C89.1 78.4 73.2 94.9 63.4 115L26.7 190.6c-9.8 20.1-13 42.9-9.1 64.9l14.5 82.8c3.9 22.1 14.6 42.3 30.7 57.9l60.3 58.4c16.1 15.6 36.6 25.6 58.7 28.7l83 11.7c22.1 3.1 44.6-.9-64.4-11.4l74-39.5c19.7-10.5 35.6-27 45.4-47.2l36.7-75.5c9.8-20.1 13-42.9 9.1-64.9c-.9-5.7-5.9-9.9-11.6-9.9c-51.5 0-101.5-14.7-144.9-42.3l-61.2-42.4c-10.1-7-21.8-11.1-33.9-11.9c-12.1-.9-24.1 1.6-34.9 7.2l-61.2 35.1c-6.4 3.7-14.6 1.9-19.3-4.1s-4.7-13.7 1.1-18.4l61.2-42.4c43.4-30.1 97.1-46.4 151.8-46.4c5.7 0 10.7-4.1 11.6-9.8zM133.4 303.6c-25.9 0-46.9-21-46.9-46.9s21-46.9 46.9-46.9s46.9 21 46.9 46.9s-21 46.9-46.9 46.9zm116.1-90.3c-26.5 0-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48s-21.5-48-48-48zm92.3 99.7c-26.5 0-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48s-21.5-48-48-48z"/></svg>`;
        }
    } else {
        // Admin button icons
        switch (config.floatingElements.adminButton.icon) {
            case 'chart':
                return `<svg viewBox="0 0 512 512"><path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm96 288c0-17.7 14.3-32 32-32s32 14.3 32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V352zM256 192c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32s-32-14.3-32-32V224c0-17.7 14.3-32 32-32zm128-64c17.7 0 32 14.3 32 32v256c0 17.7-14.3 32-32 32s-32-14.3-32-32V160c0-17.7 14.3-32 32-32z"/></svg>`;
            case 'analytics':
                return `<svg viewBox="0 0 512 512"><path d="M160 80c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V80zM0 272c0-26.5 21.5-48 48-48H80c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V272zM368 96h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H368c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48z"/></svg>`;
            case 'stats':
                return `<svg viewBox="0 0 448 512"><path d="M160 80c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V80zM0 272c0-26.5 21.5-48 48-48H80c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V272zM368 96h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H368c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48z"/></svg>`;
            default:
                return `<svg viewBox="0 0 576 512"><path d="M288 160C252.7 160 224 188.7 224 224C224 259.3 252.7 288 288 288C323.3 288 352 259.3 352 224C352 188.7 323.3 160 288 160zM95.4 112.6C142.5 68.84 207.2 32 288 32C368.8 32 433.5 68.84 480.6 112.6C527.4 156 558.7 207.1 573.5 243.7C576.8 251.6 576.8 260.4 573.5 268.3C558.7 304 527.4 355.1 480.6 399.4C433.5 443.2 368.8 480 288 480C207.2 480 142.5 443.2 95.4 399.4C48.6 355.1 17.3 304 2.5 268.3C-.8 260.4-.8 251.6 2.5 243.7C17.3 207.1 48.6 156 95.4 112.6V112.6zM288 80C218.6 80 160 138.6 160 208C160 277.4 218.6 336 288 336C357.4 336 416 277.4 416 208C416 138.6 357.4 80 288 80zM44.96 256C56.53 286.1 83.51 329.2 124.4 368C165.3 406.8 219.1 432 288 432C356.9 432 410.7 406.8 451.6 368C492.5 329.2 519.5 286.1 531 256C519.5 225.9 492.5 182.8 451.6 144C410.7 105.2 356.9 80 288 80C219.1 80 165.3 105.2 124.4 144C83.51 182.8 56.53 225.9 44.96 256V256z"/></svg>`;
        }
    }
}

// Generate Design 1 Banner (original design)
function generateDesign1Banner(lang, logoUrl, languageSelector, darkModeToggle, detectedCookies) {
    return `
    <!-- Main Consent Banner - Design 1 -->
    <div id="cookieConsentBanner" class="cookie-consent-banner">
        <div class="cookie-consent-container">
            ${languageSelector}
            ${darkModeToggle}
            ${logoUrl ? `<div class="cookie-consent-logo"><img src="${logoUrl}" alt="Logo" width="${config.logo.width}" height="${config.logo.height}"></div>` : ''}
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
    </div>

    <!-- Settings Modal -->
    <div id="cookieSettingsModal" class="cookie-settings-modal">
        <div class="cookie-settings-content">
            <div class="cookie-settings-header">
                <h2>${lang.title}</h2>
                <span class="close-modal">&times;</span>
            </div>
            <div class="cookie-settings-body">
                ${generateCategorySection('functional', detectedCookies.functional, lang)}
                ${generateCategorySection('analytics', detectedCookies.analytics, lang)}
                ${generateCategorySection('performance', detectedCookies.performance, lang)}
                ${generateCategorySection('advertising', detectedCookies.advertising, lang)}
                ${detectedCookies.uncategorized.length > 0 ? generateCategorySection('uncategorized', detectedCookies.uncategorized, lang) : ''}
            </div>
            <div class="cookie-settings-footer">
                <button id="rejectAllSettingsBtn" class="cookie-btn reject-btn">${lang.reject}</button>
                <button id="saveSettingsBtn" class="cookie-btn save-btn">${lang.save}</button>
                <button id="acceptAllSettingsBtn" class="cookie-btn accept-btn">${lang.accept}</button>
            </div>
        </div>
    </div>`;
}

// Generate Design 2 Banner (alternative design)
function generateDesign2Banner(lang, logoUrl, languageSelector, darkModeToggle, detectedCookies) {
    return `
    <!-- Main Consent Banner - Design 2 -->
    <div id="cookieConsentBanner" class="cookie-consent-banner design2">
        <div class="cookie-consent-container">
            ${logoUrl ? `<div class="cookie-consent-logo"><img src="${logoUrl}" alt="Logo" width="${config.logo.width}" height="${config.logo.height}"></div>` : ''}
            <div class="cookie-consent-content">
                <h2>${lang.title}</h2>
                <p>${lang.description}</p>
                <div class="cookie-consent-actions">
                    <a href="/privacy-policy/" class="privacy-policy-link">${lang.privacy}</a>
                    <div class="cookie-consent-controls">
                        ${languageSelector}
                        ${darkModeToggle}
                    </div>
                </div>
            </div>
            <div class="cookie-consent-buttons">
                <button id="rejectAllBtn" class="cookie-btn reject-btn">${lang.reject}</button>
                <button id="adjustConsentBtn" class="cookie-btn adjust-btn">${lang.customize}</button>
                <button id="acceptAllBtn" class="cookie-btn accept-btn">${lang.accept}</button>
            </div>
        </div>
    </div>

    <!-- Settings Modal -->
    <div id="cookieSettingsModal" class="cookie-settings-modal design2">
        <div class="cookie-settings-content">
            <div class="cookie-settings-header">
                <h2>${lang.title}</h2>
                <span class="close-modal">&times;</span>
            </div>
            <div class="cookie-settings-body">
                ${generateCategorySection('functional', detectedCookies.functional, lang)}
                ${generateCategorySection('analytics', detectedCookies.analytics, lang)}
                ${generateCategorySection('performance', detectedCookies.performance, lang)}
                ${generateCategorySection('advertising', detectedCookies.advertising, lang)}
                ${detectedCookies.uncategorized.length > 0 ? generateCategorySection('uncategorized', detectedCookies.uncategorized, lang) : ''}
            </div>
            <div class="cookie-settings-footer">
                <button id="rejectAllSettingsBtn" class="cookie-btn reject-btn">${lang.reject}</button>
                <button id="saveSettingsBtn" class="cookie-btn save-btn">${lang.save}</button>
                <button id="acceptAllSettingsBtn" class="cookie-btn accept-btn">${lang.accept}</button>
            </div>
        </div>
    </div>`;
}

// ... (keep all other existing functions like initializeCookieConsent, setupEventListeners, etc.)

// Enhanced initializeCookieConsent with dark mode support
function initializeCookieConsent(detectedCookies, language) {
    const consentGiven = getCookie('cookie_consent');
    
    // Apply dark mode if enabled
    if (config.darkMode.enabled) {
        document.documentElement.setAttribute('data-color-scheme', currentColorScheme);
    }
    
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
    
    // Setup dark mode toggle if enabled
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('change', function() {
            toggleDarkMode(this.checked);
        });
    }
    
    // Setup admin button if enabled
    if (config.analytics.enabled && config.analytics.showDashboard) {
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
    
    // Setup export buttons if enabled
    if (config.analytics.exportEnabled) {
        document.getElementById('exportCSV')?.addEventListener('click', exportDataAsCSV);
        document.getElementById('exportJSON')?.addEventListener('click', exportDataAsJSON);
    }
    
    // Setup history details buttons if enabled
    if (config.analytics.detailedHistory) {
        document.querySelectorAll('.view-details-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                showConsentDetails(this.getAttribute('data-timestamp'));
            });
        });
        
        document.querySelector('.close-details-modal')?.addEventListener('click', hideConsentDetails);
        document.querySelector('.close-details-btn')?.addEventListener('click', hideConsentDetails);
    }
}

// Toggle dark mode
function toggleDarkMode(enableDark) {
    currentColorScheme = enableDark ? 'dark' : 'light';
    document.documentElement.setAttribute('data-color-scheme', currentColorScheme);
    
    // Update the toggle state
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
        darkModeToggle.checked = enableDark;
    }
    
    // Update the text
    const darkModeText = document.querySelector('.dark-mode-toggle span');
    if (darkModeText) {
        const lang = translations[document.getElementById('cookieLanguageSelect')?.value || 'en'] || translations.en;
        darkModeText.textContent = enableDark ? lang.lightMode : lang.darkMode;
    }
    
    // Store preference in cookie
    setCookie('color_scheme', currentColorScheme, 365);
}

// Show consent details modal
function showConsentDetails(timestamp) {
    const entry = consentAnalytics.history.find(e => e.timestamp === timestamp);
    if (!entry) return;
    
    const modal = document.getElementById('consentDetailsModal');
    const content = document.getElementById('consentDetailsContent');
    const lang = translations[document.getElementById('cookieLanguageSelect')?.value || 'en'] || translations.en;
    
    content.innerHTML = `
    <div class="detail-row">
        <strong>${lang.timestamp}:</strong>
        <span>${new Date(entry.timestamp).toLocaleString()}</span>
    </div>
    <div class="detail-row">
        <strong>${lang.consentStatus}:</strong>
        <span>${entry.status}</span>
    </div>
    <div class="detail-row">
        <strong>${lang.language}:</strong>
        <span>${entry.language}</span>
    </div>
    <div class="detail-row">
        <strong>${lang.userAgent}:</strong>
        <span>${entry.userAgent}</span>
    </div>
    <div class="detail-row">
        <strong>Referrer:</strong>
        <span>${entry.referrer || 'Direct'}</span>
    </div>
    <div class="detail-row">
        <strong>Categories:</strong>
        <div class="category-tags">
            ${Object.entries(entry.categories).map(([cat, enabled]) => `
            <span class="category-tag ${enabled ? 'enabled' : 'disabled'}">${cat}: ${enabled ? 'Enabled' : 'Disabled'}</span>
            `).join('')}
        </div>
    </div>`;
    
    modal.style.display = 'block';
}

function hideConsentDetails() {
    document.getElementById('consentDetailsModal').style.display = 'none';
}

// Export data as CSV
function exportDataAsCSV() {
    let csv = 'Timestamp,Status,Language,User Agent,Referrer,Functional,Analytics,Performance,Advertising,Other\n';
    
    consentAnalytics.history.forEach(entry => {
        csv += `"${new Date(entry.timestamp).toLocaleString()}","${entry.status}","${entry.language}","${entry.userAgent}","${entry.referrer || 'Direct'}",`;
        csv += `"${entry.categories.functional ? 'Yes' : 'No'}","${entry.categories.analytics ? 'Yes' : 'No'}","${entry.categories.performance ? 'Yes' : 'No'}","${entry.categories.advertising ? 'Yes' : 'No'}","${entry.categories.uncategorized ? 'Yes' : 'No'}"\n`;
    });
    
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `cookie-consent-data-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Export data as JSON
function exportDataAsJSON() {
    const data = {
        metadata: {
            exportedAt: new Date().toISOString(),
            totalEntries: consentAnalytics.history.length,
            version: '5.0'
        },
        data: consentAnalytics.history
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `cookie-consent-data-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// ... (keep all other existing functions like acceptAllCookies, rejectAllCookies, etc.)

// Enhanced saveCustomSettings with individual cookie controls
function saveCustomSettings() {
    const categories = {
        functional: true,  // Essential cookies always enabled
        analytics: document.querySelector('input[data-category="analytics"]').checked,
        performance: document.querySelector('input[data-category="performance"]').checked,
        advertising: document.querySelector('input[data-category="advertising"]').checked,
        uncategorized: document.querySelector('input[data-category="uncategorized"]') ? 
            document.querySelector('input[data-category="uncategorized"]').checked : false
    };
    
    // Get individual cookie settings if enabled
    const individualCookies = {};
    if (config.cookieControls.showIndividualCookies) {
        document.querySelectorAll('input[data-cookie]').forEach(input => {
            individualCookies[input.getAttribute('data-cookie')] = input.checked;
        });
    }
    
    const consentData = {
        status: 'custom',
        gcs: 'G101',
        categories,
        individualCookies,
        timestamp: new Date().getTime()
    };
    
    setCookie('cookie_consent', JSON.stringify(consentData), 365);
    updateConsentMode(consentData);
    loadCookiesAccordingToConsent(consentData);
    
    // Clear cookies if categories were disabled
    if (!consentData.categories.analytics) clearCategoryCookies('analytics');
    if (!consentData.categories.performance) clearCategoryCookies('performance');
    if (!consentData.categories.advertising) clearCategoryCookies('advertising');
    if (!consentData.categories.uncategorized) clearCategoryCookies('uncategorized');
    
    // Clear individual cookies that were disabled
    if (config.cookieControls.showIndividualCookies) {
        for (const [cookieName, enabled] of Object.entries(individualCookies)) {
            if (!enabled) {
                document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${window.location.hostname}`;
            }
        }
    }
    
    // Update analytics
    if (config.analytics.enabled) {
        updateConsentStats('custom', consentData);
    }
}

// ... (keep all other existing functions like setCookie, getCookie, etc.)

// Main initialization with all enhancements
document.addEventListener('DOMContentLoaded', function() {
    if (!config.enabled) return;
    
    // First check if we should run on this domain
    if (!isDomainAllowed()) {
        console.log('Cookie consent banner disabled for this domain');
        return;
    }
    
    // Load analytics data
    if (config.analytics.enabled) {
        loadAnalyticsData();
    }
    
    // Check for stored color scheme preference
    const storedScheme = getCookie('color_scheme');
    if (storedScheme && config.darkMode.enabled) {
        currentColorScheme = storedScheme;
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
    
    generateConsentHTML(detectedCookies, detectedLanguage);
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
