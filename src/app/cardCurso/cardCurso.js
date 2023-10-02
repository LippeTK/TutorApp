import Link from "next/link";
import styles from "./cardCurso.css";
import Image from 'next/image'
const CardCurso = ({post}) => {

  return (

    <div className="col-12 col-md-6 text-center">
        <div
        className="card shadow border-0 mx-auto mb-5"
          style={styles.cardCurso}
        >
          <div className="card-body pt-0 ps-0 pe-0">
            <Image src={post.image} className="card-img-top" width={300} height={170} alt="imagem do curso" />
            <h5 className="card-title mb-2 pt-2">{post.title}</h5>
            <p className="card-text mb-0"></p>
            <Link href="/curso" className="btn card-button mb-0">
              Acessar
            </Link>
          </div>
        </div>
    </div>

  );
}

export default CardCurso