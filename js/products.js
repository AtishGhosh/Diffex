// Navbar
document.getElementById('productsNav').classList.add('current-page');

// Ceratizit
var ceratizitImgPath = ["/assets/products/Ceratizit-Boring.jpg","/assets/products/Ceratizit-Clamping.jpg","/assets/products/Ceratizit-Milling.jpg","/assets/products/Ceratizit-Threading.jpg","/assets/products/Ceratizit-Tool-Holder.jpg","/assets/products/Ceratizit-Turning.jpg"];
var ceratizitImgAlt = ["img-Ceratizit-Boring","img-Ceratizit-Clamping","img-Ceratizit-Milling","img-Ceratizit-Threading","img-Ceratizit-Tool-Holder","img-Ceratizit-Turning"];
var ceratizitName = ["Boring Operations","Workpiece Clamping","Milling Operations","Threading Operations","Tool Holders","Turning Operations"];
var ceratizitLink = ["https://cuttingtools.ceratizit.com/gb/en/shop/search/search-result-products.html?category=JTI0RVNLLTExLUEwMSo=&nav=true#category/JTI0RVNLLTExLUEwMSo=/page/1/sort/_blank","https://cuttingtools.ceratizit.com/gb/en/shop/search/search-result-products.html?category=JTI0RVNLLTExLUEwNio=&nav=true#category/JTI0RVNLLTExLUEwNio=/page/1/sort/_blank","https://cuttingtools.ceratizit.com/gb/en/shop/search/search-result-products.html?category=JTI0RVNLLTExLUEwMio=&nav=true#category/JTI0RVNLLTExLUEwMio=/page/1/sort/_blank","https://cuttingtools.ceratizit.com/gb/en/shop/search/search-result-products.html?category=JTI0RVNLLTExLUEwNCo=&nav=true#category/JTI0RVNLLTExLUEwNCo=/page/1/sort/_blank","https://cuttingtools.ceratizit.com/gb/en/shop/search/search-result-products.html?category=JTI0RVNLLTExLUEwNSo=&nav=true#category/JTI0RVNLLTExLUEwNSo=/page/1/sort/_blank","https://cuttingtools.ceratizit.com/gb/en/shop/search/search-result-products.html?category=JTI0RVNLLTExLUEwMyo=&nav=true#category/JTI0RVNLLTExLUEwMyo=/page/1/sort/_blank"]
var ceratizitArrayLength = ceratizitName.length;
var str = "";
for (var i = 0; i < ceratizitArrayLength; i++) {
    str += "<div class=\"col-lg-4 col-md-6 mb-4\"><a href=\"" + ceratizitLink[i] + "\" class=\"btn\" style=\"padding: 0; border: 0; border-radius: 1rem;\"><div class=\"card\"><div class=\"product\"><img src=\"" + ceratizitImgPath[i] + "\" width=\"35%\"alt=\"" + ceratizitImgAlt[i] + "\" class=\"product-pic\"><div class=\"card-body\"><h4 class=\"a\">" + ceratizitName[i] + "</h4></div></div><ul class=\"list-group list-group-flush\"><li class=\"list-group-item\" id=\"list-group-item\" style=\"padding-top: 0.25rem; padding-bottom: 0.25rem;\"><span>Click to Learn More</span></li></ul></div></a></div>";
}
document.getElementById("ceratizit-products-list").innerHTML = str;

// TDK
var tdkImgPath = ["/assets/products/TDK-ZR.jpg","/assets/products/TDK-ZRH.jpg","/assets/products/TDK-ZRS.jpg","/assets/products/TDK-ZRSH.jpg","/assets/products/TDK-ZRSH-squared.jpg"];
var tdkImgAlt = ["img-TDK-ZR","img-TDK-ZRH","img-TDK-ZRS","img-TDK-ZRSH","img-TDK-ZRSH-squared"];
var tdkName = ["ZR series","ZRH series","ZRS series","ZRSH series","ZRSH squared"];
var tdkLink = ["/assets/products/TDK-ZR.pdf","/assets/products/TDK-ZRH.pdf","/assets/products/TDK-ZRS.pdf","/assets/products/TDK-ZRSH.pdf","/assets/products/TDK-ZRSH-squared.pdf"];
var tdkArrayLength = tdkName.length;
str = "";
for (var i = 0; i < tdkArrayLength; i++) {
    str += "<div class=\"col-lg-4 col-md-6 mb-4\"><a href=\"" + tdkLink[i] + "\" class=\"btn\" style=\"padding: 0; border: 0; border-radius: 1rem;\"><div class=\"card\"><div class=\"product\"><img src=\"" + tdkImgPath[i] + "\" width=\"35%\"alt=\"" + tdkImgAlt[i] + "\" class=\"product-pic\"><div class=\"card-body\"><h4 class=\"a\">" + tdkName[i] + "</h4><h5 class=\"tdk-subtext\">Impeder Cores</h5></div></div><ul class=\"list-group list-group-flush\"><li class=\"list-group-item\" id=\"list-group-item\" style=\"padding-top: 0.25rem; padding-bottom: 0.25rem;\"><span>Click to Learn More</span></li></ul></div></a></div>";
}
document.getElementById("tdk-products-list").innerHTML = str;

// Totem
// var totemImgPath = ["/assets/products/Totem-HSS-EorPM-Machine-Taps.jpg","/assets/products/Totem-Carbide-Taps.jpg","/assets/products/Totem-NIB-Tap.jpg","/assets/products/Totem-HSS-Hand-Taps.jpg","/assets/products/Totem-Carbon-Taps.jpg","/assets/products/Totem-End-Mill.jpg","/assets/products/Totem-Thread-Mill.jpg","/assets/products/Totem-Deburring.jpg","/assets/products/Totem-Solid-Carbide-Drills.png","/assets/products/Totem-High-Speed-Steel-Drills.jpg","/assets/products/Totem-Annular-Cutters.jpg","/assets/products/Totem-Round-&-Hexagonal-Dies.jpg","/assets/products/Totem-Adaptors.jpg"];
// var totemImgAlt = ["img-Totem-HSS-EPM-Machine-Taps","img-Totem-Carbide-Taps","img-Totem-NIB-Tap","img-Totem-HSS-Hand-Taps","img-Totem-Carbon-Taps","img-Totem-End-Mill","img-Totem-Thread-Mill","img-Totem-Deburring","img-Totem-Solid-Carbide-Drills","img-Totem-High-Speed-Steel-Drills","img-Totem-Annular-Cutters","img-Totem-Round-&-Hexagonal-Dies","img-Totem-Adaptors"];
// var totemName = ["HSS-E/PM Machine Taps","Carbide Taps","NIB Taps","HSS Hand Taps","Carbon Taps","End Mill","Thread Mill","Deburring","Solid Carbide Drills","High Speed Steel Drills","Annular Cutters","Round & Hexagonal Dies","Adaptors"];
// var totemLink = ["https://www.totem-forbes.com/hss-epm-machine-taps/","https://www.totem-forbes.com/carbide-taps/","https://www.totem-forbes.com/nib-tap/","https://www.totem-forbes.com/hss-hand-tap/","https://www.totem-forbes.com/carbon-tap/","https://www.totem-forbes.com/milling-tools-end-mill/","https://www.totem-forbes.com/milling-tools-thread-mill/","https://www.totem-forbes.com/deburring/","https://www.totem-forbes.com/solid-carbide-drills/","https://www.totem-forbes.com/high-speed-steel-drills/","https://www.totem-forbes.com/annular-cutters/","https://www.totem-forbes.com/round-hexagonal-dies/","https://www.totem-forbes.com/adaptors/"];
// var totemArrayLength = totemName.length;
// str = "";
// for (var i = 0; i < totemArrayLength; i++) {
//     str += "<div class=\"col-lg-4 col-md-6 mb-4\"><a href=\"" + totemLink[i] + "\" class=\"btn\" style=\"padding: 0; border: 0; border-radius: 1rem;\"><div class=\"card\"><div class=\"product\"><img src=\"" + totemImgPath[i] + "\" width=\"35%\"alt=\"" + totemImgAlt[i] + "\" class=\"product-pic\"><div class=\"card-body\"><h4 class=\"a\">" + totemName[i] + "</h4></div></div><ul class=\"list-group list-group-flush\"><li class=\"list-group-item\" id=\"list-group-item\" style=\"padding-top: 0.25rem; padding-bottom: 0.25rem;\"><span>Click to Learn More</span></li></ul></div></a></div>";
// }
// document.getElementById("totem-products-list").innerHTML = str;

// JK
var jkImgPath = ["/assets/products/JK-HSS-Straight-Shank-Stub-Drills.jpeg","/assets/products/JK-HSS-Straight-Shank-Drills-Long-Series.jpeg","/assets/products/JK-HSS-Straight-Shank-Drills-Extra-Long-Series.jpeg","/assets/products/JK-HSS-Taper-Shank-Drills-Regular-Series.jpeg","/assets/products/JK-HSS-Taper-Shank-Drills-Long-Series.jpeg","/assets/products/JK-HSS-Taper-Shank-Drills-Extra-Long-Series.jpeg","/assets/products/JK-Rolled-Forged-Drills-Jobber-Series.jpeg","/assets/products/JK-Rolled-Forged-Drills-Taper-Shank.jpeg","/assets/products/JK-HSS-Centre-Drills.jpeg","/assets/products/JK-Silver-And-Deming-Drills.jpeg","/assets/products/JK-Double-Ended-Drills.jpeg","/assets/products/JK-HSS-Tool-Bits.jpeg","/assets/products/JK-Masonry-Drills-Standard.jpeg","/assets/products/JK-Jobber-Blank.jpeg","/assets/products/JK-Taps.jpeg"];
var jkImgAlt = ["img-JK-HSS-Straight-Shank-Stub-Drills","img-JK-HSS-Straight-Shank-Drills-Long-Series","img-JK-HSS-Straight-Shank-Drills-Extra-Long-Series","img-JK-HSS-Taper-Shank-Drills-Regular-Series","img-JK-HSS-Taper-Shank-Drills-Long-Series","img-JK-HSS-Taper-Shank-Drills-Extra-Long-Series","img-JK-Rolled-Forged-Drills-Jobber-Series","img-JK-Rolled-Forged-Drills-Taper-Shank","img-JK-HSS-Centre-Drills","img-JK-Silver-And-Deming-Drills","img-JK-Double-Ended-Drills","img-JK-HSS-Tool-Bits","img-JK-Masonry-Drills-Standard","img-JK-Jobber-Blank","img-JK-Taps"];
var jkName = ["HSS Straight Shank Stub Drills","HSS Straight Shank Drills Long Series","HSS Straight Shank Drills Extra Long Series","HSS Taper Shank Drills Regular Series","HSS Taper Shank Drills Long Series","HSS Taper Shank Drills Extra Long Series","Rolled Forged Drills Jobber Series","Rolled Forged Drills Taper Shank","HSS Centre Drills","Silver and Deming Drills","Double Ended Drills","HSS Tool Bits","Masonry Drills Standard","Jobber Blank","Taps"];
var jkLink = ["https://jksuperdrive.com/hss-straight-shank-stub-drills","https://jksuperdrive.com/hss-straight-shank-long-drills","https://jksuperdrive.com/hss-straight-shank-extra-long-drills","https://jksuperdrive.com/hss-taper-shank-drills-regular-series","https://jksuperdrive.com/hss-taper-shank-drills-long-series","https://jksuperdrive.com/hss-taper-shank-drills-extra-long-series","https://jksuperdrive.com/rolled-forged-drills-jobber-series","https://jksuperdrive.com/rolled-forged-drill-taper-shank","https://jksuperdrive.com/hss-centre-drills","https://jksuperdrive.com/silver-and-deming-drills","https://jksuperdrive.com/double-ended-drills","https://jksuperdrive.com/hss-tool-bits","https://jksuperdrive.com/masonry-drills-standard","https://jksuperdrive.com/jobber-blank","https://jksuperdrive.com/taps-2"];
var jkArrayLength = jkName.length;
str = "";
for (var i = 0; i < jkArrayLength; i++) {
    str += "<div class=\"col-lg-4 col-md-6 mb-4\"><a href=\"" + jkLink[i] + "\" class=\"btn\" style=\"padding: 0; border: 0; border-radius: 1rem;\"><div class=\"card\"><div class=\"product\"><img src=\"" + jkImgPath[i] + "\" width=\"35%\"alt=\"" + jkImgAlt[i] + "\" class=\"product-pic\"><div class=\"card-body\"><h4 class=\"a\">" + jkName[i] + "</h4></div></div><ul class=\"list-group list-group-flush\"><li class=\"list-group-item\" id=\"list-group-item\" style=\"padding-top: 0.25rem; padding-bottom: 0.25rem;\"><span>Click to Learn More</span></li></ul></div></a></div>";
}
document.getElementById("jk-products-list").innerHTML = str;

// SAK
// var sakImgPath = ["/assets/products/SAK-Super-Abrasives.jpg","/assets/products/SAK-Bonded-Abrasives.jpg","/assets/products/SAK-Coated-Abrasive.jpg","/assets/products/SAK-Special-Products.jpg"];
// var sakImgAlt = ["img-SAK-Super-Abrasives","img-SAK-Bonded-Abrasives","img-SAK-Coated-Abrasive","img-SAK-Special-Products"];
// var sakName = ["Super Abrasives","Bonded Abrasives","Coated Abrasives","Special Products"];
// var sakLink = ["https://www.sakabrasives.com/products/super-abrasives/","https://www.sakabrasives.com/products/bonded-abrasives/","https://www.sakabrasives.com/products/coated-abrasives/","https://www.sakabrasives.com/products/special-products/"];
// var sakArrayLength = sakName.length;
// str = "";
// for (var i = 0; i < sakArrayLength; i++) {
//     str += "<div class=\"col-lg-4 col-md-6 mb-4\"><a href=\"" + sakLink[i] + "\" class=\"btn\" style=\"padding: 0; border: 0; border-radius: 1rem;\"><div class=\"card\"><div class=\"product\"><img src=\"" + sakImgPath[i] + "\" width=\"35%\"alt=\"" + sakImgAlt[i] + "\" class=\"product-pic\"><div class=\"card-body\"><h4 class=\"a\">" + sakName[i] + "</h4></div></div><ul class=\"list-group list-group-flush\"><li class=\"list-group-item\" id=\"list-group-item\" style=\"padding-top: 0.25rem; padding-bottom: 0.25rem;\"><span>Click to Learn More</span></li></ul></div></a></div>";
// }
// document.getElementById("sak-products-list").innerHTML = str;
