import { Header } from "../../components/Header/Header";

function NotFound() {
    return (
        <>
            <Header
                title="Page not found"
                image="/assets/hero.jpg">
                Maybe the page you are looking for was moved or deleted.
            </Header>
        </>
    );
}

export default NotFound;