import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useTour from '../../../Hooks/useTours';
import Tourloop from '../../Templates/Tourloop/Tourloop';
import HeroSlider from './HeroSlider';
import { Link } from "react-router-dom";

const Home = () => {
    const [tour] = useTour();
    return (
        <div id="page_home">
            <HeroSlider></HeroSlider>
            <div className="py-5"></div>
            <div className="heading text-center">
                <h2 className="title">Popular Tour Packages</h2>
                <p>Look deep into nature, and then you will understand everything better. Get your dream travel today</p>

            </div>

            <div className="py-5">
                <Container>
                    <Row>

                        {
                            tour.slice(0, 3).map(getTour => <Tourloop key={getTour.id} data={getTour}></Tourloop>)
                        }
                    </Row>
                    <div className="readmore text-center py-3">
                        <Link className='btn btn-outline-light' to={'/tour-packages'}>See  More</Link>
                    </div>


                </Container>
            </div>

        </div>
    );
};

export default Home;