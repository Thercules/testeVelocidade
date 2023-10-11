$(document).ready(function () {
	$(window).scroll(function () {
		this.scrollY > 20
			? $(".navbar").addClass("sticky")
			: $(".navbar").removeClass("sticky"),
			this.scrollY > 500
				? $(".scroll-up-btn").addClass("show")
				: $(".scroll-up-btn").removeClass("show");
	}),
		$(".scroll-up-btn").click(function () {
			window.location.href =
				"https://api.whatsapp.com/send?phone=5581987209676&text=Ol%C3%A1,%20eu%20gostaria%20de%20agendar%20uma%20consulta...";
		}),
		$(".navbar .menu li a").click(function () {
			$("html").css("scrollBehavior", "smooth");
		}),
		$(".menu-btn").click(function () {
			$(".navbar .menu").toggleClass("active"),
				$(".menu-btn i").toggleClass("active");
		}),
		$(".carousel").owlCarousel({
			item: 4,
			margin: 20,
			loop: !1,
			autoplay: !0,
			dots: !1,
			autoplayTimeOut: 2e3,
			autoplayHoverPause: !0,
			responsive: {
				0: { items: 1, nav: !1 },
				1e3: { items: 4, nav: !1 },
			},
		}),
		$(document).ready(function () {
			$(".carouselHome").owlCarousel({
				items: 1,
				margin: 0,
				loop: !0,
				dots: !1,
				autoplay: !1,
				autoplayTimeout: 2e3,
				autoplayHoverPause: !1,
				nav: !1,
				navText: ["<button>&lt;</button>", "<button>&gt;</button>"],
				responsive: { 0: { items: 1 } },
			});
		}),
		$("#carousel-testemunials").owlCarousel({
			navigation: !0,
			slideSpeed: 300,
			paginationSpeed: 400,
			navigation: !0,
			items: 2,
			itemsDesktop: [1199, 2],
			itemsDesktopSmall: [979, 2],
			loop: !0,
			dots: !0,
			responsive: {
				0: { items: 1, nav: !1 },
				768: { items: 2, nav: !1 },
			},
		}),
		$(".carouselAbout").owlCarousel({
			items: 1,
			margin: 20,
			loop: !0,
			autoplay: !0,
			autoplayTimeOut: 2e3,
			autoplayHoverPause: !1,
			responsive: { 0: { items: 1, nav: !1 } },
		}),
		$(".carouselAbout2").owlCarousel({
			items: 3,
			margin: 20,
			dots: !1,
			loop: !0,
			autoplay: !0,
			autoplayTimeOut: 2e3,
			autoplayHoverPause: !0,
			responsive: { 0: { items: 1, nav: !1 }, 0: { items: 2, nav: !1 } },
		}),
		$(".carouselPics").owlCarousel({
			items: 4,
			margin: 0,
			loop: !0,
			dots: !0,
			autoplay: !1,
			autoplayTimeOut: 500,
			autoplayHoverPause: !0,
			responsive: {
				0: { items: 3, nav: !1 },
				768: { items: 4, nav: !1 },
			},
		}),
		$(".carouselPlanos").owlCarousel({
			items: 5,
			margin: 20,
			loop: !0,
			dots: !1,
			autoplay: !1,
			autoplayTimeOut: 500,
			autoplayHoverPause: !0,
			responsive: {
				0: { items: 1, nav: !1 },
				1e3: { items: 5, nav: !1 },
			},
		}),
		$(".carouselTest").owlCarousel({
			items: 2,
			margin: 1,
			loop: !0,
			dots: !1,
			autoplay: !1,
			autoplayTimeOut: 2e3,
			autoplayHoverPause: !1,
			responsive: {
				0: { items: 1, nav: !1 },
				768: { items: 2, nav: !1 },
			},
		});
});
const modalZero = document.getElementById("modalZero"),
	modalOne = document.getElementById("modalOne"),
	openModalZeroBtn = document.getElementById("openModalZero"),
	openModalOneBtn = document.getElementById("openModalOne"),
	closeModalZeroBtn = document.querySelector(".closeModalZero"),
	closeModalOneBtn = document.querySelector(".closeModalOne");
function openModal(o) {
	o.style.display = "block";
}
function closeModal(o) {
	o.style.display = "none";
}
openModalZeroBtn.addEventListener("click", function () {
	openModal(modalZero);
}),
	openModalOneBtn.addEventListener("click", function () {
		openModal(modalOne);
	}),
	closeModalZeroBtn.addEventListener("click", function () {
		closeModal(modalZero);
	}),
	closeModalOneBtn.addEventListener("click", function () {
		closeModal(modalOne);
	}),
	window.addEventListener("click", function (o) {
		o.target === modalZero && closeModal(modalZero),
			o.target === modalOne && closeModal(modalOne);
	}),
	document.addEventListener("keydown", function (o) {
		"Escape" === o.key && (closeModal(modalZero), closeModal(modalOne));
	});
