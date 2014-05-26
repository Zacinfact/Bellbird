$(document).ready(function(){

//Open Post

$('#post').click(function(){

	$a = 2;
	$b = 1;

	$('#toolbar').css('pointer-events', 'none');

	var timeout = setTimeout(function(){

	$('#toolbar').css('pointer-events', 'auto');

	}, 540);

	$('#hideoptions').css('display', 'block');

	$('#hideoptions').animate({'opacity':'0.3'}, 560, 'linear');

	$('#post').css('display', 'none');

	$('#post').animate({'opacity':'0.3'}, 560, 'linear');

	$('#options').animate({ width: '+=147px'}, 560);

	var timeout = setTimeout(function(){

	$('#alert').css('display', 'block');

	$('#alert').animate({'opacity':'0.8'}, 100, 'linear');

	}, 100);

	var timeout = setTimeout(function(){

	$('#picture').css('display', 'block');

	$('#picture').animate({'opacity':'0.8'}, 100, 'linear');

	}, 280);

	var timeout = setTimeout(function(){

	$('#text').css('display', 'block');

	$('#text').animate({'opacity':'0.8'}, 100, 'linear');

	}, 460);

});

//Close Post

$('#hideoptions').click(function(){

	$a = 1;
	$b = 2;

	$('#toolbar').css('pointer-events', 'none');

	var timeout = setTimeout(function(){

	$('#toolbar').css('pointer-events', 'auto');

	}, 540);

	$('#hideoptions').css('display', 'none');

	$('#hideoptions').animate({'opacity':'0.8'}, 560, 'linear');

	$('#post').css('display', 'block');

	$('#post').animate({'opacity':'0.8'}, 560, 'linear');

	$('#options').animate({ width: '-=147px'}, 560);


	var timeout = setTimeout(function(){

	$('#alert').animate({'opacity':'0.0'}, 100, 'linear');

	var timeout = setTimeout(function(){

	$('#alert').css('display', 'none');

	}, 100);

	}, 300);


	var timeout = setTimeout(function(){

	$('#picture').animate({'opacity':'0.0'}, 100, 'linear');

	var timeout = setTimeout(function(){

	$('#picture').css('display', 'none');

	}, 100);

	}, 200);


	var timeout = setTimeout(function(){

	$('#text').animate({'opacity':'0.0'}, 100, 'linear');

	var timeout = setTimeout(function(){

	$('#text').css('display', 'none');

	}, 100);

	}, 100);

});


// Open Extras

$('#logo').click(function(){

	$c = 2;
	$d = 1;


	$('#toolbar').css('pointer-events', 'none');

	var timeout = setTimeout(function(){

	$('#toolbar').css('pointer-events', 'auto');

	}, 540);

	$('#hideextras').css('display', 'block');

	$('#hideextras').animate({'opacity':'0.3'}, 560, 'linear');

	$('#logo').css('display', 'none');

	$('#logo').animate({'opacity':'0.3'}, 560, 'linear');

	$('#extras').animate({ width: '+=147px'}, 560);

	var timeout = setTimeout(function(){

	$('#feeds').css('display', 'block');0

	$('#feeds').animate({'opacity':'0.8'}, 100, 'linear');

	}, 100);

	var timeout = setTimeout(function(){

	$('#contact').css('display', 'block');

	$('#contact').animate({'opacity':'0.8'}, 100, 'linear');

	}, 280);

	var timeout = setTimeout(function(){

	$('#about').css('display', 'block');

	$('#about').animate({'opacity':'0.8'}, 100, 'linear');

	}, 460);

});

// Close Extras

$('#hideextras').click(function(){

	$c = 1;
	$d = 2;

	$('#toolbar').css('pointer-events', 'none');

	var timeout = setTimeout(function(){

	$('#toolbar').css('pointer-events', 'auto');

	}, 540);

	$('#hideextras').css('display', 'none');

	$('#hideextras').animate({'opacity':'0.8'}, 560, 'linear');

	$('#logo').css('display', 'block');

	$('#logo').animate({'opacity':'0.8'}, 560, 'linear');

	$('#extras').animate({ width: '-=147px'}, 560);


	var timeout = setTimeout(function(){

	$('#feeds').animate({'opacity':'0.0'}, 100, 'linear');

	var timeout = setTimeout(function(){

	$('#feeds').css('display', 'none');

	}, 100);

	}, 300);


	var timeout = setTimeout(function(){

	$('#contact').animate({'opacity':'0.0'}, 100, 'linear');

	var timeout = setTimeout(function(){

	$('#contact').css('display', 'none');

	}, 100);

	}, 200);


	var timeout = setTimeout(function(){

	$('#about').animate({'opacity':'0.0'}, 100, 'linear');

	var timeout = setTimeout(function(){

	$('#about').css('display', 'none');

	}, 100);

	}, 100);

});

//Close Options If Extras Open

$('#logo').click(function(){


	if($a > $b) { $( "#hideoptions" ).trigger( "click" ); }

});

//Close Extras If Options Open

$('#post').click(function(){


	if($c > $d) { $( "#hideextras" ).trigger( "click" ); }

});


});


