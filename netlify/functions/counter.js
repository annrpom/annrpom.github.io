const https = require('https');

const CORS_HEADERS = {
    'Access-Control-Allow-Origin': 'https://annrpom.github.io',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
};

function get(url) {
    return new Promise((resolve, reject) => {
        https.get(url, { headers: { 'Accept': 'application/json' } }, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve({ status: res.statusCode, body: data }));
        }).on('error', reject);
    });
}

exports.handler = async (event) => {
    if (event.httpMethod === 'OPTIONS') {
        return { statusCode: 204, headers: CORS_HEADERS };
    }

    const { key, action } = event.queryStringParameters || {};

    if (!key) {
        return { statusCode: 400, headers: CORS_HEADERS, body: JSON.stringify({ error: 'missing key' }) };
    }

    const endpoint = action === 'up'
        ? `https://api.counterapi.dev/v1/annrpom.github.io/${key}/up`
        : `https://api.counterapi.dev/v1/annrpom.github.io/${key}/`;

    try {
        const { status, body } = await get(endpoint);
        const data = JSON.parse(body);
        return {
            statusCode: 200,
            headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
            body: JSON.stringify({ count: data.count ?? 0 }),
        };
    } catch (err) {
        return {
            statusCode: 500,
            headers: CORS_HEADERS,
            body: JSON.stringify({ error: 'failed to reach counter api' }),
        };
    }
};
