
> ### 설치
- npx create-react-app .
- npm i -D json-server concurrently

> ### package.json
- 추가
```
scripts{
  "json-server": "json-server --watch db.json --port 5000",
   "dev": "concurrently \"npm start\" \"npm run json-server\""
   }
```

하위에 추가
```
  "proxy": "http://localhost:5000"
  // proxy 서버 생성
```

> ### 실행
- `npm run dev`


til
```
{!loading && logs.length === 0  // loading이 true이면서 
?(<p className="center"> No logs to show...</p>) 
:(logs.map(log => <li> {log.message} </li>))}

```
Q.
useEffect : 첫번째 파라미터에는 함수, 두번째 파라미터에는 의존값이 들어있는 배열 넣어준다.
컴포넌트가 마운트 될 때 첫번째 파라미터 함수도 동작한다.


useState : 상태의 기본값을 파라미터로 넣어 호출
두번째 인자로는 setter 함수를 넣어준다.
말그대로 함수. setState 역할을 개별 state 전용으로 해주는 것이다.


> label 태그의  htmlFor = "" 
> // htmlFor 비어있으면 아예 선언을 하지 말 것.


redux is for large application, context is for small or intermediate


> starting Redux
- npm i redux react-redux redux-thunk redux-devtools-extension
