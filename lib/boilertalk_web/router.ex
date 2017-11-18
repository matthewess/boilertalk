defmodule BoilertalkWeb.Router do
  use BoilertalkWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", BoilertalkWeb do
    pipe_through :api
  end
end
