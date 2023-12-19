import { StatusBar } from "expo-status-bar";
import { Text, TouchableOpacity, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 justify-center items-center bg-black ">
      <TouchableOpacity className="bg-orange-500 p-3 rounded-lg shadow-md shadow-gray-00">
        <Text>Ember</Text>
      </TouchableOpacity>
      <StatusBar style="dark" />
    </View>
  );
}