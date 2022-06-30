import NotFoundImg from '../assets/error-404.jpg'


function NotFound() {
    return (
       <section>
           <img src={NotFoundImg} alt="not found"/>
       </section>
    );
}

export default NotFound;