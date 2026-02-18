import { View, Text } from "react-native";
import { useRegisterViewModel } from "./useRegister.viewModel";
import { FC } from "react";

export const RegisterView: FC<ReturnType<typeof useRegisterViewModel>> = ({
  userData,
  setUserData,
}) => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>Olá, {userData.name}!</Text>
    </View>
  );
};
