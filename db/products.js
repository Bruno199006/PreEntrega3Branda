 export const productos = [
    { id: 1, 
      nombre: 'Funko batman',
      precio: 450,
      imagen: "https://http2.mlstatic.com/D_NQ_NP_949615-MLA54938781680_042023-O.webp",
      categoria:"Super Heroes",
    },
    {
      id:2,
      nombre:'Funko Joker',
      precio:400,
      imagen:"https://http2.mlstatic.com/D_NQ_NP_862883-MLU71207689742_082023-O.webp",
      categoria:"Villanos",
    },
    {
     id:3,
     nombre:'Funko thor',
     precio: 500,
     imagen:"https://http2.mlstatic.com/D_NQ_NP_778933-MLA27459530790_052018-O.webp",
     categoria:"Super Heroes"
    },
    { 
    id:4,
    nombre:"Funko iron man",
    precio:600,
    imagen:"https://http2.mlstatic.com/D_NQ_NP_607718-MLC44377049100_122020-O.webp",
    categoria:"Super Heroes"
    },
    {
    id:5,
    nombre:"Funko thanos",
    precio:1000,
    imagen:"https://m.media-amazon.com/images/I/61rbpgxiliL.jpg",
    categoria:"Villanos"
    },
    {
    id:6,
    nombre:"Funko loki",
    precio: 500,
    imagen:"https://www.mosca.com.uy/media/catalog/product/4/8/4874425.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700",
    categoria:"Villanos"
    },
    {
    id:7,
    nombre:"Funko capitan america",
    precio: 800,
    imagen:"https://http2.mlstatic.com/D_Q_NP_667123-MLA28325534243_102018-O.webp",
    categoria:"Super Heroes"
    }
  ];

JSON.parse(localStorage.getItem("productos"))|| localStorage.setItem("productos" , JSON.stringify(productos));