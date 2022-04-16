<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;

class FilesController extends Controller
{
    public function pdfDownload()
    {
        return Storage::disk('public')->download('Angela-Rios-CV.pdf');
    }
}
