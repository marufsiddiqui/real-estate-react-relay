'use strict';

import React, {Component, PropTypes} from 'react';
import Helmet from "react-helmet";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router';
import {fbImage, appType, ogProps} from "../../config.js";

import {Card, CardTitle, CardActions} from 'react-mdl/lib/Card';
import Grid, {Cell} from 'react-mdl/lib/Grid';
import _ from 'lodash';

import CityCard from '../../components/City/CityCard';
import * as rentCitiesActions from '../../actions/rentCities';

class HousesForRentPageContainer extends Component {
    componentDidMount() {
        this.props.getRentCitiesIfNeeded();
    }

    render() {
        const cities = this.props.rentCities;
        const rent = ogProps.housesForRentPage;
        return (
            <div style={{maxWidth:"100%"}}>
                <Helmet
                    title={rent.title}
                    meta={[
                    {"name": "image", "content": `${fbImage}`},
                    {"name": "description", "content": `${rent.description}`},
                    {"property": "og:title", "content": `${rent.title}`},
                    {"property": "og:image", "content": `${fbImage}`},
                    {"property": "og:description", "content": `${rent.description}`}
                ]}
                />
                {!this.props.params.city &&
                <div>
                    <h1 style={{fontSize:34}}>Chicago North Suburbs Apartments for Rent
                    </h1>
                    <hr/>
                    { cities &&
                    <Grid>
                        {Object.keys(cities).map(city=> {
                            return (
                                <Cell
                                    col={4}
                                    key={city}>
                                    <Link to={this.props.location.pathname+ '/'+ city}
                                          style={{textDecoration:'none', color:'#393939',fontSize:18}}>
                                        {_.startCase(city.replace(/-+/, ' '))}
                                    </Link>
                                </Cell>
                            );
                        })}
                    </Grid>}
                </div>
                }

                {this.props.params.city &&
                <div>
                    {this.props.children}
                </div>
                }
            </div>
        );
    }
}
function mapStateToProps(state) {
    return state.rentCities;
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(rentCitiesActions, dispatch);
}
HousesForRentPageContainer.need = [
    rentCitiesActions.getRentCitiesIfNeeded
]
export default connect(mapStateToProps, mapDispatchToProps)(HousesForRentPageContainer);




