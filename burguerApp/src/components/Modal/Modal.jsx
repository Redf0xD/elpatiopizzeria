import ReactDOM from 'react-dom'
import styles from './Modal.module.scss'

export const Modal = ({ children, setModal = (prop) => prop }) => {
  const div = document.getElementById('modal')
  const handleClick = () => {
    setModal(false)
  }
  return ReactDOM.createPortal(
    <div className={styles.modal}>
      <div onClick={handleClick} className={styles.modal_container}>
        {children}
      </div>
    </div>,
    div
  )
}
