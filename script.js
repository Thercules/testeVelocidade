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
			window.open(
				"https://api.whatsapp.com/send?phone=5581987209676&text=Ol%C3%A1,%20eu%20gostaria%20de%20agendar%20uma%20consulta...",
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
		});
	}),
	$(document).ready(function () {
		$(".carousel").owlCarousel({
			items: 4,
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
		});
	}),
	$(document).ready(function () {
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
		});
	}),
	$(document).ready(function () {
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
		});
	});
const modalZero = document.getElementById("modalZero"),
	modalOne = document.getElementById("modalOne"),
	openModalZeroBtn = document.getElementById("openModalZero"),
	openModalOneBtn = document.getElementById("openModalOne"),
	closeModalZeroBtn = document.querySelector(".closeModalZero"),
	closeModalOneBtn = document.querySelector(".closeModalOne");
function openModal(e) {
	e.style.display = "block";
}
function closeModal(e) {
	e.style.display = "none";
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
	window.addEventListener("click", function (e) {
		e.target === modalZero && closeModal(modalZero),
			e.target === modalOne && closeModal(modalOne);
	}),
	document.addEventListener("keydown", function (e) {
		"Escape" === e.key && (closeModal(modalZero), closeModal(modalOne));
	});
