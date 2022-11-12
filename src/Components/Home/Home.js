import { faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Navbar from '../Shared/Navbar';
import './Home.css';


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='ui-ux'>
                <p>UI/UX > Refer & Earn</p>
            </div>

            <div className='refer-div'>
                <div className='refer-div1'>
                    <div className='refer-earning'>
                        <div className='part part1-margin'>
                            <p>Referral Earning</p>
                            <h2><FontAwesomeIcon className='rupee' icon={faIndianRupeeSign}></FontAwesomeIcon> 2500</h2>
                        </div>
                        <div className='part part2-margin'>
                            <p>Total Referrals</p>
                            <h2>7</h2>
                        </div>
                        <div className='part part3-margin'>
                            <p>Wallet balance</p>
                            <h2><span><FontAwesomeIcon className='rupee' icon={faIndianRupeeSign}></FontAwesomeIcon></span> 500</h2>
                        </div>
                     
                    </div>
                    <div className='withdraw-balance-button-div'>
                            <button className='withdraw-balance-button'>Withdraw Balance</button>
                        </div>

                </div>

                <div className='refer-code'>
                    <div>
                    <p>Your Referral Code</p>
                    <div >
                        <span className='code'> EDCH54</span>
                    </div>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Home;