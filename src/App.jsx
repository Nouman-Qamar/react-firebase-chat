import Chat from "./components/Chat/chat";
import Detail from "./components/Detail/detail";
import List from "./components/list/List";

const App = () => {
  return (
    <div className="container">
      <List />
      <Chat />
      <Detail />
    </div>
  );
}

export default App;
