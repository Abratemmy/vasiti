import React, { Component } from 'react';
import './sharestory.css';

export class Sharestory extends Component {
    render() {
        return (
            <div className="sharestory container">
                <h2 className="text-center">Share your amazing story!</h2>
                <form>
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-2"></div>
                        <div className="col-lg-6 col-md-6 col-sm-8">
                            <div className="row">

                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="shareform">
                                    <label htmlFor="name" className="label">Upload your picture</label>
                                    <input type="text" rules="required|max:255" name="name"placeholder=" choose image"  className="inputfield"/>                    
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="shareform">
                                    <label htmlFor="name" className="label">Firstname</label>
                                    <input type="text" rules="required|max:255" name="name"placeholder=" firstnamme"  className="inputfield"/>                    
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="shareform">
                                    <label htmlFor="name" className="label">Last name</label>
                                    <input type="text" rules="required|max:255" name="name"placeholder=" lastname"  className="inputfield"/>                    
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="shareform">
                                    <label htmlFor="name" className="label">share your story</label>
                                <textarea className=""  rows= "3" className="textarea" />              
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="shareform">
                                    <label htmlFor="name" className="label">City or Higher Institution (for Students)</label>
                                <textarea className=""  rows= "3"  className="textarea" />              
                                </div>
                            </div>
                            <div className="">
                                <button type="submit" className="navlink-btn signUpButton" >Share your story</button>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-2"></div>
                    </div>
                
                            </form>
                    
            </div>
        )
    }
}

export default Sharestory
