import './Desserts.css'

function Desserts() {
    return (
        <div className='page-container'>
            {/* items section */}
            <section className='items-section'>

                <h1>Desserts</h1>

                <div>
                    <div>Item 1</div>
                    <div>Item 2</div>
                    <div>Item 3</div>
                    <div>Item 4</div>
                </div>

            </section>

            {/* cart */}
            <div className='cart-container'>
                Your Cart (7)
            </div>
        </div>
    )
}

export default Desserts;