import { FaArrowLeft } from 'react-icons/fa';
import styles from './Button.module.scss';

export const Button = ({ fill, setShowModal }) => {
  const functionModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <button onClick={functionModal} className={styles.button}>
      <FaArrowLeft style={{ fill }} />
    </button>
  );
};
