# Crypted Frontend 과제

## Tabview Application 구현

- Demo
- Specs
- Installing / Getting started
- Features

### Demo

> 작업 결과물을 영상으로 확인하실 수 있습니다.

[![Cryted-tabview-demo](http://img.youtube.com/vi/fMn3YNCg4co/0.jpg)](https://youtu.be/fMn3YNCg4co)

### Specs

> package.json을 통해 dependency를 확인하실 수 있습니다.

- Node 18.12.1
- NPM 8.19.2
- react-query, axios, react-error-boundary, @geonil2/util-func 등을 추가 설치해 사용했습니다.

### Installing / Getting started

> 반드시 localhost:3000을 이용해야합니다.

1. npm install
2. npm run start <b>or</b> npm run build + serve -s build

### Features

- src 내에 위치해있던 data 디렉토리를 public 디렉토리로 옮겨 api 호출시 응답하는 mock 데이터로 활용했습니다.
- 기존 component 내에 위치해 있던 router를 useRoutes를 사용하여 분리시켰습니다.
- useGetTxList custom hook을 사용하여 반복해서 호출하는 transaction api를 공통화시켰습니다.
