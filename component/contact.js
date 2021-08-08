import React, { useState } from "react";
import emailjs from "emailjs-com";
import SweetAlert from "sweetalert-react";
import 'sweetalert/dist/sweetalert.css';
import { useForm } from "react-hook-form";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [result, showresult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("gmail", "basic", e.target, "user_OYF1lYYjCHB8GGD1ziTPz")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showresult(true);
  };

  return (
    <>
      <div className="container" style={{ fontFamily: "Barlow " }}>
        <div className="row">
          <div className="col-md-5 mr-auto">
            <p className="mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
              quaerat autem corrupti asperiores accusantium et fuga! Facere
              excepturi, quo eos, nobis doloremque dolor labore expedita illum
              iusto, aut repellat fuga!
            </p>

            <ul className="list-unstyled pl-md-5 mb-5">
              <li className="d-flex  mb-2">
                <span className="mr-3">
                  <span className="icon-map"></span>
                </span>{" "}
                34 Street Name, City Name Here, <br /> United States
              </li>
              <li className="d-flex  mb-2">
                <span className="mr-3">
                  <span className="icon-phone"></span>
                </span>{" "}
                +1 (222) 345 6789
              </li>
              <li className="d-flex">
                <span className="mr-3">
                  <span className="icon-envelope-o"></span>
                </span>{" "}
                info@mywebsite.com{" "}
              </li>
            </ul>
          </div>

          <div className="col-md-6">
            <form
              className="mb-5"
              method="post"
              id="contactForm"
              name="contactForm"
              onSubmit={sendEmail}
            >
              <div className="row">
                <div className="col-md-12 form-group">
                  <label htmlFor="name" className="col-form-label">
                    Nama
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="nama"
                    {...register("nama", { required: true })}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 form-group">
                  <label htmlFor="email" className="col-form-label">
                    Email
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    id="email"
                    {...register("nama", { required: true })}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 form-group">
                  <label htmlFor="Nomor Hp" className="col-form-label">
                    Nomor Hp
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="nomor"
                    id="nomor"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-12 form-group">
                  <label htmlFor="message" className="col-form-label">
                    Pesan
                  </label>
                  <textarea
                    className="form-control"
                    name="message"
                    id="message"
                    cols="20"
                    rows="5"
                  ></textarea>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <button
                    className="btn"
                    style={{ backgroundColor: "#f48a93", color: "white" }}
                    type="submit"
                  >
                    Kirim
                  </button>
                </div>
              </div>
              <SweetAlert
                show={result}
                title="terimakasih"
                text="Pesan anda telah terikirim, kami akan menghubungi anda segera"
                onConfirm={() => showresult(false)}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
