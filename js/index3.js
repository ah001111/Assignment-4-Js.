var demoo = document.querySelector('.demoo');

var dataofuserses = [];

var getdatauser = localStorage.getItem('dataofusers')
var convertstrtoarr = JSON.parse(getdatauser);
 var dataofuserses = convertstrtoarr;
 
 for(var i = 0 ; i < dataofuserses.length ; i++){
 var namevalue = dataofuserses[i].nameinput;

 }
 demoo.innerHTML = `<p class="display-1 text-info">Welcome</p><h1>${namevalue}</h1>`
