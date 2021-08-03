import Nav from "../component/nav";
import Footer from "../component/footer";
import Head from "next/head";

const MainLayout = (props) => {
  return (
    <>
      <Head>

      </Head>
      <Nav></Nav>
      {props.children}
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
