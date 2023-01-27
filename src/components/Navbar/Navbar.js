import React from 'react';
const navbar = () => {
    return (
        <div>
         <nav className="navbar navbar-expand-lg navbar-light ">
    <div className="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a className="navbar-brand" href="/"><img width={200} src="https://instructory.net/assets/images/logo-new-white.png" alt="img" /></a>
    <div class="collapse navbar-collapse" id="navbarNav">
    <a className='nav-link text-white-menu text-center' href="/">Course Categories</a>
    <a className='nav-link text-white-menu text-center' href="/">Become an Affiliate </a>
      <div className="navbar-nav text-white ms-auto">
       <ul className='navbar-nav text-white menu'>
        <li className='nav-item'>
          <a className='nav-link text-center' href="/">Sign in</a>
        </li>
        <li className='nav-item text-center'>
          <button className='gs text-center m-auto' href="/">Get Starat</button> 
        </li>

       </ul>
      </div>
    </div>
  </div>
</nav>
</div>
    );
};

export default navbar;