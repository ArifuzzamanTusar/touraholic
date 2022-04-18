import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useTour from '../../../Hooks/useTours';
import Pageheader from '../../Global/Pageheader/Pageheader';
import Tourloop from '../../Templates/Tourloop/Tourloop';

const TourPackages = () => {
    const [tour] = useTour();

    return (
        <div id='page-service'>
            <Pageheader title={"Our Tour Packages"} subtitle={"Grab Your Plan and fly"} ></Pageheader>
            <Container>
                <div className="all-tours py-5">

                    <Row>


                        {
                            tour.map(getTour => <Tourloop key={getTour.id} data={getTour}></Tourloop>)
                        }
                    </Row>
                </div>
            </Container>

        </div>
    );
};

export default TourPackages;