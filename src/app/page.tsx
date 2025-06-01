"use client";
import React from "react";
import { Input } from "./Input";
import { Button } from "./Button";

export default function Home() {
  const [form, setForm] = React.useState({ email: "", senha: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 border border-gray-200 rounded-lg shadow bg-white">
      <h2 className="text-center mb-6 text-2xl font-bold text-gray-800">Login</h2>
      <form onSubmit={handleSubmit}>
        <Input
          label="E-mail"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          autoComplete="username"
        />
        <Input
          label="Senha"
          name="senha"
          type="password"
          value={form.senha}
          onChange={handleChange}
          autoComplete="current-password"
        />
        <div className="flex gap-3 mt-6">
          <Button type="submit" variant="primary">
            Entrar
          </Button>
          <Button type="button" variant="secondary">
            Registrar
          </Button>
        </div>
      </form>

      <div>
        <p>Valores</p>
        <p>Email: {form.email}</p>
        <p>Senha: {form.senha}</p>
      </div>
    </div>
  );
}
