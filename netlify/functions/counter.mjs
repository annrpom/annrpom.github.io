import { getStore } from '@netlify/blobs';

const CORS_HEADERS = {
    'Access-Control-Allow-Origin': 'https://annrpom.github.io',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
};

export default async (req) => {
    if (req.method === 'OPTIONS') {
        return new Response(null, { status: 204, headers: CORS_HEADERS });
    }

    const url = new URL(req.url);
    const key = url.searchParams.get('key');
    const action = url.searchParams.get('action');

    if (!key) {
        return new Response(JSON.stringify({ error: 'missing key' }), {
            status: 400,
            headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
        });
    }

    try {
        const store = getStore({ name: 'counters', consistency: 'strong' });
        let count = (await store.get(key, { type: 'json' })) ?? 0;

        if (action === 'up') {
            count += 1;
            await store.set(key, JSON.stringify(count));
        }

        return new Response(JSON.stringify({ count }), {
            status: 200,
            headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
        });
    } catch (err) {
        console.error('Blob store error:', err);
        return new Response(JSON.stringify({ error: 'counter error', message: err.message }), {
            status: 500,
            headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
        });
    }
};
