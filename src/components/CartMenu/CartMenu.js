import React from "react";
import { useSelector } from "react-redux";
import { Button } from "../Button";
import { calcTotalPrice } from "../untils";
import { CartItem } from "../CartItem/CartItem";
import "./CartMenu.css";

export const CartMenu = ({ onClick }) => {
    const items = useSelector((state) => state.cart.itemsInCart);
    return (
        <div className="Cart-menu">
            <div className="Cart-menu__footballs-list">
                {items.length > 0 ? items.map((football) => <CartItem
                    key={football.image}
                    image={football.image}
                    price={football.price}
                    title={football.title}
                    id={football.id}
                />) : "Корзина пуста" }
            </div>
            {items.length > 0 ? (
                <div className="Cart-menu__arrange">
                    <div className="Cart-menu__total-price">
                        <span>Итого:</span>
                        <span>{calcTotalPrice(items)} сом.</span>
                    </div>
                    <Button type='fff' size="m" onClick={onClick}>
                        Оформить заказ
                    </Button>
                </div>
            ) : null}
        </div>
    );
};