import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

import gameService from "../../services/gameService";


export default function EditGame() {
    const navigate = useNavigate();
    const { gameId } = useParams();
    const [game, setGame] = useState([]);



    useEffect(() => {
         gameService.getOne(gameId)
                .then(setGame)
                .catch(err => console.log(err.message));
    }, [gameId]);


    const editGameHandler = async (formData) => {
        const editedData = Object.fromEntries(formData);
        try{

            const result = await gameService.edit(gameId, editedData);
            navigate(`/games/${gameId}/details`)
        }catch(err){
            alert(err.message)
        }
      
        
    };
    return(

        <section id="edit-page" className="auth">
            <form id="edit" action={editGameHandler}>
                <div className="container">

                    <h1>Edit Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" defaultValue={game.title}/>

                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" defaultValue={game.category}/>

                    <label htmlFor="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" min="1" defaultValue={game.maxLevel}/>

                    <label htmlFor="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" defaultValue={game.imageUrl}/>

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary" defaultValue={game.summary}></textarea>
                    <input className="btn submit" type="submit" value="Edit Game"/>

                </div>
            </form>
        </section>

    );
}