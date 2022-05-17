import "./App.css";
import { Redirect, Route, Switch, BrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ChatPage from "./Pages/ChatPage";
import NotFoundPage from "./Pages/NotFoundPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />{" "}
          <Route path="/chats" component={ChatPage} />{" "}
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
