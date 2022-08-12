import { faCircleCheck, faTimesCircle } from "@fortawesome/free-solid-svg-icons"
import { GrupoInput, IconoValidacion, Input, Label, LeyendaError } from "../elementos/Forms"
import React from 'react';

type InputComp = {
    estado: any;
    setEstado: any;
    tipo: string;
    label: string;
    placeholder: string;
    name: string;
    leyendaError: string;
    expresionRegular?: any;
    funcion?: any;
}

const InputComponent = ({ estado, setEstado, tipo, label, placeholder, name, leyendaError, expresionRegular, funcion }: InputComp) => {
    const handlesetEstado = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEstado({ ...estado, campo: e.target.value });

    };

    const handleValidacion = () => {
        if (expresionRegular) {
            if (expresionRegular.test(estado.campo)) {
                setEstado({ ...estado, valido: 'true' });

            } else {
                setEstado({ ...estado, valido: 'false' });
            }
        }

        if (funcion) {
            funcion();
        }

    };

    const handleOnBlur = () => {

    };

    return (
        <div>
            <Label htmlfor={name} valido={estado.valido}>{label}</Label>
            <GrupoInput>
                <Input
                    type={tipo}
                    placeholder={placeholder}
                    id={name}
                    value={estado.campo}
                    onChange={handlesetEstado}
                    onKeyUp={handleValidacion}
                    onBlur={handleOnBlur}
                    valido={estado.valido}
                />
                <IconoValidacion
                    icon={estado.valido === 'true' ? faCircleCheck : faTimesCircle}
                    valido={estado.valido} />
            </GrupoInput>
            <LeyendaError valido={estado.valido}>{leyendaError}</LeyendaError>
        </div>
    )
}

export default InputComponent;