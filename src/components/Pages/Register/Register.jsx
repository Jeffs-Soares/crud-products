import Form from "./Form/Form";

const Register = () => {

  const labels = ['Code', 'Description', 'Price', 'Name'];

  const button = 'Send';

  return (
    <div className="pt-12">
      <div className="flex gap-6 justify-center items-center pt-12">
        <Form button={button} labels={labels} />
      </div>
    </div>

  )
}

export default Register;