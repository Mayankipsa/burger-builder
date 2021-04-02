import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import styles from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxillary from '../../../hoc/Auxillary/Auxillary';

const sideDrawer = (props) => {
    let attachedClasses=[styles.SideDrawer,styles.Close];
    if(props.open){
        attachedClasses=[styles.SideDrawer,styles.Open];
    }
    return (
        <Auxillary>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <div className={styles.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Auxillary>
    );
};

export default sideDrawer;