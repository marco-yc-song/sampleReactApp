import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';



//ReactDOM이 App클래스 내용를 document의 root에 추가함
//react application은 하나의 컴포넌트만 렌더링해야함
ReactDOM.render(<App />, document.getElementById('root'));
