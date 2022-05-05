<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreBlogRequest;
use App\Models\Blog;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogController extends Controller
{
    public function index()
    {
        $blogs = Blog::all();
        return Inertia::render('Blog/Index', compact('blogs'));
    }

    public function create()
    {
        return Inertia::render('Blog/Create');
    }

    public function store(StoreBlogRequest $request)
    {
        $data = $request->all();

        $blogs = Blog::create($data);
        if ($blogs) {
            return redirect()->route('blog.index');
        }
    }
    public function edit()
    {
        return Inertia::render('Blog/Edit');
    }
}
