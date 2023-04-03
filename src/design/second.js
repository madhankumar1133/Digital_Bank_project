import react from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './secondc.css';

export function Second()
{
    return(
        <>
        <div className='container-fluid '>
            <div className='row p-5'>
                <div className='col-lg-4 mt-5 text-center'><br/><br/><br/><br/>

                    <h1 className='text-center mt-5'>We keep your money safe</h1>
                    <p className='mt-3'>keep your money safe with our anti-fraud system .all
                        our cards support 3D secure and our contactless card limits help fight contactless fraud
                    </p>
                    <button className='btn btn-success mt-2 secbtn'>see how</button>

                </div>
                <div className='col-lg-1'>&nbsp;</div>
                <div className='col-lg-7'>
                    <div className='row'>
                        <div className='col-lg-5 bgsecbox p-4 '>
                            <h3>Card spending you control</h3>
                            <p >You're the boss.Set limits,track,freeze/unfreeze
                                and decide where cards can be used.Expenses
                                automatically remind staff to submit recepts;it'safe
                                bookkeeping made easy</p><br/>

                                <h6><span className='text-success'>Discover Expenses  → </span></h6>

                        </div>
                        <div className='col-lg-2'>&nbsp;

                        </div>
                        <div className='col-lg-5 bgsecbox p-4'>

                        <h3>Spend like a local on debit cards with great FX rates</h3>
                            <p >Our company cards can go the distance abroad.
                                Spend like a local worldwide in 150 currencies
                                with FX at the real exchange rate</p><br/>

                                <h6><span className='text-success'>Learn more about Exchanges→</span></h6>

                        </div>
                        <div className='col-lg-5 bgsecbox mt-3 p-4'>
                        <h3>stay secure online with virtual debit cards</h3>
                            <p >Get added protection from online fraud with
                                virtual cards-each team member can get up to
                                200.Perfect for tracking subscriptions and others
                                online payment</p><br/>

                                <h6><span className='text-success'>Get started→</span></h6>

                        </div>
                        <div className='col-lg-2'>&nbsp;

                        </div>
                        <div className='col-lg-5 bgsecbox mt-3 p-4'>
                        <h3>Empower your team with company debit cards</h3>
                            <p >However big or small your team is,our company
                                cards have got you covered.spend securely with
                                physical and virtual debit cards that you control</p><br/>

                                <h6><span className='text-success'>Get started→</span></h6>

                        </div>

                    </div>

                </div>

            </div>

        </div>
        </>
    );
}