import { useState } from "react";
import { Formik } from "formik";
import { Button, TextInput, View, StyleSheet, Text } from "react-native";
import Checkbox from "expo-checkbox";
// import { CheckBox } from "react-native-elements";

function ContactForm() {
   const handleSubmit = (values, { resetForm }) => {
      console.log("JSON format:", JSON.stringify(values));
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

               <Text style={styles.label}>Sign-up Newsletter?</Text>

               <Checkbox
                  value={props.values.newsLetter}
                  onValueChange={(newValue) =>
                     props.setFieldValue("newsLetter", newValue)
                  }
                  color={props.values.newsLetter ? "black" : undefined}
               />

               {/* //react-native-elements */}
               {/* <CheckBox
                  checkedIcon="check-box"
                  iconType="material"
                  uncheckedIcon="check-box-outline-blank"
                  title="I want to sign-up NewsLetter"
                  checkedTitle="I want to sign-up NewsLetter"
                  checked={props.values.newsLetter}
                  onPress={() =>
                     props.setFieldValue("newsLetter", !props.values.newsLetter)
                  }
               /> */}

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
});
