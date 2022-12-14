import { View, Text, KeyboardAvoidingView, Platform } from "react-native";
import { Header } from "../../components/Header";
import { MessageList } from "../../components/MessageList";
import { ModalChange } from "../../components/ModalChange";
import { ProfileInfo } from "../../components/ProfileInfo";
import { SendMessageForm } from "../../components/SendMessageForm";
import { SigninBox } from "../../components/SigninBox";
import { useAuth } from "../../hooks/auth";
import { styles } from "./styles";
export function Home() {
  const { user } = useAuth();
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.container}>
        <Header />

        <MessageList /> 
       {user ? <SendMessageForm /> : <SigninBox />} 
      </View>
    </KeyboardAvoidingView>
  );
}
