import { View, Text, StyleSheet } from "react-native";
import Input from "./Input";

function ContactForm() {
   return (
      <View>
         <View>
            <View>
               <Text>Name:</Text>
            </View>
            <View style={styles.input1}>
               <Input
                  textInputConfig={{
                     placeholder: "First name",
                  }}
               />
            </View>
            <View style={styles.input1}>
               <Input
                  textInputConfig={{
                     placeholder: "Last name",
                  }}
               />
            </View>
         </View>
         <View>
            <Text>Email:</Text>
         </View>
         <View style={styles.input1}>
            <Input
               textInputConfig={{
                  placeholder: "Email",
               }}
            />
         </View>

         <View>
            <Text>Phone:</Text>
         </View>
         <View style={styles.input1}>
            <Input
               textInputConfig={{
                  keyboardType: "decimal-pad",
                  placeholder: "Enter 10 digits number",
                  maxLength: 12,
               }}
            />
         </View>
         <View>
            <Text>Newsletter?</Text>
         </View>

         <View>
            <Text>Your Feedback:</Text>
         </View>
         <View style={styles.feedback}>
            <Input
               textInputConfig={{
                  placeholder: "Enter Your Feedback here",
               }}
            />
         </View>
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
      paddingHorizontal: 6,
      justifyContent: "center",
   },
   input1: {
      borderRadius: 6,
      paddingHorizontal: 6,
      justifyContent: "center",
      backgroundColor: "white",
      paddingBottom: 6,
      marginBottom: 6,
      height: 40,
      width: 230,
   },
   feedback: {
      borderRadius: 6,
      paddingHorizontal: 6,
      justifyContent: "flex-start",
      backgroundColor: "white",
      paddingBottom: 6,
      marginBottom: 6,
      height: 120,
      width: 230,
      multiline: true,
      numberOfLines: 3,
   },
});
