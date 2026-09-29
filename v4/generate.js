const fs = require('fs');
const headerHtml = fs.readFileSync('components/header.html', 'utf8');
const footerHtml = fs.readFileSync('components/footer.html', 'utf8');

function escapePhpString(str) {
    return str.replace(/\\/g, '\\\\').replace(/'/g, '\\\'');
}

const phpCode = `<?php
$header_html = '` + escapePhpString(headerHtml) + `';
$footer_html = '` + escapePhpString(footerHtml) + `';

function build_elementor_data($html) {
    return wp_json_encode([
        [
            'id'       => substr( md5( uniqid() ), 0, 8 ),
            'elType'   => 'container',
            'settings' => [ 'container_type' => 'flex' ],
            'elements' => [
                [
                    'id'         => substr( md5( uniqid() ), 0, 8 ),
                    'elType'     => 'widget',
                    'widgetType' => 'html',
                    'settings'   => [ 'html' => $html ],
                ]
            ]
        ]
    ]);
}

$header_data = build_elementor_data($header_html);
$footer_data = build_elementor_data($footer_html);

update_post_meta( 57645, '_elementor_data', wp_slash($header_data) );
update_post_meta( 57646, '_elementor_data', wp_slash($footer_data) );

// Trigger Elementor cache clear
update_post_meta( 57645, '_elementor_version', '3.24.0' );
update_post_meta( 57646, '_elementor_version', '3.24.0' );

echo "Data updated for posts 57645 and 57646";
`;

fs.writeFileSync('remote_update.php', phpCode);
console.log('PHP file generated successfully at remote_update.php');
