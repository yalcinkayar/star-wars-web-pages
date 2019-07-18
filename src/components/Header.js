import React from 'react';
import {Link} from 'react-router-dom';
import {Container,Nav,Navbar} from 'reactstrap';
 

class Header extends React.Component {
      render() {
        return (
            <nav class="menu">

            <div class="menu_right">
                <ul class="menu_list">
                    <li class="menu_list-item"><a class="menu_link" href="/home">Home</a></li>
                    <li class="menu_list-item"><a class="menu_link" href="/films">Films</a></li>
                    <li class="menu_list-item"><a class="menu_link" href="/people">People</a></li>
                    <li class="menu_list-item"><a class="menu_link" href="/species">Species</a></li>
                    <li class="menu_list-item"><a class="menu_link" href="/vehicles">Vehicle</a></li>
                    <li class="menu_list-item"><a class="menu_link" href="/starships">Starships</a></li>
                </ul>

            </div>
            </nav>
        );
      }
    }

export default Header;