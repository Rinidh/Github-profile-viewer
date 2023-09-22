import {
  Button,
  FormControl,
  FormErrorMessage,
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
  const branchPossiblities = ["master", "with_router"] as const; //make sure to add "as const"

  const schema = z.object({
    name: z
      .string()
      .min(2, { message: "Name should be atleast 2 characters" })
      .max(20, { message: "Name is too long" }),
    age: z
      .number({ invalid_type_error: "Please fill a number" })
      .min(8, { message: "You are too young to send feedback" }),
    github_user_id: z
      .string()
      .min(1, { message: "Please fill a valid github id" }),
    reason_complaint: z.string().nullable(), //find how to also put "or null" as this field can be null
    reason_appreciation: z.string().nullable(),
    reason_other: z.string().nullable(),
    reason_other_description: z.string(),
    branch: z.enum(branchPossiblities), //can be specified of value
  });
  type FormData = z.infer<typeof schema>;
  const { register, handleSubmit, getValues, formState } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { errors } = formState; //other props: isValid

  //handling values returned from react-hook-form and zod
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

    console.log("Data submitted: ", dataToSubmit);

    const alertMessage = `
    Data was not saved anywhere...
    See the data in the console

    Help improve this app and add functionality
    `;

    alert(alertMessage);
  };

  const customOverlay = (
    <ModalOverlay
      bg="none" // or "rgba(0,0,1d,0.5)" or "blackAlpha.600" to achieve a translucent bluish background
      backdropFilter="auto" // or direclty "blur(10px) hue-rotate(90deg)" instead of using other style props below
      backdropBlur="8px"
      backdropContrast="60%"
    />
  );
  //if you have multiple custom modal overlays to use in diff places, handle them by using the state hook to keep track of the current cutom modal overlay

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
        {customOverlay /* use custom <ModalOverlay> like this */}
        <ModalContent>
          <ModalHeader fontSize="lg" fontWeight="bold">
            Please fill in these fields
          </ModalHeader>

          <ModalBody>
            <FormControl>
              <FormHelperText marginBottom={4}>
                Your data won't get saved anywhere
              </FormHelperText>

              <FormControl isInvalid={Boolean(errors.name)}>
                <FormLabel>Name</FormLabel>
                <Input {...register("name")} marginBottom={4} />
                {errors.name && (
                  <div>
                    <FormErrorMessage>{errors.name.message}</FormErrorMessage>
                    <p>demo</p>
                  </div>
                )}
              </FormControl>

              <FormControl isInvalid={Boolean(errors.age)}>
                <FormLabel>Age</FormLabel>
                <Input
                  {...register("age", { valueAsNumber: true })}
                  marginBottom={4}
                />
                {errors.age && (
                  <FormErrorMessage>{errors.age.message}</FormErrorMessage>
                )}
              </FormControl>

              <FormControl
                isRequired
                isInvalid={Boolean(errors.github_user_id)}
              >
                <FormLabel>Github User ID</FormLabel>
                <Input {...register("github_user_id")} marginBottom={4} />
                {errors.github_user_id && (
                  <FormErrorMessage>
                    {errors.github_user_id.message}
                  </FormErrorMessage>
                )}
              </FormControl>

              <FormControl
                isInvalid={
                  !(
                    Boolean(errors.reason_appreciation) ||
                    Boolean(errors.reason_complaint) ||
                    Boolean(errors.reason_other)
                  )
                }
              >
                <FormLabel>Reason for feedback</FormLabel>
                <RadioGroup defaultValue="reason_for_feedback" marginBottom={2}>
                  <HStack spacing="30px">
                    <Radio
                      value="reason_Complaint" //just mere clicking sets the value to "reason_Complaint" and doesn't go back to null when another is selecte. Solve this
                      {...register("reason_complaint")}
                      colorScheme="green"
                      size="md"
                    >
                      Complaint
                    </Radio>
                    <Radio
                      value="reason-Complaint"
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
                {(errors.reason_appreciation ||
                  errors.reason_complaint ||
                  errors.reason_other) && (
                  <FormErrorMessage>
                    Please click on each radio button to make form valid (fix
                    this issue)
                  </FormErrorMessage>
                )}
              </FormControl>

              <Textarea
                placeholder="If other reason, please specify"
                marginBottom={4}
                {...register("reason_other_description")}
              />

              <FormControl
                isInvalid={Boolean(errors.branch)} /* deal with this issue */
              >
                <FormLabel>Github Branch</FormLabel>
                <Select
                  placeholder="Select github branch"
                  {...register("branch")}
                >
                  <option value={"master"}>Master</option>
                  <option value={"with_router"}>withRouter</option>
                </Select>
                {errors.branch && (
                  <FormErrorMessage>{errors.branch.message}</FormErrorMessage>
                )}
              </FormControl>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose}>Cancel</Button>
            <Button
              colorScheme="green"
              onClick={handleSubmit(handleFormSubmit)} //handleSubmit from react-hook-form
              //handleSubmit( (data) => handleFormSubmit(data) ) is same as handleSubmit(handleFormSubmit)
              ml={3}
              //isDisabled={!isValid}
            >
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Form;
