const wrapperBox = document.getElementById("wrapper");
const inputFieldGroup = document.getElementsByClassName("inputGroup");
const allInput = document.querySelector("input");
const userNickname = document.getElementById("nickname");
const userEmail = document.getElementById("email");
const userPassword = document.getElementById("userPassword");
const confirmPassword = document.getElementById("confirmPassword");
const userPhone = document.getElementById("phone");
const registrationForm = document.getElementById("registrationForm");


const updateHelperText = (input, message, isValid)=>{
    const inputGroup = input.parentElement;
    // 한개의 input태그의 부모 태그에 접근하는 것
    // 예시로 input태그를 userEmail로 접근하였다고 한다면 부모인 inputGroup를 지칭
    const helperText =  inputGroup.getElementsByClassName("helperText")[0];
    // => 알림
    if(isValid == true){
        // isValid boolean 데이터
        inputGroup.classList.remove("invalid");
        inputGroup.classList.add("valid");
        helperText.style.visibility = "hidden";
    }

    if(isValid == false){
        inputGroup.classList.remove('valid');
        inputGroup.classList.add('invalid');
        helperText.style.visibility = 'visible';
        helperText.innerText = message;
    }
}

// 알림이 사용되는 것 까지는 설정을 했는데 언제 사용이 되는 지 조건을 설정하지 않음
// 입력필드가 비어있는지 확인하는 함수를 만든다

const checkEmptyInput = (input)=>{
    if(input.value.trim() === ''){
        //입력칸에 문자열중 띄어쓰기 없에는 조건
        updateHelperText(input, '값을 입력해 주세요', false);
        return false;
    }
    else{
        //입력이 있으면 도움말을 지웁니다.
        updateHelperText(input, '', true);
        return true;
    }
}

//이메일 형식을 확인하는 함수
//이메일 주소가 규칙에 맞게 작성되었는지 확인

const validateEmailFormat = (input)=>{
    const eamilPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    //email정규식 -> 이메일에 필요한 조건들을( @, .com, co.kr ) 검사 후 true/false판단
    if(eamilPattern.test(input.value.trim()) == true){
        updateHelperText(input, '', true);
        return true;
    }
    else{
        updateHelperText(input, '유효하지 않은 주소입니다.', false);
        return false;
    }
}

//비밀번호 강도 확인하는 함수

const checkPasswordStrength = (password)=>{
    const strongPattern = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;
    if(strongPattern.test(password.value) == true){
        updateHelperText(password, '비밀번호 강도: 강함', true);
        return true;
    }else{
        updateHelperText(password, '비밀번호는 8자 이상, 대소문자와 특수문자를 1개이상 포함하여야 합니다.', false);
        return false;
    }

    
}

const validPasswordMatch = (password)=>{
    if(password.value !== confirmPassword.value){
        updateHelperText(confirmPassword, '비밀번호가 일치하지 않습니다.', false);
        return false;
    }
    else{
        updateHelperText(confirmPassword, '', true);
        return true;    
    }
}

const validatePhoneNumber = (input)=>{
    const phonePattern = /^(01[016789]{1})-?[0-9]{3,4}-?[0-9]{4}$/;
    if(phonePattern.test(input.value.trim())){
        updateHelperText(input, '', true);
        return true;
    }
    else{
        updateHelperText(input, '유효한 전화번호를 입력해주세요.', false);
        return false;
    }
}

// 제출시 입력 필드가 유효한지 확인하는 함수
// 모든 항목이 충족되는 지 검토
const validateForm = ()=>{
    const isNicknameValid = checkEmptyInput(userNickname);
    const isEmailValid = validateEmailFormat(userEmail);
    const isPasswordStrong = checkPasswordStrength(userPassword);
    const isConfirmPasswordValid = validPasswordMatch(userPassword, confirmPassword);
    const isPhoneValid = validatePhoneNumber(userPhone);
    
    // 모든 대상이 true값이 나와야 회원 가입이 가능하도록 한다.
    return isNicknameValid&&isEmailValid&&isPasswordStrong&&isConfirmPasswordValid&&isPhoneValid;
}

registrationForm.addEventListener('submit',(e)=>{
    // 폼안에 submit 버튼을 눌렀을때 이벤트가 발생 = 기능 발생
    // 그 기능을 압축해서 객체{key:value}들을 모아서 e라고 한다.
    e.preventDefault();
    // 기본적으로 폼태그에서 submit버튼을 누르면 자동수행되는 기능이 존재
    // 그 중 새로고침이 존재 새로고침 시 데이터들이 전부 사라짐  
    // = 유효성 검사 불가능 -> 이를 방지
    if(validateForm() == true){
        console.log('모든 필드가 유효합니다.');
    }else{
        console.log('유효성 검사 실패')
    }
    console.log(e);
})

// 제출시 말고 태그 클릭시 알림이 뜨게 하고 싶다.
document.querySelectorAll("input").forEach(input => {
    //foreach 배열안에 데이터들을 각각 뽑아오고 싶을 때 사용
    input.addEventListener("input",()=>{
        switch(input.id){
            case "nickname":
                checkEmptyInput(input);
                break;
            case "email":
                validateEmailFormat(input);
                break;
            case "userPassword":
                checkPasswordStrength(input);
                break;
            case "confirmPassword":
                validPasswordMatch(userPassword, confirmPassword);
                break;
            case "phone":
                validatePhoneNumber(input);
                break;
        }
    })
})

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

// function sum(a, b){
//     return a + b;
// }
// let result = sum(10, 11);
// console.log(result);

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
// 완료시 알림, 실행
// function orderFood(food, callback){
//      console.log('${food} 조리를 시작해요');
//      setTimeout(function{console.log('${food}가 완성되었어요')}, 초*1000);
// }

// promise
// const orderFood = new Promise((resolve, reject)=>{
//      const isDelivered = true;
//      if(isDelivered == true){
//          resolve("");
//      }else{reject();}
// }
// resolve, reject => message(성공시), error(실패시)

// async 
// 일정 작업이 종료될때까지 대기 하며 다른일을 할 수 있다.
// callback과 비슷한 맥락, 그러나 더 많이 사용된다.
// fucntion deliverFood(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("배달완료");
//         },3000);
//     }
// }

// async function orderAndEat(){
//     console.log("order food"); 
//     const message = await deliverFood();
// }
// 비동기 프로그래밍의 일반적인 형태
// async -> 기다리는 구간이 존재한다고 알림
// await -> 완료까지 대기 후에 일들 처리, promise함수 필요

// fetch

// front->back
// post method를 통해 주로 회원가입
// create(생성)
// 데이터를 지키기 위해서 , 보안을 유지하기 위해 post사용
// post는 데이터를 암호화한다.(body에 존재하기에 안전하다는 의미 실제 암호화는x)
// body라는 본문에 데이터가 존재


// back->front
// get method를 주로 사용
// 벡엔드서버에 있던 데이터를 뿌려줄때 사용
// 있는 그대로 url에 key와 value가 보여진다.
// 보안은 불리하지만 중요도가 떨어지는 데이터의 경우 사용

// put(update)
// 존재하는 데이터 덮어쓰기
// patch를 통해 일부 수정가능
// body에 데이터가 존재
// url에 데이터가 존재하는게 아님

// delete(delete)
// 데이터 삭제시

// json -> {key:value}형태

// fetch(URL, options);
// 도메인 서버 -> 개인 서버(url) -> 컴퓨터
// option -> crud중에서 적절한 방식 선정

// local storage, session storage -> frontend에서 데이터 관리
// local <-> session
// local은 사용자가 삭제하기 전까지 영구적으로 저장, 고유한 스토리지 존재
// session는 브라우저를 닫을 때까지 유지, 각각의 도메인 마다 고유한 세션 스토리지 존재