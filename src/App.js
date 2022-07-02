import "./App.css";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Orders from "./components/Orders/Orders";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import SignUp from "./components/Login/SignUp";
import { QueryClient, QueryClientProvider } from "react-query";
import ForgetPassword from "./components/Login/ForgetPassword";

function App() {
  const queryClient = new QueryClient();
  return (
    <main>
      <Header />
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </QueryClientProvider>
      <Footer />
    </main>
  );
}

export default App;
