import React from 'react';
import logoBACK from '../../images/logoBACK.svg'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container h-100">
                <div className="nav h-100">
                    <div className="nav-left">
                        <img src={logoBACK} />
                        <span>Sneakers</span>
                    </div>
                    <div className="nav-right">
                        <ul className="nav-list">
                            <li className="nav-item">Главная</li>
                            <li className="nav-item">Документация</li>
                            <li className="nav-item">Добавить</li>
                            <li className="nav-item">
                                <input type="text" placeholder="Поиск..." />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;