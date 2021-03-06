import Head from "next/head";
import Card from "../component/productCard";
import Cardp from "../component/personCard";
import Contact from "../component/contact";
import MainLayout from "../layouts/layout";
import prisma from "../client.ts";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";

// export async function getStaticProps(context){
//     const Pernikahan = await prisma.product.findMany();
//     return{
//         props:{Pernikahan},
//     }
// }
// ssg rendering
// export async function getStaticProps(context){
//     return{
//         props:{ Pernikahan },
//     }
// }

// ssr rendering
export async function getServerSideProps(context) {
  const pernikahan = await prisma.product.findMany();
  const promo = await prisma.product.findMany({
    where: {
      promo: {
        equals: "promo",
      },
    },
  });
  console.log(promo);
  return {
    props: { pernikahan, promo },
  };
}
export default function Home(props) {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [visible, setVisible] = useState(3);

  return (
    <MainLayout>
      <div style={{ marginBottom: 20 + "px" }}>
        <Head>
          <title>Lowedding</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="jumbotron-fluid">
          <div className="fluid-container">
            <img src="/images/hero.jpg" class="img-fluid" alt="hero" />
          </div>
        </div>
        {/* <div className="banner">
        <div id="home" className="jumbotron hero"></div>
        </div> */}

        <div className="container container-story">
          <p
            className="story text-center"
            style={{ color: "#f48a93", fontFamily: "Calibri" }}
          >
            "Every love story is beautiful, but yours should be unique. We build
            your dream around you."
          </p>
        </div>

        <div id="product" className="container">
          <hr />
          <div className="row">
            <div className="col-lg-12">
              <div className="title-box">
                <h2 style={{ fontFamily: "Caveat", color: "#f48a93" }}>
                  Product
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="title">
                <h2
                  className="judul"
                  style={{ fontFamily: "Caveat", color: "#f48a93" }}
                >
                  Promo
                </h2>
              </div>
            </div>
          </div>
          <div>
            <Slider {...settings}>
              {props.promo.map((pernikahan) => (
                <div
                  className="container-fluid d-flex justify-content-center"
                  key={pernikahan.id}
                >
                  <Card
                    title={pernikahan.nama}
                    image={pernikahan.gambar}
                    price={pernikahan.harga}
                    desk={pernikahan.deskripsi}
                    nomor={pernikahan.id}
                  ></Card>
                </div>
              ))}
            </Slider>
          </div>
          <hr style={{ marginTop: 50 + "px" }} />
          <div className="row">
            <div className="col-lg-12">
              <div className="title">
                <h2
                  className="judul"
                  style={{ fontFamily: "Caveat", color: "#f48a93" }}
                >
                  Semua
                </h2>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-around flex-wrap flex-row lis">
            {props.pernikahan.slice(0, visible).map((pernikahan) => (
              <Card
                key={pernikahan.id}
                title={pernikahan.nama}
                price={pernikahan.harga}
                desk={pernikahan.deskripsi}
                image={pernikahan.gambar}
                nomor={pernikahan.id}
              ></Card>
            ))}
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="title">
              <button
                className="btn"
                style={{ backgroundColor: "#f48a93", color: "white" }}
                onClick={() => setVisible(visible + 3)}
              >
                Lebih Banyak ..
              </button>
            </div>
          </div>
        </div>
        <hr />
        <div id="about" className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-box">
                <h2 className="judul" style={{ fontFamily: "Caveat", color: "#f48a93" }}>
                  About Us
                </h2>
                <p className="about text-center">
                  We are a full-service wedding and event planning company
                  dedicated to once-in-a-lifetime celebrations. Let I Do??? make
                  your vision a reality. Whether you???re planning an intimate
                  affair, or an elaborate celebration you deserve to have a
                  coordinator that will help you every step of the way. We will
                  assist in keeping you organized, and ensure that not even the
                  smallest details get overlooked.
                </p>
              </div>
            </div>
          </div>
          
          <div className="row ">
            <Cardp
              link={"https://www.instagram.com/r.ozy.prkrs/"}
              image={"/images/CEO.jpg"}
              title={"CEO"}
              name={"Rozy Prakarsa"}
            ></Cardp>
            <Cardp
              link={"https://www.instagram.com/lailanaprl/"}
              image={"/images/COO.jpg"}
              title={"COO"}
              name={"Lailal Nur Apriliana"}
            ></Cardp>
            <Cardp
              link={"https://www.instagram.com/rikipamungkas_/"}
              image={"/images/CMO.jpg"}
              title={"CMO"}
              name={"Riki Pamungkas"}
            ></Cardp>
            <Cardp
              link={"https://www.instagram.com/satriawan.ridho/"}
              image={"/images/CTO.jpg"}
              title={"CTO"}
              name={"Ridho Satriawan"}
            ></Cardp>
          </div>
        </div>
        <div className="row" id="contact">
          <div className="col-lg-12">
            <div className="title-box">
              <h2 style={{ fontFamily: "Caveat", color: "#f48a93" }}>
                Contact Us
              </h2>
            </div>
          </div>
        </div>
        <div className="container">
          <Contact></Contact>
        </div>
      </div>
    </MainLayout>
  );
}
