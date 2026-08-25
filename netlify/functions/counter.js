const { getStore, connectLambda } = require('@netlify/blobs');

const CORS_HEADERS = {
    'Access-Control-Allow-Origin': 'https://annrpom.github.io',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
};

exports.handler = async (event) => {
    if (event.httpMethod === 'OPTIONS') {
        return { statusCode: 204, headers: CORS_HEADERS };
    }

    const { key, action } = event.queryStringParameters || {};

    if (!key) {
        return { statusCode: 400, headers: CORS_HEADERS, body: JSON.stringify({ error: 'missing key' }) };
    }

    try {
        connectLambda(event);
        const store = getStore({ name: 'counters', consistency: 'strong' });

        let count = (await store.get(key, { type: 'json' })) ?? 0;

        if (action === 'up') {
            count += 1;
            await store.set(key, JSON.stringify(count));
        }

        return {
            statusCode: 200,
            headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
            body: JSON.stringify({ count }),
        };
    } catch (err) {
        console.error('Blob store error:', err);
        return {
            statusCode: 500,
            headers: CORS_HEADERS,
            body: JSON.stringify({ error: 'counter error' }),
        };
    }
};
