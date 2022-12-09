import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

function printToPdf() {

    var entirePage = document.querySelector("#capture");

    console.log(entirePage.offsetHeight) 
    var htmlWidth = entirePage.offsetWidth;
    var htmlHeight = entirePage.offsetHeight;
    var pdfWidth = htmlWidth;
	var pdfHeight = (pdfWidth * 1.5);

    const pdf = new jsPDF('p', 'px', [pdfWidth, pdfHeight]); 
    var pageCount = Math.ceil(htmlHeight / pdfHeight) - 1;

    html2canvas(entirePage)
    .then(canvas => {
        /* canvas.getContext('2d'); */
        var image = canvas.toDataURL("image/png", 1.0);
        pdf.addImage(image, 'PNG', 0, 0, htmlWidth, htmlHeight);

        for (var i = 1; i <= pageCount; i++) {
            pdf.addPage();
            pdf.addImage(image, 'PNG', 0, -(pdfHeight * i), htmlWidth, htmlHeight);
        }

        pdf.save("Josselin DOUINEAU - developer.pdf");
    }); 
    
}

export default printToPdf;