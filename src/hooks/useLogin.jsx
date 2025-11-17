import useModal from "@/hooks/useModal";
import { useAuthStore } from "@/store/useAuthStore";
import { confirmLogin } from "@/utils/alerts";

export default function useLogin() {
    const { login, error, loading, userLogged } = useAuthStore();
    const { visible, open, close } = useModal();

    const handleOpenLogin = () => {
        open();
    };

    const handleCloseLogin = () => {
        close();
    };

    const userLogin = async (nombreUsuario, password) => {
        await login({ nombreUsuario, password });
    };
    return {
        visible,
        handleOpenLogin,
        handleCloseLogin,
        userLogin,
        error,
        loading,
    };
}
