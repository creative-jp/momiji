$.easing.easeOutCubic=function(o,e,t,a,n){return e==n?t+a:a*(1-Math.pow(2,-12*e/n))+t},$(document).ready(function(){$("label").keypress(function(o){13==(o.keyCode?o.keyCode:o.which)&&$(this).trigger("click")}),$(".japanese").click(function(){localStorage.setItem("languageOverride","ja")}),$(".english").click(function(){localStorage.setItem("languageOverride","en")}),$(window).load(function(){$(".lodge-image").addClass("lodge-image-show").delay(700).queue(function(){$(".logo-circle").addClass("logo-circle-down")})}),$(".gallery-main.section .gallery-image:nth-child(4n)").css("margin-right",0),$(".gallery").featherlightGallery({previousIcon:'<div class="gallery-go-left"><svg xmlns="http://www.w3.org/2000/svg" width="39" height="79" viewBox="0 0 39.4 78.7"><polygon class="burgundy" points="17.9 30.4 12 39.4 17.9 48.3 20.1 46.9 15.1 39.4 20.1 31.8 "/><path class="cool-grey" d="M0 0v78.7c21.7 0 39.4-17.6 39.4-39.4C39.4 17.6 21.7 0 0 0zM20.1 46.9l-2.1 1.4L12 39.4l5.9-8.9 2.1 1.4 -5 7.5L20.1 46.9z"/></svg></div>',nextIcon:'<div class="gallery-go-right"><svg xmlns="http://www.w3.org/2000/svg" width="39" height="79" viewBox="0 0 39.4 78.7"><polygon class="burgundy" points="17.9 30.4 12 39.4 17.9 48.3 20.1 46.9 15.1 39.4 20.1 31.8 "/><path class="cool-grey" d="M0 0v78.7c21.7 0 39.4-17.6 39.4-39.4C39.4 17.6 21.7 0 0 0zM20.1 46.9l-2.1 1.4L12 39.4l5.9-8.9 2.1 1.4 -5 7.5L20.1 46.9z"/></svg></div>',galleryFadeIn:100,galleryFadeOut:200}),$("#menu-icon").click(function(){$(this).toggleClass("open"),$("nav").fadeToggle(300).css("display","table"),$("#menu-bg").fadeToggle(300),$("body").toggleClass("fixed")}),screen.width<737&&$("nav .news, nav .photos, nav .information, nav .location, nav .contact").click(function(){$("#menu-icon").toggleClass("open"),$("nav").fadeToggle(300).css("display","table"),$("#menu-bg").fadeToggle(300),$("body").toggleClass("fixed")}),$("#hero").waypoint(function(o){"down"===o&&$("nav #sections a").removeClass("active")},{offset:300}).waypoint(function(o){"up"===o&&$("nav #sections a").removeClass("active")},{offset:-800}),$(".news-article").waypoint(function(o){"down"===o&&($("nav #sections a").removeClass("active"),$(".news").addClass("active"))},{offset:140}).waypoint(function(o){"up"===o&&($("nav #sections a").removeClass("active"),$(".news").addClass("active"))},{offset:0}),$(".news").click(function(){return screen.width<737&&$("html, body").animate({scrollTop:$(".news-article").offset().top-60},1e3),screen.width>736&&$("html, body").animate({scrollTop:$(".news-article").offset().top-140},1e3),$("nav #sections a").removeClass("active"),$(".news").addClass("active"),!1}),$(".photos").click(function(){return screen.width<737&&$("html, body").animate({scrollTop:$(".gallery-main.section").offset().top-60},1e3),screen.width>736&&$("html, body").animate({scrollTop:$(".gallery-main.section").offset().top-140},1e3),$("nav #sections a").removeClass("active"),$(".photos").addClass("active"),!1}),$("#gallery").waypoint(function(o){"down"===o&&($("nav #sections a").removeClass("active"),$(".photos").addClass("active"))},{offset:140}).waypoint(function(o){"up"===o&&($("nav #sections a").removeClass("active"),$(".photos").addClass("active"))},{offset:0}),$(".information").click(function(){return screen.width<737&&$("html, body").animate({scrollTop:$("#info").offset().top-60},1e3),screen.width>736&&$("html, body").animate({scrollTop:$("#info").offset().top-140},1e3),$("nav #sections a").removeClass("active"),$(".information").addClass("active"),!1}),$("#info").waypoint(function(o){"down"===o&&($("nav #sections a").removeClass("active"),$(".information").addClass("active"))},{offset:140}).waypoint(function(o){"up"===o&&($("nav #sections a").removeClass("active"),$(".information").addClass("active"))},{offset:200}),$(".contact").click(function(){return screen.width<737&&$("html, body").animate({scrollTop:$("#contact").offset().top-60},1e3),screen.width>736&&$("html, body").animate({scrollTop:$("#contact").offset().top-140},1e3),$("nav #sections a").removeClass("active"),$(".contact a").addClass("active"),!1}),$("#map").waypoint(function(o){"down"===o&&($("nav #sections a").removeClass("active"),$(".location a").addClass("active"))},{offset:140}).waypoint(function(o){"up"===o&&($("nav #sections a").removeClass("active"),$(".location a").addClass("active"))},{offset:200}),$("#nagano-snow-shuttle-anchor").click(function(){return $("html, body").animate({scrollTop:$("#nagano-snow-shuttle").offset().top-120},500),!1}),$("#private-charter-anchor").click(function(){return $("html, body").animate({scrollTop:$("#private-charter").offset().top-120},500),!1}),$(".go-top").click(function(){return $("html, body").animate({scrollTop:$("#home").offset().top},500),!1}),$(".mobile-go-to-top").click(function(){return $("html, body").animate({scrollTop:$("#home").offset().top},500),!1}),$(document).on("scroll",function(){$(window).scrollTop()>500&&$("footer .mobile-go-to-top").addClass("show"),$(window).scrollTop()<500&&$("footer .mobile-go-to-top").removeClass("show")})});