import { useState } from "react";
import Login from './components/Login';
import Homepage from './components/Hompage';
import Modal from './components/Modal';

function App() {
  const [login, setLogin] = useState(false);
  const [openModal, setOpenModal] = useState(true);
  const user = {
    idUser: 'jay',
    pwUser: '123'
  }

  const modalClose = () => {
    setOpenModal(false);
  }


  return (
    <>
      {login ? <Homepage setOpenModal={setOpenModal} setLogin={setLogin} /> : <Login info={user} setLogin={setLogin} />}
      {openModal &&
        <Modal state={openModal} setOpenModal={setOpenModal} modalClose={modalClose}>
          <h2>사용약관에 대해 말씀드리겠습니다.</h2>
          <p>ID : JAY</p>
          <p>PW : 123</p>
        </Modal>}
    </>
  );
}

export default App;