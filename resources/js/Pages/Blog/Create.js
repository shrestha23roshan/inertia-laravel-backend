import Authenticated from "@/Layouts/Authenticated";
import React from "react";
import { useForm } from "@inertiajs/inertia-react";

export default function Create() {
    const { data, setData, errors, post } = useForm({
        title: "",
        description: "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        post(route("blog.store"));
    }
    return (
        <Authenticated>
            <div className="wrapper">
                <div className="content-wrapper">
                    <section className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1>Blog Add</h1>
                                </div>
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item">
                                            <a href="#">Dashboard</a>
                                        </li>
                                        <li className="breadcrumb-item active">
                                            <a href="#">Blog</a>
                                        </li>
                                        <li className="breadcrumb-item active">
                                            Create Blog
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="content">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card card-primary">
                                    <form onSubmit={handleSubmit}>
                                        <div className="card-body">
                                            <div className="form-group">
                                                <label htmlFor="title">
                                                    Title
                                                </label>
                                                <input
                                                    type="text"
                                                    name="title"
                                                    id="title"
                                                    value={data.title}
                                                    onChange={(e) =>
                                                        setData(
                                                            "title",
                                                            e.target.value
                                                        )
                                                    }
                                                    className="form-control"
                                                />
                                                <span className="text-red-600">
                                                    {errors.title}
                                                </span>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="description">
                                                    Description
                                                </label>
                                                <textarea
                                                    id="description"
                                                    name="description"
                                                    value={data.description}
                                                    onChange={(e) =>
                                                        setData(
                                                            "description",
                                                            e.target.value
                                                        )
                                                    }
                                                    className="form-control"
                                                    rows="4"
                                                ></textarea>
                                                <span className="text-red-600">
                                                    {errors.description}
                                                </span>
                                            </div>

                                            {/* <div className="form-group">
                                                <label htmlFor="image">
                                                    Image Upload
                                                </label>
                                                <input
                                                    type="file"
                                                    id="image"
                                                    className="form-control"
                                                />
                                            </div> */}

                                            {/* <div className="form-group">
                                                <label htmlFor="status">
                                                    Status
                                                </label>
                                                <select
                                                    id="status"
                                                    className="form-control custom-select"
                                                >
                                                    <option selected disabled>
                                                        Select
                                                    </option>
                                                    <option value="1">
                                                        Published
                                                    </option>
                                                    <option value="0">
                                                        Unpublished
                                                    </option>
                                                </select>
                                            </div> */}

                                            <div>
                                                <button
                                                    type="submit"
                                                    className="btn btn-success"
                                                >
                                                    Submit
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </Authenticated>
    );
}
