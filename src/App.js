import logo from "./logo.svg";
import "./App.css";
import {
  deleteTodos,
  getOneTodos,
  getTodos,
  postTodos,
  putTodos,
} from "./apis/todos";

function App() {
  return (
    <div className="App">
      <div>
        <button
          onClick={() => {
            getOneTodos(2);
          }}
        >
          읽기
        </button>
        <button onClick={() => {}}>하나만 읽기</button>
        <button onClick={() => {}}>쓰기</button>
        <button onClick={() => {}}>삭제</button>
        <button onClick={() => {}}>수정</button>
      </div>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
