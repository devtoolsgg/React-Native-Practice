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
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

//------------------------------------ 조건에 따라 분기되는 JSX문 작성법

// 1. if문을 JSX문 바깥에 구현
// export default function App() {
//   const isLoading = true;
//   if (isLoading) {
//     return (
//       <SafeAreaView>
//         <Text>Loading....1</Text>
//       </SafeAreaView>
//     );
//   }

//   return (
//     <SafeAreaView>
//       <Text>hello jsx world~~!</Text>
//     </SafeAreaView>
//   );
// }

// 2. 조건문을 단순 평가코드로 구현
// export default function App() {
//   const isLoading = true;

//   return (
//     <SafeAreaView>
//       {isLoading && <Text>Loading...2</Text>}
//       {!isLoading && <Text>hello jsx world~!</Text>}
//     </SafeAreaView>
//   );
// }

// 3. jsx 문을 변수에 담아서 구현
// export default function App() {
//   const isLoading = true;
//   const children = isLoading ? (
//     <Text>Loading...3</Text>
//   ) : (
//     <Text>hello jsx world~!</Text>
//   );

//   return <SafeAreaView>{children}</SafeAreaView>;
// }

//------------------------------------ 배열과 JSX 구문

// 1. 배열에 담긴 jsx 렌더링 예시
// export default function App() {
//   // 자식 컴포넌트 배열로 생성
//   const children = [
//     <Text>hello world~!</Text>,
//     <Text>hello world~!</Text>,
//     <Text>hello world~!</Text>,
//   ];

//   // 반드시 부모 컴포넌트의 자식 컴포넌트 형태로 되어야함
//   return <SafeAreaView>{children}</SafeAreaView>;

//   // 아래처럼 부모 컴포넌트 없이는 실행 불가
//   // return children   <- 불가
//   // return {children} <- 불가
// }

// 2. Array.map 을 활용한 조금식 다른 자식 컴포넌트 렌더링의 예
// export default function App() {
//   const children = [1, 2, 3].map(i => <Text>hello jsx world...{i}</Text>);

//   return <SafeAreaView>{children}</SafeAreaView>;
// }

// 3. 위 같은 형식으로 100 개 컴포넌트를 렌더링
export default function App() {
  const children = new Array(100)
    .fill(null)
    .map((notUsed, i) => <Text>hello jsx world...{i}</Text>);

  return <SafeAreaView>{children}</SafeAreaView>;
}
