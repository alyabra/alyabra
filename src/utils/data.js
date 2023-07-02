// Imagenes desde cloudinary

const arrayProyect = [
  {
    title: "Pasa Lista",
    url_site: "https://alyabra.github.io/pasar-lista/",
    url_img:
      "https://res.cloudinary.com/dxslrgshk/image/upload/v1674869717/briefcase/PasaListaMovileView_rjdy5e.png",
    id: 1,
  },
  {
    title: "Lista de pendientes",
    url_site: "https://alyabra.github.io/todos/",
    url_img:
      "https://res.cloudinary.com/dxslrgshk/image/upload/v1674869717/briefcase/Todos_Proyects_PIXEL5_m48kzi.png",
    id: 2,
  },
  {
    title: "Planificador",
    url_site: "https://cozy-caramel-c4910a.netlify.app/",
    url_img:
      "https://res.cloudinary.com/dxslrgshk/image/upload/v1676504794/briefcase/controlGastos1_uvvs0r.png",
    id: 3,
  },
  {
    title: "Veteriniaria",
    url_site: "https://stirring-bubblegum-27bc25.netlify.app",
    url_img:
      "https://res.cloudinary.com/dxslrgshk/image/upload/v1676507905/briefcase/veterinaria1_zfnxbf.png",
    id: 4,
  },
  {
    title: "Admi Tareas",
    url_site: "https://taupe-clafoutis-b79175.netlify.app",
    url_img:
      "https://res.cloudinary.com/dxslrgshk/image/upload/v1674869717/briefcase/PasaListaMovileView_rjdy5e.png",
    id: 5,
  },
  {
    title: "Lista de pendientes",
    url_site: "https://alyabra.github.io/todos/",
    url_img:
      "https://res.cloudinary.com/dxslrgshk/image/upload/v1674869717/briefcase/Todos_Proyects_PIXEL5_m48kzi.png",
    id: 6,
  },
];

const arrayProyectClones = [
  {
    title: "Wikipedia",
    url_site: "https://alyabra.github.io/wikipedia/",
    url_img:
      "https://res.cloudinary.com/dxslrgshk/image/upload/v1676480048/briefcase/wikipediaCloneXL_hnwpor.png",
    id: 21,
  },
  {
    title: "Google",
    url_site: "https://alyabra.github.io/google/",
    url_img:
      "https://res.cloudinary.com/dxslrgshk/image/upload/v1676480043/briefcase/googleCloneXl_lni6qv.png",
    id: 22,
  },
  {
    title: "Prime viedo",
    url_site: "https://alyabra.github.io/amazon/",
    url_img:
      "https://res.cloudinary.com/dxslrgshk/image/upload/v1676480006/briefcase/AmazonClone-view-xl_piropj.png",
    id: 23,
  },
  {
    title: "Wikipedia",
    url_site: "https://alyabra.github.io/wikipedia/",
    url_img:
      "https://res.cloudinary.com/dxslrgshk/image/upload/v1676480048/briefcase/wikipediaCloneXL_hnwpor.png",
    id: 24,
  },
  {
    title: "Google",
    url_site: "https://alyabra.github.io/google/",
    url_img:
      "https://res.cloudinary.com/dxslrgshk/image/upload/v1676480043/briefcase/googleCloneXl_lni6qv.png",
    id: 25,
  },
  {
    title: "Prime viedo",
    url_site: "https://alyabra.github.io/amazon/",
    url_img:
      "https://res.cloudinary.com/dxslrgshk/image/upload/v1676480006/briefcase/AmazonClone-view-xl_piropj.png",
    id: 26,
  },
];

// Imagenes desde local

// const arrayProyect = [
//     {
//         title: 'Pasa Lista',
//         url_site: 'https://alyabra.github.io/pasar-lista/',
//         url_img: '/src/assets/images/PasaListaMovileView_rjdy5e.png',
//         id: 1,
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aspernatur ipsum maiores tempora, incidunt, ex corrupti asperiores nesciunt illo tempore dolores. Quasi a soluta, doloremque impedit veritatis minus aut rem.'
//     },
//     {
//         title: 'Lista de pendientes',
//         url_site: 'https://alyabra.github.io/todos/',
//         url_img: '/src/assets/images/Todos_Proyects_PIXEL5_m48kzi.png',
//         id: 2,
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aspernatur ipsum maiores tempora, incidunt, ex corrupti asperiores nesciunt illo tempore dolores. Quasi a soluta, doloremque impedit veritatis minus aut rem.'

//     },
//     {
//         title: 'Planificador',
//         url_site: 'https://cozy-caramel-c4910a.netlify.app//',
//         url_img: '/src/assets/images/controlGastos1_uvvs0r.png',
//         id: 3,
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aspernatur ipsum maiores tempora, incidunt, ex corrupti asperiores nesciunt illo tempore dolores. Quasi a soluta, doloremque impedit veritatis minus aut rem.'

//     },
//     {
//         title: 'Veteriniaria',
//         url_site: 'https://stirring-bubblegum-27bc25.netlify.app',
//         url_img: '/src/assets/images/veterinaria1_zfnxbf.png',
//         id: 4,
//                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aspernatur ipsum maiores tempora, incidunt, ex corrupti asperiores nesciunt illo tempore dolores. Quasi a soluta, doloremque impedit veritatis minus aut rem.'

//     },
//     {
//         title: 'Admi Tareas',
//         url_site: 'https://taupe-clafoutis-b79175.netlify.app',
//         url_img: '/src/assets/images/PasaListaMovileView_rjdy5e.png',
//         id: 5,
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aspernatur ipsum maiores tempora, incidunt, ex corrupti asperiores nesciunt illo tempore dolores. Quasi a soluta, doloremque impedit veritatis minus aut rem.'

//     },
//     {
//         title: 'Lista de pendientes',
//         url_site: 'https://alyabra.github.io/todos/',
//         url_img: '/src/assets/images/Todos_Proyects_PIXEL5_m48kzi.png',
//         id: 6,
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aspernatur ipsum maiores tempora, incidunt, ex corrupti asperiores nesciunt illo tempore dolores. Quasi a soluta, doloremque impedit veritatis minus aut rem.'
//     }
// ]

// const arrayProyectClones = [
//     {
//         title: 'Wikipedia',
//         url_site: 'https://alyabra.github.io/wikipedia/',
//         url_img: '/src/assets/images/wikipediaCloneXL_hnwpor.png',
//         id: 21,
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aspernatur ipsum maiores tempora, incidunt, ex corrupti asperiores nesciunt illo tempore dolores. Quasi a soluta, doloremque impedit veritatis minus aut rem.'

//     },
//     {
//         title: 'Google',
//         url_site: 'https://alyabra.github.io/google/',
//         url_img: '/src/assets/images/googleCloneXl_lni6qv.png',
//         id: 22,
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aspernatur ipsum maiores tempora, incidunt, ex corrupti asperiores nesciunt illo tempore dolores. Quasi a soluta, doloremque impedit veritatis minus aut rem.'

//     },
//     {
//         title: 'Prime viedo',
//         url_site: 'https://alyabra.github.io/amazon/',
//         url_img: '/src/assets/images/AmazonClone-view-xl_piropj.png',
//         id: 23,
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aspernatur ipsum maiores tempora, incidunt, ex corrupti asperiores nesciunt illo tempore dolores. Quasi a soluta, doloremque impedit veritatis minus aut rem.'

//     },
//     {
//         title: 'Wikipedia',
//         url_site: 'https://alyabra.github.io/wikipedia/',
//         url_img: '/src/assets/images/wikipediaCloneXL_hnwpor.png',
//         id: 24,
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aspernatur ipsum maiores tempora, incidunt, ex corrupti asperiores nesciunt illo tempore dolores. Quasi a soluta, doloremque impedit veritatis minus aut rem.'

//     },
//     {
//         title: 'Google',
//         url_site: 'https://alyabra.github.io/google/',
//         url_img: '/src/assets/images/googleCloneXl_lni6qv.png',
//         id: 25,
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aspernatur ipsum maiores tempora, incidunt, ex corrupti asperiores nesciunt illo tempore dolores. Quasi a soluta, doloremque impedit veritatis minus aut rem.'

//     },
//     {
//         title: 'Prime viedo',
//         url_site: 'https://alyabra.github.io/amazon/',
//         url_img: '/src/assets/images/AmazonClone-view-xl_piropj.png',
//         id: 26,
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aspernatur ipsum maiores tempora, incidunt, ex corrupti asperiores nesciunt illo tempore dolores. Quasi a soluta, doloremque impedit veritatis minus aut rem.'

//     },
// ]

export { arrayProyect, arrayProyectClones };
