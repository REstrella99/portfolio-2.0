import React from 'react';
import Tea from '../images/tea.svg';
import Img from '../components/Img';
import Title from '../components/Title';
import SubTitle from '../components/SubTitle';
import Section from '../components/Section';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paragraph from '../components/Paragraph';
import Character from '../images/character.png';

const About = () => (
	<div>
		<Section >
			<Grid backgroundColor="#31355b">
				<Row backgroundColor="#31355b" center="xs">
					<Col backgroundColor="#31355b" xs={12}>
						<h1 className="about">About me</h1>
						<Img backgroundColor="#31355b" className="character" src={Character} />
						<div className="dodecahedron">
							<div class="side"></div>
							<div className="side"></div>
							<div className="side"></div>
							<div className="side"></div>
							<div className="side"></div>
							<div className="side"></div>
							<div className="side"></div>
							<div className="side"></div>
							<div className="side"></div>
							<div className="side"></div>
							<div className="side"></div>
							<div className="side"></div>
						</div>
					</Col>

				</Row>
				<Row backgroundColor="#31355b" bottom="xs" center="xs">
					<Col backgroundColor="#31355b" xs={6}>
						<Img className="tea" src={Tea} sizeX="100%" sizeY="120%" max="600px" />

					</Col>
				</Row>
			</Grid>

		</Section>
	</div>
);

export default About;
