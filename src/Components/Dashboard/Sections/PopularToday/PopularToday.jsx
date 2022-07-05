import React, { useEffect, useState } from 'react';
import './PopularToday.css';
import axios from 'axios';

function PopularToday() {
	const [PopularTokens, setPopularTokens] = useState();
	const [CoinElements, setCoinElements] = useState();

	useEffect(() => {
		axios
			.get('https://api.coingecko.com/api/v3/search/trending')
			.then((result) => {
				console.log(result.data.coins);
				const AllCoins = result.data.coins.map((Coin) => {
					return (
						<div className="CoinContainer">
							<span className="CoinLeftSide">
								<img src={Coin.item.thumb} />
								<h3 className="CoinName">{Coin.item.name}</h3>
							</span>
						</div>
					);
				});
				setPopularTokens(AllCoins);
			})
			.then(() => {
				console.log(PopularTokens);
			});
	}, [PopularToday]);

	return (
		<div className="PTParentContainer">
			<span className="MoreButtonContainer">
				<h2>Most Popular</h2>
			</span>

			<div className="CoinsContainer">{PopularTokens}</div>
		</div>
	);
}

export default PopularToday;
