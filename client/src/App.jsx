import { Routes, Route } from "react-router";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Catalog from "./components/catalog-page/Catalog";
import CreateGame from "./components/create-page/CreateGame";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import DetailsPage from "./components/details-page/DetailsPage";
import EditGame from "./components/edit-page/EditGame";



function App() {
  return (

    <div id="box">
      <Header />

      <main id="main-content">
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/games" element={<Catalog />}/>
            <Route path="/games/:gameId/details" element={<DetailsPage />}/>
            <Route path="/games/:gameId/edit" element={<EditGame />}/>
            <Route path="/create-game" element={<CreateGame />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>


        </Routes>
     
      </main>
    </div>
  );
}

export default App;
