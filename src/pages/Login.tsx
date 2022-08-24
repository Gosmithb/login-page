import { collection, addDoc } from 'firebase/firestore';
import { Formulario, Label, Button,  } from "../elementos/Forms"
import { useState } from 'react';
import db from "../firebase/config";
import InputComponent from '../components/InputComponent';

const usuariosRef = db.collection('usuarios')

export const Login = () => {
  const [correoInicio, setCorreoInicio] = useState({campo: '', valido: null});
  const [passwordInicio, setPasswordInicio] = useState({campo: '', valido: null})

  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    db.collection('usuarios').where('correo', '==', correoInicio).onSnapshot();
  }

  return (
    <main className="tarjeta-login">
      <Formulario onSubmit={onSubmit}>
        {/* Correo */}
        <InputComponent 
          estado={correoInicio}
          setEstado={setCorreoInicio}
          tipo="email"
          label="Correo"
          placeholder="nombre@yopmail.com"
          name="correo"
          leyendaError="Formato no valido"
          expresionRegular={/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/}
        />

        {/* Password */}
        <InputComponent 
          estado={passwordInicio}
          setEstado={setPasswordInicio}
          tipo="password"
          label="Contraseña"
          placeholder="****"
          name="correo"
          leyendaError="Formato no valido"
          expresionRegular={/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/}
        />



      </Formulario>
    </main>
  )
}


