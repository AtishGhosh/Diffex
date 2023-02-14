var bottombarElement1 = "<div class=\"bottombar-content\">";
var bottombarElement2 = "<div class=\"bottombar-brand\"><div style=\"margin-right: 0.8rem;\"><span class=\"navbar-brand\" style=\"display: inline-block;\" href=\"/\">DIFFEX</span></div><div><div style=\"font-size: 1.4rem;\">Different Experience <span style=\"white-space: nowrap;\">Enterprises &trade;</span></div><div style=\"font-size: 0.8rem;\">&copy; Copyright 2005-2023</div></div></div>";
var bottombarElement3 = "<div class=\"bottombar-info\">Made by <a href=\"https://github.com/AtishGhosh\" target=\"_blank\">Atish Ghosh</a>. To learn more about the Diffex team, visit our <a href=\"/about\">About page</a>. To place an order, report a problem, or ask a query, <a href=\"/contact\">contact us</a>.<br><button class=\"btn btn-outline-primary btn-sm\" style=\"margin-top: 0.5rem;\" data-bs-toggle=\"modal\" data-bs-target=\"#themeModal\" id=\"themeModalButton\">Change appearance</button></div>";
var bottombarElement4 = "</div>";

var fullBottombar = bottombarElement1 + bottombarElement2 + bottombarElement3 + bottombarElement4;

document.getElementById("bottombar").innerHTML = fullBottombar;