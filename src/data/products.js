const products = [
  {
    image: "/assets/realforma1.jpg",
    title: "Real Madrid",
    price: 2500,
    productId: "realM",
    categoryId: "laliga",
    description: "lorem",
  },
  {
    image: "/assets/barca.webp",
    title: "Barcelona",
    price: 2500,
    productId: "barcelona",
    categoryId: "laliga",
    description: "lorem",
  },
  {
    image: "/assets/ManchesterUnited.jpg",
    title: "ManchesterUnited",
    price: 2500,
    categoryId: "premierliga",
    productId: "mu",
    description: "lorem",
  },
  {
    image: "/assets/juventus1.jpg",
    title: "Juventus",
    price: 2200,
    productId: "js",
    categoryId: "seriaA",
    description: "lorem",
  },
  {
    image: "/assets/AT21A01_1.jpg",
    title: "Atlanta",
    price: 2300,
    productId: "atlanta",
    categoryId: "seriaA",
    description: "lorem",
  },
  {
    image: "/assets/chelsea.jpg",
    title: "Chelsea",
    price: 1900,
    productId: "chelsea",
    categoryId: "premierliga",
    description: "lorem",
  },
  {
    image: "/assets/bavaria.jpg",
    title: "Bavaria",
    price: 1900,
    productId: "bavaria",
    categoryId: "bundesliga",
    description: "lorem",
  },
  {
    image: "/assets/bvb-20-21-home-kit-2.jpg",
    title: "Borussia",
    price: 1900,
    productId: "borussia",
    categoryId: "bundesliga",
    description: "lorem",
  },{
    image: "/assets/chelsea.jpg",
    title: "Chelsea",
    price: 1900,
    productId: "chelsea",
    categoryId: "premierliga",
    description: "lorem",
  },
  {
    image: "/assets/france.webp",
    title: "France",
    price: 1900,
    productId: "france",
    categoryId: "restofworld",
    description: "lorem",
  },
  {
    image: "/assets/psg.jpg",
    title: "Psg",
    price: 1900,
    productId: "psg",
    categoryId: "liga1",
    description: "lorem",
  },
  {
    image: "/assets/as-monaco.jpg",
    title: "Monaco",
    price: 1900,
    productId: "monaco",
    categoryId: "liga1",
    description: "lorem",
  },
  {
    image: "/assets/brazil.jpg",
    title: "Brazil",
    price: 1900,
    productId: "brazil",
    categoryId: "restofworld",
    description: "lorem",
  },
  
  
];
export function getProducts(categoryId) {
  if (categoryId) {
    return products.filter(product => product.categoryId === categoryId);    
  }

  return products;
}
export function getProduct(productId) {
  return products[
    products.findIndex(
      product =>  product.productId === productId
    )
  ];
  
}
