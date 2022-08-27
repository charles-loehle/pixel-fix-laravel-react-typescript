<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use App\Http\Requests\Auth\RegisterRequest;

class CustomRegisterController extends Controller
{
    public function create(): Response {
      return Inertia::render('CustomAuth/Register');
    }

    public function store(RegisterRequest $request): RedirectResponse {
      User::create($request->validated());

      return redirect(route('thankyou'));
    }
}
