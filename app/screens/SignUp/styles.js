/* eslint-disable quotes */
/* eslint-disable comma-dangle */

import { StyleSheet } from "react-native";
import {
  COLOR_WHITE,
  COLOR_FONT_PRIMARY_MAIN,
  COLOR_GREY_PRIMARY,
  FONT_TITLE_PRIMARY,
  FONT_CAPTION_SECONDARY
} from "../../styles";
import { scale } from "../../utils/scaling";
import METRICS from "../../constants/metrics";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: COLOR_WHITE
  },
  back: {
    marginTop: 30,
    left: 26
  },
  scrollView: {
    backgroundColor: COLOR_WHITE
  },
  title: {
    ...FONT_TITLE_PRIMARY,
    top: 10,
    marginHorizontal: 26
  },
  input: {
    height: scale(40),
    width: scale(300),
    borderWidth: scale(1),
    borderRadius: scale(5),
    color: COLOR_GREY_PRIMARY,
    borderColor: COLOR_GREY_PRIMARY,
    padding: METRICS.baseMargin,
    ...FONT_CAPTION_SECONDARY,
    paddingHorizontal: scale(20),
    marginHorizontal: 26
  },
  inputPassword: {
    flexDirection: "row",
    borderRadius: scale(4),
    alignItems: "center",
    justifyContent: "center",
    top: 0,
    marginHorizontal: 26
    // marginRight: METRICS.smallMargin,
    // marginLeft: METRICS.smallMargin
  },
  inputPass: {
    height: scale(40),
    width: scale(300),
    borderWidth: scale(1),
    borderRadius: scale(5),
    color: COLOR_GREY_PRIMARY,
    borderColor: COLOR_GREY_PRIMARY,
    padding: METRICS.baseMargin,
    ...FONT_CAPTION_SECONDARY,
    paddingHorizontal: scale(20)
  },
  touachableButton: {
    position: "absolute",
    right: scale(5),
    height: scale(25),
    width: scale(20),
    padding: scale(2)
  },
  buttonImage: {
    resizeMode: "contain",
    height: "100%",
    width: "100%"
  },
  btn: {
    width: scale(300),
    height: scale(40),
    backgroundColor: COLOR_FONT_PRIMARY_MAIN,
    top: 0,
    marginHorizontal: 26
  },
  btnText: {
    color: COLOR_WHITE,
    ...FONT_CAPTION_SECONDARY
  },
  marginOne: { marginBottom: METRICS.fiveMargin },
  margin: { marginBottom: 15 }
});

export default styles;
