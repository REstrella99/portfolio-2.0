import React, { Component } from 'react';
import ListItem from './List/ListItem';
import List from './List/List';
import { IoLogoGithub } from 'react-icons/io';
import { IoLogoLinkedin } from 'react-icons/io';

class Social extends Component {
	render() {
		return (
			<List>
				<ListItem inline>
					<a className="icons" href="https://github.com/REstrella99">
						<IoLogoGithub />
					</a>
				</ListItem>
				<ListItem inline>
					<a className="icons" href="https://www.linkedin.com/in/rafael-estrella-370724100/">
						<IoLogoLinkedin />
					</a>
				</ListItem>
			</List>
		);
	}
}

export default Social;
