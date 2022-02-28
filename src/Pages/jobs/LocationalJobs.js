import React from 'react'
import { Link } from 'react-router-dom'
import data from '../../lib/locations.json'
import Subfilter from './subfilter'

const LocationalJobs = () => {
    return (
        <div>
            <div className="jobs_sec_1_joblocation">
                <div className="heading_pic_joblocation">
                    <div className="container">
                        <div className="browse_joblocation_list-search_box">
                            <form className="form-control">
                                <div className="row">
                                    <div className="col-lg-5 col-md-5" id="input1_joblocation">
                                        <input type="text" className="form-control" id="search_box_input_joblocation"
                                            placeholder="Job Title, Keywords, or Phrase" />
                                    </div>
                                    <div className="col-lg-5 col-md-5" id="input2_joblocation">
                                        <input type="text" className="form-control" id="search_box_input_joblocation"
                                            placeholder="City ,Province or Region" />
                                    </div>
                                    <div className="col-lg-2 col-md-2 col-xs-offset-3 col-xs-6 c0l-xs-offset-3"
                                        id="input_btn_joblocation">
                                        <a href="#"><button id="search_box_btn_joblocation" type="submit" className="btn-block">
                                            Search</button></a>
                                    </div>

                                </div>
                            </form>
                        </div>

                        <Subfilter />
                    </div>
                </div>
            </div>


            {/* <!-- sec 1 -->

    <!-- sec 2 --> */}



            {/* <!-- 2 --> */}
            <div className="container">
                <div className="jobcategory_sec_2_sub">
                    <h6 className="jobcategory_sec_2_heading_1">BROWSE JOBS BY LOCATIONS</h6>
                    <hr className="bg-light" />
                    <div className="row">
                        {data.locations.map(location => {
                            return <div class="col-lg-4 col-md-6">
                                <Link to={`/browsefilterlist?locate=${location.name}`}>
                                    <a class="company_jobs_anchor py-1 pr-2 my-1 rounded"><span><img src="images/auto_repair.png" alt=""
                                        class="company_jobs_img_1 mr-2 py-1 px-2 d-flex" /></span><span class="company_jobs_img_1_text align-self-center px-2">{location.name}</span></a>
                                </Link>
                            </div>
                        })}
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3">
                        <div className="joblocation_sec_2_sub">

                            <h6 className="joblocation_sec_2_heading_2">JOBS IN LONDON</h6>
                            <hr className="bg-light" />

                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                        </div>

                    </div>
                    <div className="col-lg-3">
                        <div className="joblocation_sec_2_sub">

                            <h6 className="joblocation_sec_2_heading_2">JOBS IN LONDON</h6>
                            <hr className="bg-light" />
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                        </div>

                    </div>
                    <div className="col-lg-3">
                        <div className="joblocation_sec_2_sub">

                            <h6 className="joblocation_sec_2_heading_2">JOBS IN LONDON</h6>
                            <hr className="bg-light" />
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>


                        </div>

                    </div>
                    <div className="col-lg-3">
                        <div className="joblocation_sec_2_sub">

                            <h6 className="joblocation_sec_2_heading_2">JOBS IN LONDON</h6>
                            <hr className="bg-light" />
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                        </div>

                    </div>

                </div>
            </div>
            {/* <!-- 3 --> */}
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="joblocation_sec_2_sub">

                            <h6 className="joblocation_sec_2_heading_2">JOBS IN LONDON</h6>
                            <hr className="bg-light" />
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                        </div>

                    </div>
                    <div className="col-lg-3">
                        <div className="joblocation_sec_2_sub">

                            <h6 className="joblocation_sec_2_heading_2">JOBS IN LONDON</h6>
                            <hr className="bg-light" />
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                        </div>

                    </div>
                    <div className="col-lg-3">
                        <div className="joblocation_sec_2_sub">

                            <h6 className="joblocation_sec_2_heading_2">JOBS IN LONDON</h6>
                            <hr className="bg-light" />
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>


                        </div>

                    </div>
                    <div className="col-lg-3">
                        <div className="joblocation_sec_2_sub">

                            <h6 className="joblocation_sec_2_heading_2">JOBS IN LONDON</h6>
                            <hr className="bg-light" />
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>

                        </div>

                    </div>

                </div>
            </div>
            {/* <!-- 4 --> */}
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="joblocation_sec_2_sub">

                            <h6 className="joblocation_sec_2_heading_2">JOBS IN LONDON</h6>
                            <hr className="bg-light" />
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>

                        </div>

                    </div>
                    <div className="col-lg-3">
                        <div className="joblocation_sec_2_sub">

                            <h6 className="joblocation_sec_2_heading_2">JOBS IN LONDON</h6>
                            <hr className="bg-light" />
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>

                        </div>

                    </div>
                    <div className="col-lg-3">
                        <div className="joblocation_sec_2_sub">

                            <h6 className="joblocation_sec_2_heading_2">JOBS IN LONDON</h6>
                            <hr className="bg-light" />
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>

                        </div>

                    </div>
                    <div className="col-lg-3">
                        <div className="joblocation_sec_2_sub">

                            <h6 className="joblocation_sec_2_heading_2">JOBS IN LONDON</h6>
                            <hr className="bg-light" />
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>
                            <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                                Marketing</span></a>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default LocationalJobs