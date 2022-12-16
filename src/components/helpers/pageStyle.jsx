const pageStyle = () => {
    return `
        @media print {
            html, body {
                height: initial !important;
                overflow: initial !important;
                -webkit-print-color-adjust: exact;
            }
        }

        @media print {
            .page-break {
                margin-top: 1rem;
                display: block;
                page-break-before: auto;
            }
        }

        @page {
            size: A4;
        }
    `
}

export default pageStyle;