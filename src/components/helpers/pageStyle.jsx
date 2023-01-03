const pageStyle = () => {
    return `
        @media print {
            html, body {
                height: initial !important;
                overflow: initial !important;
                print-color-adjust: exact; 
                -webkit-print-color-adjust: exact; 
                background-color: var(--back-color-1) !important;
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