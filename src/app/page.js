import styles from "./page.module.css";
import NavBar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import "bootstrap/dist/css/bootstrap.css";
import ModalLogin from "./components/modalLogin/modalLogin";
import Home from "./home/page";

export default function App() {
  return (
    <main className={styles.main}>
      {/* Modal Login */}
      <ModalLogin />

      {/* conteudo da pagina*/}
      <Home/>
      {/* rodapé */}

    </main>
  );
}
