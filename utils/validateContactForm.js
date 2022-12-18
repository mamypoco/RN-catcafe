export const validateContactForm = (values) => {
   const errors = {};

   if (!values.name) {
      errors.firstName = "Required";
   } else if (values.name.length < 4) {
      errors.name = "Must be at least 4 characters for full name.";
   } else if (values.firstName.length > 15) {
      errors.name = "Must be 30 characters or less.";
   }

   const reg = /^\d*$/;
   if (!reg.test(values.phone)) {
      errors.phone = "The phone number should contain only numbers.";
   } else if (values.phone.length < 10) {
      errors.phone = "Enter area codes so they are at least 10 digits";
   }
   if (!values.email.includes("@")) {
      errors.email = "email should contain a @.";
   }
   return errors;
};
