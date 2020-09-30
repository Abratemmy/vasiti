import React, { Component } from 'react';
import './home.css';
import image from '../../images/Testimonialimage1.png';
import blackladies from '../../images/black-beautiful.png';
import image1 from '../../images/Ellipse22.png';
import image2 from '../../images/Ellipse23.png';
import image3 from '../../images/Ellipse24.png';
import image4 from '../../images/Ellipse 23.png';
import image5 from '../../images/Ellipse 22.png';
import image6 from '../../images/Ellipse 24.png';
import {NavLink} from 'react-router-dom';
export class Home extends Component {
    render() {
        return (
            <div className="homepage">
                <div className=" container">
                    <div className="row">
                        <div className="col-lg-9 col-md-12 col-sm-12">
                            <div className="homepagefirst-col">
                                <h1>Amazing <br />Experiences from Our Wonderful Customers</h1>
                                <h6>Here is what customers and vendors are saying about us, you can share your stories with us too.</h6>
                            </div>
                        </div>
                        {/* <div className="col-lg-3 col-md-1"></div> */}
                        <div className="col-lg-3 col-md-12 col-sm-12">
                            <div className="homepage-image1">
                                <img src={image} alt="homepage image" height="400" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* another section of the homepage here */}
                <div className="homepage-secondpart" style={{background:'#222222', color:'white'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-md-5 col-sm-12 order-md-7">
                                <div className="blackpeoplerow">
                                    <h3>Tolu & Joy’s Experience</h3>
                                    <div className="customers">customers</div>
                                    <h6>I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back! I had the best experience shopping with vasiti. Usability of the website was great, very good customer
                                         service, an all round great experience. I would definately be coming back!
                                    </h6>
                                    <div className="shareyourstory"><NavLink to='/sharestory' className="share-link">Share your own story! </NavLink> </div>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-7 col-sm-12 order-md-5">
                                <img src={blackladies} alt="black ladies picture"/>
                            </div>
                        </div>
                    </div>
                    
                </div>
                {/* another vsection */}
                <div className="">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="thirdpartrow">
                                    <img src={image1} alt="not seen"/>
                                    <div className="title">Joseph Ike</div>
                                    <div className="location">In Ikeja <span className="customer">Customer</span> </div>
                                    <div className="text">Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.</div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="thirdpartrow">
                                    <img src={image2} alt="not seen"/>
                                    <div className="title">Joseph Ike</div>
                                    <div className="location">In Ikeja <span className="customer">Customer</span> </div>
                                    <div className="text">Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.</div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="thirdpartrow">
                                    <img src={image3} alt="not seen"/>
                                    <div className="title">Joseph Ike</div>
                                    <div className="location">In Ikeja <span className="customer">Customer</span> </div>
                                    <div className="text">Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.</div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="thirdpartrow">
                                    <img src={image4} alt="not seen"/>
                                    <div className="title">Joseph Ike</div>
                                    <div className="location">In Ikeja <span className="customer">Customer</span> </div>
                                    <div className="text">Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.</div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="thirdpartrow">
                                    <img src={image5} alt="not seen"/>
                                    <div className="title">Joseph Ike</div>
                                    <div className="location">In Ikeja <span className="customer">Customer</span> </div>
                                    <div className="text">Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.</div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="thirdpartrow">
                                    <img src={image6} alt="not seen"/>
                                    <div className="title">Joseph Ike</div>
                                    <div className="location">In Ikeja <span className="customer">Customer</span> </div>
                                    <div className="text">Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
