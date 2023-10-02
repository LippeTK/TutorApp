"use client";
import styles from "./createPost.css";
import { useState, useEffect } from "react";

import { useInsertDocument } from "../hooks/useInsertDocument";
import { useAuthValue } from "../context/AuthContext";
import { Space_Mono } from "next/font/google";
import { useAuthentication } from "../hooks/useAuthentication";
import { onAuthStateChanged } from "firebase/auth";
import { Navigate } from "react-router-dom";
import { redirect } from "next/navigation";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

  const { auth } = useAuthentication();

  const [user, setUser] = useState(undefined);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);


  const {insertDocument, response} = useInsertDocument("posts")

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("")

    //validate image URL
    try {
      new URL(image)
    } catch (error) {
      setFormError("A imagem precisa ser uma URL")
    }
    // criar o array de tags
    const tagsArray = tags.split(",").map((tag) => tag.trim())

    // checar todos os valores

    if(!title || !image || !tags || !body){
      setFormError("Por favor, preencha todos os campos")
      
    }

    if(formError){
      savedData = false
      return
    }

    insertDocument({
      title,
      image,
      body,
      tagsArray,
      createdBy: user.displayName

      
    })
    
    //redirect to home page
    redirect("/home");

  };
  // console.log(user ? user.displayName : "Usuário não autenticado");

  return (
    <main className="container d-flex justify-content-center align-items-center">
      <form className="border p-3 formLogin" onSubmit={handleSubmit}>
        <div>
          <div className="pt-4 pb-2 d-flex justify-content-center">
            <h2>Criar novo curso</h2>
          </div>
          <div className="pt-1 pb-2">
            <label htmlFor="titulo" className="pb-2">
              Título:
            </label>
            <input
              className="form-control form-control-lg"
              type="text"
              name="title"
              required
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </div>

          <div className="pt-2 pb-1">
            <label htmlFor="url" className="pb-2">
              URL da imagem:
            </label>
            <input
              className="form-control form-control-lg"
              type="text"
              name="image"
              required
              onChange={(e) => setImage(e.target.value)}
              value={image}
            />
          </div>

          <div className="">
            <label>
              <span className="pt-2 pb-2 d-flex justify-content-center">
                Conteúdo:
              </span>
            </label>
            <textarea
              className="form-control form-control-lg"
              name="body"
              required
              onChange={(e) => setBody(e.target.value)}
              value={body}
            />
          </div>

          <div className="pb-3">
            <label>
              <span className="pt-2 pb-2 d-flex justify-content-center">
                Tags:
              </span>
            </label>
            <input
              className="form-control form-control-lg"
              type="text"
              name="tags"
              required
              placeholder="Insira as tags separadas por vírgula"
              onChange={(e) => setTags(e.target.value)}
              value={tags}
            />
          </div>
          {!response.loading &&<button className="btn btn-primary border-0">Enviar</button>}
              {response.loading &&<button className="btn btn-primary border-0" disabled>Aguarde...</button>}
              {response.error && <p className="error"> {response.error} </p>}
              {formError && <p className="error"> {formError} </p>}
        </div>
      </form>
    </main>
  );
}
