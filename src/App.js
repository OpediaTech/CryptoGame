import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Land from "./components/Land";
import Attack from "./Screens/Attack";

import { MetaMaskProvider } from "metamask-react";

function App() {
  return (
    <BrowserRouter>
      <MetaMaskProvider>
        <Layout>
          {/* <Land /> */}
          {/* <Attack /> */}

          {/* page route system here  */}
          <Routes>
            <Route path="/" element={<Land />} />
            <Route path="attack" element={<Attack />} />
          </Routes>
        </Layout>
      </MetaMaskProvider>
    </BrowserRouter>
  );
}

export default App;
