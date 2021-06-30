import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {

    return (
        <Container>

            <Section
             title="Model S"
             description="Order Online for Touchless Delivery" 
             backgroundImg="model-3.jpg"
             leftBtnText="custom Order"
             rightBtnText="Existing inventory"
             />

            <Section
             title="Model Y"
             description="Order Online for Touchless Delivery"
             backgroundImg="model-y.jpg"
             leftBtnText="Custom order"
             rightBtnText="Existing inventory"
            />

            <Section
             title="Model 3"
             description="Order Online for Touchless Delivery" 
             backgroundImg="model-3.jpg"
             leftBtnText="Custom order"
             rightBtnText="Existing inventory"
            />
            <Section
             title="Model X"
             description="Order Online for Touchless Delivery" 
             backgroundImg="model-x.jpg"
             leftBtnText="Custom order"
             rightBtnText="Existing inventory"
            />

            <Section
             title="Lowest Cost Solar Panels in America"
             description="Money-back gurantee" 
             backgroundImg="solar-panel.jpg"
             leftBtnText="ORDER NOW"
             rightBtnText="LEARN MORE"
            />

            <Section
             title="Solat for New Roofs"
             description="Solar Roof Costs Less Than a New Roof Plus Solar Panels" 
             backgroundImg="solar-roof.jpg"
             leftBtnText="ORDER NOW"
             rightBtnText="LEARN MORE"
            />
            <Section
             title="Accessories"
             description="" 
             backgroundImg="accessories.jpg"
             leftBtnText="SHOP NOW"
             />
             
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`;