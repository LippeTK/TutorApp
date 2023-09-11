
export default function Curso() {
  return (
<main>
		<div>
			<div className='d-flex justify-content-center pt-5 pb-5'>
				<h1 className='display-5 pb-3'><strong>Curso Desenvolvimento Web Completo</strong></h1>
			</div>



			<div className='container'>
				<div className='row'>
					<div className='col-12 col-md-6'>
						<ul className='list-unstyled'>
							<li>
								<h3>Nível:</h3>
								<p>Iniciante</p>
							</li>
							<li>
								<h3>Conhecimentos prévios:</h3>
								<p>Nenhum</p>
							</li>
							<li>
								<h3>Dia e horário de aula:</h3>
								<p>Seg, Qua, Sex - 18:00 - 20:00</p>
							</li>
							<li>
								<h3>Início das aulas:</h3>
								<p>01/10/23</p>
							</li>
							<li>
								<h3>Fim do curso(esperado):</h3>
								<p>01/12/23</p>
							</li>
						</ul>
					</div>

					<div className='col-12 col-md-6'>
						<h3>O que o curso irá abordar?</h3>
						<h5 className='pb-2 pt-2'>Você poderá construir páginas web de alta qualidade com as seguintes ferramentas:</h5>
						<ul className='list-group'>
							<li className='list-group-item'>HTML</li>
							<li className='list-group-item'>CSS</li>
							<li className='list-group-item'>Bootstrap</li>
							<li className='list-group-item'>Javascript</li>
							<li className='list-group-item'>Banco de Dados - SQL</li>
							<li className='list-group-item'>Como consumir APIs</li>
							<li className='list-group-item'>Como devo seguir após o término do curso?</li>
						</ul>
						<div className='d-grid pt-4'>
                        {/* style="color: #fff !important; background-color: #FF5722 !important;" */}
							<a href="meusCursos.html" className='btn'>Inscrever-se</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>
  );
}
