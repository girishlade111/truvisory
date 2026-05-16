import React, { Component } from "react";
import "./css/PosList.css";

const repos = [
	{
		name: "personal-landing-page",
		description: "A responsive personal portfolio website built with Next.js 15 and React 19",
		language: "TypeScript",
		url: "https://github.com/girishlade111/personal-landing-page",
	},
	{
		name: "ai-agency-landing-page-and-portfolio",
		description: "AI agency landing page and portfolio template",
		language: "TypeScript",
		url: "https://github.com/girishlade111/ai-agency-landing-page-and-portfolio",
	},
	{
		name: "Artisan-Lane",
		description: "A modern e-commerce platform for artisan coffee products built with Next.js 15, with AI-powered recommendations and 3D visualizations",
		language: "TypeScript",
		url: "https://github.com/girishlade111/Artisan-Lane",
	},
	{
		name: "TriuneBeats",
		description: "Music and audio platform with modern interface",
		language: "TypeScript",
		url: "https://github.com/girishlade111/TriuneBeats",
	},
	{
		name: "new-client-proposals",
		description: "Client proposal management and presentation tool",
		language: "TypeScript",
		url: "https://github.com/girishlade111/new-client-proposals",
	},
	{
		name: "truvisory",
		description: "Truvisory is an open-source initiative designed to share top-tier learning resources covering a wide array of domains",
		language: "JavaScript",
		url: "https://github.com/girishlade111/truvisory",
	},
	{
		name: "Lade-Studio",
		description: "Development studio and workspace environment",
		language: "TypeScript",
		url: "https://github.com/girishlade111/Lade-Studio",
	},
	{
		name: "Documentary-Portfolio-Template",
		description: "A cinematic, single-file developer portfolio template inspired by documentary filmmaking aesthetics",
		language: "HTML",
		url: "https://github.com/girishlade111/Documentary-Portfolio-Template-",
	},
];

const languageColors = {
	TypeScript: "#3178c6",
	JavaScript: "#f1e05a",
	HTML: "#e34c26",
	CSS: "#563d7c",
};

export default class SelfBrandingList extends Component {
	render() {
		return (
			<div className="repo-grid">
				{repos.map((repo, index) => (
					<a
						key={index}
						href={repo.url}
						target="_blank"
						rel="noopener noreferrer"
						className="repo-card"
					>
						<div className="repo-card-header">
							<svg
								className="repo-icon"
								viewBox="0 0 16 16"
								width="20"
								height="20"
							>
								<path
									fill="currentColor"
									d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1h-8a1 1 0 00-1 1v6.708A2.486 2.486 0 014.5 9h8V1.5zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
								/>
							</svg>
							<span className="repo-name">{repo.name}</span>
						</div>
						<p className="repo-description">{repo.description}</p>
						<div className="repo-footer">
							<span className="repo-language">
								<span
									className="language-dot"
									style={{
										backgroundColor:
											languageColors[repo.language] || "#8b8b8b",
									}}
								></span>
								{repo.language}
							</span>
						</div>
					</a>
				))}
			</div>
		);
	}
}
