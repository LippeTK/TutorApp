"use client";
import CardCurso from "../cardCurso/cardCurso";
import "bootstrap/dist/css/bootstrap.css";
import { useFetchDocuments } from "../hooks/useFetchDocuments";
import { useDeleteDocument } from "../hooks/useDeleteDocument";

export default function MeusCursos() {
  const { documents: posts, loading } = useFetchDocuments("posts");
	const {deleteDocument} = useDeleteDocument("posts")
  return (
    <main className="container">
      <h1 className="text-center pt-5">Meus cursos:</h1>
      <div className="row mt-5 mx-auto">
        <h1 className="pb-4">Próximas aulas:</h1>

        {posts && posts.map((post) => 
		<>
			<CardCurso key={post.id} post={post} />
			<div>
			<div className="d-flex">
					<button
					onClick={() => deleteDocument(post.id)}
					className="btn"
				>
					Excluir
					</button>
				
				
			</div>
			</div>
		</>

		)}

        {/* <h1 className='pb-4'>Ao vivo agora:</h1> */}
      </div>
    </main>
  );
}
