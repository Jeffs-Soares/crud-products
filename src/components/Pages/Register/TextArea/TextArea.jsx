import './TextArea.css';
const TextArea = ({labelName, placeholder, getInput}) => {

    const getValue = (e) =>{
        getInput(e.target.value);
      }


  return (
    <div>
         <label htmlFor="name">{labelName}</label>
         <textarea onChange={getValue} placeholder={placeholder}/>

    </div>
  )
}

export default TextArea;