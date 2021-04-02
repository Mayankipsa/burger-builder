import React, { Component } from 'react';
import styles from './Modal.module.css';
import Auxillary from '../../../hoc/Auxillary';
import BackDrop from '../Backdrop/Backdrop';

//This could be function component and doesn't have to be class
class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show;
    }
    componentDidUpdate() {
        console.log('[Modal] DidUpdate');
    }
    render() {
        return (
            <Auxillary>
                <BackDrop show={this.props.show} clicked={this.props.modalClosed}></BackDrop>
                <div
                    className={styles.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </Auxillary>
        );
    }
}

export default Modal;