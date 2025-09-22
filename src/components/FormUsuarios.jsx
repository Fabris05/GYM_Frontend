"use client";
import { addUser } from "@/services/userService";
import { useUserStore } from "@/store/useUserStore";
import { CircleX, Save, X } from "lucide-react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { sedes } from "@/constants/sedes";
import { cargos } from "@/constants/cargos";
import { initialUserForm } from "@/constants/initialForms";

export default function FormUsuarios({ visible, close }) {
    const [form, setForm] = useState(initialUserForm);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async () => {
        try {
            // await addUser({
            //     ...form,
            //     sede: { sedeId: Number(form.sede.sedeId) },
            //     cargo: form.cargo,
            // });
            console.log("Usuario agregado:", form);
        } catch (error) {
            console.error("Error al registrar:", error);
        }
    };

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
                header="Agregar nuevo usuario"
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
                            Ingresa el nombre del usuario.
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
                        <small id="dni-help">Ingresa el DNI del usuario.</small>
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
                                Ingresa el teléfono del usuario.
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
                                Ingresa el email del usuario.
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
                            Ingresa la dirección del usuario.
                        </small>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
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
                                optionValue="sedeId"
                                placeholder="Selecciona una sede"
                            />
                            <small id="sede-help">
                                Selecciona la sede del usuario.
                            </small>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="cargo">Cargo</label>
                            <Dropdown
                                name="cargo"
                                value={form.cargo}
                                options={cargos}
                                onChange={(e) =>
                                    setForm((prev) => ({
                                        ...prev,
                                        cargo: e.value,
                                    }))
                                }
                                optionLabel="cargo"
                                optionValue="cargo"
                                placeholder="Selecciona un cargo"
                            />
                            <small id="cargo-help">
                                Selecciona el cargo del usuario.
                            </small>
                        </div>
                    </div>
                </form>
            </Dialog>
        </div>
    );
}
