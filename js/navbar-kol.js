var navbarElement1 = '<nav class=\"navbar navbar-expand-md fixed-top\"><div class=\"container-fluid\">';
var navbarElement2 = '<button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"><span class=\"navbar-toggler-icon\"></span></button><div class=\"collapse navbar-collapse\" id=\"navbarNav\"><ul class=\"navbar-nav ms-auto\">';
var navbarElement3 = '</ul></ul></div></div></div></nav>';

var titleNavElement = '<a class=\"navbar-brand btn-danger\" id=\"titleNav\" href=\"/\">DIFFEX</a><span class=\"kol-logo me-auto\">KOLKATA</span><span class=\"kol-logo-small me-auto\">KOL</span>';

var homeNavElement = '<li class=\"nav-item\"><a class=\"nav-link nav-link-home\" id=\"homeNav\" href=\"/\">Home</a></li>';
var productsNavElement = '<li class=\"nav-item\"><a class=\"nav-link\" id=\"productsNav\" href=\"/products\">Products</a></li>';
var clientsNavElement = '<li class=\"nav-item\"><a class=\"nav-link\" id=\"clientsNav\" href=\"/clients\">Clients</a></li>';
var aboutNavElement = '<li class=\"nav-item\"><a class=\"nav-link\" id=\"aboutNav\" href=\"/about\">About</a></li>';
var contactNavElement = '<li class=\"nav-item\"><a class=\"nav-link nav-link-contact\" id=\"contactNav\" href=\"/contact\">Contact</a></li>';

navbarLinks = homeNavElement + productsNavElement + clientsNavElement + aboutNavElement + contactNavElement;

var fullNavbarElement = navbarElement1 + titleNavElement + navbarElement2 + navbarLinks + navbarElement3;

document.getElementById("navbar").innerHTML = fullNavbarElement;