import React from "react";
import Icon from 'react-native-vector-icons/FontAwesome5';
import {TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

const HeaderRight = ({navigation}) => {

  const logout = () => {
    navigation.navigate("Home");
  }

  return(
      <TouchableOpacity onPress={logout}>
        <Icon name="sign-out-alt" size={24} color="#fff" />
      </TouchableOpacity>
  )
}
HeaderRight.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}
HeaderRight.defaultProps = {
  navigation: { navigate: () => null },
}
export default HeaderRight;
