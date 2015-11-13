//Button style
var style = '<style type="text/css">.dinexbutton:active,.dinexbutton:hover{text-shadow:#1e4158 0 1px 0;border:1px solid #0a3c59}.dinexbutton{border:1px solid #0a3c59;background:#1996cc;background:-webkit-gradient(linear,left top,left bottom,from(#36abea),to(#1996cc));background:-webkit-linear-gradient(top,#36abea,#1996cc);background:-moz-linear-gradient(top,#36abea,#1996cc);background:-ms-linear-gradient(top,#36abea,#1996cc);background:-o-linear-gradient(top,#36abea,#1996cc);background-image:-ms-linear-gradient(top,#36abea 0,#1996cc 100%);padding:9.5px 19px;-webkit-border-radius:7px;-moz-border-radius:7px;border-radius:7px;-webkit-box-shadow:rgba(255,255,255,.4)0 0 0,inset rgba(255,255,255,.4)0 1px 0;-moz-box-shadow:rgba(255,255,255,.4)0 0 0,inset rgba(255,255,255,.4)0 1px 0;box-shadow:rgba(255,255,255,.4)0 0 0,inset rgba(255,255,255,.4)0 1px 0;text-shadow:#52a4b3 0 1px 0;color:#fff;font-size:17px;font-family:helvetica,serif;text-decoration:none;vertical-align:middle}.dinexbutton:hover{background:#1996cc;background:-webkit-gradient(linear,left top,left bottom,from(#36abea),to(#1996cc));background:-webkit-linear-gradient(top,#36abea,#1996cc);background:-moz-linear-gradient(top,#36abea,#1996cc);background:-ms-linear-gradient(top,#36abea,#1996cc);background:-o-linear-gradient(top,#36abea,#1996cc);background-image:-ms-linear-gradient(top,#36abea 0,#1996cc 100%);color:#fff}.dinexbutton:active{background:#20668c;background:-webkit-gradient(linear,left top,left bottom,from(#2577a3),to(#1996cc));background:-webkit-linear-gradient(top,#2577a3,#20668c);background:-moz-linear-gradient(top,#2577a3,#20668c);background:-ms-linear-gradient(top,#2577a3,#20668c);background:-o-linear-gradient(top,#2577a3,#20668c);background-image:-ms-linear-gradient(top,#2577a3 0,#20668c 100%);color:#fff}</style>';

//to write in html document
var html_text = '';

//invoice valid characters
var invoiceRegex = /^[a-zA-Z0-9\-]{0,300}$/;

//payment link
var payment_link = 'https://dinex.cl/webapp/send?to=';

//payment validator
var payment_ok = true;

if(destinatario_del_pago == '' || monto == '') {
  payment_ok = false;
}

monto += '/DNX';

payment_link += destinatario_del_pago + '&amount=' + monto;

if(mensaje != '') {
  payment_link += '&label=' + mensaje;
}

if(invoice != '') {
  //test invoice format
  if(!invoiceRegex.test(invoice)) {
    payment_ok = false;
  } else {
    payment_link += '&invoice=' + invoice;
  }
}

if(return_url != '') {
  payment_link += '&return_url=' + return_url;
}

if(abort_url != '') {
  payment_link += '&abort_url=' + abort_url;
}

if(exp != '') {
  payment_link += '&exp=' + exp;
}

if (payment_ok) {
  html_text = '<div><a href="' + payment_link + '" class="dinexbutton">Pagar con Dinex</a></div>';
} else {
  html_text = '<div><a href="http://help.dinex.cl/dinexpro/pago-uri">Pago mal formado. Sigue este enlace para revisar las instrucciones</a></div>';
}


var content = document.getElementById('dinex_pay_button');
content.innerHTML = style + html_text;
