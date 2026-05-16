import React from "react";
import "./css/SocialMedia.css";
import styled from 'styled-components';

export const socialMediaLinks = {
	github: "https://github.com/girishlade111",
	linkedin: "https://www.linkedin.com/in/girish-lade-075bba201/",
	instagram: "https://www.instagram.com/girish_lade_/",
	codepen: "https://codepen.io/Girish-Lade-the-looper",
	email: "admin@ladestack.in",
	website: "https://ladestack.in",
};

export default function socialMedia() {
	return (
			<div className="social-media-div">
				<a
					href={socialMediaLinks.github}
					className="icon-button github"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i className="fab fa-github"></i>
					<span></span>
				</a>
				<a
					href={socialMediaLinks.linkedin}
					className="icon-button linkedin"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i className="fab fa-linkedin-in"></i>
					<span></span>
				</a>
				<a
					href={socialMediaLinks.instagram}
					className="icon-button instagram"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i className="fab fa-instagram"></i>
					<span></span>
				</a>
				<a
					href={socialMediaLinks.codepen}
					className="icon-button codepen"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i className="fab fa-codepen"></i>
					<span></span>
				</a>
				<a
					href={`mailto:${socialMediaLinks.email}`}
					className="icon-button email"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i className="fas fa-envelope"></i>
					<span></span>
				</a>
				<a
					href={socialMediaLinks.website}
					className="icon-button website"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i className="fas fa-globe"></i>
					<span></span>
				</a>
			</div>
	);
}
