import { createWithEqualityFn } from "zustand/traditional";
import { IProductsStore } from "../models/products.models";

export const useProductStore = createWithEqualityFn<IProductsStore>((set, get) => ({
    loading: false,
    basketList: [],
    addBasketItem(id) {
        const { basketList, productList } = get();

        if (!productList) {
            return;
        }

        if (basketList.find((e) => e.id === id)) {
            set({
                basketList: basketList.map((e) =>
                    e.id === id ? { ...e, count: (e.count += 1) } : e,
                ),
            });
        } else {
            const item = productList.find((e) => e.id === id);

            if (!item) {
                return;
            }

            set({
                basketList: [...basketList, { id: item.id, count: 1 }],
            });
        }
    },
    removeBasketItem(id) {
        const { basketList, productList } = get();

        if (!productList) {
            return;
        }

        if (basketList.find((e) => e.id === id)) {
            set({
                basketList: basketList.map((e) =>
                    e.id === id ? { ...e, count: (e.count += 1) } : e,
                ),
            });
        } else {
            const item = productList.find((e) => e.id === id);

            if (!item) {
                return;
            }

            set({
                basketList: [...basketList, { id: item.id, count: 1 }],
            });
        }
    },
    productList: [
        {
            id: "123asd",
            name: "Name 1",
            price: 4999,
        },
        {
            id: "asdfgsadf",
            name: "Name 2",
            price: 6712,
        },
        {
            id: "3ewqef",
            name: "Name 3",
            price: 1299,
        },
        {
            id: "asdfv",
            name: "Name 4",
            price: 3499,
        },
        {
            id: "fdsfa23e",
            name: "Name 5",
            price: 1299,
        },
        {
            id: "asdftgwer2fv",
            name: "Name 6",
            price: 3499,
        },
    ],
}));
