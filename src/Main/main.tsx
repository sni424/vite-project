import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const Father = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.bgColor};
`;

const Title = styled.h1`
    color: ${(props) => props.theme.textColor};
`;
const rotationAnimation = keyframes`
  0% {
    transform:rotate(0deg);
    border-radius:0px;
  }
  50% {
    border-radius:100px;
  }
  100%{
    transform:rotate(360deg);
    border-radius:0px;
  }
`;

const Emoji = styled.span`
    font-size: 36px;
`;
const Box = styled.div`
    height: 200px;
    width: 200px;
    background-color: tomato;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${rotationAnimation} 3s linear infinite;
    ${Emoji} {
        font-size: 36px;
        &:hover {
            font-size: 48px;
        }
        &:active {
            opacity: 0;
        }
    }
`;
const Main = () => {
    const hello: any = [];
    return (
        <Father>
            <Title>Title</Title>
        </Father>
    );
};

export default Main;
