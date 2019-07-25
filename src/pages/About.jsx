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

		<Row backgroundColor="#31355b">
			<Col backgroundColor="#31355b" xs>
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
				<Col xs>
					<Row>
						<Paragraph2>
							ABOUT ME<br /><br />
							The name’s RAFAEL ESTRELLA. I am a tireless<br /> seeker of knowledge, occassional purveyor of wisdom <br />and also,  coincidentally, a full-stack developer.  I maintain a <br /> healthy balance between functionality and visual impact<br /> in all my work.  I believe every piece of design can be a <br />work of art. Some of my top skills are MongoDB, Express, <br />ReactJS, Node JS, HTML5, CSS3/SASS/LESS & Javascript.<br /> <br />
							MY PHILOSOPHY<br />
							<br />
							My school of thought is reliant on schooling my thought <br />– thoroughly, regularly; keeping abreast of design,
							technology, trends and solutions. We engineers who now
							form the clay which moulds not only our external environment,
							but also our mind’s interior realm. As we enter the new geological era we're becoming perhaps unwittingly, an ecological force on a planetary scale.



						</Paragraph2>




					</Row>
				</Col>
			</Section>



		</Row>
		<Row backgroundColor="#31355b" bottom="xs" center="xs">
			<Col backgroundColor="#31355b" xs>
				<Img className="tea" src={Tea} sizeX="100%" sizeY="120%" max="600px" />

			</Col>
		</Row>

	</div>
);

export default About;
