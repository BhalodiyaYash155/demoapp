import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

const CONFIG_URL =
  "https://raw.githubusercontent.com/BhalodiyaYash155/demoapp/master/themeConfig.json";

export default function App() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const response = await fetch(CONFIG_URL);
        const config = await response.json();

        const now = Date.now();
        const festive = config.festiveTheme;
        const start = new Date(festive.startDate).getTime();
        const end = new Date(festive.endDate).getTime();

        if (now >= start && now <= end) {
          setTheme(festive);
        } else {
          setTheme(config.defaultTheme);
        }
      } catch (error) {
        console.error("Error loading config:", error);
      }
    };

    fetchConfig();

    // Re-check every minute
    const interval = setInterval(fetchConfig, 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  if (!theme) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.primaryColor }]}>
      <Text style={styles.text}>{theme.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },
});
