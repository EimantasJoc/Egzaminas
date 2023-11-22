import React, { useEffect, useState } from 'react';
import './App.css';

function Home () {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <body className="App">
    <div className="navbutons">
    <a class='navbut' href='App.jsx'>Pagrindinis</a>
    <a class='navbut' href='akcijos.jsx'>Akcijos</a>
    <a class='navbut' href='#home'>Išsaugoti</a>
    <input class='navsearchas' type='text' placeholder='Produktų Paieška...'></input>
    <a class='searchbut'>Ieškoti</a>
    <a class='loginbut' href='login.jsx'>Prisijungti</a>
    </div>
    <div class="grid-container">
  <div class="grid-item"><p>Jumper gertuvė</p><img src='https://www.atlas.lk/myshop/wp-content/uploads/2021/10/WF9001303-1.jpg' alt='buteliukaspump' width='100px'></img><p>5 Eur</p></div>
  <div class="grid-item"><p>Strawall gertuvė</p><img src='https://m.media-amazon.com/images/I/61btJom9zfL._AC_SL1001_.jpg' alt='buteliukasdu' width='100px'></img><p>13 Eur</p></div>
  <div class="grid-item"><p>Klasikinis puodukas</p><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Cup_and_Saucer_LACMA_47.35.6a-b_%281_of_3%29.jpg/1024px-Cup_and_Saucer_LACMA_47.35.6a-b_%281_of_3%29.jpg' alt='cup' width='100px'></img><p>8 Eur</p></div>
  <div class="grid-item"><p>Statybinė šluota</p><img src='https://forestila.lt/wp-content/uploads/2017/03/sluota-1.jpg' alt='sluota' width='100px'></img><p>200 Eur</p></div>
  <div class="grid-item"><p>Gipskartinio pluokštė</p><img src='https://www.stataunamapats.lt/wp-content/uploads/2020/03/Standartin%C4%97-Knauf-gipskartonio-plok%C5%A1t%C4%97-Knauf-baltas-gipsas.jpg' alt='gipsas' width='100px'></img><p>1x15 Eur</p></div>
  <div class="grid-item"><p>Glaistas</p><img src='https://lemora.lt/11429-large_default/knauf-super-finish-pl.jpg' alt='glaisas' width='100px'></img><p>26 Eur</p></div>
</div>
  </body>
  );
}
export default Home;