async function loadComponents() {
    try {
        const [headerRes, footerRes] = await Promise.all([
            fetch('components/header.html'),
            fetch('components/footer.html')
        ]);
        
        if (headerRes.ok) {
            const headerHtml = await headerRes.text();
            document.getElementById('header').outerHTML = headerHtml;
        } else {
            console.error('Failed to load header');
        }
        
        if (footerRes.ok) {
            const footerHtml = await footerRes.text();
            document.getElementById('footer').outerHTML = footerHtml;
        } else {
            console.error('Failed to load footer');
        }

        // Dynamically load main.js after components to ensure DOM is ready
        const script = document.createElement('script');
        script.src = 'scripts/main.js';
        document.body.appendChild(script);

    } catch (error) {
        console.error('Error loading components:', error);
    }
}

loadComponents();
