/* eslint-disable comma-dangle */
/* eslint-disable quotes */
import { StyleSheet } from "react-native";
import {
  COLOR_BLACK,
  COLOR_FONT_TERTIARY_GREY,
  COLOR_WHITE,
  FONT_TERTIARY_REGULAR,
  FONT_OVERLINE_PRIMARY,
  FONT_TITLE_ONBOARDINGS,
  FONT_SIZE_BODY2
} from "../../styles";
import { scale } from "../../utils/scaling";
import METRICS from "../../constants/metrics";

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    width: METRICS.screenWidth,
    height: METRICS.screenHeight,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLOR_WHITE
  },
  header: {
    color: COLOR_BLACK,
    ...FONT_TITLE_ONBOARDINGS,
    marginVertical: METRICS.mediumMargin,
    textAlign: "center"
  },
  text: {
    color: COLOR_FONT_TERTIARY_GREY,
    ...FONT_OVERLINE_PRIMARY,
    marginBottom: METRICS.fourthSection,
    top: scale(10),
    width: scale(240),
    lineHeight: scale(24),
    textAlign: "center"
  },
  images: {
    width: scale(220),
    height: scale(200),
    marginBottom: METRICS.doubleSection
  }
});

export default styles;
