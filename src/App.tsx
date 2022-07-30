import React from "react";
import "./App.css";
import GrandParent from "./components/GrandParent";
import { store } from "./redux/store";
import { Provider } from "react-redux";
function App() {
  return 
  <Provider store={store}>
 <div className="App">
    <GrandParent/>
  </div>;
  </Provider>
 
}

export default App;
