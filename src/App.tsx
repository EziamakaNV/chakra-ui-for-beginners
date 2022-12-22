import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Heading, Box, Text, Button } from "@chakra-ui/react";
import "./App.css";
import { Header } from "./components/Header";
import { Pricing } from "./components/Pricing";
import { Features } from "./components/Features";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header/>
      <Pricing/>
      <Features/>
    </div>
  );
}

export default App;
