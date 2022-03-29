/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native'

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen'


// 클래스형, 함수형 컴포넌트의 적용
import ClassComponent from './src/screens/ClassComponent'
import ArrowComponent from './src/screens/ArrowComponents'

// 속성 전달하기
import Person from './src/screens/Person'
import * as D from './src/data'
const personParents = D.createRandomPerson()

// export default function App() {
//   return (
//     <SafeAreaView>
//       <ClassComponent/>
//       <ArrowComponent/>
//       <Person person = {personParents} />
//     </SafeAreaView>
//   )
// }


// scrollview 적용해보기
const people = D.makeArray(100).map(D.createRandomPerson)

export default function App() {

  const children = people.map((person) => (

    // 모든 자식 컴포넌트는 구분할수있는 키값이 필요하다.
    <Person key={person.id} person={person}/>

  ))


  return (
    <SafeAreaView>
      <ScrollView>

        {children}

      </ScrollView>
    </SafeAreaView>
  )
}
