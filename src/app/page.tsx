"use client";
import React from "react";
import { Input } from "./Input";

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
    <div style={{ maxWidth: 360, margin: "40px auto", padding: 24, border: "1px solid #eee", borderRadius: 8 }}>
      <h2 style={{ textAlign: "center", marginBottom: 24 }}>Login</h2>
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
        <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
          <button type="submit" style={{ flex: 1, padding: 10, borderRadius: 4, border: "none", background: "#0070f3", color: "#fff", fontWeight: 600 }}>
            Entrar
          </button>
          <button type="button" style={{ flex: 1, padding: 10, borderRadius: 4, border: "1px solid #0070f3", background: "#fff", color: "#0070f3", fontWeight: 600 }}>
            Registrar
          </button>
        </div>
      </form>
    </div>
  );
}
