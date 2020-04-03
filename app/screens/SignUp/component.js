/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
import React from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView
} from "react-native";
import PropTypes from "prop-types";
import axios from "axios";

import MainScreen from "../../components/layouts/MainScreen";
import styles from "./styles";
import I18n from "../../i18n";
import Button from "../../components/elements/Button";
import HEADER from "../../components/elements/Header";
import Back from "../../../assets/svgs/Back";

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      callname: "",
      phone: "",
      email: "",
      password: "",
      hidePassword: true
    };
  }

  setPasswordVisibility = () => {
    this.setState({ hidePassword: !this.state.hidePassword });
  };

  _signUp = async () => {
    const { fullname, callname, email, phone, password } = this.state;
    const accountData = { fullname, callname, email, phone, password };
    try {
      const res = await axios.post(
        "http://ec2-34-201-73-157.compute-1.amazonaws.com:9000/api/v1/users/register",
        accountData
      );
      console.log(res.data);
      this.props.navigation.navigate("SignIn");
    } catch (error) {
      console.error("MASIH ERROR");
      console.log(error);
    }
  };
  _onPressBack = async () => {
    const { goBack } = this.props.navigation;
    goBack();
  };
  render() {
    const {
      email,
      password,
      fullname,
      callname,
      phone,
      onChangeText
    } = this.state;
    return (
      <ScrollView style={styles.scrollView}>
        <MainScreen style={styles.mainContainer}>
          {/* // <HEADER back /> */}
          <TouchableOpacity onPress={this._onPressBack} style={styles.back}>
            <Back />
          </TouchableOpacity>
          <Text style={styles.title}>{I18n.t("daftar2")}</Text>
          <View style={styles.margin} />
          <TextInput
            label=" "
            underlineColorAndroid="transparent"
            placeholder={I18n.t("name")}
            editable
            style={styles.input}
            value={fullname}
            // eslint-disable-next-line no-shadow
            onChangeText={fullname => this.setState({ fullname })}
          />
          <View style={styles.margin} />
          <TextInput
            label=" "
            underlineColorAndroid="transparent"
            placeholder={I18n.t("username")}
            editable
            style={styles.input}
            value={callname}
            // eslint-disable-next-line no-shadow
            onChangeText={callname => this.setState({ callname })}
          />
          <View style={styles.margin} />
          <TextInput
            label=" "
            underlineColorAndroid="transparent"
            placeholder={I18n.t("phoneNumber")}
            editable
            style={styles.input}
            value={phone}
            // eslint-disable-next-line no-shadow
            onChangeText={phone => this.setState({ phone })}
          />
          <View style={styles.margin} />
          <TextInput
            label=" "
            underlineColorAndroid="transparent"
            placeholder={I18n.t("email")}
            editable
            style={styles.input}
            value={email}
            // eslint-disable-next-line no-shadow
            onChangeText={email => this.setState({ email })}
          />
          <View style={styles.margin} />
          <View style={styles.inputPassword}>
            <TextInput
              label=" "
              underlineColorAndroid="transparent"
              placeholder={I18n.t("password")}
              editable
              style={styles.inputPass}
              value={password}
              Icon={this.state.iconName}
              // eslint-disable-next-line no-shadow
              onChangeText={password => this.setState({ password })}
              secureTextEntry={this.state.hidePassword}
            />
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.touachableButton}
              onPress={this.setPasswordVisibility}
            >
              <Image
                source={
                  this.state.hidePassword
                    ? require("../../../assets/images/view.png")
                    : require("../../../assets/images/hide.png")
                }
                style={styles.buttonImage}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.margin} />
          <View style={styles.margin} />
          <Button
            type="raised-ripple"
            title={I18n.t("daftar2")}
            onPress={this._signUp}
            customContainer={styles.btn}
            customText={styles.btnText}
          />
        </MainScreen>
      </ScrollView>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
