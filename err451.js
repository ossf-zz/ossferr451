//本程式由 MozTW, CC BY 3.0 TW 授權
//套上CSS樣式
(function() {
var blackout_css = document.createElement("style");
var blackout_css_content = document.createTextNode(
    "#blackout * { -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box;}" + 
    "#blackout { background-color: #333333; background-image: url(error451bg.jpg); background-repeat: no-repeat; background-size: cover; font-size: 14px important; height: 100%; left: 0; margin: 0; overflow: hidden; position: fixed; text-align: left; top: 0; -webkit-transition: top 0.8s; transition: top 0.8s; width: 100%; z-index: 99999; }" +
    "#blackout.out { top: -180%; }" + 
    "#blackout section { background: rgba(0, 0, 0, 0.2); border-radius: 1em; color: white; line-height: 1.4em; margin: 8% auto 3%; max-height: auto; max-width: 800px; overflow-y: auto; padding: 1%; width: 100%; }" + 

    "#blackout p { font-family: sans-serif; color: #FFFFFF; line-height: 1.6em; }" + 
    "#blackout h1 { border-bottom: 1px solid #CCC; color: #33AAEE; font-family: sans-serif; font-size: 1.6em; font-weight: bold; line-height: 1.6em; margin: 0 0 1em 0.25em; padding: 0 0 0.25em; }" + 
    "#blackout a { color: #CCA0D0; text-decoration: underline; } #blackout a:hover { background: transparent; color: #EEEEEE; text-decoration: underline; }" +
    "#blackout .anno { color: #BBB; font-size: 1em; margin-bottom: 1.5em; padding: 0 2em; text-shadow: 1px 1px 1px black;}" +
    "#blackout footer { display: block; height: 20%; text-align: center; } " +
    "#blackout .blackout-btn { background-color: black; border-radius: 8px; box-shadow: 0 0 15px white; color: white; display: inline-block; line-height: 1.5em; padding: 0.5em 1em; text-decoration: none; }" + 
    "#blackout .blackout-btn:hover { background-color: #333; color: white; text-decoration: none; }"
);
blackout_css.appendChild(blackout_css_content);

//騰寫抗議內容
    var header = document.createElement("header");
    var title = document.createElement("h1");
    title.appendChild(document.createTextNode("Error 451 : 本網頁基於國家法律而封鎖"));
    header.appendChild(title);

    var section = document.createElement("section");
    section.appendChild(header);

    var br = document.createElement("br");    

    var content2 = document.createElement("p"); 
		var content2_1 = document.createElement("font");
		content2_1.setAttribute("color","#FFDD00");
	  content2_1.appendChild(document.createTextNode("「451 Unavailable For Legal Reasons │ 本網頁基於國家法律而封鎖」"));
	  content2.appendChild(content2_1);	
		 
    var content3 = document.createElement("p");
    content3.appendChild(document.createTextNode("在你看到本頁面的同時，你已經被國家限縮讀取部分網頁的權利了。"));

		var content4 = document.createElement("p");    
    content4.appendChild(document.createTextNode("本網站基於維護自由的精神聲明：反對國家目前直接透過行政管制的措施，管制人民自由瀏覽各個網頁的權利。網際網路中存在各式資訊，其中包含許多對社會大眾有益的資訊，抑或存在令人反感、甚至不合法的內容。本網站為此聲明之理由在於，若國家逕以行政權恣意認定網站內容是否合法，例如：是否侵害他人智財權、是否危及國家安全、是否合乎兒童及少年之保護等，未經過司法之正當程序進行審理及判決之下，直接將網站封鎖，將嚴重影響網路中立性。"));

		var content9 = document.createElement("p");
		content9.appendChild(document.createTextNode("網路中立性是軟體自由、網路自由及言論自由的基石，自由的前提在於資訊自由可得，技術上的中立原則則是確保資訊可得性及正確性；如果中立原則被破壞，國民所看到的將是一個被政府修改、粉飾的網際網路，違反自由、開放及透明的精神。"));
    var about451 = document.createElement("a");
    about451.setAttribute("href", "http://www.openfoundry.org/tw/foss-forum/9006");
	  about451.setAttribute("target", "_blank");    
	  about451.appendChild(document.createTextNode("451 讓事實不被掩蓋"));

	  var sopa = document.createElement("a");
	  sopa.setAttribute("href", "http://www.openfoundry.org/tw/foss-news/8995");
	  sopa.setAttribute("target", "_blank");    
		sopa.appendChild(document.createTextNode("從 SOPA 到 CISPA - 軟體自由、網路自由與公民自由知多少？"));

    var content5 = document.createElement("p");    
    content5.appendChild(document.createTextNode("閱讀更多："));
    var content6 = document.createElement("ul");
		var content7 = content6.appendChild(document.createElement("li"));
		content7.appendChild(about451);
    content6.appendChild(content7);
		var content8 = content6.appendChild(document.createElement("li"));
		content8.appendChild(sopa);
		content6.appendChild(content8);

		section.appendChild(content2);
    section.appendChild(content3);
    section.appendChild(content4);
		section.appendChild(content9);
    section.appendChild(content5);
		section.appendChild(content6);

    var footer = document.createElement("footer");
    var footer_content_close = document.createElement("a");
    footer_content_close.setAttribute("href", "javascript:void(0)");
    footer_content_close.setAttribute("class", "blackout-btn");
    footer_content_close.setAttribute("onclick", "document.getElementById('blackout').className = document.getElementById('blackout').className+' out';");
    footer_content_close.appendChild(document.createTextNode("繼續瀏覽網頁"));
    footer.appendChild(footer_content_close);

//建立抗議內容到#blackout區塊
function showBlackout()
{
    var element = document.createElement("div");
    element.id = 'blackout';
    element.appendChild(blackout_css);
    element.appendChild(section);
    element.appendChild(footer);
    document.body.appendChild(element);
}

if (window.addEventListener)
    window.addEventListener('load', function(){ showBlackout() }, false);
else if (window.attachEvent)
    window.attachEvent('on' + 'load', function(){ showBlackout() });
})();
