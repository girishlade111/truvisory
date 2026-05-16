import React, { Component } from "react";
import "./css/PosList.css";

const repos = [
	{
		name: "VS-Code-Studio",
		description: "A browser-based code editor for HTML, CSS, and JS with live preview, built with React, TypeScript, and Monaco Editor",
		language: "TypeScript",
		url: "https://github.com/girishlade111/VS-Code-Studio",
	},
	{
		name: "research-assistant",
		description: "Multi-Agent Research Engine that transforms raw queries into structured, verified intelligence reports",
		language: "TypeScript",
		url: "https://github.com/girishlade111/research-assistant",
	},
	{
		name: "AetherCanvas-AI-Image-Generation-Studio",
		description: "AI Image Generation Studio (Ideogram Style)",
		language: "TypeScript",
		url: "https://github.com/girishlade111/AetherCanvas-AI-Image-Generation-Studio-Ideogram-Style-",
	},
	{
		name: "LS-Docs",
		description: "A feature-rich documentation editor with rich text editing, Markdown rendering, and PDF export capabilities",
		language: "TypeScript",
		url: "https://github.com/girishlade111/LS-Docs",
	},
	{
		name: "LS-Invoice",
		description: "Invoice management application built with TypeScript",
		language: "TypeScript",
		url: "https://github.com/girishlade111/LS-Invoice",
	},
	{
		name: "gitreverse",
		description: "Generates a conversational prompt grounded in repo context for AI coding assistants to understand and recreate projects",
		language: "TypeScript",
		url: "https://github.com/girishlade111/gitreverse",
	},
	{
		name: "spreadsheet-BaaS",
		description: "Spreadsheet Backend-as-a-Service platform",
		language: "JavaScript",
		url: "https://github.com/girishlade111/spreadsheet-BaaS",
	},
	{
		name: "microsoft-paint",
		description: "Browser-based paint application inspired by Microsoft Paint",
		language: "TypeScript",
		url: "https://github.com/girishlade111/microsoft-paint",
	},
	{
		name: "customer-management",
		description: "Customer management system for business operations",
		language: "TypeScript",
		url: "https://github.com/girishlade111/customer-management",
	},
	{
		name: "SpecSplit",
		description: "Specification splitting tool for development workflows",
		language: "TypeScript",
		url: "https://github.com/girishlade111/SpecSplit",
	},
	{
		name: "GB-Coder-Public-Beta",
		description: "Code editor and development environment",
		language: "TypeScript",
		url: "https://github.com/girishlade111/GB-Coder-Public-Beta",
	},
	{
		name: "Lade-Studio",
		description: "Development studio and workspace environment",
		language: "TypeScript",
		url: "https://github.com/girishlade111/Lade-Studio",
	},
];

const languageColors = {
	TypeScript: "#3178c6",
	JavaScript: "#f1e05a",
	HTML: "#e34c26",
	CSS: "#563d7c",
};

export default class TechList extends Component {
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
