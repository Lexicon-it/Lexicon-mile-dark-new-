function getComponentPrefix() {
    const segments = window.location.pathname.replace(/^\//, '').split('/').filter(s => s && !s.includes('.'));
    return segments.length > 0 ? '../'.repeat(segments.length) : '';
}

async function loadComponents() {
    try {
        const prefix = getComponentPrefix();
        const v = '?v=' + Date.now();
        const [headerRes, footerRes] = await Promise.all([
            fetch(prefix + 'components/header.html' + v),
            fetch(prefix + 'components/footer.html' + v)
        ]);
        
        if (headerRes.ok) {
            let headerHtml = await headerRes.text();
            if (prefix) {
                headerHtml = headerHtml
                    .replace(/href="([^"\/:]+\.html(?:#[^"]*)?)"/g, `href="${prefix}$1"`)
                    .replace(/src="(assets|images)\//g, `src="${prefix}$1/`);
            }
            const headerEl = document.getElementById('header');
            if (headerEl) headerEl.outerHTML = headerHtml;
        } else {
            console.error('Failed to load header');
        }
        
        if (footerRes.ok) {
            let footerHtml = await footerRes.text();
            if (prefix) {
                footerHtml = footerHtml
                    .replace(/href="([^"\/:]+\.html(?:#[^"]*)?)"/g, `href="${prefix}$1"`)
                    .replace(/src="(assets|images)\//g, `src="${prefix}$1/`);
            }
            const footerEl = document.getElementById('footer');
            if (footerEl) footerEl.outerHTML = footerHtml;
        } else {
            console.error('Failed to load footer');
        }

        // Dynamically load main.js after components to ensure DOM is ready
        if (!document.querySelector('script[src*="scripts/main.js"]')) {
            const script = document.createElement('script');
            script.src = prefix + 'scripts/main.js' + v;
            document.body.appendChild(script);
        }

        document.dispatchEvent(new CustomEvent('componentsLoaded'));

    } catch (error) {
        console.error('Error loading components:', error);
    }
}

loadComponents();
