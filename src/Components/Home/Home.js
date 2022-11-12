import { faIndianRupeeSign, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Navbar from '../Shared/Navbar';
import './Home.css';
import users from '../../images/users.png';
import coupon from '../../images/coupon.png';
import discount from '../../images/discount.png';
import wallet from '../../images/wallet.png';
import { Link } from 'react-router-dom';


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

            <div className='how-work-div'>
                <p className='how-work-p'>How does it work?</p>
                <div className='works'>
                     <div className='work'>
                        <div className='icon-div'>
                        <img className='users-icon' src={users} alt="" />
                        </div>
                        <div className='work-part2'>
                            <h3>Invite your Friends</h3>
                            <p>Share the link tutedude.com with your friends</p>
                            
                        </div>
                     </div>
                     <div className='work'>
                        <div className='icon-div'>
                        <img className='coupon-icon' src={coupon} alt="" />
                        </div>
                        <div className='work-part2'>
                            <h3>Friends purchases any course</h3>
                            <p>Using REFERRAL CODE in the payments page</p>
                            
                        </div>
                     </div>
                     <div className='work'>
                        <div className='icon-div'><p className='rupee-icon'>₹</p></div>
                        <div className='work-part2'>
                            <h3>You got ₹200 as referral money</h3>
                            <p>On total purchase the friend makes, into your wallet.</p>
                            
                        </div>
                     </div>
                     <div className='work'>
                        <div className='icon-div'>
                        <img className='discount-icon' src={discount} alt="" />
                        </div>
                        <div className='work-part2'>
                            <h3>Your Friend gets ₹200 off</h3>
                            <p>On his overall fee on successful purchase using your referral code</p>
                            
                        </div>
                     </div>
                     <div className='work'>
                        <div className='icon-div'>
                        <img className='wallet-icon' src={wallet} alt="" />
                        </div>
                        <div className='work-part2'>
                            <h3>Transfer money from wallet</h3>
                            <p>When the wallet balance reaches ₹200 or more, you can withdraw it</p>
                            
                        </div>
                     </div>
                </div>
            </div>

          <div className='last-part'>
            <p>Friends who Enrolled</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
    );
};

export default Home;