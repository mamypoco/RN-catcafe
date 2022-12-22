import {
   Text,
   View,
   StyleSheet,
   Image,
   ScrollView,
   Button,
} from "react-native";
import ReservationScreen from "./ReservationScreen";
import { navigation } from "@react-navigation/native";

function Home({ navigation }) {
   return (
      <ScrollView contentContainerStyle={styles.wrapper}>
         <View style={styles.rootContainer}>
            <View style={styles.container}>
               <Text style={styles.header}>
                  Seattle Eastside' First Cat Cafe
               </Text>
            </View>
            <View style={styles.container}>
               <Image
                  style={styles.image}
                  source={require("../data/images/calico_latte.jpg")}
               />
               <View style={styles.bookContainer}>
                  <Button
                     onPress={() => navigation.navigate("Book Your Visit")}
                     title="Book Your Visit"
                     color="black"
                  />
               </View>
            </View>
            <View style={styles.container}>
               <Text style={styles.subHeader}>
                  We provide you with a chance to relax and joy of purr therapy.
               </Text>
            </View>
            <View style={styles.container}>
               <Text style={styles.paragraph}>
                  We are located at Finn Hill neignborhood where you can easily
                  visit on foot if you are aready resident here. Our space is
                  fully customized for cats to play, fetch and enternain humans.
                  Our fresh coffee and pastries are locally made. If you feel
                  like some furry love, or need a break from work-from-home,
                  please come stop by!
                  {"\n\n"}
                  The cat lounge fee is $7.00 up to hour and the capacity is 10
                  people. Walk-in is always welcome without reservation. For
                  ordering drink and foo menu only, you do not need to book a
                  visit. When under 7 people in the launge, feel free to come in
                  to the laounge. If you want to reserve the spot in advance,
                  please book a visit via the button to make sure you are in.
               </Text>
            </View>
            <View style={styles.container}>
               <Text style={styles.hours}>
                  {`Cafe Hours:\n`}
                  {`Mon - Fri: 9am -6pm (The last entry 5pm)\n`}
                  {`Sat - Sun: 10am - 4pm (The last entry 3pm)`}
               </Text>
            </View>
         </View>
      </ScrollView>
   );
}

export default Home;

const styles = StyleSheet.create({
   rootContainer: {
      margin: 10,
      paddingHorizontal: 10,
      justifyContent: "center",
      alignItems: "center",
   },
   container: {
      margin: 8,
      justifyContent: "center",
      alignItems: "center",
   },
   bookContainer: {
      marginTop: 12,
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
   image: {
      height: 200,
      width: 300,
   },
   hours: {
      textAlign: "center",
      fontSize: 16,
      margin: 8,
   },
});
