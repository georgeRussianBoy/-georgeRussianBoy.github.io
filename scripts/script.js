setCookie("block" + 0 + "_display");
setCookie("block" + 1 + "_display");
setCookie("block" + 2 + "_display");

function setCookie( name, value, exp_y, exp_m, exp_d, path, domain, secure )
{
  var cookie_string = name + "=" + escape ( value );
 
  if ( exp_y )
  {
    var expires = new Date ( exp_y, exp_m, exp_d );
    cookie_string += "; expires=" + expires.toGMTString();
  }
 
  if (path)
        cookie_string += "; path=" + escape ( path );
 
  if (domain)
        cookie_string += "; domain=" + escape ( domain );
  
  if (secure)
        cookie_string += "; secure";
  
  document.cookie = cookie_string;
  console.log(document.cookie);
}

function getCookie(cookie_name)
{
  var results = document.cookie.match ( '(^|;) ?' + cookie_name + '=([^;]*)(;|$)' );
 
  if ( results )
    return ( unescape ( results[2] ) );
  else
    return null;
}

function deleteCookie(name) 
{
  setCookie(name, "", {
    'max-age:': -1
  })
}

function showBlocks()
{
  var divs = document.getElementsByClassName("songDiv");
  for (var i = 0; i < divs.length; ++i)
  {
    if (getCookie("block" + i + "_display") == "hidden")
    {
      divs[i].getElementsByTagName("article")[0].style.display = "none";
      document.getElementById("b" + i).innerText = "показать";
    }
    else
    {
      divs[i].getElementsByTagName("article")[0].style.display = "block";
      document.getElementById("b" + i).innerText = "скрыть";
    }
  }
}

function toggleBlock(id)
{
  var this_div = document.getElementsByClassName("songDiv")[id];
  if (getCookie("block" + id + "_display") == "hidden")
  {
    setCookie("block" + id + "_display", "block");
  }
  else
  {
    setCookie("block" + id + "_display", "hidden");
  }
  showBlocks();
}
