"use client";

import { useEffect } from "react";

/**
 * Loads jQuery plugins in correct order, then initializes
 * Master Slider, Owl Carousels, AOS, sticky header, etc.
 */
export default function ThemeScripts() {
  useEffect(() => {
    let cancelled = false;

    const loadScript = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        // Avoid loading the same script twice
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve();
          return;
        }
        const s = document.createElement("script");
        s.src = src;
        s.async = false; // preserve order
        s.onload = () => resolve();
        s.onerror = () => reject(new Error(`Failed to load ${src}`));
        document.body.appendChild(s);
      });
    };

    const initTheme = () => {
      if (cancelled) return;
      const $ = (window as any).jQuery;
      if (!$ ) {
        console.warn("jQuery not found");
        return;
      }

      // ----- Sticky header -----
      $(window).on("scroll", function (this: Window) {
        const sticky = $(".theme-main-header");
        const scroll = $(this).scrollTop() || 0;
        if (scroll >= 80) sticky.addClass("sticky");
        else sticky.removeClass("sticky");
      });

      // ----- Mobile dropdown -----
      if ($(".navbar").length) {
        $(".navbar li.dropdown-holder").each(function (this: HTMLElement) {
          if (!$(this).find(".icon").length) {
            $(this).append('<i class="icon fa fa-angle-down"></i>');
          }
        });
        $(".navbar li.dropdown-holder .icon")
          .off("click")
          .on("click", function (this: HTMLElement) {
            $(this).parent("li").children("ul").slideToggle();
          });
      }

      // ----- Placeholder clear -----
      $("input,textarea").each(function (this: HTMLInputElement) {
        const $el = $(this);
        $el.data("holder", $el.attr("placeholder"));
        $el
          .off("focusin focusout")
          .on("focusin", function () {
            $el.attr("placeholder", "");
          })
          .on("focusout", function () {
            $el.attr("placeholder", $el.data("holder"));
          });
      });

      // ----- Scroll top button -----
      $(window).on("scroll", function (this: Window) {
        if (($(this).scrollTop() || 0) > 200) {
          $(".scroll-top").fadeIn();
        } else {
          $(".scroll-top").fadeOut();
        }
      });
      $(".scroll-top")
        .off("click")
        .on("click", function () {
          $("html, body").animate({ scrollTop: 0 }, 1500);
          return false;
        });

      // ----- Smooth scroll menu -----
      if ($("#theme-menu-list").length) {
        $("#theme-menu-list a")
          .off("click")
          .on("click", function (this: HTMLAnchorElement, e: any) {
            if (
              location.pathname.replace(/^\//, "") ===
                this.pathname.replace(/^\//, "") &&
              location.hostname === this.hostname
            ) {
              let target = $(this.hash);
              target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
              if (target.length) {
                $("html, body").animate(
                  { scrollTop: target.offset().top - 80 },
                  1000
                );
                return false;
              }
            }
          });
      }

      // ----- Master Slider (Team) -----
      try {
        if (
          typeof (window as any).MasterSlider !== "undefined" &&
          $("#team-slider").length &&
          !$("#team-slider").hasClass("ms-ready")
        ) {
          const masterslider = new (window as any).MasterSlider();
          masterslider.control("slideinfo", {
            autohide: false,
            overVideo: true,
            dir: "h",
            align: "bottom",
            inset: false,
            margin: 10,
          });
          masterslider.setup("team-slider", {
            width: 569,
            height: 479,
            minHeight: 0,
            space: 0,
            start: 1,
            grabCursor: true,
            swipe: true,
            mouse: true,
            keyboard: true,
            layout: "partialview",
            wheel: false,
            autoplay: true,
            instantStartLayers: false,
            loop: true,
            shuffle: false,
            preload: 4,
            heightLimit: true,
            autoHeight: false,
            smoothHeight: true,
            endPause: false,
            overPause: true,
            fillMode: "fill",
            centerControls: true,
            startOnAppear: false,
            layersMode: "center",
            autofillTarget: "",
            hideLayers: false,
            fullscreenMargin: 0,
            speed: 20,
            dir: "h",
            parallaxMode: "swipe",
            view: "wave",
          });
        }
      } catch (err) {
        console.warn("Master Slider init error:", err);
      }

      // ----- Package slider (Supplement Packages) -----
      const pkgSlider = $(".packeg-slider");
      if (pkgSlider.length && !pkgSlider.hasClass("owl-loaded")) {
        pkgSlider.owlCarousel({
          loop: true,
          nav: false,
          dots: false,
          autoplay: true,
          margin: 5,
          autoplayTimeout: 4000,
          autoplaySpeed: 1000,
          lazyLoad: true,
          responsive: {
            0: { items: 1 },
            575: { items: 2 },
            992: { items: 3 },
          },
        });
      }

      // ----- Client voice slider -----
      const cliSlider = $(".client-slider");
      if (cliSlider.length && !cliSlider.hasClass("owl-loaded")) {
        cliSlider.owlCarousel({
          loop: true,
          nav: false,
          dots: true,
          autoplay: true,
          margin: 5,
          autoplayTimeout: 4000,
          autoplaySpeed: 1000,
          lazyLoad: true,
          responsive: {
            0: { items: 1 },
            575: { items: 2 },
            992: { items: 3 },
          },
        });
      }

      // ----- Blog & tips slider -----
      const blgSlider = $(".blog-slider");
      if (blgSlider.length && !blgSlider.hasClass("owl-loaded")) {
        blgSlider.owlCarousel({
          loop: true,
          nav: false,
          dots: false,
          autoplay: true,
          margin: 30,
          autoplayTimeout: 4000,
          autoplaySpeed: 1000,
          lazyLoad: true,
          responsive: {
            0: { items: 1 },
            575: { items: 2 },
            992: { items: 3 },
          },
        });
      }

      // ----- Contact form validator -----
      if ($("#contact-form").length && typeof ($ as any).fn.validator === "function") {
        $("#contact-form").validator();
      }

      // ----- Preloader hide -----
      $("#ctn-preloader").fadeOut();
      $("#preloader").delay(350).fadeOut("slow");
      $("body").delay(350).css({ overflow: "visible" });

      // ----- AOS -----
      if (typeof (window as any).AOS !== "undefined") {
        (window as any).AOS.init({
          duration: 1000,
          mirror: true,
        });
      }
    };

    (async () => {
      try {
        // Load in strict order
        await loadScript("/vendor/jquery.2.2.3.min.js");
        await loadScript("/vendor/popper.js/popper.min.js");
        await loadScript("/vendor/bootstrap/js/bootstrap.min.js");
        await loadScript("/vendor/master-slider/js/jquery.easing.min.js");
        await loadScript("/vendor/master-slider/js/masterslider.min.js");
        await loadScript("/vendor/aos-next/dist/aos.js");
        await loadScript("/vendor/owl-carousel/owl.carousel.min.js");
        await loadScript("/vendor/validator.js");

        if (cancelled) return;

        // Small delay so React has finished painting the DOM
        setTimeout(initTheme, 100);
      } catch (e) {
        console.error("Theme script load error:", e);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
