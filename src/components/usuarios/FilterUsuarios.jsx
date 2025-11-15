import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { usuariosRoles } from "@/constants/usuarios";
import { useState } from "react";

export default function FilterUsuarios() {

    const [rol, setRol] = useState(null);

    const findUsuariosByRol = (e) => {
        setRol(e.value);
        // fetchUsuarios({ rol: e.value });
    }

    return (
        <div className="flex flex-row gap-3">
            <div className="p-inputgroup">
                <InputText
                    placeholder="usuario@mail.com"
                    className="p-inputtext-sm"
                    name="dni"
                    // value={dni}
                    // onChange={(e) => setDni(e.target.value)}
                />
                <Button
                    icon="pi pi-search"
                    severity="success"
                    aria-label="Search"
                    size="small"
                    type="submit"
                    // onClick={(e) => handleSubmit(e, "dni")}
                />
            </div>
            <div>
                <Dropdown
                    placeholder="Buscar roles"
                    options={usuariosRoles}
                    optionLabel="cargo"
                    optionValue="cargo"
                    onChange={(e) => findUsuariosByRol(e)}
                    value={rol}
                    className="w-50"
                ></Dropdown>
            </div>
        </div>
    );
}
