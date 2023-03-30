import Form from "./Form/Form";

const Register = () => {

  const labels = ['Code', 'Name', 'Price', 'Tag'];
  const button = 'Send';
  const tags = ['Books', 'Eletronics', 'Other']

  return (
    <div className="pt-12">
      <div className="flex gap-6 justify-center items-center pt-12">
        <Form button={button} labels={labels} tagsValues={tags} />
      </div>
    </div>

  )
}

export default Register;