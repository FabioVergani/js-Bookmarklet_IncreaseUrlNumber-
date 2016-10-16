(function($){
 const l=$.location,p=l.pathname;
 if(p.length>1&&/\d/.test(p)){
	const o=l.origin;
	let n,s='',k=(l.hash||l.search||'');
	if(p.endsWith('/')){//§ dominio.it/path/


	}else{
	 let t,i=p.lastIndexOf('/'),r=/\d+$/;
	 if(i>1){
		t=p.slice(i);
		if(i=t.lastIndexOf('.')){//§ dominio.it/path/123.xxx.htm

			k+=t.slice(i);
			if(r=r.exec(t=t.slice(0,i))){

				n=r[0];
				s=(o+p.slice(0,++i)+t.slice(0,r.index)+(Number(n)+1)+k);

			};
		};

	 }else{
		if(r=r.exec(p)){//§ dominio.it/path12_3#x1 > dominio.it/path12_4#x1

			n=p.slice(i);
			s=(o+p.slice(0,i=r.index)+(Number(n)+1)+k);

		}else if(r=/(\d+)\D+$/.exec(p)){//§ dominio.it/path123x66x_1_ > dominio.it/path123x66x_2_

			n=r[1];
			s=(o+p.slice(0,i=r.index)+(Number(n)+1)+p.slice(i+n.length)+k);

		}else{
			console.warn('dominio.it/44path/33fold/');
		};
	 };
	};
	//console.warn(s);
 };

})(window);
