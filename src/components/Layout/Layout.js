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

    SideDrawerToggleHandler = () => {
        this.setState(
            (prevState) => {
                return { showSideDrawer: !this.state.showSideDrawer };
            });
    }

    render() {
        return (
            < Auxillary >
                <Toolbar drawerToggleClicked={this.SideDrawerToggleHandler} />
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