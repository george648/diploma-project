import './ModalWindow.scss';
import { useCallback, useEffect } from 'react';
import { withPortal } from './../../hocs/withPortal';
import PropTypes from 'prop-types';

const ModalComponent = ( {children, closeModalWindowBtn }) => {

    const onKeyDownHandler = useCallback((event) => {
        if (event.code === 'Enter' || event.code === 'Escape') {
            closeModalWindowBtn();
        }
    });

    useEffect(() => {
        window.addEventListener('keydown', onKeyDownHandler); 
    
        return () => window.removeEventListener('keydown', onKeyDownHandler)}, []);

    return (
        <div className="modalWrapper">
            <div className="modalOverlay"></div>
            <div>
                <div className="modalContent">
                    <div className="topModalBtnBlock">
                        <button onClick={closeModalWindowBtn} className="closeModalBtn">X</button>
                    </div>
                    <div className="changingModalContent">
                        {children}
                    </div>
                    <div className="bottomModalBtnBlock">
                        <button onClick={closeModalWindowBtn}>Ok</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export const Modal = withPortal(ModalComponent);

Modal.propTypes = {
    children: PropTypes.string.isRequired,
    closeModalWindowBtn: PropTypes.func.isRequired,
};