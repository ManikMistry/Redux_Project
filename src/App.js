import "./App.css";
import { Provider } from "react-redux";
import store from "./reduxContainer/BookStore";
import BookContainer from "./reduxContainer/BookContainer";
function App() {
  return (
    <>
    <h1>Redux learn</h1>
    <Provider store={store}>
      <div className="App">
        <BookContainer />
      </div>
    </Provider>
    </>
  );
}

export default App;
