import { Button, TextInput, View, StyleSheet, Text } from "react-native";
import { Formik } from "formik";
// import Input from "./Input";

function ContactForm2() {
   const handleSubmit = (values, { resetForm }) => {
      // console.log("form values:", values);
      console.log("in JSON format:", JSON.stringify(values));
      resetForm();
   };
   return (
      <Formik
         initialValues={{
            name: "",
            email: "",
            phone: "",
            newsLetter: false,
            feedback: "",
         }}
         onSubmit={handleSubmit}
      >
         {(props) => (
            <View>
               <Text style={styles.label}>Name:</Text>

               <TextInput
                  style={styles.input}
                  placeholder="e.g. John Doe"
                  onChangeText={props.handleChange("name")}
                  value={props.values.name}
               />

               <Text style={styles.label}>Email:</Text>

               <TextInput
                  style={styles.input}
                  placeholder="e.g. johnd@domain.com"
                  onChangeText={props.handleChange("email")}
                  value={props.values.email}
               />

               <Text style={styles.label}>Phone:</Text>

               <TextInput
                  style={styles.input}
                  keyboardType="decimal-pad"
                  placeholder="e.g. 1234567890"
                  onChangeText={props.handleChange("phone")}
                  maxLength={12}
                  value={props.values.phone}
               />

               <Text style={styles.label}>Newsletter?</Text>

               <Text style={styles.label}>Your Feedback:</Text>

               <TextInput
                  style={styles.feedback}
                  placeholder="Enter Your Feedback here"
                  onChangeText={props.handleChange("feedback")}
                  multiline
                  numberOfLines={5}
                  value={props.values.feedback}
               />

               <Button
                  onPress={props.handleSubmit}
                  title="Submit"
                  color="black"
               />
            </View>
         )}
      </Formik>
   );
}

export default ContactForm2;

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

   // inputText: {
   //    fontSize: 18,
   // },
   feedback: {
      borderRadius: 6,
      textAlignVertical: "top", //https://github.com/facebook/react-native/issues/13897
      paddingHorizontal: 6,
      backgroundColor: "white",
      paddingBottom: 6,
      marginBottom: 6,
      height: 120,
      width: 280,
      fontSize: 16,
   },
});
