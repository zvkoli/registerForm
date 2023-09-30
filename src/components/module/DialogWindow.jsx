import {useState} from 'react';
import {Modal} from 'antd';

const DialogWindow = ({ onClose , setCurrentSection }) => {

  const [visible, setVisible] = useState(true);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('You have already filled in the personal information section, do you confirm?');

  const handleOk = () => {
    setModalText('please wait');
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
      onClose();
      setCurrentSection(2);
    }, 2000);
  };

  const handleCancel = () => {
    localStorage.removeItem('personalData');
    localStorage.removeItem('documentData');
    setVisible(false);
    onClose();
  };

  return (
    <>
      <Modal
        title="Title"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
      </Modal>
    </>
  );
};

export default DialogWindow;