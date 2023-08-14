import styles from "./footer.css";
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="mt-5 text-light d-flex footer">
      {/* style='' */}
      <div className="d-flex container align-items-center">
        <div className="position-absolute">
          <a href="#">
            <Image
              src="/img/logo.png"
              className={styles.logo}
              width="200"
              height="80"
            />
          </a>
        </div>
        <div className="mx-auto mt-3">
          <p>&copy; Todos os direitos reservados - Tutor</p>
        </div>
      </div>
    </footer>
  );
}
