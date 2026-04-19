import React from "react";
import { ScrollView, StyleSheet, Text, Button, Alert, View} from "react-native";
import { BarCodeScanner} from "expo-barcode-scanner";

export default function Index() {
  return (
    <>

      <ScrollView style={styles.container}>
        {/* Welcome text */}

        <Text style={styles.welcome}>Welcome to SKaN Me</Text> 
  
        {/* Top cards*/}
        <View style={styles.card}>
          
          <Text style={styles.cardTitle}>Save on Your Groceries!</Text>
          <Text style={styles.cardSubtitle}>Compare prices across stores</Text>
        </View>

        <View style={styles.card}>
          
          <Text style={styles.cardTitle}>Easy Scan and Compare</Text>
          <Text style={styles.cardSubtitle}>Quickly scan any product</Text>
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
    marginBottom: 89,
  },

  card: {
    alignItems: "center",
    backgroundColor: "#D9CBB3",
    padding: 20,
    borderRadius: 16,
    marginBottom: 15,
    elevation: 3,
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


});
