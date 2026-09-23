// ============================================
// BACK TO KIDASHI DESIGN - STICKY SIDE TAB
// Injects a fixed pill button, linking back to
// the Kidashi Design main site, on every page.
// ============================================

(function () {
    var DEFAULT_URL = 'https://www.kidashidesign.com/';

    // Allows the target URL to be overridden per page via
    // <script src="js/back-to-kidashi-tab.js" data-kidashi-url="https://example.com/"></script>
    var scriptEl = document.currentScript;

    function createBackToKidashiTab() {
        if (document.querySelector('.kidashi-side-tab')) {
            return;
        }

        var url = (scriptEl && scriptEl.dataset.kidashiUrl) || DEFAULT_URL;

        var link = document.createElement('a');
        link.className = 'kidashi-side-tab';
        link.href = url;
        link.setAttribute('aria-label', 'Back to Kidashi Design');

        link.innerHTML =
            '<svg class="kidashi-side-tab__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
            '<path d="M15 18l-6-6 6-6"></path>' +
            '</svg>' +
            '<span class="kidashi-side-tab__text">Back to Kidashi Design</span>';

        document.body.appendChild(link);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', createBackToKidashiTab);
    } else {
        createBackToKidashiTab();
    }
})();
