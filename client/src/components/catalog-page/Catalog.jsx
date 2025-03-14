import { useEffect, useState } from "react";
import gameService from "../../services/gameService";
import GameItem from "./game-item/GameItem";

export default function Catalog() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    gameService.getAll().then(setGames);
  }, []);

  return (
    <section id="catalog-page">
      <h1>All Games</h1>
      {/* <!-- Display div: with information about every game (if any) --> */}
      {games.length > 0 ? (
        games.map((game) => <GameItem key={game._id} {...game} />)
      ) : (
        <h3 className="no-articles">No articles yet</h3>
      )}
      ;
    </section>
  );
}
