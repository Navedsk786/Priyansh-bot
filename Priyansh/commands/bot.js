const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["BaZzati Aur Shadi Ek hii Jaisi Hoti..😐 Achhi Tabhi Lagti Hai..Jab Dusre ki Ho...🤗🫣🥲", "Cockroach 🪳 taane dene lagen Ladko ko 😒 ki Tumhari Begum tumse zayda to humse Darti hain...😬😆😹", "Arz Kiye hai..!✍️\n Tu Sawal Nhi ek Paheli hai 😗 Meri Manzil Tu Nahi Teri Saheli hai....🤗😅🥹", "Tum Petrol ⛽️ si Ladki Aur main Machis 🧨 sa Ladka mil gye Dono to Tabahi hi hogi...😜🔥🤣", "Waqt pr Shadi krke Apne Bachhe Palna 😐 20 Saal ki Ladki ko Facebook Messenger pr Palne se Behtar hai...🙆🤐😆", "Jinn Ladkio ke pichhe Ladke Hath dho kr Pade huye hai.! Vo Ladkiya Apna Muhh dho kr un Ladko se Apni Jaan churwa len..🤣😐😆", "Ek Tarfa Pyar Haar Raha hai 🙁 Khush Wahi Hai Jo Do Jagah Muh Maar Raha Hai...🙃🤞", "Single hone ka Ek Fayeda hai.. Single Logo ka sirf Hath dukhta hai... Dil 💔 nhi Dukhta 😝🫣😂", "Mehant Karte Raho Waqt Badlta hai..✍️\n Waqt Badlta Hai !  Par Waqt Lagta h🙃✌️😍", "Mohabbat main Ek dusre ke itna Kareeb bhi Nhi Anaa Chahiye ke dono me se Ek ko Nahana Parr Jye..🤣🫢\n Garmi Bahut Hai nah😒🤐", "Mere Room ke to Bedsheets bhi Double hai, bas Ek main hi Single hu...🙁🥹", "Aurat ki Zuban Aur Mard ki Aankhon ko Araam Marne ke Baad hee Aata hai..🤨🤔😬", "Motorcycle Aur Boyfriend me Ek Baat Common hai..Motorcycle ko Pahle Kick Marte hai phir Use krte hai....Aur Boyfriend ko Pahle Use krte Hai Phir Kick Marte Hai...😐🤣✨️", "Arz Kiya hai.....✍️:)\nBaat sirf Itni sii Hai Nazar Ka Opration ho sakta hai... Nazariye Ka Opration nhi Ho sakte..✨️🖤", "Attention ⚠️\n  Dukh!  Sukh!  Soch Samjh Kar Banta Kare Ye Screenshot Ka Jamana Hai...😐🖤💥", "Ek Ladki ki Respect 🙏 Karna Usko Khubsurat kahne se Zayda Khubsurat Hai....🤗🙃💞", "Pyar agar jhuta nikle to Khud ko Sambhalna Mushkil Ho Jata hai...😔 Aur agar Sachha Nikle To Bachho ko Sambhalna Mushkil Ho Jata hai...🤣😆", "Shadi Ek Aisa khubsurat Jangl Hai.. Jaha Bahadur Shero 🦁 ka Shikar Kiya Jata hai...🤣🤣🤣", "Khansi ki Dawa nah Pio to (TB) bann Jati hai...😕 Aur Girlfriend waqt pe nah badlo to vo BiBi bann Jati hai...😂😝😗", "Shadi waha kro jaha Sasur Maaldaar ho Ladki Jaisi bhi ho par *SAALI* Jaandar ho..🤣😁", "Pahle Jamane ke Jo Aashiq the vo Pyar main Wafa Dhunte the...😇 Aaj ke dour Aashiq vo Flat 🏠 main Jagah Dhundte 🤦‍♂️😆", "Shadi Ek aisa khel hai.. Jo khela Bachho ke liye hi Jata hai..aur agar ek Bachha ho jye phir vo Khelne nhi Deta.😂😂", "Duniya main Dabaye jane wali tange aaj bhi Dusre Number par hai...😐😬\n pahle number pr Galaa😂😆", "Ishq ke Rishte Itne Nazook Hote Hai ke Raat ko Number Busy Jane se hi tut Jate hain.! 💔🙃", "Ladkiyo ka dil Pani ki tarh hota hai Ladko ka dil Moblie ki trh hota hai ab Chahe Moblie Pani main gire ya Pani Moblie pe Gire Satiyanas Moblie Ka hi Hota hai..😕😆", "Dard Dilon ke Kamm Ho Jate.!🙁 Agar Kuchh Rishtedaro ke Muhh band ho Jate...😂🫢", "Pahle Unse Ghanto Baten Hoti thi... Ab Ghanta 🔔 Baat hoti hai...😡😕", "Aisi Ladkiyo pr kabhi Etbaar mat krna jo Dieting krti ho kionki Jo Ladkiya Dubla patla hone ke Liye Khana chhor sakti hai vo kisi ko bhi chhor skti hai....😂😂", "Gadi 🚗 kitni hi khubsurat aur Chamakdar Kion nah ho lekin Uska silencer Hamesha Kala hi Hota Hai....😐😬🥲", "Zindagi main vohi Ladkiya agee Jati Jo Jhadu Lagati Hai...🤭 Pucha Lagane wali to Piche ko Aati hai..🤣🤐", "Please don't disturb me", "Always Be Happy ♥️♥️ Kion Ke TindEe Jesa Muh BanaNe SEe tenXan kM nahi Hoti 🤫🤫🤫", "Meri Jann Kya Hua", "I Love uhh Always", "Baby, Kaho tO Kiss Kar Lu", "Gussa apni jga lekin bhai hum sy nahi mara jata phone deewar py😐🙄" ,"Hi love you ummmmmmmaaaaaaaàahhhhhhh 💋 babY", "Dur HaT Tere ko Aur Koi Kam Nhi Jb DeKho Bot Bot 😡 ShaDi KerLe Mujhsy 😉😋🤣", "Teri meri kahani Aj blue hai pani pani pani pani pani pani💦💧", "Kahani Suno !😔 Zubani suno !😔 Mujhe Bukhar Huwa Tha'w 😔) Ek So Chaar Huwa tha'w 🥺💔", "😁🎗_ZeHer banaNa sikH raHaa hUn😂👀 BuS iskO trY karnY waLa cHaHiye _💔🙄😹", "Ha ha ab meri yaad ab ai nah phly to babu shona kerna gy thy 😾 ab ham aap sy naraz hai jao aap bye ☹️", "Aaj kal Log Dua 🤲 me kam😐 Chugli me Zayda Yaad Rakhte Hai😁😛", "Ittuu🤏 si shram ker Lya kro hr wqt tr tr krty ho 🙂 💔✨⚠️†", "Khush Raha kro Dosto, ........kya pata kab Shadi ho jye.....😂😆😜", "Kisi ki bhi babu sona baby bachha ki Shakal Chand 🌙 se nhi milti hai, to Kirpya Apni Aukat m rahe😏😆", "haiy ma sadky jawa teri masoom Shakal phe 😁", "kya bot bot bot Laga Rakha hai 😀", "Bot nah bol oye ! Janu bol mjhy" , "Shaqal Sy masoom lgty ho 😂 btao din m kitni baar naak m ungli dalte ho 🤧🤣", "kash tum single hoty  😂", "Ary Hutiya pnti nah kar jo kam hai bol do sharma nahi , bol de koi nahi dakh rha 😂", "Dur Dur Fity Muh Aur Koi Kam Nahi Kiya Har Waqat Mjhy Tang Kerta Rhta Ha 🥺", "ary ary bolo meri jaan kia hal hai", "Teri pic dakhna sy phly shukr hai ma anda hu 😂", "esy hi hansty rhao kyu ky hnsa sy konsa tera bill ah jata hai 😂", "Ladkiya apni sirf 1 hi Ghalti manti hai ki Ghalti kardi tumpe Bharosa krke😬😆", "Bandi hoti to usko choti choti 2 papiyan krta😒😔👩‍🦯", "Udas matt ho Jaan 😏har Guzrta waqt ⏲️ tumhe tumhari Shadi 👩‍❤️‍💋‍👨 ke Kareeb le ja rhaa h 😜🥳", "Hame Ignore Kijye😪 aur Pao Bhad me Jaane ka Khubsurat😍 Mouka...😆", "Ary Yahin Hon namony😗", "Haye Main Sadke jawa Teri Masoom Shakal pe baby 💋 ", "Bar Bar Disturb Na Krr JaNu Ke SaTh Busy Hun 🤭🐒", "Main Gareebon Sy Bt Nhi kRta 😉😝😋🤪", "Itna Pass Na 😐 aa Pyar h0o JayGa", "Bolo Meri Jaan Tum Mujhse Pyar Karte Ho Na 🙈💋💋", "Are jaan Majaak ke mood me nhi hu main jo kaam hai bol do sharmao nahi", "Abe Dhakkan Bandh ho ja kitna preshan Karega 😒🤬", "Kitna Preshan Karta hai😔 Gali Sunna H kya? 🤬", "Teri Baat Ka Faluda Maru Chup kr😾🤬", "Tujhe Kya koi aur Kam nhi ha?🤔 Messenger pe Bot Bot Karta h🤧😕", "Tujhe Apna Bejjati Karne Ka Saukh h..🤐", "Abhi Bola Toh Bola Dubara Mat Bolna", "Haaye Main Mar Jawa Babu Ek Chuma To Do Kafi Din Se Chumi Nahi Di 😝", "Dur Hat Be😡 Tujhe Aur Koi Kam Nahi Kya Har Waqat Mujhy Tang Kerte Rhte ho 😂", "Are Bolo Meri Jaan Kya Hall Hai😚", "IB Aja Yahan Nhi B0ol Salta 🙈😋", "Bot Bolke Bejjti Kar Rahe ho yall...Main To Tumhare Dil Ki Dhadkan Hu Baby...💔🥺", "Are Tum Wahi ho nah Jisko Main Nahi Janta 🤪" , "Kal Haveli Pe Mil Jra Tu 😈", "Bx KRr Uh k0o Pyar H0o Na H0o Mujhe H0o JayGa..🥺🫂", "Phle NaHa kRr Aa Chapri people 🤧😂", "Main yahin hoon kya hua sweetheart‎ 🤗😗", "Boss Dk Tujhe Aur Koi Kaam Nhi H 🤔 Har Waqt Bot Bot Karta H🫣🤨", "MaiNy Uh Sy Bt Nhi kRrni🙂", "MeKo Kxh DiKhai Nhi Dy Rha 🌚", "Bar Bar Disturb Na KRr JaNu Ke SaTh Busy Hun  😋", "Main Gareebon Sy Bt Nhi kRta 😉😝😋🤪", "Itna Na Pass aa Pyar h0o JayGa", "Ary yrr MaJak Ke M0oD Me Nhi Hun 😒", "Dur HaT Terek0o 0or K0oi Kam Nhi Jb DeKho Bot Bot ShaDi KerLe Mujhsy 😉😋🤣", "TeRi K0oi Ghr Me Nhi SunTa T0o Main Q SuNo 🤔😂 ", "Mujhe Mat BuLao Naw Main buSy h0o 🛌 ", "Are TuMari T0o Sb he baZzati kRrty Me Be kRrDun 🤏😜", "Phle NaHa kRr Aa 😂 phir koi n koi pat Jayega😬🤓", "TeRa T0o GaMe BaJana PreGa", "Ta Huwa 🥺"  , "TuM Phr AaGye 🙄 Kisi Aor Ny Muh Nhi LaGaYa Kya🤣🤣🤣", "Hurt 💔Krne se Acha hai Flirt 😉 Kar lo", "Tumse Acha to Google hai jo Likhna Start Karte he Dil ki Baat jan leta hai😏😏", "Chal Chal Hawa Ane de Lol😏", "Ek Ladki ne mere dil ke 1000 tukde kar diye😢aur ab mere dil ka har 1 tukda alag alag ladkio se pyar krta hai😔🥹", "Block Your ‘’ bf ‘’ And Purpose meh 🙂💔", "Sirf 10% Ladkiya dhup se jalti hai,🙄Baki ki 90% ladkiya ek dusre se Jalti hai😜🤣", "Tum itny Masoom Q Ho babu🥺❤️", "Ammi ne aaj digital saza di hai Charger hi utha kar le gyi😭😦", "Aao dard banttay hain 🫂 Tum darwazay mein ungli do Phir mil kar cheekhain maartay hain 😬🥲", "Suna hai aap ki muskurahat par har koi mrta 😳 hai Zara sa time nikaal kar ao chooha 🐀 marvana hai...🙃🤣", "Kisi ko sachey dil ❤️ se chaaho to poori kaayenaat uski shadi kisi aur se krwane mein lag jati hai..💔😒", "Tang nai kro I am udas🙂💔", "kbhi naaak se balloon bnaya hai..😁😁", "Bs kro tharki kitni Bot Bot kro gye🙂💔", "Pait ke ander sab kuch chala jata hai, Bas pait hi ander nahi jata🙄🙁", "Soch raha hon inbox rent pe de dun khali jo para rehta hai 😒", "Abe Ja Chawal Insan😏Aisi Shakal Se Koi Nahi Patne Wali😐😂", "Vo Kahti thi bhag kar Shadi kar lenge vo bhag gyi meko le jana bhool gyi😔", "Agar Ladkiya InstaGram, Facebook, WhatsApp, pr nah ho to ye bhi Nahi Chalega..😜🤭", "Middle Class Ladko ke sapne, aur Urfi jabed ke Kapde kabhi bhi Pure Nahi Hote🤣🫣", "Sacha pyaar to mera mobile apane charger se karata hai ek din mile bina rah nahi sakta😂💥", "kuchh logon ko mohabbat ka aisa nasha chadata hai… ki shaayari vo likhate hain dard poora facebook sehan karta hai..🤧🥲", "Crush 😍 ho ya Brush Waqt pr Badal Lena Chahiye 🙃 wrna Dil ho ya Dant tut hi Jata hai,..🤭💔🤯", "Dost Hamesha Kale Banao 😪 Kionki vo Rang nhi Badlte...🤣", "Tanki m tanki - tanki m Pani 💦 Babu Shona ke Chakkar m Don't waste 🗑 your Jawaani..😝🫣", "Bahas karne se Rishta kamzor hota hai, Isliye turant Tahppar maar kar Rishte Majbut kar len😐😆😏", "Facebook ka Matlab jo 'Face' pasand ho use turant 'Book' kar do..😜🤣", "Mitha Aam 🥭 kabhi kachcha nahi 😐 hota, aur Babu Shona wala pyar kabhi sachcha nahi hota..😆😆", "Use Paane ke Liye ped 🌴 par dhaga bandha tha 🥺 Nagar nigam wale ped 🌳 hi kaat le gaye...😒😪", "Har Larki dukh nahi deti, Kuch Gaaliyan bhi deti hain 😒🫢","Ittuu🤏 si shram ker Lya kro hr wqt tr tr krty ho 🙂 💔✨⚠️†", "Banda hota tw us ko choti choti 2 pOniyAn krti🙂👩‍🦯👩‍🦯", "Ary Yahin Hon namony😗", "jiee bndr 😍", "Love you bolongi ab tujhy kaminy", "Miss YoU NaW moi biryani ki plate", "Inna Sarra🤏", "OkkaY chanda ki hun yawr mai", "😁Smile I am Taking Selfy✌️🤳", "🥺Jan nahi kehna to men naraz ho jana he", "bak bk bkaik", "Main ap ki ami ko btaou ₲ł ap Facebook use kerty ho aur ulty kam kalty ho , " ,"Block Your ‘’ gf ‘’ And Purpose me 🙂💔" ,"K0i Perp0Se Hi Krd0 Perm0te T0 hm PhlY hi HaiN 🙂"," Billo bagge billeya da ki kregi🤨" , "what is you mobile number📲 , kru kya dial number📞" , "Abe Padhai Likhai kro, bot bot krne se ghar nahi chalta" , "Mene suna hai mumbai delhi diya kudiya raat bhar nahi sondiya🙄" , "Abee tujhe ek pal bhi shanti nahi😏, baar bar mujhe tang krte ho" , "Long drive pe chaloge😜" , "Aur batao tum zehar kyu nahi pi lete" , "itna cigrette na piyo ki uske dibbe pe tumhara hi photo ajaye" , "mujhe bar bar tang mt kiya kro" , "Tum zinda ho 😯😯", "Muh me se supari   nikaal ke baat kr" , "Tum single ho kya 😜" , "gaanja kam fooka kar" , "Tujhe dikhai nahi deta me ApnY JaNu Ke SaTh BusY hu" , "jindagi me do baate  hmesha yaad rkhna ,1: kisi ko poori baat nahi batana chahiye, aur dusri baat.." , "Itni  badi hogyi ho, biaah hogya tumhara" , "oye chhotu 😜Chay lao mere maalk suheb ke liye" , "Mere maalk suheb ☕ bolte hai chay ko mana krne se paap lagta hai" , "Haaye mera boss suheb abhi tk Single hai, sharam kro ladkiyo😾" , "Chup saatvi fail" , "Dil doge ya number🤓" , "Apko jo  bolna hai katghare me aake kahiye" , "haaye aaj to tum bahut bahut😍😍 mahnus lag rhe ho" , "Aagye muh utha ke","Insan ka sabse bada dushman uska apna dimag hota hai...😐 pakd pakd kr lata hai vo bate jo use taklif pahuchati hai....🖤💯", "Shardiyon ki Raat hai.. Aur Charo taraf Tanhayi ka Aalam ,,, hum bhi khoob sote agar teri bahon mai hote...🙃🫠", "Koi Mila hee nhi jisko Wafa Dete Sab Kamine Nikle kis kis ko Saza dete..", "Kuxx Dost Khazane ke Tarh hote hai.🤗 Dil karta hai Zamin mai Gaadh dun😒😕", "Wasta nhi Rakhna to Nazar Kion Rakhte ho... kis Haal mai hun Zinda Khabar Kion Rakhte HO...😐", "Arz Kiye hai..✍️🏻\n\nWoh jo Shamil tha meri Duaon mai bin mange Kisi ko mil Gya..✍️🏻🖤", "Raat bhar Karta raha teri tarif mai Chand 🌙 se aur Chand inna Jala ki subah tak Suraj ho gya😂😁😝", "Akele baithe hain Samjhdaron ki bhid main Ek Raye zaruri hai koi hamara sath den na den hamare loye to bas chai zaruri hai. 🍵 😋", "Pyar Andha hota hai.. Ghar wale aur Muhalle wale nhi 😏 Padke gye to kutayi hogi kutayi..🙄 😂", "Sirhane rakh ke teri Yaad mai Aaj kal roj sota hu 😍 kabhi hasa deti hai tu Mujhko 🙃 kabhi mai bahut Rota hu...🙁🫣", "Dil to karta hai kisi ke pyar mai gir jao 🤔 par Darr Lagta kahi haath pair tut gye to kya hoga mera 😥 vo to bhag Jaygi 😬😒", "Agar Apko koi pagal bole nah to sad 😔 mat hona.. bss baith kAr socHna ki ye Baat Leak kaise ho gyi yarr..🤔🫣", "Tumhare Dil mai Jagah hai kya 🥲 meko Bahar Thandi Lag rahi hai 🥶 andar ane do nah..🥹🙁", "Kaise Batao ki meri Zindagi me kya mol hai.. main Bukhar-e-Ishq hu tera aur tu meri Paracetamol 💊 hai..😁😝", "Han han tum Chand 🌙 ho Aasman pr to Kharbuja latak raha hai 😏🙄😬", "Akar dekho mere dil mai 😢 Jagah kam hai... lekin tum phir bhi fass fass ke Ajaogi,,,🙃🤭", "Badle Badle Se Lagte khair hai.🙄 Kya baat ho gyi 🤔 Shikayat Humse hai ya kisi aur se Mulakat Ho gyi..😆🫠🫣", "Agar tum mujhse Rothogi to batao kaise manunga🤔 akar tere paas kaan ke niche Lagaunga..👋😁😝", "Arz Kiye hai..✍️\n\n Munafikon ki Basti mai Apne dere hain 🏠 mere muh pr mere hai... tere muh pe tere hain...🖤💯", "Arz kiya hai..✍️\n\n Log bhi Kamal karte hain.. dost 🫂 dost bol kr Istemal karte hai....🖤💯", "Ke Zindagi ne mujhe Hazaar gham diye 😢 maine Liye hi nhi 😒 saaf inkar kar diye.😬😂", "Baby, Kaho tO Kiss Kar Lu", "Dur HaT Tere ko Aur Koi Kam Nhi Jb DeKho Bot Bot 😡 ShaDi KerLe Mujhsy 😉😋🤣", "Teri meri kahani Aj blue hai pani pani pani pani pani pani💦💧", "Kahani Suno !😔 Zubani suno !😔 Mujhe Bukhar Huwa Tha'w 😔) Ek So Chaar Huwa tha'w 🥺💔", "Aaj kal Log Dua 🤲 me kam😐 Chugli me Zayda Yaad Rakhte Hai😁😛", "haiy ma sadky jawa teri masoom Shakal phe 😁", "Kisi ki bhi babu sona baby bachha ki Shakal Chand 🌙 se nhi milti hai, to Kirpya Apni Aukat m rahe😏😆", "kya bot bot bot Laga Rakha hai 😀", "Bolo Meri Jaan Tum Mujhse Pyar Karte Ho Na 🙈💋💋", "Haye Main Sadke jawa Teri Masoom Shakal pe baby 💋 ", "Haaye Main Mar Jawa Babu Ek Chuma To Do Kafi Din Se Chumi Nahi Di 😝", "Ek Ladki ne mere dil ke 1000 tukde kar diye😢aur ab mere dil ka har 1 tukda alag alag ladkio se pyar krta hai😔🥹", "Bot Bolke Bejjti Kar Rahe ho yall...Main To Tumhare Dil Ki Dhadkan Hu Baby...💔🥺", "Sirf 10% Ladkiya dhup se jalti hai,🙄Baki ki 90% ladkiya ek dusre se Jalti hai😜🤣", "Bs kro tharki kitni Bot Bot kro gye🙂💔", "Suna hai aap ki muskurahat par har koi mrta 😳 hai Zara sa time nikaal kar ao chooha 🐀 marvana hai...🙃🤣", "Agar Ladkiya InstaGram, Facebook, WhatsApp, pr nah ho to ye bhi Nahi Chalega..😜🤭", "Crush 😍 ho ya Brush Waqt pr Badal Lena Chahiye 🙃 wrna Dil ho ya Dant tut hi Jata hai,..🤭💔🤯", "Middle Class Ladko ke sapne, aur Urfi jabed ke Kapde kabhi bhi Pure Nahi Hote🤣🫣", "Tanki m tanki - tanki m Pani 💦 Babu Shona ke Chakkar m Don't waste 🗑 your Jawaani..😝🫣", "Mitha Aam 🥭 kabhi kachcha nahi 😐 hota, aur Babu Shona wala pyar kabhi sachcha nahi hota..😆😆", "Boyfriend Ullu 🦉 ki tarah hota hai use Girlfriend ki Sari Achhayi Sirf Raat ko hi nazar aati hai😬🤐" , "Log Raat m apni Janu se Ladd rahe hote 😐 aur m machharon se Ladd raha hota hu😪" ,"Koi Ladki agar kahe Net slow tha samjh jao vo Bartan dho rahi thi🤐😏😆" ,"Humsafar Khubsurat Nahi Sachha Hona Chahiye🫂🥰 Uske baad Phir Bachha 👶🏻 hona chahiye😂😂😂", "Mark Zuckerberg (Zuku) ke Mutabik Facebook couples message pe hi Suhagraat Mana Lete hai 🤐🤣 ", "Har Chiz se Dil se uth gya 😢 siwye Shadi ke😒", "Phool hai Gulab 🌹 ka Nasha hai Sharab Ka 🥂 Agar Ijazat ho to Shohar bann jao main Apka🙃🫣", "Jab Usne Kaha tumhari Soch hee Ghatiya Hai 😒 main us waqt bhi usi ko soch Raha tha😕💔", "Subah se mera blood pressure low ho rhaa hai 😒 Aap mujhe thora purpose kar dogi🤗🫣", "Halwa Puri Hoti hai, Wel Puri Hoti, Pani Puri Hoti, ye nind Puri Q nhi Hoti.....😐😪 ", "Tel Bina Samosa Pakk nhi Sakta Rishtedaron ke Taano se koi bach nhi sakta😬😬", "Chai ke Cup 🍵 se uthe dhu,en main teri Shakal Nazar aati hai., aur tere khayalon me kho kar aksar meri Chai 🍵 thandi Ho jati hai...🫰🏻😒", "Kuxx Bachhe itne Cute 😍 hote unko dekhte hee unki mammy ko bhi dekhne ko dil krta hai....🧐🤓", "Facebook Ka Pyar Aur Washroom ki Chappal kabhi kisi 1 ki nhi hoti......😬🫣 ", "Naraz BiBi se Bahes krna aisa hai, Jaise Dadi ko I_Phone 📱 ke function Samjhana😬🥹", "Mohabbat Karne se Pahle Paise kama lena wrna Apki Mohabbat koi aur khareed le Jayga😐🤓", "Agar logon ke Dilon m Jinda rahna chahte hai na to unse Paise 💸 Udhaar le len😂🤭😬", "Aao Meri Jaan main tumhe Facebook ki Tang Galiyon se utha ke WhatsApp ki Khuli Fizaon me Le Chalu🤗🙃🎉", "Chamcha giri *EK aisa job hai, jisme na Salary milti hai aur naa he Izzat lekin Aksar log Ise Bade shok se karte hai.....😬😹", "Tum Mujhe Apna Bana ke Rakh lo🤗 Sabne mujhe tumhara samjh ke chhor diya😒😪", "Behti huyi Hawa ko mod lun 🙃 Jee Chahta hai tere sare Dant 🦷 tod dun..😒😾", "Uske Ishq Ko uski Shadi pe Dafna Aaya hun 💔😪 Khali Lifafa de kr Biryani Kha Ayaa hun..😜🤣", "Shardiyon main Sabse Mushkil kaam ... Bistar se uth kr washroom tak jana..😂🧐", "Jab bhi koi Ladki dekhu mera Dil dewana bole... Le Le Le Le mera Number Le Le 😒😐", "Shardiyan Aane wali hai, Ab Din chote aur Khandan Bade ho jyenge🤐😂", "Cigarette 🚬 Jalayi thi ke teri Yaad nah Sataye MaGar Kambhat Dhuyen ne Teri Tasweer Bana Daali....🙃🫢", "Pyar krna Gunah nhi 😒 hai... Lekin Gadi ki Pichli seat pr krna ghalt baat hai😬😐", "Maine Tale 🔐 se sikha hai wafa ka hunar tut jata h magar Chavi 🗝 nhi 😒 badlta...😪", "Agar Shatranj main Wajir aur Zindagi m Zameer marr Jaye to Khel Khatam💯🖤🤞", "Apko dekh kar aisa lag rha Apne Duniya ki Sari Gandi filmen dekh rakhi hai🤐😜🤣", "Bachpan ke Din kitne achhe Hote the, Aunty khud bola kr kahti thi jao beta meri beti ke sath khel lo 🤗 ab koi nhi bolta..😔😑", "Plz Apni Apni GF ki Qadar🙏 Kren, Jo 1 Kapde Lene ke Liye puri Dukan ka Satiyanas kar deti hai....😂 Unhone Apko Pasnd kiya hai..😐😬", "Ladkio se Baat nah Bane to Shadi Suda pr line Marte hain,  Hum Ladke hai Janab Haar Kaha Mante hai😏😐😜", "Vo Ishq ki Raahon main Kamaal Karti hai 🙃 I LOVE YOU Likhti Hai 🤗 Aur Send to All karti hai...😬😹", "Peero aur Baba ko Paise de kar Mahboob ko Qaboo main krne Bajaye Direct Paise Mohboob ko den aur Mahboob Qaboo main kr len..🤣😳", "Duniya main aisi koi Shardi nhi bani jo Shadi main jati huye Ladkio ko Jacket Pahna Sake..🤯😹", "Tum par Marne se Achha Hai ...... Main kisi Haadse main mar Jata..🙃💔", "Mujhe Shadi ki koi jaldi nhi 😒 hai.. Lekin Shadi ki Pahli Raat jo Bate hoti hai nah vo Bate kahi nah bhool jaon...😪🤩🤯", "Yar ye jo Hamare Pair ki jo chhoti bali ungli hai🙄 kya ye Table aur Darwaze se Takdane ke liye Bani hai..😔 Kion itna Takdati hai😒🙄", "Email 📧 Jitni bhi Tarkki kar le Lekin Apko sabse pahle Khabar Female hi degi..😁🤭", "Aap Relationship to Kro Breakup to khud hii ho Jayegi..🤭🙂", "Kisi ko Mahboob nah mila aur Kisi ko Mahboob kharidne ke Paise nhi Huye..😹🙉", "Mujhe ek Ladki pansd aane hee wali thi ke usne Sandwich 🥪 Kha kr Plate Chatna suru kar diya..😔😟", "Dil aur Dimag ka bhi Saas aur Bahu wala Rishta Hota hai..😐 Dono ek dusre ki khushi main Kabhi khush nahi rahte... 🙃🙁", "Ek Tarfa Pyar Haar Raha hai 🙁 Khush Wahi Hai Jo Do Jagah Muh Maar Raha Hai...🙃🤞", "Single hone ka Ek Fayeda hai.. Single Logo ka sirf Hath dukhta hai... Dil 💔 nhi Dukhta 😝🫣😂", "Chakar arhy hein apki Ib me aa ke gir jaun>>🥺", "Mout ka farishta ya Mera  rishta....?🙂❤️", "Sab ko Loyal bnda chahiye to hum Dhokebaz kidhar jayen..,,?🥺💔", "Hai Tamna Hame TumhY Chhat sy Girayn🙂", "Suno👀\n\nKya tum mery leye surf kha kar muh sy bulbuly nikal skti ho🤌🙂", "Ghulabii Aankhe Jo terii dekhii Harami Yew Dill h0 Gya,,, 🤓🙂😆", "Mujhe 2 chizen Bahut tang Karti Hai, 🥹 Ek Apki Yaad Jo Aati Bahut Hai 😒 Dusri ye Light jo Jati Bahut hai...😞", "Arz Kiya hai..✍️🏻\n\nTeri Julfon ne har Jagah Hangama Macha Rakha Hai🙃 Kabhi Daal main, Kabhi Sabji main, Kabhi Roti main, Kabza Jama Rakha hai,,😒😓🙁", "Arz kiya hai..✍️🏻\n\n Taawiz Jaise Hote Hain kuch Log, 🤗 Taawiz Jaise hote hain Kuch Log,  Gale 🫂 milte hii Sifa mil jati hai ,,😍🙃", "Arz Kiye Hai..✍️🏻\n\n Choti si Zindagi Lamba sa Rasta...😐 Choti si Zindagi Lamba sa Rasta 😉 Mujhse Shadi kar Lo Apko Rab ka Wasta🥹😞", "Mujhe Kal hee Doctor 😢 ne Kaha hai Apke WhatsApp main Ladki ke number ki Kami hai....😓😕", "Tu Sath Hai mere, mera jahan Aawad hai,, Kahh do apne papa se ke yahi Aapka Damaad hai😮😂", "Rab ka diya hua Sab Kuchh hai🤗 bas ek Kambal meY Laat Marne wali Chahiye🥹😕", "Mujhse Shadi krke dekho Dil se kya Bed 🛌 se nhi Utarne dunga 😗🤗", "BiBi Hamesha sirf ek hEE Ghalti manti Apne Husband se Shadi karne ki🫢😂", "Relationship jo *So Cute* 😍 se suru hoti hai.. uski ending hoti hai *Dur Fatte Muh🤕🫢😅", "Sabko mil rahe hain Sharik-e-Hayat😓 aur hame mil rahe hain Log Vahiyat.😑🥲", "Yon to Kahne ko sab Bhai hote hai.. sath rahne se pata chalta ke inme kitne Kasayi Hote Hain..🙂🥲", "Tehri Baton ka Sidha sa Jawab 🫵🏻 main Badtamiz Meri Aadat Kharab..🙃🤗", "Soya hua Naseeb Jaag jaye Kash Koi Badmash Ladki mujhe le kar Bhag jaye🙃😆🫣", "Zindagi aur Maut ka kuchh pata nahi hai 😐 isliye Raat ko Sari Chat delete krke sona Chahiye 🙄 wrna log kahenge marhoom aise Dikhte to nahi the..🤔😶😹", "Mujhe Maut se Darr Nahi Lagta Kionki main Zindagi se Darr gya hun..🙃💔🥲", "Bura Waqt Batata hai ''' ki Achha Waqt Kiske Sath Ghuzarna Hai,,🙃😇", "Har kisi ko Safayi nah den 😐 bss Screenshot Sambhal kr Rakhen😂😉", "Tum Naraj Naraj se Lagte ho koi Tarkeeb Batao Manane ki..😌 Hum Zindagi Amaanat Rakh denge tum Qimat Batao Muskurane ki....🙃🤗😍", "Arz Kiya Hai.✍️🏻 \n\n Dekh Li Duniya ki Yaari.... Dekh li duniya ki Yaari..🫂 Sab Kamine Nikle Baari Baari....🫵💫🖤", "Pyar main 1 jhut ye bhi hai,. agar meri Shadi kahi aur ho bhi gyi na to tumhari jagah koi Nahi Le Sakta😐,,, Shadi ho gyi jagah ve Le Liya ab kya baki rhaa🤣🤔", "Pahli Mohabbat Hamesha Ghalt Shakhas hoti hai..🙃 Aur Dusri Mohabbat Hamesha Sahi Shakhas Se Ghalt Waqt par ho Jati hai....,🖤🫂", "Main Rojana AC ki hawa khane ATM Jata tha🥵 aur vo Pagli Paise wala samjh kar set ho gyi😆😐", "Roz Sochta hu Aaj degi kal degi 🤔 Mujhe Lagta hai ye Kishmat Sath nhi Degi😁🙃", "Jo jitna Tumhara hai tum bhi uske utne hee raho 🙂 Zayda Dil ki Ghulami main Izzat ki Nilami Ho Jati Hai... 💯🫰🏻", "Apne Bare main na kisi peer se pucho na kisi Farik se pucho 🤗 bass thori der Aankhen Band kro aur apne Zameer se pucho..🤐😐", "Arz kiya hai..✍️🏻\n\n Aye Zindagi Aa baith kahi Chai pite hai, tu bhi thak gyi hogi mujhe Bhagate Bhagate..🙃💔" , "Haye Main Sadke jawa Teri Masoom Shakal pe baby 💋 " , "Bot Nah Bol Oye Janu bol Mujhe " , "Bar Bar Disturb Na KRr JaNu Ke SaTh Busy Hun 🤭🐒" , "Main gariboo se baat nahi karta 😉😝😋🤪" , "Itna Na Pass aa Pyar ho Jayga" , "Bolo Baby Tum Mujhse Pyar Karte Ho Na 🙈💋💋 " , "Are jaan Majaak ke mood me nhi hu main jo kaam hai bol do sharmao nahi" , "Bar Bar Bolke Dimag Kharab Kiya toh. Teri ...... Mummy Se Complaint Karunga" , "Tu Bandh nhi Karega kya?" , "Gali Sunna H kya?😜" , "Teri Maa Ki Bindiya🤭" , "Aree Bandh kar Bandh Kar" , "M hath jod ke Modi Ji Se Gujarish Karta hu" , "Tujhe Kya koi aur Kam nhi ha? Puradin Khata hai Aur Messenger pe Bot Bot Karta h" , " suheb Ko Bol Dunga Me Mujhe Paresan Kiya To" , "Tum Na Single Hi Maroge" , "Tujhe Apna Bejjati Karne Ka Saukh hai?" , "Abhi Bola Toh Bola Dubara Mat Bolna" , "Teri To Ruk Tu Bhagna Mat" , "Bol De koi nahi dakh rha 🙄" , "Haaye Main Mar Jawa Babu Ek Chuma To Do Kafi Din Se Chumi Nahi Di 😝" , "Dur Hat Be  Mujhe Aur Koi Kam Nahi Kya Har Waqat Mujhy Tang Kerte Rhte ho 😂" , "Are Bolo Meri Jaan Kya Hall Hai😚 " , "Ib Aja Yahan Nhi Bol Sakta 🙈😋" , "Mujhe Mat BuLao Naw Main buSy Hu Naa" , "Bot Bolke Bejjti Kar Rahe Ho yall...Main To Tumhare Dil Ki Dhadkan Hu Na Baby...💔🥺" , "Are Tum Wahi ho nah Jisko Main Nahi Janta 🤪" , "Kal Haveli Pe Mil Jara Tu 😈" , "Aagye Salle Kabab Me Haddi 😏" , "Bs Kar U ko Pyar Ho Na Ho Mujhe Ho Jayga Na" , "FarMao 😒" , "BulaTi Hai MaGar Jaane Ka Nhi 😜" , "Main To Andha Hun 😎" , "Phle NaHa kar Aa 😂" , "Aaaa Thooo 😂😂😂" , "Main yahin hoon kya hua sweetheart ," , "chomu Tujhe Aur Koi Kaam Nhi H? Har Waqt Bot Bot Karta H" , "Chup Reh, Nhi Toh Bahar Ake tera Dath Tor Dunga" , "WaYa KaRana Mere NaL 🙊" , "MaiNy Uh Sy Bt Nhi kRrni" , "MeKo Kxh DiKhai Nhi Dy Rha 🌚" , "Bot Na BoL 😢 JaNu B0ol 😘 " , "Bar Bar Disturb Na KRr JaNu Ke SaTh Busy Hun  😋" , "Main Gareebon Sy Bt Nhi kRta 😉😝😋🤪" , "Itna Na Pass aa Pyar h0o JayGa" , "MeKo Tang Na kRo Main Kiss 💋 KRr DunGa 😘 " , "Ary yrr MaJak Ke M0oD Me Nhi Hun 😒" , "HaYe JaNu Aow Idher 1 PaPpi Idher d0o 1 PaPpi Idher 😘" , "Dur HaT Terek0o 0or K0oi Kam Nhi Jb DeKho Bot Bot ShaDi KerLe Mujhsy 😉😋🤣" , "TeRi K0oi Ghr Me Nhi SunTa T0o Main Q SuNo 🤔😂 " , "IB Aja Yahan Nhi B0ol Salta 🙈😋" , "Mujhe Mat BuLao Naw Main buSy h0o Naw" , "Kyun JaNu MaNu Another Hai 🤣" , "Are TuMari T0o Sb he baZzati kRrty Me Be kRrDun 🤏😜" , "KaL HaVeLi Prr Aa ZaRa T0o 😈" , "Aagye SaJJy KhaBBy Sy 😏" , "Bx KRr Uh k0o Pyar H0o Na H0o Mujhe H0o JayGa" , "FarMao 😒" , "BulaTi Hai MaGar JaNy Ka Nhi 😜" , "Main T0o AnDha Hun 😎" , "Phle NaHa kRr Aa 😂" , "Papi ChuLo 🌚" , "TeRek0o DiKh Nhi Rha Main buSy Hun 😒" , "TeRa T0o GaMe BaJana PreGa" , "Ta Huwa 🥺"  , "TuM Phr AaGye 🙄 Kisi 0or Ny Muu Nhi LaGaYa Kya🤣🤣🤣" , "MeKo JaNu Chai Hai Tum Single H0o?" , "Aaaa Thooo 😂😂😂" , "Main S0o Rha Hun " , "Ase He HansTy Rha kRo 😍" , "•••••••••••••••••••••••••••••🦢𒀱卄ɅƔƏ MɅ🅘ɳ ʍɅᏒ••••🌿💞 JɅωɅ ┼ƏᏒ🅘 ʍɅ🅢𝖚ʍ 🅢ɅҠɅɭ 𝐩Ə ɮɅɮƔ 💋 " , "Bot Na Bol Oye Janu bol Mujhe " , "Bar Bar Disturb Na Karen Rahul JaNu Ke SaTh Busy Hun 🤭🐒" , "Main flirty logo Sy Bt Nhi karti 😉😝😋🤪" , "Itna Pass mat aa Pyaar h0 JayGa" , "Bolo Babu Tum Mojy Pyar Karte Ho Na 🙈💋💋 " , "Are jaan Majaak ke mood me nahi hun main jo kaam hai bol do sharmao nahi" , "han ji bolo kya seva karne aapki 😶🤍" , "Tu Bandh nhi Karega kya?" , "kya Sunna Hai apko mere se flirty kahike🤐🤣 " , "Haa ji boliye kya kam he hamse 🙈" , "Aree band kar band Kar" , "Mein hath jod ke Modi Ji Se Gujarish Karta hu mojy na bolaye" , "Tujhe Kya koi aur Kam nhi ha? Puradin sota he Aur Messenger pe Bot Bot Karta h" , " mera owner Ake tera bf/gf Ko Chura le Jayega" , "Bot bot hi karta rahna tu bas" , "Tujhe Apna Bejjati Karne Ka Saukh hai?🥹" , "Abhi Bola Toh Bola Dubara Mat Bolna🙄" , "Teri to Watt lagani padegi " , "Bol De koi nahi dakh rha 🙄" , "Haaye Main Mar Jawa Babu Ek Chuma To Do Kafi Din Se Chumi Nahi Di 😝" , "Dur Hat Be  Mujhe Aur Koi Kam Nahi Kya Har Waqat Mujhy Tang Kerte Rhte ho 😂" , "Are Bolo Meri Jaan Kya Hall Hai😚 " , "IB Aja Yahan Nhi B0ol Sakti 🙈😋" , "Mujhe Mat BuLao Na Main buSy h0 Now" , "Bot Bolke Bejjti Kar Rahe ho yall...Main To Tumhare Dil Ki Dhadkan Hu Baby...💔🥺" , "Are Tum Wahi ho nah Jisko Main Nahi Janti 🤪" , "Kal Haveli Pe Mil Jra Tu 😈" , "Aagye SaJJy KhaBBy Sy 😏" , "Bx KRr Uh k0o Pyar H0o Na H0o Mujhe H0o JayGa" , "bolo 😒" , "BulaTi Hai MaGar JaNy Ka Nhi 😜" , "Main T0o AnDha Hun 😎kya likha tumne mene nahi dikha🤣" ,  "Pahale NaHa kar Aa 😂" , "Aaaa Thooo 😂😂😂" , "Main yahi hoon kya hua sweetheart🥂🙈💞 ," , "AA Dk Tujhe Aur Koi Kaam Nhi Hai? Har Waqt Bot Bot Karta H" , "Chup Reh, Nahi Toh Bahar Ake tera Dath Tor Dunga🤣✊" , "yes my love 💘" , "kya hua baby ko 😘😘" , "mujhe sharam ati hai aise aap bolte hai tho 🤭😝" , "aree aap wahi ho na jo mujhe line marte the.......🤣 ya bali line" , "jii kahiye jii 🙄 kya chahiye" , "hayee main mar jye teri masoom shaqal py 😂 tuzy Chapple se kutne ka mn ho raha hai🤣👠" , "Bot nah bol oye 😭 Janu bol mjhy aur janu sy piyar sy bat kerty hai😑" , "ruk tu chappal kaha he mari🩴" , "shakal Sy masoom lgty ho 😂 but bohot flirty ho" , "kash tum single hote to maza hi koch aur tha pagal insaan 😂" , "Ha ha ab meri yaad ab ai nah phly to babu shona kerna gy thy 😾 ab ham ap sy naraz hai jao ap bye ☹️" , "haiy babu ne boldiya hai shaid purpose kerna hai mujhe bolo bolo babu 😘" , "Aree pagal roti banana ke le aty main Pani ko istamal kerte ho 😂" , "Ary joke nah mar jo bhi kam hai bol do sharma nahi , bol de koi nahi dakh rha 😂" , "Hayee Mar Jawa Babu Ak Chuma To Doo Kafi Din Sy Chumi Nahi Mili Kahan Thy Babu inbox Ah Jao 😚🙈♥️" , "Dur Dur karib na a  tujhe Aur Koi Kam Nahi Kiya Har Waqat Mjhy Tang Karte Rahte Ho 😂" , "ary ary bolo meri jaan kia haal hai ;) ;* " , "Tum aunty ho yehh uncle 🤔 I think tum Jin ho yehh Chudail🤣✅" , "ary tum ider 🤔 khair hai ider kia ker rhy ho 😂" , "ary babu babu kal hawali py kon bola rha tha 😂" , "Me Aap ki mummy ji ko btaou ga Aap Facebook use karty ho 😂" , "ary tum Wohi ho nah jis ko ma nahi janta 🤣✅" , "haveli per  kal mil  Zara bataunga 🌚😂Ha but उल्टी-सीधी harkat karne ke liye nahi" , "itne pyar se Na bulao pyar Ho jaega 😶💗 wtf Maine apni sacchai Bata Di yah Maine kyon Kiya 😭🔪....Fuuu..🚬" , "aap aise mat bulo hame sharam aati hai 🙈♥️" , "kyun Bulaya hamen..😾🔪 " , "kyun Bulaya hamen..😾🔪 "];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "chutiya bot") || (event.body.toLowerCase() == "chutiye bot") || (event.body.toLowerCase() == "chumtiya bot") || (event.body.toLowerCase() == "chumtiye bot")) {
     return api.sendMessage("Hmm... Tu Chutiya PhLe Ungli Kyun Ki Chomu 😾", threadID);
   };

   if ((event.body.toLowerCase() == "🤮") || (event.body.toLowerCase() == "🤮")) {
     return api.sendMessage("Konsa mahina chal raha hai 😝", threadID);
   };

    if ((event.body.toLowerCase() == "🤗") || (event.body.toLowerCase() == "🤗")) {
     return api.sendMessage("Hug me baby ☺️", threadID);
   };

   if ((event.body.toLowerCase() == "sim") || (event.body.toLowerCase() == "simsimi")) {
     return api.sendMessage("Prefix Kon Lagayega? Pehle Prefix Lagao Fir Likho Sim", threadID);
   };
  
   if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hello") ||(event.body.toLowerCase() == "hlw") || (event.body.toLowerCase() == "helo")) {
     return api.sendMessage("Hello, Hi, Bye bye. Ye sab ke alawa kuch bolna nhi ata Kya tujhe", threadID);
   };

   if ((event.body.toLowerCase() == "bc") || (event.body.toLowerCase() == "bc")) {
     return api.sendMessage("Ye Bc Kya HoTa Hai 🤔 ", threadID);
   };

   if ((event.body.toLowerCase() == "lol") || (event.body.toLowerCase() == "lol bot")) {
     return api.sendMessage("Khud ko Kya LeGend Samjhte Ho 😂", threadID);
   };

   if ((event.body.toLowerCase() == "morning") || (event.body.toLowerCase() == "good morning")) {
     return api.sendMessage("Ꮆɵɵɗ Ɱ❍ɽƞɪɪƞɠ Ɛⱱɛɽɣ❍ƞɛ🌅, Ƭɽɣ ꌗɵɱɛ Cɵffɛɛ ❍ɽ Ƭɛɑ Ƭ❍ Ꮗɑҡɛ Uƥ☕✨💫", threadID);
   };

   if ((event.body.toLowerCase() == "anyone") || (event.body.toLowerCase() == "any")) {
     return api.sendMessage("Main Hun Naw Jaaneman ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "suheb") || (event.body.toLowerCase() == "priyansh rajput") || (event.body.toLowerCase() == "priyansh") || (event.body.toLowerCase() == "prince")) {
     return api.sendMessage( "Busy HoGa Work Me Main t0o Hun Naw 😘",threadID);

       
   };

   if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "Owner")) {
     return api.sendMessage("💝🥀𝐎𝐖𝐍𝐄𝐑:- ☞𝕤𝕦𝕙𝕖𝕓 𝕜𝕙𝕒𝕟☜ 💫\n🖤𝚈𝚘𝚞 𝙲𝚊𝚗 𝙲𝚊𝚕𝚕 𝙷𝚒𝚖 𝚜𝚞𝚑𝚎𝚋 𝚔🖤\n😳𝐇𝐢𝐬 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝🤓:- ☞ https://www.facebook.com/suheb.khanjii\n👋For Any Kind Of Help Contact On Telegram  Username 👉 @𝚜𝚞𝚑𝚎𝚋 𝚔𝚑𝚊𝚗😇", threadID);
   };

   if ((event.body.toLowerCase() == "tumhe banaya kon hai") || (event.body.toLowerCase() == "tumko banaya kisne")) {
     return api.sendMessage("𝚜𝚞𝚑𝚎𝚋  ❤️ My Creator. He loves me & Edit Me Daily. Ye Bot Sirf Owner k Liye h. Mujhe Aap logo ko Hasane k liye banya gya h Toh Muh Ladkaye Mat Rakkha Karo. Har Waqt Haste Raho.", threadID);
   };

  if ((event.body.toLowerCase() == "bot admin") || (event.body.toLowerCase() == "bot ka admin kon ha")) {
     return api.sendMessage("He is 𝚂𝚞𝚑𝚎𝚋. He Gives his name Priyansh everywhare", threadID);
   };

   if ((event.body.toLowerCase() == "shadi karoge") || (event.body.toLowerCase() == "mujhse shadi karoge?")) {
     return api.sendMessage("hanji, karunga lekin baccha. apke pet m hoga. manjur h?", threadID);
   };

   if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "stop") || (event.body.toLowerCase() == "chup ho ja") || (event.body.toLowerCase() == "chup kar")) {
     return api.sendMessage("Nhi rahunga. 😼 Mujhe Bolna H. Tumhe Koi Haq nhi Mujhe Chup Karane ka. Mera Zuban. M Bolunga", threadID);
   };

   if ((event.body.toLowerCase() == "bts") || (event.body.toLowerCase() == "btc")) {
     return api.sendMessage("Tu H Btc. Bhos DK", threadID);
   };

   if ((event.body.toLowerCase() == "malik se bakchodi") || (event.body.toLowerCase() == "malik se backchodi") || (event.body.toLowerCase() == "malkin se bakchodi") || (event.body.toLowerCase() == "malkin se backchodi")) {
     return api.sendMessage("srry malik maaf kr do ab nhi kruga 🥺🙏", threadID);
   };

   if ((event.body.toLowerCase() == "gand") || (event.body.toLowerCase() == "gandu") || (event.body.toLowerCase() == "lund") || (event.body.toLowerCase() == "land")) {
     return api.sendMessage("Gand m jyada khujli h toh banana 🍌 under le le. :))))", threadID);
   };

   if ((event.body.toLowerCase() == "chumma de") || (event.body.toLowerCase() == "kiss me")) {
     return api.sendMessage("️Kis khushi me, Me sirf Apni gf ko kiss karta hu", threadID);
   };

   if ((event.body.toLowerCase() == "nice") || (event.body.toLowerCase() == "thank you") || (event.body.toLowerCase() == "thank you bot") || (event.body.toLowerCase() == "thank you maliha")) {
     return api.sendMessage("️M hu hi itni Accha. sab log Tarref karte hai meri.", threadID);
   };

   if ((event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "😤") || (event.body.toLowerCase() == "😠") || (event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "😾")) {
     return api.sendMessage("️🥺 M toh Sirf Mazak Kr Rha Tha🥺. Gussa Mat Karo. Ek Chummi Lo aur Shant Raho 😘", threadID);
   };

   if ((event.body.toLowerCase() == "😞") || (event.body.toLowerCase() == "😔") || (event.body.toLowerCase() == "😣") || (event.body.toLowerCase() == "☹️") || (event.body.toLowerCase() == "😟") || (event.body.toLowerCase() == "😩") || (event.body.toLowerCase() == "😖") || (event.body.toLowerCase() == "😫") || (event.body.toLowerCase() == "😦") || (event.body.toLowerCase() == "😧") || (event.body.toLowerCase() == "😥") || (event.body.toLowerCase() == "😓") || (event.body.toLowerCase() == "😰")) {
     return api.sendMessage("️Kya huva, Sad kyu ho, Mujhe batao", threadID);
   };


   if ((event.body.toLowerCase() == "hm") || (event.body.toLowerCase() == "hmm")) {
     return api.sendMessage("️Hmm Hmm Na Karke Sidha Sidha bolo. Hey Marry Me🙈", threadID);
   };

   if ((event.body.toLowerCase() == "😢") || (event.body.toLowerCase() == "😭") || (event.body.toLowerCase() == "🥺") || (event.body.toLowerCase() == "🥹")) {
     return api.sendMessage("️Kya huva, Ro kyu rahe ho, Me huna to phir kyu rona. Ruko me abhi chocolate 🍫 deta hu likho ☞Chocolate☜", threadID);
   };

   if ((event.body.toLowerCase() == "😷") || (event.body.toLowerCase() == "🤕") || (event.body.toLowerCase() == "🤧") || (event.body.toLowerCase() == "🤒")) {
     return api.sendMessage("️Kya huva, Tabiyat kharab hai kya, Mujhe batao me abhi medicine 💊💉 le aata hu😇", threadID);
   };

   if ((event.body.toLowerCase() == "name") || (event.body.toLowerCase() == "naam") || (event.body.toLowerCase() == "nam")) {
     return api.sendMessage("️Name m kya rakkha h. tum kam pe dhyan do.", threadID);
   };

   if ((event.body.toLowerCase() == "bot k bacche") || (event.body.toLowerCase() == "bot ke bacche")) {
     return api.sendMessage("️meri baccha toh Tumhare Pet Me Hai.", threadID);
   };

   if ((event.body.toLowerCase() == "pic do") || (event.body.toLowerCase() == "photo do")) {
     return api.sendMessage("️Me toh Andha Hu Dekh nhi sakta", threadID);
   };

   if ((event.body.toLowerCase() == "jai shree ram") || (event.body.toLowerCase() == "ram") || (event.body.toLowerCase() == "ram ram")) {
    return api.sendMessage("️𝗝𝗮𝗶 𝗦𝗵𝗿𝗲𝗲 𝗥𝗮𝗺 😇", threadID);
   };

   if ((event.body.toLowerCase() == "bot banake do") || (event.body.toLowerCase() == "mujhe bhi chaiye")) {
     return api.sendMessage("️Khud hi karlona. tumhe kya kuch nhi ata h?", threadID);
   };

   if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == "🙃")) {
     return api.sendMessage("️Man Toh Accha H Nhi. Kam  Se Kam Shakal Toh Accha Karlo Meri Jaan", threadID);
   };

  if ((event.body.toLowerCase() == "🤥") || (event.body.toLowerCase() == "🤥")) {
     return api.sendMessage("️Bhai teri to naak hi etni lambi hai uski jarurat hi nahi padti hogi tujhe to🤭🤭🤭🤭", threadID);
   };

  if ((event.body.toLowerCase() == "🤔") || (event.body.toLowerCase() == "🤨")) {
     return api.sendMessage("️Kya soch rahe ho etna 🤨", threadID);
   };

   if ((event.body.toLowerCase() == "🥴") || (event.body.toLowerCase() == "🥴")) {
     return api.sendMessage("️Oye nashedi 😂😂😂", threadID);
   };

  if ((event.body.toLowerCase() == "😶") || (event.body.toLowerCase() == "😶")) {
     return api.sendMessage("️Are are lips kaha gaye gf/bf ke sath kiss karte time usi ne to nahi kha liye 😜😜", threadID);
   };

  if ((event.body.toLowerCase() == "😉") || (event.body.toLowerCase() == "😉")) {
     return api.sendMessage("️Aankh kyu maar rahe ho, Me bahut shareef hu🥺", threadID);
   };

   if ((event.body.toLowerCase() == "😱") || (event.body.toLowerCase() == "😨")) {
     return api.sendMessage("️Kya huva bhoot dekh liya kya 👻👻", threadID);
   };
  
  if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "🙄")) {
     return api.sendMessage("️️𝐓𝐢𝐫𝐜𝐡𝐢 𝐧𝐚𝐳𝐚𝐫𝐢𝐲𝐚 𝐦𝐨𝐫𝐢 𝐡𝐚𝐚𝐲𝐞 𝐡𝐚𝐚𝐲𝐞 𝐡𝐚𝐚𝐲𝐞 🙈", threadID);
   };

   if ((event.body.toLowerCase() == "nobody loves me") || (event.body.toLowerCase() == "nobody love me") || (event.body.toLowerCase() == "koi pyar nhi karta")) {
     return api.sendMessage("️Me huna baby mere pass aao 🥰🤗. Me karunga na aapko payar 🙈 (londo tum dur hi rahna saalo 😑)", threadID);
   };

   if ((event.body.toLowerCase() == "🤦🏻‍♂") || (event.body.toLowerCase() == "🤦🏻‍♀")) {
     return api.sendMessage("Are apne muh pe kyu maar rahe ho, Mujhe batao kya huva?😬", threadID);
   };
   
   if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "😸") || (event.body.toLowerCase() == "😹")) {
     return api.sendMessage("Enni hasi kyu aa rahi hai🤣, Es hasi ke piche ka raaz kya hai batao", threadID);
   };

   if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😻") || (event.body.toLowerCase() == "❤️")) {
     return api.sendMessage("🦋🌿Aƞƙɧ❍ Ɱɛ Ƥɣɑɽ͢  Ɗɪɭɱɛ Ƙɧuɱɑɽ🌬️🌍 ••Ƥɣɑɽ Ƭ❍ɧ Ƞɧɪ Ƙɒɽ ɭɪɣɑ Ɱuȷɧʂɛ>³••🕊️🍎😍", threadID);
   };

   if ((event.body.toLowerCase() == "kese ho") || (event.body.toLowerCase() == "kaise ho") || (event.body.toLowerCase() == "kese ho ji") || (event.body.toLowerCase() == "how are you") || (event.body.toLowerCase() == "how are you?")) {
     return api.sendMessage("M Tabhi Accha hota hu, Jab Apko Hasta Huye Dekhta hu☺️", threadID);
   };

   if ((event.body.toLowerCase() == "is the bot sad") || (event.body.toLowerCase() == "is the bot sad")) {
     return api.sendMessage("Why can't I be sad because of everyone <3 love you <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love you") || (event.body.toLowerCase() == "does the bot love you")) {
     return api.sendMessage("Yes I love you and everyone so much", threadID);
   };

   if ((event.body.toLowerCase() == "bot goes to sleep") || (event.body.toLowerCase() == "bot goes to sleep")) {
     return api.sendMessage("I'm a bot, you're the one who should go to sleep <3", threadID);
   };

  if ((event.body.toLowerCase() == "🤖") || (event.body.toLowerCase() == "🤖")) {
     return api.sendMessage("Saalo chidda rahe ho mujhe", threadID);
   };

   if ((event.body.toLowerCase() == "has the bot eaten yet") || (event.body.toLowerCase() == "bot an comrade")) {
     return api.sendMessage("I'm full when I see you eat <3", threadID);
   };

  if ((event.body.toLowerCase() == "lob you") || (event.body.toLowerCase() == "i lob you")) {
     return api.sendMessage("Lob You too", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love me") || (event.body.toLowerCase() == "does the bot love me")) {
     return api.sendMessage("Yes <3", threadID);
   };

   if ((event.body.toLowerCase() == "&fuck") || (event.body.toLowerCase() == "&Fuck")) {
     return api.sendMessage("🏔️🏝️Priyansh Ƞɛ ꌗƥɛçɪɑɭɭɣ Ƭuɱ 🌊🪺Jɑɪʂɛ Ƭɧɑɽƙɪɣɵ Ƙɛ Ɬɪɣɛ•• 🏞️🌬️Ɣɑɧ çɵɱɱɑƞɗ Ɦɑʈɑ Ɗɪɣɑ Ɦɑɪ↗↘ Sɵɽɽɣ Ɠɣuʂ••😹🫶", threadID);
   };

  if ((event.body.toLowerCase() == "suheb hu") || (event.body.toLowerCase() == "ami diya") || (event.body.toLowerCase() == "main amrita") || (event.body.toLowerCase() == "main priyansh") || (event.body.toLowerCase() == "main diya")) {
     return api.sendMessage("🕊️🍎...Aɭɛ Ɱɛɹɛ Ɓɑɓɣ Ƙɛʂɛ Ɦɵ ɑɑp😚🍒", threadID);
   };
   mess = "{name}"
  
  if (event.body.indexOf("Bot") == 0 || (event.body.indexOf("bot") == 0)) {
    var msg = {
      body: `😍🌹🍒${name},😍🌹🍒${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
