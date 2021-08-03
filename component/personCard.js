const Cardp = (props) => {
  return (
    <a href={props.link} className="col-sm team">
      <div className="card team" style={{ border: "none" }}>
        <img
          className="rounded-circle"
          src={props.image}
          style={{ width: 200 + "px", height: 200 + "px" }}
          alt=""
        />
        <div className="card-body">
          <h5
            className="card-title"
            style={{
              color: "#f48a93",
            }}
          >
            {props.title}
          </h5>
          <p
            className="card-text"
            style={{
              color: "#f48a93",fontSize:20+"px"
            }}
          >
            {props.name}
          </p>
        </div>
      </div>
    </a>
  );
};

export default Cardp;
