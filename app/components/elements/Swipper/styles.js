/* eslint-disable quotes */
/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
import { StyleSheet } from "react-native";
import METRICS from "../../../constants/metrics";
import { scale } from "../../../utils/scaling";
import {
  COLOR_WHITE,
  COLOR_BLACK,
  COLOR_TRANSPARENT,
  COLOR_GREY,
  FONT_TERTIARY_REGULAR,
  FONT_SIZE_CAPTION,
  FONT_SIZE_BODY2,
  COLOR_FONT_PRIMARY_MAIN,
  FONT_CAPTION_PRIMARY_NAME
} from "../../../styles";

const styles = StyleSheet.create({
  fullScreen: {
    width: METRICS.screenWidth,
    height: METRICS.screenHeight
  },
  container: {
    backgroundColor: COLOR_TRANSPARENT,
    position: "absolute"
  },
  slide: {
    backgroundColor: COLOR_TRANSPARENT
  },
  pagination: {
    position: "absolute",
    bottom: scale(80),
    left: 0,
    right: 0,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundColor: COLOR_TRANSPARENT
  },

  dot: {
    backgroundColor: COLOR_GREY,
    width: scale(20),
    height: scale(3),
    borderRadius: scale(5),
    marginLeft: scale(3),
    marginRight: scale(3),
    bottom: 20
  },

  activeDot: {
    backgroundColor: COLOR_FONT_PRIMARY_MAIN
  },

  buttonWrapper: {
    backgroundColor: COLOR_TRANSPARENT,
    flexDirection: "column",
    position: "absolute",
    top: 0,
    left: 0,
    flex: 1,
    // paddingHorizontal: scale(10),
    // paddingVertical: scale(60),
    justifyContent: "flex-end",
    alignItems: "center"
  },
  buttonOnBoarding: {
    width: scale(300),
    height: scale(40),
    backgroundColor: COLOR_FONT_PRIMARY_MAIN,
    marginBottom: 30
  },
  buttonText: {
    color: COLOR_WHITE,
    fontFamily: FONT_TERTIARY_REGULAR,
    fontSize: 14,
    alignItems: "center"
  },
  skipWrap: {
    justifyContent: "flex-start",
    alignItems: "flex-end",
    marginTop: METRICS.doubleBaseMargin,
    marginBottom: METRICS.doubleSection,
    marginRight: 10
    // backgroundColor: COLOR_TRANSPARENT,
    // flexDirection: 'column',
    // top: 0,
    // left: 0
  },
  skip: {
    color: COLOR_WHITE,
    ...FONT_CAPTION_PRIMARY_NAME,
    // width: scale(70),
    paddingHorizontal: 10,
    marginRight: 20,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: COLOR_FONT_PRIMARY_MAIN,
    backgroundColor: COLOR_FONT_PRIMARY_MAIN
  },
  skipButton: {
    color: COLOR_WHITE,
    ...FONT_CAPTION_PRIMARY_NAME,
    // width: scale(70),
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginBottom: 40,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: COLOR_FONT_PRIMARY_MAIN,
    backgroundColor: COLOR_FONT_PRIMARY_MAIN
  }
});

export default styles;
