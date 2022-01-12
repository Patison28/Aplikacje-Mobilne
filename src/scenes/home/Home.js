import React from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet, Text, View, StatusBar, ImageBackground
} from 'react-native'
import Button from 'components/Button'
import { colors } from 'theme'
import { images } from 'theme'
import { fonts } from 'theme'


const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  image: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 60,
    marginTop: 10,
    marginBottom: 60,
    fontFamily: fonts.moLah.regular,
    color: 'black',
  },
})

const Home = ({ navigation }) => (
  <View style={styles.root}>
    <ImageBackground source={images.bg_home} resizeMode="cover" style={styles.image}>
    <StatusBar barStyle="light-content" />
    <Text style={styles.title}>WELCOME!</Text>

    <Button
      style={StyleSheet.create({ marginBottom: 25})}
      title="Logowanie"
      color="white"
      backgroundColor={colors.lightPurple}
      onPress={() => {
        navigation.navigate('Login', { from: 'Home' })
      }}
    />

    <Button

      title="Rejestracja"
      color="white"
      backgroundColor={colors.lightPurple}
      onPress={() => {

        navigation.navigate('Registration', { from: 'Home' })
      }}
    />
    </ImageBackground>
  </View>
)

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

Home.defaultProps = {
  navigation: { navigate: () => null },
}

export default Home
