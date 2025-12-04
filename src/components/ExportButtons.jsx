import { Button } from "primereact/button";

export default function ExportButtons({
    data,
    exportCSV,
    exportExcel,
    exportPDF,
    titulo,
}) {
    return (
        <div className="flex align-items-center justify-content-start gap-3">
            <Button
                type="button"
                icon="pi pi-file-export"
                severity="secondary"
                rounded
                onClick={() => exportCSV(data)}
            />
            <Button
                type="button"
                icon="pi pi-file-excel"
                severity="info"
                rounded
                onClick={() => exportExcel(data)}
            />
            <Button
                type="button"
                icon="pi pi-file-pdf"
                severity="warning"
                rounded
                onClick={() => exportPDF(data, titulo)}
            />
        </div>
    );
}
