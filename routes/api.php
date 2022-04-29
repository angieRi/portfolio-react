<?php

use App\Http\Controllers\FilesController;
use App\Http\Controllers\ProjectController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('download', [FilesController::class, 'pdfDownload']);

Route::post('project/create',[ProjectController::class,'create']);
Route::get('projects',[ProjectController::class,'getAll']);
Route::get('project/{id}',[ProjectController::class,'getById']);
Route::put('project/edit/{id}',[ProjectController::class,'edit']);
Route::delete('project/delete/{id}',[ProjectController::class,'delete']);
Route::get('project/search',[ProjectController::class,'search']);
