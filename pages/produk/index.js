import MainLayout from "../../layouts/layout"

const Detail = () => {
    return(
        <MainLayout>
        <style jsx>
            {`
                .container {
                    height : 80vh;
                }
                .title{
                    font-size: 4rem;
                }
            `}
        </style>

<div className="container">
    <div className="row">
      <div className="col-md-5">
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="/images/family-01.jpg"  className="d-block w-100" alt=""/>
              </div>
              <div className="carousel-item">
                <img src="/images/family-02.jpg" className="d-block w-100" alt=""/>
              </div>
              <div className="carousel-item">
                <img src="/images/family-03.jpg" className="d-block w-100" alt=""/>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
      </div>
      <div className="col-md-7">
          <p className="title">
            Wedding
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis optio ipsa animi saepe officia, natus libero facere similique nam consectetur soluta earum minus? Voluptates totam animi facilis ut perspiciatis saepe!
        </p>
          <button type="button" className="btn btn-primary btn-sm">Order Now</button>
      </div>
    </div>
  </div>
        </MainLayout>
    )
}

export default Detail;