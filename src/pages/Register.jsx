import {useEffect, useState} from 'react';
import PersonalInformation from '../components/template/PersonalInformation';
import Documents from '../components/template/Documents';
import DialogWindow from "../components/module/DialogWindow";

const Register = () => {

    const [showModal, setShowModal] = useState(false);
    const [currentSection , setCurrentSection] = useState(1);

    const [personalData, setPersonalData] = useState(JSON.parse(localStorage.getItem('personalData')) || '');
    const [documentsData, setDocumentsData] = useState('');

    const [showDialog, setShowDialog] = useState(false);

    const getPersonalInformation = (data,sectionNumber) => {
      setPersonalData(data);
      setCurrentSection(sectionNumber);
      localStorage.setItem('personalData', JSON.stringify(data));
    }

    const getDocuments = (data,sectionNumber) => {
      setDocumentsData(data);
      setCurrentSection(sectionNumber);
    }

    useEffect(() => {
      personalData !== '' && setShowDialog(true);
    },[]);

    useEffect (( ) => {
      personalData !== '' && documentsData !== '' && setShowModal(true);
    },[personalData,documentsData]);

  return (
    <div className='flex flex-col justify-center items-center gap-10'>
        {currentSection === 1 && <PersonalInformation parentCallback={getPersonalInformation} />}
        {currentSection === 2 && <Documents parentCallback={getDocuments} showModal={showModal} />}
        {showDialog && (
        <DialogWindow setCurrentSection={setCurrentSection} onClose={() => setShowDialog(false)} />
        )}
    </div>
  );
}

export default Register;