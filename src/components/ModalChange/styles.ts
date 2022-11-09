import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../theme";

export const styles = StyleSheet.create({
  modalLogout: {
    width: '100%',
    padding: 20,
    paddingVertical: 50,
    position: 'absolute',
    bottom: 0,
    backgroundColor: COLORS.BLACK_TERTIARY
},

footerModalLogout: {
    width: '50%',
    padding: 0,
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 30


},

divText: {
    marginTop: 0,
    padding: 10
},


divBtn: {
    width: '100%',
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 60,
    paddingHorizontal: 20


},


textLogOut: {
  
    fontSize: 24,
    color: COLORS.WHITE,
    textAlignVertical: 'center',
},

});
