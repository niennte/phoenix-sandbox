# EquationSolver

An app to solve quadratic and linear equations. [Live demo](https://phoenix-sandbox.gigalixirapp.com/)

![](https://s3.amazonaws.com/quod.erat.demonstrandum/portfolio/img/elixir-equation-solver1.png)






#### System deps
```
elixir -v
Erlang/OTP 22 ...
Elixir 1.9.1 (compiled with Erlang/OTP 22)

node -v
v10.16.3

yarn -v
1.10.1

git clone [this repo] [into your path]
cd [your path]
```

#### Run locally:

  * Install dependencies with `mix deps.get`
  * Create and migrate your database with `mix ecto.create && mix ecto.migrate`
  * Install Node.js dependencies with `cd assets && npm install`
  * Start Phoenix endpoint with `mix phx.server`

Now you can visit [`localhost:4000`](http://localhost:4000) from your browser.

#### Testing
  * Backend tests: `mix test`
  * Frontend tests: `cd assets && yarn test`

#### Deployment
Please [check Phoenix deployment guides](http://www.phoenixframework.org/docs/deployment).

Live demo uses [gigalixir](https://gigalixir.com/)'s free tier.

#### More about Phoenix

  * Official website: http://www.phoenixframework.org/
  * Guides: https://hexdocs.pm/phoenix/overview.html
  * Docs: https://hexdocs.pm/phoenix
  * Mailing list: http://groups.google.com/group/phoenix-talk
  * Source: https://github.com/phoenixframework/phoenix
