import { Router, } from "@reach/router";
import Layout from "./components/layout/index"
import Home from "./views/home";


function App() {
  return (
    <>
      <Router>
        <Layout path="/">
          <Home path="/"/>
        </Layout>
      </Router>
    </>
  );
}

export default App;
