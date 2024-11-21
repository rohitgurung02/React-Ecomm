import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import styled from "styled-components";
import { useGlobalContext } from "../Context";


const HeroSection = () => {
  const { name, image } = useGlobalContext();
  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <p className="hero-top-data">{name}</p>
          <h1 className="hero-heading">{name}</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
            sequi veritatis asperiores impedit perspiciatis a quas voluptatem
            velit alias placeat soluta fugiat, ullam illo excepturi perferendis
            magnam corporis. Error, et. Totam nobis deleniti natus pariatur
            saepe.
          </p>
          <Button className="btn hireme-btn">
            <NavLink to="/contact">hire me</NavLink>
          </Button>
        </div>
        <div className="hero-section-image">
          <picture>
            <img src={image} alt="hero-pic" className="hero-img" />
          </picture>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 3.5rem 0;

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .hero-section-image img {
    width: 100%;
  }

  .btn {
    max-width: 16rem;
  }

  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.helper};
  }

  .hero-heading {
    text-transform: uppercase;
    font-size: 6.4rem;
  }

  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  picture {
    text-align: center;
  }

  .hero-img {
    max-width: 80%;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }
`;

export default HeroSection;
