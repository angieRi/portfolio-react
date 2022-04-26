<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class ProjectController extends Controller
{
    public function create(Request $request)
    {

        $validator =Validator::make($request->all(),[
            'image' => 'mimes:jpg,png,jpeg,gif',
            'title' => 'required',
            'repository' => 'required|numeric',
            'demo' => 'required',
            'description' => 'required',
            'technologies' => 'required',
        ]);

        try {
            DB::beginTransaction();

            $project = new Project();
            $project->image = $request->image;
            $project->title = $request->title;
            $project->description = $request->description;
            $project->demo = $request->demo;
            $project->repository = $request->repository;
            $project->technologies = $request->technologies;
            $project->save();

            DB::commit();

            return response()->json([
                'status'=>200,
                'data'=>$project
            ]);

        } catch (\Exception $e) {
            DB::rollback();
            return response()->json([
                'statu' =>400,
                'message' => 'Unexpected error !',
                'error'=> [$validator->getMessageBag()->getMessages(),$e->getPrevious()->getMessage()]]);
        }
    }

    /**
     * Función que permite obtener los datos de un proyecto
     * @return \Illuminate\Http\JsonResponse retorna los proyecto paginados de 15
     */
    public function getAll()
    {
        $project = Project::paginate(15);
        if($project) {
            return $project;
        }else {
            return response()->json([
                'statu' => 404,
                'message' => 'transaction error']);
        }
    }


    /**
     * función que devuelve los datos de un proyecto por $id
     * @param $id / proyecto a obtener
     * @return \Illuminate\Http\JsonResponse
     */
    public function getById($id)
    {
        $project = Project::find($id);

        if($project) {
            return response()->json([
                'data' =>$project,
                'statu' =>200]);
        }
        return response()->json([
            'statu' => 404,
            'message' => 'transaction error']);
    }


    /***
     * Función que permite editar los datos de un proyecto
     * @param Request $request datos de un proyecto
     * @param Project $project
     * @return \Illuminate\Http\JsonResponse
     */
    public function edit(Request $request,Project $project)
    {
        $validator =Validator::make($request->all(),[
            'title' => 'required',
            'image' => 'required',
            'demo' => 'required',
            'repository' => 'required',
            'description' => 'required',
            'technologies' => 'required',
        ]);

        try {
            DB::beginTransaction();

            $project->fill($request->all());
            DB::commit();
            return response()->json([
                'status'=>200,
                'project'=> $project
            ]);
        } catch (\Exception $e) {
            DB::rollback();
            return response()->json([
                'statu' => 400,
                'message' => 'Update error !',
                'error' => $validator->fails()]);
        }
    }

    /**
     * Funcion que elimina un proyecto por $id
     * @param $id /de un proyecto a borrar
     * @return \Illuminate\Http\JsonResponse
     */
    public function delete($id)
    {
        try{
            DB::beginTransaction();

            Project::destroy($id);

            DB::commit();

            return response()->json([
                'statu' => 200,
                'message' => 'Project removed successfully']);
        }
        catch (\Exception $e) {

            DB::rollback();
            return response()->json([
                'statu' =>400,
                'message' => 'update error']);
        }
    }

    /**
     * Función que devuelve datos de un proyecto por campos
     * @param Request $request data de campos a buscar y data de campos a mostrar
     * @return \Illuminate\Http\JsonResponse
     */
    public function search(Request $request)
    {
        $project=[];
        if($request->title) {
            if ($request->fields) {
                $project = Project::where('title', 'like', '%' . trim($request->title).'%')->paginate(1,explode(',', $request->fields));
            } else {
                $project = Project::where('title', 'like', '%' . trim($request->title))->paginate(20);
            }
        }

        if(!empty($project->all())){
            return response()->json(['data' => $project,200]);
        }else{
            return response()->json(['message' => "no results found",400]);
        }
    }
}
