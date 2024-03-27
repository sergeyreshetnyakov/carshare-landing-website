type carData = {
    name: string;
    url: string;
}

type Cars = carData[]

const cars: Cars = [
    {
        name: 'Audi 57 Sportback',
        url: './images/audi.png ',
    },
    {
        name: 'Bentley Continental GT',
        url: './images/bentley.png',
    },
    {
        name: 'Mercedes-Benz GLA-Class',
        url: './images/mercedes.png',
    },
    {
        name: 'Cadilac XT6',
        url: './images/cadillac.png',
    },
]

export default cars