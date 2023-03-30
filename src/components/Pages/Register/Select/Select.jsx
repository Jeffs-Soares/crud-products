import './Select.css';

const Select = ({ labelName, tagsList, getInput }) => {

    function getSelectValue(e) {
        getInput(e.target.value)
    }


    return (

        <div>
            <label htmlFor="name">{labelName}</label>
            <select onChange={getSelectValue}>
                <option value="unknown">Select the tag</option>
                {tagsList.map((tag) => <option key={tag}> {tag} </option>)}

            </select>

        </div>
    )
}

export default Select;