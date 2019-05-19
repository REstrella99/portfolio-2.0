import React from 'react';
import Tea from '../images/tea.svg';
import Img from '../components/Img';
import Title from '../components/Title';
import SubTitle from '../components/SubTitle';
import Section from '../components/Section';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paragraph from '../components/Paragraph';
import Character from '../images/character.png';
import Paragraph1 from '../components/Paragraph1';
import Paragraph2 from '../components/Paragraph2';
import Paragraph3 from '../components/Paragraph3';





const About = () => (
	<div>
		<Section >
			<Grid backgroundColor="#31355b">
				<Row backgroundColor="#31355b" center="xs">
					<Col backgroundColor="#31355b" xs={12}>
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







					<Section>
						<Col xs={24}>
							<Row xs="left">

								<Paragraph1>
									ABOUT ME<br /><br />
									The name’s RAFAEL ESTRELLA. I am a tireless seeker of knowledge, occassional purveyor of wisdom and also,  coincidentally, a full-stack developer.  I maintain a healthy balance between functionality and visual impact in all my work.  I believe every piece of design can be a work of art.
										<br />
									<br />
								</Paragraph1>
							</Row>
						</Col>
					</Section>

					<Section>
						<Col xs={12}>
							<Row xs="right">
								<Paragraph2>
									MY PHILOSOPHY<br />
									<br />
									My school of thought is reliant on schooling my thought – thoroughly, <br />regularly; keeping abreast of design,   technology, trends and solutions.
										</Paragraph2>
							</Row>
						</Col>

					</Section>
					<Section>
						<Paragraph3>
							THE CREDS
											<br />
							<br />
							Full-Stack Engineering Coding Bootcamp <br /> Columbia University - 2018, <br /> COMPTIA A+ Certification - 2009
										<br />
							I am a graduate of the full-stack program at <br />the prestigious Columbia University in New York City. <br /> I should hope my work reflects that <i className="devicon-atom-original"></i>

						</Paragraph3>
					</Section>
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
