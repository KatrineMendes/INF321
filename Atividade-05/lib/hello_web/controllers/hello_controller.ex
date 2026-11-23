defmodule HelloWeb.HelloController do
  use HelloWeb, :controller

  def saudacao(conn, %{"lang" => "pt", "name" => name}) do
    render(conn, :saudacao, mensagem: "Olá, #{String.capitalize(name)}!")
  end

  def saudacao(conn, %{"lang" => "en", "name" => name}) do
    render(conn, :saudacao, mensagem: "Hello, #{String.capitalize(name)}!")
  end

  def saudacao(conn, %{"name" => name}) do
    render(conn, :saudacao, mensagem: "Idioma não suportado / Unsupported language (#{String.capitalize(name)})")
  end
end
