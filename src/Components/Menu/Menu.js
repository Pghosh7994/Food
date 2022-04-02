import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
// import { Button, Card, CardGroup } from 'react-bootstrap';

const Menu = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('./Item.JSON')
            .then(res => res.json())
            .then(data => setItems(data));
    })
    return (
        <div>
            {
                items.map(item => <Item item={item}
                ></Item>)
            }
        </div>
    );
};

export default Menu;