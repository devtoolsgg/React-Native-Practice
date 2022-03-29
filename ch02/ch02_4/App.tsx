/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Alert,
  TouchableOpacity,
  TouchableHighlight,
  TextInput

} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const onPress = () => Alert.alert('home pressed!','message')


// 컴포넌트 이벤트 속성 이해
// Button, TouchableOpacity, TouchableHighlight, TextInput 테스트

export default function App() {

  return (
  
    <SafeAreaView>
      <Button title = "home"
        onPress = {onPress} />

      <TouchableOpacity onPress = {onPress}>
        <Text>TouchableOpacity</Text>
      </TouchableOpacity>

      <TouchableHighlight onPress = {onPress}>
      <Text>TouchableHighlight</Text>
      </TouchableHighlight>

      
      <TextInput
        placeholder = "enter your name"
        onChangeText = {(text: String ) => console.log(text)}
        onFocus = {() => console.log('onFocus')}
        onBlur = {() => console.log('onBlur')}
        onEndEditing = {() => console.log('onEndEditing')}
        />

    </SafeAreaView>
  
  )

}
