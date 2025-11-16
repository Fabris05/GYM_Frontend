import { Save } from "lucide-react";
import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import { Dialog } from "primereact/dialog";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { useEffect, useState } from "react";
import { initialUsuarioForm } from "@/constants/initialForms";
import { usuariosRoles } from "@/constants/usuarios";

export default function FormUsuario({
    visible,
    handleModalClose,
    mode,
    selectedUsuario,
    handleSubmit,
}) {
    const [form, setForm] = useState(initialUsuarioForm);
    const [changePassword, setChangePassword] = useState(false);
    const [newPassword, setNewPassword] = useState("");

    const handleChangePassword = (e) => {
        setChangePassword(e.checked);
        e.checked
            ? setNewPassword("")
            : setNewPassword(selectedUsuario.password);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmitForm = () => {
        const usuarioData = { ...form, password: newPassword };
        handleSubmit(usuarioData);
    };

    const footerContent = (
        <div>
            <Button
                label={mode === "crear" ? "Guardar" : "Actualizar"}
                icon={<Save />}
                severity="success"
                size="small"
                className="gap-2"
                onClick={handleSubmitForm}
            />
        </div>
    );

    useEffect(() => {
        if (selectedUsuario && mode === "editar") {
            setForm(selectedUsuario);
            setNewPassword(selectedUsuario.password);
        }
    }, [selectedUsuario, mode]);
    return (
        <div className="card flex justify-content-center">
            <Dialog
                header={mode === "crear" ? "Añadir Usuario" : "Editar Usuario"}
                footer={footerContent}
                style={{ width: "35vw" }}
                visible={visible}
                onHide={() => {
                    setForm(initialUsuarioForm);
                    handleModalClose();
                }}
            >
                <form className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="nombre" className="font-bold">
                            Usuario
                        </label>
                        <InputText
                            id="nombre"
                            type="email"
                            name="nombreUsuario"
                            aria-describedby="nombre-help"
                            className="p-inputtext-sm"
                            autoComplete="off"
                            keyfilter="email"
                            value={form.nombreUsuario}
                            onChange={handleChange}
                        />
                        <small id="nombre-help">
                            Ingresa el email del usuario.
                        </small>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="cargo" className="font-bold">
                            Cargo
                        </label>
                        <Dropdown
                            options={usuariosRoles}
                            id="cargo"
                            name="rol"
                            optionLabel="cargo"
                            optionValue="cargo"
                            placeholder="Selecciona un cargo"
                            value={form.rol}
                            onChange={handleChange}
                        ></Dropdown>
                        <small id="nombre-help">
                            Selecciona el cargo del usuario.
                        </small>
                    </div>
                    {mode === "crear" && (
                        <div className="flex flex-col gap-2 mt-4">
                            <label htmlFor="nombre" className="font-bold">
                                Contraseña
                            </label>
                            <div className="card flex justify-content-center items-center">
                                <Password
                                    id="pass"
                                    name="password"
                                    toggleMask
                                    weakLabel="Demasiado débil"
                                    mediumLabel="Complijadad media"
                                    strongLabel="Contraseña compleja"
                                    promptLabel="Ingresa la contraseña"
                                    value={form.password}
                                    onChange={handleChange}
                                />
                            </div>
                            <small id="nombre-help">
                                Ingresa la nueva contraseña del usuario.
                            </small>
                        </div>
                    )}
                    {mode === "editar" && (
                        <div className="flex flex-row gap-4 items-center mt-4">
                            <label htmlFor="contrasena">
                                ¿Cambiar Contraseña?
                            </label>
                            <Checkbox
                                onChange={handleChangePassword}
                                checked={changePassword}
                            />
                        </div>
                    )}
                    {changePassword && (
                        <div className="flex flex-col gap-2 mt-4">
                            <label htmlFor="nombre" className="font-bold">
                                Nueva Contraseña
                            </label>
                            <div className="card flex justify-content-center items-center">
                                <Password
                                    id="pass"
                                    name="password"
                                    toggleMask
                                    weakLabel="Demasiado débil"
                                    mediumLabel="Complijadad media"
                                    strongLabel="Contraseña compleja"
                                    promptLabel="Ingresa la contraseña"
                                    value={newPassword}
                                    onChange={(e) =>
                                        setNewPassword(e.target.value)
                                    }
                                />
                            </div>
                            <small id="nombre-help">
                                Ingresa la nueva contraseña del usuario.
                            </small>
                        </div>
                    )}
                </form>
            </Dialog>
        </div>
    );
}
