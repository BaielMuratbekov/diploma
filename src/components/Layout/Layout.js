
import './Layout.css'
import { useState } from "react";
import { Footer } from "../Footer";
import Toolbar from '../Toolbar/Toolbar';
import Drawer from '../Drawer/Drawer';

export const Layout=({ children })=> {
    const [drawerOpen, setDrawerOpen] = useState(false);

    function toggleDrawer() {
        setDrawerOpen(!drawerOpen);
    }
    return (
        <div className='Layout'>
            <Toolbar toggleDrawer={toggleDrawer} />
            <Drawer open={drawerOpen} toggle={toggleDrawer} />
            {children}
            <Footer />
        </div>
    )
}
