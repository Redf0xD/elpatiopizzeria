import ReactDOM from 'react-dom';
import styles from './Modal.module.scss';

export const Modal = ({ children }) => {
  const div = document.getElementById('modal');
  return ReactDOM.createPortal(
    <div className={styles.modal}>
      <div className={styles.modal_container}>{children}</div>
    </div>,
    div
  );
};
