import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity, Text, View, Image} from "react-native";
import {Stack} from "expo-router";

export default function Index() {
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

        {/* Scan Button*/}
        <TouchableOpacity style={styles.scanButton} onPress={() => console.log("Scan pressed!")}>
          <Image source={require("../assets/images/camera.png")} style={styles.scanIcon}/>
          <Text style={styles.scanButtonText}>Tap to Scan!</Text>
        </TouchableOpacity>


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

  scanButton:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    backgroundColor: "#4A7C59",
    padding: 18,
    borderRadius: 30,
    marginTop: 10,
    marginBottom: 20,
    elevation: 3,
  },

  scanIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
    tintColor: "FFFFFF",
  },

  scanButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
  },


});
