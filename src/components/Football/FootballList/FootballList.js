import classes from "./FootballList.module.css";
import { FootballItem } from "../FootballItem";

function FootballList({ footballs }) {
    console.log(footballs);
    
    const footballItems = footballs.map(football => (
        <FootballItem key={football.id} football={football} />
    ));
    return (
        <div className={classes.FootballList}>
            {footballItems}
        </div>
    );
}

export default FootballList;