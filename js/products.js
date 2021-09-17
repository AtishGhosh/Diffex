// Ceratizit
var ceratizitImgPath = ["/assets/products/Ceratizit-Boring.jpg","/assets/products/Ceratizit-Clamping.jpg","/assets/products/Ceratizit-Milling.jpg","/assets/products/Ceratizit-Threading.jpg","/assets/products/Ceratizit-Tool-Holder.jpg","/assets/products/Ceratizit-Turning.jpg"];
var ceratizitImgAlt = ["img-Ceratizit-Boring","img-Ceratizit-Clamping","img-Ceratizit-Milling","img-Ceratizit-Threading","img-Ceratizit-Tool-Holder","img-Ceratizit-Turning"];
var ceratizitName = ["Boring Operations","Workpiece Clamping","Milling Operations","Threading Operations","Tool Holders","Turning Operations"];
var ceratizitLink = ["https://cuttingtools.ceratizit.com/gb/en/shop/search/search-result-products.html?category=JTI0RVNLLTExLUEwMSo=&nav=true#category/JTI0RVNLLTExLUEwMSo=/page/1/sort/_blank","https://cuttingtools.ceratizit.com/gb/en/shop/search/search-result-products.html?category=JTI0RVNLLTExLUEwNio=&nav=true#category/JTI0RVNLLTExLUEwNio=/page/1/sort/_blank","https://cuttingtools.ceratizit.com/gb/en/shop/search/search-result-products.html?category=JTI0RVNLLTExLUEwMio=&nav=true#category/JTI0RVNLLTExLUEwMio=/page/1/sort/_blank","https://cuttingtools.ceratizit.com/gb/en/shop/search/search-result-products.html?category=JTI0RVNLLTExLUEwNCo=&nav=true#category/JTI0RVNLLTExLUEwNCo=/page/1/sort/_blank","https://cuttingtools.ceratizit.com/gb/en/shop/search/search-result-products.html?category=JTI0RVNLLTExLUEwNSo=&nav=true#category/JTI0RVNLLTExLUEwNSo=/page/1/sort/_blank","https://cuttingtools.ceratizit.com/gb/en/shop/search/search-result-products.html?category=JTI0RVNLLTExLUEwMyo=&nav=true#category/JTI0RVNLLTExLUEwMyo=/page/1/sort/_blank"]
var ceratizitArrayLength = ceratizitName.length;
var str = "";
for (var i = 0; i < ceratizitArrayLength; i++) {
    str += "<div class=\"col-lg-4 col-md-6 mb-4\"><a href=\"" + ceratizitLink[i] + "\" class=\"btn\" style=\"padding: 0; border: 0;\"><div class=\"card\"><div class=\"product\"><img src=\"" + ceratizitImgPath[i] + "\" width=\"35%\"alt=\"" + ceratizitImgAlt[i] + "\" class=\"product-pic\"><div class=\"card-body\"><h4 class=\"a\">" + ceratizitName[i] + "</h4></div></div><ul class=\"list-group list-group-flush\"><li class=\"list-group-item\" style=\"padding-top: 0.25rem; padding-bottom: 0.25rem;\"><span>Click to Learn More</span></li></ul></div></a></div>";
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
    str += "<div class=\"col-lg-4 col-md-6 mb-4\"><a href=\"" + tdkLink[i] + "\" class=\"btn\" style=\"padding: 0; border: 0;\"><div class=\"card\"><div class=\"product\"><img src=\"" + tdkImgPath[i] + "\" width=\"35%\"alt=\"" + tdkImgAlt[i] + "\" class=\"product-pic\"><div class=\"card-body\"><h4 class=\"a\">" + tdkName[i] + "</h4><h5 class=\"tdk-subtext\">Impeder Cores</h5></div></div><ul class=\"list-group list-group-flush\"><li class=\"list-group-item\" style=\"padding-top: 0.25rem; padding-bottom: 0.25rem;\"><span>Click to Learn More</span></li></ul></div></a></div>";
}
document.getElementById("tdk-products-list").innerHTML = str;

// SAK
var sakImgPath = ["/assets/products/SAK-Super-Abrasives.jpg","/assets/products/SAK-Bonded-Abrasives.jpg","/assets/products/SAK-Coated-Abrasive.jpg","/assets/products/SAK-Special-Products.jpg"];
var sakImgAlt = ["img-SAK-Super-Abrasives","img-SAK-Bonded-Abrasives","img-SAK-Coated-Abrasive","img-SAK-Special-Products"];
var sakName = ["Super Abrasives","Bonded Abrasives","Coated Abrasives","Special Products"];
var sakLink = ["https://www.sakabrasives.com/products/super-abrasives/","https://www.sakabrasives.com/products/bonded-abrasives/","https://www.sakabrasives.com/products/coated-abrasives/","https://www.sakabrasives.com/products/special-products/"];
var sakArrayLength = sakName.length;
var str = "";
for (var i = 0; i < sakArrayLength; i++) {
    str += "<div class=\"col-lg-4 col-md-6 mb-4\"><a href=\"" + sakLink[i] + "\" class=\"btn\" style=\"padding: 0; border: 0;\"><div class=\"card\"><div class=\"product\"><img src=\"" + sakImgPath[i] + "\" width=\"35%\"alt=\"" + sakImgAlt[i] + "\" class=\"product-pic\"><div class=\"card-body\"><h4 class=\"a\">" + sakName[i] + "</h4></div></div><ul class=\"list-group list-group-flush\"><li class=\"list-group-item\" style=\"padding-top: 0.25rem; padding-bottom: 0.25rem;\"><span>Click to Learn More</span></li></ul></div></a></div>";
}
document.getElementById("sak-products-list").innerHTML = str;
