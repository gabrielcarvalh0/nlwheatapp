import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { styles } from "./styles";
import { UserPhoto } from "../UserPhoto";

import { useAuth } from "../../hooks/auth";
import { COLORS } from "../../theme";
import { InputChangeValue } from "../InputChangeValue";
import { Button } from "../Button";

type ModalProps = {
  isVisible: boolean;
};

export function ModalChange() {
  const { user, signOut } = useAuth();
  return (
    <View style={styles.modalLogout}>
      <View style={styles.divText}>
        <Text style={styles.textLogOut}>Deseja salvar as novas alterações?</Text>
      </View>

      <View style={styles.footerModalLogout}>
        <View style={styles.divBtn}>
          <Button
            title="CANCELAR"
            backgroundColor={COLORS.PINK}
            color={COLORS.WHITE}
          ></Button>
        </View>

        <View style={styles.divBtn}>
          <Button
            title="SALVAR"
            backgroundColor={COLORS.PINK}
            color={COLORS.WHITE}
          ></Button>
        </View>
      </View>
    </View>
  );
}
