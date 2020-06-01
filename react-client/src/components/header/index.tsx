import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles.scss'

export const Header = () => {
    return (
        <header className="header">
            <div className="layout layout-header">
                <div className="header__logo"></div>
                <nav className="header__nav nav">
                    <NavLink className="nav__item" to="/" activeClassName="nav__item_active" exact>Главная</NavLink>
                    <NavLink className="nav__item" to="/reviews" activeClassName="nav__item_active">Отзывы</NavLink>
                    <a className="nav__item" href="#">Что-то еще</a>
                </nav>
            </div>
        </header>
    )
}