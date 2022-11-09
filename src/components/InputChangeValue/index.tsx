import { View, Text, TextInput } from "react-native";
import { MotiView } from "moti";
import { UserPhoto } from "../UserPhoto";
import { styles } from "./styles";
import { COLORS } from "../../theme";
import { useAuth } from "../../hooks/auth";

export function InputChangeValue() {
  const {user} = useAuth()
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        keyboardAppearance="dark"
        placeholder="Qual sua expactativa para o evento?"
        multiline
        maxLength={140}
      >{user?.name}</TextInput>
    </View>
  );
}
