import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

function printToPdf() {

    var entirePage = document.querySelector("#capture").cloneNode(true);
    document.getElementById("doc-to-print").appendChild(entirePage);

    var docToPrint = document.getElementById("doc-to-print");
    docToPrint.getElementsByClassName("header")[0].remove();

    var htmlWidth = docToPrint.getElementsByClassName("App")[0].offsetWidth;
    var htmlHeight = docToPrint.offsetHeight;
 
    const pdf = new jsPDF('p', 'px', [htmlWidth, htmlHeight]); 

    html2canvas(docToPrint.getElementsByClassName("App")[0])
    .then(canvas => {
        var image = canvas.toDataURL("image/png", 1.0);
        pdf.addImage(image, 'PNG', 0, 0, htmlWidth, htmlHeight);
        pdf.save("Josselin DOUINEAU - developer.pdf");
    }); 

    docToPrint.getElementsByClassName("App")[0].remove();
}

export default printToPdf;