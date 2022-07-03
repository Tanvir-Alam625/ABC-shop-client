import "./App.css";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home/Home";
import Orders from "./components/Orders/Orders";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import SignUp from "./components/Login/SignUp";
import { QueryClient, QueryClientProvider } from "react-query";
import ForgetPassword from "./components/Login/ForgetPassword";
import RequireAuth from "./components/shared/RequireAuth";

function App() {
  const queryClient = new QueryClient();
  const location = useLocation();
  return (
    <main>
      {/* conditional rendering header  */}
      {location.pathname === "/" || location.pathname === "/orders" ? (
        <Header></Header>
      ) : (
        <></>
      )}
      {/* all routes  */}
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/orders"
            element={
              <RequireAuth>
                <Orders />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </QueryClientProvider>

      {/* conditional rendering footer  */}
      {location.pathname === "/" || location.pathname === "/orders" ? (
        <Footer></Footer>
      ) : (
        <></>
      )}
    </main>
  );
}

export default App;
