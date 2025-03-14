import styled from "styled-components";
import { motion } from "framer-motion";
import { theme } from "../Theme";

export const Section = styled.section`
  width: 100vw;
  height: 100%;
  display: grid;
  place-items: center;
  grid-template-columns: 1fr;
  max-width: 100%;
  background-color: #1841ff;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
    padding-bottom: 50px;
  }
`;

export const Container = styled(motion.div)`
  height: 100%;
  width: 90%;
  max-width: 1600px;
  display: flex;
  align-items: center;
  justify-content: center; // Center content horizontally
  padding-top: 5rem;
  padding-bottom: 4rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    width: 90%;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
`;

export const Hero = styled(motion.div)`
  margin-top: 1.9rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center; // Center all child elements horizontally
  text-align: center; // Center text for all child elements

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-bottom: 0;
    margin-bottom: 70px;
  }
`;

export const Heading = styled(motion.h1)`
  font-family: "Grifter-bold", sans-serif;
  font-weight: 800;
  font-size: 3rem;
  line-height: 80px;
  letter-spacing: 1.2px;
  color: #fff2f2;
  margin: 1rem 0;
  text-align: center; // Ensure text is centered

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    font-size: 2.5rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 3rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2.5rem;
    margin: 5px 0;
  }
`;

export const HeroDescription = styled(motion.p)`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 45px;
  color: #fff2f2;
  opacity: 0.8;
  margin-top: 25px;
  text-align: center; // Ensure text is centered

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: 8px;
    width: 85%;
    line-height: 20px;
  }
`;

export const HeaderButton = styled.button`
  background-color: #fec9c1;
  color: #0d0a19;
  padding: 12px 40px; // Increased horizontal padding for expansion
  border: none;
  border-radius: 8px;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: 600;
  font-size: 22px;
  cursor: pointer;
  margin-top: 40px;
  transition: background-color 0.3s ease; // Smooth hover effect

  &:hover {
    background-color: #ffb3a8;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 12px 30px; // Slightly smaller padding on mobile
  }
`;

export const StarDiv = styled.div`
  border-top: 0.1px solid #ada9a9;
  width: 60%;
  margin-top: 80px;
  padding-top: 40px;
  padding-bottom: 15px;
  display: flex;
  justify-content: center; // Center the stars horizontally
  gap: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: 30px;
  }
`;

export const StarImg = styled.img`
  width: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 1.2rem;
  }
`;

export const ShowText = styled.p`
  color: #d9d9d9;
  font-size: 18px;
  margin-top: 20px;
`;

export const PeopleFaces = styled.img`
  margin-top: 15px;
  width: 10rem;
  height: 60px;
  object-fit: contain;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallestMobile}) {
    width: 9rem;
  }
`;

export const ClientSection = styled.section`
  width: 100vw;
  height: 100%;
  display: grid;
  place-items: center;
  grid-template-columns: 1fr;
  max-width: 100%;
  background-color: #1841ff;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ClientsContainer = styled.div`
  width: 90%;
  max-width: 1600px;
  overflow: hidden;
  padding: 30px 0px;
  background: ${theme.colors.primaryBackground};
`;

export const ClientLogoDiv = styled.div`
  display: grid;
  place-items: center;
  border: 0px;
  cursor: grab;
  height: 70px;
  padding: 10px 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 60px;
  }
`;

export const ClientLogo = styled.img``;