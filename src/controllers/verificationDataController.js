
const VerificationDataController = () => {
    const validateStep = (step, formData) => {
      // Add validation logic for each step
      // Return true if step is valid, false otherwise
      // You can use a library like Yup for schema validation
      return true;
    };
  
    const submitForm = (formData) => {
      console.log('Form Data:', formData);
      // Submit form data to the server
    };
  
    return {
      validateStep,
      submitForm
    };
  };
  
  export default VerificationDataController;
  