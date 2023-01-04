import { useState } from "react";
import {
   View,
   Text,
   ScrollView,
   StyleSheet,
   Button,
   TextInput,
   Platform,
   Modal,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";

function BookForm() {
   const [name, setName] = useState();
   const [email, setEmail] = useState();
   const [numPeople, setNumPeople] = useState(1);
   const [dateOfVisit, setdateOfVisit] = useState(new Date());
   const [showCalendar, setShowCalendar] = useState(false);
   const [timeOfVisit, setTimeOfVisit] = useState(new Date());
   const [showTime, setShowTime] = useState(false);
   const [showModal, setShowModal] = useState(false);

   const dateOfVisitFormatted = dateOfVisit.toLocaleDateString("en-US");
   const timeOfVisitFormatted = timeOfVisit
      .toLocaleTimeString("en-US")
      .slice(0, -3);

   // ([], {
   //    hour: "2-digit",
   //    minute: "2-digit",
   //    // timeStyle: "short",
   // });

   const handleReservation = () => {
      console.log("name:", name);
      console.log("email:", email);
      console.log("Number of people:", numPeople);
      console.log("date:", dateOfVisitFormatted);
      console.log("time:", timeOfVisitFormatted);
      setShowModal(!showModal);
   };

   const onDateChange = (event, selectedDate) => {
      const currentDate = selectedDate || dateOfVisit;
      setShowCalendar(Platform.OS === "ios");
      setdateOfVisit(currentDate);
   };

   const onTimeChange = (event, selectedTime) => {
      const currentTime = selectedTime || timeOfVisit;
      setShowTime(Platform.OS === "ios");
      setTimeOfVisit(currentTime);
   };

   const resetForm = () => {
      setName();
      setEmail();
      setNumPeople(1);
      setdateOfVisit(new Date());
      setTimeOfVisit(new Date());
      setShowCalendar(false);
      setShowTime(false);
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
            <View style={styles.picker}>
               <Button
                  onPress={() => setShowCalendar(!showCalendar)}
                  title={dateOfVisitFormatted}
                  color="#AA8B56"
                  accessibilityLabel="Tap me to select a reservataion date"
               />
            </View>
         </View>
         {showCalendar && (
            <DateTimePicker
               value={dateOfVisit}
               mode="date"
               display="default"
               onChange={onDateChange}
            />
         )}
         <View>
            <Text style={styles.label}>
               Start Time: {timeOfVisitFormatted} {"\n"}
               (Note: 15 mins interval and 30 mins long)
            </Text>

            <View style={styles.picker}>
               <Button
                  onPress={() => setShowTime(!showTime)}
                  title={timeOfVisitFormatted}
                  color="#AA8B56"
                  accessibilityLabel="Tap me to select 30 mins reservataion time"
               />
            </View>
            {showTime && (
               <DateTimePicker
                  value={timeOfVisit}
                  mode="time"
                  display="default"
                  minuteInterval={15}
                  onChange={onTimeChange}
               />
            )}
         </View>

         <View style={styles.buttonView}>
            <Button
               onPress={() => handleReservation()}
               title="Search Availability"
               color="black"
               accessibilityLabel="Tap me to search for available slot"
            />
         </View>

         <Modal
            animationType="slide"
            transparent={false}
            visible={showModal}
            onRequesetClose={() => setShowModal(!showModal)}
         >
            <View style={styles.modal}>
               <Text style={styles.modalTitle}>Search reservations</Text>
               <Text style={styles.modalText}>
                  Number of people: {numPeople}
               </Text>
               <Text style={styles.modalText}>
                  Date of visit: {dateOfVisitFormatted}
               </Text>
               <Text style={styles.modalText}>
                  Time of visit: {timeOfVisitFormatted}
               </Text>
               <Button
                  onPress={() => {
                     setShowModal(!showModal);
                     resetForm();
                  }}
                  color="black"
                  title="Close"
               />
            </View>
         </Modal>
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
      borderRadius: 6,
      backgroundColor: "white",
   },
   modalBack: {
      backgroundColor: "#e6ddc4",
   },
   modal: {
      justifyContent: "center",
      margin: 20,
      backgroundColor: "#e6ddc4",
   },
   modalTitle: {
      fontSize: 24,
      fontWeight: "bold",
      backgroundColor: "black",
      textAlign: "center",
      color: "#fff",
      marginBottom: 20,
   },
   modalText: {
      fontSize: 18,
      margin: 10,
   },
});
