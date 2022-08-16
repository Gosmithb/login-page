import { collection, addDoc } from 'firebase/firestore';
import { MensajeExito } from './elementos/Forms';
import db from './firebase/config';

type nuevoUsuarioProps = {
  usuario: string;
  nombre: string;
  password: string;
  correo: string;
  telefono: string;
}

export const NuevoUsuario = ({ usuario, nombre, password, correo, telefono }: nuevoUsuarioProps) => {

  addDoc(collection(db, 'usuarios'), {
    usuario: usuario,
    nombre: nombre,
    password: password,
    correo: correo,
    telefono: telefono
  });
  


  return (
    <MensajeExito>Formulario enviado correctamente</MensajeExito>
  )
}

