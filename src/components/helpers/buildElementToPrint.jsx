const buildElementToPrint = () => {

    var entirePage = document.querySelector("#capture").cloneNode(true);
    document.getElementById("doc-to-print").appendChild(entirePage);

    var catchedDiv = document.getElementById("doc-to-print");
    catchedDiv.getElementsByClassName("header")[0].remove();

    return catchedDiv.getElementsByClassName("App")[0];

}

export default buildElementToPrint;