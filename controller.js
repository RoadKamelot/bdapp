var myApp = angular.module('simpleApp',[]);

myApp.controller('rc4Controller', ['$scope', function($scope) {

$scope.enC = function(text, key){
	$scope.encryption = rc4(text, key);
};
 $scope.deC = function(text, key){
	$scope.decryption = rc4(text, key);
};

}]);

var s = [],
	cipher = [],
	size=10;
/* Key Schedule Algorithm */
function doksa(key){
	for(i=0; i<size; i++)
		s.push(i);
	
	var key_len = key.length,
		j=0;
	for(i=0; i<size;i++){
		j=(j+s[i] +key.charAt(i%key_len).charCodeAt(0))%(size+1); 
	
	/*swapping s[i] and s[j]*/		
		var temp = s[i];
		s[i]=s[j];
		s[j]=temp;
	/* ==================== */
		//console.log('si = '+s[i] + '  --------- sj = '+ s[j]);
	}
	console.log('KSA = '+s);
}
/* Psudorandom PRGA algorithm */
function doprga(){
	var i=0, 
		j=0,
		k=0;
	while(k<size){
		i = (i+1)%size;
		j = (j+s[i])%size;

	/*swapping s[i] and s[j]*/
		var temp = s[i];
		s[i]=s[j];
		s[j]=temp;
	/* ==================== */
	cipher[k]=s[(s[i]+s[j])%size];
	k++;
	}
	console.log('cipher= ' +cipher);

}

function rc4(text, key){
	doksa(key);
	doprga();
	var cipherText=[];
	for(i=0;i<text.length;i++){
		var charToDec = text[i].charCodeAt(0);
		var temp=cipher[i]^charToDec;
		cipherText.push(temp);
		console.log(temp);
	}
	return cipherText;
}
//console.log(String.fromCharCode('100')); to get char back from ascii value
