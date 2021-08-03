import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);


  return (
    <>
      <div className="container" style={{fontFamily:"Barlow "}}>
        <div className="row">
          <div className="col-md-5 mr-auto" >
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
              onSubmit={handleSubmit(onSubmit)}
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
                    {...register("nama", { required: true })}
                  />
                  {errors.nama && <p>Masukan Nama.</p>}
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
                    id="email"
                    {...register("email", { required: true })}
                  />
                  {errors.email && <p>Masukan Email Yang Valid.</p>}
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
                    cols="30"
                    rows="7"
                    {...register("pesan", { required: true })}
                  ></textarea>
                  {errors.pesan && <p>Masukan Pesan.</p>}
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                <button
                className="btn"
                style={{ backgroundColor: "#f48a93", color: "white" }}
              >
                Kirim
              </button>
                </div>
              </div>
            </form>

            <div id="form-message-warning mt-4"></div>
            <div id="form-message-success">
              Your message was sent, thank you!
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
