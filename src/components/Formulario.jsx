import { useState } from "react";
import { useForm } from "react-hook-form";
import "../css/formulario.css";
import { RiCheckLine, RiCloseLine } from "react-icons/ri";

function Formulario() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();
	const [enviado, setEnviado] = useState(false);

	const onSubmit = (data) => {
		console.log(data); // podria utilizar formsubmit?
		setEnviado(true);
		reset();
		setTimeout(() => {
			setEnviado(false);
		}, 5000);
	};

	const validarLongitud = (value) => {
		return value.length >= 3;
	};

	return (
		<div className="container">
			<h1>¡Tu voz importa! Déjanos saber tus sugerencias</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="form-group">
					<label htmlFor="nombre">Nombre</label>
					<input
						type="text"
						id="nombre"
						{...register("nombre", {
							required: true,
							validate: validarLongitud,
						})}
					/>
					{errors.nombre && (
						<span className="error">
							<RiCloseLine className="closeLine" />
							Este campo es requerido
						</span>
					)}
					{errors.nombre && errors.nombre.type === "validate" && (
						<span className="error">
							<RiCloseLine className="closeLine" /> El nombre debe tener al
							menos tres letras
						</span>
					)}
				</div>

				<div className="form-group">
					<label htmlFor="apellido">Apellido</label>
					<input
						type="text"
						id="apellido"
						{...register("apellido", {
							required: true,
							validate: validarLongitud,
						})}
					/>
					{errors.apellido && (
						<span className="error">
							<RiCloseLine className="closeLine" />
							Este campo es requerido
						</span>
					)}
					{errors.apellido && errors.apellido.type === "validate" && (
						<span className="error">
							<RiCloseLine className="closeLine" /> El Apellido debe tener al
							menos tres letras
						</span>
					)}
				</div>

				<div className="form-group">
					<label htmlFor="correo">Correo</label>
					<input
						type="text"
						id="correo"
						{...register("correo", {
							required: true,
							pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/i,
						})}
					/>
					{errors.correo && errors.correo.type === "required" && (
						<span className="error">
							<RiCloseLine className="closeLine" />
							Este campo es requerido
						</span>
					)}
					{errors.correo && errors.correo.type === "pattern" && (
						<span className="error">
							<RiCloseLine className="closeLine" />
							El correo ingresado no es válido
						</span>
					)}
				</div>

				<div className="form-group">
					<label htmlFor="sugerencia">Sugerencia</label>
					<textarea
						id="sugerencia"
						{...register("sugerencia", { required: true })}
					/>
					{errors.sugerencia && errors.sugerencia.type === "required" && (
						<span className="error">
							<RiCloseLine className="closeLine" />
							Este campo es requerido
						</span>
					)}
				</div>

				<div className="form-group">
					<label>¿Desea recibir información del clima en su correo?</label>
					<div className="radio-group">
						<label>
							<input
								type="radio"
								value="si"
								{...register("recibirInformacion")}
							/>
							Sí
						</label>
						<label>
							<input
								type="radio"
								value="no"
								{...register("recibirInformacion")}
							/>
							No
						</label>
					</div>
				</div>

				<button type="submit">Enviar</button>
			</form>
			{enviado && (
				<div className="mensaje-exito">
					El formulario se ha enviado satisfactoriamente
					<RiCheckLine className="checkLine" />
				</div>
			)}
		</div>
	);
}

export default Formulario;
