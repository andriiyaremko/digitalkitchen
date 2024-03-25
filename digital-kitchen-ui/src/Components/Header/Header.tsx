import React from "react";
import {Button} from "antd";
import './Header.css'
import {useUserStore} from "../../Store/userStore";

const Header = () => {

    const {user, logout} = useUserStore()

    return (
        <header className='header'>
            <div className='header-name'>Digital Kitchen</div>
            {user && <Button onClick={logout}>Logout</Button>}
        </header>
    );
}

export default Header;