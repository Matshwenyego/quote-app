import { useEffect, useState } from "react";
import { Container, Center } from "@mantine/core";
import { get } from "./services";
import Quote from "./components/Quote";

function App() {
  const [quote, setQuote] = useState();

  const getQuote = async () => {
    const response = get(`${process.env.REACT_APP_BASE_URL}/random`);
    setQuote(await response);
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div style={{ backgroundColor: "#22B8CF" }}>
      <Container>
        <Center style={{ height: "100vh" }}>
          <Quote
            author={quote ? quote.author : ""}
            content={quote ? quote.content : ""}
            getQuote={getQuote}
          />
        </Center>
      </Container>
    </div>
  );
}

export default App;
