const footballs = [
    {
        image: '/assets/realforma1.jpg',
        title: 'Real Madrid',
        price: 2343,
        id: 1,
        description: "lorem",
    },
    {
        image: '/assets/ManchesterUnited.jpg',
        title: 'ManchesterUnited',
        price: 200,
        id: 2,
        description: "lorem",
    },
    {
        image: '/assets/realforma1.jpg',
        title: 'Real Madrid',
        price: 2343,
        id: 3,
        description: "lorem",
    },
    {
        image: '/assets/ManchesterUnited.jpg',
        title: 'ManchesterUnited',
        price: 200,
        id: 4,
        description: "lorem",
    },
    {
        image: '/assets/realforma1.jpg',
        title: 'Real Madrid',
        price: 2343,
        id: 5,
        description: "lorem",
    },
    {
        image: '/assets/chelsea.jpg',
        title: 'Chelsea',
        price: 200,
        id: 6,
        description: "lorem",
    },
    {
        image: '/assets/topsport1.webp',
        title: 'Real Madrid',
        price: 2222,
        id: 7,
        description: "lorem",
    },
    {
        image: '/assets/ManchesterUnited.jpg',
        title: 'ManchesterUnited',
        price: 200,
        id: 8,
        description: "lorem",
    },
]
export function getProducts() {
    return footballs;
}
export function getProduct(id) {
    return footballs[
        footballs.findIndex(
            football => football.id === id
        )
    ];
}