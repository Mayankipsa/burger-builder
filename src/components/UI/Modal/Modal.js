import React from 'react';
import styles from './Modal.module.css';
import Auxillary from '../../../hoc/Auxillary';
import BackDrop from '../Backdrop/Backdrop';

const modal = (props) => {

    return (
        <Auxillary>
            <BackDrop show={props.show} clicked={props.modalClosed}></BackDrop>
            <div
                className={styles.Modal}
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                {props.children}
            </div>
        </Auxillary>

    );
};

export default modal;