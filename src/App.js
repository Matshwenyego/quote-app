import { useEffect, useState } from "react";
import { Container, Center } from "@mantine/core";
import { ToastContainer, Zoom } from "react-toastify";
import { get } from "./services";
import Quote from "./components/Quote";

function App() {
  const [quote, setQuote] = useState();

  const getQuote = async () => {
    const response = await get(`${process.env.REACT_APP_BASE_URL}/quotes/1`);
    setQuote(response);
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div style={{ backgroundColor: "#22B8CF" }}>
      <ToastContainer
        transition={Zoom}
        autoClose={3000}
        hideProgressBar={true}
        icon={false}
      />
      <Container>
        <Center style={{ height: "100vh" }}>
          <Quote
            author={quote ? quote.author : ""}
            content={quote ? quote.quote : ""}
            getQuote={getQuote}
          />
        </Center>
      </Container>
    </div>
  );
}

export default App;
