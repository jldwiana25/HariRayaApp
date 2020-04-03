/* eslint-disable quotes */
/* eslint-disable comma-dangle */
import { StyleSheet } from "react-native";
import {
  COLOR_WHITE,
  FONT_BODY2_PRIMARY,
  COLOR_GREY_TRANSPARENT
} from "../../styles";
import { scale } from "../../utils/scaling";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLOR_WHITE,
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  logoContainer: {
    width: scale(130),
    height: scale(150),
    marginTop: 150
  },
  logo: {
    flex: 1,
    width: undefined,
    height: undefined,
    justifyContent: "center",
    alignItems: "center"
  },
  support: {
    ...FONT_BODY2_PRIMARY,
    color: COLOR_GREY_TRANSPARENT
  }
});

export default styles;
