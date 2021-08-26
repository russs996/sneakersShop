import { Badge } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import ShopIcon from '@material-ui/icons/Shop';
import { useContext } from 'react';
import { clientContex } from '../../contexts/ClientContext';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Menu } from '@material-ui/icons';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';


const Navbar = () => {

    const { getProducts, wishLength, getWishLength } = useContext(clientContex)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const history = useHistory()



    let search = new URLSearchParams(history.location.search)
    const [searchWord, setSearchWord] = useState(search.get('q') || '')
    function handleSearchInput(params, value) {
        setSearchWord(value)
        search.set(params, value)
        search.set("_search", 1)
        history.push(`${history.location.pathname}?${search.toString()}`)
    }
    useEffect(() => {
        getProducts(history)
    }, [searchWord])

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const admin = 'adminkrasavchik@mail.com'

    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(() => {
        let user = localStorage.getItem('user')
        if (user) {
            if (user === admin) {
                setIsAdmin(true)
            }
        }
    }, [])


    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };



    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <Link to='/login' style={{
                textDecoration: "none",
                color: "black"
            }}>
                <MenuItem onClick={handleMenuClose}>Войти</MenuItem>
            </Link>
            <Link to='/register' style={{
                textDecoration: "none",
                color: "black"
            }}>
                <MenuItem onClick={handleMenuClose}>Зарегистрироваться</MenuItem>
            </Link>
        </Menu>
    );



    return (
        <div className="navbar">
            <div className="container h-100">
                <div className="nav h-100">
                    <div className="nav-left">
                        <Link to="/">
                            <span style={{ listStyleType: "none" }}>Sneakers</span>
                        </Link>
                    </div>
                    <div className="nav-right">
                        <ul className="nav-list">
                            <li id="li1" className="nav-item">Главная</li>
                            <li id="li1" className="nav-item">Документация</li>
                            <li id="li1" className="nav-item">Добавить</li>
                            <li id="li1" className="nav-item">
                                <input
                                    onChange={(e) => handleSearchInput('q', e.target.value)}
                                    type="text" placeholder="Поиск..." />
                            </li>
                        </ul>
                        <Link to="/wish" style={{ color: "#B22222", flexDirection: 'end' }} >
                            <FavoriteBorderIcon aria-label="show 4 new mails" color="black">
                                <Badge badgeContent={wishLength} color="secondary">
                                    <ShopIcon />
                                </Badge>
                            </FavoriteBorderIcon>
                        </Link>
                        <Link to='/admin'>
                            {
                                isAdmin ? (
                                    <IconButton aria-label="show 17 new notifications" color="inherit" style={{ color: '#b22222' }}>
                                        <SupervisorAccountIcon />
                                    </IconButton>
                                ) : (null)
                            }
                        </Link>
                        {renderMenu}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;