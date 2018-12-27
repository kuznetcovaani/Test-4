//4.1
function P1() {
		var a;//Высота
		var b;//Площадь
		var c;//Основание
		a = document.querySelector('input[id=textH]').value;
		console.log('Height ='+ ' '+ a); 
		c = document.querySelector('input[id=textW]').value;
		console.log('Width ='+ ' '+ c); 
		b = c*a;
		console.log('Площадь = '+' '+b);
		if (isNaN(b)==true) {
			alert("Введите числа!!!");
		} 
		else {
			alert('Площадь='+' '+b);
		}
	}
//4.2
function P2() {
	var s;
	var x;
	s=1;
	v = 0;
	x = document.querySelector('input[id=textX]').value;
	console.log('X ='+ ' '+ x);
	for (var n = 1; n < 11 ;n++) {
		s*=(Math.pow(x,n)+(n+1));
	}
	v = s;
	console.log('Произведение в задании 4.2 варианта 4 = '+v);
	alert('Произведение равняется '+v);
}



//4.3
function P3() {
	var matrix= document.getElementById('matrix');
	var s=0;
	var t=0;
  // итерирование по строкам    
  for (var i = 0, row; row = matrix.rows[i]; i++) {
    // обнуляем сумму по строке
    
    // итерирование по столбцам      
    for (var j = 0, col; col = row.cells[j]; j++) {
    	s += parseFloat(col.firstChild.nodeValue);     
    }
}
console.log('Сумма всех элементов матрицы='+s)
if (s/8==260){
	console.log('Данная матрица является магическим квадратом')
	alert('Данная матрица является магическим квадратом')
}
else{
	console.log('Данная матрица не является магическим квадратом')
	alert('Данная матрица не является  магическим квадратом')
}
  //260-магическая константа магического квадрата 8 порядка
  //вычисляется по формуле К=n*(n^2+1)/2. n=8.
}
//4.4
function getRandomInt(min,max) {
	return Math.floor(Math.random() * (max - min)) + min;
}
function getArray(n){
	var a = [], min1 = parseFloat(znach.rows[0].cells[0].innerHTML), max1 = parseFloat(znach.rows[0].cells[1].innerHTML) ;	
	for (let i = 0; i < n**2; i++){
		a.push(getRandomInt(min1, max1));
	}
	return a;
}
function getResultArray(a) {
	return a.sort(function(a, b){return a - b});	
}
function start() {
	var znach = document.getElementById('znach');
	var m = [parseFloat(znach.rows[0].cells[0].innerHTML),parseFloat(znach.rows[0].cells[1].innerHTML),parseFloat(znach.rows[0].cells[2].innerHTML)];
	var min = m[0], max = m[1], n = m[2];
	// console.log(getResultArray(getArray(n)));
	var matrix = getResultArray(getArray(n));
	console.log(matrix);
	var newmas =[];
	for (var i = 0; i < n ; i++){
		newmas = [];
		if (n%2==0){
			if(i%2==0){
				for (var j = 0; j < n ;j++){			
					newmas.push(matrix[(n*(n-i-1))+j]);			
				}
			} else {
				for (var j = 0; j < n ;j++){			
					newmas.push(matrix[(n*(n-i))-1-j]);			
				}			
			}		
		}
		if(n%2==1){
			if(i%2==0){
				for (var j = 0; j < n ;j++){			
					newmas.push(matrix[(n*(n-i))-1-j]);			
				}
			} else {
				for (var j = 0; j < n ;j++){			
					newmas.push(matrix[(n*(n-i-1))+j]);			
				}			
			}				
		} 
		console.log(newmas);
	}
}