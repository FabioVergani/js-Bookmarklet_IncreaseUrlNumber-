javascript:(function($){
 var l=$.location,p=l.pathname;
 if(p.length>1){
	if(p.endsWith('/')){
	 console.info('nofile¹','dominio.it/path/');
	 if()

	}else{
	 var i=p.lastIndexOf('/'),r=/\d+$/;
	 if(i>1){
		var a=p.slice(0,++i),b=p.slice(i);
		if(i=b.lastIndexOf('.')){
			var c=b.slice(i);
			if(r=r.exec(b=b.slice(0,i))){
				l.href=(l.origin+a+b.slice(0,r.index)+(++r[0])+c+(l.hash||l.search||''));
			};
		};
	 }else{
		if(r=r.exec(p)){

		};
		console.info('nofile²','dominio.it/path');
	 };
	};
 };

})(window);
