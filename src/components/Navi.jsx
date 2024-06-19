const Navi = () =>{
    return (
        <nav className="container">
        <div clasName="logo">
          <img src="/images/brand_logo.png" alt="Logo" />
        </div>
          <ul>
            <li href="#">Home</li>
            <li href="#">About</li>
            <li href="#">Services</li>
            <li href="#">Contact</li>
          </ul>
          <button>
            Login
          </button>
      </nav>
    );
};

export default Navi;