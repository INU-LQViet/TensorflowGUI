export function data_analysis(){

    var datainput = document.getElementById('datainput');
    var btn_showData = document.getElementById('btn_showData');
    var checkedInput = document.getElementsByClassName('checkinput');
    var checkedOutput = document.getElementsByClassName('checkoutput');
    var chooseDatabtn = document.getElementById('data_choose');
    
    var Filepath = ''; // take path of the files
    var dataTotal = []; // save the temp of data files
    var inputcolumns = []; // take the array of colect name of input data
    var outputcolumns = []; // take the array of colect name of ouput data
    var input =[]; // array object of all input data
    var output =[]; // array object of all input data
    // var tempdata = {};
    
    // take data URL
    datainput.addEventListener('change', function(event){
        Filepath = URL.createObjectURL(event.target.files[0]); // take name
        btn_showData.disabled = false; // disable button
    });
    btn_showData.addEventListener('click',function(){
        if(Filepath){
            d3.csv(Filepath) // take data to D3 library
            .then(function(data){
                // console.log(Object.keys(data[0]))
                dataTotal = data; 
                let columns =  Object.keys(data[0]); 
                tableShow(data, columns) 
                addInput(columns);
                addOutput(columns);
                btn_showData.disabled = true;
            })
            .catch(function(err){
                console.error(err);
            })
        }else{
            window.alert('Choose File first!')
        }
    });
    
    chooseDatabtn.addEventListener('click',function(){
        getchecked(checkedInput, inputcolumns);
        getchecked(checkedOutput, outputcolumns);
    //    console.log(dataTotal);
    //    console.log(outputcolumns);
        input = getdata(inputcolumns, dataTotal);
        output = getdata(outputcolumns, dataTotal);
        // console.log(input);
        // console.log(output);
    })
    
    
    // show data to table
    function tableShow(data, columns){
        let table = d3.select('#table_contain')
        let thead = table.append('thead')
        let tbody = table.append('tbody')
    
        thead.append('tr')
            .selectAll('th')
            .data(columns)
            .enter()
            .append('th')
            .text(function(d){return d})
    
        let rows = tbody.selectAll('tr')
                        .data(data)
                        .enter()
                        .append('tr')
        
        let cells = rows.selectAll('td')
                        .data(function(row){
                            return columns.map(function(column){
                                return {column: column, value: row[column]}
                            })
                        })
                        .enter()
                        .append('td')
                        .text(function(d){return d.value})
    
        return table;                
    
    }
    
    function addInput(columns){
        var divInput = document.getElementById('input_contain')
        for(let i =0; i< columns.length; i++){
            var checkbox = document.createElement('input');
            var label = document.createElement('label');
            checkbox.type = 'checkbox';
            checkbox.name = columns[i];
            checkbox.value = columns[i];
            checkbox.id = 'input'+ columns[i];
            checkbox.className = 'checkinput';
            label.htmlFor = 'input'+ columns[i];
            label.appendChild(document.createTextNode(columns[i]));
            divInput.appendChild(checkbox);
            divInput.appendChild(label);
        }
    }
    
    function addOutput(columns){
        var divInput = document.getElementById('output_contain')
        
        for(let i =0; i< columns.length; i++){
            var checkbox1 = document.createElement('input');
            var label1 = document.createElement('label');
            
            checkbox1.type = 'checkbox';
            checkbox1.name = columns[i];
            checkbox1.value = columns[i];
            checkbox1.className = 'checkoutput';
            checkbox1.id = 'output'+ columns[i];
            label1.htmlFor = 'output'+ columns[i];
            label1.appendChild(document.createTextNode(columns[i]));
            divInput.appendChild(checkbox1);
            divInput.appendChild(label1);
        }
    }
    
    function getchecked(chb, getcolumns){
        for(let i=0; i < chb.length; i++){
            if(chb[i].checked){
                getcolumns.push(chb[i].value);
            }
        }
        return getcolumns;
    }
    
    function getdata(columns, dt){
        if(columns===[]){
            window.alert('Please select the data!')
        }else{
            let redt = [];
            for(let i =0; i< dt.length; i++){
                let tempObj ={}
                for (let column of columns){
                    tempObj[column] = dt[i][column];
                }
                redt.push(tempObj);
            }
            return redt;
        }
    }

    function genModel(){
        let build_model_contain = document.createElement('div');
        build_model_contain.id = "build_model";
        return build_model_contain;
    };
    // tempdata.input = input;
    // tempdata.output = output;
    // return tempdata;
}
