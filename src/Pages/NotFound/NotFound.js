import classes from "./NotFound.module.css"


function NotFound() {
    return (
       <section className={classes.NotFound}>
           <img src="/assets/error-404.jpg" alt="not found"/>
       </section>
    );
}

export default NotFound;