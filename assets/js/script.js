


// スライド

	$('.slide').slick({
		arrows: false,//左右の矢印はなし
		autoplay: true,//自動的に動き出すか。初期値はfalse。
		autoplaySpeed: 0,//自動的に動き出す待ち時間。初期値は3000ですが今回の見せ方では0
		speed: 6900,//スライドのスピード。初期値は300。
		infinite: true,//スライドをループさせるかどうか。初期値はtrue。
		pauseOnHover: false,//オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
		pauseOnFocus: false,//フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
		cssEase: 'linear',//動き方。初期値はeaseですが、スムースな動きで見せたいのでlinear
		slidesToShow: 4,//スライドを画面に4枚見せる
		slidesToScroll: 1,//1回のスライドで動かす要素数
		responsive: [
			{
			breakpoint: 769,//モニターの横幅が769px以下の見せ方
			settings: {
				slidesToShow: 2,//スライドを画面に2枚見せる
			}
		},
		{
			breakpoint: 426,//モニターの横幅が426px以下の見せ方
			settings: {
				slidesToShow: 1.5,//スライドを画面に1.5枚見せる
			}
		}
	]
	});



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
	
	
	

