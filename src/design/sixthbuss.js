import react from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sixthbussc.css';
import siximg  from '../images/siximg1.png';
import siximg2 from '../images/siximg2.png';
import siximg3 from '../images/siximg3.png';
import siximg4 from '../images/siximg4.png';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {faDollar} from '@fortawesome/free-solid-svg-icons';

export function Sixthbuss()
{
    return(
        <>
        <div className='container-fluid sixbg '>
          <div className='container '>

           
            <div className='row'>
                <div className='col-lg-12 mt-5'>
                    <p className='text-light text-center mt-5'>Team work makes the dreamwork

                    </p>
                    <h1 className='text-light text-center'> Discover the meaning of efficiency with Universe Bussiness</h1>

                </div>
                {/* first temp */}
                <div className='col-lg-5 mt-5 bgsixfirst  '>
                    <div className='col-lg-12  p-3'>
                        <h3 className='p-2'>sebd and receive without borders </h3>
                        <h6 className='p-2'>Explore Payments</h6>
                        <div className='row'>

                        
                        <div className='col-lg-2'>&nbsp;

                        </div>
                        <div className='col-lg-8 mt-4'>
                            <img src={siximg}  className="col-lg-12"/>


                        </div>
                        <div className='col-lg-2'>&nbsp;

                        </div>
                        </div>

                    </div>

                </div>
                <div className='col-lg-1'>&nbsp;</div>
                <div className='col-lg-6 mt-5 bgsixsecond '>
                <div className='col-lg-12  p-2'>
                        <h3 className='p-2 text-light'>Invoices that work smarter</h3>
                        <h6 className='p-2 text-success'>Learn more about Invoices</h6>
                        <div className='row'>

                        
                        <div className='col-lg-2'>&nbsp;

                        </div>
                        <div className='col-lg-8 mt-5'>
                            <img src={siximg2}  className="col-lg-12"/>


                        </div>
                        <div className='col-lg-2'>&nbsp;

                        </div>
                        </div>

                    </div>

                </div>

            </div>
          </div>
          <div className='container mt-5'>
            <div className='row'>
                <div className='col-lg-8 bgsixthird text-light p-4'>
                    <h3>Smart company debit cards help
                            you and your team go further</h3>
                            <h6 className='text-primary mt-3'>Learn more about Cards</h6>
                            <div className='row'>
                                <div className='col-lg-4'>&nbsp;

                                </div>
                                <div className='col-lg-8'>
                                <img src={siximg3}  className="col-lg-12"/>

                                </div>

                            </div>

                </div>
                <div className='col-lg-1'>&nbsp;

                </div>
                <div className='col-lg-3 bgsixthird'>
                <h3 className='text-light'>Exchange,sendand spend at greatrates</h3><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <h6 className='text-success mt-5'>Explore Exchanges</h6>
                    

                </div>

            </div>

          </div>
          <div className='container mt-5'>
            <div className='row'>
                <div className='col-lg-12 bgsixthird'>
                    <div className='row p-5'>
                        <div className='col-lg-6 mt-5'>
                        <h3 className='text-light'>Set and change team permissions with a tap</h3>

                        <p className='text-light mt-4'>Stay in total control of your team's spending by
                        managing their permissions and levels of access
                        Create custom roles and choose the combination of
                        apps and features you want them to use</p>
                            <h6 className='text-success mt-5 mb-5'>Discover Revolut Bussiness  →</h6>

                        </div>
                        <div className='col-lg-1'>&nbsp;

                        </div>
                        <div className='col-lg-5'>
                        <img src={siximg4}  className="col-lg-12"/>
                    
                        </div>

                    </div>


                </div>

            </div>

          </div>
          <div className='cotainer mt-5 '>
            <div className='row '>
                <div className='col-lg-12 text-center mt-3'>
                <h1 className='text-light mb-5'>Control all yours spend with smartrules</h1>


                </div>
                


                <div className='col-lg-12'>
                    <div className='row mt-1 '>
                    <div className="col-lg-3">&nbsp;</div>
                <div className="col-lg-6  text-center">
                 <div className="bg-light col-lg-12 p-4 mt-2 sixbox">
                  <div className="row ">
                    <div className="col-lg-2 text-center  text-danger">
                        <FontAwesomeIcon icon={faDollar} />
                
                    </div>
                    <div className="col-lg-3  text-center">
                      <p>cosmetics</p>
                    </div>
                    <div className="col-lg-3  text-center">
                      <p>March 25,2022</p>
                    </div>
                    <div className="col-lg-1">&nbsp;
                    </div>
                   <div className="col-lg-3  text-center">
                     <h5>$100</h5>
               </div>
              </div>
             </div>
            </div>


                    </div>

                </div>
                


                <div className='col-lg-12'>
                    <div className='row mt-1'>
                    <div className="col-lg-3">&nbsp;</div>
                <div className="col-lg-6  text-center">
                 <div className="bg-light col-lg-12 p-4 mt-2 sixbox">
                  <div className="row ">
                    <div className="col-lg-2 text-center  text-danger">
                    <FontAwesomeIcon icon={faDollar} />
                
                    </div>
                    <div className="col-lg-3  text-center">
                      <p>Food</p>
                    </div>
                    <div className="col-lg-3  text-center">
                      <p>March 29,2022</p>
                    </div>
                    <div className="col-lg-1">&nbsp;
                    </div>
                   <div className="col-lg-3  text-center">
                     <h5>$45</h5>
               </div>
              </div>
             </div>
            </div>


                    </div>

                </div>


                <div className='col-lg-12'>
                    <div className='row mt-1'>
                    <div className="col-lg-3">&nbsp;</div>
                <div className="col-lg-6  text-center">
                 <div className="bg-light col-lg-12 p-4 mt-2 sixbox">
                  <div className="row ">
                    <div className="col-lg-2 text-center  text-danger">
                    <FontAwesomeIcon icon={faDollar} />
                
                    </div>
                    <div className="col-lg-3  text-center">
                      <p>Shooping</p>
                    </div>
                    <div className="col-lg-3  text-center">
                      <p>March 29,2022</p>
                    </div>
                    <div className="col-lg-1">&nbsp;
                    </div>
                   <div className="col-lg-3  text-center">
                     <h5>-$241</h5>
               </div>
              </div>
             </div>
            </div>


                    </div>

                </div>




                <div className='col-lg-12 '>
                    <div className='row mt-1'>
                    <div className="col-lg-3">&nbsp;</div>
                <div className="col-lg-6  text-center">
                 <div className="bg-light col-lg-12 p-4 mt-2 sixbox">
                  <div className="row ">
                    <div className="col-lg-2 text-center  text-danger">
                    <FontAwesomeIcon icon={faDollar} />
                
                    </div>
                    <div className="col-lg-3  text-center">
                      <p>Others</p>
                    </div>
                    <div className="col-lg-3  text-center">
                      <p>March 25,2022</p>
                    </div>
                    <div className="col-lg-1">&nbsp;
                    </div>
                   <div className="col-lg-3  text-center">
                     <h5>$100</h5>
               </div>
              </div>
             </div>
            </div>


                    </div>

                </div>




                <div className='col-lg-12 mb-5'>
                    <div className='row mt-1'>
                    <div className="col-lg-3">&nbsp;</div>
                <div className="col-lg-6  text-center">
                 <div className="bg-light col-lg-12 p-4 mt-2 sixbox">
                  <div className="row ">
                    <div className="col-lg-2 text-center  text-danger">
                    <FontAwesomeIcon icon={faDollar} />
                
                    </div>
                    <div className="col-lg-3  text-center">
                      <p>tech</p>
                    </div>
                    <div className="col-lg-3  text-center">
                      <p>March 29,2022</p>
                    </div>
                    <div className="col-lg-1">&nbsp;
                    </div>
                   <div className="col-lg-3  text-center">
                     <h5>$45</h5>
               </div>
              </div>
             </div>
            </div>


                    </div>

                </div>


            </div>

          </div>
        </div>
        </>
    );
}