import { useEffect, useRef } from "react";
import { FieldValues, useForm } from "react-hook-form";

interface Props {
  handleFormSubmit: (data: FieldValues) => void;
  isSubmitted: boolean;
  formProps: 
}

const FeedbackInputs = ({ handleFormSubmit, isSubmitted }: Props) => {

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (formRef.current && isSubmitted) {
      console.log("form submits");

      handleSubmit((data) => handleFormSubmit(data));
      //formRef.current.submit(); //submits the form programmatically
      //onSubmitForm(false); //to set the form back to un-submitted state in Form.tsx
    }
  }, [isSubmitted]);

  return (
    <>
    </>
  );
};

export default FeedbackInputs;

/*
//react-hook-form doesn't work with Chakra <FormControl> comp. Chakra website recommends using Formik lib

<FormControl>
  <FormHelperText>Your data will not get saved anywhere</FormHelperText>
  <FormControl
    onSubmit={handleSubmit((data) => console.log(data))}
    isRequired
  >
    <FormLabel>Name</FormLabel>
    <Input type="text" {...register("name")} />
    <Button type="submit">Submit1</Button>
  </FormControl>

  <FormLabel>Email</FormLabel>
  <Input type="email" />

</FormControl>

*/
