import MessageList from "./components/MessageList";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import MessageDetails from "./components/MessageDetails";

function App() {
  return (
    <Routes>
      <Route index element={<Home />}></Route>
      <Route path="messages" element={<MessageList />}></Route>
      <Route path="messages/:id" element={<MessageDetails />}></Route>
    </Routes>
  );
}

export default App;
