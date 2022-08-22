import { Formulario, Label, Button,  } from "../elementos/Forms"
import InputComponent from '../components/InputComponent';
import { useState } from 'react';


export const Login = () => {
  const [correo, setCorreo] = useState({campo: '', valido: null});
  const [password, setPassword] = useState({campo: '', valido: null})

  return (
    <main>
      <Formulario className="">
        {/* Correo */}
        <InputComponent 
          estado={correo}
          setEstado={setCorreo}
          tipo="email"
          label="Correo"
          placeholder="nombre@yopmail.com"
          name="correo"
          leyendaError="Formato no valido"
          expresionRegular={/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/}
        />

        {/* Password */}
        <InputComponent 
          estado={password}
          setEstado={setPassword}
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


