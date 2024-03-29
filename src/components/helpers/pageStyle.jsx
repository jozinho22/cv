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
            .me, h1 {
                font-size: 15px !important;
            }
            .title {
                font-size: 12px !important;
                padding-top: 10px !important; padding-bottom: 10px !important;
                width: 80%;
            }
            .page-break {
                page-break-after: auto;
            }
            .experience .element {
                page-break-inside: auto;
            } 
            .element {
                page-break-inside: avoid;
            } 
        }

        @page {
            size: A4;

            @bottom-right {
                content: counter(page) " of " counter(pages);
            }
        }
         
    `
}

export default pageStyle;