$(function(){
	console.log(111111);
		$('cp_title li').mouseover(function(){
			
		if(!$(this).hasClass('active')){
		var $ul=$(this).parent();
		var i = $ul.find('li').index($(this));
		$ul.find('li').removeClass('active').eq(i).addClass('active');
		$ul.siblings().find('li').hide().eq(i).show();	
	}
})
});


