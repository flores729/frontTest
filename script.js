// 변수
// 선언 과 할당 == 초기화
// 
// var 
// let 문자, 문자열, 숫자, 조건값 자동 변환 == 동적 타이핑
// ex) age = 34; -> age에 값을 할당
// const 상수
//
// null & undefined

// for in -> 객체 안에 데이터 표현시
// for of -> 배열 안에 데이터 표현시
// 객체란? 쉽게는 중괄호 안에 위한 것들

// do while문 -> 채팅구현, try catch문 시 많이 사용

// 함수 정의, 함수 호출 담당 = script.js
// 정의 -> 기능 정의
// 호출 -> 기능 실행

function sum(a, b){
    return a + b;
}
let result = sum(10, 11);
console.log(result);

// hoisting -> 위로 끌어올린다.
// 해당 기능을 가진 함수나 기능들은 어느 위치에 작성을 해도 최상단에 작성된 것으로 간주한다.
// 함수 표현식은 hoisting기능을 지원하지 않는다. 선언식은 가능
// func();
// function func(){
// }
// 가능
 
//func();
// const func = function(){
// }
// 불가능

// this = 해당 객체 맥락에 맞게 변경된다. 가장 최외각에서는 전체 브라우저창을 의미

// prototype -> object : 모든 메소드 객체를 가지고 있는 아주 큰 공간
// 일종의 부모 역할
// prototype에 정의를 통해 함수를 추가 구현 가능

// callback
// 완료시 알림
// function orderFood(food, callback){
//      console.log('${food} 조리를 시작해요');
//      setTimeout(function{console.log('${food}가 완성되었어요')}, 초*1000);
// }

// promise
// 