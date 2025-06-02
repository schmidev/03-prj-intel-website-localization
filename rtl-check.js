// rtl-check.js
// This script checks if the user's browser language is a right-to-left (RTL) language
// and sets the page direction to RTL if needed.

// List of common RTL language codes
const rtlLanguages = [
  'ar', // Arabic
  'he', // Hebrew
  'fa', // Persian
  'ur', // Urdu
  'ps', // Pashto
  'dv', // Divehi
  'ku', // Kurdish
  'yi', // Yiddish
];

// Get the user's preferred language (e.g., 'en-US', 'ar', etc.)
const userLang = navigator.language || navigator.userLanguage;

// Check if the language code starts with any RTL language code
const isRTL = rtlLanguages.some(code => userLang.toLowerCase().startsWith(code));

if (isRTL) {
  // Set the direction attribute on the <html> element
  document.documentElement.setAttribute('dir', 'rtl');
  // Optionally, add a class for further RTL-specific styling
  document.documentElement.classList.add('rtl-mode');
}
