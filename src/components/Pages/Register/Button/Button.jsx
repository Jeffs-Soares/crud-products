
const Button = ({ buttonText }) => {

    function handleClick (e){
        e.preventDefault();
        console.log('LUL');
    }


    return (
        <>

            <button onClick={handleClick}>{buttonText}</button>


        </>
    )

}

export default Button;