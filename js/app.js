// import {data_analysis} from "./data_analysis.js";
// // import {covertdatatensor} from  "./model.js";
const tensorflowObj = {
    layeractivation: 
    {activation:['elu','hardSigmoid','linear','relu',
    'relu6', 'selu','sigmoid','softmax','softplus',
    'softsign','tanh','swish','mish'],
    link: 'https://js.tensorflow.org/api/latest/#layers.activation'},
}


window.onload = function(){
    // data_analysis();

    var modelStructure = document.getElementById('chooseModel');
    var numberlayer = document.getElementById('number-layer');
    var layerContain = document.getElementById('layerContain');

    modelStructure.addEventListener('click',function(){
        layerContain.textContent = '';
        for(let i=1;i <= numberlayer.value;i++){
            let playerth = document.createElement('p');
            let layerth = document.createElement('input');
            let labellayerth = document.createElement('label');
            let selectth = document.createElement('select');
            let labelselectth = document.createElement('label');

            playerth.appendChild(document.createTextNode('Layer '+i))            
            layerth.id = 'layerth' + i;
            layerth.type = 'number';
            layerth.min = 1;
            layerth.max = 100;

            labellayerth.htmlFor = 'layer'+ i;
            labellayerth.appendChild(document.createTextNode('Number of Units'));

            selectth.id = 'select' + i;
            var actarr = tensorflowObj.layeractivation.activation;
            for (let i = 0; i <actarr.length;i++){
                let option = document.createElement('option');
                option.value = actarr[i];
                option.text = actarr[i];
                selectth.appendChild(option);
            }

            labelselectth.id = 'layerSc' +i;
            labelselectth.htmlFor = 'select' + i;
            labelselectth.appendChild(document.createTextNode(
                'Select activation function'));

            layerContain.appendChild(playerth);
            layerContain.appendChild(labellayerth);
            layerContain.appendChild(layerth);
            layerContain.appendChild(labelselectth);
            layerContain.appendChild(selectth);
        }
        let btnfinishLayer = document.createElement('button');
        btnfinishLayer.id = 'btnfinishLayer';
        btnfinishLayer.appendChild(document.createTextNode(
            'Okay'));
        layerContain.appendChild(btnfinishLayer); 
})

}