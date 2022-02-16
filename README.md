# Vue-Intermediate
Vue project

## 명령어 ##
1. vue --version 안될때 -> vue.cmd --version 
  - 4.5.xx 버전에서 안됨 몇 버전부터인지 확인 안해봄
  - 참고 : https://hjh0827.tistory.com/51

2. rm -rf vue-todo
  - rm의 -rf 기증을 이용해서 프로젝트를 삭제하는 방법이 많이 나오는데 git 명령어라는 것을 알고있자.

## 시작 ##
1. vue.cmd create vue-todo 명령어 실행
2. 프로젝트 default로 생성
3. 현재위치가 workspace로 돼 있기때문에 vue-todo로 이동
4. npm run serve 실행

## NVM을 이용한 버전관리 ##
**Installing and Updating**
- https://github.com/nvm-sh/nvm
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
