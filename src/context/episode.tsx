import React, { useState, createContext } from 'react';

interface IPlayerEpisode {
	unix: number;
	pubDate: string;
	title: string;
	description: string;
	duration: number;
}

interface IPlayerEpisodeContext {
	playerEpisode: IPlayerEpisode;
	setPlayerEpisode: (state: IPlayerEpisode) => void;
}

export const EpisodeContext = createContext<IPlayerEpisodeContext | null>(null);

export const EpisodeProvider: React.FC<React.ReactNode> = ({ children }) => {

	const [playerEpisode, setPlayerEpisode] = useState({
		unix: 0,
		pubDate: "",
		title: "",
		description: "",
		duration: 0
	});

	return (
		<EpisodeContext.Provider value={{ playerEpisode, setPlayerEpisode }}>
			{children}
		</EpisodeContext.Provider>
	);

};