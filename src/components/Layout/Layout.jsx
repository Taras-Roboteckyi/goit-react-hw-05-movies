import { ToastContainer } from "react-toastify";

import { Wrapper, Nav, Link } from "./Layout.styled";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <Wrapper>
        <Nav>
          <Link to="/"> Home</Link>
          <Link to="/movies"> Movies</Link>
        </Nav>
      </Wrapper>
      <Outlet />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};
