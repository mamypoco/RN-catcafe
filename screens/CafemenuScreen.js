import { useState } from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";

function CafemenuScreen() {
   const [drinkHead, setDrinkHead] = useState(["", "(12oz)", "(16oz)"]);
   const [drinkData, setDrinkData] = useState([
      ["Drip Coffee", "2.00", "2.75"],
      ["Espresso", "3.50", "4.00"],
      ["Latte or Cappuccino", "3.50", "4.75"],
      ["Cafe Moca", "3.50", "4.75"],
      ["Hot Cocoa", "2.00", "2.75"],
      ["Herbal Tea", "1.50", "2.50"],
      ["Smoothies\n(Strawberry, Blueberry, Mango, Taro)", "4.25", "5.75"],
      ["Chocolate Milk", "1.49"],
   ]);

   const [foodData, setFoodData] = useState([
      ["Cupcake", "1.99"],
      ["Cat Cocoa Cookie", "4.99"],
      ["Sandwich", "6.25"],
      ["Waffles (2 per order)", "4.25"],
      ["Green onion pancake", "4.75"],

      ["Popcorn chicken", "4.25"],
   ]);

   return (
      <ScrollView>
         <View style={styles.rootContainer}>
            <View>
               <Text style={styles.header}>Cafe Menu</Text>
               <Image
                  style={styles.image}
                  source={require("../data/images/cafe_menu.jpg")}
               ></Image>
            </View>
            <View style={styles.container}>
               <Text style={styles.subHeader}>Drink Items</Text>
               <Table>
                  <Row data={drinkHead} widthArr={[170, 50, 50]} />
                  <Rows data={drinkData} widthArr={[170, 50, 50]} />
               </Table>
            </View>
            <View style={styles.container}>
               <Text style={styles.subHeader}>Food Items</Text>
               <Table>
                  <Rows data={foodData} widthArr={[170, 50]} />
               </Table>
            </View>
         </View>
      </ScrollView>
   );
}

export default CafemenuScreen;

const styles = StyleSheet.create({
   rootContainer: {
      margin: 10,
      paddingHorizontal: 18,
      justifyContent: "center",
      alignItems: "center",
   },
   container: {
      margin: 10,
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
   textLink: {
      fontWeight: "bold",
   },
});
