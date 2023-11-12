import React from "react";
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import LottieView from "lottie-react-native";
import { removeItem } from "../utils/asyncStorage";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

export default function HomeScreen() {
  const navigation = useNavigation();

  const handleReset = async () => {
    await removeItem("onboarded");
    navigation.push("Onboarding");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.lottie}>
        <LottieView
          source={require("../assets/animations/confetti.json")}
          autoPlay
          loop
        />
      </View>
      <Text style={styles.text}>Home page</Text>
      <TouchableOpacity onPress={handleReset} style={styles.resetButton}>
        <Text>reset</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  lottie: {
    width: width * 0.9,
    height: width,
  },
  text: {
    fontSize: width * 0.09,
    marginBottom: 20,
  },
  resetButton: {
    backgroundColor: "#34d399",
    padding: 10,
    borderRadius: 10,
  },
});
