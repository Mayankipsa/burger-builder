import React from 'react';
import Auxillary from '../../hoc/Auxillary';
import styles from './Layout.module.css';

const layout = (props) => (
    <Auxillary>
        
        <div>Toolbar, SideDrawer, BackDrop</div>
        <main className={styles.Content}>{props.children}</main>
    </Auxillary>
);

export default layout;