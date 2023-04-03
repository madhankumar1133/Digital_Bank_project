import react from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './frontc.css';
import frontimg from '../images/frontimg.png';

export function Front()
{
    return(
        <>
        <div className='bgfront container-fluid'>

        <nav className="navbar navbar-expand-lg navbar-light">
        <div className='col-lg-1'>&nbsp;</div>
  <a className="navbar text-light navvbut" href="#"><h6>Universe</h6></a>
  <a className="navbar  text-light navvbut" href="#"><h6>Personal</h6></a>
  <a className="navbar text-light navvbut" href="#"><h6>Business</h6></a>

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon bg-light"></span>
        </button>
        <div className='col-lg-6'>&nbsp;</div>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
 
            <a className="nav-item text-light ml-4" href="#">Pricing</a>
                

                        </li>
                        <li className="nav-item">
                        <a className="nav-item text-light ml-4" href="#">Help</a>
                        </li>
                        <li className="nav-item">
                        <a className="navbar-item text-light ml-4" href="#"> En</a>
                        </li>
                        
            
                     </ul>
            
                   </div>
</nav>

      
        <div className='container p-5 mt-3'>
            <div className='row p-5'>
                <div className='col-lg-5 text-light'>
                    <h1 className='text-center'>Digitize your universe bank</h1>

                </div>
                <div className='col-lg-2'>&nbsp;</div>
                <div className='col-lg-5 text-center'>
                    <p className='text-light'>Money should be easy,it is time to say goodbye to banks & financial services companies that don't work for you</p>
                    <button className='btn  bgfrontbut'>Digitize Now</button>
                </div>
                <div className='col-lg-3 mt-3'>&nbsp;

                </div>
                <div className='col-lg-6 mt-3'>
                    <img src={frontimg} className="col-lg-12" />

                </div>
                <div className='col-lg-3 mt-3'>&nbsp;

                </div>
                

            </div>

        </div>
        </div>
         
        </>

    );
}