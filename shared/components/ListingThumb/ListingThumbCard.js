import React, {Component, PropTypes} from 'react';
import cx                              from 'classnames';
import {Card, CardTitle, CardText, CardActions} from 'react-mdl/lib/Card';
import Grid, {Cell} from 'react-mdl/lib/Grid';

if (process.env.BROWSER) {
    require('./ListingThumbCard.less');
}

export default class ListingThumbCard extends Component {

    render() {

        const house = this.props.house
        const housePrice = house.price.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");

        return (
            <Card className="ListingThumbCard" shadow={0}>
                <ul style={{margin:0,padding:'16px 0px'}}>
                    <li style={{display:'inline-block',margin:'0px 8px'}}>

                        {house.images &&
                        <div
                            style={{width: 220,height:'auto',minHeight:150,  background:  `url(${house.images[0]}) center / cover`} }>
                        </div>
                        }

                        {!house.images &&
                        <img
                            src='http://res.cloudinary.com/svitlana/image/upload/v1453494429/house-picture-icon_og71rx.png'
                            alt={house.address.street} style={{width:200,height:'auto'}}/>
                        }
                    </li>
                    <li style={{display:'inline-block',verticalAlign:'top',margin:'0px 8px'}}>
                        <h4 className="ListingThumbCard__address">
                            {house.address.street}, {house.address.city}, {house.address.zip}
                        </h4>

                        <p className="ListingThumbCard__price">
                            ${house.price.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}
                        </p>
                        <p>
                            {house.type}
                        </p>
                        <p>
                            {house.beds &&
                            <span> {house.beds} beds, </span>
                            }

                            {house.bath &&
                            <span> {house.bath} baths, </span>
                            }
                        </p>
                        <p>
                            {house.year &&
                            <span>Year: {house.year} </span>
                            }
                        </p>
                    </li>
                </ul>
            </Card>
        );
    }
}
