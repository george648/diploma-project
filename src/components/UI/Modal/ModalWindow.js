import PropTypes from 'prop-types';
import { useCallback, useEffect } from 'react';
import './ModalWindow.scss';
import { withPortal } from '../../hocs/withPortal';

const ModalComponent = ({ children, closeModalWindowBtn }) => {
  const onKeyDownHandler = useCallback((event) => {
    if (event.code === 'Enter' || event.code === 'Escape') {
      closeModalWindowBtn();
    }
  }, [closeModalWindowBtn]);

  useEffect(() => {
    window.addEventListener('keydown', onKeyDownHandler);

    return () => window.removeEventListener('keydown', onKeyDownHandler);
  }, []);

  return (
    <div className="modalWrapper">
      <div className="modalOverlay" />
      <div>
        <div className="modalContent">
          <div className="topModalBtnBlock">
            <button
              type="button"
              onClick={closeModalWindowBtn}
              className="closeModalBtn"
            >
              X
            </button>
          </div>
          <div className="changingModalContent">{children}</div>
          <div className="bottomModalBtnBlock">
            <button type="button" onClick={closeModalWindowBtn}>
              Ok
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Modal = withPortal(ModalComponent);

ModalComponent.propTypes = {
  children: PropTypes.string.isRequired,
  closeModalWindowBtn: PropTypes.func.isRequired,
};