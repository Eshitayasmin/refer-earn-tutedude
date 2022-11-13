import React from 'react';
import './EnrolledFriends.css';

const EnrolledFriends = () => {
    return (
        <div className='friends-page'>
            <div className='ui-ux-f'>
                <p>UI/UX > Refer & Earn > Friends Enrolled</p>
            </div>
           
           <div className='your-refer-code'>
                    <div>
                    <p className='purple text-16px'>Your Referral Code</p>
                    <div >
                        <span className='rf-code'> EDCH54</span>
                    </div>
                    </div>
                    <div className='wallet-balance-div'>
                        <p className='purple font-14px font-six'>Wallet balance</p>
                        <h2 className='balance'>₹500</h2>
                    </div>
                </div>
            
            <div>
                <p className='purple font-six'>Friends Who Enrolled <span className='three'>(3)</span></p>
                <div className='friends'>
                    <div className="friend">
                        <div className='nameAndDate'>
                            <p className="name">Dhiraj Saxsena</p>
                            <p className="date">14 sep, 2022</p>
                        </div>
                        <p className='course-quantity font-14px'>Course Enrolled(6)</p>
                        <div className='courses'>
                            <span className='course'>UI/UX</span>
                            <span className='course'>Photoshop</span>
                            <span className='course'>Illustrator</span>
                            <span>Python</span>
                            <span>MERN</span>
                            <span>Java</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default EnrolledFriends;