import React from 'react';
import Auxillary from '../../hoc/Auxillary';
import styles from './Layout.module.css';
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = (props) => (
    <Auxillary>
        <Toolbar />
        <SideDrawer />
        <div>Toolbar, SideDrawer, BackDrop</div>
        <main className={styles.Content}>{props.children}</main>
    </Auxillary>
);

export default layout;