
function additionalCarousel(sliderId){
	 /*======  curosol For Additional ==== */
	 var ctadditional = $(sliderId);
      ctadditional.owlCarousel({
     	 items : 4, //10 items above 1000px browser width
     	 itemsDesktop : [1199,3], 
     	 itemsDesktopSmall : [991,2], 
     	 itemsTablet: [480,2], 
     	 itemsMobile : [320,1] 
      });
      // Custom Navigation Events
      $(".additional_next").click(function(){
        ctadditional.trigger('owl.next');
      })
      $(".additional_prev").click(function(){
        ctadditional.trigger('owl.prev');
      });
}

$(document).ready(function(){
	
	bindGrid();
	additionalCarousel('#main .additional-carousel');
	$('.cart_block.dropdown-menu').on('click',function (e) {
		e.stopPropagation();
	});
	
	
	// Add/Remove acttive class on menu active in responsive  
	$('#menu-icon').on('click', function() {
		$(this).toggleClass('active');
	});
	
	$('input[name="email"], #search_widget input[type="text"]').focus(function(){
		$(this).data('placeholder',$(this).attr('placeholder')).attr('placeholder','');
	}).blur(function(){
		$(this).attr('placeholder',$(this).data('placeholder'));
	});
	
	
	$('#header .search_button').click(function(event){			
		$(this).toggleClass('active');		
		event.stopPropagation();		
		$('#header .search_toggle').toggle('medium');		
		$( "#header .search-widget form input[type=text]" ).focus();
	
	});
	
	$("#header .search_toggle").on("click", function (event) {
		event.stopPropagation();	
	});
	
	/*======  Parallax  ==== */
	/*var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
	if(!isMobile) {
		if($(".parallax").length){  
			$(".parallax").sitManParallex({  invert: false });
		};
	}else{
		$(".parallax").sitManParallex({  invert: true });
	}*/
	
	/* ---------------- start more menu setting ---------------------- */
		var max_elem = 6;	
		var items = $('.horizontal-menu ul#top-menu > li');	
		var surplus = items.slice(max_elem, items.length);
		
		surplus.wrapAll('<li class="category more_menu" id="more_menu"><div id="top_moremenu" class="popover sub-menu js-sub-menu collapse"><ul class="top-menu more_sub_menu">');
	
		$('.menu ul#top-menu .more_menu').prepend('<a href="#" class="dropdown-item" data-depth="0"><span class="pull-xs-right hidden-md-up"><span data-target="#top_moremenu" data-toggle="collapse" class="navbar-toggler collapse-icons"><i class="material-icons add">&#xE313;</i><i class="material-icons remove">&#xE316;</i></span></span></span>More</a>');
	
		$('.menu ul#top-menu .more_menu').mouseover(function(){
			$(this).children('div').css('display', 'block');
		})
		.mouseout(function(){
			$(this).children('div').css('display', 'none');
		});		
	 /* ---------------- end more menu setting ----------------------	*/
	 
	 /* ---------------- start Vertical menu setting ---------------------- */
		var vmax_elem = 9;	
		var vmenu_items = $('#ctverticalmenublock ul#top-menu > li');	
		
		if (vmenu_items.length > vmax_elem) {
			$('#ctverticalmenublock ul#top-menu').append('<li class="more_menu"><a href="#" class="vertical-menu-item" data-depth="0">More Categories<span class="more_category"><i class="fa-icon add"></i></span></a></li>')
		}
		$('#ctverticalmenublock ul#top-menu .more_menu').click(function() {
			event.preventDefault();	
			if ($(this).hasClass('active')) {
				vmenu_items.each(function(j) {
					if (j >= vmax_elem) {
						$(this).slideUp(200)
					}
				});
				$(this).removeClass('active');
				$('#ctverticalmenublock ul#top-menu .more_menu').html('<a href="#" class="vertical-menu-item" data-depth="0">More Categories<span class="more_category"><i class="fa-icon add"></i></span></a>')
			} else {
				vmenu_items.each(function(j) {
					if (j >= vmax_elem) {
						$(this).slideDown(200)
					}
				});
				$(this).addClass('active');
				$('#ctverticalmenublock ul#top-menu .more_menu').html('<a href="#" class="vertical-menu-item" data-depth="0">Less Categories<span class="more_category"><i class="fa-icon remove">&nbsp;</i></span></a>')
			}
		});
		vmenu_items.each(function(j) {
			if (j >= vmax_elem) {
				$(this).css('display', 'none')
			}
		});
	/* ---------------- end Vertical menu setting ----------------------	*/

	$('#ctverticalmenublock').on({
		"shown.bs.dropdown": function() { $(this).attr('closable', false); },
		"click":             function() { },
		"hide.bs.dropdown":  function() { return $(this).attr('closable') == 'true'; }
	});
	
	$('#ctverticalmenublock #verticalmenu-dropdown').on({
	  "click": function() {
		$(this).parent().attr('closable', true );
	  }
	})
	
	
});

var catid_array = [];
		$('#ctcategorytabs .product_slider_grid').each(function(){
		var catid = $(this).data('catid');
		var owlcarouselid = $('#ctcategory' + catid + '-carousel');
		
		owlcarouselid.owlCarousel({
		items : 5, //10 items above 1000px browser width
		itemsDesktop : [1199,4], 
		itemsDesktopSmall : [991,3], 
		itemsTablet: [600,2],
		itemsMobile : [479,1] 
		});	
		$('#tab_' + catid + ' .ctcategory_next').click(function(){
		owlcarouselid.trigger('owl.next');
		})
		$('#tab_' + catid + ' .ctcategory_prev').click(function(){
		owlcarouselid.trigger('owl.prev');
		});	
	});



// Loading image before flex slider load
	$(window).load(function() { 
		$(".loadingdiv").removeClass("spinner"); 
	});

// Flex slider load
	$(window).load(function() {
		if($('.flexslider').length > 0){ 
			$('.flexslider').flexslider({		
				slideshowSpeed: $('.flexslider').data('interval'),
				pauseOnHover: $('.flexslider').data('pause'),
				animation: "fade"
			});
		}
	});		

// Scroll page bottom to top
	$(window).scroll(function() {
		if ($(this).scrollTop() > 500) {
			$('.top_button').fadeIn(500);
		} else {
			$('.top_button').fadeOut(500);
		}
	});							
	$('.top_button').click(function(event) {
		event.preventDefault();		
		$('html, body').animate({scrollTop: 0}, 800);
	});

/*======  Carousel Slider For Feature Product ==== */
	
	var ctblog = $("#blog-carousel");
	ctblog.owlCarousel({
		items : 3, //10 items above 1000px browser width
		itemsDesktop : [1199,2], 
		itemsDesktopSmall : [991,2], 
		itemsTablet: [680,1]
	});
	// Custom Navigation Events
	$(".blog_next").click(function(){
		ctblog.trigger('owl.next');
	})
	$(".blog_prev").click(function(){
		ctblog.trigger('owl.prev');
	});

/*======  Carousel Slider For Feature Product ==== */
	
	var ctfeature = $("#feature-carousel");
	ctfeature.owlCarousel({
		items : 1, //10 items above 1000px browser width
		itemsDesktop : [1459,1], 
		itemsDesktopSmall : [991,2], 
		itemsTablet: [575,1],
		itemsTabletSmall: [479,1]
	});
	// Custom Navigation Events
	$(".feature_next").click(function(){
		ctfeature.trigger('owl.next');
	})
	$(".feature_prev").click(function(){
		ctfeature.trigger('owl.prev');
	});



/*======  Carousel Slider For New Product ==== */
	
	var ctnewproduct = $("#newproduct-carousel");
	ctnewproduct.owlCarousel({
		items : 1, //10 items above 1000px browser width
		itemsDesktop : [1459,1], 
		itemsDesktopSmall : [991,2], 
		itemsTablet: [575,1],
		itemsTabletSmall: [479,1]
	});
	// Custom Navigation Events
	$(".newproduct_next").click(function(){
		ctnewproduct.trigger('owl.next');
	})
	$(".newproduct_prev").click(function(){
		ctnewproduct.trigger('owl.prev');
	});



/*======  Carousel Slider For Bestseller Product ==== */
	
	var ctbestseller = $("#bestseller-carousel");
	ctbestseller.owlCarousel({
		items : 1, //10 items above 1000px browser width
		itemsDesktop : [1459,1], 
		itemsDesktopSmall : [991,2], 
		itemsTablet: [575,1],
		itemsTabletSmall: [479,1]
	});
	// Custom Navigation Events
	$(".bestseller_next").click(function(){
		ctbestseller.trigger('owl.next');
	})
	$(".bestseller_prev").click(function(){
		ctbestseller.trigger('owl.prev');
	});



/*======  Carousel Slider For Special Product ==== */
	var ctspecial = $("#special-carousel");
	ctspecial.owlCarousel({
		items : 5, //10 items above 1000px browser width
		itemsDesktop : [1199,4], 
		itemsDesktopSmall : [991,3], 
		itemsTablet: [600,2],
		itemsMobile : [479,1] 
	});
	// Custom Navigation Events
	$(".special_next").click(function(){
		ctspecial.trigger('owl.next');
	})
	$(".special_prev").click(function(){
		ctspecial.trigger('owl.prev');
	});


/*======  Carousel Slider For Accessories Product ==== */

	var ctaccessories = $("#accessories-carousel");
	ctaccessories.owlCarousel({
		items : 5, //10 items above 1000px browser width
		itemsDesktop : [1199,4], 
		itemsDesktopSmall : [991,3], 
		itemsTablet: [600,2],
		itemsMobile : [479,1] 
	});
	// Custom Navigation Events
	$(".accessories_next").click(function(){
		ctaccessories.trigger('owl.next');
	})
	$(".accessories_prev").click(function(){
		ctaccessories.trigger('owl.prev');
	});


/*======  Carousel Slider For Category Product ==== */

	var ctproductscategory = $("#productscategory-carousel");
	ctproductscategory.owlCarousel({
		items : 5, //10 items above 1000px browser width
		itemsDesktop : [1199,4], 
		itemsDesktopSmall : [991,3], 
		itemsTablet: [600,2],
		itemsMobile : [479,1] 
	});
	// Custom Navigation Events
	$(".productscategory_next").click(function(){
		ctproductscategory.trigger('owl.next');
	})
	$(".productscategory_prev").click(function(){
		ctproductscategory.trigger('owl.prev');
	});


/*======  Carousel Slider For Viewed Product ==== */

	var ctviewed = $("#viewed-carousel");
	ctviewed.owlCarousel({
		items : 5, //10 items above 1000px browser width
		itemsDesktop : [1199,4], 
		itemsDesktopSmall : [991,3], 
		itemsTablet: [600,2],
		itemsMobile : [479,1] 
	});
	// Custom Navigation Events
	$(".viewed_next").click(function(){
		ctviewed.trigger('owl.next');
	})
	$(".viewed_prev").click(function(){
		ctviewed.trigger('owl.prev');
	});

/*======  Carousel Slider For Crosssell Product ==== */

	var ctcrosssell = $("#crosssell-carousel");
	ctcrosssell.owlCarousel({
		items : 5, //10 items above 1000px browser width
		itemsDesktop : [1199,4], 
		itemsDesktopSmall : [991,3], 
		itemsTablet: [600,2],
		itemsMobile : [479,1] 
	});
	// Custom Navigation Events
	$(".crosssell_next").click(function(){
		ctcrosssell.trigger('owl.next');
	})
	$(".crosssell_prev").click(function(){
		ctcrosssell.trigger('owl.prev');
	});

/*======  curosol For Manufacture ==== */
	 var ctbrand = $("#brand-carousel");
      ctbrand.owlCarousel({
     	 items : 6, //10 items above 1000px browser width
     	 itemsDesktop : [1199,4], 
     	 itemsDesktopSmall : [991,3],
     	 itemsTablet: [480,2], 
     	 itemsMobile : [320,1],
		 autoPlay: true
      });
      // Custom Navigation Events
      $(".brand_next").click(function(){
        ctbrand.trigger('owl.next');
      })
      $(".brand_prev").click(function(){
        ctbrand.trigger('owl.prev');
      });


/*======  Carousel Slider For For Tesimonial ==== */

	  var cttestimonial = $("#testimonial-carousel");
     	 cttestimonial.owlCarousel({
			 autoPlay: false,
			 singleItem:true
      });

		/* Custom Navigation Events*/
      $(".cttestimonial_next").click(function(){
        cttestimonial.trigger('owl.next');
      });

      $(".cttestimonial_prev").click(function(){
        cttestimonial.trigger('owl.prev');
      });

/*======  curosol For Our Category list product Slider  ==== */

	  var ctourcategory = $("#ourcategory-carousel");
      ctourcategory.owlCarousel({
     	 items : 8, //10 items above 1000px browser width
     	 itemsDesktop : [1199,6], 
     	 itemsDesktopSmall : [991,5],
		 itemsTablet : [767,4],
     	 itemsTabletSmall: [575,3], 
     	 itemsMobile : [400,1],
		 autoPlay: true
      });
	  
	  	/* Custom Navigation Events*/
      $(".category_next").click(function(){
        ctourcategory.trigger('owl.next');
      });

      $(".category_prev").click(function(){
        ctourcategory.trigger('owl.prev');
      });
	  
function bindGrid()
{
	var view = $.totalStorage("display");

	if (view && view != 'grid')
		display(view);
	else
		$('.display').find('li#grid').addClass('selected');

	$(document).on('click', '#grid', function(e){
		e.preventDefault();
		display('grid');
	});

	$(document).on('click', '#list', function(e){
		e.preventDefault();
		display('list');		
	});	
}

function display(view)
{
	if (view == 'list')
	{
		$('#products ul.product_list').removeClass('grid').addClass('list row');
		$('#products .product_list > li').removeClass('col-xs-12 col-sm-6 col-md-6 col-lg-4').addClass('col-xs-12');
		
		
		$('#products .product_list > li').each(function(index, element) {
			var html = '';
			html = '<div class="product-miniature js-product-miniature" data-id-product="'+ $(element).find('.product-miniature').data('id-product') +'" data-id-product-attribute="'+ $(element).find('.product-miniature').data('id-product-attribute') +'" itemscope itemtype="http://schema.org/Product">';
				html += '<div class="thumbnail-container col-xs-4 col-xs-5 col-md-4">' + $(element).find('.thumbnail-container').html() + '</div>';
				
				html += '<div class="product-description center-block col-xs-4 col-xs-7 col-md-8">';
					html += '<h3 class="h3 product-title" itemprop="name">'+ $(element).find('h3').html() + '</h3>';
					
					var comment = $(element).find('.comments_note').html();       // check : Comment module is enabled
					if (comment != null) {
						html += '<div class="comments_note">'+ $(element).find('.comments_note').html() + '</div>';
					}
					
					var price = $(element).find('.product-price-and-shipping').html();       // check : catalog mode is enabled
					if (price != null) {
						html += '<div class="product-price-and-shipping">'+ price + '</div>';
					}
					
					html += '<div class="product-detail">'+ $(element).find('.product-detail').html() + '</div>';
					
					var colorList = $(element).find('.highlighted-informations').html();
					if (colorList != null) {
						html += '<div class="highlighted-informations">'+ colorList +'</div>';
					}
					
					html += '<div class="product-actions">'+ $(element).find('.product-actions').html() +'</div>';
					
				html += '</div>';
			html += '</div>';
		$(element).html(html);
		});
		$('.display').find('li#list').addClass('selected');
		$('.display').find('li#grid').removeAttr('class');
		$.totalStorage('display', 'list');
	}
	else
	{
		$('#products ul.product_list').removeClass('list').addClass('grid row');
		$('#products .product_list > li').removeClass('col-xs-12').addClass('col-xs-12 col-sm-6 col-md-6 col-lg-4');
		$('#products .product_list > li').each(function(index, element) {
		var html = '';
		html += '<div class="product-miniature js-product-miniature" data-id-product="'+ $(element).find('.product-miniature').data('id-product') +'" data-id-product-attribute="'+ $(element).find('.product-miniature').data('id-product-attribute') +'" itemscope itemtype="http://schema.org/Product">';
			html += '<div class="thumbnail-container">' + $(element).find('.thumbnail-container').html() +'</div>';
			
			html += '<div class="product-description">';
				var comment = $(element).find('.comments_note').html();       // check : Comment module is enabled
				if (comment != null) {
					html += '<div class="comments_note">'+ $(element).find('.comments_note').html() + '</div>';
				}
				html += '<h3 class="h3 product-title" itemprop="name">'+ $(element).find('h3').html() +'</h3>';
			
				var price = $(element).find('.product-price-and-shipping').html();       // check : catalog mode is enabled
				if (price != null) {
					html += '<div class="product-price-and-shipping">'+ price + '</div>';
				}
				
				html += '<div class="product-detail">'+ $(element).find('.product-detail').html() + '</div>';
				
				//html += '<div class="product-actions">'+ $(element).find('.product-actions').html() +'</div>';
				
				var colorList = $(element).find('.highlighted-informations').html();
				if (colorList != null) {
					html += '<div class="highlighted-informations">'+ colorList +'</div>';
				}
				
			html += '</div>';
		html += '</div>';
		$(element).html(html);
		});
		$('.display').find('li#grid').addClass('selected');
		$('.display').find('li#list').removeAttr('class');
		$.totalStorage('display', 'grid');
	}
}


function responsivecolumn(){
	
	if ($(document).width() <= 991)
	{
		$('.container #columns_inner #left-column').appendTo('.container #columns_inner');
		// ---------------- Fixed header responsive ----------------------
		$(window).bind('scroll', function () {
			if ($(window).scrollTop() > 170) {
				$('.mobile-menu').addClass('fixed');
			} else {
				$('.mobile-menu').removeClass('fixed');
			}
		});
	}
	else if($(document).width() >= 992)
	{
		$('.container #columns_inner #left-column').prependTo('.container #columns_inner');
		$(window).bind('scroll', function () {
			if ($(window).scrollTop() > 270) {
				$('.header-top-inner').addClass('fixed');
			} else {
				$('.header-top-inner').removeClass('fixed');
			}
		});
	}
}
$(document).ready(function(){responsivecolumn();});
$(window).resize(function(){responsivecolumn();});

//--------------- video Open in LighBox ----------------//

window.document.onkeydown = function(e) {
  if (!e) {
    e = event;
  }
  if (e.keyCode == 27) {
    lightbox_close();
  }
}

function lightbox_open() {
	var lightBoxVideo = document.getElementById("myVideo");
	document.getElementById('light').style.display = 'block';
	document.getElementById('fade').style.display = 'block';
	lightBoxVideo.play();
}

function lightbox_close() {
	var lightBoxVideo = document.getElementById("myVideo");
	document.getElementById('light').style.display = 'none';
	document.getElementById('fade').style.display = 'none';
	lightBoxVideo.pause();
}
jQuery(window).load(function() {  
	"use strict"; 
	if ($("#myVideo").length > 0) {
		
		lightbox_open();
		lightbox_close();
	}
});

//--------------- spanify title ----------------//
/**
 * insertion d'un span avec une classe pour un mot choisi dans le titre
 * @param {string} selector equivalent du queryselector
 * @param {string} wordToSurround mot a entourer d'une span
 * @param {string} spanClass classe pour la span
 */
const toSpan = (selector, wordToSurround, spanClass) => {
    //creation d'un catcher et stockage dans elt
    let elt = document.querySelector(selector);
    //si elt n'exixte pas on return
    if(!elt) return;

    // On explode le contenu de l'élément en tableau suivant les espaces
    let parts = elt.innerHTML.split(" ");

    //pour chaque mot de parts
    parts.forEach((word, index, array)=>{
        //si eltcontient le wordToSurround
        if(word == wordToSurround){
            //on prend le mot dans le tableau parts à l'index et on remplace par
            array[index] = `<span class="${spanClass}">${word}</span>`;
        }
    });
    //joindre les elements html (du tableau parts) dans elm
    // console.log(parts);

    elt.innerHTML = parts.join(" ");
}
toSpan("h1.shopName", "Bretonne", "spanTitle");