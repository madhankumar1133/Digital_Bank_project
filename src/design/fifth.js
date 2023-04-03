import react from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './fifthc.css';

export function Fifth()
{
    return(
        <>
        <div className='container-fluid p-5'>
            <div className='row bgfifth '>
                <div className='col-lg-6 text-center'><br/><br/><br/><br/>
                    <h6 className='text-secondary mt-2  text-center'>Transfers</h6><br/><br/>
                    <h1 className='text-light mt-3 text-center'>International payments for your business</h1>
                    <p className='text-light mt-5 text-center'>join thousands of businesses saving on 
                    fees with fast local and international
                    transfers</p><br/><br/><br/>
                    <button className="btn btnprififth mb-5">Get started</button>
                     <button className="btn btndarfifth text-light mb-5 ml-2">Contact sales</button>

                </div>
                <div className='col-lg-1'>&nbsp;

                </div>
                <div className='col-lg-4 p-5 mt-5 mb-5  bgdarkfifth'>
                    <div className='col-lg-12 '>

                    </div>

                </div>

            </div>

        </div>
        </>
    );
}