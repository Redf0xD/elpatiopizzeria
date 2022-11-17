import ReactDOM from 'react-dom'
import styles from './Modal.module.scss'

export const ModalCart = ({ children, setModal = (prop) => prop, invisible }) => {
  const div = document.getElementById('modal')
  const handleClick = () => {
    setModal(false)
  }
  return ReactDOM.createPortal(
    <div className={invisible ? styles.modal : styles.invisible}>
      <div onClick={handleClick} className={styles.modal_container}>
        {children}
      </div>
    </div>,
    div
  )
}
