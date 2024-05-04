/**
 * GutenDevTheme scripts (footer)
 * This file contains any js scripts you want added to the theme's footer. 
 */

// *********************** START CUSTOM JS *********************************

// // grab element for Headroom
// var headroomElement = document.querySelector("#c-page-header");
// console.log(headroomElement);

// // get height of element for Headroom
// var headerHeight = headroomElement.offsetHeight; 
// console.log(headerHeight);

// // construct an instance of Headroom, passing the element
// var headroom = new Headroom(headroomElement, {
//   "offset": headerHeight,
//   "tolerance": 5,
//   "classes": {
//     "initial": "animate__animated",
//     "pinned": "animate__slideInDown",
//     "unpinned": "animate__slideOutUp"
//   }
// });
// headroom.init();

// *********************** END CUSTOM JS *********************************





// *********************** START CUSTOM JQUERY DOC READY SCRIPTS *******************************
jQuery( document ).ready(function( $ ) {

  // get Template URL
  var templateUrl = object_name.templateUrl;

  var svg = `
  <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 937.500000 540.738142"
 preserveAspectRatio="xMidYMid meet">
<g transform="translate(-566.500000,1255.738142) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M6120 12542 c-91 -26 -152 -55 -225 -107 -87 -62 -141 -126 -189
-225 l-41 -85 0 -131 0 -131 44 -88 c93 -189 276 -314 502 -345 135 -19 293 9
414 73 87 46 223 184 264 267 65 135 65 315 0 448 -38 79 -138 186 -224 242
-102 67 -195 92 -350 96 -103 3 -143 0 -195 -14z"/>
<path d="M8327 11393 c-4 -3 -7 -17 -7 -30 0 -32 -26 -93 -53 -121 -30 -32
-120 -77 -193 -96 -33 -9 -150 -27 -260 -41 -229 -29 -297 -45 -366 -82 -115
-62 -179 -148 -197 -263 -7 -44 -11 -648 -11 -1837 l0 -1773 590 0 590 0 0
1123 c0 1405 8 1592 77 1800 56 168 146 257 267 265 99 6 167 -38 219 -143 53
-106 52 -71 52 -1612 l0 -1433 597 0 598 0 3 1343 3 1342 27 120 c45 200 113
315 212 361 149 70 282 -16 342 -223 15 -53 17 -185 21 -1490 l3 -1433 2100 0
2099 0 0 555 0 555 -1232 2 -1233 3 -80 28 c-124 44 -173 75 -266 167 -71 70
-94 101 -129 173 -68 142 -69 153 -70 912 0 712 -5 826 -46 1055 -31 172 -59
263 -119 385 -80 164 -194 274 -346 334 -120 48 -170 56 -339 56 -142 -1 -161
-3 -228 -27 -223 -80 -367 -246 -557 -643 -133 -276 -167 -346 -171 -343 -1 2
-10 62 -19 133 -55 428 -193 680 -439 800 -115 57 -183 74 -321 82 -154 8
-238 -7 -354 -63 -80 -38 -108 -58 -181 -132 -128 -129 -187 -226 -385 -632
-48 -96 -90 -179 -96 -185 -5 -5 -9 181 -9 503 l0 512 -43 0 c-24 0 -47 -3
-50 -7z"/>
<path d="M13745 11393 c-208 -17 -370 -42 -700 -108 -260 -52 -452 -81 -630
-95 -72 -6 -133 -12 -136 -13 -9 -3 244 -944 256 -956 15 -15 161 5 257 35
113 35 250 112 339 191 155 136 304 218 416 230 67 7 93 -9 128 -82 33 -66 30
-107 -12 -168 -42 -61 -114 -109 -279 -188 -82 -39 -189 -90 -239 -114 -113
-53 -402 -210 -475 -257 -115 -73 -239 -206 -295 -318 -48 -95 -66 -161 -72
-261 -19 -319 183 -574 529 -669 157 -42 428 -45 580 -5 194 50 375 161 475
289 15 18 47 38 90 54 89 32 290 42 398 19 224 -48 452 -193 536 -342 30 -54
32 -55 75 -55 l45 0 -4 863 c-4 948 -4 947 -68 1167 -61 211 -161 382 -302
517 -146 140 -325 230 -515 258 -87 13 -287 17 -397 8z m61 -2380 c-8 -20
-119 -55 -176 -56 -154 -1 -285 148 -309 353 -11 89 -2 219 20 295 30 104 105
216 208 311 94 86 185 196 223 269 l33 65 3 -613 c1 -336 0 -617 -2 -624z"/>
<path d="M6855 11310 c-57 -42 -166 -74 -351 -104 -302 -50 -349 -59 -432 -82
-107 -31 -166 -61 -228 -117 -69 -63 -103 -115 -125 -194 -18 -65 -19 -141
-19 -1865 l0 -1798 600 0 600 0 0 2095 c0 1152 -1 2095 -2 2095 -2 -1 -21 -14
-43 -30z"/>
</g>
</svg>
  `;

  $('#mobile-nav').hcOffcanvasNav({
    disableAt: 1024,
    width: 500,
    customToggle: $('.toggle'),
    pushContent: '.menu-slide',
    levelTitles: true,
    position: 'right',
    levelOpen: 'expand',
    navTitle: $(svg),
    levelTitleAsBack: true
  });

  // modal menu init ----------------------------------
  // var modal_menu = jQuery("#c-modal-nav-button").animatedModal({
  //   modalTarget: 'modal-navigation',
  //   animatedIn: 'slideInDown',
  //   animatedOut: 'slideOutUp',
  //   animationDuration: '0.40s',
  //   color: '#dedede',
  //   afterClose: function() {
  //     $( 'body, html' ).css({ 'overflow': '' });
  //   }
  // });

  // // get last and current hash + update on hash change
  // var currentHash = function() {
  //   return location.hash.replace(/^#/, '')
  // }
  // var last_hash
  // var hash = currentHash()
  // $(window).bind('hashchange', function(event) {
  //   last_hash = hash;
  //   hash = currentHash();
  // });

  // enable back/foward to close/open modal --------------------------
  // $("#c-modal-nav-button").on('click', function(){ window.location.href = ensureHash("#menu"); });
  // function ensureHash(newHash) {
  //   if (window.location.hash) {
  //     return window.location.href.substring(0, window.location.href.lastIndexOf(window.location.hash)) + newHash;
  //   }
  //   return window.location.hash + newHash;
  // }
  // // if back button is pressed, close the modal
  // $(window).on('hashchange', function (event) {
  //   if (last_hash == 'menu' && hash == '') {
  //     modal_menu.close();
  //     history.replaceState('', document.title, window.location.pathname);
  //   } // if forward button, open the modal
  //   else if (window.location.hash == "#menu"){
  //     modal_menu.open();
  //   }
  // });

  // // if close button is clicked, clear the #menu hash added above
  // $('.close-modal-navigation').on('click', function (e) {
  //   history.replaceState('', document.title, window.location.pathname);
  // });

  // // close modal menu if esc key is used ------------------------
  // $(document).keyup(function(ev){
  //   if(ev.keyCode == 27 && hash == 'menu') {
  //     window.history.back();
  //   }
  // });


  // Magnific as menu popup
  // MENU POPUP
  // $('#c-modal-nav-button').magnificPopup({
  //   type: 'inline',
  //   removalDelay: 700, //delay removal by X to allow out-animation
  //   showCloseBtn: false,
  //   closeOnBgClick: false,
  //   autoFocusLast: false,
  //   fixedContentPos: false, 
  //   fixedContentPos: true,
  //   callbacks: {
  //     beforeOpen: function() {
  //        this.st.mainClass = 'mfp-move-from-side menu-popup';
  //        $('body').addClass('mfp-active');
  //     },
  //     open: function() { 
  //       $('#close-modal, .close-modal-navigation').on('click',function(event){
  //         event.preventDefault();
  //         $.magnificPopup.close(); 
  //       }); 
  //   },
  //   beforeClose: function() {
  //   $('body').removeClass('mfp-active');
  // }
  //   },
  //   midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  // });

});
// *********************** END CUSTOM JQUERY DOC READY SCRIPTS *********************************
