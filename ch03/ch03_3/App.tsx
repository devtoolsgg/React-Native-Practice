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
  ImageBackground ,// 앱 배경 설정 컴포넌트
  Image,
  Platform,
  Alert
} from 'react-native';

import {
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import * as D from './src/data'
import {Colors} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const avatarUrl = D.randomAvatarUrl()
const avatarSize = 50

const text = 'react native practice is fun... hello world!'
const onIconPressed = () => Alert.alert('icon pressed')



export default function App(){
  

  return (
    <SafeAreaView style = {[styles.flex]}>
      <ImageBackground // 배경 컴포넌트
        style = {[styles.flex, styles.imageBackground]}
        source = {require('./src/assets/images/bg.jpg')}
        >
          <Image source = {{uri : avatarUrl}}  style = {[styles.image]}/>

          <View style = {[styles.flex, styles.padding10]}>
            <Text style = {[styles.text, styles.regular]}>{text} [regular]</Text>
            <Text style = {[styles.text, styles.medium]}>{text} [medium]</Text>
            <Text style = {[styles.text, styles.semiBold]}>{text} [semi bold]</Text>
            <Text style = {[styles.text, styles.bold]}>{text} [bold]</Text>



          </View>

          <Icon name="home" size = {50} color = {Colors.lightBlue500} onPress = {onIconPressed}/>



        </ImageBackground>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({


  flex : {flex : 1},
  imageBackground : {flex : 1},
  image : {width : avatarSize, height : avatarSize, borderRadius : avatarSize/2},
  padding10 : {padding : 10},
  text : {textAlign : 'center',fontSize : 25 , color : 'white', marginBottom : 10},

  //font style
  regular : {fontFamily : 'DancingScript-Regular',fontWeight : '400'},
  medium : {fontFamily : 'DancingScript-Medium',fontWeight : '500'},
  semiBold : {fontFamily : 'DancingScript-SemiBold',fontWeight : '600'},

  bold : {
    fontFamily : 'DancingScript-Bold',
    fontWeight : Platform.select({ios : '700', android : '600'})
  },




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
});

