import React, { useState, createContext } from 'react';

interface IEpisode {
	unix: number;
	pubDate: string;
	title: string;
	description: string;
	duration: number;
}

interface IEpisodeContext {
	episode: IEpisode;
	setEpisode: (state: IEpisode) => void;
}

export const EpisodeContext = createContext<IEpisodeContext | null>(null);

export const EpisodeProvider: React.FC<React.ReactNode> = ({ children }) => {

	const [episode, setEpisode] = useState({
		unix: 0,
		pubDate: "",
		title: "",
		description: "",
		duration: 0
	});

	return (
		<EpisodeContext.Provider value={{ episode, setEpisode }}>
			{children}
		</EpisodeContext.Provider>
	);

};