var s = [],
	size=10;

/* Key Schedule Algorithm */
function doksa(key){
	for(i=0; i<size; i++){
		s.push(i);
	}
	var key_len = key.length;
	for(j=0; j<size;j++){
		j=(j+s[i] +key.charAt[i%key_len])%(size+1);
		console.log(key.charAt[i]);
		var temp = s[i];
		s[i]=s[j];
		s[j]=temp;
		console.log('si = '+s[i]);
	}
	return s;
}
console.log(doksa('abc'));
var rc4 = function(text, key){

}