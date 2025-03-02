export const features = [
    "Treino Técnica Individual",
    "Treino Físico",
    "Consulta de Nutrição",
    "Sessão de Mental Coaching",
    "Vídeo de análise individual",
    "Kit de treino (t-shirt + calções)",
    "GPS Tracking"
];

export const extras = [
    {
        name: "Kit de treino (t-shirt + calções)",
        price: "€20.00"
    },
    {
        name: "GPS Tracking",
        price: "€25.00"
    }
]

export const packages = [
    {
        name: "Treino Individual",
        price: "€24.99",
        extras: extras,
        features: [
            {
                name: features[0],
                quantity: 1
            }
        ]
    },
    {
        name: "Pack Field",
        price: "€74.99",
        extras: extras,
        features: [
            {
                name: features[0],
                quantity: 4
            },
        ]
    },
    {
        name: "Pack Full",
        price: "€224.99",
        extras: [extras[1]],
        features: [
            {
                name: features[0],
                quantity: 4
            },
            {
                name: features[1],
                quantity: 4
            },
            {
                name: features[2],
                quantity: 1
            },
            {
                name: features[3],
                quantity: 1
            },
            {
                name: features[4],
                quantity: 1
            },
            {
                name: features[5],
                quantity: 1
            },
        ]
    },
    {
        name: "Pack Premium",
        price: "€249.99",
        extras: [],
        features: [
            {
                name: features[0],
                quantity: 4
            },
            {
                name: features[1],
                quantity: 4
            },
            {
                name: features[2],
                quantity: 1
            },
            {
                name: features[3],
                quantity: 1
            },
            {
                name: features[4],
                quantity: 1
            },
            {
                name: features[5],
                quantity: 1
            },
            {
                name: features[6],
                quantity: 1
            }
        ]
    }
];