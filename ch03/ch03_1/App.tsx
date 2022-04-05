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
} from 'react-native';

import { 
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {Colors} from 'react-native-paper'



console.log(Colors.blue500)
export default function App(){

  return(
    <SafeAreaView style={[styles.safeAreaViews,{backgroundColor:'blue'}]}>

      <Text style={[styles.texts,{color:'white'}]}>Hello world~</Text>

    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  safeAreaViews : {flex : 1, alignItems : 'center', justifyContent:'center'
  ,backgroundColor : Colors.blue500},
  texts: {fontSize : 20, color:Colors.blue200}
})
