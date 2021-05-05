import React from "react";
import "./playBar.scss";

const PlayBar = () => {
	return (
		<div className="playBar">
			<iframe
				className="playBar__player"
				src="https://zeno.fm/player/chatuzpark-radio"
				width="575"
				height="475"
				frameBorder="0"
				scrolling="no"
			></iframe>
		</div>
	);
};

export default PlayBar;
