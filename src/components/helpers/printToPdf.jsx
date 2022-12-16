import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

function printToPdf() {

    var entirePage = document.querySelector("#capture").cloneNode(true);
    document.getElementById("doc-to-print").appendChild(entirePage);

    var catchedDiv = document.getElementById("doc-to-print");
    catchedDiv.getElementsByClassName("header")[0].remove();

    var elementToPrint = catchedDiv.getElementsByClassName("App")[0];

    var htmlWidth = elementToPrint.offsetWidth;
    var htmlHeight = elementToPrint.offsetHeight;
 
    const pdf = new jsPDF('p', 'px', [htmlWidth, htmlHeight]); 

    html2canvas(elementToPrint)
        .then(canvas => {
            var image = canvas.toDataURL("image/png", 1.0);
            pdf.addImage(image, 'PNG', 0, 0, htmlWidth, htmlHeight);
            pdf.save("Josselin DOUINEAU - developer.pdf");
        });  

    catchedDiv.getElementsByClassName("App")[0].remove();
}

export default printToPdf;