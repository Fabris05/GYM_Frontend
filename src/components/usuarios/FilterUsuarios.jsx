import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { usuariosRoles } from "@/constants/usuarios";
import { useState } from "react";
import { useUsuarioStore } from "@/store/useUsuarioStore";
import { ListRestart } from "lucide-react";

export default function FilterUsuarios({ fetchUsuarios }) {
    const { findUsuariosByRol, findByNombreUsuario } = useUsuarioStore();
    const [rol, setRol] = useState(null);
    const [nombreUsuario, setNombreUsuario] = useState("");
    const [isFiltered, setIsFiltered] = useState(false);

    const findByRol = (e) => {
        setRol(e.value);
        findUsuariosByRol(e.value);
        setIsFiltered(true);
    };

    const findByNombreUsr = () => {
        findByNombreUsuario(nombreUsuario);
        setIsFiltered(true);
    };

    const clearFilters = () => {
        setRol(null);
        setNombreUsuario("");
        setIsFiltered(false);
        fetchUsuarios();
    }

    return (
        <div className="flex flex-row gap-3">
            <div className="p-inputgroup">
                <InputText
                    placeholder="usuario@mail.com"
                    className="p-inputtext-sm"
                    name="nombreUsuario"
                    value={nombreUsuario}
                    onChange={(e) => setNombreUsuario(e.target.value)}
                />
                <Button
                    icon="pi pi-search"
                    severity="success"
                    aria-label="Search"
                    size="small"
                    type="submit"
                    onClick={(e) => findByNombreUsr(e.target.value)}
                />
            </div>
            <div>
                <Dropdown
                    placeholder="Buscar roles"
                    options={usuariosRoles}
                    optionLabel="cargo"
                    optionValue="cargo"
                    onChange={(e) => findByRol(e)}
                    value={rol}
                    className="w-50"
                ></Dropdown>
            </div>
            {isFiltered && (
                <div className="">
                    <Button icon={<ListRestart />} onClick={clearFilters} severity="secondary" />
                </div>
            )}
        </div>
    );
}
