"use client";
import { useClienteStore } from "@/store/useClienteStore";
import { CircleX, Save, X } from "lucide-react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { useState } from "react";

export default function FormClientes({ visible, close }) {
    const { addCliente } = useClienteStore();
    const [form, setForm] = useState({
        nombre: "",
        dni: "",
        telefono: "",
        correo: "",
        direccion: "",
        sede: { sedeId: 0 },
        fechaPago: "",
        mensualidad: 150, // prueba
        descripcion: "",
    });

    const fecha = new Date().toISOString().split("T")[0];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async () => {
        try {
            await addCliente({
                ...form,
                sede: { sedeId: Number(form.sede.sedeId) },
                mensualidad: Number(form.mensualidad),
                fechaPago: fecha,
            });
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    const sedes = [
        {
            nombre: "San Miguel",
            sede_id: 1,
        },
        {
            nombre: "Magdalena",
            sede_id: 2,
        },
        {
            nombre: "San Bartolo",
            sede_id: 3,
        },
        {
            nombre: "Punta Hermosa",
            sede_id: 4,
        },
        {
            nombre: "Surco",
            sede_id: 5,
        },
    ];

    const footerContent = (
        <div>
            <Button
                label="Guardar"
                icon={<Save />}
                onClick={close && handleSubmit}
                severity="success"
                size="small"
                className="gap-1"
            />
        </div>
    );

    return (
        <div className="card flex justify-content-center">
            <Dialog
                header="Agregar nuevo cliente"
                visible={visible}
                footer={footerContent}
                onHide={close}
                style={{ width: "40vw" }}
            >
                <form className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="nombre">Nombre</label>
                        <InputText
                            id="nombre"
                            name="nombre"
                            aria-describedby="nombre-help"
                            className="p-inputtext-sm"
                            autoComplete="off"
                            value={form.nombre}
                            onChange={handleChange}
                        />
                        <small id="nombre-help">
                            Ingresa el nombre del cliente.
                        </small>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="dni">DNI</label>
                        <InputText
                            id="dni"
                            name="dni"
                            aria-describedby="dni-help"
                            keyfilter="pnum"
                            className="p-inputtext-sm"
                            autoComplete="off"
                            value={form.dni}
                            onChange={handleChange}
                        />
                        <small id="dni-help">Ingresa el DNI del cliente.</small>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="telefono">Teléfono</label>
                            <InputText
                                id="telefono"
                                name="telefono"
                                aria-describedby="telefono-help"
                                keyfilter="pnum"
                                className="p-inputtext-sm"
                                autoComplete="off"
                                value={form.telefono}
                                onChange={handleChange}
                            />
                            <small id="telefono-help">
                                Ingresa el teléfono del cliente.
                            </small>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="correo">Em@il</label>
                            <InputText
                                id="correo"
                                name="correo"
                                aria-describedby="correo-help"
                                keyfilter="email"
                                className="p-inputtext-sm"
                                autoComplete="off"
                                value={form.correo}
                                onChange={handleChange}
                            />
                            <small id="correo-help">
                                Ingresa el email del cliente.
                            </small>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="direccion">Dirección</label>
                        <InputText
                            id="direccion"
                            name="direccion"
                            aria-describedby="direccion-help"
                            className="p-inputtext-sm"
                            autoComplete="off"
                            value={form.direccion}
                            onChange={handleChange}
                        />
                        <small id="direccion-help">
                            Ingresa la dirección del cliente.
                        </small>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="descripcion">Descripción</label>
                        <InputText
                            id="descripcion"
                            name="descripcion"
                            aria-describedby="descripcion-help"
                            className="p-inputtext-sm"
                            autoComplete="off"
                            value={form.descripcion}
                            onChange={handleChange}
                        />
                        <small id="descripcion-help">
                            Ingresa la descripción del cliente.
                        </small>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="sede">Sede</label>
                        <Dropdown
                            name="sedeID"
                            value={form.sede.sedeId}
                            options={sedes}
                            onChange={(e) =>
                                setForm((prev) => ({
                                    ...prev,
                                    sede: { sedeId: e.value },
                                }))
                            }
                            optionLabel="nombre"
                            optionValue="sede_id"
                            placeholder="Selecciona una sede"
                        />
                        <small id="sede-help">
                            Selecciona la sede del cliente.
                        </small>
                    </div>
                </form>
            </Dialog>
        </div>
    );
}
