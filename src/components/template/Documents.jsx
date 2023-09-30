import { useEffect, useRef, useState } from "react";
import UploadDocuments from "../module/UploadDocuments";
import Modal from "react-overlays/Modal";
import Lottie from "react-lottie-player";
import lottieJson from "../../Animation/72462-check-register.json";
import style from "../../styles/style";

const Documents = (props) => {

  const [certificate, setCertificate] = useState("");
  const [certificateStatus, setCertificateStatus] = useState(style.boxDocumentsDefault);
  const [fileNameCertificate, setFileNameCertificate] = useState("Upload Certificate");

  const certificateRef = useRef(null);

  const uploadCertificate = () => {
    certificateRef.current.click();
  };

  const submitInformation = () => {
    certificate === "" && setCertificateStatus(style.boxDocumentsFalse);
    certificate !== "" &&  props.parentCallback({certificate}, 2);
  };

  useEffect(() => {
    certificate !== "" && setFileNameCertificate(certificate.name)

    if (certificate === "") {
      setCertificateStatus(style.boxDocumentsTrue);
    }else{
      setCertificateStatus(style.boxDocumentsTrue);
    }
  }, [certificate]);


  const renderBackdrop = (props) => (
    <div
      className="fixed z-10 top-0 bottom-0 left-0 right-0 bg-white opacity-100"
      {...props}
    >
    </div>
  );

  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <p className="text-3xl max-sm:text-lg">
        Send documents
      </p>
      <div className="flex flex-row justify-center items-center flex-wrap gap-5 w-9/12 max-sm:w-9/12">
        <UploadDocuments
          className={certificateStatus}
          event={uploadCertificate}
          title={fileNameCertificate}
          innerRef={certificateRef}
          onChange={(e) => setCertificate(e.target.files[0])}
        />
      </div>
      <div>
        <button
          onClick={submitInformation}
          className="flex flex-row justify-center items-center shadow border-hidden text-2xl  bg-sky-400 text-white px-12 py-2 hover:bg-sky-500 max-sm:text-sm"
        >
          Submit
        </button>
      </div>
      <Modal
        className="fixed top-1/4 left-1/4 w-6/12 h-3/6 z-20 flex flex-row justify-center items-center"
        show={props.showModal}
        // onHide={handleClose}
        renderBackdrop={renderBackdrop}
      >
        <Lottie
          loop
          animationData={lottieJson}
          play
          style={{ width: 600, height: 600 }}
        />
      </Modal>
    </div>
  );
};

export default Documents;