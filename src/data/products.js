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
    image: "/assets/chelsea.jpg",
    title: "Chelsea",
    price: 1900,
    productId: "chelsea",
    categoryId: "premierliga",
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
    products.findIndex((product) => product.productId === productId)
  ];
}
