import classes from "./FootballList.module.css";
import { FootballItem } from "../FootballItem";

function FootballList({ products }) {
    
    const productItems = products.map(product => (
        <FootballItem key={product.productId} product={product} />
    ));
    return (
        <div className={classes.FootballList}>
            {productItems}
        </div>
    );
}

export default FootballList;