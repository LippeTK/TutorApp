"use client";
import { sendPasswordResetEmail } from "firebase/auth";
import { useAuthentication } from "../hooks/useAuthentication";
import { useState, useEffect } from "react";
import { redirect } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import styles from "./login.css";
import Link from "next/link";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { auth } = useAuthentication();
  const [user, setUser] = useState(undefined);

  const { login, error: authError, loading } = useAuthentication();
  const [loadingg, setLoading] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const user = {
      email,
      password,
    };

    const res = await login(user);

  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      //setUser(user)
      setLoading(false);
      setUser(user);
    });
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  if (user !== null && user !== undefined) {
    redirect("/home");
  }
  if (loadingg) {
    return <p>Carregando...</p>;
  }

  return (
    <main className="container d-flex justify-content-center align-items-center">
      <form className="border p-3 formLogin" onSubmit={handleSubmit}>
        <div>
          <div className="pt-4 pb-2 d-flex justify-content-center">
            <h3 className="">Login</h3>
          </div>
          <div>
            <div className="pt-1 pb-3">
              <label htmlFor="email" className="pb-2">
                E-mail:
              </label>
              <input
                className="form-control form-control-lg"
                type="text"
                name="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="pt-1 pb-1">
              <label htmlFor="password" className="pb-2">
                Senha:
              </label>
              <input
                className="form-control form-control-lg"
                type="password"
                name="password"
                id="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mt-2">
              <a>
                <Link href="/cadastro" className="linkCadastro">
                  Ainda não possui cadastro?
                </Link>
              </a>
            </div>
            <div className="pt-3 pb-1 d-grid">
              {!loading && (
                <button className="btn btn-primary border-0">Entrar</button>
              )}
              {loading && (
                <button className="btn btn-primary border-0" disabled>
                  Aguarde...
                </button>
              )}
            </div>
          </div>
        </div>

        {error && <p className="error"> {error} </p>}
      </form>
    </main>
  );
}
Login.useClient = true;
