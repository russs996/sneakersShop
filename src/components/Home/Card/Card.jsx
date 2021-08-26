import { motion, useMotionValue, useTransform } from "framer-motion";
import React, { useContext } from "react";
import styled from "styled-components";
import { Marginer } from "./marginer";
import './Card.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { clientContex } from "../../../contexts/ClientContext";
import { IconButton } from '@material-ui/core';
import { Comment } from "@material-ui/icons";
import { Link } from "react-router-dom";


const CardWrapper = styled.div`
  width: 100%;
  perspective: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardContainer = styled(motion.div)`
  width: 285px;
  height: 450px;
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  box-shadow: 0 4px 7px 7px rgba(31, 31, 31, 30%);
  background-color: #1d1f21;
  color: #fff;
  position: relative;
  cursor: grab;
`;

const CircleWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  overflow: hidden;
  border-top-right-radius: 25px;
`;

const Circle = styled.div`
  position: absolute;
  width: 350px;
  height: 350px;
  top: -4.2em;
  right: -10em;
  z-index: 5;
  background-color: #B22222;
  border-radius: 50%;
`;

const TopContainer = styled.div`
  // width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1.2;
  position: relative;
  align-items: center;
  justify-content: flex-end;
  padding: 1em 15px;
`;

const BottomContainer = styled.div`
  display: flex;
  flex: 0.8;
  padding: 0 1em;
`;

const NikeText = styled.h1`
  color: #fff;
  text-transform: uppercase;
  margin: 0;
  z-index: 10;
  font-size: 56px;
  font-weight: 900;
`;

const ShoesWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Shoes = styled(motion.div)`
  width: auto;
  height: 190px;
  z-index: 99;
  user-select: none;
  margin-right: 3em;
  margin-top: 0em;
  img {
    width: auto;
    height: 60%;
    user-select: none;
  }
`;

const DetailsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2.5em 6px 0 6px;
  line-height: 1.4;
`;

const MediumText = styled.span`
  font-size: 18px;
  color: #fff;
  font-weight: 800;
  text-transform: uppercase;
`;

const SmallText = styled.span`
  font-size: 11px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
`;

const SpacedHorizontalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BuyButton = styled.button`
  padding: 10px 16px;
  background-color: #B22222;
  color: #000;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 700;
  border: 3px solid transparent;
  outline: none;
  cursor: pointer;
  transition: all 290ms ease-in-out;
  border-radius: 8px;
  &:hover {
    background-color: transparent;
    color: #fff;
    border: 3px solid #B22222;
  }
`;


function Card({ product }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);
  const { addProductInWish, checkProductInWish } = useContext(clientContex)


  return (
    <CardWrapper style={{ width: '300px', }}>
      <CardContainer
        id="card1"
        style={{ x, y, rotateX, rotateY, z: 100, marginTop: '30px', marginBottom: '50px' }}
        drag
        dragElastic={0.16}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileTap={{ cursor: "grabbing" }}
      >
        <TopContainer>
          <CircleWrapper>
            <Circle />
          </CircleWrapper>
          <ShoesWrapper>
            <Shoes
              style={{ x, y, rotateX, rotateY, rotate: "-25deg", z: 100000 }}
              drag
              dragElastic={0.12}
              whileTap={{ cursor: "grabbing" }}
            >
              <img id="img1" src={product.image} />
            </Shoes>
          </ShoesWrapper>
          <NikeText id="ttex">SNEAK SHOP</NikeText>
        </TopContainer>
        <BottomContainer>
          <DetailsContainer>
            <SmallText>{product.title}</SmallText>
            <SpacedHorizontalContainer>
              <MediumText>{product.model}</MediumText>
              <MediumText>{product.price}$</MediumText>
            </SpacedHorizontalContainer>
            <Marginer direction="vertical" margin="1.2em" />
            <SpacedHorizontalContainer>
              <MediumText>{product.description}</MediumText>
              <Link to={`/detail/${product.id}`}>
                <IconButton style={{ color: 'white' }}>
                  <Comment />
                </IconButton>
              </Link>
              <IconButton
                aria-label="share"
                color={checkProductInWish(product.id) ? "secondary" : "inherit"}
                onClick={() => addProductInWish(product)}>
                <FavoriteBorderIcon />
              </IconButton>
              <BuyButton id="button1">BUY</BuyButton>
            </SpacedHorizontalContainer>
          </DetailsContainer>
        </BottomContainer>
      </CardContainer>
    </CardWrapper>
  );
}

export default Card;
