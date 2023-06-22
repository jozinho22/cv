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
            .curriculum-vitae-container {
                font-size: 11px !important;
            }
            .title {
                font-size: 11px !important;
            }
            .page-break {
                
                page-break-inside: avoid;
            }
        }

        @page {
            size: A4;
        }
    `
}

export default pageStyle;