import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function App() {
  return (
    <View>
      <Text>Hello, Marketplace App!</Text>
      <TouchableOpacity onPress={() => router.push("login")}>
        <Text className="text-purple-base">Login</Text>
      </TouchableOpacity>
    </View>
  );
}
