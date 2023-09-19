import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";

interface Props {
  isSubmitted: boolean;
  onSubmitForm: (originalState: boolean) => void;
}

const FeedbackInputs = ({ isSubmitted, onSubmitForm }: Props) => {
  const { register, handleSubmit } = useForm();

  const formRef = useRef<HTMLFormElement>(null);

  // const handleFormSubmit = (data: FieldValues) => {
  //   console.log(data);
  // };

  // const onSubmit = (e: FormEvent) => {
  //   e.preventDefault();

  //   handleSubmit((data) => console.log(data));
  // };

  useEffect(() => {
    if (formRef.current && isSubmitted) {
      formRef.current.submit(); //submits the form programmatically
      onSubmitForm(false);
    }
  }, [isSubmitted]);

  return (
    <>
      <form ref={formRef} onSubmit={handleSubmit((data) => console.log(data))}>
        <label htmlFor="n">n</label>
        <input id="n" type="text" {...register("name")} />
        <button type="submit">Submit2</button>
      </form>
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
