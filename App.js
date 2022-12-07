import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./screens/HomeScreen";
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
            headerStyle: { backgroundColor: "#bdad79" },
            drawerActiveTintColor: "#5f5f5b",
         }}
      >
         <Drawer.Screen name="Home" component={HomeScreen} />
         <Drawer.Screen name="About Us" component={AboutusScreen} />
         <Drawer.Screen name="Cafe Menu" component={CafemenuScreen} />
         <Drawer.Screen name="Adopt A Cat" component={AdoptcatScreen} />
         <Drawer.Screen name="Contact Us" component={ContactScreen} />
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
   container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
   },
});
