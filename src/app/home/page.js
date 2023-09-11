import CardCurso from "../components/cardCurso/cardCurso";
import Colunas from "../components/colunas/colunas";

export default function Home() {
  return (
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
  );
}
