type tariffData = {
    name: string;
    cost: string;
}

type tariff = tariffData[]

const tariffs: tariff = [
    {
        name: "Tariff \"Minute\" ",
        cost: "from 0,1$/minute",
    }, 
    {
        name: "Tariff \"Hour\" ",
        cost: "from 5$/hour",
    },
    {
        name: "Tariiff \"Day\" ",
        cost: "from 25$/Day"
    },
]

export default tariffs