import { useState } from "react";

export default function useModal(){
    const [visible, setVisible] = useState(false);
    const [visibleView, setVisibleView] = useState(false);
    const open = () => setVisible(true);
    const close = () => setVisible(false);
    const openView = () => setVisibleView(true);
    const closeView = () => setVisibleView(false);

    return {visible, open, close, visibleView, openView, closeView};

}