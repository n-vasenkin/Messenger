import React, {Component} from 'react';
import './style.css';

/** Module **/

/** Components **/

/** IMG **/
import SearchImg from './../../../Static/img/header/search.svg';
import ArrowDownImg from './../../../Static/img/header/arrow_down.svg';
import NotificationImg from './../../../Static/img/header/notification.svg';
import UserIconImg from './../../../Static/img/header/user_icon.svg';
import Nav1 from './../../../Static/img/header/nav_1.svg';
import Nav2 from './../../../Static/img/header/nav_2.svg';
import Nav3 from './../../../Static/img/header/nav_3.svg';

/** Store **/
import {observer} from 'mobx-react';

const Header = observer (class extends Component {

    constructor(props){
        super(props);
        this.state = {
            navigation: [
                {img: Nav1, href: '#/'},
                {img: Nav2, href: '#/table'},
                {img: Nav3, href: '#/test'},
            ],
        };
    }

    render() {
        return (
            <div>
                <header className="align_center">
                    <h2 className="header_logo">Vasen<b>King</b></h2>
                    <div className="header_panel align_center">
                        <div>
                            <img src={SearchImg} alt="search" className="search icon_header"/>
                            <div className="notification">
                                <img src={NotificationImg} alt="notification" className="icon_header"/>
                                <div className="ball"/>
                            </div>
                        </div>
                        <div className="user_panel">
                            <a href="#/sign_in">
                                <img src={UserIconImg} alt="User" className="user_icon"/>
                            </a>
                            <img src={ArrowDownImg} alt="Arrow" className="arrow_icon"/>
                        </div>
                    </div>
                </header>
                <nav>
                    {this.state.navigation.map((el,i) => {
                        return (
                            <a href={el.href} key={i}>
                                <img src={el.img} alt="nav_1"/>
                            </a>
                        )
                    })}
                </nav>
            </div>
        );
    }
});
export default Header;