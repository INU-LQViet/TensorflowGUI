'user strict'
// tensor template
const tensorflowObj = {
    layeractivation: 
    {activation:['elu','hardSigmoid','linear','relu',
    'relu6', 'selu','sigmoid','softmax','softplus',
    'softsign','tanh','swish','mish'],
    link: 'https://js.tensorflow.org/api/latest/#layers.activation'},
}

// convert data to tensor
export function covertdatatensor(data){
    var tensors = {};
    var inputarray = toarray(data.input);
    var outputarray = toarray(data.output);

    console.log(inputarray);
    // tensors.input = tf.tensor2d();
    // tensors.output = tf.tensor2d(Object.values(data.output));
    console.log(tensors);

    function toarray(arrs){
        var temp = [];
        for(let arr in arrs){
            temp.push(Object.values(arr));
        }
        return temp;
    }
};
// linearization
export function linearization(){


}

// NN structure
export function NNmodel(){

}
// training
export function modeltraining(){

}
// predict
export function predictData(){

}