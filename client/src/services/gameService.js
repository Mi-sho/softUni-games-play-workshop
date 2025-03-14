const baseUrl = 'http://localhost:3030/jsonstore/games';

export default {
    async create(gameData) {
        const response = await fetch(baseUrl,
            {method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(gameData)
            }
        );
        const res = await response.json();

        return res;

    }
}