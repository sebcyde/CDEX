import React from 'react';
import './PopularToday.css';
import { Button } from 'react-materialize';

function PopularToday() {
	return (
		<div className="PTParentContainer">
			<span className="MoreButtonContainer">
				<Button flat node="button" waves="light">
					<span class="material-symbols-outlined PTMoreButton">
						expand_more
					</span>
				</Button>
			</span>
		</div>
	);
}

export default PopularToday;
