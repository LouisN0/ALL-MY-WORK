<?php

namespace App\Http\Controllers;

use App\Models\Portfolio;
use App\Models\Portfolioinfo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class PortfolioController extends Controller
{
    public function index()
    {
        $portfolios = Portfolio::all();
        $portfolioinfos = Portfolioinfo::all();
        return view('/pages.backoffice.backoffice', compact('portfolios','portfolioinfos'));
    }
    public function edit($id)
    {   
        $portfolios = Portfolio::find($id);
        return view('/pages.backoffice.edit.portfolio-edit', compact('portfolios'));
    }
    public function update($id, Request $request)
    {
        $portfolios = Portfolio::find($id);
        $portfolios->titre = $request->titre;
        $portfolios->sstitre = $request->sstitre;
        $portfolios->save();
        return redirect()->back();
    }
    public function show($id)
    {
        $portfolios = Portfolio::find($id);
        return view('/pages.backoffice.show.portfolio-show', compact('portfolios'));
    }
    

    //portfolioinfo
    public function editinfo($id)
    {   
        $portfolioinfos = Portfolioinfo::find($id);
        return view('/pages.backoffice.edit.portfolioinfo-edit', compact('portfolioinfos'));
    }
    public function updateinfo($id, Request $request)
    {
        $portfolioinfos = Portfolioinfo::find($id);
        $portfolioinfos->img = $request->img;
        $portfolioinfos->nom = $request->nom;
        $portfolioinfos->filter = $request->filter;
        
        $portfolioinfos->save();
        return redirect()->back();
    }
    public function createinfo()
    {
        return view("/pages.backoffice.create.portfolioinfo-create");
    }
    public function storeinfo(Request $request)
    {   
        $validate = $request->validate([
            'img' => 'required',
            'nom' => 'required',
            'nom' => 'required',
        ]);

        $

        $portfolioinfos = new Portfolioinfo;
        $portfolioinfos->img = $request->img;
        if(file_exists($portfolioinfos->img))
            unlink($portfolioinfos->img);
        $portfolioinfos->nom = $request->nom;
        $portfolioinfos->filter = $request->filter;
        $portfolioinfos->save();
        return redirect()->back();
    }
    public function showinfo($id)
    {
        $portfolioinfos = Portfolioinfo::find($id);
        return view('/pages.backoffice.show.portfolioinfo-show', compact('portfolioinfos'));
    }
    public function destroyinfo($id)
    {
        $portfolioinfos = Portfolioinfo::find($id);
        $chemain = "img/portfolio/". $portfolioinfos->img;
        if(File::exists($chemain))
        {
            File::delete($chemain);
        }
        $portfolioinfos->delete();
        return redirect()->back();
    }
}
