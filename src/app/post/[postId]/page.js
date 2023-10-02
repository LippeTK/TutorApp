"use client"
import Curso from "@/app/curso/page"
import { useFetchDocument } from "@/app/hooks/useFetchDocument"
export default function Post({params}){

    const {document: post} = useFetchDocument("posts")

    return(
    <div> 
        {post &&(
            <>
                <h1>post.title</h1>
            </>
        )}
        {/* meu post {params.postId} */}
        
        <Curso/>
        
    </div>

    )
    
}