import React from "react"
import Image from "../Images/Images"

const Carousel = () => {
  return (
    <div
      id="carouselExampleInterval"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner py-5">
        <div class="carousel-item active" data-bs-interval="3000">
          <Image
            className="d-block mx-lg-auto img-fluid"
            style={{
              margin: "0 auto",
              height: "500px",
              width: "80%",
              borderRadius: "10px",
            }}
            filename="bv1.jpeg"
            alt="1"
          />
        </div>
        <div class="carousel-item" data-bs-interval="3000">
          <Image
            className="d-block mx-lg-auto img-fluid"
            style={{
              margin: "0 auto",
              height: "500px",
              width: "80%",
              borderRadius: "10px",
            }}
            filename="bv2.jpeg"
            alt="1"
          />
        </div>
        <div class="carousel-item" data-bs-interval="3000">
          <Image
            className="d-block mx-lg-auto img-fluid"
            style={{
              margin: "0 auto",
              height: "500px",
              width: "80%",
              borderRadius: "10px",
            }}
            filename="bv3.jpeg"
            alt="1"
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Carousel
