var url = require("url");
const parsedUrl = url.parse(
    "https://blog.altcampus.io:80/students/register?name=altcampus&gender=male",
    true
);
console.log(parsedUrl);
console.log(parsedUrl.pathname);
console.log(parsedUrl.query);
console.log(parsedUrl.host);
console.log(parsedUrl.protocol);
// general
// const googleUrl = url.parse("https://www.google.com/", true);
// console.log(googleUrl);
// Request URL: https://www.google.com/
// Request Method: GET
// Status Code: 200 
// Remote Address: [2404:6800:4002:81d::2004]:443
// Referrer Policy: origin
// Response Header
// accept-ch: Sec-CH-UA-Platform
// accept-ch: Sec-CH-UA-Platform-Version
// accept-ch: Sec-CH-UA-Full-Version
// accept-ch: Sec-CH-UA-Arch
// accept-ch: Sec-CH-UA-Model
// accept-ch: Sec-CH-UA-Bitness
// accept-ch: Sec-CH-UA-Full-Version-List
// accept-ch: Sec-CH-UA-WoW64
// alt-svc: h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"
// bfcache-opt-in: unload
// cache-control: private, max-age=0
// content-encoding: br
// content-length: 45096
// content-type: text/html; charset=UTF-8
// date: Sat, 08 Oct 2022 04:44:11 GMT
// expires: -1
// server: gws
// set-cookie: 1P_JAR=2022-10-08-04; expires=Mon, 07-Nov-2022 04:44:11 GMT; path=/; domain=.google.com; Secure; SameSite=none
// set-cookie: OTZ=; expires=Mon, 01-Jan-1990 00:00:00 GMT; path=/; domain=www.google.com
// set-cookie: OTZ=; expires=Mon, 01-Jan-1990 00:00:00 GMT; path=/; domain=.www.google.com
// set-cookie: OTZ=; expires=Mon, 01-Jan-1990 00:00:00 GMT; path=/; domain=google.com
// set-cookie: OTZ=; expires=Mon, 01-Jan-1990 00:00:00 GMT; path=/; domain=.google.com
// set-cookie: SIDCC=AEf-XMTMph_Wqpc5lD7qZ4TLZpITIAgdInekrWSHes_5d6qRM1WH2ASBGHl0-DkSFjzU9pHBjV8; expires=Sun, 08-Oct-2023 04:44:11 GMT; path=/; domain=.google.com; priority=high
// set-cookie: __Secure-1PSIDCC=AEf-XMThQj0w3sbwxYzvViTUV6ajNlt14b5g-6JArvTjHP2biknMhthIt6-ITM9vaQSnu9REhzYY; expires=Sun, 08-Oct-2023 04:44:11 GMT; path=/; domain=.google.com; Secure; HttpOnly; priority=high
// set-cookie: __Secure-3PSIDCC=AEf-XMQlIzMy3QWaU9RRkNHYvLn75Bx-1PCbLv0zT33Rnp5rmAiOMpTAXtgQhWOZmdwr7qfgP8Sn; expires=Sun, 08-Oct-2023 04:44:11 GMT; path=/; domain=.google.com; Secure; HttpOnly; priority=high; SameSite=none
// strict-transport-security: max-age=31536000
// x-frame-options: SAMEORIGIN
// x-xss-protection: 0

// Request headers
// :authority: www.google.com
// :method: GET
// :path: /
// :scheme: https
// accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9
// accept-encoding: gzip, deflate, br
// accept-language: en-US,en;q=0.9
// cache-control: max-age=0
// cookie: HSID=AR-nBZNHYac9DjGmz; SSID=AIrCUGsDIgq58SKqK; APISID=Clc9McD9pce23PKY/Aopk96ZeOKIfyGETX; SAPISID=smuyC2zqrhxcCZsV/AHSEbVqiqY_tyZ_zB; __Secure-1PAPISID=smuyC2zqrhxcCZsV/AHSEbVqiqY_tyZ_zB; __Secure-3PAPISID=smuyC2zqrhxcCZsV/AHSEbVqiqY_tyZ_zB; SEARCH_SAMESITE=CgQIlpYB; OTZ=6686118_34_34__34_; SID=OgjtstyZtz3C9im7NYpDoC67aT6_3rP-ZoypRfapYVNebv8tVHSU6sQpa8ygz7Q1koFcRA.; __Secure-1PSID=OgjtstyZtz3C9im7NYpDoC67aT6_3rP-ZoypRfapYVNebv8tuDN7NU3AMTZ1GKwp5cRvnw.; __Secure-3PSID=OgjtstyZtz3C9im7NYpDoC67aT6_3rP-ZoypRfapYVNebv8tc0WTo9Frm_8_qhYza4XZQw.; AEC=AakniGNifGH3dHjCVvIzwhDu9cEHvQjzQ_cu2bDV44BIkmzWLE16fgNq2Q; NID=511=hwUzMuELJFfkZI6rpH4BY1PueNXHpuhwdL17eU0_Bom7iLG0NDILRy_tbnu7HYxKHK-ifzu1GOZLeO7040yTPPH7m90hy2H63AFsXBBllNXv3XxlG7UOXCqky8K_F7gKoZY_FtfNOgQgJ3_mhAyF3O_0S8Uuosgq-8QL-O-7v23M0MgrU201Sj_zu6eXOQDuDbdO5g3qSr_F9J3yczMgVo1GyukUGQlZb0j_tBmlpMoZN2HVAd8HbntFoCZYedw; 1P_JAR=2022-10-08-04; OGPC=19031417-1:; SIDCC=AEf-XMTxqsDlXdrkfxNliHaVskGwR8e2u6BROkUSQ28-J6FoAzsfRXuTy51Fw6MVQa53STDvooM; __Secure-1PSIDCC=AEf-XMRwqXJTOckjpOBss6XOktb8GTOHmsy9yFRpRiOsDqwuyeb1XXzlvlmY6tbognOeeH1_cCa1; __Secure-3PSIDCC=AEf-XMTvNam0di4OT-GdQ62G0q2KuUEgeP7ywF0QVVAF9o-40MGb6Yld3-N-3Yip4fqdrAT0ol3E
// sec-ch-ua: "Google Chrome";v="105", "Not)A;Brand";v="8", "Chromium";v="105"
// sec-ch-ua-arch: "x86"
// sec-ch-ua-bitness: "64"
// sec-ch-ua-full-version: "105.0.5195.102"
// sec-ch-ua-full-version-list: "Google Chrome";v="105.0.5195.102", "Not)A;Brand";v="8.0.0.0", "Chromium";v="105.0.5195.102"
// sec-ch-ua-mobile: ?0
// sec-ch-ua-model: ""
// sec-ch-ua-platform: "Linux"
// sec-ch-ua-platform-version: "5.15.0"
// sec-ch-ua-wow64: ?0
// sec-fetch-dest: document
// sec-fetch-mode: navigate
// sec-fetch-site: same-origin
// sec-fetch-user: ?1
// upgrade-insecure-requests: 1
// user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36
// x-client-data: CJe2yQEIpbbJAQipncoBCLTnygEIlaHLAQj3u8wBCIC9zAEI48vMAQif38wBCK3fzAEI8t/MAQil4MwBCPXgzAEIxOHMAQjG4cwBCNPhzAEIx+bMAQ==
// Decoded:
// message ClientVariations {
//   // Active client experiment variation IDs.
//   repeated int32 variation_id = [3300119, 3300133, 3313321, 3322804, 3330197, 3350007, 3350144, 3352035, 3354527, 3354541, 3354610, 3354661, 3354741, 3354820, 3354822, 3354835, 3355463];
// }