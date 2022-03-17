<?php

namespace App\Http\Controllers;

use App\Models\Portfolio;
use App\Models\Portfolioinfo;
use Illuminate\Http\Request;

class PortfolioController extends Controller
{
    public function index()
    {
        $portfolios = Portfolio::all();
        $portfolioinfos = Portfolioinfo::all();
        return view('/pages.backoffice.backoffice', compact('portfolios','portfolioinfos'));
    }
}
