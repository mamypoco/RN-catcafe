import { useState } from "react";
import {
   View,
   Text,
   ScrollView,
   StyleSheet,
   Button,
   TextInput,
   Platform,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";

function BookForm() {
   // const [state, setState] = useState({
   //    name: "",
   //    email: "",
   //    numPeople: 1,
   //    date: new Date(),
   //    showCalendar: false,
   //    fromTime: "",
   //    toTime: "",
   // });
   const [name, setName] = useState();
   const [email, setEmail] = useState();
   const [numPeople, setNumPeople] = useState(1);
   const [date, setDate] = useState(new Date());
   const [showCalendar, setShowCalendar] = useState(false);
   const [fromTime, setFromTime] = useState();
   const [toTime, setToTime] = useState();

   const bookHandler = () => {
      console.log("name:", name);
      console.log("email:", email);
      console.log("Number of people:", numPeople);
      console.log("date:", date);
      console.log("showCalendar:", showCalendar);
      console.log("fromTime:", fromTime);
      console.log("toTime:", toTime);
   };

   const onDateChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShowCalendar(Platform.OS === "ios");
      setDate(currentDate);
   };

   return (
      <ScrollView>
         <Text style={styles.label}>Name:</Text>
         <TextInput
            name="name"
            style={styles.input}
            placeholder="e.g. John Doe"
            onChangeText={(name) => setName(name)}
            value={name}
         />

         <Text style={styles.label}>Email:</Text>
         <TextInput
            name="email"
            style={styles.input}
            placeholder="e.g. johnd@domain.com"
            onChangeText={(email) => setEmail(email)}
            value={email}
         />
         <Text style={styles.label}>Number of People:</Text>
         <View style={styles.picker}>
            <Picker
               selectedValue={numPeople}
               onValueChange={(value) => setNumPeople(value)}
            >
               <Picker.Item label="1" value={1} />
               <Picker.Item label="2" value={2} />
               <Picker.Item label="3" value={3} />
               <Picker.Item label="4" value={4} />
               <Picker.Item label="5" value={5} />
               <Picker.Item label="6" value={6} />
               <Picker.Item label="7" value={7} />
            </Picker>
         </View>
         <View>
            <Text style={styles.label}>Date:</Text>
            <Button
               onPress={() => setShowCalendar(!showCalendar)}
               title={date.toLocaleDateString("en-US")}
               color="#726e6e"
               accessibilityLabel="Tap me to select a reservataion date"
            />
         </View>
         {showCalendar && (
            <DateTimePicker
               value={date}
               mode="date"
               display="default"
               onChange={onDateChange}
            />
         )}
         <View>
            <Text style={styles.label}>Time:</Text>
            <Button
               onPress={() => bookHandler()}
               title="Pick your time"
               color="#726e6e"
               accessibilityLabel="Tap me to search for available campsites to reserve"
            />
         </View>

         <View style={styles.buttonView}>
            <Button
               onPress={() => bookHandler()}
               title="Search Availability"
               accessibilityLabel="Tap me to search for available campsites to reserve"
            />
         </View>
      </ScrollView>
   );
}

export default BookForm;

const styles = StyleSheet.create({
   label: {
      marginTop: 6,
      marginBottom: 6,
      fontSize: 16,
   },
   input: {
      borderRadius: 6,
      paddingHorizontal: 6,
      backgroundColor: "white",
      paddingTop: 8,
      paddingBottom: 6,
      marginBottom: 6,
      height: 40,
      width: 280,
      fontSize: 16,
   },
   picker: {
      borderRadius: 6,
      backgroundColor: "white",
      justifyContent: "center",
      height: 40,
      width: 280,
   },
   buttonView: {
      marginTop: 12,
      width: 200,
   },
});
