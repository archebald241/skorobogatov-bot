export interface IProductItem {
    id: string;
    name: string;
    price: number;
}

export interface IBasketItem {
    id: string;
    count: number;
}

export interface IProductsStore {
    loading: boolean;
    productList?: IProductItem[];
    basketList: IBasketItem[];
    addBasketItem: (id: string) => void;
    removeBasketItem: (id: string) => void;
}
