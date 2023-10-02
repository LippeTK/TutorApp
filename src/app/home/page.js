"use client";
import CardCurso from "../cardCurso/cardCurso";
import { useFetchDocuments } from "../hooks/useFetchDocuments";


const Home = () => {

const {documents: posts, loading} = useFetchDocuments("posts")
// console.log(posts)
  return (
    <div className="container row mt-5 mx-auto">
      <div>
        <h1 className="col-12 text-center pb-5"> Cursos recomendados para você:</h1>
      </div>
      <div className="col-12 col-md-6 text-center">
        {/* <h1 className="pb-4">Recomendados</h1> */}
      </div>

      <div className="col-12 col-md-6 text-center">
        {/* <h1 className="pb-4">Em alta</h1> */}
      </div>

      {posts && posts.map((post) => (
        <CardCurso key = {post.id} post={post}/>
      ))}



     
    </div>
    
  );
}
export default Home
