import Link from "next/link";
import NumericLabel from "react-pretty-numbers";

const Card = (props) => {

  return (
    <>
      <div className="card">
        <img src={props.image} className="card-img-top" width="100%" />
        <div className="card-body pt-0 px-0">
          <div className="d-flex flex-row justify-content-between px-3 pt-2">
            <div className="d-flex flex-column">
              <h5
                className="mb-0"
                style={{
                  color: "#f48a93",
                }}
              >
                {props.title}
              </h5>
            </div>
          </div>
          <div className="d-flex flex-row justify-content-between px-3 pb-2 pt-2">
            <div className="d-flex flex-column">
              <h5 className="mb-0 text-muted">Mulai Dari</h5>
            </div>
            <div className="d-flex flex-column">
              <h5 className="mb-0">
                Rp.<NumericLabel>{props.price}</NumericLabel>
              </h5>
            </div>
          </div>
          <div className="d-flex flex-row justify-content-between px-3 pt-3 mid">
            <div className="d-flex flex-column ">
              <small className="text-muted text-left">Deskripsi</small>
              <p
                className="text-left text-wrap text-truncate"
                style={{ maxWidth: 200 + "px" }}
              >
                {props.desk.replace("<p>", " ")}
              </p>
            </div>
          </div>
          <div className="mx-3 mt-3 mb-2">
            <Link
              href="/produk/[kode]/[judul]"
              as={`/produk/${props.nomor}/${props.title
                .replace(/\s+/g, "-")
                .toLowerCase()}`}
            >
              <a
                type="button"
                className="btn btn-block"
                style={{ backgroundColor: "#f48a93", color: "white" }}
              >
                <small>Detail</small>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
