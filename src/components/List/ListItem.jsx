import styled from 'styled-components';

const ListItem = styled.li`
	display: ${(props) => (props.inline ? 'inline' : 'block')};
	margin-left: ${(props) => (props.inline ? '1rem' : '0')};
	font-size: 130%;

	a {
		color: white;
		text-decoration: none;
		font-family: 'Quattrocento', serif;
		&:hover {
			color: #5e95ec;
		}
	}
`;

export default ListItem;
