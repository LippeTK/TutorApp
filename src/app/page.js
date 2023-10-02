"use client";
import "bootstrap/dist/css/bootstrap.css";
import ModalLogin from "./components/modalLogin/modalLogin";
import Home from "./home/page";

import { AuthProvider } from "./context/AuthContext";
import { onAuthStateChanged } from "firebase/auth";

import { useState, useEffect } from "react";
import { useAuthentication } from "./hooks/useAuthentication";

export default function App() {
  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
  }, [auth]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <main>
      <AuthProvider value={{ user }}>
        <ModalLogin />
        <Home />
      </AuthProvider>
    </main>
  );
}
