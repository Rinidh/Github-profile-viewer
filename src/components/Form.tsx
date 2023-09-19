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
import FeedbackInputs from "./FeedbackInputs";
import { useState } from "react";

function Form() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

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
              <FeedbackInputs
                isSubmitted={isSubmitted}
                onSubmitForm={(originalState) => setIsSubmitted(originalState)}
              />
            </ModalBody>

            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
              <Button
                colorScheme="green"
                onClick={() => setIsSubmitted(true)}
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
