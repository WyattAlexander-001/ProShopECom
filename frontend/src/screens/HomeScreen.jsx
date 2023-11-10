import {Row, Col} from 'react-bootstrap'
import products from '../products'
import Product from '../components/Product'
import React from 'react'

const HomeScreen = () => {
  return (
    <>
        <h1>Latest Products</h1>
        <Row>
            {products.map(product => (
                <Col sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                </Col>
            ))}
        </Row>
    </>
  )
}

export default HomeScreen


/*
This is a Bootstrap grid column component. The numbers inside the curly braces represent the number of columns this element should span on different screen sizes, based on Bootstrap's 12-column grid system.

- sm={12}: On small screens (like smartphones), the element will take up all 12 columns, effectively taking up the full width of the screen.
- md={6}: On medium screens (like tablets), the element will take up 6 out of 12 columns, effectively taking up half the width of the screen.
- lg={4}: On large screens (like laptops), the element will take up 4 out of 12 columns, effectively taking up a third of the width of the screen.
- xl={3}: On extra large screens (like desktop monitors), the element will take up 3 out of 12 columns, effectively taking up a quarter of the width of the screen.

This setup allows for a responsive layout that adapts to different screen sizes.
*/