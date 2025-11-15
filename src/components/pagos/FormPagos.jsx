import React, { useEffect, useState } from "react";
import { ArrowRight, Save } from "lucide-react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useClienteStore } from "@/store/useClienteStore";
import Link from "next/link";
import { Dropdown } from "primereact/dropdown";
import { estadosPago } from "@/constants/estadosPago";
import { initialPagoForm } from "@/constants/initialForms";

export default function FormPagos({
    visible,
    handleCloseModal,
    mode,
    handleSubmit,
    findCliente,
    selectedPago,
}) {
    const { clientes } = useClienteStore();
    const [dni, setDni] = useState("");
    const [clienteId, setClienteId] = useState(null);
    const [nombre, setNombre] = useState("");
    const [findedCliente, setFindedCliente] = useState(true);
    const [form, setForm] = useState(initialPagoForm);

    const cleanInput = () => {
        setDni("");
        setNombre("");
    };

    const handleFindCliente = async (e) => {
        e.preventDefault();
        try {
            setNombre("");
            await findCliente(dni);
            setNombre(clientes[0]?.nombre || "");
            setClienteId(clientes[0]?.clienteId || null);
            setFindedCliente(true);
        } catch (error) {
            setFindedCliente(false);
            return;
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const footerContent = (
        <div>
            <Button
                label={mode === "crear" ? "Guardar" : "Actualizar"}
                icon={<Save />}
                severity="success"
                size="small"
                className="gap-2"
                onClick={() => handleSubmit(form, clienteId)}
            />
        </div>
    );

    useEffect(() => {
        if (selectedPago) {
            setForm(selectedPago);
        }
    }, [selectedPago]);

    return (
        <div className="card flex justify-content-center">
            <Dialog
                header={mode === "crear" ? "Crear pago" : "Editar pago"}
                footer={footerContent}
                style={{ width: "30vw" }}
                visible={visible}
                onHide={() => {
                    handleCloseModal();
                    cleanInput();
                }}
            >
                <form className="flex flex-col gap-4">
                    {mode !== "editar" && (
                        <>
                            <div className="flex flex-row gap-4 items-end">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="nombre">DNI</label>
                                    <InputText
                                        id="buscarCliente"
                                        name="dni"
                                        aria-describedby="nombre-help"
                                        className="p-inputtext-sm"
                                        autoComplete="off"
                                        keyfilter="pnum"
                                        onChange={(e) => setDni(e.target.value)}
                                        value={dni}
                                    />
                                </div>
                                <div className="">
                                    <Button
                                        icon="pi pi-search"
                                        size="small"
                                        className="mt-2"
                                        severity="secondary"
                                        onClick={handleFindCliente}
                                        role="button"
                                    />
                                </div>
                                {!findedCliente && (
                                    <div className="flex flex-col gap-1 mt-1">
                                        <span className="text-red-500 text-sm font-medium">
                                            Cliente no encontrado
                                        </span>

                                        <Link
                                            href="/admin/clientes"
                                            className="w-fit"
                                        >
                                            <span className="bg-orange-500 text-sm text-white flex flex-row items-center gap-1 px-2 py-0.5 rounded">
                                                Crear cliente
                                                <ArrowRight size={15} />
                                            </span>
                                        </Link>
                                    </div>
                                )}
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="nombre">Cliente</label>
                                <InputText
                                    id="nombre"
                                    name="nombre"
                                    aria-describedby="nombre-help"
                                    className="p-inputtext-sm"
                                    readOnly
                                    value={nombre}
                                />
                            </div>
                        </>
                    )}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="monto">Monto</label>
                        <InputText
                            id="monto"
                            name="monto"
                            aria-describedby="nombre-help"
                            className="p-inputtext-sm"
                            autoComplete="off"
                            keyfilter="pnum"
                            value={form.monto}
                            onChange={handleChange}
                        />
                        <small id="nombre-help">
                            Ingresa el monto del pago.
                        </small>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="nombre">Estado</label>
                        <Dropdown
                            placeholder="Estados de pago"
                            options={estadosPago}
                            optionLabel="label"
                            optionValue="value"
                            name="estado"
                            value={form.estado}
                            onChange={(e) =>
                                setForm((prev) => ({
                                    ...prev,
                                    estado: e.value,
                                }))
                            }
                        ></Dropdown>
                        <small id="nombre-help">
                            Selecciona el estado del pago.
                        </small>
                    </div>
                </form>
            </Dialog>
        </div>
    );
}
