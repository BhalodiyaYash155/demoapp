import { useLocalSearchParams } from "expo-router";
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const screenWidth = Dimensions.get("window").width;

export default function ProductDetail() {
  const { image, title, price, category, rating } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image
          source={{ uri: Array.isArray(image) ? image[0] : image }}
          style={styles.productImage}
        />
      </View>
      <View style={styles.card}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.category}>{category}</Text>
        <View style={styles.row}>
          <View style={styles.stars}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Text key={i} style={{ color: i < Math.round(Number(rating)) ? "#FFD700" : "#ccc", fontSize: 18 }}>★</Text>
            ))}
          </View>
          <Text style={styles.price}>${price}</Text>
        </View>
        <Text style={styles.description}>
          {/* Example description, replace with real data if available */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa.
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const CARD_WIDTH = screenWidth - 40;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eaf6fa",
    alignItems: "center",
    paddingTop: 40,
  },
  imageWrapper: {
    alignItems: "center",
    zIndex: 2,
  },
  productImage: {
    width: 180,
    height: 180,
    resizeMode: 'contain',
    borderRadius: 80,
    marginBottom: -60,
    borderWidth: 4,
    borderColor: "#fff",
    backgroundColor: "#eee",
  },
  card: {
    width: CARD_WIDTH,
    backgroundColor: "#fff",
    borderRadius: 24,
    padding: 24,
    paddingTop: 100,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 8,
    marginTop: -40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 4,
    textAlign: "center",
  },
  category: {
    fontSize: 16,
    color: "#888",
    marginBottom: 12,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 12,
  },
  stars: {
    flexDirection: "row",
  },
  price: {
    fontSize: 20,
    color: "#007AFF",
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    color: "#555",
    marginVertical: 16,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#007AFF",
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 32,
    alignItems: "center",
    marginTop: 8,
    width: "100%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
