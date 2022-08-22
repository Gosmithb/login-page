import { collection, addDoc } from 'firebase/firestore';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Formulario, Label, Button, ContenedorTerminos, ContenedorBotonCentrado, MensajeExito, MensajeError } from "../elementos/Forms";
import { useState } from "react";
import db from '../firebase/config';
import InputComponent from '../components/InputComponent';

type validarPasswordType = {
  campo: string;
  valido: any;
};

export const Register = () => {

  const [usuario, setUsuario] = useState({ campo: '', valido: null });
  const [nombre, setNombre] = useState({ campo: '', valido: null });
  const [password, setPassword] = useState({ campo: '', valido: null });
  const [password2, setPassword2] = useState({ campo: '', valido: null });
  const [correo, setCorreo] = useState({ campo: '', valido: null });
  const [telefono, setTelefono] = useState({ campo: '', valido: null });
  const [terminos, setTerminos] = useState(false);
  const [formularioValido, setFormularioValido] = useState('');

  const expresiones = {
    usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{10}$/ // 9 a 10 numeros.
  };

  const validarPassword2 = () => {
    if (password.campo.length > 0) {
      if (password.campo !== password2.campo) {
        setPassword2((prevState): validarPasswordType => {
          return { ...prevState, valido: 'false' };
        });

      } else {
        setPassword2((prevState): validarPasswordType => {
          return ({ ...prevState, valido: 'true' });
        });
      }
    }

  }

  const handleOnChangeTerminos = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerminos(e.target.checked)
  }


  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (usuario.valido === 'true' && nombre.valido === 'true' && password.valido === 'true' && password2.valido === 'true' && correo.valido === 'true' && terminos && telefono.valido === 'true') {
      setFormularioValido('true');
      //Se actualiza usuario en base de datos
      addDoc(collection(db, 'usuarios'), {
        usuario: usuario.campo,
        nombre: nombre.campo,
        password: password.campo,
        correo: correo.campo,
        telefono: telefono.campo
      });

      //Limpiar campos despues de actualizar tabla
      setUsuario({ campo: '', valido: null })
      setNombre({ campo: '', valido: null })
      setPassword({ campo: '', valido: null })
      setPassword2({ campo: '', valido: null })
      setCorreo({ campo: '', valido: null })
      setTelefono({ campo: '', valido: null })
      setTerminos(false)
      setFormularioValido('');

    } else {
      setFormularioValido('false');
    }
  }



  return (
    <main className="tarjeta-registro">

      <Formulario onSubmit={onSubmit}>
        {/* Usuario */}
        <InputComponent
          estado={usuario}
          setEstado={setUsuario}
          tipo="text"
          label="Usuario"
          placeholder="JhonFigaro123"
          name="usuario"
          leyendaError="El usuario tiene que ser de 4 a 16 digitos, letras y guion bajo"
          expresionRegular={expresiones.usuario}
        />

        {/* Nombre */}
        <InputComponent
          estado={nombre}
          setEstado={setNombre}
          tipo="text"
          label="Nombre"
          placeholder="JhonFigaro"
          name="nombre"
          leyendaError="Nombre Invalido"
          expresionRegular={expresiones.nombre}
        />

        {/* Contraseña */}
        <InputComponent
          estado={password}
          setEstado={setPassword}
          tipo="password"
          label="Contraseña"
          placeholder=""
          name="password"
          leyendaError="Contraseña no valida"
          expresionRegular={expresiones.password}
        />

        {/* confirmar contraseña */}
        <InputComponent
          estado={password2}
          setEstado={setPassword2}
          tipo="password"
          label="Repetir Contraseña"
          placeholder=""
          name="contraseña"
          leyendaError="Contraseña no coincide"
          funcion={validarPassword2}
        />

        {/* Correo */}
        <InputComponent
          estado={correo}
          setEstado={setCorreo}
          tipo="email"
          label="Correo"
          placeholder="correo@correo.com"
          name="correo"
          leyendaError="Formato incorrecto de email"
          expresionRegular={expresiones.correo}
        />

        {/* Telefono */}
        <InputComponent
          estado={telefono}
          setEstado={setTelefono}
          tipo="text"
          label="Telefono"
          placeholder="9999999999"
          name="telefono"
          leyendaError="Numero invalido"
          expresionRegular={expresiones.telefono}
        />


        <ContenedorTerminos>
          <Label htmlfor="terminos">
            <input
              type="checkbox"
              name="terminos"
              id="terminos"
              checked={terminos}
              onChange={handleOnChangeTerminos}
            />
            Acepto los terminos y condiciones
          </Label>
        </ContenedorTerminos>

        {formularioValido === 'false' && <MensajeError>
          <p>
            <FontAwesomeIcon icon={faExclamationTriangle} />
            <b>Error:</b> Favor de rellenar el formulario correctamente
          </p>
        </MensajeError>}

        <ContenedorBotonCentrado>
          <Button type="submit">Enviar</Button>
          {formularioValido === 'true' && <MensajeExito>Formulario enviado correctamente</MensajeExito>}
        </ContenedorBotonCentrado>

      </Formulario>

    </main>
  )
}

