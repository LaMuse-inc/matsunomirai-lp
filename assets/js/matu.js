// 文字上から下へ
$(function(){
	/*=================================================
	スムーススクロール
	===================================================*/
	// ページ内のリンクをクリックした時に動作する
	$('a[href^="#"]').click(function(){
		// リンクを取得
		let href= $(this).attr("href");
		// ジャンプ先のid名をセット
		let target = $(href == "#" || href == "" ? 'html' : href);
		// トップからジャンプ先の要素までの距離を取得
		let position = target.offset().top;
		// animateでスムーススクロールを行う
		// 600はスクロール速度で単位はミリ秒
		$("html, body").animate({scrollTop:position}, 600, "swing");
		return false;
	});
})
$(function (){
	$(window).scroll(function (){
		$('.fadein').each(function (){
			var trangetElement = $(this).offset().top;
			var scroll =$(window).scrollTop();
			var windowHeight =$(window).height();
			if(scroll > trangetElement - windowHeight + 150) {
				$(this).addClass('scrollin');
			}
		});
	});
	
});
	
	
	