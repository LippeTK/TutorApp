import styles from "./page.module.css";
import NavBar from "./components/navbar/navbar";
import "bootstrap/dist/css/bootstrap.css";
import CardCurso from "./components/cardCurso/cardCurso";
import ModalLogin from "./components/modalLogin/modalLogin";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <NavBar />
      {/* Modal Login */}
      <ModalLogin />

      {/* conteudo da pagina*/}
      <div className="container row mt-5 mx-auto">
        <div className="col-12 col-md-6 text-center">
          <h1 className="pb-4">Recomendados</h1>
          <CardCurso texto="aaaaaa" />
          <CardCurso texto="bbbbbb" />
          <CardCurso texto="cccccc" />
        </div>

        <div className="col-12 col-md-6 text-center">
          <h1 className="pb-4">Em alta</h1>
          <CardCurso texto="dddddd" />
          <CardCurso texto="eeeeeee" />
          <CardCurso texto="fffffff" />
        </div>
      </div>
      {/* rodapé */}

      <Footer/>
    </main>
  );
}
