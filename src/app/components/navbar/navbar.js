"use client";
import styles from "./navbar.css";
import Image from "next/image";
import Link from "next/link";

import { useAuthentication } from "@/app/hooks/useAuthentication";

import { useAuthValue } from "@/app/context/AuthContext";

import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

export default function NavBar() {
  const { logout } = useAuthentication();
  const { auth } = useAuthentication();

  const [user, setUser] = useState(undefined);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <div>
          <Link href="/" className="navbar-brand pe-0 me-0">
            <Image
              src="/img/logo.png"
              className={styles.logo}
              width="200"
              height="80"
              alt="logo"
            />
          </Link>
        </div>
        {/* botao collapse */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* itens da navbar */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link href="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item ms-5">
              <Link href="/meusCursos" className="nav-link">
                Meus cursos
              </Link>
            </li>
            <li className="nav-item ms-5">
              <Link href="/perfil" className="nav-link">
                Perfil
              </Link>
            </li>
            {(user !== null && user !==undefined) && (
            <li className="nav-item ms-5">
              <Link href="/createPost" className="nav-link">
                Criar Post
              </Link>
            </li>
            )}
          </ul>


          {(user === null || user === undefined) && (
            <div className="d-flex ms-auto ps-5">
              <button
                className="btn botao btn-lg"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <Link href="/login" className="nav-link">
                  Entrar
                </Link>
              </button>
            </div>
          )}

          {user !== null && user !== undefined && (
            <div className="d-flex ms-auto ps-5">
              <h1 className="welcome">Olá, {user.displayName}!</h1>
            </div>
          )}

          {(user !== null && user !== undefined) && (
            <div className="d-flex ms-auto ps-5">
              <button
                className="btn botao btn-lg"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={logout}
              >
                  Logout
              </button>
            </div>
          )}

        </div>
      </div>
    </nav>
  );
}
