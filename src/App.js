import Header from "./components/01_components-and-jsx/Header";
import List from "./components/01_components-and-jsx/List";
import { LIST_DATAS } from "./components/01_components-and-jsx/data/listdata";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <section id="product-list">
        <div className="center">
          <h2 className="title">PRODUCT LIST</h2>
          <div className="list-wrapper">
            <List {...LIST_DATAS[0]}></List>
            <List {...LIST_DATAS[1]}></List>
            <List {...LIST_DATAS[2]}></List>
            <List {...LIST_DATAS[3]}></List>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
