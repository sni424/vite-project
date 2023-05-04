import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchCoins } from "../api";

import { useRecoilValue, useSetRecoilState } from "recoil";
import { isDarkAtom } from "../atoms";

const Container = styled.div`
    padding: 0px 20px;
    max-width: 480px;
    margin: 0 auto;
`;

const Header = styled.header`
    height: 15vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
    background-color: white;
    color: ${(props) => props.theme.textColor};
    border-radius: 15px;
    margin-bottom: 10px;
    a {
        display: flex;
        align-items: center;
        padding: 20px;
        transition: color 0.2s ease-in;
    }
    &:hover {
        a {
            color: ${(props) => props.theme.accentColor};
        }
    }
`;

const Title = styled.h1`
    font-size: 48px;
    color: ${(props) => props.theme.accentColor};
`;
const Loader = styled.span`
    text-align: center;
    display: block;
`;

const Img = styled.img`
    width: 25px;
    height: 25px;
    margin-right: 10px;
`;

interface Icon {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
}
interface ICoinsProps {}
const Coins = ({}: ICoinsProps) => {
    const changeTheam = useSetRecoilState(isDarkAtom);
    const urlLink = "https://api.coinpaprika.com/v1/coins";
    const { isLoading, data } = useQuery<Icon[]>(["allCoins"], () =>
        fetchCoins(urlLink)
    );

    // const [coins, setCoins] = useState<CoinInterface[]>([]);
    // const [loading, setLoading] = useState<boolean>(true);

    // useEffect(() => {
    //     (async () => {
    //         const respone = await fetch("https://api.coinpaprika.com/v1/coins");
    //         const json = await respone.json();
    //         setCoins(json.slice(0, 100));
    //         setLoading(false);
    //     })();
    // }, []);

    return (
        <Container>
            <Header>
                <Title>Coins</Title>
                <button
                    onClick={() => {
                        changeTheam((pre) => !pre);
                    }}
                >
                    Toggle Dark Mode
                </button>
            </Header>
            {isLoading ? (
                <Loader>"Loading..."</Loader>
            ) : (
                <CoinsList>
                    {data?.slice(0, 100).map((coins) => (
                        <Coin key={coins.id}>
                            <Link to={`/${coins.id}`} state={coins}>
                                <Img
                                    src={`https://coinicons-api.vercel.app/api/icon/${coins.symbol.toLowerCase()}`}
                                />
                                {coins.name} &rarr;
                            </Link>
                        </Coin>
                    ))}
                </CoinsList>
            )}
        </Container>
    );
};

export default Coins;
