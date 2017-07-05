var txtInput;
var txtResult;
var operation;

function initialize(){


txtInput = $('#txtInput');
txtResult = $('#txtResult');
				
	$('#btn0').on('click',numberClick);
				$('#btn1').on('click',numberClick);
				$('#btn2').on('click',numberClick);
				$('#btn3').on('click',numberClick);
				$('#btn4').on('click',numberClick);
				$('#btn5').on('click',numberClick);
				$('#btn6').on('click',numberClick);
				$('#btn7').on('click',numberClick);
				$('#btn8').on('click',numberClick);
				$('#btn9').on('click',numberClick);
				$('#btnPlus').on('click', plusClick);
				$('#btnMinus').on('click', minusClick);
				$('#btnClear').on('click', clear);
				$('#btnResult').on('click', getResult);
			}
			
					function numberClick() {
						if(txtInput.val() =='0'){  
						txtInput.val($(this).text());
						}
						else{
						txtInput.val(txtInput.val() + $(this).text());
						}
					}
					
					function plusClick() {
						txtResult.val(Number(txtInput.val()));
						clearEntry();
						operation = "+"; 
					}
					
					function minusClick() {
						if(txtResult.val() == 0){
							txtResult.val(Number(txtInput.val()));
						}
						else{
						txtResult.val(Number(txtResult.val()) - Number(txtInput.val()))
						}
						clearEntry();
						operation = "-";
						}	

					function clearEntry() {
						txtInput.val('0');
					}

					function clear() {
						txtInput.val('0');
						txtResult.val('0');
					}

					function getResult() {
						if(operation=="+"){
							txtResult.val(Number(txtResult.val()) + Number(txtInput.val()));
						}
						if(operation=="-"){
							txtResult.val(Number(txtResult.val()) - Number(txtInput.val()));
						}
						clearEntry();
					}
				initialize();
					
		
