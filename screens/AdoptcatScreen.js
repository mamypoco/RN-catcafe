import {
   Text,
   View,
   StyleSheet,
   ScrollView,
   Image,
   Linking,
} from "react-native";

function AdoptcatScreen() {
   return (
      <ScrollView>
         <View style={styles.rootContainer}>
            <View style={styles.container}>
               <Text style={styles.header}>Adopt a cat</Text>
            </View>
            <View style={styles.container}>
               <Text style={styles.subHeader}>
                  Looking to expand your family with a new cat?
               </Text>
            </View>
            <View style={styles.container}>
               <Text style={styles.paragraph}>
                  We have partnered with Seattle Humaine Society. The Cat Coacoa
                  is starting sending cats to good homes. We have kittens,
                  adults, and senior cats including special needs cats, who
                  would be missing tails, cats with one eye, blind cats, and
                  cats with other medical conditions. We generally do not
                  receive any pedigreed cats, because there are many cat rescue
                  groups that focus on these animals. However, The Cat Cocoa has
                  adopted various mixes of Persians, Snowshoes, Maine Coons,
                  Siamese, and other breeds.
               </Text>
               <Image
                  source={require("../data/images/adoptme.jpg")}
                  style={styles.image}
               ></Image>
            </View>
            <View style={styles.container}>
               <Text style={styles.subHeader}>
                  Here are step-by-step guide to our adoption process.
               </Text>
            </View>
            <View style={styles.container}>
               <Text style={styles.paragraph}>
                  Step 1: Visit a trip with the kitties and try to find your
                  purrrfect match. Talk with the cafe worker about the kitty you
                  are interested in. {"\n\n"}
                  Step 2: Ask for adaption form at Cat Cocoa. Complete our
                  ADOPTION APPLICATION. {"\n\n"}
                  Step 3: Please note that our kitties are very popular and each
                  cat receives many applicants. Applicants are reviewed by our
                  team and those that appear to be the best match will move onto
                  the interview process. After we complete the interviews of
                  5-10 candidates a lucky adopter will be chosen! Each adopter
                  is matched to the specific cat and human wants and needs.{" "}
                  {"\n\n"}
                  Step 4: Get your house setup for your newest family member! We
                  will let you know all their favorite things to help make a
                  smooth transition. {"\n\n"}
                  Step 5: Once your house is all set up, we will schedule an
                  adoption day! Our adoption process typically takes between 4-8
                  weeks. We do not do same-day adoptions.
               </Text>
            </View>
         </View>
      </ScrollView>
   );
}

export default AdoptcatScreen;

const styles = StyleSheet.create({
   rootContainer: {
      margin: 10,
      paddingHorizontal: 18,
      justifyContent: "center",
      alignItems: "center",
   },
   container: {
      // margin: 8,
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
