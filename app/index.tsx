import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

const CONFIG_URL =
  "https://raw.githubusercontent.com/BhalodiyaYash155/demoapp/master/themeConfig.json";

type ThemeType = {
  primaryColor: string;
  text: string;
  [key: string]: any;
};

export default function App() {
  const [theme, setTheme] = useState<ThemeType | null>(null);

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const response = await fetch(CONFIG_URL);
        const config = await response.json();

        // Parse dates in ISO format for reliability
        const now = Date.now();
        const festive = config.festiveTheme;
        const start = Date.parse(festive.startDate);
        const end = Date.parse(festive.endDate);

        // Debug: log values to verify
        // console.log("now:", now, "start:", start, "end:", end);

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
