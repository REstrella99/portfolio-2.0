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
	<div backgroundColor="#31355b">

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







			<Section backgroundColor="#31355b">
				<Col xs>
					<Row>
						<Paragraph2><br /><br />
							The name’s RAFAEL ESTRELLA. I am a tireless seeker of knowledge, occassional purveyor of wisdom and also,  coincidentally, a full-stack developer.  I maintain a healthy balance between functionality and visual impact in all my work.  I believe every piece of design can be a work of art. Some of my top skills are MongoDB, Express, ReactJS, Node JS, HTML5, CSS3/SASS/LESS & Javascript.<br /> <br />
							<br />
							{/* <br />
							As an innovative student and learner of
							technology, avid problem solver in solutions an engineer has risen, me.  I've mastered the clay which moulds not only our external environment,
							but also our mind’s interior realm.  */}



						</Paragraph2>




					</Row>
				</Col>
			</Section>



		</Row>
		<Row backgroundColor="#31355b" center="xs">
			<Col backgroundColor="#31355b" xs>
				<Img className="tea" src={Tea} sizeX="100%" sizeY="101%" max="600px" />

			</Col>
		</Row>

	</div>
);

export default About;
