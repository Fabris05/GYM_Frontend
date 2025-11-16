import useModal from "@/hooks/useModal";

export default function useLogin() {
    const { visible, open, close } = useModal();

    const handleOpenLogin = () => {
        open();
    }

    const handleCloseLogin = () => {
        close();
    }

    return { visible, handleOpenLogin, handleCloseLogin };
}
