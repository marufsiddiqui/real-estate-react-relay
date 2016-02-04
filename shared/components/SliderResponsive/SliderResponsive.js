import React from 'react';
import Slider from 'react-slick';

if (process.env.BROWSER) {
    require('./SliderResponsive.less');
}
export default class SliderResponsive extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        };
        return (
            <Slider {...settings}>
                <div >
                    <h3 className="SliderResponsive__slide-content">1</h3>
                </div>
                <div>
                    <h3 className="SliderResponsive__slide-content">2</h3>
                </div>
                <div>
                    <h3 className="SliderResponsive__slide-content">3</h3>
                </div>
                <div>
                    <h3 className="SliderResponsive__slide-content">4</h3>
                </div>
                <div>
                    <h3 className="SliderResponsive__slide-content">5</h3>
                </div>
                <div>
                    <h3 className="SliderResponsive__slide-content">6</h3>
                </div>
            </Slider>
        )
    }

}