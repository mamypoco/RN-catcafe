import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import {
   createDrawerNavigator,
   DrawerContentScrollView,
   DrawerItemList,
} from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import LinearGradient from "react-native-linear-gradient";
import HomeScreen from "./screens/HomeScreen";
import ReservationScreen from "./screens/ReservationScreen";
import AboutusScreen from "./screens/AboutusScreen";
import CafemenuScreen from "./screens/CafemenuScreen";
import AdoptcatScreen from "./screens/AdoptcatScreen";
import ContactScreen from "./screens/ContactScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
   return (
      <Drawer.Navigator
         screenOptions={{
            headerStyle: { backgroundColor: "#c7a948", height: 120 },
            // headerBackground: (
            //    <LinearGradient
            //       colors={["#e6ddc4", "#d4ac2b", "#533535"]}
            //       style={{ flex: 1 }}
            //       start={{ x: 0, y: 0 }}
            //       end={{ x: 1, y: 0 }}
            //    />
            // ),
            sceneContainerStyle: { backgroundColor: "#e6ddc4" },
            drawerContentStyle: { backgroundColor: "#e6ddc4" },
            drawerInactiveTintColor: "#351401",
            drawerActiveBackgroundColor: "white",
            drawerActiveTintColor: "black",
            headerTitle: () => (
               <View>
                  <Image
                     source={require("./data/images/cocoa_logo8.jpg")}
                     style={styles.logoImage}
                  />
               </View>
            ),
            headerTitleAlign: "center",
         }}
      >
         <Drawer.Screen
            name="Home"
            component={HomeScreen}
            options={{
               drawerIcon: ({ color, size }) => (
                  <Ionicons name="home" color={color} size={size} />
               ),
            }}
         />
         <Drawer.Screen
            name="Book Your Visit"
            component={ReservationScreen}
            options={{
               drawerIcon: ({ color, size }) => (
                  <Ionicons name="chatbubbles" color={color} size={size} />
               ),
            }}
         />
         <Drawer.Screen
            name="About Us"
            component={AboutusScreen}
            options={{
               drawerIcon: ({ color, size }) => (
                  <Ionicons
                     name="information-circle"
                     color={color}
                     size={size}
                  />
               ),
            }}
         />
         <Drawer.Screen
            name="Cafe Menu"
            component={CafemenuScreen}
            options={{
               drawerIcon: ({ color, size }) => (
                  <Ionicons name="cafe" color={color} size={size} />
               ),
            }}
         />
         <Drawer.Screen
            name="Adopt A Cat"
            component={AdoptcatScreen}
            options={{
               drawerIcon: ({ color, size }) => (
                  <Ionicons name="logo-octocat" color={color} size={size} />
               ),
            }}
         />
         <Drawer.Screen
            name="Contact Us"
            component={ContactScreen}
            options={{
               drawerIcon: ({ color, size }) => (
                  <Ionicons name="chatbubbles" color={color} size={size} />
               ),
            }}
         />
      </Drawer.Navigator>
   );
}

export default function App() {
   return (
      <>
         <StatusBar style="auto" />
         <NavigationContainer>
            <Stack.Navigator>
               <Stack.Screen
                  name="HomeDrawer"
                  component={DrawerNavigator}
                  options={{
                     headerShown: false,
                  }}
               />
               {/* <Stack.Screen name="About Us" component={AboutusScreen} />
               <Stack.Screen name="Cafe Menu" component={CafemenuScreen} />
               <Stack.Screen name="Adopt A Cat" component={AdoptcatScreen} />
               <Stack.Screen name="Contact Us" component={ContactScreen} /> */}
            </Stack.Navigator>
         </NavigationContainer>
      </>
   );
}

const styles = StyleSheet.create({
   logoImage: {
      height: 80,
      width: 170,
   },
});
