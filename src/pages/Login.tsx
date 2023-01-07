import { collection, addDoc } from 'firebase/firestore';
import { Formulario, Button, ContenedorBotonCentrado, MensajeError, } from "../elementos/Forms"
import { useState } from 'react';
import InputComponent from '../components/InputComponent';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


// const usuariosRef = db.collection('usuarios')

export const Login = () => {
  const [correoInicio, setCorreoInicio] = useState({ campo: '', valido: null });
  const [passwordInicio, setPasswordInicio] = useState({ campo: '', valido: null })
  const [formularioValido, setFormularioValido] = useState('');

  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    // db.collection('usuarios').where('correo', '==', correoInicio).onSnapshot();
  }

  return (
    <main className="tarjeta-login">

      <Formulario onSubmit={onSubmit}>
        {/* Correo */}
        <InputComponent
          estado={correoInicio}
          setEstado={setCorreoInicio}
          tipo="text"
          label="Correo"
          placeholder="juan.r@email.com"
          name="correo"
          leyendaError="Formato incorrecto de email"
          expresionRegular={/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/}
        />

        {/* Nombre */}
        <InputComponent
          estado={passwordInicio}
          setEstado={setPasswordInicio}
          tipo="text"
          label="Contraseña"
          placeholder="******"
          name="password"
          leyendaError="Contraseña Invalida"
          expresionRegular={/^.{4,12}$/}
        />

        {formularioValido === 'false' && 
        <MensajeError>
          <p>
            <FontAwesomeIcon icon={faExclamationTriangle} />
            <b>Error:</b> Favor de rellenar el formulario correctamente
          </p>
        </MensajeError>}

        <ContenedorBotonCentrado>
          <Button type="submit">Iniciar Sesion</Button>
        </ContenedorBotonCentrado>

      </Formulario>

    </main>
  )
}


