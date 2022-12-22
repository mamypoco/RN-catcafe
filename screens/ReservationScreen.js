import {
   View,
   Text,
   ScrollView,
   StyleSheet,
   Button,
   TextInput,
} from "react-native";
import BookForm from "../components/BookForm";

function ReservationScreen() {
   return (
      <View style={styles.rootContainer}>
         <View>
            <Text style={styles.header}>Book Your Visit</Text>
         </View>
         <BookForm />
      </View>
   );
}

export default ReservationScreen;

const styles = StyleSheet.create({
   rootContainer: {
      margin: 10,
      paddingHorizontal: 18,
      justifyContent: "center",
      alignItems: "center",
   },
   header: {
      fontWeight: "bold",
      fontSize: 22,
      textAlign: "center",
      margin: 6,
   },
});
