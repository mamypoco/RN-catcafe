import { Text, View, StyleSheet, ScrollView, Image } from "react-native";
import ContactForm from "../components/ContactForm";

function ContactScreen() {
   return (
      <ScrollView>
         <View style={styles.rootContainer}>
            <View style={styles.container}>
               <Text style={styles.header}>Contact us</Text>
            </View>
            <Image
               style={styles.image}
               source={require("../data/images/cat_in_cocoa.jpg")}
            />
            <View style={styles.container}>
               <Text style={styles.paragraph}>
                  12345 NE 123rd St, {"\n"}
                  Kirkland WA 98034 {"\n"}
                  206-465-1234 {"\n"}
                  purr@catcocoa.com
               </Text>
               <Text style={styles.paragraph}>
                  Mon - Fri: 9am - 6pm (last visit 5pm) {"\n"}
                  Sat - Sun: 10am - 4pm (last visit 3pm)
               </Text>
            </View>
            <View style={styles.container}>
               <Text style={styles.paragraph}>
                  For any questions or feedback, please contact through the form
                  and we'll reply as soon as we can.
               </Text>
            </View>

            <ContactForm />
         </View>
      </ScrollView>
   );
}

export default ContactScreen;

const styles = StyleSheet.create({
   rootContainer: {
      margin: 10,
      paddingHorizontal: 18,
      justifyContent: "center",
      alignItems: "center",
   },
   container: {
      justifyContent: "center",
      alignItems: "center",
   },
   header: {
      fontWeight: "bold",
      fontSize: 22,
      textAlign: "center",
      margin: 6,
   },
   subHeader: {
      fontSize: 18,
      textAlign: "center",
      margin: 6,
   },
   paragraph: {
      fontSize: 16,
      margin: 8,
   },

   hours: {
      textAlign: "center",
      fontSize: 16,
      margin: 8,
   },
   image: {
      height: 150,
      width: 180,
   },
});
