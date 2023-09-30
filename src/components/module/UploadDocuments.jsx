import { BsCloudUpload } from "react-icons/bs";

const UploadDocuments = ({ className , event , stylebtn , title , innerRef , onChange }) => {
  return (
    <div className={className}>
      <BsCloudUpload className='text-4xl max-md:text-2xl'/>
        <button onClick={event} className={stylebtn}>
          Choose a file to upload
        </button>
        <p className='text-sm max-md:text-xs'>{title}</p>
        <input
        type={'file'}
        accept="image/png , image/jpeg"
        style={{display: 'none'}}
        ref={innerRef}
        onChange={onChange}
        />
    </div>
  );
}

export default UploadDocuments;