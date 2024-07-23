import React from "react";
import styles from "./styles.module.scss";
import { useProductStore } from "../../stores/useProductStore";

const ClientPage: React.FC = () => {
    const { productList } = useProductStore();

    return (
        <div className={styles.root}>
            <div className="app">
                {productList ? (
                    <div className={"card-list"}>
                        {productList.map((item) => (
                            <div className="card-list-item" key={item.id}>
                                <div className="card-list-item-image"></div>
                                <div className="card-list-item-info">
                                    <div className="name">{item.name}</div>
                                    <div className="price">Цена: {item.price}</div>
                                    <button>В корзину</button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="empty-card-list">Нет товаров</div>
                )}
            </div>
        </div>
    );
};

export default ClientPage;
