window.onload=function(){	
	var body = document.body,
    html = document.documentElement;
	var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
	var Menu = document.getElementById("menu");
	Menu.style.height(height);                      
};

