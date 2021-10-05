import PropTypes from 'prop-types';
import { useCallback, useEffect } from 'react';
import './ModalWindow.scss';
import { withPortal } from '../../hocs/withPortal';
import { ESCAPE, ENTER } from '../../../constants';

const ModalComponent = ({ children, onCloseButtonClick }) => {
  const onKeyDownHandler = useCallback((event) => {
    if (event.code === ENTER || event.code === ESCAPE) {
      onCloseButtonClick();
    }
  }, [onCloseButtonClick]);

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
              onClick={onCloseButtonClick}
              className="closeModalBtn"
            >
              X
            </button>
          </div>
          <div className="changingModalContent">{children}</div>
          <div className="bottomModalBtnBlock">
            <button type="button" onClick={onCloseButtonClick}>
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
  onCloseButtonClick: PropTypes.func.isRequired,
};