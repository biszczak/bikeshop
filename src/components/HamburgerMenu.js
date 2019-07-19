import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/HamburgerMenu.css'

const list = [
    { name: "start", path: "/", exact: true },
    { name: "products", path: "/products" },
    { name: "contact", path: "/contact" },

]



class HamburgerMenu extends Component {

    state = {
        isActive: false
    }

    toggleChecked = () => {
        if (this.state.isActive) {
            this.setState({
                isActive: false
            })
        } else {
            this.setState({
                isActive: true
            })
        }
    }



    menu = list.map(item => (
        <li key={item.name}>
            <NavLink onClick={this.toggleChecked} to={item.path} exact={item.exact ? item.exact : false}>{item.name}</NavLink>
        </li>
    ))
    render() {
        return (
            <div>
                <input type="checkbox" className="toggler" onChange={this.toggleChecked} checked={this.state.isActive} />
                <div className="hamburger"><div></div></div>
                <div className="menu">
                    <div>
                        <div>
                            <ul>
                                {this.menu}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HamburgerMenu;