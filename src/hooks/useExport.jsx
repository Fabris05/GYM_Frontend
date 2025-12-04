import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { errorExport } from "@/utils/alerts";

export default function useExport() {
    const datos = (data) => {
        if (!data) return [];
        return Array.isArray(data) ? data : [data];
    };

    const getFileName = (prefix) => {
        const date = new Date().toISOString().split("T")[0];
        return `${prefix}_${date}`;
    };

    const exportCSV = (data, filename = "export") => {
        const rows = datos(data);
        if (rows.length === 0) {
            errorExport();
            return;
        }

        const separator = ",";
        const keys = Object.keys(rows[0]);

        const csvContent = [
            keys.join(separator),
            ...rows.map((row) =>
                keys
                    .map((k) => {
                        let cell =
                            row[k] === null || row[k] === undefined
                                ? ""
                                : row[k];
                        cell =
                            cell instanceof Date
                                ? cell.toLocaleString()
                                : cell.toString().replace(/"/g, '""');
                        if (cell.search(/("|,|\n)/g) >= 0) cell = `"${cell}"`;
                        return cell;
                    })
                    .join(separator)
            ),
        ].join("\n");

        const blob = new Blob(["\uFEFF" + csvContent], {
            type: "text/csv;charset=utf-8;",
        });
        const link = document.createElement("a");
        if (link.download !== undefined) {
            const url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", `${getFileName(filename)}.csv`);
            link.style.visibility = "hidden";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    const exportExcel = (data, filename = "export") => {
        const rows = datos(data);

        if (rows.length === 0) {
            errorExport();
            return;
        }

        const workseet = XLSX.utils.json_to_sheet(rows);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, workseet, "Datos");

        XLSX.writeFile(workbook, `${getFileName(filename)}.xlsx`);
    };

    const exportPDF = (
        data,
        titulo,
        filename = "export",
    ) => {
        const rows = datos(data);
        if (rows.length === 0) {
            errorExport();
            return;
        }

        const doc = new jsPDF();

        const columns = Object.keys(rows[0]).map((key) => ({
            header: key.toUpperCase(),
            dataKey: key,
        }));
        const body = rows.map((row) => Object.values(row));

        doc.text(`Reporte de ${titulo}`, 14, 15);

        autoTable(doc, {
            head: [Object.keys(rows[0]).map((key) => key.toUpperCase())],
            body: body,
            startY: 20,
            theme: "grid",
            styles: { fontSize: 8 },
            headStyles: { fillColor: [234, 179, 8] },
        });
        doc.save(`${getFileName(filename)}.pdf`);
    };

    return { exportCSV, exportExcel, exportPDF };
}
