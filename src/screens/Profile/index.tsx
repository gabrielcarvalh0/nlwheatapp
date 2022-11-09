import { View, Text, KeyboardAvoidingView, Platform } from "react-native";
import { Header } from "../../components/Header";
import { MessageList } from "../../components/MessageList";
import { SendMessageForm } from "../../components/SendMessageForm";
import { SigninBox } from "../../components/SigninBox";
import { useAuth } from "../../hooks/auth";
import { styles } from "./styles";
export function Profile() {
  const { user } = useAuth();
  return (
    <KeyboardAvoidingView
    style={{flex: 1}}
    behavior={Platform.OS === 'ios'? 'padding': undefined}
    >

    <View style={styles.container}>
      <Header />

      {user && <SendMessageForm />}
    </View>
    </KeyboardAvoidingView>
  );
}
