<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

function getUserEmails($users)
{
    return App\Collection::make($users)->filter(function ($user) {
        return $user['email'] !== null;
    })->map(function ($user) {
        return $user['email'];
    })->toArray();
}

Route::get('/', function () {
    // $users = App\User::all()->toArray();
    // dd(getUserEmails($users));
    
    $items = App\Collection::make([1, 2, 3]);
    dump($items[2]);

    $items[] = 4;

    dump(isset($items[3]));

    dump($items);

    dump(count($items));
});
