import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Select,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

function Form() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  //creating the schema and type. And using hook form
  const schema = z.object({
    name: z
      .string()
      .min(2, { message: "Name should be atleast 2 characters" })
      .max(20, { message: "Name is too long" }),
    age: z
      .number({ invalid_type_error: "Please fill a number" })
      .min(8, { message: "You are too young to send feedback" }),
    github_user_id: z.string(),
    reason_complaint: z.string(), //find how to also put "or null" as this field can be null
    reason_appreciation: z.string(),
    reason_other: z.string(),
    reason_other_description: z.string(),
    branch: z.string(), //can be specified of value
  });
  type FormData = z.infer<typeof schema>;
  const { register, handleSubmit, getValues, formState } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { errors, isValid } = formState;

  const handleFormSubmit = () => {
    //handle some submit actions here
    const data = getValues(); //or just use data at the args ie (data: FieldValues) => {}

    const {
      reason_appreciation,
      reason_complaint,
      reason_other,
      ...otherFormValues //makes a new object called otherFormValues with the remaining props
    } = data;

    const dataToSubmit = {
      //grouping the reasons together in one object before submitting
      reason: {
        reason_appreciation,
        reason_complaint,
        reason_other,
      },
      ...otherFormValues,
    };

    console.log(dataToSubmit);
  };

  return (
    <>
      <Button colorScheme="green" onClick={onOpen}>
        Send us a feedback
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        motionPreset="slideInBottom"
        size="2xl"
      >
        <ModalOverlay>
          <ModalContent>
            <ModalHeader fontSize="lg" fontWeight="bold">
              Please fill in these fields
            </ModalHeader>

            <ModalBody>
              <FormControl>
                <FormHelperText marginBottom={4}>
                  Your data won't get saved anywhere
                </FormHelperText>
                <FormLabel>Name</FormLabel>
                <Input {...register("name")} marginBottom={4} />

                <FormLabel>Age</FormLabel>
                <Input
                  {...register("age", { valueAsNumber: true })}
                  marginBottom={4}
                />

                <FormControl isRequired>
                  <FormLabel>Github User ID</FormLabel>
                  <Input {...register("github_user_id")} marginBottom={4} />
                </FormControl>

                <FormLabel>Reason for feedback</FormLabel>
                <RadioGroup defaultValue="reason_for_feedback" marginBottom={2}>
                  <HStack spacing="30px">
                    <Radio
                      value="reason_Complaint" //just mere clicking sets the value to "reason_Complaint" ie "true" even if you disable it then. Solve this
                      {...register("reason_complaint")}
                      colorScheme="green"
                      size="md"
                    >
                      Complaint
                    </Radio>
                    <Radio
                      value="reason-Appreciation"
                      {...register("reason_appreciation")}
                      colorScheme="green"
                      size="md"
                    >
                      Appreciation
                    </Radio>
                    <Radio
                      value="reason-Other"
                      {...register("reason_other")}
                      colorScheme="green"
                      size="md"
                    >
                      Other
                    </Radio>
                  </HStack>
                </RadioGroup>

                <Textarea
                  placeholder="If other reason, please specify"
                  marginBottom={4}
                  {...register("reason_other_description")}
                />

                <FormLabel>Github Branch</FormLabel>
                <Select
                  placeholder="Select github branch"
                  {...register("branch")}
                >
                  <option>Master</option>
                  <option>withRouter</option>
                </Select>
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button onClick={onClose}>Cancel</Button>
              <Button
                colorScheme="green"
                onClick={handleSubmit(handleFormSubmit)} //handleSubmit from react-hook-form
                //handleSubmit( (data) => handleFormSubmit(data) ) is same as handleSubmit(handleFormSubmit)
                ml={3}
                isDisabled={!isValid}
              >
                Submit
              </Button>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </>
  );
}

export default Form;
