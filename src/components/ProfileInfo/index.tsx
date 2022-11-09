import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { styles } from "./styles";
import { UserPhoto } from "../UserPhoto";

import { useAuth } from "../../hooks/auth";
import { COLORS } from "../../theme";
import { InputChangeValue } from "../InputChangeValue";

export function ProfileInfo() {
  const { user, signOut } = useAuth();
  return (
    <View style={styles.container}>
      <UserPhoto sizes="GRANDE" imageUri={user?.avatar_url} />


      <InputChangeValue />
    </View>
  );
}
