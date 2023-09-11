import CardCurso from "../components/cardCurso/cardCurso"

export default function MeusCursos() {
return (
<main className='container'>
		<h1 className='text-center pt-5'>Meus cursos:</h1>
		<div className='row mt-5 mx-auto'>
		<div className='col-12 col-md-6 text-center'>
			<h1 className='pb-4'>Próximas aulas:</h1>


			<CardCurso texto="dddddd" />
				{/* <figcaption className='figcaption text-start'>27/08/23 - 18:00</figcaption> */}



			<CardCurso texto="dddddd" />
				{/* <figcaption className='figcaption text-start'>29/08/23 - 15:30</figcaption> */}
			

		</div>

		<div className='col-12 col-md-6 text-center'>
			<h1 className='pb-4'>Ao vivo agora:</h1>



			<CardCurso texto="dddddd" />
				{/* <figcaption className='figcaption text-start'>Ao vivo agora</figcaption> */}
			
		</div>
	</div>
	</main>
    )
    }