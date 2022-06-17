import ReactDOM from 'react-dom';

export const Modal = ({ children, setShowModal }) => {
  const functionModal = () => {
    setShowModal((prev) => !prev);
  };

  const div = document.getElementById('modal');
  return ReactDOM.createPortal(
    <>
      <div>{children}</div>
      <button onClick={functionModal}>X</button>
    </>,
    div
  );
};
