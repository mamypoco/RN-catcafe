import {
   Text,
   View,
   StyleSheet,
   ScrollView,
   Image,
   Linking,
} from "react-native";

function AboutusScreen() {
   return (
      <ScrollView>
         <View style={styles.rootContainer}>
            <View style={styles.container}>
               <Text style={styles.header}>About Cat Cocoa</Text>
            </View>
            <View style={styles.container}>
               <Text style={styles.subHeader}>Our operation</Text>

               <Image
                  style={styles.image}
                  source={require("../data/images/launge.jpg")}
               ></Image>
            </View>
            <View style={styles.container}>
               <Text style={styles.paragraph}>
                  Operating since January 2022, the Cat Cocoa is the first
                  operating cat café in the Seattle eastside. Our menu features
                  award-winning espresso and coffee from{" "}
                  <Text
                     style={styles.textLink}
                     onPress={() =>
                        Linking.openURL(
                           "https://www.caffevita.com/pages/locations#seattle"
                        )
                     }
                  >
                     Café Vita
                  </Text>
                  , pastries and sandwitches from{" "}
                  <Text
                     style={styles.textLink}
                     onPress={() =>
                        Linking.openURL("https://www.facebook.com/rilacake/")
                     }
                  >
                     Rila Bakery & Cafe
                  </Text>{" "}
                  in Lynnwood. The cats are domestic to the cafe, but we have a
                  few cats available for adoption. These furry friends are from{" "}
                  <Text
                     style={styles.textLink}
                     onPress={() =>
                        Linking.openURL(
                           "https://www.seattlehumane.org/adoption/"
                        )
                     }
                  >
                     Seattle Humain Society
                  </Text>
                  , a non-profit organization dedicated to helping homeless cats
                  find loving homes.
               </Text>
            </View>
            <View style={styles.container}>
               <Text style={styles.subHeader}>Our mission</Text>
               <Image
                  style={styles.image}
                  source={require("../data/images/girl_holding.jpg")}
               ></Image>
            </View>
            <View style={styles.container}>
               <Text style={styles.paragraph}>
                  We bring a neigborhood cafe and cat experience in the local
                  neigbourhood. We also place cats in need into nurturing homes
                  by working with cat rescues and shelters, and providing
                  resources to organizations dedicated to improving the lives of
                  cats. We hope to open more cat cafes around the country to
                  provide more comfortable places where cats can meet humans in
                  a casual environment. {"\n\n"}For every sale, we donate a
                  portion to a shelter, rescue, or other charitable organization
                  focused on helping cats and other animals. We want to build
                  our brand on giving and want our customers to feel good about
                  purchases. In the cat lounge, we strive to educate visitors
                  about cats' needs for loving homes. We have created an entry
                  point for people to create precious interactions and memories
                  with feline friends with the hope to inspire them to adopt or
                  donate to benefit cats in need. At the end of the day, we want
                  to see visitors to the cat lounge with smiles on their faces
                  and love for cats in their hearts.
               </Text>
            </View>
         </View>
      </ScrollView>
   );
}

export default AboutusScreen;

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
   image: {
      height: 200,
      width: 300,
   },
   textLink: {
      fontWeight: "bold",
   },
});
