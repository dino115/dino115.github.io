$(function () {
  var x1 = "web";
  var x2 = Math.pow(2, 6);
  var x3 = location.hostname;
  var x4 = "Kontaktaufnahme";
  $('.email-contact').attr('href', "mai" + "lto" + ":" + x1 + String.fromCharCode(x2) + x3 + "?" + "sub" + "ject" + "=" + x4);

  var y1 = "49";
  var y2 = 4 * 42.5;
  var y3 = 14.448 * 12.5 * 15;
  var y4 = 8;
  var y5 = Math.pow(2, y4) - y2;
  $('.phone-contact').attr('href', "t" + "el" + ":+" + y1 + y2 + y3 / 3 + "1" + y4 + (y5 + y4));

  var z1 = Math.pow(3, 3) + 3;
  var z2 = [65, 109, 32, 84, 97, 110, 122, 98, 101, 114, 103];
  var z3 = [66, 111, 110, 110];
  var t = (z2.map(function(n) { return String.fromCharCode(n) }).join("")) + " " + (z1 - 1)
  t += "<br />";
  t += "" + (133 * 4) + (z1 - 1) + " " + (z3.map(function(n) { return String.fromCharCode(n) }).join(""))
  $('.imprint address').append(t)

  $('[data-toggle="tooltip"]').tooltip();
})
