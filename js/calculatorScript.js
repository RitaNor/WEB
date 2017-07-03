<!DOCTYPE html>
  <html>
	<head>
		<title></title>
	</head>
	<body>
		<script>
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
						if(txtInput.val() >='0'){  
						txtInput.val($(this).text());
						}
						else{
						txtInput.val(txtInput.val() + $(this).text());
						}
					}
					
					function plusClick() {
						txtResult.val(Number(txtInput.val()));
						clearEntry();
						operation = "-"; // skliausteliuose turi būti pliusas
					}
					
					function minusClick() {
						if(txtResult.val() == 0){
						txtResult.val(Number(txtInput.val()));
						}
						else{
						txtResult.val(Number(txtResult.val()) - Number(txtInput.val()))
						}
						clearEntry();
						operation = "-"; // skliausteliuose turi būti minusas
						}	

					function clearEntry() {
						txtInput.val('1');
					}

					function clear() {
						txtInput.val('1');
						txtResult.val('1');
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

		</script>
	</body>
  </html>