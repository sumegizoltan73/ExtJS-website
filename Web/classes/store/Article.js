Ext.define('Web.store.Article', {
    extend: 'Ext.data.Store',
	model: 'Web.model.Article',
	id: 'ArticleStore',
    //autoLoad: true,

	data: {
		"success": true,
		"articles": [
			{
				"lang": "hu-HU", 
				"view": "home", 
				"target": "content", 
				"title": "Tisztelt Érdeklődő!", 
				"cls": "web-content-data",
				"html": "A Bács-Kiskun Megyei Ügyvédi Kamara (6000 Kecskemét, Bercsényi u. 15. telefon/fax: 76/484-909 www.bacskiskunmegyeiugyvedikamara.hu) tagja vagyok. Nyilvántartási számom 226.<br />Adószámom: 50231928-1-23<br />Bank: K&H 10402513-50526671-52871001<br /><br />Hatósági  közvetítő és igénybe vehető jogi segítő / pártfogó ügyvéd is vagyok."
			 }, {
				"lang": "hu-HU", 
				"view": "home", 
				"target": "content", 
				"title": "Bemutatkozás", 
				"cls": "web-content-info",
				"html": "Baján születtem 1956-ban. A Szegedi Tudományegyetem jogelődjén diplomáztam 1980-ban (cum laude) a szakvizsgát 1989-ben tettem. Szakmai pályámon egy évtizedet dolgoztam olyan mezőgazdasági vállalatnál, ahol a termelés (élelmiszeripar - tartósító-, bor-, üdítő- és szeszipar) mezőgazdaság, kertészet, nehézipar, építőipar, fuvarozás  valamint az innováció szerződési, kereskedelmi, peres, controlling, és vállalatszervezési jogi ügyeiben vehettem részt. További egy évtizedet a jogi képviseleti területen működtem, két szakágon a jogtanácsosi és az ügyvédi területen. Újabb egy évtizedet töltöttem települési önkormányzatoknál (községi szinttől megyei jogú városig) jegyzői munkával, illetve kb. fél évet Budapest egyik kerületében hatósági osztályvezetőként. Tapasztalataim összegzéseként ismét a jogi képviseleti munkaterületen vagyok. Miután az ország számos térségében dolgoztam sokféle munka és emberi kultúrát ismerhettem meg. Örülök, hogy barátja lehetek művészeknek (festőknek, költőknek, íróknak) de elfogadnak a kisebbségek, az etnikum jelesei is, és sok kétkezi munkás is."
			 }, {
				"lang": "hu-HU", 
				"view": "home", 
				"target": "content-footer", 
				"title": "Irodai rövid hírek", 
				"cls": "web-content-info web-line2",
				"name": "multicontent-officenews"
			 }, {
				"lang": "hu-HU", 
				"view": "home", 
				"target": "content-footer", 
				"title": "Jogterületeim", 
				"cls": "web-content-info",
				"html": "Közigazgatási jogterület (pl.: birtokvédelem, építéshatósági eljárás, hagyatéki eljárás, szabálysértés, kereskedelmi-és iparigazgatás, közterület-használat).<br />Ingatlanfejlesztés, ingatlanforgalom.<br />Szerződések, végintézkedések.<br />Polgári, munkajogi, közszolgálati ügyek, perek, peren kívüli eljárások. Környezetvédelmi jog.<br />Társasági jog. Pénzügyi jogi, kereskedelmi jogi ügyek.<br />Szellemi alkotások ügyei.<br />Adójog. Adatvédelmi jog.<br />A fentiekhez kapcsolódó büntetőjogi ügyek.<br />Mediáció, azaz közvetítői eljárás.<br />Üzletviteli tanácsadás, marketing és reklámjog.<br />&nbsp;És sok minden más..."
			 }, {
				"lang": "hu-HU", 
				"view": "home", 
				"target": "content-footer", 
				"title": "Szerintem", 
				"cls": "web-content-info",
				"html": "Ha... rosszat hallasz valakiről, óvakodva hidd el. A hírnek s pletykának gyakran semmi alapja nincs s a legtöbb esetben nagyítva s eltorzítva terjed tovább. Az emberiség általában és az egyes emberek is nem ritkán olyan jók, minők lehetnének s lenniök kellene, de ritkán oly rosszak, minőknek őket a gonosz akaratú rágalom festi. És ha kénytelen vagy is elhinni a hallott tényt, mert valóságán lehetetlen kételkedned, ne ítélj azonnal, ne kárhoztass kíméletlenül. A hír, még ha való is, csak magát a tényt mondja el, s hallgat azon előzményekről, melyeknek talán kényszerítő hatalma a tényt előidézte s melyek a tettet magát gyakran más alakban tüntetik elő. (Deák Ferenctől átvéve.)"
			 }, {
				"lang": "hu-HU", 
				"view": "home", 
				"target": "content-footer", 
				"title": "Hírek", 
				"cls": "web-content-info",
				"name": "multicontent-news"
			 }, {
				"lang": "hu-HU", 
				"view": "all", 
				"target": "footer", 
				"title": "Nyilatkozat:", 
				"cls": "web-content-info",
				"html": "Ezt a honlapot <b>dr. Nagy Mátyás egyéni ügyvéd</b>, a Bács-Kiskun Megyei Ügyvédi Kamarában bejegyzett ügyvéd tartja fenn az ügyvédekre vonatkozó jogszabályok és belső szabályzatok szerint, melyek az ügyféljogokra vonatkozó tájékoztatással együtt a <a href=\"http://www.magyarugyvedikamara.hu\" target=\"_blank\">www.magyarugyvedikamara.hu</a> honlapon találhatók. Ez a honlap nem folytat tudományos kutatást, közvélemény-kutatást, piackutatást, közvetlen üzletszerzést. A web-helyen lévő információk nem tekinthetők tanácsként vagy ajánlásként, és a web-hely nem szolgál semmilyen elhatározás vagy intézkedés alapjául. A Web-hely nem jelentet meg személyes véleményt. A web-hely nem folytat adatkezelést, adatot nem továbbít, és nem hoz nyilvánosságra, az érintett hozzájárulása nélkül. Hozzájárulás: az érintett akaratának önkéntes és határozott kinyilvánítása, amely megfelelő tájékoztatáson alapul, és amellyel félreérthetetlen beleegyezését adja a rá vonatkozó személyes adatok – teljes körű vagy egyes műveletekre kiterjedő – kezeléséhez. (Az információs önrendelkezési jogról és információ-szabadságról szóló 2011. évi CXII. tv.) A web-hely partnereinek egyedi elérésére szolgáló adatát a web-hellyel kapcsolatba lépő által megállapított célból vesszük igénybe. A web-hely által jelzett szakmai tevékenység alapvető szabályait az ügyvédekről szóló, többször módosított 1998.évi XI. tv. tartalmazza."
			 }, {
				"lang": "hu-HU", 
				"view": "all", 
				"target": "footer", 
				"title": "Hasznos&nbsp;linkek:", 
				"name": "multicontent",
				"cls": "web-content-info"
			 }, {
				"lang": "hu-HU", 
				"view": "joggyakorlat",
				"target": "content-head", 
				"title": "Joggyakorlat", 
				"cls": "web-content-info",
				"html": "A személyes találkozóig itt alkalma van a bírói gyakorlat egyes döntéseivel megismerkedni. (A tartalmat időnként cserélem, ha érdeklődésének megfelelt ez az oldal, látogasson ide máskor is.)"
			 }, {
				"lang": "hu-HU", 
				"view": "joggyakorlat", 
				"target": "content-footer", 
				"title": "Beszélgessünk", 
				"cls": "web-content-info",
				"html": "Az egyéni ügyvédi iroda előzmény nélkül alakult. Aki elolvassa a bemutatkozásom, meglepődhet, miért ez a szakmai változatosság, az újra kezdés, és újrakezdés? Első munkahelyem a demokratikus fordulat (rendszerváltás) során megszünt. Illetve abban a  záró folyamatban már kerestem a személyes szakmai megpróbáltatásom útjait, s előbb jogtanácsosi irodát, majd ügyvédi irodát később egyéni ügyvédi irodát, végül ismét jogtanácsosi irodát szerveztem/szerveztünk. A múlt század végén a Kamara úgy látta jónak, ha más területen akklimatizálódok. Ekkor váltottam a köz szolgálatára. Érdemes volt. A közösség új dimenziókat nyitott a felelősség-vállalásban, a sorsok kezelésében, a tartalom gazdagságában, a joggyakorlati élmények tárházában. Szeretném, ha hozzá tudnék járulni az itt olvasott jogi információkkal a jogi gondolkozáshoz.<br />Várom az olvasók észrevételeit, leveleit, kérdéseit!"
			 }, {
				"lang": "hu-HU", 
				"view": "joggyakorlat", 
				"target": "content-footer", 
				"title": "Közérdekű kérdések:", 
				"cls": "web-content-info",
				"name": "jog-faq-questions"
			 }, {
				"lang": "hu-HU", 
				"view": "joggyakorlat", 
				"target": "content-footer", 
				"title": "Válaszok:", 
				"cls": "web-content-info",
				"name": "jog-faq-answers"
			 }, {
				"lang": "hu-HU", 
				"view": "kiszamithatosag", 
				"target": "content", 
				"title": "Kiszámíthatóság", 
				"cls": "web-content-info info-gray",
				"html": "Az ügyvédi iroda áttekinthető, világos, követhető díjakat és költségelszámolást alkalmaz. A jogi segítői (illetve a pártfogó ügyvédi díj jogszabály által meghatározott és az állam fizeti a legtöbb esetben). Fontos ellenben a hatósági közvetítői tevékenységi kör (a költségviselőt és mértékét a kijelölő hatóság tudja megbecsülni). A törzsügyfelek számára 50%-ig terjedő kedvezmény lehetséges. A tényállás felvétele, azaz a beszélgetés az ügy megismeréséről, az ügyfél-ügyvéd kommunikáció, és még sok minden nem számít a díjazásba, azaz ingyenes."
			 }, {
				"lang": "hu-HU", 
				"view": "kiszamithatosag", 
				"target": "content", 
				"title": "", 
				"cls": "web-content-price",
				"clsContainer": "x-container-price",
				"name": "price"
			 }, {
				"lang": "hu-HU", 
				"view": "kiszamithatosag", 
				"target": "content", 
				"title": "", 
				"cls": "web-content-category",
				"clsContainer": "x-container-category",
				"name": "category"
			 }, {
				"lang": "hu-HU", 
				"view": "kiszamithatosag", 
				"target": "content", 
				"title": "", 
				"cls": "web-content-info",
				"html": "Mindegyik ügyfél iratához önálló időráfordítás-kimutatás és díjjegyzék csatlakozik."
			 }, {
				"lang": "hu-HU", 
				"view": "kiszamithatosag", 
				"target": "content-footer", 
				"title": "", 
				"cls": "web-content-info",
				"html": "<img src=\"img/egyuttmukodes.jpg\" style=\"border-radius: 3px; box-shadow: 11px 1px 33px #000000;\" alt=\"együttműködés\"/>"
			 }, {
				"lang": "hu-HU", 
				"view": "kiszamithatosag", 
				"target": "content-footer", 
				"title": "\"Nép ügyvédje\"-Jogi segítő", 
				"cls": "web-content-info",
				"html": "A jogi segítség a 2003. évi LXXX.tv. szerinti jogi szolgáltatásokat jelenti, aminek ügyvédi költségét az állam fizeti az ügyfél helyett, vagy megelőlegezi az ügyfél javára.<br /><h3>dr. Nagy Mátyás jogi segítő.</h3><a href=\"http://www.kimisz.gov.hu\" target:\"_blank\" style=\"font-weight:normal;\">www.kimisz.gov.hu</a><br />Kérjen tájékoztatót  elérhetőségeim egyikén."
			 }, {
				"lang": "hu-HU", 
				"view": "kiszamithatosag", 
				"target": "content-footer", 
				"title": "Prezentációs tanácsadás", 
				"cls": "web-content-info",
				"html": "Az iroda előadás keretében kivetítéses szemléltetéssel kisebb-nagyobb csoportok számára tart jogi elméleti és gyakorlati ismeretterjesztést. Az időszerű rendezvényekről a honlapon, de kérésre e-meilben is tájékoztatjuk az érdeklődőket.<br /><br />Soron következő rendezvényünk:"
			 }, {
				"lang": "hu-HU", 
				"view": "kiszamithatosag", 
				"target": "content-footer", 
				"title": "Együttműködés", 
				"cls": "web-content-info",
				"html": "A jogi képviselet, a tanácsadás, vagy egyéb ügyvédi munka személyre szóló feladat. Készek vagyunk azonban együttműködni mindazon szakemberekkel, akik előmozdítják a sikert. ne feledje a megbízását előkészíteni az együttműködésre kiterjedő javaslataival."
			 }, {
				"lang": "hu-HU", 
				"view": "kiszamithatosag", 
				"target": "content-footer", 
				"title": "A hatósági közvetítés (mediáció)", 
				"cls": "web-content-info",
				"html": "A hatóság közvetítőt vehet igénybe a hatóság és az ügyfél, valamint az ellenérdekű felek közötti vita rendezésére. (2004. évi CXL.tv. 41.§) Ha szeretné a vitarendezés, a megoldáskeresés  célhoz vezető módját, igényelje hatósági közvetítő kirendelését a közigazgatási szervtől."
			 }, {
				"lang": "hu-HU", 
				"view": "kiszamithatosag", 
				"target": "content-footer", 
				"title": "On-line ügyvéd", 
				"cls": "web-content-info",
				"html": "A hagyományos ügyvéd-ügyfél kapcsolaton, az iroda-látogatáson kívül az Internet lehetőséget teremt az on-line jogi munkára. Az iroda készen áll a megfelelésre, jelezze szándékát!"
			 }, {
				"lang": "hu-HU", 
				"view": "all", 
				"target": "footer", 
				"html": "<hr />"
			 }, {
				"lang": "hu-HU", 
				"view": "all", 
				"target": "footer", 
				"html": "&copy;&nbsp;<a href=\"mailto:drnagymatyas@2012\">dr. Nagy Mátyás</a>, 2012-2013"
			 }, {
				"lang": "hu-HU", 
				"view": "kapcsolat", 
				"target": "content-footer", 
				"cls": "web-content-info",
				"clsContainer": "x-container-contact-img",
				"html": "<img src=\"img/mail.png\" alt=\"üzenet\"/>"
			 }, {
				"lang": "hu-HU", 
				"view": "kapcsolat", 
				"target": "content-footer", 
				"title": "Ha levelet írna:", 
				"cls": "web-content-info",
				"clsContainer": "x-container-contact"
			 }, {
				"lang": "hu-HU", 
				"view": "kapcsolat", 
				"target": "content-footer", 
				"title": "Az iroda elérhetősége:", 
				"cls": "web-content-info",
				"clsContainer": "x-container-contact-office",
				"name": "office-contact"
			 },
			 
			 {
				"lang": "en-US", 
				"view": "home", 
				"target": "content", 
				"title": "Tisztelt Érdeklődő!", 
				"cls": "web-content-data",
				"html": "A Bács-Kiskun Megyei Ügyvédi Kamara (6000 Kecskemét, Bercsényi u. 15. telefon/fax: 76/484-909 www.bacskiskunmegyeiugyvedikamara.hu) tagja vagyok. Nyilvántartási számom 226.<br />Adószámom: 50231928-1-23<br />Bank: K&H 10402513-50526671-52871001<br /><br />Hatósági  közvetítő és igénybe vehető jogi segítő / pártfogó ügyvéd is vagyok."
			 }, {
				"lang": "en-US", 
				"view": "home", 
				"target": "content", 
				"title": "Bemutatkozás", 
				"cls": "web-content-info",
				"html": "Baján születtem 1956-ban. A Szegedi Tudományegyetem jogelődjén diplomáztam 1980-ban (cum laude) a szakvizsgát 1989-ben tettem. Szakmai pályámon egy évtizedet dolgoztam olyan mezőgazdasági vállalatnál, ahol a termelés (élelmiszeripar - tartósító-, bor-, üdítő- és szeszipar) mezőgazdaság, kertészet, nehézipar, építőipar, fuvarozás  valamint az innováció szerződési, kereskedelmi, peres, controlling, és vállalatszervezési jogi ügyeiben vehettem részt. További egy évtizedet a jogi képviseleti területen működtem, két szakágon a jogtanácsosi és az ügyvédi területen. Újabb egy évtizedet töltöttem települési önkormányzatoknál (községi szinttől megyei jogú városig) jegyzői munkával, illetve kb. fél évet Budapest egyik kerületében hatósági osztályvezetőként. Tapasztalataim összegzéseként ismét a jogi képviseleti munkaterületen vagyok. Miután az ország számos térségében dolgoztam sokféle munka és emberi kultúrát ismerhettem meg. Örülök, hogy barátja lehetek művészeknek (festőknek, költőknek, íróknak) de elfogadnak a kisebbségek, az etnikum jelesei is, és sok kétkezi munkás is."
			 }, {
				"lang": "en-US", 
				"view": "home", 
				"target": "content-footer", 
				"title": "Irodai rövid hírek", 
				"cls": "web-content-info web-line2",
				"name": "multicontent-officenews"
			 }, {
				"lang": "en-US", 
				"view": "home", 
				"target": "content-footer", 
				"title": "Jogterületeim", 
				"cls": "web-content-info",
				"html": "Közigazgatási jogterület (pl.: birtokvédelem, építéshatósági eljárás, hagyatéki eljárás, szabálysértés, kereskedelmi-és iparigazgatás, közterület-használat).<br />Ingatlanfejlesztés, ingatlanforgalom.<br />Szerződések, végintézkedések.<br />Polgári, munkajogi, közszolgálati ügyek, perek, peren kívüli eljárások. Környezetvédelmi jog.<br />Társasági jog. Pénzügyi jogi, kereskedelmi jogi ügyek.<br />Szellemi alkotások ügyei.<br />Adójog. Adatvédelmi jog.<br />A fentiekhez kapcsolódó büntetőjogi ügyek.<br />Mediáció, azaz közvetítői eljárás.<br />Üzletviteli tanácsadás, marketing és reklámjog.<br />&nbsp;És sok minden más..."
			 }, {
				"lang": "en-US", 
				"view": "home", 
				"target": "content-footer", 
				"title": "Szerintem", 
				"cls": "web-content-info",
				"html": "Ha... rosszat hallasz valakiről, óvakodva hidd el. A hírnek s pletykának gyakran semmi alapja nincs s a legtöbb esetben nagyítva s eltorzítva terjed tovább. Az emberiség általában és az egyes emberek is nem ritkán olyan jók, minők lehetnének s lenniök kellene, de ritkán oly rosszak, minőknek őket a gonosz akaratú rágalom festi. És ha kénytelen vagy is elhinni a hallott tényt, mert valóságán lehetetlen kételkedned, ne ítélj azonnal, ne kárhoztass kíméletlenül. A hír, még ha való is, csak magát a tényt mondja el, s hallgat azon előzményekről, melyeknek talán kényszerítő hatalma a tényt előidézte s melyek a tettet magát gyakran más alakban tüntetik elő. (Deák Ferenctől átvéve.)"
			 }, {
				"lang": "en-US", 
				"view": "home", 
				"target": "content-footer", 
				"title": "Hírek", 
				"cls": "web-content-info",
				"name": "multicontent-news"
			 }, {
				"lang": "en-US", 
				"view": "all", 
				"target": "footer", 
				"title": "Nyilatkozat:", 
				"cls": "web-content-info",
				"html": "Ezt a honlapot <b>dr. Nagy Mátyás egyéni ügyvéd</b>, a Bács-Kiskun Megyei Ügyvédi Kamarában bejegyzett ügyvéd tartja fenn az ügyvédekre vonatkozó jogszabályok és belső szabályzatok szerint, melyek az ügyféljogokra vonatkozó tájékoztatással együtt a <a href=\"http://www.magyarugyvedikamara.hu\" target=\"_blank\">www.magyarugyvedikamara.hu</a> honlapon találhatók. Ez a honlap nem folytat tudományos kutatást, közvélemény-kutatást, piackutatást, közvetlen üzletszerzést. A web-helyen lévő információk nem tekinthetők tanácsként vagy ajánlásként, és a web-hely nem szolgál semmilyen elhatározás vagy intézkedés alapjául. A Web-hely nem jelentet meg személyes véleményt. A web-hely nem folytat adatkezelést, adatot nem továbbít, és nem hoz nyilvánosságra, az érintett hozzájárulása nélkül. Hozzájárulás: az érintett akaratának önkéntes és határozott kinyilvánítása, amely megfelelő tájékoztatáson alapul, és amellyel félreérthetetlen beleegyezését adja a rá vonatkozó személyes adatok – teljes körű vagy egyes műveletekre kiterjedő – kezeléséhez. (Az információs önrendelkezési jogról és információ-szabadságról szóló 2011. évi CXII. tv.) A web-hely partnereinek egyedi elérésére szolgáló adatát a web-hellyel kapcsolatba lépő által megállapított célból vesszük igénybe. A web-hely által jelzett szakmai tevékenység alapvető szabályait az ügyvédekről szóló, többször módosított 1998.évi XI. tv. tartalmazza."
			 }, {
				"lang": "en-US", 
				"view": "all", 
				"target": "footer", 
				"title": "Hasznos&nbsp;linkek:", 
				"name": "multicontent",
				"cls": "web-content-info"
			 }, {
				"lang": "en-US", 
				"view": "joggyakorlat",
				"target": "content-head", 
				"title": "Joggyakorlat", 
				"cls": "web-content-info",
				"html": "A személyes találkozóig itt alkalma van a bírói gyakorlat egyes döntéseivel megismerkedni. (A tartalmat időnként cserélem, ha érdeklődésének megfelelt ez az oldal, látogasson ide máskor is.)"
			 }, {
				"lang": "en-US", 
				"view": "joggyakorlat", 
				"target": "content-footer", 
				"title": "Beszélgessünk", 
				"cls": "web-content-info",
				"html": "Az egyéni ügyvédi iroda előzmény nélkül alakult. Aki elolvassa a bemutatkozásom, meglepődhet, miért ez a szakmai változatosság, az újra kezdés, és újrakezdés? Első munkahelyem a demokratikus fordulat (rendszerváltás) során megszünt. Illetve abban a  záró folyamatban már kerestem a személyes szakmai megpróbáltatásom útjait, s előbb jogtanácsosi irodát, majd ügyvédi irodát később egyéni ügyvédi irodát, végül ismét jogtanácsosi irodát szerveztem/szerveztünk. A múlt század végén a Kamara úgy látta jónak, ha más területen akklimatizálódok. Ekkor váltottam a köz szolgálatára. Érdemes volt. A közösség új dimenziókat nyitott a felelősség-vállalásban, a sorsok kezelésében, a tartalom gazdagságában, a joggyakorlati élmények tárházában. Szeretném, ha hozzá tudnék járulni az itt olvasott jogi információkkal a jogi gondolkozáshoz.<br />Várom az olvasók észrevételeit, leveleit, kérdéseit!"
			 }, {
				"lang": "en-US", 
				"view": "joggyakorlat", 
				"target": "content-footer", 
				"title": "Közérdekű kérdések:", 
				"cls": "web-content-info",
				"name": "jog-faq-questions"
			 }, {
				"lang": "en-US", 
				"view": "joggyakorlat", 
				"target": "content-footer", 
				"title": "Válaszok:", 
				"cls": "web-content-info",
				"name": "jog-faq-answers"
			 }, {
				"lang": "en-US", 
				"view": "kiszamithatosag", 
				"target": "content", 
				"title": "Kiszámíthatóság", 
				"cls": "web-content-info info-gray",
				"html": "Az ügyvédi iroda áttekinthető, világos, követhető díjakat és költségelszámolást alkalmaz. A jogi segítői (illetve a pártfogó ügyvédi díj jogszabály által meghatározott és az állam fizeti a legtöbb esetben). Fontos ellenben a hatósági közvetítői tevékenységi kör (a költségviselőt és mértékét a kijelölő hatóság tudja megbecsülni). A törzsügyfelek számára 50%-ig terjedő kedvezmény lehetséges. A tényállás felvétele, azaz a beszélgetés az ügy megismeréséről, az ügyfél-ügyvéd kommunikáció, és még sok minden nem számít a díjazásba, azaz ingyenes."
			 }, {
				"lang": "en-US", 
				"view": "kiszamithatosag", 
				"target": "content", 
				"title": "", 
				"cls": "web-content-price",
				"clsContainer": "x-container-price",
				"name": "price"
			 }, {
				"lang": "en-US", 
				"view": "kiszamithatosag", 
				"target": "content", 
				"title": "", 
				"cls": "web-content-category",
				"clsContainer": "x-container-category",
				"name": "category"
			 }, {
				"lang": "en-US", 
				"view": "kiszamithatosag", 
				"target": "content", 
				"title": "", 
				"cls": "web-content-info",
				"html": "Mindegyik ügyfél iratához önálló időráfordítás-kimutatás és díjjegyzék csatlakozik."
			 }, {
				"lang": "en-US", 
				"view": "kiszamithatosag", 
				"target": "content-footer", 
				"title": "", 
				"cls": "web-content-info",
				"html": "<img src=\"img/egyuttmukodes.jpg\" style=\"border-radius: 3px; box-shadow: 11px 1px 33px #000000;\" alt=\"együttműködés\"/>"
			 }, {
				"lang": "en-US", 
				"view": "kiszamithatosag", 
				"target": "content-footer", 
				"title": "\"Nép ügyvédje\"-Jogi segítő", 
				"cls": "web-content-info",
				"html": "A jogi segítség a 2003. évi LXXX.tv. szerinti jogi szolgáltatásokat jelenti, aminek ügyvédi költségét az állam fizeti az ügyfél helyett, vagy megelőlegezi az ügyfél javára.<br /><h3>dr. Nagy Mátyás jogi segítő.</h3><a href=\"http://www.kimisz.gov.hu\" target:\"_blank\" style=\"font-weight:normal;\">www.kimisz.gov.hu</a><br />Kérjen tájékoztatót  elérhetőségeim egyikén."
			 }, {
				"lang": "en-US", 
				"view": "kiszamithatosag", 
				"target": "content-footer", 
				"title": "Prezentációs tanácsadás", 
				"cls": "web-content-info",
				"html": "Az iroda előadás keretében kivetítéses szemléltetéssel kisebb-nagyobb csoportok számára tart jogi elméleti és gyakorlati ismeretterjesztést. Az időszerű rendezvényekről a honlapon, de kérésre e-meilben is tájékoztatjuk az érdeklődőket.<br /><br />Soron következő rendezvényünk:"
			 }, {
				"lang": "en-US", 
				"view": "kiszamithatosag", 
				"target": "content-footer", 
				"title": "Együttműködés", 
				"cls": "web-content-info",
				"html": "A jogi képviselet, a tanácsadás, vagy egyéb ügyvédi munka személyre szóló feladat. Készek vagyunk azonban együttműködni mindazon szakemberekkel, akik előmozdítják a sikert. ne feledje a megbízását előkészíteni az együttműködésre kiterjedő javaslataival."
			 }, {
				"lang": "en-US", 
				"view": "kiszamithatosag", 
				"target": "content-footer", 
				"title": "A hatósági közvetítés (mediáció)", 
				"cls": "web-content-info",
				"html": "A hatóság közvetítőt vehet igénybe a hatóság és az ügyfél, valamint az ellenérdekű felek közötti vita rendezésére. (2004. évi CXL.tv. 41.§) Ha szeretné a vitarendezés, a megoldáskeresés  célhoz vezető módját, igényelje hatósági közvetítő kirendelését a közigazgatási szervtől."
			 }, {
				"lang": "en-US", 
				"view": "kiszamithatosag", 
				"target": "content-footer", 
				"title": "On-line ügyvéd", 
				"cls": "web-content-info",
				"html": "A hagyományos ügyvéd-ügyfél kapcsolaton, az iroda-látogatáson kívül az Internet lehetőséget teremt az on-line jogi munkára. Az iroda készen áll a megfelelésre, jelezze szándékát!"
			 }, {
				"lang": "en-US", 
				"view": "all", 
				"target": "footer", 
				"html": "<hr />"
			 }, {
				"lang": "en-US", 
				"view": "all", 
				"target": "footer", 
				"html": "&copy;&nbsp;<a href=\"mailto:drnagymatyas@2012\">dr. Nagy Mátyás</a>, 2012-2013"
			 }, {
				"lang": "en-US", 
				"view": "kapcsolat", 
				"target": "content-footer", 
				"cls": "web-content-info",
				"clsContainer": "x-container-contact-img",
				"html": "<img src=\"img/mail.png\" alt=\"üzenet\"/>"
			 }, {
				"lang": "en-US", 
				"view": "kapcsolat", 
				"target": "content-footer", 
				"title": "Ha levelet írna:", 
				"cls": "web-content-info",
				"clsContainer": "x-container-contact"
			 }, {
				"lang": "en-US", 
				"view": "kapcsolat", 
				"target": "content-footer", 
				"title": "Az iroda elérhetősége:", 
				"cls": "web-content-info",
				"clsContainer": "x-container-contact-office",
				"name": "office-contact"
			 },
			 
			 {
				"lang": "de-DE", 
				"view": "home", 
				"target": "content", 
				"title": "Tisztelt Érdeklődő!", 
				"cls": "web-content-data",
				"html": "A Bács-Kiskun Megyei Ügyvédi Kamara (6000 Kecskemét, Bercsényi u. 15. telefon/fax: 76/484-909 www.bacskiskunmegyeiugyvedikamara.hu) tagja vagyok. Nyilvántartási számom 226.<br />Adószámom: 50231928-1-23<br />Bank: K&H 10402513-50526671-52871001<br /><br />Hatósági  közvetítő és igénybe vehető jogi segítő / pártfogó ügyvéd is vagyok."
			 }, {
				"lang": "de-DE", 
				"view": "home", 
				"target": "content", 
				"title": "Bemutatkozás", 
				"cls": "web-content-info",
				"html": "Baján születtem 1956-ban. A Szegedi Tudományegyetem jogelődjén diplomáztam 1980-ban (cum laude) a szakvizsgát 1989-ben tettem. Szakmai pályámon egy évtizedet dolgoztam olyan mezőgazdasági vállalatnál, ahol a termelés (élelmiszeripar - tartósító-, bor-, üdítő- és szeszipar) mezőgazdaság, kertészet, nehézipar, építőipar, fuvarozás  valamint az innováció szerződési, kereskedelmi, peres, controlling, és vállalatszervezési jogi ügyeiben vehettem részt. További egy évtizedet a jogi képviseleti területen működtem, két szakágon a jogtanácsosi és az ügyvédi területen. Újabb egy évtizedet töltöttem települési önkormányzatoknál (községi szinttől megyei jogú városig) jegyzői munkával, illetve kb. fél évet Budapest egyik kerületében hatósági osztályvezetőként. Tapasztalataim összegzéseként ismét a jogi képviseleti munkaterületen vagyok. Miután az ország számos térségében dolgoztam sokféle munka és emberi kultúrát ismerhettem meg. Örülök, hogy barátja lehetek művészeknek (festőknek, költőknek, íróknak) de elfogadnak a kisebbségek, az etnikum jelesei is, és sok kétkezi munkás is."
			 }, {
				"lang": "de-DE", 
				"view": "home", 
				"target": "content-footer", 
				"title": "Irodai rövid hírek", 
				"cls": "web-content-info web-line2",
				"name": "multicontent-officenews"
			 }, {
				"lang": "de-DE", 
				"view": "home", 
				"target": "content-footer", 
				"title": "Jogterületeim", 
				"cls": "web-content-info",
				"html": "Közigazgatási jogterület (pl.: birtokvédelem, építéshatósági eljárás, hagyatéki eljárás, szabálysértés, kereskedelmi-és iparigazgatás, közterület-használat).<br />Ingatlanfejlesztés, ingatlanforgalom.<br />Szerződések, végintézkedések.<br />Polgári, munkajogi, közszolgálati ügyek, perek, peren kívüli eljárások. Környezetvédelmi jog.<br />Társasági jog. Pénzügyi jogi, kereskedelmi jogi ügyek.<br />Szellemi alkotások ügyei.<br />Adójog. Adatvédelmi jog.<br />A fentiekhez kapcsolódó büntetőjogi ügyek.<br />Mediáció, azaz közvetítői eljárás.<br />Üzletviteli tanácsadás, marketing és reklámjog.<br />&nbsp;És sok minden más..."
			 }, {
				"lang": "de-DE", 
				"view": "home", 
				"target": "content-footer", 
				"title": "Szerintem", 
				"cls": "web-content-info",
				"html": "Ha... rosszat hallasz valakiről, óvakodva hidd el. A hírnek s pletykának gyakran semmi alapja nincs s a legtöbb esetben nagyítva s eltorzítva terjed tovább. Az emberiség általában és az egyes emberek is nem ritkán olyan jók, minők lehetnének s lenniök kellene, de ritkán oly rosszak, minőknek őket a gonosz akaratú rágalom festi. És ha kénytelen vagy is elhinni a hallott tényt, mert valóságán lehetetlen kételkedned, ne ítélj azonnal, ne kárhoztass kíméletlenül. A hír, még ha való is, csak magát a tényt mondja el, s hallgat azon előzményekről, melyeknek talán kényszerítő hatalma a tényt előidézte s melyek a tettet magát gyakran más alakban tüntetik elő. (Deák Ferenctől átvéve.)"
			 }, {
				"lang": "de-DE", 
				"view": "home", 
				"target": "content-footer", 
				"title": "Hírek", 
				"cls": "web-content-info",
				"name": "multicontent-news"
			 }, {
				"lang": "de-DE", 
				"view": "all", 
				"target": "footer", 
				"title": "Nyilatkozat:", 
				"cls": "web-content-info",
				"html": "Ezt a honlapot <b>dr. Nagy Mátyás egyéni ügyvéd</b>, a Bács-Kiskun Megyei Ügyvédi Kamarában bejegyzett ügyvéd tartja fenn az ügyvédekre vonatkozó jogszabályok és belső szabályzatok szerint, melyek az ügyféljogokra vonatkozó tájékoztatással együtt a <a href=\"http://www.magyarugyvedikamara.hu\" target=\"_blank\">www.magyarugyvedikamara.hu</a> honlapon találhatók. Ez a honlap nem folytat tudományos kutatást, közvélemény-kutatást, piackutatást, közvetlen üzletszerzést. A web-helyen lévő információk nem tekinthetők tanácsként vagy ajánlásként, és a web-hely nem szolgál semmilyen elhatározás vagy intézkedés alapjául. A Web-hely nem jelentet meg személyes véleményt. A web-hely nem folytat adatkezelést, adatot nem továbbít, és nem hoz nyilvánosságra, az érintett hozzájárulása nélkül. Hozzájárulás: az érintett akaratának önkéntes és határozott kinyilvánítása, amely megfelelő tájékoztatáson alapul, és amellyel félreérthetetlen beleegyezését adja a rá vonatkozó személyes adatok – teljes körű vagy egyes műveletekre kiterjedő – kezeléséhez. (Az információs önrendelkezési jogról és információ-szabadságról szóló 2011. évi CXII. tv.) A web-hely partnereinek egyedi elérésére szolgáló adatát a web-hellyel kapcsolatba lépő által megállapított célból vesszük igénybe. A web-hely által jelzett szakmai tevékenység alapvető szabályait az ügyvédekről szóló, többször módosított 1998.évi XI. tv. tartalmazza."
			 }, {
				"lang": "de-DE", 
				"view": "all", 
				"target": "footer", 
				"title": "Hasznos&nbsp;linkek:", 
				"name": "multicontent",
				"cls": "web-content-info"
			 }, {
				"lang": "de-DE", 
				"view": "joggyakorlat",
				"target": "content-head", 
				"title": "Joggyakorlat", 
				"cls": "web-content-info",
				"html": "A személyes találkozóig itt alkalma van a bírói gyakorlat egyes döntéseivel megismerkedni. (A tartalmat időnként cserélem, ha érdeklődésének megfelelt ez az oldal, látogasson ide máskor is.)"
			 }, {
				"lang": "de-DE", 
				"view": "joggyakorlat", 
				"target": "content-footer", 
				"title": "Beszélgessünk", 
				"cls": "web-content-info",
				"html": "Az egyéni ügyvédi iroda előzmény nélkül alakult. Aki elolvassa a bemutatkozásom, meglepődhet, miért ez a szakmai változatosság, az újra kezdés, és újrakezdés? Első munkahelyem a demokratikus fordulat (rendszerváltás) során megszünt. Illetve abban a  záró folyamatban már kerestem a személyes szakmai megpróbáltatásom útjait, s előbb jogtanácsosi irodát, majd ügyvédi irodát később egyéni ügyvédi irodát, végül ismét jogtanácsosi irodát szerveztem/szerveztünk. A múlt század végén a Kamara úgy látta jónak, ha más területen akklimatizálódok. Ekkor váltottam a köz szolgálatára. Érdemes volt. A közösség új dimenziókat nyitott a felelősség-vállalásban, a sorsok kezelésében, a tartalom gazdagságában, a joggyakorlati élmények tárházában. Szeretném, ha hozzá tudnék járulni az itt olvasott jogi információkkal a jogi gondolkozáshoz.<br />Várom az olvasók észrevételeit, leveleit, kérdéseit!"
			 }, {
				"lang": "de-DE", 
				"view": "joggyakorlat", 
				"target": "content-footer", 
				"title": "Közérdekű kérdések:", 
				"cls": "web-content-info",
				"name": "jog-faq-questions"
			 }, {
				"lang": "de-DE", 
				"view": "joggyakorlat", 
				"target": "content-footer", 
				"title": "Válaszok:", 
				"cls": "web-content-info",
				"name": "jog-faq-answers"
			 }, {
				"lang": "de-DE", 
				"view": "kiszamithatosag", 
				"target": "content", 
				"title": "Kiszámíthatóság", 
				"cls": "web-content-info info-gray",
				"html": "Az ügyvédi iroda áttekinthető, világos, követhető díjakat és költségelszámolást alkalmaz. A jogi segítői (illetve a pártfogó ügyvédi díj jogszabály által meghatározott és az állam fizeti a legtöbb esetben). Fontos ellenben a hatósági közvetítői tevékenységi kör (a költségviselőt és mértékét a kijelölő hatóság tudja megbecsülni). A törzsügyfelek számára 50%-ig terjedő kedvezmény lehetséges. A tényállás felvétele, azaz a beszélgetés az ügy megismeréséről, az ügyfél-ügyvéd kommunikáció, és még sok minden nem számít a díjazásba, azaz ingyenes."
			 }, {
				"lang": "de-DE", 
				"view": "kiszamithatosag", 
				"target": "content", 
				"title": "", 
				"cls": "web-content-price",
				"clsContainer": "x-container-price",
				"name": "price"
			 }, {
				"lang": "de-DE", 
				"view": "kiszamithatosag", 
				"target": "content", 
				"title": "", 
				"cls": "web-content-category",
				"clsContainer": "x-container-category",
				"name": "category"
			 }, {
				"lang": "de-DE", 
				"view": "kiszamithatosag", 
				"target": "content", 
				"title": "", 
				"cls": "web-content-info",
				"html": "Mindegyik ügyfél iratához önálló időráfordítás-kimutatás és díjjegyzék csatlakozik."
			 }, {
				"lang": "de-DE", 
				"view": "kiszamithatosag", 
				"target": "content-footer", 
				"title": "", 
				"cls": "web-content-info",
				"html": "<img src=\"img/egyuttmukodes.jpg\" style=\"border-radius: 3px; box-shadow: 11px 1px 33px #000000;\" alt=\"együttműködés\"/>"
			 }, {
				"lang": "de-DE", 
				"view": "kiszamithatosag", 
				"target": "content-footer", 
				"title": "\"Nép ügyvédje\"-Jogi segítő", 
				"cls": "web-content-info",
				"html": "A jogi segítség a 2003. évi LXXX.tv. szerinti jogi szolgáltatásokat jelenti, aminek ügyvédi költségét az állam fizeti az ügyfél helyett, vagy megelőlegezi az ügyfél javára.<br /><h3>dr. Nagy Mátyás jogi segítő.</h3><a href=\"http://www.kimisz.gov.hu\" target:\"_blank\" style=\"font-weight:normal;\">www.kimisz.gov.hu</a><br />Kérjen tájékoztatót  elérhetőségeim egyikén."
			 }, {
				"lang": "de-DE", 
				"view": "kiszamithatosag", 
				"target": "content-footer", 
				"title": "Prezentációs tanácsadás", 
				"cls": "web-content-info",
				"html": "Az iroda előadás keretében kivetítéses szemléltetéssel kisebb-nagyobb csoportok számára tart jogi elméleti és gyakorlati ismeretterjesztést. Az időszerű rendezvényekről a honlapon, de kérésre e-meilben is tájékoztatjuk az érdeklődőket.<br /><br />Soron következő rendezvényünk:"
			 }, {
				"lang": "de-DE", 
				"view": "kiszamithatosag", 
				"target": "content-footer", 
				"title": "Együttműködés", 
				"cls": "web-content-info",
				"html": "A jogi képviselet, a tanácsadás, vagy egyéb ügyvédi munka személyre szóló feladat. Készek vagyunk azonban együttműködni mindazon szakemberekkel, akik előmozdítják a sikert. ne feledje a megbízását előkészíteni az együttműködésre kiterjedő javaslataival."
			 }, {
				"lang": "de-DE", 
				"view": "kiszamithatosag", 
				"target": "content-footer", 
				"title": "A hatósági közvetítés (mediáció)", 
				"cls": "web-content-info",
				"html": "A hatóság közvetítőt vehet igénybe a hatóság és az ügyfél, valamint az ellenérdekű felek közötti vita rendezésére. (2004. évi CXL.tv. 41.§) Ha szeretné a vitarendezés, a megoldáskeresés  célhoz vezető módját, igényelje hatósági közvetítő kirendelését a közigazgatási szervtől."
			 }, {
				"lang": "de-DE", 
				"view": "kiszamithatosag", 
				"target": "content-footer", 
				"title": "On-line ügyvéd", 
				"cls": "web-content-info",
				"html": "A hagyományos ügyvéd-ügyfél kapcsolaton, az iroda-látogatáson kívül az Internet lehetőséget teremt az on-line jogi munkára. Az iroda készen áll a megfelelésre, jelezze szándékát!"
			 }, {
				"lang": "de-DE", 
				"view": "all", 
				"target": "footer", 
				"html": "<hr />"
			 }, {
				"lang": "de-DE", 
				"view": "all", 
				"target": "footer", 
				"html": "&copy;&nbsp;<a href=\"mailto:drnagymatyas@2012\">dr. Nagy Mátyás</a>, 2012-2013"
			 }, {
				"lang": "de-DE", 
				"view": "kapcsolat", 
				"target": "content-footer", 
				"cls": "web-content-info",
				"clsContainer": "x-container-contact-img",
				"html": "<img src=\"img/mail.png\" alt=\"üzenet\"/>"
			 }, {
				"lang": "de-DE", 
				"view": "kapcsolat", 
				"target": "content-footer", 
				"title": "Ha levelet írna:", 
				"cls": "web-content-info",
				"clsContainer": "x-container-contact"
			 }, {
				"lang": "de-DE", 
				"view": "kapcsolat", 
				"target": "content-footer", 
				"title": "Az iroda elérhetősége:", 
				"cls": "web-content-info",
				"clsContainer": "x-container-contact-office",
				"name": "office-contact"
			 },
			 
			 {
				"lang": "hr-HR", 
				"view": "home", 
				"target": "content", 
				"title": "Tisztelt Érdeklődő!", 
				"cls": "web-content-data",
				"html": "A Bács-Kiskun Megyei Ügyvédi Kamara (6000 Kecskemét, Bercsényi u. 15. telefon/fax: 76/484-909 www.bacskiskunmegyeiugyvedikamara.hu) tagja vagyok. Nyilvántartási számom 226.<br />Adószámom: 50231928-1-23<br />Bank: K&H 10402513-50526671-52871001<br /><br />Hatósági  közvetítő és igénybe vehető jogi segítő / pártfogó ügyvéd is vagyok."
			 }, {
				"lang": "hr-HR", 
				"view": "home", 
				"target": "content", 
				"title": "Bemutatkozás", 
				"cls": "web-content-info",
				"html": "Baján születtem 1956-ban. A Szegedi Tudományegyetem jogelődjén diplomáztam 1980-ban (cum laude) a szakvizsgát 1989-ben tettem. Szakmai pályámon egy évtizedet dolgoztam olyan mezőgazdasági vállalatnál, ahol a termelés (élelmiszeripar - tartósító-, bor-, üdítő- és szeszipar) mezőgazdaság, kertészet, nehézipar, építőipar, fuvarozás  valamint az innováció szerződési, kereskedelmi, peres, controlling, és vállalatszervezési jogi ügyeiben vehettem részt. További egy évtizedet a jogi képviseleti területen működtem, két szakágon a jogtanácsosi és az ügyvédi területen. Újabb egy évtizedet töltöttem települési önkormányzatoknál (községi szinttől megyei jogú városig) jegyzői munkával, illetve kb. fél évet Budapest egyik kerületében hatósági osztályvezetőként. Tapasztalataim összegzéseként ismét a jogi képviseleti munkaterületen vagyok. Miután az ország számos térségében dolgoztam sokféle munka és emberi kultúrát ismerhettem meg. Örülök, hogy barátja lehetek művészeknek (festőknek, költőknek, íróknak) de elfogadnak a kisebbségek, az etnikum jelesei is, és sok kétkezi munkás is."
			 }, {
				"lang": "hr-HR", 
				"view": "home", 
				"target": "content-footer", 
				"title": "Irodai rövid hírek", 
				"cls": "web-content-info web-line2",
				"name": "multicontent-officenews"
			 }, {
				"lang": "hr-HR", 
				"view": "home", 
				"target": "content-footer", 
				"title": "Jogterületeim", 
				"cls": "web-content-info",
				"html": "Közigazgatási jogterület (pl.: birtokvédelem, építéshatósági eljárás, hagyatéki eljárás, szabálysértés, kereskedelmi-és iparigazgatás, közterület-használat).<br />Ingatlanfejlesztés, ingatlanforgalom.<br />Szerződések, végintézkedések.<br />Polgári, munkajogi, közszolgálati ügyek, perek, peren kívüli eljárások. Környezetvédelmi jog.<br />Társasági jog. Pénzügyi jogi, kereskedelmi jogi ügyek.<br />Szellemi alkotások ügyei.<br />Adójog. Adatvédelmi jog.<br />A fentiekhez kapcsolódó büntetőjogi ügyek.<br />Mediáció, azaz közvetítői eljárás.<br />Üzletviteli tanácsadás, marketing és reklámjog.<br />&nbsp;És sok minden más..."
			 }, {
				"lang": "hr-HR", 
				"view": "home", 
				"target": "content-footer", 
				"title": "Szerintem", 
				"cls": "web-content-info",
				"html": "Ha... rosszat hallasz valakiről, óvakodva hidd el. A hírnek s pletykának gyakran semmi alapja nincs s a legtöbb esetben nagyítva s eltorzítva terjed tovább. Az emberiség általában és az egyes emberek is nem ritkán olyan jók, minők lehetnének s lenniök kellene, de ritkán oly rosszak, minőknek őket a gonosz akaratú rágalom festi. És ha kénytelen vagy is elhinni a hallott tényt, mert valóságán lehetetlen kételkedned, ne ítélj azonnal, ne kárhoztass kíméletlenül. A hír, még ha való is, csak magát a tényt mondja el, s hallgat azon előzményekről, melyeknek talán kényszerítő hatalma a tényt előidézte s melyek a tettet magát gyakran más alakban tüntetik elő. (Deák Ferenctől átvéve.)"
			 }, {
				"lang": "hr-HR", 
				"view": "home", 
				"target": "content-footer", 
				"title": "Hírek", 
				"cls": "web-content-info",
				"name": "multicontent-news"
			 }, {
				"lang": "hr-HR", 
				"view": "all", 
				"target": "footer", 
				"title": "Nyilatkozat:", 
				"cls": "web-content-info",
				"html": "Ezt a honlapot <b>dr. Nagy Mátyás egyéni ügyvéd</b>, a Bács-Kiskun Megyei Ügyvédi Kamarában bejegyzett ügyvéd tartja fenn az ügyvédekre vonatkozó jogszabályok és belső szabályzatok szerint, melyek az ügyféljogokra vonatkozó tájékoztatással együtt a <a href=\"http://www.magyarugyvedikamara.hu\" target=\"_blank\">www.magyarugyvedikamara.hu</a> honlapon találhatók. Ez a honlap nem folytat tudományos kutatást, közvélemény-kutatást, piackutatást, közvetlen üzletszerzést. A web-helyen lévő információk nem tekinthetők tanácsként vagy ajánlásként, és a web-hely nem szolgál semmilyen elhatározás vagy intézkedés alapjául. A Web-hely nem jelentet meg személyes véleményt. A web-hely nem folytat adatkezelést, adatot nem továbbít, és nem hoz nyilvánosságra, az érintett hozzájárulása nélkül. Hozzájárulás: az érintett akaratának önkéntes és határozott kinyilvánítása, amely megfelelő tájékoztatáson alapul, és amellyel félreérthetetlen beleegyezését adja a rá vonatkozó személyes adatok – teljes körű vagy egyes műveletekre kiterjedő – kezeléséhez. (Az információs önrendelkezési jogról és információ-szabadságról szóló 2011. évi CXII. tv.) A web-hely partnereinek egyedi elérésére szolgáló adatát a web-hellyel kapcsolatba lépő által megállapított célból vesszük igénybe. A web-hely által jelzett szakmai tevékenység alapvető szabályait az ügyvédekről szóló, többször módosított 1998.évi XI. tv. tartalmazza."
			 }, {
				"lang": "hr-HR", 
				"view": "all", 
				"target": "footer", 
				"title": "Hasznos&nbsp;linkek:", 
				"name": "multicontent",
				"cls": "web-content-info"
			 }, {
				"lang": "hr-HR", 
				"view": "joggyakorlat",
				"target": "content-head", 
				"title": "Joggyakorlat", 
				"cls": "web-content-info",
				"html": "A személyes találkozóig itt alkalma van a bírói gyakorlat egyes döntéseivel megismerkedni. (A tartalmat időnként cserélem, ha érdeklődésének megfelelt ez az oldal, látogasson ide máskor is.)"
			 }, {
				"lang": "hr-HR", 
				"view": "joggyakorlat", 
				"target": "content-footer", 
				"title": "Beszélgessünk", 
				"cls": "web-content-info",
				"html": "Az egyéni ügyvédi iroda előzmény nélkül alakult. Aki elolvassa a bemutatkozásom, meglepődhet, miért ez a szakmai változatosság, az újra kezdés, és újrakezdés? Első munkahelyem a demokratikus fordulat (rendszerváltás) során megszünt. Illetve abban a  záró folyamatban már kerestem a személyes szakmai megpróbáltatásom útjait, s előbb jogtanácsosi irodát, majd ügyvédi irodát később egyéni ügyvédi irodát, végül ismét jogtanácsosi irodát szerveztem/szerveztünk. A múlt század végén a Kamara úgy látta jónak, ha más területen akklimatizálódok. Ekkor váltottam a köz szolgálatára. Érdemes volt. A közösség új dimenziókat nyitott a felelősség-vállalásban, a sorsok kezelésében, a tartalom gazdagságában, a joggyakorlati élmények tárházában. Szeretném, ha hozzá tudnék járulni az itt olvasott jogi információkkal a jogi gondolkozáshoz.<br />Várom az olvasók észrevételeit, leveleit, kérdéseit!"
			 }, {
				"lang": "hr-HR", 
				"view": "joggyakorlat", 
				"target": "content-footer", 
				"title": "Közérdekű kérdések:", 
				"cls": "web-content-info",
				"name": "jog-faq-questions"
			 }, {
				"lang": "hr-HR", 
				"view": "joggyakorlat", 
				"target": "content-footer", 
				"title": "Válaszok:", 
				"cls": "web-content-info",
				"name": "jog-faq-answers"
			 }, {
				"lang": "hr-HR", 
				"view": "kiszamithatosag", 
				"target": "content", 
				"title": "Kiszámíthatóság", 
				"cls": "web-content-info info-gray",
				"html": "Az ügyvédi iroda áttekinthető, világos, követhető díjakat és költségelszámolást alkalmaz. A jogi segítői (illetve a pártfogó ügyvédi díj jogszabály által meghatározott és az állam fizeti a legtöbb esetben). Fontos ellenben a hatósági közvetítői tevékenységi kör (a költségviselőt és mértékét a kijelölő hatóság tudja megbecsülni). A törzsügyfelek számára 50%-ig terjedő kedvezmény lehetséges. A tényállás felvétele, azaz a beszélgetés az ügy megismeréséről, az ügyfél-ügyvéd kommunikáció, és még sok minden nem számít a díjazásba, azaz ingyenes."
			 }, {
				"lang": "hr-HR", 
				"view": "kiszamithatosag", 
				"target": "content", 
				"title": "", 
				"cls": "web-content-price",
				"clsContainer": "x-container-price",
				"name": "price"
			 }, {
				"lang": "hr-HR", 
				"view": "kiszamithatosag", 
				"target": "content", 
				"title": "", 
				"cls": "web-content-category",
				"clsContainer": "x-container-category",
				"name": "category"
			 }, {
				"lang": "hr-HR", 
				"view": "kiszamithatosag", 
				"target": "content", 
				"title": "", 
				"cls": "web-content-info",
				"html": "Mindegyik ügyfél iratához önálló időráfordítás-kimutatás és díjjegyzék csatlakozik."
			 }, {
				"lang": "hr-HR", 
				"view": "kiszamithatosag", 
				"target": "content-footer", 
				"title": "", 
				"cls": "web-content-info",
				"html": "<img src=\"img/egyuttmukodes.jpg\" style=\"border-radius: 3px; box-shadow: 11px 1px 33px #000000;\" alt=\"együttműködés\"/>"
			 }, {
				"lang": "hr-HR", 
				"view": "kiszamithatosag", 
				"target": "content-footer", 
				"title": "\"Nép ügyvédje\"-Jogi segítő", 
				"cls": "web-content-info",
				"html": "A jogi segítség a 2003. évi LXXX.tv. szerinti jogi szolgáltatásokat jelenti, aminek ügyvédi költségét az állam fizeti az ügyfél helyett, vagy megelőlegezi az ügyfél javára.<br /><h3>dr. Nagy Mátyás jogi segítő.</h3><a href=\"http://www.kimisz.gov.hu\" target:\"_blank\" style=\"font-weight:normal;\">www.kimisz.gov.hu</a><br />Kérjen tájékoztatót  elérhetőségeim egyikén."
			 }, {
				"lang": "hr-HR", 
				"view": "kiszamithatosag", 
				"target": "content-footer", 
				"title": "Prezentációs tanácsadás", 
				"cls": "web-content-info",
				"html": "Az iroda előadás keretében kivetítéses szemléltetéssel kisebb-nagyobb csoportok számára tart jogi elméleti és gyakorlati ismeretterjesztést. Az időszerű rendezvényekről a honlapon, de kérésre e-meilben is tájékoztatjuk az érdeklődőket.<br /><br />Soron következő rendezvényünk:"
			 }, {
				"lang": "hr-HR", 
				"view": "kiszamithatosag", 
				"target": "content-footer", 
				"title": "Együttműködés", 
				"cls": "web-content-info",
				"html": "A jogi képviselet, a tanácsadás, vagy egyéb ügyvédi munka személyre szóló feladat. Készek vagyunk azonban együttműködni mindazon szakemberekkel, akik előmozdítják a sikert. ne feledje a megbízását előkészíteni az együttműködésre kiterjedő javaslataival."
			 }, {
				"lang": "hr-HR", 
				"view": "kiszamithatosag", 
				"target": "content-footer", 
				"title": "A hatósági közvetítés (mediáció)", 
				"cls": "web-content-info",
				"html": "A hatóság közvetítőt vehet igénybe a hatóság és az ügyfél, valamint az ellenérdekű felek közötti vita rendezésére. (2004. évi CXL.tv. 41.§) Ha szeretné a vitarendezés, a megoldáskeresés  célhoz vezető módját, igényelje hatósági közvetítő kirendelését a közigazgatási szervtől."
			 }, {
				"lang": "hr-HR", 
				"view": "kiszamithatosag", 
				"target": "content-footer", 
				"title": "On-line ügyvéd", 
				"cls": "web-content-info",
				"html": "A hagyományos ügyvéd-ügyfél kapcsolaton, az iroda-látogatáson kívül az Internet lehetőséget teremt az on-line jogi munkára. Az iroda készen áll a megfelelésre, jelezze szándékát!"
			 }, {
				"lang": "hr-HR", 
				"view": "all", 
				"target": "footer", 
				"html": "<hr />"
			 }, {
				"lang": "hr-HR", 
				"view": "all", 
				"target": "footer", 
				"html": "&copy;&nbsp;<a href=\"mailto:drnagymatyas@2012\">dr. Nagy Mátyás</a>, 2012-2013"
			 }, {
				"lang": "hr-HR", 
				"view": "kapcsolat", 
				"target": "content-footer", 
				"cls": "web-content-info",
				"clsContainer": "x-container-contact-img",
				"html": "<img src=\"img/mail.png\" alt=\"üzenet\"/>"
			 }, {
				"lang": "hr-HR", 
				"view": "kapcsolat", 
				"target": "content-footer", 
				"title": "Ha levelet írna:", 
				"cls": "web-content-info",
				"clsContainer": "x-container-contact"
			 }, {
				"lang": "hr-HR", 
				"view": "kapcsolat", 
				"target": "content-footer", 
				"title": "Az iroda elérhetősége:", 
				"cls": "web-content-info",
				"clsContainer": "x-container-contact-office",
				"name": "office-contact"
			 },
			 
			 {
				"lang": "pl-PL", 
				"view": "home", 
				"target": "content", 
				"title": "Tisztelt Érdeklődő!", 
				"cls": "web-content-data",
				"html": "A Bács-Kiskun Megyei Ügyvédi Kamara (6000 Kecskemét, Bercsényi u. 15. telefon/fax: 76/484-909 www.bacskiskunmegyeiugyvedikamara.hu) tagja vagyok. Nyilvántartási számom 226.<br />Adószámom: 50231928-1-23<br />Bank: K&H 10402513-50526671-52871001<br /><br />Hatósági  közvetítő és igénybe vehető jogi segítő / pártfogó ügyvéd is vagyok."
			 }, {
				"lang": "pl-PL", 
				"view": "home", 
				"target": "content", 
				"title": "Bemutatkozás", 
				"cls": "web-content-info",
				"html": "Baján születtem 1956-ban. A Szegedi Tudományegyetem jogelődjén diplomáztam 1980-ban (cum laude) a szakvizsgát 1989-ben tettem. Szakmai pályámon egy évtizedet dolgoztam olyan mezőgazdasági vállalatnál, ahol a termelés (élelmiszeripar - tartósító-, bor-, üdítő- és szeszipar) mezőgazdaság, kertészet, nehézipar, építőipar, fuvarozás  valamint az innováció szerződési, kereskedelmi, peres, controlling, és vállalatszervezési jogi ügyeiben vehettem részt. További egy évtizedet a jogi képviseleti területen működtem, két szakágon a jogtanácsosi és az ügyvédi területen. Újabb egy évtizedet töltöttem települési önkormányzatoknál (községi szinttől megyei jogú városig) jegyzői munkával, illetve kb. fél évet Budapest egyik kerületében hatósági osztályvezetőként. Tapasztalataim összegzéseként ismét a jogi képviseleti munkaterületen vagyok. Miután az ország számos térségében dolgoztam sokféle munka és emberi kultúrát ismerhettem meg. Örülök, hogy barátja lehetek művészeknek (festőknek, költőknek, íróknak) de elfogadnak a kisebbségek, az etnikum jelesei is, és sok kétkezi munkás is."
			 }, {
				"lang": "pl-PL", 
				"view": "home", 
				"target": "content-footer", 
				"title": "Irodai rövid hírek", 
				"cls": "web-content-info web-line2",
				"name": "multicontent-officenews"
			 }, {
				"lang": "pl-PL", 
				"view": "home", 
				"target": "content-footer", 
				"title": "Jogterületeim", 
				"cls": "web-content-info",
				"html": "Közigazgatási jogterület (pl.: birtokvédelem, építéshatósági eljárás, hagyatéki eljárás, szabálysértés, kereskedelmi-és iparigazgatás, közterület-használat).<br />Ingatlanfejlesztés, ingatlanforgalom.<br />Szerződések, végintézkedések.<br />Polgári, munkajogi, közszolgálati ügyek, perek, peren kívüli eljárások. Környezetvédelmi jog.<br />Társasági jog. Pénzügyi jogi, kereskedelmi jogi ügyek.<br />Szellemi alkotások ügyei.<br />Adójog. Adatvédelmi jog.<br />A fentiekhez kapcsolódó büntetőjogi ügyek.<br />Mediáció, azaz közvetítői eljárás.<br />Üzletviteli tanácsadás, marketing és reklámjog.<br />&nbsp;És sok minden más..."
			 }, {
				"lang": "pl-PL", 
				"view": "home", 
				"target": "content-footer", 
				"title": "Szerintem", 
				"cls": "web-content-info",
				"html": "Ha... rosszat hallasz valakiről, óvakodva hidd el. A hírnek s pletykának gyakran semmi alapja nincs s a legtöbb esetben nagyítva s eltorzítva terjed tovább. Az emberiség általában és az egyes emberek is nem ritkán olyan jók, minők lehetnének s lenniök kellene, de ritkán oly rosszak, minőknek őket a gonosz akaratú rágalom festi. És ha kénytelen vagy is elhinni a hallott tényt, mert valóságán lehetetlen kételkedned, ne ítélj azonnal, ne kárhoztass kíméletlenül. A hír, még ha való is, csak magát a tényt mondja el, s hallgat azon előzményekről, melyeknek talán kényszerítő hatalma a tényt előidézte s melyek a tettet magát gyakran más alakban tüntetik elő. (Deák Ferenctől átvéve.)"
			 }, {
				"lang": "pl-PL", 
				"view": "home", 
				"target": "content-footer", 
				"title": "Hírek", 
				"cls": "web-content-info",
				"name": "multicontent-news"
			 }, {
				"lang": "pl-PL", 
				"view": "all", 
				"target": "footer", 
				"title": "Nyilatkozat:", 
				"cls": "web-content-info",
				"html": "Ezt a honlapot <b>dr. Nagy Mátyás egyéni ügyvéd</b>, a Bács-Kiskun Megyei Ügyvédi Kamarában bejegyzett ügyvéd tartja fenn az ügyvédekre vonatkozó jogszabályok és belső szabályzatok szerint, melyek az ügyféljogokra vonatkozó tájékoztatással együtt a <a href=\"http://www.magyarugyvedikamara.hu\" target=\"_blank\">www.magyarugyvedikamara.hu</a> honlapon találhatók. Ez a honlap nem folytat tudományos kutatást, közvélemény-kutatást, piackutatást, közvetlen üzletszerzést. A web-helyen lévő információk nem tekinthetők tanácsként vagy ajánlásként, és a web-hely nem szolgál semmilyen elhatározás vagy intézkedés alapjául. A Web-hely nem jelentet meg személyes véleményt. A web-hely nem folytat adatkezelést, adatot nem továbbít, és nem hoz nyilvánosságra, az érintett hozzájárulása nélkül. Hozzájárulás: az érintett akaratának önkéntes és határozott kinyilvánítása, amely megfelelő tájékoztatáson alapul, és amellyel félreérthetetlen beleegyezését adja a rá vonatkozó személyes adatok – teljes körű vagy egyes műveletekre kiterjedő – kezeléséhez. (Az információs önrendelkezési jogról és információ-szabadságról szóló 2011. évi CXII. tv.) A web-hely partnereinek egyedi elérésére szolgáló adatát a web-hellyel kapcsolatba lépő által megállapított célból vesszük igénybe. A web-hely által jelzett szakmai tevékenység alapvető szabályait az ügyvédekről szóló, többször módosított 1998.évi XI. tv. tartalmazza."
			 }, {
				"lang": "pl-PL", 
				"view": "all", 
				"target": "footer", 
				"title": "Hasznos&nbsp;linkek:", 
				"name": "multicontent",
				"cls": "web-content-info"
			 }, {
				"lang": "pl-PL", 
				"view": "joggyakorlat",
				"target": "content-head", 
				"title": "Joggyakorlat", 
				"cls": "web-content-info",
				"html": "A személyes találkozóig itt alkalma van a bírói gyakorlat egyes döntéseivel megismerkedni. (A tartalmat időnként cserélem, ha érdeklődésének megfelelt ez az oldal, látogasson ide máskor is.)"
			 }, {
				"lang": "pl-PL", 
				"view": "joggyakorlat", 
				"target": "content-footer", 
				"title": "Beszélgessünk", 
				"cls": "web-content-info",
				"html": "Az egyéni ügyvédi iroda előzmény nélkül alakult. Aki elolvassa a bemutatkozásom, meglepődhet, miért ez a szakmai változatosság, az újra kezdés, és újrakezdés? Első munkahelyem a demokratikus fordulat (rendszerváltás) során megszünt. Illetve abban a  záró folyamatban már kerestem a személyes szakmai megpróbáltatásom útjait, s előbb jogtanácsosi irodát, majd ügyvédi irodát később egyéni ügyvédi irodát, végül ismét jogtanácsosi irodát szerveztem/szerveztünk. A múlt század végén a Kamara úgy látta jónak, ha más területen akklimatizálódok. Ekkor váltottam a köz szolgálatára. Érdemes volt. A közösség új dimenziókat nyitott a felelősség-vállalásban, a sorsok kezelésében, a tartalom gazdagságában, a joggyakorlati élmények tárházában. Szeretném, ha hozzá tudnék járulni az itt olvasott jogi információkkal a jogi gondolkozáshoz.<br />Várom az olvasók észrevételeit, leveleit, kérdéseit!"
			 }, {
				"lang": "pl-PL", 
				"view": "joggyakorlat", 
				"target": "content-footer", 
				"title": "Közérdekű kérdések:", 
				"cls": "web-content-info",
				"name": "jog-faq-questions"
			 }, {
				"lang": "pl-PL", 
				"view": "joggyakorlat", 
				"target": "content-footer", 
				"title": "Válaszok:", 
				"cls": "web-content-info",
				"name": "jog-faq-answers"
			 }, {
				"lang": "pl-PL", 
				"view": "kiszamithatosag", 
				"target": "content", 
				"title": "Kiszámíthatóság", 
				"cls": "web-content-info info-gray",
				"html": "Az ügyvédi iroda áttekinthető, világos, követhető díjakat és költségelszámolást alkalmaz. A jogi segítői (illetve a pártfogó ügyvédi díj jogszabály által meghatározott és az állam fizeti a legtöbb esetben). Fontos ellenben a hatósági közvetítői tevékenységi kör (a költségviselőt és mértékét a kijelölő hatóság tudja megbecsülni). A törzsügyfelek számára 50%-ig terjedő kedvezmény lehetséges. A tényállás felvétele, azaz a beszélgetés az ügy megismeréséről, az ügyfél-ügyvéd kommunikáció, és még sok minden nem számít a díjazásba, azaz ingyenes."
			 }, {
				"lang": "pl-PL", 
				"view": "kiszamithatosag", 
				"target": "content", 
				"title": "", 
				"cls": "web-content-price",
				"clsContainer": "x-container-price",
				"name": "price"
			 }, {
				"lang": "pl-PL", 
				"view": "kiszamithatosag", 
				"target": "content", 
				"title": "", 
				"cls": "web-content-category",
				"clsContainer": "x-container-category",
				"name": "category"
			 }, {
				"lang": "pl-PL", 
				"view": "kiszamithatosag", 
				"target": "content", 
				"title": "", 
				"cls": "web-content-info",
				"html": "Mindegyik ügyfél iratához önálló időráfordítás-kimutatás és díjjegyzék csatlakozik."
			 }, {
				"lang": "pl-PL", 
				"view": "kiszamithatosag", 
				"target": "content-footer", 
				"title": "", 
				"cls": "web-content-info",
				"html": "<img src=\"img/egyuttmukodes.jpg\" style=\"border-radius: 3px; box-shadow: 11px 1px 33px #000000;\" alt=\"együttműködés\"/>"
			 }, {
				"lang": "pl-PL", 
				"view": "kiszamithatosag", 
				"target": "content-footer", 
				"title": "\"Nép ügyvédje\"-Jogi segítő", 
				"cls": "web-content-info",
				"html": "A jogi segítség a 2003. évi LXXX.tv. szerinti jogi szolgáltatásokat jelenti, aminek ügyvédi költségét az állam fizeti az ügyfél helyett, vagy megelőlegezi az ügyfél javára.<br /><h3>dr. Nagy Mátyás jogi segítő.</h3><a href=\"http://www.kimisz.gov.hu\" target:\"_blank\" style=\"font-weight:normal;\">www.kimisz.gov.hu</a><br />Kérjen tájékoztatót  elérhetőségeim egyikén."
			 }, {
				"lang": "pl-PL", 
				"view": "kiszamithatosag", 
				"target": "content-footer", 
				"title": "Prezentációs tanácsadás", 
				"cls": "web-content-info",
				"html": "Az iroda előadás keretében kivetítéses szemléltetéssel kisebb-nagyobb csoportok számára tart jogi elméleti és gyakorlati ismeretterjesztést. Az időszerű rendezvényekről a honlapon, de kérésre e-meilben is tájékoztatjuk az érdeklődőket.<br /><br />Soron következő rendezvényünk:"
			 }, {
				"lang": "pl-PL", 
				"view": "kiszamithatosag", 
				"target": "content-footer", 
				"title": "Együttműködés", 
				"cls": "web-content-info",
				"html": "A jogi képviselet, a tanácsadás, vagy egyéb ügyvédi munka személyre szóló feladat. Készek vagyunk azonban együttműködni mindazon szakemberekkel, akik előmozdítják a sikert. ne feledje a megbízását előkészíteni az együttműködésre kiterjedő javaslataival."
			 }, {
				"lang": "pl-PL", 
				"view": "kiszamithatosag", 
				"target": "content-footer", 
				"title": "A hatósági közvetítés (mediáció)", 
				"cls": "web-content-info",
				"html": "A hatóság közvetítőt vehet igénybe a hatóság és az ügyfél, valamint az ellenérdekű felek közötti vita rendezésére. (2004. évi CXL.tv. 41.§) Ha szeretné a vitarendezés, a megoldáskeresés  célhoz vezető módját, igényelje hatósági közvetítő kirendelését a közigazgatási szervtől."
			 }, {
				"lang": "pl-PL", 
				"view": "kiszamithatosag", 
				"target": "content-footer", 
				"title": "On-line ügyvéd", 
				"cls": "web-content-info",
				"html": "A hagyományos ügyvéd-ügyfél kapcsolaton, az iroda-látogatáson kívül az Internet lehetőséget teremt az on-line jogi munkára. Az iroda készen áll a megfelelésre, jelezze szándékát!"
			 }, {
				"lang": "pl-PL", 
				"view": "all", 
				"target": "footer", 
				"html": "<hr />"
			 }, {
				"lang": "pl-PL", 
				"view": "all", 
				"target": "footer", 
				"html": "&copy;&nbsp;<a href=\"mailto:drnagymatyas@2012\">dr. Nagy Mátyás</a>, 2012-2013"
			 }, {
				"lang": "pl-PL", 
				"view": "kapcsolat", 
				"target": "content-footer", 
				"cls": "web-content-info",
				"clsContainer": "x-container-contact-img",
				"html": "<img src=\"img/mail.png\" alt=\"üzenet\"/>"
			 }, {
				"lang": "pl-PL", 
				"view": "kapcsolat", 
				"target": "content-footer", 
				"title": "Ha levelet írna:", 
				"cls": "web-content-info",
				"clsContainer": "x-container-contact"
			 }, {
				"lang": "pl-PL", 
				"view": "kapcsolat", 
				"target": "content-footer", 
				"title": "Az iroda elérhetősége:", 
				"cls": "web-content-info",
				"clsContainer": "x-container-contact-office",
				"name": "office-contact"
			 },
			 
			 {
				"lang": "ro-RO", 
				"view": "home", 
				"target": "content", 
				"title": "Tisztelt Érdeklődő!", 
				"cls": "web-content-data",
				"html": "A Bács-Kiskun Megyei Ügyvédi Kamara (6000 Kecskemét, Bercsényi u. 15. telefon/fax: 76/484-909 www.bacskiskunmegyeiugyvedikamara.hu) tagja vagyok. Nyilvántartási számom 226.<br />Adószámom: 50231928-1-23<br />Bank: K&H 10402513-50526671-52871001<br /><br />Hatósági  közvetítő és igénybe vehető jogi segítő / pártfogó ügyvéd is vagyok."
			 }, {
				"lang": "ro-RO", 
				"view": "home", 
				"target": "content", 
				"title": "Bemutatkozás", 
				"cls": "web-content-info",
				"html": "Baján születtem 1956-ban. A Szegedi Tudományegyetem jogelődjén diplomáztam 1980-ban (cum laude) a szakvizsgát 1989-ben tettem. Szakmai pályámon egy évtizedet dolgoztam olyan mezőgazdasági vállalatnál, ahol a termelés (élelmiszeripar - tartósító-, bor-, üdítő- és szeszipar) mezőgazdaság, kertészet, nehézipar, építőipar, fuvarozás  valamint az innováció szerződési, kereskedelmi, peres, controlling, és vállalatszervezési jogi ügyeiben vehettem részt. További egy évtizedet a jogi képviseleti területen működtem, két szakágon a jogtanácsosi és az ügyvédi területen. Újabb egy évtizedet töltöttem települési önkormányzatoknál (községi szinttől megyei jogú városig) jegyzői munkával, illetve kb. fél évet Budapest egyik kerületében hatósági osztályvezetőként. Tapasztalataim összegzéseként ismét a jogi képviseleti munkaterületen vagyok. Miután az ország számos térségében dolgoztam sokféle munka és emberi kultúrát ismerhettem meg. Örülök, hogy barátja lehetek művészeknek (festőknek, költőknek, íróknak) de elfogadnak a kisebbségek, az etnikum jelesei is, és sok kétkezi munkás is."
			 }, {
				"lang": "ro-RO", 
				"view": "home", 
				"target": "content-footer", 
				"title": "Irodai rövid hírek", 
				"cls": "web-content-info web-line2",
				"name": "multicontent-officenews"
			 }, {
				"lang": "ro-RO", 
				"view": "home", 
				"target": "content-footer", 
				"title": "Jogterületeim", 
				"cls": "web-content-info",
				"html": "Közigazgatási jogterület (pl.: birtokvédelem, építéshatósági eljárás, hagyatéki eljárás, szabálysértés, kereskedelmi-és iparigazgatás, közterület-használat).<br />Ingatlanfejlesztés, ingatlanforgalom.<br />Szerződések, végintézkedések.<br />Polgári, munkajogi, közszolgálati ügyek, perek, peren kívüli eljárások. Környezetvédelmi jog.<br />Társasági jog. Pénzügyi jogi, kereskedelmi jogi ügyek.<br />Szellemi alkotások ügyei.<br />Adójog. Adatvédelmi jog.<br />A fentiekhez kapcsolódó büntetőjogi ügyek.<br />Mediáció, azaz közvetítői eljárás.<br />Üzletviteli tanácsadás, marketing és reklámjog.<br />&nbsp;És sok minden más..."
			 }, {
				"lang": "ro-RO", 
				"view": "home", 
				"target": "content-footer", 
				"title": "Szerintem", 
				"cls": "web-content-info",
				"html": "Ha... rosszat hallasz valakiről, óvakodva hidd el. A hírnek s pletykának gyakran semmi alapja nincs s a legtöbb esetben nagyítva s eltorzítva terjed tovább. Az emberiség általában és az egyes emberek is nem ritkán olyan jók, minők lehetnének s lenniök kellene, de ritkán oly rosszak, minőknek őket a gonosz akaratú rágalom festi. És ha kénytelen vagy is elhinni a hallott tényt, mert valóságán lehetetlen kételkedned, ne ítélj azonnal, ne kárhoztass kíméletlenül. A hír, még ha való is, csak magát a tényt mondja el, s hallgat azon előzményekről, melyeknek talán kényszerítő hatalma a tényt előidézte s melyek a tettet magát gyakran más alakban tüntetik elő. (Deák Ferenctől átvéve.)"
			 }, {
				"lang": "ro-RO", 
				"view": "home", 
				"target": "content-footer", 
				"title": "Hírek", 
				"cls": "web-content-info",
				"name": "multicontent-news"
			 }, {
				"lang": "ro-RO", 
				"view": "all", 
				"target": "footer", 
				"title": "Nyilatkozat:", 
				"cls": "web-content-info",
				"html": "Ezt a honlapot <b>dr. Nagy Mátyás egyéni ügyvéd</b>, a Bács-Kiskun Megyei Ügyvédi Kamarában bejegyzett ügyvéd tartja fenn az ügyvédekre vonatkozó jogszabályok és belső szabályzatok szerint, melyek az ügyféljogokra vonatkozó tájékoztatással együtt a <a href=\"http://www.magyarugyvedikamara.hu\" target=\"_blank\">www.magyarugyvedikamara.hu</a> honlapon találhatók. Ez a honlap nem folytat tudományos kutatást, közvélemény-kutatást, piackutatást, közvetlen üzletszerzést. A web-helyen lévő információk nem tekinthetők tanácsként vagy ajánlásként, és a web-hely nem szolgál semmilyen elhatározás vagy intézkedés alapjául. A Web-hely nem jelentet meg személyes véleményt. A web-hely nem folytat adatkezelést, adatot nem továbbít, és nem hoz nyilvánosságra, az érintett hozzájárulása nélkül. Hozzájárulás: az érintett akaratának önkéntes és határozott kinyilvánítása, amely megfelelő tájékoztatáson alapul, és amellyel félreérthetetlen beleegyezését adja a rá vonatkozó személyes adatok – teljes körű vagy egyes műveletekre kiterjedő – kezeléséhez. (Az információs önrendelkezési jogról és információ-szabadságról szóló 2011. évi CXII. tv.) A web-hely partnereinek egyedi elérésére szolgáló adatát a web-hellyel kapcsolatba lépő által megállapított célból vesszük igénybe. A web-hely által jelzett szakmai tevékenység alapvető szabályait az ügyvédekről szóló, többször módosított 1998.évi XI. tv. tartalmazza."
			 }, {
				"lang": "ro-RO", 
				"view": "all", 
				"target": "footer", 
				"title": "Hasznos&nbsp;linkek:", 
				"name": "multicontent",
				"cls": "web-content-info"
			 }, {
				"lang": "ro-RO", 
				"view": "joggyakorlat",
				"target": "content-head", 
				"title": "Joggyakorlat", 
				"cls": "web-content-info",
				"html": "A személyes találkozóig itt alkalma van a bírói gyakorlat egyes döntéseivel megismerkedni. (A tartalmat időnként cserélem, ha érdeklődésének megfelelt ez az oldal, látogasson ide máskor is.)"
			 }, {
				"lang": "ro-RO", 
				"view": "joggyakorlat", 
				"target": "content-footer", 
				"title": "Beszélgessünk", 
				"cls": "web-content-info",
				"html": "Az egyéni ügyvédi iroda előzmény nélkül alakult. Aki elolvassa a bemutatkozásom, meglepődhet, miért ez a szakmai változatosság, az újra kezdés, és újrakezdés? Első munkahelyem a demokratikus fordulat (rendszerváltás) során megszünt. Illetve abban a  záró folyamatban már kerestem a személyes szakmai megpróbáltatásom útjait, s előbb jogtanácsosi irodát, majd ügyvédi irodát később egyéni ügyvédi irodát, végül ismét jogtanácsosi irodát szerveztem/szerveztünk. A múlt század végén a Kamara úgy látta jónak, ha más területen akklimatizálódok. Ekkor váltottam a köz szolgálatára. Érdemes volt. A közösség új dimenziókat nyitott a felelősség-vállalásban, a sorsok kezelésében, a tartalom gazdagságában, a joggyakorlati élmények tárházában. Szeretném, ha hozzá tudnék járulni az itt olvasott jogi információkkal a jogi gondolkozáshoz.<br />Várom az olvasók észrevételeit, leveleit, kérdéseit!"
			 }, {
				"lang": "ro-RO", 
				"view": "joggyakorlat", 
				"target": "content-footer", 
				"title": "Közérdekű kérdések:", 
				"cls": "web-content-info",
				"name": "jog-faq-questions"
			 }, {
				"lang": "ro-RO", 
				"view": "joggyakorlat", 
				"target": "content-footer", 
				"title": "Válaszok:", 
				"cls": "web-content-info",
				"name": "jog-faq-answers"
			 }, {
				"lang": "ro-RO", 
				"view": "kiszamithatosag", 
				"target": "content", 
				"title": "Kiszámíthatóság", 
				"cls": "web-content-info info-gray",
				"html": "Az ügyvédi iroda áttekinthető, világos, követhető díjakat és költségelszámolást alkalmaz. A jogi segítői (illetve a pártfogó ügyvédi díj jogszabály által meghatározott és az állam fizeti a legtöbb esetben). Fontos ellenben a hatósági közvetítői tevékenységi kör (a költségviselőt és mértékét a kijelölő hatóság tudja megbecsülni). A törzsügyfelek számára 50%-ig terjedő kedvezmény lehetséges. A tényállás felvétele, azaz a beszélgetés az ügy megismeréséről, az ügyfél-ügyvéd kommunikáció, és még sok minden nem számít a díjazásba, azaz ingyenes."
			 }, {
				"lang": "ro-RO", 
				"view": "kiszamithatosag", 
				"target": "content", 
				"title": "", 
				"cls": "web-content-price",
				"clsContainer": "x-container-price",
				"name": "price"
			 }, {
				"lang": "ro-RO", 
				"view": "kiszamithatosag", 
				"target": "content", 
				"title": "", 
				"cls": "web-content-category",
				"clsContainer": "x-container-category",
				"name": "category"
			 }, {
				"lang": "ro-RO", 
				"view": "kiszamithatosag", 
				"target": "content", 
				"title": "", 
				"cls": "web-content-info",
				"html": "Mindegyik ügyfél iratához önálló időráfordítás-kimutatás és díjjegyzék csatlakozik."
			 }, {
				"lang": "ro-RO", 
				"view": "kiszamithatosag", 
				"target": "content-footer", 
				"title": "", 
				"cls": "web-content-info",
				"html": "<img src=\"img/egyuttmukodes.jpg\" style=\"border-radius: 3px; box-shadow: 11px 1px 33px #000000;\" alt=\"együttműködés\"/>"
			 }, {
				"lang": "ro-RO", 
				"view": "kiszamithatosag", 
				"target": "content-footer", 
				"title": "\"Nép ügyvédje\"-Jogi segítő", 
				"cls": "web-content-info",
				"html": "A jogi segítség a 2003. évi LXXX.tv. szerinti jogi szolgáltatásokat jelenti, aminek ügyvédi költségét az állam fizeti az ügyfél helyett, vagy megelőlegezi az ügyfél javára.<br /><h3>dr. Nagy Mátyás jogi segítő.</h3><a href=\"http://www.kimisz.gov.hu\" target:\"_blank\" style=\"font-weight:normal;\">www.kimisz.gov.hu</a><br />Kérjen tájékoztatót  elérhetőségeim egyikén."
			 }, {
				"lang": "ro-RO", 
				"view": "kiszamithatosag", 
				"target": "content-footer", 
				"title": "Prezentációs tanácsadás", 
				"cls": "web-content-info",
				"html": "Az iroda előadás keretében kivetítéses szemléltetéssel kisebb-nagyobb csoportok számára tart jogi elméleti és gyakorlati ismeretterjesztést. Az időszerű rendezvényekről a honlapon, de kérésre e-meilben is tájékoztatjuk az érdeklődőket.<br /><br />Soron következő rendezvényünk:"
			 }, {
				"lang": "ro-RO", 
				"view": "kiszamithatosag", 
				"target": "content-footer", 
				"title": "Együttműködés", 
				"cls": "web-content-info",
				"html": "A jogi képviselet, a tanácsadás, vagy egyéb ügyvédi munka személyre szóló feladat. Készek vagyunk azonban együttműködni mindazon szakemberekkel, akik előmozdítják a sikert. ne feledje a megbízását előkészíteni az együttműködésre kiterjedő javaslataival."
			 }, {
				"lang": "ro-RO", 
				"view": "kiszamithatosag", 
				"target": "content-footer", 
				"title": "A hatósági közvetítés (mediáció)", 
				"cls": "web-content-info",
				"html": "A hatóság közvetítőt vehet igénybe a hatóság és az ügyfél, valamint az ellenérdekű felek közötti vita rendezésére. (2004. évi CXL.tv. 41.§) Ha szeretné a vitarendezés, a megoldáskeresés  célhoz vezető módját, igényelje hatósági közvetítő kirendelését a közigazgatási szervtől."
			 }, {
				"lang": "ro-RO", 
				"view": "kiszamithatosag", 
				"target": "content-footer", 
				"title": "On-line ügyvéd", 
				"cls": "web-content-info",
				"html": "A hagyományos ügyvéd-ügyfél kapcsolaton, az iroda-látogatáson kívül az Internet lehetőséget teremt az on-line jogi munkára. Az iroda készen áll a megfelelésre, jelezze szándékát!"
			 }, {
				"lang": "ro-RO", 
				"view": "all", 
				"target": "footer", 
				"html": "<hr />"
			 }, {
				"lang": "ro-RO", 
				"view": "all", 
				"target": "footer", 
				"html": "&copy;&nbsp;<a href=\"mailto:drnagymatyas@2012\">dr. Nagy Mátyás</a>, 2012-2013"
			 }, {
				"lang": "ro-RO", 
				"view": "kapcsolat", 
				"target": "content-footer", 
				"cls": "web-content-info",
				"clsContainer": "x-container-contact-img",
				"html": "<img src=\"img/mail.png\" alt=\"üzenet\"/>"
			 }, {
				"lang": "ro-RO", 
				"view": "kapcsolat", 
				"target": "content-footer", 
				"title": "Ha levelet írna:", 
				"cls": "web-content-info",
				"clsContainer": "x-container-contact"
			 }, {
				"lang": "ro-RO", 
				"view": "kapcsolat", 
				"target": "content-footer", 
				"title": "Az iroda elérhetősége:", 
				"cls": "web-content-info",
				"clsContainer": "x-container-contact-office",
				"name": "office-contact"
			 },
			 
			 {
				"lang": "ru-RU", 
				"view": "home", 
				"target": "content", 
				"title": "Tisztelt Érdeklődő!", 
				"cls": "web-content-data",
				"html": "A Bács-Kiskun Megyei Ügyvédi Kamara (6000 Kecskemét, Bercsényi u. 15. telefon/fax: 76/484-909 www.bacskiskunmegyeiugyvedikamara.hu) tagja vagyok. Nyilvántartási számom 226.<br />Adószámom: 50231928-1-23<br />Bank: K&H 10402513-50526671-52871001<br /><br />Hatósági  közvetítő és igénybe vehető jogi segítő / pártfogó ügyvéd is vagyok."
			 }, {
				"lang": "ru-RU", 
				"view": "home", 
				"target": "content", 
				"title": "Bemutatkozás", 
				"cls": "web-content-info",
				"html": "Baján születtem 1956-ban. A Szegedi Tudományegyetem jogelődjén diplomáztam 1980-ban (cum laude) a szakvizsgát 1989-ben tettem. Szakmai pályámon egy évtizedet dolgoztam olyan mezőgazdasági vállalatnál, ahol a termelés (élelmiszeripar - tartósító-, bor-, üdítő- és szeszipar) mezőgazdaság, kertészet, nehézipar, építőipar, fuvarozás  valamint az innováció szerződési, kereskedelmi, peres, controlling, és vállalatszervezési jogi ügyeiben vehettem részt. További egy évtizedet a jogi képviseleti területen működtem, két szakágon a jogtanácsosi és az ügyvédi területen. Újabb egy évtizedet töltöttem települési önkormányzatoknál (községi szinttől megyei jogú városig) jegyzői munkával, illetve kb. fél évet Budapest egyik kerületében hatósági osztályvezetőként. Tapasztalataim összegzéseként ismét a jogi képviseleti munkaterületen vagyok. Miután az ország számos térségében dolgoztam sokféle munka és emberi kultúrát ismerhettem meg. Örülök, hogy barátja lehetek művészeknek (festőknek, költőknek, íróknak) de elfogadnak a kisebbségek, az etnikum jelesei is, és sok kétkezi munkás is."
			 }, {
				"lang": "ru-RU", 
				"view": "home", 
				"target": "content-footer", 
				"title": "Irodai rövid hírek", 
				"cls": "web-content-info web-line2",
				"name": "multicontent-officenews"
			 }, {
				"lang": "ru-RU", 
				"view": "home", 
				"target": "content-footer", 
				"title": "Jogterületeim", 
				"cls": "web-content-info",
				"html": "Közigazgatási jogterület (pl.: birtokvédelem, építéshatósági eljárás, hagyatéki eljárás, szabálysértés, kereskedelmi-és iparigazgatás, közterület-használat).<br />Ingatlanfejlesztés, ingatlanforgalom.<br />Szerződések, végintézkedések.<br />Polgári, munkajogi, közszolgálati ügyek, perek, peren kívüli eljárások. Környezetvédelmi jog.<br />Társasági jog. Pénzügyi jogi, kereskedelmi jogi ügyek.<br />Szellemi alkotások ügyei.<br />Adójog. Adatvédelmi jog.<br />A fentiekhez kapcsolódó büntetőjogi ügyek.<br />Mediáció, azaz közvetítői eljárás.<br />Üzletviteli tanácsadás, marketing és reklámjog.<br />&nbsp;És sok minden más..."
			 }, {
				"lang": "ru-RU", 
				"view": "home", 
				"target": "content-footer", 
				"title": "Szerintem", 
				"cls": "web-content-info",
				"html": "Ha... rosszat hallasz valakiről, óvakodva hidd el. A hírnek s pletykának gyakran semmi alapja nincs s a legtöbb esetben nagyítva s eltorzítva terjed tovább. Az emberiség általában és az egyes emberek is nem ritkán olyan jók, minők lehetnének s lenniök kellene, de ritkán oly rosszak, minőknek őket a gonosz akaratú rágalom festi. És ha kénytelen vagy is elhinni a hallott tényt, mert valóságán lehetetlen kételkedned, ne ítélj azonnal, ne kárhoztass kíméletlenül. A hír, még ha való is, csak magát a tényt mondja el, s hallgat azon előzményekről, melyeknek talán kényszerítő hatalma a tényt előidézte s melyek a tettet magát gyakran más alakban tüntetik elő. (Deák Ferenctől átvéve.)"
			 }, {
				"lang": "ru-RU", 
				"view": "home", 
				"target": "content-footer", 
				"title": "Hírek", 
				"cls": "web-content-info",
				"name": "multicontent-news"
			 }, {
				"lang": "ru-RU", 
				"view": "all", 
				"target": "footer", 
				"title": "Nyilatkozat:", 
				"cls": "web-content-info",
				"html": "Ezt a honlapot <b>dr. Nagy Mátyás egyéni ügyvéd</b>, a Bács-Kiskun Megyei Ügyvédi Kamarában bejegyzett ügyvéd tartja fenn az ügyvédekre vonatkozó jogszabályok és belső szabályzatok szerint, melyek az ügyféljogokra vonatkozó tájékoztatással együtt a <a href=\"http://www.magyarugyvedikamara.hu\" target=\"_blank\">www.magyarugyvedikamara.hu</a> honlapon találhatók. Ez a honlap nem folytat tudományos kutatást, közvélemény-kutatást, piackutatást, közvetlen üzletszerzést. A web-helyen lévő információk nem tekinthetők tanácsként vagy ajánlásként, és a web-hely nem szolgál semmilyen elhatározás vagy intézkedés alapjául. A Web-hely nem jelentet meg személyes véleményt. A web-hely nem folytat adatkezelést, adatot nem továbbít, és nem hoz nyilvánosságra, az érintett hozzájárulása nélkül. Hozzájárulás: az érintett akaratának önkéntes és határozott kinyilvánítása, amely megfelelő tájékoztatáson alapul, és amellyel félreérthetetlen beleegyezését adja a rá vonatkozó személyes adatok – teljes körű vagy egyes műveletekre kiterjedő – kezeléséhez. (Az információs önrendelkezési jogról és információ-szabadságról szóló 2011. évi CXII. tv.) A web-hely partnereinek egyedi elérésére szolgáló adatát a web-hellyel kapcsolatba lépő által megállapított célból vesszük igénybe. A web-hely által jelzett szakmai tevékenység alapvető szabályait az ügyvédekről szóló, többször módosított 1998.évi XI. tv. tartalmazza."
			 }, {
				"lang": "ru-RU", 
				"view": "all", 
				"target": "footer", 
				"title": "Hasznos&nbsp;linkek:", 
				"name": "multicontent",
				"cls": "web-content-info"
			 }, {
				"lang": "ru-RU", 
				"view": "joggyakorlat",
				"target": "content-head", 
				"title": "Joggyakorlat", 
				"cls": "web-content-info",
				"html": "A személyes találkozóig itt alkalma van a bírói gyakorlat egyes döntéseivel megismerkedni. (A tartalmat időnként cserélem, ha érdeklődésének megfelelt ez az oldal, látogasson ide máskor is.)"
			 }, {
				"lang": "ru-RU", 
				"view": "joggyakorlat", 
				"target": "content-footer", 
				"title": "Beszélgessünk", 
				"cls": "web-content-info",
				"html": "Az egyéni ügyvédi iroda előzmény nélkül alakult. Aki elolvassa a bemutatkozásom, meglepődhet, miért ez a szakmai változatosság, az újra kezdés, és újrakezdés? Első munkahelyem a demokratikus fordulat (rendszerváltás) során megszünt. Illetve abban a  záró folyamatban már kerestem a személyes szakmai megpróbáltatásom útjait, s előbb jogtanácsosi irodát, majd ügyvédi irodát később egyéni ügyvédi irodát, végül ismét jogtanácsosi irodát szerveztem/szerveztünk. A múlt század végén a Kamara úgy látta jónak, ha más területen akklimatizálódok. Ekkor váltottam a köz szolgálatára. Érdemes volt. A közösség új dimenziókat nyitott a felelősség-vállalásban, a sorsok kezelésében, a tartalom gazdagságában, a joggyakorlati élmények tárházában. Szeretném, ha hozzá tudnék járulni az itt olvasott jogi információkkal a jogi gondolkozáshoz.<br />Várom az olvasók észrevételeit, leveleit, kérdéseit!"
			 }, {
				"lang": "ru-RU", 
				"view": "joggyakorlat", 
				"target": "content-footer", 
				"title": "Közérdekű kérdések:", 
				"cls": "web-content-info",
				"name": "jog-faq-questions"
			 }, {
				"lang": "ru-RU", 
				"view": "joggyakorlat", 
				"target": "content-footer", 
				"title": "Válaszok:", 
				"cls": "web-content-info",
				"name": "jog-faq-answers"
			 }, {
				"lang": "ru-RU", 
				"view": "kiszamithatosag", 
				"target": "content", 
				"title": "Kiszámíthatóság", 
				"cls": "web-content-info info-gray",
				"html": "Az ügyvédi iroda áttekinthető, világos, követhető díjakat és költségelszámolást alkalmaz. A jogi segítői (illetve a pártfogó ügyvédi díj jogszabály által meghatározott és az állam fizeti a legtöbb esetben). Fontos ellenben a hatósági közvetítői tevékenységi kör (a költségviselőt és mértékét a kijelölő hatóság tudja megbecsülni). A törzsügyfelek számára 50%-ig terjedő kedvezmény lehetséges. A tényállás felvétele, azaz a beszélgetés az ügy megismeréséről, az ügyfél-ügyvéd kommunikáció, és még sok minden nem számít a díjazásba, azaz ingyenes."
			 }, {
				"lang": "ru-RU", 
				"view": "kiszamithatosag", 
				"target": "content", 
				"title": "", 
				"cls": "web-content-price",
				"clsContainer": "x-container-price",
				"name": "price"
			 }, {
				"lang": "ru-RU", 
				"view": "kiszamithatosag", 
				"target": "content", 
				"title": "", 
				"cls": "web-content-category",
				"clsContainer": "x-container-category",
				"name": "category"
			 }, {
				"lang": "ru-RU", 
				"view": "kiszamithatosag", 
				"target": "content", 
				"title": "", 
				"cls": "web-content-info",
				"html": "Mindegyik ügyfél iratához önálló időráfordítás-kimutatás és díjjegyzék csatlakozik."
			 }, {
				"lang": "ru-RU", 
				"view": "kiszamithatosag", 
				"target": "content-footer", 
				"title": "", 
				"cls": "web-content-info",
				"html": "<img src=\"img/egyuttmukodes.jpg\" style=\"border-radius: 3px; box-shadow: 11px 1px 33px #000000;\" alt=\"együttműködés\"/>"
			 }, {
				"lang": "ru-RU", 
				"view": "kiszamithatosag", 
				"target": "content-footer", 
				"title": "\"Nép ügyvédje\"-Jogi segítő", 
				"cls": "web-content-info",
				"html": "A jogi segítség a 2003. évi LXXX.tv. szerinti jogi szolgáltatásokat jelenti, aminek ügyvédi költségét az állam fizeti az ügyfél helyett, vagy megelőlegezi az ügyfél javára.<br /><h3>dr. Nagy Mátyás jogi segítő.</h3><a href=\"http://www.kimisz.gov.hu\" target:\"_blank\" style=\"font-weight:normal;\">www.kimisz.gov.hu</a><br />Kérjen tájékoztatót  elérhetőségeim egyikén."
			 }, {
				"lang": "ru-RU", 
				"view": "kiszamithatosag", 
				"target": "content-footer", 
				"title": "Prezentációs tanácsadás", 
				"cls": "web-content-info",
				"html": "Az iroda előadás keretében kivetítéses szemléltetéssel kisebb-nagyobb csoportok számára tart jogi elméleti és gyakorlati ismeretterjesztést. Az időszerű rendezvényekről a honlapon, de kérésre e-meilben is tájékoztatjuk az érdeklődőket.<br /><br />Soron következő rendezvényünk:"
			 }, {
				"lang": "ru-RU", 
				"view": "kiszamithatosag", 
				"target": "content-footer", 
				"title": "Együttműködés", 
				"cls": "web-content-info",
				"html": "A jogi képviselet, a tanácsadás, vagy egyéb ügyvédi munka személyre szóló feladat. Készek vagyunk azonban együttműködni mindazon szakemberekkel, akik előmozdítják a sikert. ne feledje a megbízását előkészíteni az együttműködésre kiterjedő javaslataival."
			 }, {
				"lang": "ru-RU", 
				"view": "kiszamithatosag", 
				"target": "content-footer", 
				"title": "A hatósági közvetítés (mediáció)", 
				"cls": "web-content-info",
				"html": "A hatóság közvetítőt vehet igénybe a hatóság és az ügyfél, valamint az ellenérdekű felek közötti vita rendezésére. (2004. évi CXL.tv. 41.§) Ha szeretné a vitarendezés, a megoldáskeresés  célhoz vezető módját, igényelje hatósági közvetítő kirendelését a közigazgatási szervtől."
			 }, {
				"lang": "ru-RU", 
				"view": "kiszamithatosag", 
				"target": "content-footer", 
				"title": "On-line ügyvéd", 
				"cls": "web-content-info",
				"html": "A hagyományos ügyvéd-ügyfél kapcsolaton, az iroda-látogatáson kívül az Internet lehetőséget teremt az on-line jogi munkára. Az iroda készen áll a megfelelésre, jelezze szándékát!"
			 }, {
				"lang": "ru-RU", 
				"view": "all", 
				"target": "footer", 
				"html": "<hr />"
			 }, {
				"lang": "ru-RU", 
				"view": "all", 
				"target": "footer", 
				"html": "&copy;&nbsp;<a href=\"mailto:drnagymatyas@2012\">dr. Nagy Mátyás</a>, 2012-2013"
			 }, {
				"lang": "ru-RU", 
				"view": "kapcsolat", 
				"target": "content-footer", 
				"cls": "web-content-info",
				"clsContainer": "x-container-contact-img",
				"html": "<img src=\"img/mail.png\" alt=\"üzenet\"/>"
			 }, {
				"lang": "ru-RU", 
				"view": "kapcsolat", 
				"target": "content-footer", 
				"title": "Ha levelet írna:", 
				"cls": "web-content-info",
				"clsContainer": "x-container-contact"
			 }, {
				"lang": "ru-RU", 
				"view": "kapcsolat", 
				"target": "content-footer", 
				"title": "Az iroda elérhetősége:", 
				"cls": "web-content-info",
				"clsContainer": "x-container-contact-office",
				"name": "office-contact"
			 },
			 
			 {
				"lang": "sk-SK", 
				"view": "home", 
				"target": "content", 
				"title": "Tisztelt Érdeklődő!", 
				"cls": "web-content-data",
				"html": "A Bács-Kiskun Megyei Ügyvédi Kamara (6000 Kecskemét, Bercsényi u. 15. telefon/fax: 76/484-909 www.bacskiskunmegyeiugyvedikamara.hu) tagja vagyok. Nyilvántartási számom 226.<br />Adószámom: 50231928-1-23<br />Bank: K&H 10402513-50526671-52871001<br /><br />Hatósági  közvetítő és igénybe vehető jogi segítő / pártfogó ügyvéd is vagyok."
			 }, {
				"lang": "sk-SK", 
				"view": "home", 
				"target": "content", 
				"title": "Bemutatkozás", 
				"cls": "web-content-info",
				"html": "Baján születtem 1956-ban. A Szegedi Tudományegyetem jogelődjén diplomáztam 1980-ban (cum laude) a szakvizsgát 1989-ben tettem. Szakmai pályámon egy évtizedet dolgoztam olyan mezőgazdasági vállalatnál, ahol a termelés (élelmiszeripar - tartósító-, bor-, üdítő- és szeszipar) mezőgazdaság, kertészet, nehézipar, építőipar, fuvarozás  valamint az innováció szerződési, kereskedelmi, peres, controlling, és vállalatszervezési jogi ügyeiben vehettem részt. További egy évtizedet a jogi képviseleti területen működtem, két szakágon a jogtanácsosi és az ügyvédi területen. Újabb egy évtizedet töltöttem települési önkormányzatoknál (községi szinttől megyei jogú városig) jegyzői munkával, illetve kb. fél évet Budapest egyik kerületében hatósági osztályvezetőként. Tapasztalataim összegzéseként ismét a jogi képviseleti munkaterületen vagyok. Miután az ország számos térségében dolgoztam sokféle munka és emberi kultúrát ismerhettem meg. Örülök, hogy barátja lehetek művészeknek (festőknek, költőknek, íróknak) de elfogadnak a kisebbségek, az etnikum jelesei is, és sok kétkezi munkás is."
			 }, {
				"lang": "sk-SK", 
				"view": "home", 
				"target": "content-footer", 
				"title": "Irodai rövid hírek", 
				"cls": "web-content-info web-line2",
				"name": "multicontent-officenews"
			 }, {
				"lang": "sk-SK", 
				"view": "home", 
				"target": "content-footer", 
				"title": "Jogterületeim", 
				"cls": "web-content-info",
				"html": "Közigazgatási jogterület (pl.: birtokvédelem, építéshatósági eljárás, hagyatéki eljárás, szabálysértés, kereskedelmi-és iparigazgatás, közterület-használat).<br />Ingatlanfejlesztés, ingatlanforgalom.<br />Szerződések, végintézkedések.<br />Polgári, munkajogi, közszolgálati ügyek, perek, peren kívüli eljárások. Környezetvédelmi jog.<br />Társasági jog. Pénzügyi jogi, kereskedelmi jogi ügyek.<br />Szellemi alkotások ügyei.<br />Adójog. Adatvédelmi jog.<br />A fentiekhez kapcsolódó büntetőjogi ügyek.<br />Mediáció, azaz közvetítői eljárás.<br />Üzletviteli tanácsadás, marketing és reklámjog.<br />&nbsp;És sok minden más..."
			 }, {
				"lang": "sk-SK", 
				"view": "home", 
				"target": "content-footer", 
				"title": "Szerintem", 
				"cls": "web-content-info",
				"html": "Ha... rosszat hallasz valakiről, óvakodva hidd el. A hírnek s pletykának gyakran semmi alapja nincs s a legtöbb esetben nagyítva s eltorzítva terjed tovább. Az emberiség általában és az egyes emberek is nem ritkán olyan jók, minők lehetnének s lenniök kellene, de ritkán oly rosszak, minőknek őket a gonosz akaratú rágalom festi. És ha kénytelen vagy is elhinni a hallott tényt, mert valóságán lehetetlen kételkedned, ne ítélj azonnal, ne kárhoztass kíméletlenül. A hír, még ha való is, csak magát a tényt mondja el, s hallgat azon előzményekről, melyeknek talán kényszerítő hatalma a tényt előidézte s melyek a tettet magát gyakran más alakban tüntetik elő. (Deák Ferenctől átvéve.)"
			 }, {
				"lang": "sk-SK", 
				"view": "home", 
				"target": "content-footer", 
				"title": "Hírek", 
				"cls": "web-content-info",
				"name": "multicontent-news"
			 }, {
				"lang": "sk-SK", 
				"view": "all", 
				"target": "footer", 
				"title": "Nyilatkozat:", 
				"cls": "web-content-info",
				"html": "Ezt a honlapot <b>dr. Nagy Mátyás egyéni ügyvéd</b>, a Bács-Kiskun Megyei Ügyvédi Kamarában bejegyzett ügyvéd tartja fenn az ügyvédekre vonatkozó jogszabályok és belső szabályzatok szerint, melyek az ügyféljogokra vonatkozó tájékoztatással együtt a <a href=\"http://www.magyarugyvedikamara.hu\" target=\"_blank\">www.magyarugyvedikamara.hu</a> honlapon találhatók. Ez a honlap nem folytat tudományos kutatást, közvélemény-kutatást, piackutatást, közvetlen üzletszerzést. A web-helyen lévő információk nem tekinthetők tanácsként vagy ajánlásként, és a web-hely nem szolgál semmilyen elhatározás vagy intézkedés alapjául. A Web-hely nem jelentet meg személyes véleményt. A web-hely nem folytat adatkezelést, adatot nem továbbít, és nem hoz nyilvánosságra, az érintett hozzájárulása nélkül. Hozzájárulás: az érintett akaratának önkéntes és határozott kinyilvánítása, amely megfelelő tájékoztatáson alapul, és amellyel félreérthetetlen beleegyezését adja a rá vonatkozó személyes adatok – teljes körű vagy egyes műveletekre kiterjedő – kezeléséhez. (Az információs önrendelkezési jogról és információ-szabadságról szóló 2011. évi CXII. tv.) A web-hely partnereinek egyedi elérésére szolgáló adatát a web-hellyel kapcsolatba lépő által megállapított célból vesszük igénybe. A web-hely által jelzett szakmai tevékenység alapvető szabályait az ügyvédekről szóló, többször módosított 1998.évi XI. tv. tartalmazza."
			 }, {
				"lang": "sk-SK", 
				"view": "all", 
				"target": "footer", 
				"title": "Hasznos&nbsp;linkek:", 
				"name": "multicontent",
				"cls": "web-content-info"
			 }, {
				"lang": "sk-SK", 
				"view": "joggyakorlat",
				"target": "content-head", 
				"title": "Joggyakorlat", 
				"cls": "web-content-info",
				"html": "A személyes találkozóig itt alkalma van a bírói gyakorlat egyes döntéseivel megismerkedni. (A tartalmat időnként cserélem, ha érdeklődésének megfelelt ez az oldal, látogasson ide máskor is.)"
			 }, {
				"lang": "sk-SK", 
				"view": "joggyakorlat", 
				"target": "content-footer", 
				"title": "Beszélgessünk", 
				"cls": "web-content-info",
				"html": "Az egyéni ügyvédi iroda előzmény nélkül alakult. Aki elolvassa a bemutatkozásom, meglepődhet, miért ez a szakmai változatosság, az újra kezdés, és újrakezdés? Első munkahelyem a demokratikus fordulat (rendszerváltás) során megszünt. Illetve abban a  záró folyamatban már kerestem a személyes szakmai megpróbáltatásom útjait, s előbb jogtanácsosi irodát, majd ügyvédi irodát később egyéni ügyvédi irodát, végül ismét jogtanácsosi irodát szerveztem/szerveztünk. A múlt század végén a Kamara úgy látta jónak, ha más területen akklimatizálódok. Ekkor váltottam a köz szolgálatára. Érdemes volt. A közösség új dimenziókat nyitott a felelősség-vállalásban, a sorsok kezelésében, a tartalom gazdagságában, a joggyakorlati élmények tárházában. Szeretném, ha hozzá tudnék járulni az itt olvasott jogi információkkal a jogi gondolkozáshoz.<br />Várom az olvasók észrevételeit, leveleit, kérdéseit!"
			 }, {
				"lang": "sk-SK", 
				"view": "joggyakorlat", 
				"target": "content-footer", 
				"title": "Közérdekű kérdések:", 
				"cls": "web-content-info",
				"name": "jog-faq-questions"
			 }, {
				"lang": "sk-SK", 
				"view": "joggyakorlat", 
				"target": "content-footer", 
				"title": "Válaszok:", 
				"cls": "web-content-info",
				"name": "jog-faq-answers"
			 }, {
				"lang": "sk-SK", 
				"view": "kiszamithatosag", 
				"target": "content", 
				"title": "Kiszámíthatóság", 
				"cls": "web-content-info info-gray",
				"html": "Az ügyvédi iroda áttekinthető, világos, követhető díjakat és költségelszámolást alkalmaz. A jogi segítői (illetve a pártfogó ügyvédi díj jogszabály által meghatározott és az állam fizeti a legtöbb esetben). Fontos ellenben a hatósági közvetítői tevékenységi kör (a költségviselőt és mértékét a kijelölő hatóság tudja megbecsülni). A törzsügyfelek számára 50%-ig terjedő kedvezmény lehetséges. A tényállás felvétele, azaz a beszélgetés az ügy megismeréséről, az ügyfél-ügyvéd kommunikáció, és még sok minden nem számít a díjazásba, azaz ingyenes."
			 }, {
				"lang": "sk-SK", 
				"view": "kiszamithatosag", 
				"target": "content", 
				"title": "", 
				"cls": "web-content-price",
				"clsContainer": "x-container-price",
				"name": "price"
			 }, {
				"lang": "sk-SK", 
				"view": "kiszamithatosag", 
				"target": "content", 
				"title": "", 
				"cls": "web-content-category",
				"clsContainer": "x-container-category",
				"name": "category"
			 }, {
				"lang": "sk-SK", 
				"view": "kiszamithatosag", 
				"target": "content", 
				"title": "", 
				"cls": "web-content-info",
				"html": "Mindegyik ügyfél iratához önálló időráfordítás-kimutatás és díjjegyzék csatlakozik."
			 }, {
				"lang": "sk-SK", 
				"view": "kiszamithatosag", 
				"target": "content-footer", 
				"title": "", 
				"cls": "web-content-info",
				"html": "<img src=\"img/egyuttmukodes.jpg\" style=\"border-radius: 3px; box-shadow: 11px 1px 33px #000000;\" alt=\"együttműködés\"/>"
			 }, {
				"lang": "sk-SK", 
				"view": "kiszamithatosag", 
				"target": "content-footer", 
				"title": "\"Nép ügyvédje\"-Jogi segítő", 
				"cls": "web-content-info",
				"html": "A jogi segítség a 2003. évi LXXX.tv. szerinti jogi szolgáltatásokat jelenti, aminek ügyvédi költségét az állam fizeti az ügyfél helyett, vagy megelőlegezi az ügyfél javára.<br /><h3>dr. Nagy Mátyás jogi segítő.</h3><a href=\"http://www.kimisz.gov.hu\" target:\"_blank\" style=\"font-weight:normal;\">www.kimisz.gov.hu</a><br />Kérjen tájékoztatót  elérhetőségeim egyikén."
			 }, {
				"lang": "sk-SK", 
				"view": "kiszamithatosag", 
				"target": "content-footer", 
				"title": "Prezentációs tanácsadás", 
				"cls": "web-content-info",
				"html": "Az iroda előadás keretében kivetítéses szemléltetéssel kisebb-nagyobb csoportok számára tart jogi elméleti és gyakorlati ismeretterjesztést. Az időszerű rendezvényekről a honlapon, de kérésre e-meilben is tájékoztatjuk az érdeklődőket.<br /><br />Soron következő rendezvényünk:"
			 }, {
				"lang": "sk-SK", 
				"view": "kiszamithatosag", 
				"target": "content-footer", 
				"title": "Együttműködés", 
				"cls": "web-content-info",
				"html": "A jogi képviselet, a tanácsadás, vagy egyéb ügyvédi munka személyre szóló feladat. Készek vagyunk azonban együttműködni mindazon szakemberekkel, akik előmozdítják a sikert. ne feledje a megbízását előkészíteni az együttműködésre kiterjedő javaslataival."
			 }, {
				"lang": "sk-SK", 
				"view": "kiszamithatosag", 
				"target": "content-footer", 
				"title": "A hatósági közvetítés (mediáció)", 
				"cls": "web-content-info",
				"html": "A hatóság közvetítőt vehet igénybe a hatóság és az ügyfél, valamint az ellenérdekű felek közötti vita rendezésére. (2004. évi CXL.tv. 41.§) Ha szeretné a vitarendezés, a megoldáskeresés  célhoz vezető módját, igényelje hatósági közvetítő kirendelését a közigazgatási szervtől."
			 }, {
				"lang": "sk-SK", 
				"view": "kiszamithatosag", 
				"target": "content-footer", 
				"title": "On-line ügyvéd", 
				"cls": "web-content-info",
				"html": "A hagyományos ügyvéd-ügyfél kapcsolaton, az iroda-látogatáson kívül az Internet lehetőséget teremt az on-line jogi munkára. Az iroda készen áll a megfelelésre, jelezze szándékát!"
			 }, {
				"lang": "sk-SK", 
				"view": "all", 
				"target": "footer", 
				"html": "<hr />"
			 }, {
				"lang": "sk-SK", 
				"view": "all", 
				"target": "footer", 
				"html": "&copy;&nbsp;<a href=\"mailto:drnagymatyas@2012\">dr. Nagy Mátyás</a>, 2012-2013"
			 }, {
				"lang": "sk-SK", 
				"view": "kapcsolat", 
				"target": "content-footer", 
				"cls": "web-content-info",
				"clsContainer": "x-container-contact-img",
				"html": "<img src=\"img/mail.png\" alt=\"üzenet\"/>"
			 }, {
				"lang": "sk-SK", 
				"view": "kapcsolat", 
				"target": "content-footer", 
				"title": "Ha levelet írna:", 
				"cls": "web-content-info",
				"clsContainer": "x-container-contact"
			 }, {
				"lang": "sk-SK", 
				"view": "kapcsolat", 
				"target": "content-footer", 
				"title": "Az iroda elérhetősége:", 
				"cls": "web-content-info",
				"clsContainer": "x-container-contact-office",
				"name": "office-contact"
			 },
			 
			 {
				"lang": "sr-SR", 
				"view": "home", 
				"target": "content", 
				"title": "Tisztelt Érdeklődő!", 
				"cls": "web-content-data",
				"html": "A Bács-Kiskun Megyei Ügyvédi Kamara (6000 Kecskemét, Bercsényi u. 15. telefon/fax: 76/484-909 www.bacskiskunmegyeiugyvedikamara.hu) tagja vagyok. Nyilvántartási számom 226.<br />Adószámom: 50231928-1-23<br />Bank: K&H 10402513-50526671-52871001<br /><br />Hatósági  közvetítő és igénybe vehető jogi segítő / pártfogó ügyvéd is vagyok."
			 }, {
				"lang": "sr-SR", 
				"view": "home", 
				"target": "content", 
				"title": "Bemutatkozás", 
				"cls": "web-content-info",
				"html": "Baján születtem 1956-ban. A Szegedi Tudományegyetem jogelődjén diplomáztam 1980-ban (cum laude) a szakvizsgát 1989-ben tettem. Szakmai pályámon egy évtizedet dolgoztam olyan mezőgazdasági vállalatnál, ahol a termelés (élelmiszeripar - tartósító-, bor-, üdítő- és szeszipar) mezőgazdaság, kertészet, nehézipar, építőipar, fuvarozás  valamint az innováció szerződési, kereskedelmi, peres, controlling, és vállalatszervezési jogi ügyeiben vehettem részt. További egy évtizedet a jogi képviseleti területen működtem, két szakágon a jogtanácsosi és az ügyvédi területen. Újabb egy évtizedet töltöttem települési önkormányzatoknál (községi szinttől megyei jogú városig) jegyzői munkával, illetve kb. fél évet Budapest egyik kerületében hatósági osztályvezetőként. Tapasztalataim összegzéseként ismét a jogi képviseleti munkaterületen vagyok. Miután az ország számos térségében dolgoztam sokféle munka és emberi kultúrát ismerhettem meg. Örülök, hogy barátja lehetek művészeknek (festőknek, költőknek, íróknak) de elfogadnak a kisebbségek, az etnikum jelesei is, és sok kétkezi munkás is."
			 }, {
				"lang": "sr-SR", 
				"view": "home", 
				"target": "content-footer", 
				"title": "Irodai rövid hírek", 
				"cls": "web-content-info web-line2",
				"name": "multicontent-officenews"
			 }, {
				"lang": "sr-SR", 
				"view": "home", 
				"target": "content-footer", 
				"title": "Jogterületeim", 
				"cls": "web-content-info",
				"html": "Közigazgatási jogterület (pl.: birtokvédelem, építéshatósági eljárás, hagyatéki eljárás, szabálysértés, kereskedelmi-és iparigazgatás, közterület-használat).<br />Ingatlanfejlesztés, ingatlanforgalom.<br />Szerződések, végintézkedések.<br />Polgári, munkajogi, közszolgálati ügyek, perek, peren kívüli eljárások. Környezetvédelmi jog.<br />Társasági jog. Pénzügyi jogi, kereskedelmi jogi ügyek.<br />Szellemi alkotások ügyei.<br />Adójog. Adatvédelmi jog.<br />A fentiekhez kapcsolódó büntetőjogi ügyek.<br />Mediáció, azaz közvetítői eljárás.<br />Üzletviteli tanácsadás, marketing és reklámjog.<br />&nbsp;És sok minden más..."
			 }, {
				"lang": "sr-SR", 
				"view": "home", 
				"target": "content-footer", 
				"title": "Szerintem", 
				"cls": "web-content-info",
				"html": "Ha... rosszat hallasz valakiről, óvakodva hidd el. A hírnek s pletykának gyakran semmi alapja nincs s a legtöbb esetben nagyítva s eltorzítva terjed tovább. Az emberiség általában és az egyes emberek is nem ritkán olyan jók, minők lehetnének s lenniök kellene, de ritkán oly rosszak, minőknek őket a gonosz akaratú rágalom festi. És ha kénytelen vagy is elhinni a hallott tényt, mert valóságán lehetetlen kételkedned, ne ítélj azonnal, ne kárhoztass kíméletlenül. A hír, még ha való is, csak magát a tényt mondja el, s hallgat azon előzményekről, melyeknek talán kényszerítő hatalma a tényt előidézte s melyek a tettet magát gyakran más alakban tüntetik elő. (Deák Ferenctől átvéve.)"
			 }, {
				"lang": "sr-SR", 
				"view": "home", 
				"target": "content-footer", 
				"title": "Hírek", 
				"cls": "web-content-info",
				"name": "multicontent-news"
			 }, {
				"lang": "sr-SR", 
				"view": "all", 
				"target": "footer", 
				"title": "Nyilatkozat:", 
				"cls": "web-content-info",
				"html": "Ezt a honlapot <b>dr. Nagy Mátyás egyéni ügyvéd</b>, a Bács-Kiskun Megyei Ügyvédi Kamarában bejegyzett ügyvéd tartja fenn az ügyvédekre vonatkozó jogszabályok és belső szabályzatok szerint, melyek az ügyféljogokra vonatkozó tájékoztatással együtt a <a href=\"http://www.magyarugyvedikamara.hu\" target=\"_blank\">www.magyarugyvedikamara.hu</a> honlapon találhatók. Ez a honlap nem folytat tudományos kutatást, közvélemény-kutatást, piackutatást, közvetlen üzletszerzést. A web-helyen lévő információk nem tekinthetők tanácsként vagy ajánlásként, és a web-hely nem szolgál semmilyen elhatározás vagy intézkedés alapjául. A Web-hely nem jelentet meg személyes véleményt. A web-hely nem folytat adatkezelést, adatot nem továbbít, és nem hoz nyilvánosságra, az érintett hozzájárulása nélkül. Hozzájárulás: az érintett akaratának önkéntes és határozott kinyilvánítása, amely megfelelő tájékoztatáson alapul, és amellyel félreérthetetlen beleegyezését adja a rá vonatkozó személyes adatok – teljes körű vagy egyes műveletekre kiterjedő – kezeléséhez. (Az információs önrendelkezési jogról és információ-szabadságról szóló 2011. évi CXII. tv.) A web-hely partnereinek egyedi elérésére szolgáló adatát a web-hellyel kapcsolatba lépő által megállapított célból vesszük igénybe. A web-hely által jelzett szakmai tevékenység alapvető szabályait az ügyvédekről szóló, többször módosított 1998.évi XI. tv. tartalmazza."
			 }, {
				"lang": "sr-SR", 
				"view": "all", 
				"target": "footer", 
				"title": "Hasznos&nbsp;linkek:", 
				"name": "multicontent",
				"cls": "web-content-info"
			 }, {
				"lang": "sr-SR", 
				"view": "joggyakorlat",
				"target": "content-head", 
				"title": "Joggyakorlat", 
				"cls": "web-content-info",
				"html": "A személyes találkozóig itt alkalma van a bírói gyakorlat egyes döntéseivel megismerkedni. (A tartalmat időnként cserélem, ha érdeklődésének megfelelt ez az oldal, látogasson ide máskor is.)"
			 }, {
				"lang": "sr-SR", 
				"view": "joggyakorlat", 
				"target": "content-footer", 
				"title": "Beszélgessünk", 
				"cls": "web-content-info",
				"html": "Az egyéni ügyvédi iroda előzmény nélkül alakult. Aki elolvassa a bemutatkozásom, meglepődhet, miért ez a szakmai változatosság, az újra kezdés, és újrakezdés? Első munkahelyem a demokratikus fordulat (rendszerváltás) során megszünt. Illetve abban a  záró folyamatban már kerestem a személyes szakmai megpróbáltatásom útjait, s előbb jogtanácsosi irodát, majd ügyvédi irodát később egyéni ügyvédi irodát, végül ismét jogtanácsosi irodát szerveztem/szerveztünk. A múlt század végén a Kamara úgy látta jónak, ha más területen akklimatizálódok. Ekkor váltottam a köz szolgálatára. Érdemes volt. A közösség új dimenziókat nyitott a felelősség-vállalásban, a sorsok kezelésében, a tartalom gazdagságában, a joggyakorlati élmények tárházában. Szeretném, ha hozzá tudnék járulni az itt olvasott jogi információkkal a jogi gondolkozáshoz.<br />Várom az olvasók észrevételeit, leveleit, kérdéseit!"
			 }, {
				"lang": "sr-SR", 
				"view": "joggyakorlat", 
				"target": "content-footer", 
				"title": "Közérdekű kérdések:", 
				"cls": "web-content-info",
				"name": "jog-faq-questions"
			 }, {
				"lang": "sr-SR", 
				"view": "joggyakorlat", 
				"target": "content-footer", 
				"title": "Válaszok:", 
				"cls": "web-content-info",
				"name": "jog-faq-answers"
			 }, {
				"lang": "sr-SR", 
				"view": "kiszamithatosag", 
				"target": "content", 
				"title": "Kiszámíthatóság", 
				"cls": "web-content-info info-gray",
				"html": "Az ügyvédi iroda áttekinthető, világos, követhető díjakat és költségelszámolást alkalmaz. A jogi segítői (illetve a pártfogó ügyvédi díj jogszabály által meghatározott és az állam fizeti a legtöbb esetben). Fontos ellenben a hatósági közvetítői tevékenységi kör (a költségviselőt és mértékét a kijelölő hatóság tudja megbecsülni). A törzsügyfelek számára 50%-ig terjedő kedvezmény lehetséges. A tényállás felvétele, azaz a beszélgetés az ügy megismeréséről, az ügyfél-ügyvéd kommunikáció, és még sok minden nem számít a díjazásba, azaz ingyenes."
			 }, {
				"lang": "sr-SR", 
				"view": "kiszamithatosag", 
				"target": "content", 
				"title": "", 
				"cls": "web-content-price",
				"clsContainer": "x-container-price",
				"name": "price"
			 }, {
				"lang": "sr-SR", 
				"view": "kiszamithatosag", 
				"target": "content", 
				"title": "", 
				"cls": "web-content-category",
				"clsContainer": "x-container-category",
				"name": "category"
			 }, {
				"lang": "sr-SR", 
				"view": "kiszamithatosag", 
				"target": "content", 
				"title": "", 
				"cls": "web-content-info",
				"html": "Mindegyik ügyfél iratához önálló időráfordítás-kimutatás és díjjegyzék csatlakozik."
			 }, {
				"lang": "sr-SR", 
				"view": "kiszamithatosag", 
				"target": "content-footer", 
				"title": "", 
				"cls": "web-content-info",
				"html": "<img src=\"img/egyuttmukodes.jpg\" style=\"border-radius: 3px; box-shadow: 11px 1px 33px #000000;\" alt=\"együttműködés\"/>"
			 }, {
				"lang": "sr-SR", 
				"view": "kiszamithatosag", 
				"target": "content-footer", 
				"title": "\"Nép ügyvédje\"-Jogi segítő", 
				"cls": "web-content-info",
				"html": "A jogi segítség a 2003. évi LXXX.tv. szerinti jogi szolgáltatásokat jelenti, aminek ügyvédi költségét az állam fizeti az ügyfél helyett, vagy megelőlegezi az ügyfél javára.<br /><h3>dr. Nagy Mátyás jogi segítő.</h3><a href=\"http://www.kimisz.gov.hu\" target:\"_blank\" style=\"font-weight:normal;\">www.kimisz.gov.hu</a><br />Kérjen tájékoztatót  elérhetőségeim egyikén."
			 }, {
				"lang": "sr-SR", 
				"view": "kiszamithatosag", 
				"target": "content-footer", 
				"title": "Prezentációs tanácsadás", 
				"cls": "web-content-info",
				"html": "Az iroda előadás keretében kivetítéses szemléltetéssel kisebb-nagyobb csoportok számára tart jogi elméleti és gyakorlati ismeretterjesztést. Az időszerű rendezvényekről a honlapon, de kérésre e-meilben is tájékoztatjuk az érdeklődőket.<br /><br />Soron következő rendezvényünk:"
			 }, {
				"lang": "sr-SR", 
				"view": "kiszamithatosag", 
				"target": "content-footer", 
				"title": "Együttműködés", 
				"cls": "web-content-info",
				"html": "A jogi képviselet, a tanácsadás, vagy egyéb ügyvédi munka személyre szóló feladat. Készek vagyunk azonban együttműködni mindazon szakemberekkel, akik előmozdítják a sikert. ne feledje a megbízását előkészíteni az együttműködésre kiterjedő javaslataival."
			 }, {
				"lang": "sr-SR", 
				"view": "kiszamithatosag", 
				"target": "content-footer", 
				"title": "A hatósági közvetítés (mediáció)", 
				"cls": "web-content-info",
				"html": "A hatóság közvetítőt vehet igénybe a hatóság és az ügyfél, valamint az ellenérdekű felek közötti vita rendezésére. (2004. évi CXL.tv. 41.§) Ha szeretné a vitarendezés, a megoldáskeresés  célhoz vezető módját, igényelje hatósági közvetítő kirendelését a közigazgatási szervtől."
			 }, {
				"lang": "sr-SR", 
				"view": "kiszamithatosag", 
				"target": "content-footer", 
				"title": "On-line ügyvéd", 
				"cls": "web-content-info",
				"html": "A hagyományos ügyvéd-ügyfél kapcsolaton, az iroda-látogatáson kívül az Internet lehetőséget teremt az on-line jogi munkára. Az iroda készen áll a megfelelésre, jelezze szándékát!"
			 }, {
				"lang": "sr-SR", 
				"view": "all", 
				"target": "footer", 
				"html": "<hr />"
			 }, {
				"lang": "sr-SR", 
				"view": "all", 
				"target": "footer", 
				"html": "&copy;&nbsp;<a href=\"mailto:drnagymatyas@2012\">dr. Nagy Mátyás</a>, 2012-2013"
			 }, {
				"lang": "sr-SR", 
				"view": "kapcsolat", 
				"target": "content-footer", 
				"cls": "web-content-info",
				"clsContainer": "x-container-contact-img",
				"html": "<img src=\"img/mail.png\" alt=\"üzenet\"/>"
			 }, {
				"lang": "sr-SR", 
				"view": "kapcsolat", 
				"target": "content-footer", 
				"title": "Ha levelet írna:", 
				"cls": "web-content-info",
				"clsContainer": "x-container-contact"
			 }, {
				"lang": "sr-SR", 
				"view": "kapcsolat", 
				"target": "content-footer", 
				"title": "Az iroda elérhetősége:", 
				"cls": "web-content-info",
				"clsContainer": "x-container-contact-office",
				"name": "office-contact"
			 }
		]
	},
	
	proxy: {
		type: 'memory',
		//url: '/Web/classes/data/articles.json',
		reader: {								
			type: 'json',
			root: 'articles',
			successProperty: 'success'
		}
	}
});