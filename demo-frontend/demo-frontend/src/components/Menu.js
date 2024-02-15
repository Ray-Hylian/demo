import React from 'react';
import { Menubar } from 'primereact/menubar';
import { Link } from 'react-router-dom';

const Menu = () => {
    const items = [
        { label: 'Animal List', icon: 'pi pi-home', url: '/' },
        { label: 'Add Animal', icon: 'pi pi-info', url: '/add-animal' }
    ];

    return (
        <div className='card'>
            <Menubar model={items} />
        </div>
    );
};

export default Menu;
