export async function fetchCoins(url: string) {
    const respone = await fetch(url);
    const json = await respone.json();
    return json;
}

export async function fetchCoinInfo(url: string) {
    const respone = await fetch(url);
    const json = await respone.json();
    return json;
}

export async function fetchCoinTickers(url: string) {
    const respone = await fetch(url);
    const json = await respone.json();
    return json;
}
