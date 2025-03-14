const baseUrl = "http://localhost:3030/jsonstore/games";

export default {
  async create(gameData) {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(gameData),
    });
    const res = await response.json();

    return res;
  },

  async getAll() {
    const respone = await fetch(baseUrl);
    const result = await respone.json();

    const games = Object.values(result);
    return games;
  },

  async getOne(gameId) {
    const response = await fetch(`${baseUrl}/${gameId}`);
    const result = await response.json();

    return result;
  },

  async edit(gameId, data) {
    const response = await fetch(`${baseUrl}/${gameId}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ ...data, _id: gameId }),
    });
    const result = await response.json();
    return result;
  },
};
