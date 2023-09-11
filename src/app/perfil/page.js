import Image from "next/image";
import styles from "./page.css";

export default function Perfil() {
  return (
    <main>
		<div className='container-fluid'>
			<div className='row pt-5'>
				<div className='d-flex justify-content-center pb-5'>
					<h1>Meu perfil:</h1>
				</div>
				<div className='col-12 col-md-7'>
					<div className='d-flex'>
                    {/* style="width: 30%; height: auto;" */}
						<Image src="/img/user.png" className='mx-auto' width={320} height={300}/>
                        
					</div>
					<div className='d-flex justify-content-center pt-3'>
                    {/* style="background-color: #FFF !important; */}
	    {/* color: #FF5722 !important; border: 1px solid #FF5722 !important;" */}
						<a href="" className='btn btn-outline me-1'>Editar</a>
					</div>
				</div>
				<div className='col-12 col-md-5'>
					<form>
							<div className='pt-1 pb-1'>
								<label for="nome" className='pb-2'>Nome:</label>
								<input className='form-control form-control-lg' type="text" name="nome" id="nome"/>
							</div>
							<div className='pt-1 pb-1'>
								<label for="email" className='pb-2'>E-mail:</label>
								<input className='form-control form-control-lg'  type="text" name="email" id="email"/>
							</div>
							<div className='pt-1 pb-1'>
								<label for="password" className='pb-2'>Senha:</label>
								<input className='form-control form-control-lg' type="password" name="password" id="senha"/>
							</div>
							<div className='pt-3'>
								<a href="" className='btn btn-outline me-1' >Editar</a>
								<a href="" className='btn' >Salvar alterações</a>
							</div>
					</form>
				</div>
			</div>
		</div>
	</main>
  );
}
