const Heros = () => {
    return (
        <main className="hero container">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST YOUR FEET DESERVE THE BEST YOUR FEET DESERVE THE BEST YOUR FEET DESERVE THE BEST YOUR FEET DESERVE THE BEST</p>
            
                <div className="hero-button">
                    <button>Shop Now</button>
                    <button className="secondary-button">Category</button>
                </div>
                <div className="shop">
                    <p>Only Available On</p>
                    <div className="brand-icons">
                        <img src="/images/amazon.png" alt="amazon-logo" />
                        <img src="/images/flipkart.png" alt="flipcart-logo" />
                    </div>
                </div>
            </div>
            <div className="hero-images">
                <img src="/images/hero.png" alt="Hero-logo" />
            </div>
        </main>
    );
};

export default Heros;