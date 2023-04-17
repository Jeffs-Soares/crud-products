import Form from "./Form/Form";

const Register = () => {

  const labels = ['Product Name', 'Price', 'Category', 'Description'];
  const button = 'Send';
  const tags = ['Books', 'Eletronics', 'Other']

  return (
    <div>
      <div className="flex flex-col gap-6 justify-center items-center">
        <Form button={button} labels={labels} categoryValues={tags} />
      </div>
    </div>

  )
}

export default Register;