import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";

export default function Dashboard(props) {
    return (
        <Authenticated>
            <div className="content-wrapper">
                <div>
                    <div className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1 className="m-0">Dashboard</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="info-box">
                                <span className="info-box-icon bg-aqua">
                                    <i className="fa fa-users"></i>
                                </span>

                                <div className="info-box-content">
                                    <span className="info-box-text">users</span>
                                    <span className="info-box-number">55</span>
                                </div>
                                <a href="#" className="small-box-footer">
                                    More info{" "}
                                    <i className="fas fa-arrow-circle-right"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="info-box">
                                <span className="info-box-icon bg-red">
                                    <i className="ion ion-ios-people-outline"></i>
                                </span>

                                <div className="info-box-content">
                                    <span className="info-box-text">
                                        students
                                    </span>
                                    <span className="info-box-number">66</span>
                                </div>
                                <a href="#" className="small-box-footer">
                                    More info{" "}
                                    <i className="fas fa-arrow-circle-right"></i>
                                </a>
                            </div>
                        </div>

                        <div className="clearfix visible-sm-block"></div>

                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="info-box">
                                <span className="info-box-icon bg-green">
                                    <i className="fa fa-users"></i>
                                </span>

                                <div className="info-box-content">
                                    <span className="info-box-text">
                                        teachers
                                    </span>
                                    <span className="info-box-number">44</span>
                                </div>
                                <a href="#" className="small-box-footer">
                                    More info{" "}
                                    <i className="fas fa-arrow-circle-right"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="info-box">
                                <span className="info-box-icon bg-yellow">
                                    <i className="ion ion-ios-people-outline"></i>
                                </span>

                                <div className="info-box-content">
                                    <span className="info-box-text">
                                        parents
                                    </span>
                                    <span className="info-box-number">55</span>
                                </div>
                                <a href="#" className="small-box-footer">
                                    More info{" "}
                                    <i className="fas fa-arrow-circle-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
