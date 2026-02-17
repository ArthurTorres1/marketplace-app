import { router } from "expo-router";
import { View, Text, Touchable, TouchableOpacity } from "react-native";

export default function Login() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-red-300">Login Page</Text>
      <TouchableOpacity onPress={() => router.push("/register")}>
        <Text className="text-blue-500">Registrar</Text>
      </TouchableOpacity>
    </View>
  );
}
