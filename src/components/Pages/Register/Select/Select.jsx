import './Select.css';

const Select = ({ labelName, categoryList, getInput}) => {


    function getSelectValue(e) {
        getInput(e.target.value)
    }


    return (

        <div>
            <label htmlFor="name">{labelName}</label>
            <select onChange={getSelectValue}>
               
                {categoryList.map((tag) => <option key={tag}> {tag} </option>)}

            </select>

        </div>
    )
}

export default Select;