<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controller\StudentsController;
use App\Http\Controller\UserController;

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

//get all students detail 
Route::middleware('auth:sanctum')->get('students', 'App\Http\Controllers\StudentsController@getStudents');
//get spacific student details
Route::middleware('auth:sanctum')->get('students/{id}','App\Http\Controllers\StudentsController@getStudentsById');   
//add Student
Route::middleware('auth:sanctum')->post('addStudent','App\Http\Controllers\StudentsController@addStudent');
//uapdate Student
Route::middleware('auth:sanctum')->put('updateStudent/{id}','App\Http\Controllers\StudentsController@updateStudent');
//delete student
Route::middleware('auth:sanctum')->delete('deleteStudent/{id}','App\Http\Controllers\StudentsController@deleteStudent');


//new user register with token 
Route::post('register','App\Http\Controllers\UserController@register');

//Store contactus
Route::post('storeContact','App\Http\Controllers\ContactController@storeContact');
//get contact us
Route::middleware('auth:sanctum')->get('getContact','App\Http\Controllers\ContactController@getContact');


// For Admission
//Get For Admission Info
Route::middleware('auth:sanctum')->get('admissions','App\Http\Controllers\ForAdmissionController@getadmission');
// Get Specic Admission detail
Route::middleware('auth:sanctum')->get('admission/{id}', 'App\Http\Controllers\ForAdmissionController@getAdmissionById');
//Add Admission
Route::post('addAdmission', 'App\Http\Controllers\ForAdmissionController@addAdmission');
// Update Admission
Route::middleware('auth:sanctum')->put('updateAdmission/{id}', 'App\Http\Controllers\ForAdmissionController@updateAdmission');
// Delete Admission
Route::middleware('auth:sanctum')->delete('deleteAdmission/{id}', 'App\Http\Controllers\ForAdmissionController@deleteAdmission');


//Get Notice Info
Route::middleware('auth:sanctum')->get('notics','App\Http\Controllers\NoticController@getNotic');
// Get Specic notice detail
Route::middleware('auth:sanctum')->get('notic/{id}', 'App\Http\Controllers\NoticController@getNoticById');
//Add Notice
Route::post('addNotic', 'App\Http\Controllers\NoticController@addNotic');
// Update Notice
Route::middleware('auth:sanctum')->put('updateNotic/{id}', 'App\Http\Controllers\NoticController@updateNotic');
// Delete Notice
Route::middleware('auth:sanctum')->delete('deleteNotic/{id}', 'App\Http\Controllers\NoticController@deleteNotic');


//Get HomeNotice Info
Route::get('homenotices','App\Http\Controllers\HomeNoticeController@getHomenotice');
// Get Specic HomeNotice detail
Route::middleware('auth:sanctum')->get('homenotice/{id}', 'App\Http\Controllers\HomeNoticeController@getHomenoticeById');
//Add HomeNotice
Route::post('addHomeNotice', 'App\Http\Controllers\HomeNoticeController@addHomenotice');
// Update HomeNotice
Route::middleware('auth:sanctum')->put('updateHomeNotice/{id}', 'App\Http\Controllers\HomeNoticeController@updateHomenotice');
// Delete HomeNotice
Route::middleware('auth:sanctum')->delete('deleteHomeNotice/{id}', 'App\Http\Controllers\HomeNoticeController@deleteHomenotice');

 

// Suggestion Box
//Get  Suggestion Box Info
Route::middleware('auth:sanctum')->get('suggestionboxs','App\Http\Controllers\SuggestionBoxController@getSuggestionboxs');
// Get Specic  Suggestion Box detail
Route::middleware('auth:sanctum')->get('suggestionboxs/{id}', 'App\Http\Controllers\SuggestionBoxController@getSuggestionboxsById');
//Add  Suggestion Box
Route::middleware('auth:sanctum')->post('addSuggestionboxs', 'App\Http\Controllers\SuggestionBoxController@addSuggestionbox');
// Delete  Suggestion Box
Route::middleware('auth:sanctum')->delete('deleteSuggestionboxs/{id}', 'App\Http\Controllers\SuggestionBoxController@deleteSuggestionbox');



// Student FeedBack
//Get Student FeedBack Info
Route::middleware('auth:sanctum')->get('studentfeedbacks','App\Http\Controllers\StudentFeedbackController@getstudentfeedback');
// Get Specic Student FeedBack detail
Route::middleware('auth:sanctum')->get('studentfeedback/{id}', 'App\Http\Controllers\StudentFeedbackController@getStudentfeedbackById');
//Add Student FeedBack
Route::middleware('auth:sanctum')->post('addStudentfeedbacks', 'App\Http\Controllers\StudentFeedbackController@addStudentfeedback');
// Delete Student FeedBack
Route::middleware('auth:sanctum')->delete('deleteStudentfeedbacks/{id}', 'App\Http\Controllers\StudentFeedbackController@deleteStudentfeedback');


// Teachers FeedBack
//Get Teachers FeedBack Info
Route::middleware('auth:sanctum')->get('teacherfeedbacks','App\Http\Controllers\TeacherFeedbackController@getTeacherfeedback');
// Get Specic Teachers FeedBack detail
Route::middleware('auth:sanctum')->get('teacherfeedback/{id}', 'App\Http\Controllers\TeacherFeedbackController@getTeacherfeedbackById');
//Add Teachers FeedBack
Route::middleware('auth:sanctum')->post('addTeacherfeedbacks', 'App\Http\Controllers\TeacherFeedbackController@addTeacherfeedback');
// Delete Teachers FeedBack
Route::middleware('auth:sanctum')->delete('deleteTeacherfeedbacks/{id}', 'App\Http\Controllers\TeacherFeedbackController@deleteTeacherfeedback');

//BookList
//Get BookList Info
Route::middleware('auth:sanctum')->get('booklists','App\Http\Controllers\BookListController@getbooklist');
// Get Specic Booklist detail
Route::middleware('auth:sanctum')->get('booklist/{id}', 'App\Http\Controllers\BookListController@getBooklistById');
//Add Booklist
Route::middleware('auth:sanctum')->post('addBooklist', 'App\Http\Controllers\BookListController@addBooklist');
// Update Booklist
Route::middleware('auth:sanctum')->put('updateBooklist/{id}', 'App\Http\Controllers\BookListController@updateBooklist');
// Delete Booklist
Route::middleware('auth:sanctum')->delete('deleteBooklist/{id}', 'App\Http\Controllers\BookListController@deleteBooklist');
