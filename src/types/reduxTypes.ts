import { ApplicationState as ApplicationStateType } from "../app/reducer";

export type ApplicationState = ApplicationStateType;

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