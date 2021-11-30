function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(&:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, options = {})
{
  options = {
    path: '/'
  };

  if (options.expires instanceof Date) 
  {
    options.expires = options.expires.toUTCString();
  }
  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  for (let optionKey in options)
  {
    updatedCookie += ";" + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true)
    {
      updatedCookie += "=" + optionValue;
    }
  }
  document.cookie = updatedCookie;
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
    console.log(divs[i]);
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
    setCookie("block" + id + "_display", "none");
  }
}
