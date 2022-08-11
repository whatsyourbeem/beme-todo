import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button } from 'react-native';

// View는 레이아웃 역할을 하는 태그에요.
// Text 태그를 이용하면 텍스트 내용을 적을 수 있어요.
// import는 했으나 현재 App에서 사용하지 않는 ScrollView, TextInput, Button 태그에 대해서도 공부해보세요!
// React-Native의 모든 태그들은 여기를 참고하면 돼요. https://reactnative.dev/docs/components-and-apis

// App 은 "return( )" 안에 있는 내용을 결과물로 출력하는 함수에요.
// Javascript에서는 함수를 정의할 때 ()=>{함수내용} 과 같은 형태로도 사용한답니다.
const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>
        Welcome BEEMERs!
      </Text>
      <Text style={styles.contentText}>
        자, 여러분이 만든 첫 앱이에요! 놀랍지 않나요?
      </Text>
      <Text style={styles.contentText}>
        앞으로 이곳은 여러분의 빛나는 아이디어들로 채워질거에요!
      </Text>
    </View>
  );
};

// 디자인을 추가하고 싶을 땐 아래와 같이 사용해요. (우리가 보통 CSS라고 불리는 문법과 동일해요.)
// 사용할 수 있는 스타일 요소는 여기를 참고하면 돼요. https://reactnative.dev/docs/text-style-props
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00264b',
  },
  titleText: {
    color: 'white',
    fontSize: 28,
    marginTop: 30,
    marginBottom: 30,
    fontWeight: '300',
    textAlign: 'center',
  },
  contentText: {
    color: 'white',
    fontSize: 16,
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
  }
});

export default App;
