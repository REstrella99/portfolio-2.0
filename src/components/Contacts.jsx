import React, { Component } from 'react';
import ListItem from './List/ListItem';
import List from './List/List';
// import { IoLogoEmail } from 'react-icons/io';
import { IoLogoLinkedin } from 'react-icons/io';
// import { IoLogoPhone } from 'react-icons/io';

class Contacts extends Component {
    render() {
        return (
            <List>



                <ListItem inline>
                    <a>
                        RafaelEstrella99@gmail.com
					</a>
                </ListItem>


                <ListItem inline>
                    <a className="icons" href="https://www.linkedin.com/in/rafael-estrella-370724100/">
                        <IoLogoLinkedin />
                    </a>
                </ListItem>

                <ListItem inline>
                    <a>
                        Mobile Phone (347) 619-4622
					</a>
                </ListItem>
            </List>
        );
    }
}

export default Contacts;
