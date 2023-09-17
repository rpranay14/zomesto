import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import MainComponent from "./Components/MainComponent";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { configureStore } from "./redux/configureStore";
import { Provider } from "react-redux";
const queryClient = new QueryClient();
const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <MainComponent />
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
