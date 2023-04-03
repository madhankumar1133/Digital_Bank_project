import react from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './fourthc.css';
import img1 from '../images/handcard.png';
import img2 from '../images/hand.png';


export function Fourth()
{
    return(
        <>
        <div className='container-fluid p-5'>
            <div className='row bgfourth'>
                <div className='col-lg-6 '>
                    <h1 className='text-light mt-5 p-3'>Make an impression with metal</h1>
                    <p className='text-light mt-5 p-3'>Get our iconic metal cards forged from
                        stainless steel,for you and your power players.
                        Add your company name to the front for an
                        extra professional touch.Exclusively for paid
                        plans.Subject to additional fees</p><br/><br/><br/>
                    <h6 className='mt-5 p-5 mb-5'><span className='text-success '>Order a Metal card→</span></h6>

                </div>
                <div className='col-lg-6'>
                    <div className='row'>
                        <div className='col-lg-4'>

                        </div>
                        <div className='col-lg-8'>
                            <img src={img1}  className="col-lg-12"/>

                        </div>
                        <div className='col-lg-2'>&nbsp;

                        </div>
                        <div className='col-lg-8'>
                        <img src={img2}  className="col-lg-12"/>

                        </div>
                        <div className='col-lg-2'>&nbsp;

                        </div>

                    </div>

                </div>

            </div>

        </div>
        </>
    );
}