import React, {Component} from 'react';
import './style.css';

/** Module **/

/** Components **/

/** IMG **/
import SearchImg from './../../../Static/img/header/search.png';
import ArrowDownImg from './../../../Static/img/header/arrow_down.png';
import NotificationImg from './../../../Static/img/header/notification.png';
import UserIconImg from './../../../Static/img/header/user_icon.png';
import Nav1 from './../../../Static/img/header/nav_1.png';
import Nav2 from './../../../Static/img/header/nav_2.png';
import Nav3 from './../../../Static/img/header/nav_3.png';

/** Store **/
import {observer} from 'mobx-react';
import mainStore from '../../../Lib/Store/mainStore';

const Header = observer (class extends Component{
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
                    <h2>My_Site</h2>
                    <div className="header_panel align_center">
                        <div>
                            <img src={SearchImg} alt="search" className="search"/>
                            <div className="notification">
                                <img src={NotificationImg} alt="notification"/>
                                <div className="ball"/>
                            </div>
                        </div>
                        <div className="user_panel">
                            <a href="#/sign_in"><img src={UserIconImg} alt="User" className="user_icon"/></a>
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