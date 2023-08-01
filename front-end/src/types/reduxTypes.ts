export type ProductType = {
    id: number,
    category: string,
    description: string,
    image: string,
    price: number,
    rating: {
        rate: number,
        count: number,
    },
    title: string,
};

export type categoryCardProps = {
    category: {
        name: string,
        icon: string,
    },
};

export type RatingProps = {
    rating: number,
    reviewCount: number
};