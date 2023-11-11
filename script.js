$(document).ready(function () {
	$(window).scroll(function () {
		this.scrollY > 50
			? ($(".navbar").addClass("sticky"),
			  $(".navbar .logo img").attr(
					"src",
					"https://i.ibb.co/KKwf2hy/logo-v.webp"
			  ),
			  $(".navbar .menu a").css("color", "#003333"),
			  $(".menu-btn i").css("color", "#003333"))
			: ($(".navbar").removeClass("sticky"),
			  $(".navbar .logo img").attr(
					"src",
					"https://i.ibb.co/6DQVMLm/logoB.png"
			  ),
			  $(".navbar .menu a").css("color", "#fff"),
			  $(".menu-btn i").css("color", "#000")),
			this.scrollY > 500
				? $(".scroll-up-btn").addClass("show")
				: $(".scroll-up-btn").removeClass("show");
	}),
		$(".scroll-up-btn").click(function () {
			window.open(
				"https://api.whatsapp.com/send?phone=5581971214604&text=Ol%C3%A1!%20Estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20site%20do%20Hospital%20Dia,%20eu%20gostaria%20de%20falar%20com%20um%20atendente.",
				"_blank"
			);
		}),
		$(".navbar .menu li a").click(function () {
			$("html").css("scrollBehavior", "smooth");
		}),
		$(".menu-btn").click(function () {
			$(".navbar .menu").toggleClass("active"),
				$(".menu-btn i").toggleClass("active");
		});
}),
	$(document).ready(function () {
		$(".carouselPics").owlCarousel({
			items: 8,
			margin: 180,
			loop: !1,
			dots: !1,
			autoplay: !1,
			autoplayTimeOut: 500,
			autoplayHoverPause: !1,
			nav: !0,
			responsive: {
				0: { items: 1, autoplay: !1 },
				768: { items: 3, autoplay: !1, margin: 0 },
			},
		});
	}),
	$(document).ready(function () {
		$(".carousel").owlCarousel({
			items: 4,
			margin: 20,
			loop: !1,
			autoplay: !1,
			dots: !1,
			nav: !0,
			autoplayTimeOut: 2e3,
			autoplayHoverPause: !1,
			responsive: {
				0: { items: 1, nav: !0 },
				768: { items: 4, nav: !0 },
			},
		});
	}),
	$(document).ready(function () {
		$(".carouselServicos").owlCarousel({
			items: 5,
			margin: 5,
			loop: !0,
			nav: !0,
			dots: !1,
			autoplay: !1,
			autoplayTimeOut: 2e3,
			autoplayHoverPause: !1,
			responsive: { 0: { items: 1, nav: !0 }, 768: { items: 5 } },
		});
	}),
	$(document).ready(function () {
		$("#carousel-testemunials").owlCarousel({
			navigation: !0,
			slideSpeed: 300,
			paginationSpeed: 400,
			navigation: !0,
			margin: 15,
			items: 2,
			itemsDesktop: [1199, 2],
			itemsDesktopSmall: [979, 2],
			loop: !1,
			dots: !1,
			responsive: {
				0: { items: 1, nav: !0 },
				768: { items: 2, nav: !0 },
			},
		});
	}),
	$(document).ready(function () {
		$(".carouselPlanos").owlCarousel({
			items: 8,
			margin: 0,
			loop: !0,
			dots: !1,
			autoplay: !0,
			autoplayTimeOut: 500,
			autoplayHoverPause: !0,
			responsive: {
				0: { items: 3, nav: !1 },
				1e3: { items: 8, nav: !1 },
			},
		});
	});
