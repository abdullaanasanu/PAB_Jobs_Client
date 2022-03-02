import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import data from '../../JsonData/Category.json'
import Subfilter from './subfilter'

const CategoryJobs = () => {
    const [isReadMore, setIsReadMore] = useState(true);

    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
      };
    return (
        <div >
            {/* <div className="jobs_sec_1_jobscategory">
                <div className="heading_pic_jobscategory">
                    <div className="container">
                        <div className="browse_jobscategory_list-search_box">
                            <form className="form-control">
                                <div className="row">
                                    <div className="col-lg-5 col-md-5" id="input1_jobscategory">
                                        <input type="text" className="form-control" id="search_box_input_jobscategory"
                                            placeholder="Job Title, Keywords, or Phrase" />
                                    </div>
                                    <div className="col-lg-5 col-md-5" id="input2_jobscategory">
                                        <input type="text" className="form-control" id="search_box_input_jobscategory"
                                            placeholder="City ,Province or Region" />
                                    </div>
                                    <div className="col-lg-2 col-md-2 col-xs-offset-3 col-xs-6 c0l-xs-offset-3"
                                        id="input_btn_jobscategory">
                                        <a href="#"><button id="search_box_btn_jobscategory" type="submit"
                                            className="btn-block">
                                            Search</button></a>
                                    </div>

                                </div>
                            </form>
                        </div>

                        <Subfilter />
                    </div>
                </div>
            </div> */}


            {/* <!-- sec 1 --> */}

            <div className="jobcategory_sec_2">
                <div className="container">
                    <div className="jobcategory_sec_2_sub">
                        <h6 className="jobcategory_sec_2_heading_1">BROWSE JOBS BY FUNCTIONAL AREA / DEPARTMENT</h6>
                        <hr className="bg-light" />
                        <div className="row">
                            {
                            isReadMore?
                            data.slice(0,15).map(industry => {
                                return <div class="col-lg-4 col-md-6">
                                    <Link to={`/browsefilterlist?category=${industry.Category}`}>
                                    <a class="company_jobs_anchor py-1 pr-2 my-1 rounded"><span><img src="images/auto_repair.png" alt=""
                                        class="company_jobs_img_1 mr-2 py-1 px-2 d-flex" /></span><span class="company_jobs_img_1_text align-self-center px-2">{industry.Category}</span></a>
                                        </Link>
                                </div>
                            }):
                            data.map(industry => {
                                return <div class="col-lg-4 col-md-6">
                                    <Link to={`/browsefilterlist?category=${industry.Category}`}>
                                    <a class="company_jobs_anchor py-1 pr-2 my-1 rounded"><span><img src="images/auto_repair.png" alt=""
                                        class="company_jobs_img_1 mr-2 py-1 px-2 d-flex" /></span><span class="company_jobs_img_1_text align-self-center px-2">{industry.Category}</span></a>
                                        </Link>
                                </div>
                            })
                            }
                        </div>
                      
                        <div className='mb-3' id='designation'>
                        <span  className="more_inner float-right mr-4" onClick={toggleReadMore}>{isReadMore ? "...more" : " show less"}</span>
                        </div>
                    </div>

                    {/* <!-- next container --> */}

                    {/* <div className="jobcategory_sec_2_sub">
                        <h6 className="jobcategory_sec_2_heading_1">BROWSE JOBS BY FUNCTIONAL AREA / DEPARTMENT</h6>
                        <hr className="bg-light" />
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Email
                                    Marketing</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Philips
                                    Software Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Email
                                    Marketing</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Philips
                                    Software Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Email
                                    Marketing</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Philips
                                    Software Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Email
                                    Marketing</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Philips
                                    Software Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Email
                                    Marketing</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Philips
                                    Software Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Email
                                    Marketing</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Philips
                                    Software Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Email
                                    Marketing</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Philips
                                    Software Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Email
                                    Marketing</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Philips
                                    Software Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Direct
                                    Job</span></a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#" className="jobcategory_anchor_1"><span className="jobcategory_img_1_text">Direct
                                    Job</span></a>
                            </div>

                        </div>
                    </div> */}

                </div>
            </div>
        </div>
    )
}

export default CategoryJobs