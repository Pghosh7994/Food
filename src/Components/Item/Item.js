import React from 'react';
import './Item.css'
import { Button, Card, CardGroup, Col, Row } from 'react-bootstrap';

const Item = (props) => {
    console.log(props.item);
    const { item, price, quntity, img } = props.item;
    return (
        <div>
            {/* <CardGroup> */}
            <Card style={{ width: '18rem' }} className="card">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{item}</Card.Title>
                    <Card.Text>${price}</Card.Text>
                    <Card.Text>{quntity}</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            {/* </CardGroup> */}
        </div>





        // <div>
        //     <div className='container'>
        //         <div className='row'>
        //             <div className='col-sm'>
        //                 <div className='card'>
        //                     <img></img>
        //                     <div className='card-body'>
        //                         <h5 className='card-title'>card title</h5>
        //                         <p className='card-text'>vguhyfgch</p>
        //                         <a href='#' className='btn btn-primary'>go</a>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div >
    );
};

export default Item;