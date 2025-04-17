import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text style = {styles.text}>Hello there!!!</Text>
      <Link href = "/about" style = {styles.button}>About</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#25292e',
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#d35400",
  },
  button: {
    padding: 5,
    backgroundColor: "#f4d03f",
    margin: 10,
    borderRadius: 5,
  }
})
