import React, { Component } from 'react';
import Auxillary from '../../hoc/Auxillary';
import styles from './Layout.module.css';
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: true
    }
    SideDrawerClosedHandler = () => {

        this.setState({ showSideDrawer: false });
    }
    render() {
        return (
            < Auxillary >
                <Toolbar />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.SideDrawerClosedHandler} />
                <div>Toolbar, SideDrawer, BackDrop</div>
                <main className={styles.Content}>{this.props.children}</main>
            </Auxillary >
        );
    };
}
export default Layout;