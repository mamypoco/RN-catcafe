import { Formik } from "formik";
import { Button, TextInput, View, StyleSheet, Text } from "react-native";
import Checkbox from "expo-checkbox";
import * as yup from "yup";
// import validateContactForm from "../utils/validateContactForm";

function ContactForm() {
   const handleSubmit = (values, { resetForm }) => {
      console.log("JSON format:", JSON.stringify(values));
      resetForm();
   };

   const formValidate = yup.object().shape({
      name: yup
         .string()
         .required("Full name is required")
         .min(
            5,
            ({ min }) =>
               `At least ${min} characters with space between first and last name`
         ),
      email: yup
         .string()
         .email("Please enter valid email")
         .required("Email is required"),

      feedback: yup.string().required("Feedback is required"),
   });

   return (
      <Formik
         validationSchema={formValidate}
         initialValues={{
            name: "",
            email: "",
            phone: "",
            newsLetter: false,
            feedback: "",
         }}
         onSubmit={handleSubmit}
         // validate={validateContactForm}
      >
         {({ handleChange, handleSubmit, values, setFieldValue, errors }) => (
            <View>
               <Text style={styles.label}>Name:</Text>

               <TextInput
                  name="name"
                  style={styles.input}
                  placeholder="e.g. John Doe"
                  onChangeText={handleChange("name")}
                  value={values.name}
               />
               {errors.name && (
                  <Text style={{ fontSize: 10, color: "red" }}>
                     {errors.name}
                  </Text>
               )}

               <Text style={styles.label}>Email:</Text>

               <TextInput
                  name="email"
                  style={styles.input}
                  placeholder="e.g. johnd@domain.com"
                  onChangeText={handleChange("email")}
                  value={values.email}
               />
               {errors.email && (
                  <Text style={{ fontSize: 10, color: "red" }}>
                     {errors.email}
                  </Text>
               )}

               <Text style={styles.label}>Phone:</Text>

               <TextInput
                  name="phone"
                  style={styles.input}
                  keyboardType="decimal-pad"
                  placeholder="e.g. 1234567890"
                  onChangeText={handleChange("phone")}
                  maxLength={12}
                  value={values.phone}
               />

               <Text style={styles.label}>Sign-up Newsletter?</Text>

               <Checkbox
                  value={values.newsLetter}
                  onValueChange={(newValue) =>
                     setFieldValue("newsLetter", newValue)
                  }
                  color={values.newsLetter ? "black" : undefined}
               />

               <Text style={styles.label}>Your Feedback:</Text>

               <TextInput
                  feedback="feedback"
                  style={styles.feedback}
                  placeholder="Enter Your Feedback here"
                  onChangeText={handleChange("feedback")}
                  multiline
                  numberOfLines={5}
                  value={values.feedback}
               />
               {errors.email && (
                  <Text style={{ fontSize: 10, color: "red" }}>
                     {errors.feedback}
                  </Text>
               )}
               <View style={styles.buttonView}>
                  <Button onPress={handleSubmit} title="Submit" color="black" />
               </View>
            </View>
         )}
      </Formik>
   );
}

export default ContactForm;

const styles = StyleSheet.create({
   sideByside: {
      flexDirection: "row",
      borderRadius: 6,
      justifyContent: "space-between",
   },
   label: {
      // paddingHorizontal: 6,
      // justifyContent: "center",
      marginTop: 6,
      marginBottom: 6,
      fontSize: 16,
   },
   input: {
      borderRadius: 6,
      paddingHorizontal: 6,
      backgroundColor: "white",
      paddingTop: 8,
      paddingBottom: 6,
      marginBottom: 6,
      height: 40,
      width: 280,
      fontSize: 16,
   },

   feedback: {
      borderRadius: 6,
      textAlignVertical: "top",
      //https://github.com/facebook/react-native/issues/13897
      paddingHorizontal: 6,
      backgroundColor: "white",
      paddingBottom: 6,
      marginBottom: 6,
      height: 120,
      width: 280,
      fontSize: 16,
   },
   buttonView: {
      width: 150,
   },
});
