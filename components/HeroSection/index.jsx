import { motion, useAnimation } from "framer-motion";
import Slider from "react-slick";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import {
  Hero,
  HeroDescription,
  Container,
  Section,
  HeaderButton,
  Heading,
  StarDiv,
  StarImg,
  ShowText,
  PeopleFaces,
  ClientLogo,
  ClientSection,
  ClientsContainer,
  ClientLogoDiv,
} from "./HeroSection.styled";
import styled from "styled-components";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { theme } from "../Theme";

const HeroSection = () => {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: theme.breakpoints.smallestMobile,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: theme.breakpoints.tablet,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: theme.breakpoints.laptop,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  const ctrls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      ctrls.start("visible");
    }
    if (!inView) {
      ctrls.start("hidden");
    }
  }, [ctrls, inView]);

  return (
    <>
      <Section id="hero-section">
        <Container>
          <Hero>
            <Heading
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              We create intelligent digital solutions that address<br></br>real-world challenges, drive growth, and<br></br>optimize operations.
            </Heading>

            <HeroDescription
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              Our technology is designed to deliver a seamless experience that unlocks new possibilities for in an ever-evolving digital landscape.
            </HeroDescription>

            <Link href="#heroContact" passHref>
              <a>
                <HeaderButton>Let&apos;s Talk</HeaderButton>
              </a>
            </Link>

            <StarDiv role="img" aria-label="5 out of 5 stars">
              <StarImg src="/images/star svg.svg" alt="" aria-hidden="true" />
              <StarImg src="/images/star svg.svg" alt="" aria-hidden="true" />
              <StarImg src="/images/star svg.svg" alt="" aria-hidden="true" />
              <StarImg src="/images/star svg.svg" alt="" aria-hidden="true" />
              <StarImg src="/images/star svg.svg" alt="" aria-hidden="true" />
            </StarDiv>

            <ShowText>We&apos;re not just promising, we&apos;re proving.</ShowText>

            <PeopleFaces src="/images/clients-intelpik.png" alt="clients profile images" />
          </Hero>
        </Container>
      </Section>

      <ClientSection>
        <ClientsContainer>
          <Slider {...settings}>
            <ClientLogoDiv aria-hidden="true">
              <ClientLogo src="/images/CLIENTS/Client1.svg" alt="Innovgrab logo" tabIndex={-1} />
            </ClientLogoDiv>
            <ClientLogoDiv aria-hidden="true">
              <ClientLogo src="/images/CLIENTS/client2.svg" alt="Dowl logo" tabIndex={-1} />
            </ClientLogoDiv>
            <ClientLogoDiv aria-hidden="true">
              <ClientLogo src="/images/CLIENTS/client03.svg" alt="Hitoq logo" tabIndex={-1} />
            </ClientLogoDiv>
            <ClientLogoDiv aria-hidden="true">
              <ClientLogo src="/images/CLIENTS/client04.svg" alt="Bellkare logo" tabIndex={-1} />
            </ClientLogoDiv>
            <ClientLogoDiv aria-hidden="true">
              <ClientLogo src="/images/CLIENTS/client05.svg" alt="Aadiveda logo" tabIndex={-1} />
            </ClientLogoDiv>
            <ClientLogoDiv aria-hidden="true">
              <ClientLogo src="/images/CLIENTS/Client06.svg" alt="Neocart logo" tabIndex={-1} />
            </ClientLogoDiv>
            <ClientLogoDiv aria-hidden="true">
              <ClientLogo src="/images/CLIENTS/client07.svg" alt="Neha group logo" tabIndex={-1} />
            </ClientLogoDiv>
            <ClientLogoDiv aria-hidden="true">
              <ClientLogo src="/images/CLIENTS/client08.svg" alt="Neotech logo" tabIndex={-1} />
            </ClientLogoDiv>
          </Slider>
        </ClientsContainer>
      </ClientSection>
    </>
  );
};

export default HeroSection;