import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

function printToPdf() {

    var entirePage = document.querySelector("#capture");
 
    /* var A4_WIDTH = 793.70;
    var A4_HEIGHT = 1122.51; */
    var htmlWidth = entirePage.offsetWidth;
    var htmlHeight = entirePage.offsetHeight;
    var pdfWidth = htmlWidth;
	var pdfHeight = pdfWidth*(29.7/21);

/*     var pageCount = Math.ceil(htmlHeight / pdfHeight);
 */
    const pdf = new jsPDF('p', 'px', [htmlWidth, htmlHeight]); 

    html2canvas(entirePage)
    .then(canvas => {
        /* canvas.getContext('2d'); */
        var image = canvas.toDataURL("image/png", 1.0);
        pdf.addImage(image, 'PNG', 0, 0, htmlWidth, htmlHeight);
        pdf.save("Josselin DOUINEAU - developer.pdf");
    }); 
    
}

/* function rearrangePdf(entirePage, pageCount, pdfHeight) {
    var header = entirePage.getElementsByClassName("header")[0];
    var intro = entirePage.getElementsByClassName("intro")[0];
    var titles = entirePage.getElementsByClassName("subheading");

    var topicsOfMe = [];
    for(var i = 0; i < titles.length; i++) {
        topicsOfMe.push(
            {
                title: titles[i],
                content: titles[i].nextElementSibling

            }
        )
    }

    var blocksHeight = 0;
    var j = 0;
    var lastBlockInfos = [];
    var repere = null;

    for(var i = 1; i <= pageCount; i++) {
        console.log("topicsOfMe[j]",topicsOfMe[j])
        var titleDone = false;
        blocksHeight = 0;
        var elementToStop = null;
        if(i === 1) {
            blocksHeight += header.offsetHeight;
            blocksHeight += intro.offsetHeight;
        } else if(i === pageCount) {
            break;
        }
        while(blocksHeight < pdfHeight) {
            console.log('blocksHeight', blocksHeight)
            console.log('repere', repere)
            if( (repere !== null && repere.getAttribute('class') !== "subheading") || !titleDone) {
                blocksHeight += topicsOfMe[j].title;
                titleDone = true;
                elementToStop = topicsOfMe[j].title;
            } 
            for(var element of topicsOfMe[j].content.getElementsByClassName('element')) {
                console.log('repere', repere)
                console.log("element,", element)
                if(repere === null || repere.getAttribute('id') === element.getAttribute('id')) {
                    blocksHeight += element.offsetHeight; 
                    elementToStop = repere = element;
                } else {
                    continue;
                }

            }
        
            console.log("j++")
            j++;  
        }

        lastBlockInfos.push( 
            { 
                classToStop : elementToStop.getAttribute('id'),
                distanceToGo: pdfHeight - blocksHeight + elementToStop.offsetHeight
            }
        );

        repere = elementToStop;

        console.log(lastBlockInfos);
        console.log('page', i)
    }

    for(var k = 0; k < lastBlockInfos.length; k++) {
        entirePage.getElementsByClassName(lastBlockInfos[k].classToStop)[0].style.marginTop = lastBlockInfos[k].distanceToGo+'px';
    }

    var docToPrint = entirePage.cloneNode(true);

    return docToPrint;
} */

export default printToPdf;