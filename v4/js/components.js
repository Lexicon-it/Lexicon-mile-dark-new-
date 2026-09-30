function getBasePath() {
    const scriptTag = document.querySelector('script[src*="components.js"]');
    if (scriptTag) {
        // This will extract the base URL of the site, e.g. "https://example.com/v5/"
        return scriptTag.src.replace(/js\/components\.js.*$/, '');
    }
    return '/'; // Fallback
}
window.getBasePath = getBasePath;
window.getComponentPrefix = getBasePath;

async function loadComponents() {
    try {
        const basePath = getBasePath();
        const v = '?v=' + Date.now();
        const [headerRes, footerRes] = await Promise.all([
            fetch(basePath + 'components/header.html' + v),
            fetch(basePath + 'components/footer.html' + v)
        ]);
        
        if (headerRes.ok) {
            let headerHtml = await headerRes.text();
            headerHtml = headerHtml
                .replace(/href="([^"\/:]+\.html(?:#[^"]*)?)"/g, `href="${basePath}$1"`)
                .replace(/src="(assets|images)\//g, `src="${basePath}$1/`);
            const headerEl = document.getElementById('header');
            if (headerEl) headerEl.outerHTML = headerHtml;
        } else {
            console.error('Failed to load header');
        }
        
        if (footerRes.ok) {
            let footerHtml = await footerRes.text();
            footerHtml = footerHtml
                .replace(/href="([^"\/:]+\.html(?:#[^"]*)?)"/g, `href="${basePath}$1"`)
                .replace(/src="(assets|images)\//g, `src="${basePath}$1/`);
            const footerEl = document.getElementById('footer');
            if (footerEl) footerEl.outerHTML = footerHtml;
        } else {
            console.error('Failed to load footer');
        }

        // Dynamically load main.js after components to ensure DOM is ready
        if (!document.querySelector('script[src*="scripts/main.js"]')) {
            const script = document.createElement('script');
            script.src = basePath + 'scripts/main.js' + v;
            document.body.appendChild(script);
        }

        document.dispatchEvent(new CustomEvent('componentsLoaded'));

    } catch (error) {
        console.error('Error loading components:', error);
    }
}

loadComponents();

