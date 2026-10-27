// ============================================
// BACK TO KIDASHI DESIGN - STICKY SIDE TAB
// Injects a fixed pill button, linking back to
// the Kidashi Design main site, on every page.
// A chevron toggle folds it down to a small handle
// (folded by default on small screens).
// ============================================

(function () {
    var DEFAULT_URL = 'https://www.kidashidesign.com/';
    var STORAGE_KEY = 'kidashiTabCollapsed';
    // Keep in step with the mobile breakpoint in css/back-to-kidashi-tab.css
    var MOBILE_QUERY = '(max-width: 640px)';
    var HIDE_LABEL = 'Hide Back to Kidashi Design button';
    var SHOW_LABEL = 'Show Back to Kidashi Design button';

    // Allows the target URL to be overridden per page via
    // <script src="js/back-to-kidashi-tab.js" data-kidashi-url="https://example.com/"></script>
    var scriptEl = document.currentScript;

    // This session's choice first, otherwise folded on small screens only.
    function initialCollapsed() {
        try {
            var saved = window.sessionStorage.getItem(STORAGE_KEY);
            if (saved !== null) {
                return saved === '1';
            }
        } catch (e) {
            // Storage can be blocked; fall through to the breakpoint default.
        }
        return window.matchMedia(MOBILE_QUERY).matches;
    }

    function createBackToKidashiTab() {
        if (document.querySelector('.kidashi-side-tab')) {
            return;
        }

        var url = (scriptEl && scriptEl.dataset.kidashiUrl) || DEFAULT_URL;
        var collapsed = initialCollapsed();

        var tab = document.createElement('div');
        tab.className = 'kidashi-side-tab';

        var link = document.createElement('a');
        link.className = 'kidashi-side-tab__link';
        link.id = 'kidashi-side-tab-link';
        link.href = url;
        link.setAttribute('aria-label', 'Back to Kidashi Design');

        link.innerHTML =
            '<svg class="kidashi-side-tab__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
            '<path d="M15 18l-6-6 6-6"></path>' +
            '</svg>' +
            '<span class="kidashi-side-tab__text">Back to Kidashi Design</span>';

        var toggle = document.createElement('button');
        toggle.type = 'button';
        toggle.className = 'kidashi-side-tab__toggle';
        toggle.setAttribute('aria-controls', link.id);

        toggle.innerHTML =
            '<svg class="kidashi-side-tab__chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
            '<path d="M15 18l-6-6 6-6"></path>' +
            '</svg>';

        function render() {
            tab.classList.toggle('kidashi-side-tab--collapsed', collapsed);
            toggle.setAttribute('aria-expanded', String(!collapsed));
            toggle.setAttribute('aria-label', collapsed ? SHOW_LABEL : HIDE_LABEL);
        }

        toggle.addEventListener('click', function () {
            collapsed = !collapsed;
            render();
            try {
                window.sessionStorage.setItem(STORAGE_KEY, collapsed ? '1' : '0');
            } catch (e) {
                // Persisting is a convenience, not a requirement.
            }
        });

        // Set the initial state before the tab is in the DOM so it never
        // animates on page load.
        render();

        tab.appendChild(link);
        tab.appendChild(toggle);
        document.body.appendChild(tab);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', createBackToKidashiTab);
    } else {
        createBackToKidashiTab();
    }
})();
