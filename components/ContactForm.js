import { View, Text, StyleSheet, Button } from "react-native";
import Input from "./Input";

function ContactForm() {
   // const handleSubmit = (values) => {
   //    console.log("form values:", values);
   //    console.log("in JSON format:", JSON.stringify(values));
   // };
   return (
      <View>
         <View>
            <View style={styles.label}>
               <Text>Name:</Text>
            </View>
            <View style={styles.inputName}>
               <Input
                  textInputConfig={{
                     placeholder: "e.g. John Doe",
                  }}
               />
            </View>
         </View>
         <View style={styles.label}>
            <Text>Email:</Text>
         </View>
         <View style={styles.input}>
            <Input
               textInputConfig={{
                  placeholder: "e.g. johnd@domain.com",
               }}
            />
         </View>

         <View style={styles.label}>
            <Text>Phone:</Text>
         </View>
         <View style={styles.input}>
            <Input
               textInputConfig={{
                  keyboardType: "decimal-pad",
                  placeholder: "e.g. 1234567890",
                  maxLength: 12,
               }}
            />
         </View>
         <View style={styles.label}>
            <Text>Newsletter?</Text>
         </View>

         <View style={styles.label}>
            <Text>Your Feedback:</Text>
         </View>
         <View style={styles.feedback}>
            <Input
               textInputConfig={{
                  placeholder: "Enter Your Feedback here",
                  multiline: true,
                  numberOfLines: 3,
               }}
            />
         </View>
         <Button onPress={handleSubmit} title="Submit" color="#796e3d" />
      </View>
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
      justifyContent: "center",
      marginTop: 6,
      marginBottom: 6,
   },
   inputName: {
      borderRadius: 6,
      paddingHorizontal: 6,
      justifyContent: "center",
      backgroundColor: "white",
      paddingBottom: 6,
      marginBottom: 2,
      height: 40,
      width: 230,
   },
   input: {
      borderRadius: 6,
      paddingHorizontal: 6,
      justifyContent: "center",
      backgroundColor: "white",
      paddingBottom: 6,
      marginBottom: 8,
      height: 40,
      width: 230,
   },
   feedback: {
      borderRadius: 6,
      paddingHorizontal: 6,
      // justifyContent: "flex-start",
      backgroundColor: "white",
      paddingBottom: 6,
      marginBottom: 6,
      height: 120,
      width: 230,
   },
});
