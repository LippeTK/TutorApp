import Link from "next/link";
import styles from "./cardCurso.css";
import Image from 'next/image'

export default function CardCurso(props) {
  return (
    <div
    className="card shadow border-0 mx-auto mb-5"
      style={styles.cardCurso}
    >
      <div className="card-body pt-0 ps-0 pe-0">
        <Image src="/img/codigo.jpg" className="card-img-top" width={300} height={170} />
        <h5 className="card-title mb-2 pt-2">{props.texto}</h5>
        <p className="card-text mb-0"></p>
        <Link href="/curso" className="btn card-button mb-0">
          Acessar
        </Link>
      </div>
    </div>
  );
}
