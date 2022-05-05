import Authenticated from "@/Layouts/Authenticated";
import { Link } from "@inertiajs/inertia-react";
import React from "react";
import { usePage } from "@inertiajs/inertia-react";

export default function Index() {
        const { blogs } = usePage().props;
        
        // const { data } = blogs;
        // console.log(data); return false;
        return (
            <Authenticated>
                <div className="wrapper">
                    <div className="content-wrapper">
                        <section className="content-header">
                            <div className="container-fluid">
                                <div className="row mb-2">
                                    <div className="col-sm-6">
                                        <Link href={route("blog.create")}>
                                            <button className="btn btn-primary">
                                                Add Blog &nbsp;
                                                <i className="fa fa-plus"></i>
                                            </button>
                                        </Link>
                                    </div>
                                    <div className="col-sm-6">
                                        <ol className="breadcrumb float-sm-right">
                                            <li className="breadcrumb-item">
                                                <a href="#">Home</a>
                                            </li>
                                            <li className="breadcrumb-item active">
                                                Blog
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="content">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">Blog List</h3>

                                    <div className="card-tools">
                                        <button
                                            type="button"
                                            className="btn btn-tool"
                                            data-card-widget="collapse"
                                            title="Collapse"
                                        >
                                            <i className="fas fa-minus"></i>
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-tool"
                                            data-card-widget="remove"
                                            title="Remove"
                                        >
                                            <i className="fas fa-times"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="card-body p-0">
                                    <table className="table table-striped projects">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Title</th>
                                                <th>Description</th>
                                                <th className="text-center">
                                                    Status
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {blogs.map(
                                                ({id, title, description}) => (
                                                    <tr key={id} className="">
                                                        <td className="border-t">
                                                                {id}
                                                        </td>
                                                        <td className="border-t">
                                                                {title}
                                                        </td>
                                                        <td className="border-t">
                                                                {description}
                                                        </td>
                                                        <td className="border-t">
                                                            <Link
                                                                tabIndex="1"
                                                                className="px-4 py-2 text-sm text-white bg-blue-500 rounded"
                                                                href={route(
                                                                    "blog.edit",
                                                                    id
                                                                )}
                                                            >
                                                                Edit
                                                            </Link>
                                                        </td>
                                                    </tr>
                                                )
                                            )}
                                            {blogs.length === 0 && (
                                                <tr>
                                                    <td
                                                        className="px-6 py-4 border-t"
                                                        colSpan="4"
                                                    >
                                                        No contacts found.
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </Authenticated>
        );
}
