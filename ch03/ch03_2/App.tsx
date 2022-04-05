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
  Platform,  // 애플리케이션이 어느플랫폼에서 동작하는지 확인하는 api
  Dimensions // 실행폰의 화면 사이즈 api
} from 'react-native';

import {
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {Colors} from 'react-native-paper'




const {width, height} = Dimensions.get('window')



export default function App(){

  return(

      <SafeAreaView style = {[styles.safeAreaView]}>

        <Text style={[styles.text, {color : 'white'}]}>hello world</Text>
        <Text style={[styles.text, {color : 'yellow'}]}>os : {Platform.OS}</Text>
        <Text style={[styles.text, {color : 'orange'}]}>width : {width}</Text>
        <Text style={[styles.text, {color : 'black'}]}>height : {height}</Text>


        <View style={[styles.box, styles.border, {borderRadius : 10}]}/>
        <View style={[styles.box, styles.border]}/>
        <View style={[styles.box, styles.border, {borderTopLeftRadius : 40,borderBottomLeftRadius : 40}]}/>


      </SafeAreaView>


  )


}


const styles = StyleSheet.create({

  // width, height 설정
  // safeAreaView : {backgroundColor : Colors.blue500, height : height}, // 명시적으로 픽살단위 값 설정
  // safeAreaView : {backgroundColor : Colors.blue500, height : '50%'}, // 부모 요소 기준으로 퍼선트 설정


  // safeAreaView : {backgroundColor : Colors.blue500, flex : 1, padding : 10}, // flex 속성 (1 = 100%)
  //safeAreaView : {backgroundColor : Colors.blue500, margin : '8%'}, // margin
  safeAreaView : {backgroundColor : Colors.blue500, paddingLeft : Platform.select({ios : 0, android : 20})}, // 플랫폼별 구분

  text : {fontSize : 20, color : Colors.blue200, marginBottom : 10, marginLeft : 30}, // 같은 방식으로 padding 속성 적용

  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },

  box : {height : 100, backgroundColor : Colors.lime500, marginBottom : 10, marginLeft : Platform.select({ios : 20, android : 0})},

  border : {borderWidth : 10 , borderColor : Colors.blue900, margin : 10}




});

