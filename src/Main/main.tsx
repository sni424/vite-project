import React from "react";
import styled from "styled-components";

const Father = styled.div`
    display: flex;
`;
// const Box = styled.div<{ bgColor: string }>`
//     background-color: ${(props) => props.bgColor};
//     width: 100px;
//     height: 100px;
// `;
// const Circle = styled(Box)`
//     border-radius: 50px;
// `;

const Button = styled.button``;

const Input = styled.input.attrs({ required: true, minLength: 10 })`
    background-color: tomato;
`;
const Main = () => {
    return (
        <>
            <Father>
                <Input />
                <Input />
                <Input />
                <Input />
            </Father>
            <Button as="a" href="https://www.naver.com" target="_blank">
                로그인
            </Button>
        </>
    );
};

export default Main;
