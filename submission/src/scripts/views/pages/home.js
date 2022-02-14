import RestoranDbSource from "../../data/restorandb-source"
import {homeRestoran} from "../templates/template-creator"
const Home = {
    async render() {
      return `
      <div class="jumbotron">
          <img src="./images/heros/hero-image_2.jpg" alt="jumbotron gambar makanan">
      </div>
      <h1>Daftar Restoran</h1>
      <div class="list-restoran"></div>
      `;
    },
   
    async afterRender() {
      const restorans = await RestoranDbSource.listRestoran();
      const listRestoran = document.querySelector('.list-restoran');
      restorans.forEach((restoran) => {
        listRestoran.innerHTML += homeRestoran(restoran);
      });
    },
  };
   
  export default Home;