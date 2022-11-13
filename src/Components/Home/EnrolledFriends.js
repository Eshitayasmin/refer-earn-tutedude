import React from 'react';
import './EnrolledFriends.css';
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const EnrolledFriends = () => {
    return (
        <div className='friends-page'>
            <div className='ui-ux-f'>
                <p>UI/UX > Refer & Earn > Friends Enrolled</p>
            </div>

            <div className='go-back-div purple'><Link to="/"> <FontAwesomeIcon className='left-arrow-icon' icon={faArrowLeft}></FontAwesomeIcon>  go back</Link></div>
           
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
                <p className='purple font-six left-35'>Friends Who Enrolled <span className='three'>(3)</span></p>
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
                            <span className='course'>Python</span>
                            <span className='course'>MERN</span>
                            <span className='course'>Java</span>
                        </div>
                        <p>Refer Amount <span className='refer-money'>₹185</span></p>
                    </div>
                    <div className="friend">
                        <div className='nameAndDate'>
                            <p className="name">Subhash Mishra</p>
                            <p className="date">15 Sep, 2022</p>
                        </div>
                        <p className='course-quantity font-14px'>Course Enrolled(23)</p>
                        <div className='courses'>
                            <span className='course'>UI/UX</span>
                            <span className='course'>Photoshop</span>
                            <span className='course'>Illustrator</span>
                            <span className='course'>Python</span>
                            <span className='course'>MERN</span>
                            <span className='course'>Java</span>
                            <span className='course'>C++</span>
                        </div>
                        <div className='more-border'></div>
                        <p>Refer Amount <span className='refer-money'>₹485</span></p>
                    </div>
                    <div className="friend">
                        <div className='nameAndDate'>
                            <p className="name">Prafull Kumar</p>
                            <p className="date">16 sep, 2022</p>
                        </div>
                        <p className='course-quantity font-14px'>Course Enrolled(6)</p>
                        <div className='courses'>
                            <span className='course'>UI/UX</span>
                            <span className='course'>Photoshop</span>
                            <span className='course'>Illustrator</span>
                            <span className='course'>Python</span>
                            <span className='course'>MERN</span>
                            <span className='course'>Java</span>
                            <span className='course'>C++</span>
                        </div>
                        <div className='more-border'></div>
                        <p>Refer Amount <span className='refer-money'>₹485</span></p>
                    </div>

                </div>
            </div>

            <div className='terms'>
            <p className='purple font-six left-35'>Terms & Conditions</p>
          </div>
        </div>
    );
};

export default EnrolledFriends;