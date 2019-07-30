import React from 'react';
import Title from '../components/Title';
import SubTitle from '../components/SubTitle';
import Section from '../components/Section';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paragraph from '../components/Paragraph';
import Contacts from '../components/Contacts';
const Contact = () => (

	<Section backgroundColor="#31355b">
		<Grid>
			<Row center="l">
				<Col xs={12}>
					<Title>Contact me</Title>
					<br />
					><br /><br /><br /><br /><br /><br />
				</Col>

			</Row>
			<Row center="l">
				<Col xs={12}>
					<Contacts />
					<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
				</Col></Row>
		</Grid>
	</Section>

);

export default Contact;
