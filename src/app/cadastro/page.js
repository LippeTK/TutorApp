'use client'
import { sendPasswordResetEmail } from "firebase/auth";
import { useAuthentication } from "../hooks/useAuthentication";
import styles from "./cadastro.css";
import { useState, useEffect } from "react";
import { redirect } from 'next/navigation'
import { onAuthStateChanged } from "firebase/auth";
export default function Cadastrar() {
    const [displayName, setDisplayName] = useState("") 
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const {auth} = useAuthentication()
    const [user, setUser] = useState(undefined)

    
    const {createUser, error: authError, loading} = useAuthentication();
    const [loadingg, setLoading] = useState(true);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        const user = {
            displayName,
            email,
            password
        }


        const res = await createUser(user)

    }

    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        //setUser(user)
        setLoading(false);
        setUser(user)
       
      })
      if (authError){
        setError(authError);
      }
    },[authError])

    if(user !== null && user !== undefined){
      redirect('/home')
      
    }
    if (loadingg) {
      return <p>Carregando...</p>;
    }
    
     
  return (
    <main className="container d-flex justify-content-center align-items-center">
      <form className="border p-3 form-login" onSubmit={handleSubmit}>
        <div>
          <div className="pt-4 pb-2 d-flex justify-content-center">
            <h3>Cadastro</h3>
          </div>
          <div>
            <div className="pb-3">
              <label htmlFor="nome" className="pb-2">
                Nome:
              </label>
              <input
                className="form-control form-control-lg"
                type="text"
                name="name"
                id="name"
                required
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
              />
            </div>

            <div className="pb-3">
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

            <div className="">
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
            <div className="pt-4 pb-1 d-grid">
            {!loading &&<button className="btn btn-primary border-0">Cadastrar</button>}
            {loading &&<button className="btn btn-primary border-0" disabled>Aguarde...</button>}
              
            </div>
          </div>
        </div>
        
        {error && <p className="error"> {error} </p>}
      </form>
    </main>
  );

}
Cadastrar.useClient = true;