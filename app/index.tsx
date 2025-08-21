import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [isFestive, setIsFestive] = useState(false);

  useEffect(() => {
    // Change UI after 2 minutes (120000 ms)
    const timer = setTimeout(() => {
      setIsFestive(true);
    }, 12000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {isFestive ? (
        <View style={styles.festiveBox}>
          <Text style={styles.festiveText}>🎉 Festive Sale is Live! 🎉</Text>
          <Text style={styles.subText}>Enjoy amazing deals and discounts!</Text>
        </View>
      ) : (
        <View style={styles.defaultBox}>
          <Text style={styles.defaultText}>Welcome to My App</Text>
          <Text style={styles.subText}>Stay tuned for exciting offers...</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  defaultBox: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#e3f2fd",
  },
  festiveBox: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#fff3e0",
  },
  defaultText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1565C0",
    marginBottom: 10,
  },
  festiveText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#E65100",
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    color: "#555",
  },
});
