## 시작 ##
1. vue.cmd create vue-todo 명령어 실행
2. 프로젝트 default로 생성
3. 현재위치가 workspace로 돼 있기때문에 vue-todo로 이동
4. npm run serve 실행

## 명령어 ##
1. vue --version 
  - 4.5.xx 버전에서 안됨
  - -> vue.cmd --version 
  - 참고 : https://hjh0827.tistory.com/51

2. rm -rf vue-todo
  - rm의 -rf 기증을 이용해서 프로젝트를 삭제하는 방법이 많이 나오는데 git 명령어라는 것을 알고있자.


## 버전 ##
"vue": "^2.6.11"

## NVM을 이용한 버전관리 ##
- NVM을 사용한다면 여러개의 Node 를 버전별로 쉽게 관리하고 사용할 수 있다.

### Installing and Updating ###
- https://github.com/nvm-sh/nvm 접속하면 아래 설치방법과 스크립트 변경방법에 대해 자세하게 설명 되어 있다.
1. Installing
````curl
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
````
2. Update Script
````bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
````
3. 참고
  - https://github.com/joshua1988/vue-til-server#nvm-%EC%84%A4%EC%B9%98-%EB%B0%8F-%EB%B2%84%EC%A0%84-%EB%B3%80%EA%B2%BD-%EB%B0%A9%EB%B2%95
  - https://www.inflearn.com/questions/281892 (윈도우)


## 웹팩 개발 서버 ##
- ajax 방식의 api 연동은 cors 정책 때문에 반드시 서버가 필요하다.
- 프론트엔드 개발환경에서 이러한 개발용 서버를 제공해 주는 것이 webpack-dev-server다.

````js
// webpack.config.js:
module.exports = {
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    publicPath: "/",
    host: "dev.domain.com",
    overlay: true, // 에러시 브라우저에 표시 여부
    port: 8081,
    stats: "errors-only",
    historyApiFallback: true,
    open : true // 브라우저 바로 열기
  },
}
````

## ESLint ##
- JavaScript 코드에서 발견 된 문제 패턴을 식별하기위한 정적 코드 분석 도구
- prettier 기능을 이용하면 소스의 일관성을 유지할 수 있음

## 파일을 상대경로에서 절대경로로 찾기 설정 ##
- 변경 전
````vue
import chart from './components/chart'
````
- 변경 후
````vue
import chart from '@/components/chart'
````
- 참고: https://code.visualstudio.com/docs/languages/jsconfig

````js
// jsconfig.json
{ 
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
        "@/*": ["src/*"] // @이를 사용하게되면 src 폴더를 의미
    }
  },
  "exclude": ["node_modules", "dist"] // 라이브러리 경로 제외
}
````

## vue.js 스타일 가이드 ##
- 안티패턴을 피하는 좋은 참조
- 참고: https://kr.vuejs.org/v2/style-guide/index.html

## router ##
1. 설치 
  - npm i vue-router
  - "vue-router": "^3.5.3" **(vue-router 4) -> vue3부터 사용가능**
2. router 설정
  - src\router 폴더생성
  - index.js 파일 생성
  ````js
  import Vue from 'vue';
  import Router from 'vue-router';

  Vue.use(Router)

  export const router = new Router({
    routes:[
      {
        path: '/',
        component: () => import('../views/NewsView'),
      }
    ]
  })
  ````
  - main.js 파일 수정
  ````js
  import Vue from 'vue'
  import App from './App.vue'
  import { router } from './router/index.js'

  Vue.config.productionTip = false

  new Vue({
    render: h => h(App),
    router,
  }).$mount('#app')
  ````
  - App.vue 파일 생성
  ````js
  <template>
    <div id="app">
      <router-view />
    </div>
  </template>

  <script>

  export default {
    name: 'App',
    components: {
    }
  }
  </script>

  <style>
  </style>
  ````
  - views/NewsView.vue 파일 생성
  ````js
  <template>
    <div>TEST</div>
  </template>

  <script>
  export default {

  }
  </script>
  ````
  

## vuex ##
0. vuex란?
  - 상태관리 라이브러리
  - 복잡한 애플리케이션의 컴포넌트들을 효율적으로 관리하는 라이브러리

  #### Vuex가 왜 필요할까? ####
  - 복잡한 애플리케이션에서 컴포넌트의 개수가 많아지면 컴포넌트간에 데이터 전달이 어려워진다.
  ![106357521-de673400-6349-11eb-9369-cb865493f7a5](https://user-images.githubusercontent.com/24876345/156488279-02151703-3929-4555-b1fd-1399864f0b79.png)

  #### Vuex로 해결할 수 있는 문제 ####
    1. MVC 패턴에서 발생하는 구조적 오류
    2. 컴포넌트간 데이터 전달 명시
    3. 여러개의 컴포넌트에서 같은 데이터를 업데이트 할때 동기화 문제

2. 설치
  - npm i vuex

2. npm에서 확인해보면 상단에 현재 버전이 있고, 이전버전 설치를 원하면 version메뉴를 눌러서 확인하면 된다.
  ![이미지 6](https://user-images.githubusercontent.com/24876345/154449112-d1b51c46-e447-4118-83b6-16b7c946ac91.png)
  
3. vuex 설정파일은 관행적으로 store라는 폴더에 생성하고 설정한다.

4. 기술요소
  - state: 여러컴포넌트에 공유되는 데이터 data
  - getters: 연산된 state 값을 접근하는 속성 computed
  - mutaions: state 값을 변경하는 이벤트 로직, 메서드 methods
  - actions: 비동기 처리 로직을 선언하는 메서드 aysnc methods

5. 구조
  - 컴포넌트 -> 비동기로직 -> 동기로직 -> 상태
--------------------------------------------
  ![이미지 7](https://user-images.githubusercontent.com/24876345/154450846-74ea3a72-f789-43f3-bcbf-c234ec5c2ed1.png)
  

## async & await ##
- 기존의 비동기 처리 방식인 콜백 함수와 프로미스의 단점을 보완하고 개발자가 읽기 좋은 코드를 작성

#### 잠깐! 비동기처리란? ####
> 특정 코드의 연산이 끝날 때까지 코드의 실행을 멈추지 않고, 다음 코드를 먼저 실행하는 자바스크립트의 특성을 의미한다.

### 순서를 보장받지 않은 비동기 처리 코드 ###
````javascript
function logName() {
  var user = fetchUser('domain.com/users/1');
  if (user.id === 1) {
    console.log(user.name);
  }
}
````
- 위에서부터 아래로 한 줄 한 줄 차근히 읽으면서 사고하는 것이 편하다.
- 하지만, 순서를 보장받지 않았기때문에 fetchUser 함수가 끝나지 않은 상태에서 다음코드가 실행된다.

### 기존 콜백 방식인 비동기 통신 ###
````javascript
function logName() {
  var user = fetchUser('domain.com/users/1', function(user) {
    if (user.id === 1) {
      console.log(user.name);
    }
  });
}
````
- 순서를 보장받았지만, 코드가 길고 가독성도 떨어진다.

### async & await 적용 후 코드 ###
````javascript
async function logName() {
  var user = await fetchUser('domain.com/users/1');
  if (user.id === 1) {
    console.log(user.name);
  }
}
````
- async await만 붙이면 되기 때문에 코드가 짧아졌고 가독성도 좋다.
- 위에서부터 아래로 읽으면서 코드를 실행할 수 있다.

## env 설정 ##
1. .env.development 파일생성
    - ROOT 폴더에 .env.development 파일생성
    - VUE_APP_API_URL = 'http://localhost:9090' 추가 ("VUE_APP_" 접두어 필수)
2. package.json scripts 추가
    - "dev": "vue-cli-service serve --mode development",
4. 추가된 script로 실행
    - npm run dev 
