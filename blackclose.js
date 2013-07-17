function blackclose(system_time,begin_time,end_time,cookie_key,cookie_val,cookie_expire){
  NowTime = new Date(system_time);
  TimeToBegin= new Date(begin_time);
  TimeToExpire = new Date(end_time);
  elapsed = TimeToBegin.getTime() - NowTime.getTime();//counting that will begin
  expire = TimeToExpire.getTime() - TimeToBegin.getTime();//counting that will to the end 
  
  CookieExpire = new Date();
  CookieExpire.setTime(CookieExpire.getTime()+(600*60*1000)+(cookie_expire*1000));
  cookie_expiregmt = CookieExpire.toGMTString();
  cookie_expiretime = cookie_expiregmt;
  //testing values
  //document.write(NowTime.getTime()+'<br>');
  //document.write(TimeToBegin.getTime()+'<br>');
  //document.write(elapsed+'<br>');
  //document.write(expire+'<br>');
  //document.write(cookie_expiretime);
  
  if(elapsed < 0){ // if elapsed small than zero ,it is begin.
    if(expire > 0){ // if expire number big than zero , it is doing .
      if (!getCookie(cookie_key)){
        document.cookie= cookie_key + '=' + cookie_val  +';expires='+ cookie_expiretime;
        document.write('<script src=\"err451.js\"><\/script>');
      }
    }
  }
}

function getCookie(name){
  var dc = document.cookie;
  var prefix = name + "=";
  var begin = dc.indexOf("; " + prefix);
  if (begin == -1) {
    begin = dc.indexOf(prefix);
    if (begin != 0) return null;
  } else
    begin += 2;
  var end = document.cookie.indexOf(";", begin);
  if (end == -1)
    end = dc.length;
  return unescape(dc.substring(begin + prefix.length, end));
}
