const { default: Footer } = require("@/components/Footer");
const { default: Navbar } = require("@/components/Navbar");

const Layout = ({ children }) => {
  return (
    <>
      {" "}
      <Navbar /> {children} <Footer />{" "}
    </>
  );
};

export default Layout;
