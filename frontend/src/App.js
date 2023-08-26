import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import MainComponent from "./Components/MainComponent";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <MainComponent />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
