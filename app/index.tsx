import React, {useState} from "react";
import { ScrollView, StyleSheet, TouchableOpacity, Text, View, Image} from "react-native";
import {Stack} from "expo-router";
import {CameraView, useCameraPermissions} from "expo-camera";
import {Ionicons} from "@expo/vector-icons";

export default function Index() {
  const[scanning, setScanning] = useState(false);
  const[permission, requestPermission] = useCameraPermissions();

  const handleScanPress = async() => {
    if (!permission?.granted){
      await requestPermission();
    } else{
      setScanning(true);
    }
  };

  const handleBarcodeScanned = ({data}: {data: string}) => {
    setScanning(false);
    alert(`Scanned: ${data}`); {/*replace with actual logic*/}
  }

  return (
    <>
       <Stack.Screen options={{ headerShown: false }} />

      <ScrollView style={styles.container}>
       {/* Welcome text */}

        <Text style={styles.welcome}>Welcome to SKaN Me</Text> 
  
        {/* Top cards*/}
        <View style={styles.card}>
           <Image source={require("../assets/images/currency-notes.png")} style={styles.cardIcon} />
           <View>
          <Text style={styles.cardTitle}>Save on Your Groceries!</Text>
          <Text style={styles.cardSubtitle}>Compare prices across stores</Text>
          </View>
        </View>

        <View style={styles.card}>
           <Image source={require("../assets/images/barcode-square.png")} style={styles.cardIcon} />
           <View>
          <Text style={styles.cardTitle}>Easy Scan and Compare</Text>
          <Text style={styles.cardSubtitle}>Quickly scan any product</Text>
          </View>
        </View>

        {/* Scan Button */}
<View style={styles.scanCard}>
  <TouchableOpacity style={styles.scanButton} onPress={handleScanPress}>
    <Image source={require("../assets/images/camera.png")} style={styles.scanIcon}/>
    <Text style={styles.scanButtonText}>Tap to Scan!</Text>
  </TouchableOpacity>
</View>


      </ScrollView>
    </>
  );

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F0E6",
    paddingHorizontal: 20,
    paddingTop: 40,
  },

  welcome: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#764C29",
    textAlign: "center",
    marginBottom: 25,
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    backgroundColor: "#D9CBB3",
    padding: 20,
    borderRadius: 16,
    marginBottom: 15,
    elevation: 3,
  },

   cardIcon: {
    width: 45,
    height: 45,
    resizeMode: "contain",
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#764C29",
    marginBottom: 4,
  },

  cardSubtitle: {
    fontSize: 14,
    color: "#764C29",
  },

  scanCard: {
    backgroundColor: "#D9CBB3",
    padding: 0,
    borderRadius: 16,
    marginBottom: 15,
    elevation: 3,
    alignItems: "stretch",
  },

  scanButton:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    backgroundColor: "#4C653B",
    padding: 5,
    borderRadius: 30,
    marginTop: 10,
    marginBottom: 16,
    elevation: 3,
    borderBottomWidth: 5, 
    borderRightWidth: 3,
    borderColor: "#8B8589",
  },

  scanIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
    tintColor: "#FFFFFF",
  },

  scanButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  cameraContainer:{
    flex: 1,
    backgroundColor: "#000",
  },

  camera:{
    flex: 1,
  },

  closeButton:{
    position:"absolute",
    top: 50,
    right: 20,
  },

});
