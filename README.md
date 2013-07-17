「451 Unavailable For Legal Reasons │ 本網頁基於國家法律而封鎖」聲明網頁使用說明
---------
####檔案說明
- README 讀我檔
- blackclose.js 執行網路熄燈主程式
- err451.js 網路熄燈聲明內容
- error451bg.jpg 網頁背景圖
- index.html 程式碼放置範例

#### 函式引數說明
blackclose為一個利用cookie的方式讓瀏覽者可在閱完聲明頁之後，避免短時間內重複瀏覽該頁而再次跳出，而造成對使用者的干擾。此函式引數用法如下：

- 在 `<body></body>`之間加入 blackclose.js

	`<script src="blackclose.js"></script>`

- blackclose(system_time,begin_time,end_time,cookie_key,cookie_val,cookie_expire)
	* system_time : 回傳目前時間
	* begin_time : 啟始時間
	* end_time : 結束時間
	* cookie_key : cookie 鍵名
	* cookie_val : cookie 值
	* cookie_expire : cookie 持續時間(分)

[自由軟體鑄造場](http://www.openfoundry.org)
