import { Dropdown } from "primereact/dropdown";
import { useState } from "react";
import { categorias } from "@/constants/categorias";
import { ListRestart } from "lucide-react";
import { Button } from "primereact/button";

export default function FilterProveedores({
    fetchProveedores,
    findByCategoria,
}) {
    const [categoria, setCategoria] = useState(null);
    const [isFiltered, setIsFiltered] = useState(false);

    const findProveedoresByCategoria = (e) => {
        setCategoria(e.value);
        findByCategoria(e.value);
        setIsFiltered(true);
    };

    const refreshTable = () => {
        setCategoria(null);
        setIsFiltered(false);
        fetchProveedores();
    };

    return (
        <div className="flex flex-row gap-3">
            <div>
                <Dropdown
                    placeholder="Filtrar por categoría"
                    options={categorias}
                    optionLabel="name"
                    optionValue="code"
                    onChange={(e) => findProveedoresByCategoria(e)}
                    value={categoria}
                ></Dropdown>
            </div>
            {isFiltered && (
                <div>
                    <Button
                        icon={<ListRestart />}
                        severity="secondary"
                        aria-label="Filter"
                        className="ml-2"
                        onClick={refreshTable}
                    ></Button>
                </div>
            )}
        </div>
    );
}
