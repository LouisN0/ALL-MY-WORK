<?php

namespace App\Http\Controllers;

use App\Models\Photo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class PhotoController extends Controller
{
    //
    public function index()
    {
        $photos = Photo::all();
        return view("/back/photos/all",compact("photos"));
    }
    public function create()
    {
        return view("/back/photos/create");
    }
    public function store(Request $request)
    {
        $photo = new Photo;
        $photo->img = $request->file("image")->hashName();
        $photo->save(); // store_anchor
        $request->file("image")->storePublicly("img","public");
        return redirect()->route("photo.index")->with('message', "Successful storage !");
    }
    public function read($id)
    {
        $photo = Photo::find($id);
        return view("/back/photos/read",compact("photo"));
    }
    public function edit($id)
    {
        $photo = Photo::find($id);
        return view("/back/photos/edit",compact("photo"));
    }
    public function update($id, Request $request)
    {
        $photo = Photo::find($id);
        $request->validate([
         'url'=> 'required',
        ]); // update_validated_anchor;
        $photo->url = $request->url;
        $photo->save(); // update_anchor
        return redirect()->route("photo.index")->with('message', "Successful update !");
    }
    public function destroy($id)
    {
        $photo = Photo::find($id);
        $destination = "img/" . $photo ->img;
        if (File::exists($destination)) 
        {
            File::delete($destination);
        }
        $photo->delete();
        return redirect()->back()->with('message', "Successful delete !");
    }
}
