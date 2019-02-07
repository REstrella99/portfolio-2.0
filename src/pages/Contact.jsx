import React from 'react';
import Title from '../components/Title';
import SubTitle from '../components/SubTitle';
import Section from '../components/Section';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paragraph from '../components/Paragraph';
import Contacts from '../components/Contacts';
const Contact = () => (
	<div>
		<Section backgroundColor="#31355b">
			<Grid>
				<Row center="xs">
					<Col xs={12}>
						<Title>Contact me</Title>
					</Col>

				</Row>
				<Row center="xs">
					<Col xs={12}>
						<Contacts />
					</Col></Row>
			</Grid>
		</Section>
	</div>
);

export default Contact;
