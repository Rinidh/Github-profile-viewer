import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

function Form() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  //const [isSubmitted, setIsSubmitted] = useState(false);

  const { register, handleSubmit } = useForm();

  // const handleFormSubmit = (data: FieldValues) => {
  //   console.log(data);
  // };

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
              <form>
                <label htmlFor="n">Name</label>
                <br />
                <input id="n" {...register("name")} />
              </form>
            </ModalBody>

            <ModalFooter>
              <Button onClick={onClose}>Cancel</Button>
              <Button
                colorScheme="green"
                onClick={handleSubmit((data) => console.log(data))}
                ml={3}
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

/*
<FeedbackInputs
  handleFormSubmit={(data) => handleFormSubmit(data)}
  isSubmitted={isSubmitted}
  formProps={[...register("name")]}
/>

*/
