const cards = [
  {
    id: 1,
    category: 1,
    title: "NORFA",
    image: "../img/Norfa.webp",
    description:
      "1. Norfa: Praktiško lietuvio šventovė, kurioje „Norfos kvapas“ yra nemokamas priedas prie pigių dešrelių. Čia šalia duonos gali netyčia nusipirkti meškerę ar betono maišyklę, o pirkėjų aprangos kodas – guminės šlepetės arba kostiumas (nes abiems rūpi nuolaidos).",
    secondImage: "../img/details/image-1.svg",
  },
  {
    id: 2,
    category: 1,
    title: "VICI",
    image: "../img/Vici.webp",
    description:
      "2. Viči – tai krabų lazdelių imperija, įrodžiusi Lietuvai, kad žuvis nebūtinai turi būti matymusi žuvį, jog taptų šventinio stalo pažiba. Tai prekės ženklas, kuris sugebėjo įtikinti visą šalį, jog raudonai dažytas surimis yra geriausias draugas kiaušiniams ir majonezui, o jų „krabų skonio“ gaminiai vandenyje plaukiojo maždaug tiek pat, kiek tavo viltys laimėti loterijoje",
    secondImage: "../img/details/image-2.svg",
  },
  {
    id: 3,
    category: 1,
    title: "AUSROS VARTAI",
    image: "../img/Ausros_Vartai.webp",
    description:
      "3. Aušros vartai – tai vienintelė išlikusi Vilniaus gynybinės sienos dalis, kuri šiandien dirba viršvalandžius kaip dvasinis „Wi-Fi“ ryšys su aukštesnėmis jėgomis. Tai vieta, kur net kiečiausi ateistai staiga pradeda domėtis architektūra ir nusiima kepures, o turistai masiškai blokuoja gatvę bandydami nufotografuoti stebuklingąjį paveikslą taip, lyg tai būtų roko žvaigždė. Trumpai tariant: istorinis vartų „face control’as“, kurį praėjęs pasijauti arba šventesnis, arba tiesiog labai pavargęs nuo kopimo stačiais laiptais.+",
    secondImage: "../img/details/image-3.svg",
  },
  {
    id: 4,
    category: 1,
    title: "TV BOKSTAS",
    image: "../img/TV_Bokstas.webp",
    description:
      "4.Vilniaus TV bokštas – tai aukščiausias Lietuvos „pagaliukas“, kurio pagrindinė funkcija yra ne tik transliuoti televiziją, bet ir gąsdinti žmones su aukščio baime „Paukščių take“. Tai vieta, kur kava kainuoja tiek, kiek jos transportavimas į kosmosą, o žiemą bokštas virsta didžiausia pasaulyje Kalėdų egle, kurią pamatęs supranti, kad tavo girliandos balkone yra tiesiog graudžios. Jei nori pasijusti kaip skraidančioje lėkštėje neišskrisdamas iš Vilniaus – tau čia. ",
    secondImage: "../img/details/image-4.svg",
  },
  {
    id: 5,
    category: 1,
    title: "TRYS KARALIAI SVENTE",
    image: "../img/Trys_Karaliai.webp",
    description:
      "5.Trijų karalių šventė – tai oficialus kalėdinio „maratono“ finišas, kai trys aukšti vyrai su karūnomis ir kreida ateina pranešti, kad tavo eglutė jau oficialiai tapo priešgaisriniu pavojumi ir ją laikas tempti į kiemą. Tai diena, kai ant durų užrašomi magiški simboliai +K+M+B, kurie kaimynams signalizuoja, jog čia gyvena dori žmonės, o piktosioms dvasioms – kad šiuose namuose dovanų ir vaišių atsargos jau galutinai išseko.",
    secondImage: "../img/details/image-5.svg",
  },
  {
    id: 6,
    category: 1,
    title: "VARPAS",
    image: "../img/Varpas.webp",
    description:
      "6. „Varpas“ – tai laikraštis, kuris buvo toks „kietas“, kad jį skaityti XIX a. pabaigoje buvo beveik tas pats, kas dabar turėti nelegalų prisijungimą prie slapto opozicijos serverio. Vinco Kudirkos „vairuojamas“ leidinys mokė lietuvius ne tik mylėti tėvynę, bet ir meistriškai slapstytis nuo caro policijos, nes rasti jį savo namuose buvo garantuotas bilietas į nemokamą kelionę po Sibiro kurortus. Tai buvo pagrindinis šalies „influenceris“, kuris skambino taip garsiai, kad pažadino tautą iš miego, nors oficialiai tuo metu mes visi turėjome kalbėti ir skaityti tik rusiškai.",
    secondImage: "../img/details/image-6.svg",
  },
  {
    id: 7,
    category: 1,
    title: "GEDIMINO STULPAS",
    image: "../img/Stulpai_Gedimino.webp",
    description:
      "7. Gedimino stulpai – tai bene seniausias lietuviškas „logotipas“, kuris atrodo kaip stilizuoti vartai arba labai piktas geometrinis „šakutės“ variantas. Viduramžiais jie puošė valdovų monetas ir skydus, o šiandien tai pagrindinis simbolis, kurį kiekvienas lietuvis bando lygiai nupiešti mokyklos sąsiuvinio paraštėse (ir dažniausiai bent vienas stulpas išeina kreivas). Tai ženklas, kuris bet kuriam daiktui suteikia +50 taškų prie patriotiškumo ir automatiškai praneša priešams, kad čia geriau nesikišti, nes mūsų protėviai su šiuo ženklu sėkmingai „geimino“ visoje Europoje.",
    secondImage: "../img/details/image-7.svg",
  },
  {
    id: 8,
    category: 1,
    title: "MARTYNAS MAZVYDAS",
    image: "../img/Mažvydas_.webp",
    description:
      "8. Martynas Mažvydas – tai vyras, kuris sugalvojo patį efektyviausią visų laikų „marketingo šūkį“ apie brolius, seseris ir skaitymą, taip visiems laikams įrašydamas savo vardą į kiekvieną lietuvių kalbos vadovėlį. Nors didžiąją gyvenimo dalį jis praleido Karaliaučiuje dirbdamas kunigu ir kovodamas su parapijiečių polinkiu į pagoniškus burtus, jo tikroji supergalia buvo užsispyrimas standartizuoti kalbą, kurią iki tol visi vartojo kaip kas norėjo. Mažvydas buvo savotiškas XVI amžiaus nuomonės formuotojas, kuris suprato: jei nori išlikti istorijoje, turi ne tik kalbėti, bet ir palikti tai popieriuje, todėl jis tapo mūsų raštijos krikštatėviu, be kurio dabar turbūt neturėtume nei nosinių raidžių, nei preteksto švęsti spaudos atgavimo dienų.",
    secondImage: "../img/details/image-8.svg",
  },
  {
    id: 9,
    category: 1,
    title: "VĖLINĖS",
    image: "../img/Jonines.webp",
    description:
      "9. Vėlinės – tai nacionalinė „vaškinių varžybų“ diena, kai visa Lietuva sėda į automobilius, kad sukurtų didžiausią pasaulyje spūstį kelyje į kapines. Tai laikas, kai rami amžinojo poilsio vieta pavirsta į lazerių ir fejerverkų šou lėtesniu režimu, o pagrindinis tikslas – uždegti tiek žvakių, kad tavo giminės kapas būtų matomas iš kosmoso geriau nei kaimyno. Tai vienintelė naktis metuose, kai kapinės atrodo jaukiau už tavo kambarį, o gyvieji rimtais veidais aptarinėja, kieno chrizantemos šiemet vešlesnės ir kieno vaškas ant paminklo nuvarvėjo „neestetiškai“.",
    secondImage: "../img/details/image-9.svg",
  },
  {
    id: 10,
    category: 1,
    title: "IKI",
    image: "../img/iki.webp",
    description:
      "10. Iki: Parduotuvė tiems, kurie jaučiasi šiek tiek „prie meno“ arba tiesiog neturi kantrybės eilėse. Čia tave pasitinka kalbančios savitarnos kasos, kurios visada įtaria, kad vagi bandelę, ir nuolatinė drama dėl to, ar pavyks rasti nors vieną darbuotoją salėje, kuris nebūtų užsiėmęs geltonų kainų klijavimu.",
    secondImage: "../img/details/image-10.svg",
  },
  {
    id: 11,
    category: 2,
    title: "JONINĖS",
    image: "../img/Jonines-1.webp",
    description:
      "11. Joninės – tai didžiausias vasaros „išgyvenimo žaidimas“, kurio metu lietuviai masiškai bėga į miškus ieškoti mistinio paparčio žiedo, nors visi puikiai žino, kad ras tik uodų armiją ir rytojaus galvos skausmą. Pagrindinės taisyklės paprastos: turi peršokti per laužą nepadegdamas savo šventinių šortų, nupinti vainiką, kuris neatrodo kaip nupešta vanta, ir išlikti budriam iki saulėtekio, kol visi Jonas ir Janinos bando įrodyti, kad švęsti vardadienį yra svarbiau nei turėti sveiką kepenų funkciją.",
    secondImage: "../img/details/image-11.svg",
  },
  {
    id: 12,
    category: 2,
    title: "AUDIMAS",
    image: "../img/Audimas.webp",
    description:
      "12. Audimas – tai prekės ženklas, kuris kiekvieną lietuvį paverčia „profesionaliu sportininku“, bent jau kol jis eina iki šiukšlių konteinerio ar parduotuvės. Tai oficiali Lietuvos patriotų uniforma: jei matai žmogų su tamsiai mėlynu džemperiu ir užrašu „Lietuva“, žinok – jis arba ruošiasi olimpinėms žaidynėms, arba tiesiog labai mėgsta kokybišką trikotažą, kuris nesusidėvi net po dešimties metų intensyvaus gulėjimo ant sofos. Tai drabužiai, kurie geriausiai atrodo fone prie gintarinių suvenyrų ar oro uosto išvykimo vartų, pranešant pasauliui: „Taip, aš iš ten, kur krepšinis yra religija, o Audimas – mūsų liturginis apdaras.“",
    secondImage: "../img/details/image-12.svg",
  },
  {
    id: 13,
    category: 2,
    title: "MEDUOLIAI",
    image: "../img/Meduoliai.webp",
    description:
      "13. Meduoliai – tai tie rudi, kieti „akmenukai“, kurie oficialiai skaitosi konditerijos gaminys, bet neoficialiai gali būti naudojami kaip statybinė medžiaga ar ginklas savigynai. Jų pagrindinė užduotis – patikrinti tavo dantų stiprumą ir užtikrinti, kad be stiklinės pieno ar arbatos tavo gerklė tiesiog pasiduotų. Tai desertas, kuris Lietuvos močiučių spintelėse gali gulėti nuo praėjusio tūkstantmečio ir vis tiek išlaikyti tą patį „šviežią“ skonį bei gebėjimą sulaužyti bet kokį modernų odontologo darbą.",
    secondImage: "../img/details/image-13.svg",
  },
  {
    id: 14,
    category: 2,
    title: " GEDIMINAS ",
    image: "../img/Gediminas.webp",
    description:
      "14. Gediminas – tai tas vyrukas iš 50 litų banknoto (ilsėkis ramybėje), kuris turėjo labai keistų sapnų apie geležinius vilkus, bet užuot nuėjęs pas psichoterapeutą, nusprendė įkurti Vilnių. Jis buvo pirmasis Lietuvos „viešųjų ryšių“ specialistas: išsiuntinėjo laiškus visai Europai kviesdamas amatininkus atvykti, pažadėjęs jiems mažus mokesčius ir religinę laisvę – iš esmės sukūrė viduramžių „Silicon Valley“ pelkėtoje vietovėje. Jei ne jo sapnas ir tas triukšmingas vilkas, dabar sostinėje turbūt ganytume avis, o ne stovėtume kamščiuose prie šviesoforų.",
    secondImage: "../img/details/image-14.svg",
  },
  {
    id: 15,
    category: 2,
    title: " PILIES PASAKA ",
    image: "../img/Pasaka.webp",
    description:
      "15. „Pilies pasaka“ – tai paveikslas, kuriame Mikalojus Konstantinas Čiurlionis parodė, kad sapnuoti galima ir be specialiųjų efektų. Jame pavaizduota pilis ant milžiniško kalno, kuri atrodo taip nerealiai, jog šiuolaikinis nekilnojamojo turto agentas ją parduotų kaip „aukščiausios klasės loftą su debesuota kaimynyste“. Tai meno kūrinys, priverčiantis tave jaustis taip, lyg būtum pametęs akinius arba tiesiog per ilgai žiūrėjęs į saulėlydį: viskas magiška, trapia ir šiek tiek primena tavo bandymus vaikystėje pastatyti smėlio pilį, kurią tuoj nuplaus banga. Tai oficialus įrodymas, kad lietuvių fantazija neturi ribų, net jei pilis stovi ten, kur logiška būtų tik helikopterių aikštelė.",
    secondImage: "../img/details/image-15.svg",
  },
  {
    id: 16,
    category: 2,
    title: "KAKĖ MAKĖ",
    image: "../img/Kake_Make.webp",
    description:
      "16. Kakė Makė – tai mergaitė, kuri sėkmingai įvedė diktatūrą Lietuvos šeimose ir privertė tėvus patikėti, kad Netvarkos nykštukas yra tikresnis už mokesčių inspektorių. Ji yra pagrindinė priežastis, kodėl šiuolaikiniai vaikai bijo valytis dantis be specialios dainelės, ir kodėl kiekvienas namų kampas yra nuklotas jos prekės ženklo produkcija – nuo sauskelnių iki koldūnų. Tai herojė, kuri moko vaikus tvarkytis, nors pati dažniausiai baigia istoriją su dar didesniu chaosu ir moraline pergale prieš pavargusius suaugusiuosius.",
    secondImage: "../img/details/image-16.svg",
  },
  {
    id: 17,
    category: 2,
    title: "ŽAGARĖLIAI",
    image: "../img/zagarelis.webp",
    description:
      "17. Žagarėliai – tai konditerinis „origamis“ iš tešlos, kurio pagrindinė sudėtis yra oras, riebalai ir tiek cukraus pudros, kad po pirmo kąsnio atrodai kaip ką tik grįžęs iš miltų fabriko avarijos. Tai desertas-apgaulė: lėkštė atrodo pilna iki viršaus, bet suvalgęs dešimt vienetų vis tiek jautiesi tuščiu skrandžiu, tik tavo tamsūs marškiniai jau negrįžtamai paženklinti „baltuoju palikimu“. Tai oficialus močiučių ginklas prieš dietas, geriausiai tinkantis apkalboms prie arbatos, kol traškėjimas užgožia kaimynų televizorių.",
    secondImage: "../img/details/image-17.svg",
  },
  {
    id: 18,
    category: 2,
    title: "TAUTINĖS JUOSTOS",
    image: "../img/TautJuosta.webp",
    description:
      "18. Tautinės juostos – tai lietuviškas „QR kodas“ iš senovės, kuriame mūsų protėviai užkodavo viską: nuo derliaus prognozių iki apsaugos nuo piktų kaimynų akių. Tai spalvingi vilnos ir lino labirintai, kurie tarnavo kaip universalus aksesuaras: jomis rišdavo viską – nuo kūdikio vystyklų iki krepšinio sirgaliaus kaktos ar garbingo jubiliejaus jubiliato pilvo. Jei nemoki skaityti raštų, tau tai tiesiog gražus diržas, bet jei esi tikras lietuvis, žinai, kad tie „rombai“ ir „kryžiukai“ prideda +10 balų prie tavo tautinės savivertės ir leidžia pasijusti tikru dvaro ponu net ir dėvint džinsus.",
    secondImage: "../img/details/image-18.svg",
  },
  {
    id: 19,
    category: 2,
    title: "AUŠRA",
    image: "../img/Ausra.webp",
    description:
      "19. „Aušra“ – tai pirmasis lietuviškas laikraštis, kuris 1883 m. pasirodė kaip tikras „pogrindžio internetas“. Kadangi carinė Rusija buvo uždraudusi viską, kas lietuviška, Jono Basanavičiaus redaguotas leidinys turėjo būti gabenamas per sieną knygnešių kelnėse arba dvigubuose dugnuose, todėl kiekvienas puslapis kvepėjo ne tik laisve, bet ir šiek tiek kontrabanda. „Aušra“ suveikė kaip galingas žadintuvas tautai, kuri tuo metu dar snaudė, o jos pagrindinė žinutė buvo: „Ei, mes turim savo kalbą ir istoriją, tad nustokit apsimetinėti kažkuo kitu!“. Tai buvo toks sėkmingas projektas, kad net ir užsidaręs po trejų metų, jis paliko lietuvius su nenumaldomu noru ginčytis politinėmis temomis iki pat šių dienų.",
    secondImage: "../img/details/image-19.svg",
  },
  {
    id: 20,
    category: 2,
    title: "Kryžių kalnas",
    image: "../img/kress.webp",
    description:
      "20. Kryžių kalnas – tai vieta, kurioje „miško“ sąvoka įgauna visai kitą prasmę, nes vietoj medžių čia tankiai sudygę tūkstančiai medinių, metalinių ir plastikinių kryžių. Tai unikalus lietuviškas kantrybės paminklas: sovietai bandė jį lyginti buldozeriais, bet lietuviai per naktį „sodindavo“ kryžius atgal, kol valdžia tiesiog pasidavė prieš tautinį užsispyrimą. Šiandien tai dvasinė „skelbimų lenta“, kurioje kiekvienas turistas palieka po kryželį su viltimi, kad jų prašymas bus išgirstas, o vėjas, barškindamas pakabintus rožinius, sukuria tokį garsą, lyg tūkstantis vaiduoklių bandytų susitarti dėl eilės prie kasos.",
    secondImage: "../img/details/image-20.svg",
  },
  {
    id: 21,
    category: 3,
    title: "Vinted",
    image: "../img/Vinted.webp",
    description:
      "21. Vinted – tai nacionalinė lietuvių „verslumo mokykla“, kurioje tavo penkerius metus spintoje dulkėjęs megztinis staiga tampa „vintažiniu perlu“ už 5 eurus. Tai vieta, kur vyksta aktyvesnės derybos nei turguje, o pirkėjai bando numušti kainą net tada, kai prekė jau beveik nemokama. Pagrindinė pramoga – gauti žinutę „domina mainai?“ ir vėliau siųsti prekę supakuotą į picų dėžę ar šiukšlių maišą, slapta tikintis, kad siuntų terminalas jos nesunaikins. Tai platforma, kuri įrodė: tavo šiukšlės kitam gali būti lobis, kol galiausiai visi tiesiog keičiamės tais pačiais rūbais.",
    secondImage: "../img/details/image-21.svg",
  },
  {
    id: 22,
    category: 3,
    title: "Gandras",
    image: "../img/Gandras.webp",
    description:
      "22. Gandras – tai oficialus Lietuvos „oro linijų“ kapitonas ir nacionalinis kūdikių logistikos specialistas. Lietuvis be gandro sodyboje jaučiasi taip, lyg jo namas neturėtų stogo ar Wi-Fi ryšio: šis paukštis yra geriausias kaimynas, kuris nemoka nuomos, bet užtat sąžiningai išvalo daržą nuo varlių ir gyvačių. Tai vienintelis gyvūnas, kurio garbei turime nacionalinę šventę (Gandrines) ir kuriam ant elektros stulpų statome „penthausus“, tikėdamiesi, kad jis atneš laimę, turtus arba bent jau papildomą šeimos narį. Jei gandras skraido virš tavo namų, ruošk vystyklus; jei stovi ant vienos kojos – jis tiesiog demonstruoja savo jogų lygio ramybę stebėdamas, kaip tu vargsti su bulviakasiniu.",
    secondImage: "../img/details/image-22.svg",
  },
  {
    id: 23,
    category: 3,
    title: "GEDIMINO PILIS",
    image: "../img/Gedimino_Bokštas.webp",
    description:
      "23. Gedimino pilis – tai pagrindinis Lietuvos „bokštas-sargas“, kuris kantriai stovi ant kalno ir stebi, kaip Vilniuje keičiasi mados, valdžios ir barų kainos, o nors iš didingos aukštutinės pilies liko tik vienas vakarinis bokštas, lietuviams jis yra svarbesnis už bet kokį dangoraižį, nes tai mūsų valstybingumo simbolis, kurį pamačius krūtinėje iškart užsidega patriotizmo ugnelė (arba bent jau noras pasidaryti asmenukę). Tai vieta, kurioje kiekvienas turistas pasitikrina savo fizinę formą kopdamas į kalną pėsčiomis, nors yra keltuvas, ir kur vėjas pučia taip stipriai, kad gali nunešti ne tik kepurę, bet ir visas tavo nuodėmes, o kol virš šio oficialaus Vilniaus „viršugalvio“ plevėsuoja trispalvė, tol galime būti ramūs, kad sapnas apie geležinį vilką tęsiasi ir niekas mūsų neprižadins.",
    secondImage: "../img/details/image-23.svg",
  },
  {
    id: 24,
    category: 3,
    title: "MO MOZIJUS",
    image: "../img/MO.webp",
    description:
      "24. MO muziejus – tai modernaus meno oazė Vilniuje, kurią architektai sukūrė taip, kad net jos laiptai atrodo geriau nei daugumos mūsų gyvenamieji kambariai, o pati vieta tapo pagrindiniu tašku tiems, kurie nori pasijusti intelektualais, net jei nesupranta, kodėl tuščia drobė su viena juoda dėme kainuoja daugiau nei jų automobilis. Čia susitinka elitas, hipsteriai ir šeimos su vaikais, o pagrindinė atrakcija dažnai būna ne tik parodos, bet ir bandymas pro milžinišką pastato langą-pjūvį pamatyti miestą kitu kampu arba tiesiog „pasigauti“ gerą kadrą savo socialiniams tinklams, įrodant, kad kultūra tau ne svetima. Tai muziejus, kuris išmokė lietuvius, jog menas neturi būti dulkėtas ar nuobodus, ir kad geriausi atsakymai į klausimus dažniausiai slypi ne paveikslo aprašyme, o tavo paties galvoje po trečio puodelio kavos muziejaus terasoje.",
    secondImage: "../img/details/image-24.svg",
  },
  {
    id: 25,
    category: 3,
    title: "KATEKIZAMAS",
    image: "../img/Katekizmas.webp",
    description:
      "25. Katekizmas – tai pirmoji lietuviška knyga, kurią Martynas Mažvydas 1547 metais išleido ne tam, kad mes turėtume ką veikti per lietuvių kalbos pamokas, o tam, kad pagaliau išmoktume skaityti savo gimtąja kalba ir nustotume bažnyčioje tik spėlioti, ką gieda kunigas. Nors knyga prasideda garsiuoju paraginimu „Broliai seserys, imkit mane ir skaitykit“, ji kartu tapo ir savotišku viduramžių „paskaitų konspektu“, sujungusiu tikėjimą, gramatiką ir pirmąjį lietuvišką elementorių į vieną paketą, kuris amžiams užtvirtino mūsų vietą Europos raštijos žemėlapyje. Tai kultūrinis pamatas, primenantis, kad lietuvių kalba nėra tik močiučių kaimuose turtas, bet galinga jėga, kuri prasidėjo nuo mažos knygelės Karaliaučiuje ir išliko gyva per visus karus, draudimus bei bandymus mus nutildyti.",
    secondImage: "../img/details/image-25.svg",
  },
  {
    id: 26,
    category: 3,
    title: "TAUTINIAI KOSTUMSI",
    image: "../img/TAUTKOST.webp",
    description:
      "26. Tautiniai kostiumai – tai lietuviška „aukštoji mada“ iš praeities, kurioje pagal sijono dryžių plotį ar liemenės spalvą galėjai pasakyti apie žmogų daugiau nei dabar iš jo „LinkedIn“ profilio. Kiekvienas regionas turi savo stiliaus kodus: suvalkietės puošiasi taip, lyg eitų į karališką puotą su gausiais siuvinėjimais, žemaitės sluoksniuoja sijonus lyg ruoštųsi ledynmečiui, o dzūkės demonstruoja smulkiausių raštų kantrybę, kuri priverstų verkti bet kurį šiuolaikinį tekstilės fabriką. Tai drabužis-transformatorius, kuris bet kurį dainų šventės dalyvį akimirksniu paverčia didingu protėvių atstovu, nors po vilnoniais sijonais ir storomis kelnėmis 30 laipsnių karštyje slepiasi tikrasis lietuviškas pasiaukojimas vardan grožio ir tradicijos.",
    secondImage: "../img/details/image-26.svg",
  },
  {
    id: 27,
    category: 3,
    title: "VARŠKĖS SPURGOS",
    image: "../img/SPURGOS.webp",
    description:
      "27. Varškės spurgos – tai auksiniai laimės rutuliukai, kurie įrodo, kad viskas gyvenime tampa geriau, kai yra išverdama aliejuje ir dosniai apibarstoma cukraus pudra. Skirtingai nei jų „amerikietiškos pusseserės“ su skylėmis viduryje, lietuviškos spurgos yra pilnavidurės, purios ir dėl varškės tešloje apgaulingai sukuria sveikumo iliuziją, nors po penktos suvalgytos spurgos tavo sąžinė pradeda garsiai protestuoti. Tai desertas-nenustygėlis, kuris geriausiai tinka šaltoms popietėms, kai norisi kažko šilto, minkšto ir tokio skanaus, kad pirštų aplaižymas tampa privaloma ritualo dalimi, o pudros pėdsakai ant tavo nosies galutinai išduoda, kas slapta ištuštino visą lėkštę.",
    secondImage: "../img/details/image-27.svg",
  },
  {
    id: 28,
    category: 3,
    title: "MALŪNAS",
    image: "../img/MALUNAS.webp",
    description:
      "28. Malūnas – tai senovinis Lietuvos „superkompiuteris“, kuris vėjo ar vandens jėga vertė grūdus miltais, o kaimo žmones – naujausių apkalbų ir naujienų prenumeratoriais. Vėjiniai malūnai, išdidžiai iškėlę savo „sparnus“ lyg bandytų pakilti virš lygumų, tapo neatsiejama peizažo dalimi, o jų viduje vykęs dundėjimas ir girnų akmenų šokis būdavo geriausias ženklas, kad žiemą ant stalo bus duonos. Nors šiandien dauguma jų ilsisi kaip romantiški muziejai, restoranai ar tiesiog vaizdingi griuvėsiai, malūnas išlieka magiška vieta, kurioje, pasak liaudies pasakų, būtinai gyvena velnias, pasiruošęs už naktinę pamainą su tavimi sužaisti kortomis ar bent jau supainioti maišus.",
    secondImage: "../img/details/image-28.svg",
  },
  {
    id: 29,
    category: 3,
    title: "SALOMĖJA NĖRIS",
    image: "../img/SALOMEJA.webp",
    description:
      "29. Salomėja Nėris – tai lietuvių literatūros „lyrinė bomba“, kurios eilėraščiai apie pirmąją meilę ir pavasarį priverčia virpėti net kiečiausias širdis, tačiau jos gyvenimo istorija yra sudėtingesnė už bet kurį meilės romaną. Nors ji tapo poetine tautos ikona, gebėjusia žodžiais nutapyti jautriausius jausmus, jos lemtingas „skrydis“ į Maskvą parvežti „Stalino saulės“ pavertė ją viena labiausiai kontraversiškų asmenybių, dėl kurios istorikai ir moksleiviai ginčijasi iki šiol. Tai moteris-stichija, kurios eilės apie Diemedį ar Eglę žalčių karalienę liko amžina klasika, primenančia, kad talentas ir tragiškos politinės klaidos gali susipinti į tokį mazgą, kurio neįmanoma nei visiškai atrišti, nei tiesiog pamiršti.",
    secondImage: "../img/details/image-29.svg",
  },
  {
    id: 30,
    category: 3,
    title: "MIKALOJUS KONSTANTINAS ČIURLIONIS",
    image: "../img/Čiurlionis_.webp",
    description:
      "30. Mikalojus Konstantinas Čiurlionis – tai Lietuvos genialumo viršūnė ir tikras „multitaskingo“ pradininkas, kuris vienu metu matė spalvas muzikoje ir girdėjo simfonijas savo paveiksluose. Jis nesismulkino piešdamas paprastus natiurmortus, o iškart griebėsi visatos kūrimo, angelų, karalių ir kosminių sonatų, taip sukeldamas lengvą šoką amžininkams, kurie dar nebuvo pasiruošę tokiam psichodeliniam skrydžiui per Zodiako ženklus. Čiurlionis įrodė, kad lietuvis gali būti ne tik artojas, bet ir vizionierius, kurio kūryba skamba lyg kosminis vėjas, o jo palikimas iki šiol verčia mus kelti akis į dangų ir ieškoti ten paslėptų muzikos natų bei paslaptingų karalysčių.",
    secondImage: "../img/details/image-30.svg",
  },
  {
    id: 31,
    category: 4,
    title: "DVARO",
    image: "../img/Dvaro.webp",
    description:
      "31. „Dvaro“ – tai „Pieno žvaigždžių“ sukurtas aristokratiškas pieno produktų prekės ženklas, kuris bando mus įtikinti, kad net ir paprasčiausias sumuštinis su sūriu gali tapti aukštuomenės pokylio dalimi, jei tik ant pakuotės nupieštas prabangus dvaro vaizdas. Tai produkcija tiems, kurie vertina klasikinį skonį ir tą specifinį, riebų „kaip pas močiutę, tik su gražesne etikete“ pojūtį, nesvarbu, ar tai būtų kultinė grietinė, ar sūris, be kurio lietuviškas švenčių stalas atrodo lyg nebaigta statyba. Prekės ženklas meistriškai išnaudoja mūsų nostalgiją prabangiai senovei ir kokybei, paversdamas kasdienį šaldytuvo turinį savotišku „gastronominiu paveldu“, kuris priverčia pasitempti net ir valgant varškę su chalatu virtuvėje.",
    secondImage: "../img/details/image-31.svg",
  },
  {
    id: 32,
    category: 4,
    title: "VYTIS",
    image: "../img/Vytis.webp",
    description:
      "32. Vytis – tai mūsų nacionalinis „veiksmo herojus“ ant balto žirgo, kuris jau daugiau nei šešis šimtus metų nenuilstamai gena priešus iš Lietuvos kiemo ir neleidžia mums pamiršti, kad esame kovinga tauta. Tai ne šiaip herbas, o viduramžių „logotipas“, reprezentuojantis energiją ir ryžtą: kol kitos šalys savo simboliuose ramiai tupi kaip ereliai ar liūtai, mūsiškis šuoliuoja iškėlęs kalaviją, primindamas, kad geriausia gynyba yra puolimas (arba bent jau labai greitas jojimas teisinga kryptimi). Vytis puošia viską – nuo valstybinių dokumentų ir policijos automobilių iki eurų monetų mūsų piniginėse, tarnaudamas kaip amžinas priminimas, kad lietuvis visada yra kelyje, visada pasiruošęs kovoti už savo laisvę ir niekada nepamiršta pasibalnoti žirgo, net jei tas žirgas šiandien yra vokiškas automobilis.",
    secondImage: "../img/details/image-32.svg",
  },
  {
    id: 33,
    category: 4,
    title: "MAXIMA",
    image: "../img/Maxima.webp",
    description:
      "33. Maxima: Lietuviškas prekybos „mirtis“, kurioje visada rasi „Ačiū“ kortelę, bet niekada nerasi laisvos kasos piko metu. Tai vieta, kur eini duonos, o išeini su trimis kilogramais akcijinės nugarinės ir viltimi, kad tavo sukaupti „Maximos pinigai“ vieną dieną padengs tavo būsto paskolą.",
    secondImage: "../img/details/image-33.svg",
  },
  {
    id: 34,
    category: 4,
    title: "CAFFEIN",
    image: "../img/Caffein.webp",
    description:
      "34. Caffeine – tai oficiali Lietuvos studentų, nuotolinio darbo „klajoklių“ ir hipsterių susibūrimo vieta, kurioje sumokėjęs už kavą gauni ne tik gėrimą, bet ir neoficialią nuomą už stalą su rozete visai popietei. Tai vieta, kurioje sėdėjimas su „MacBook“ yra beveik privalomas aprangos kodas, o pro vitrininius langus praeivius stebintys lankytojai atrodo lyg gyva miesto ekspozicija, bandanti išspręsti pasaulio problemas per vieną „Latte“ puodelį. Nors čia visada triukšminga ir kvepia skrudintomis pupelėmis, „Caffeine“ tapo mūsų šiuolaikine bendruomenės erdve, kurioje susitinka visi: nuo verslo susitikimus planuojančių kostiumuočių iki paauglių, kuriems šokoladinis sausainis yra pagrindinė dienos investicija.",
    secondImage: "../img/details/image-34.svg",
  },
  {
    id: 35,
    category: 4,
    title: "BULVINIAI BLYNAI",
    image: "../img/Bulviniai_Blynai.webp",
    description:
      "35. Bulviniai blynai – tai lietuviškas kulinarinis auksas, dėl kurio kiekvienas virtuvės šefas-mėgėjas yra pasiryžęs paaukoti savo krumplių odą ant tarkos, kad tik pasiektų tą tobulą, traškų kraštelį, priverčiantį pamiršti visas pasaulio dietas. Tai patiekalas-chameleonas: vieniems tai tiesiog sotūs pietūs su tiršta grietine, kitiems – prabangus užkandis su sūdyta lašiša, tačiau tikroji jų magija atsiskleidžia tik tada, kai jie keliauja tiesiai iš keptuvės į lėkštę, dar spragsėdami nuo aliejaus ir skleisdami aromatą, kuris kaimynams iškart praneša, jog pas tave šiandien šventė. Bulvinis blynas yra mūsų nacionalinio charakterio atspindys – paprastas iš išorės, bet turintis labai tvirtą (ir skanų) pagrindą viduje, ypač jei į jį įtarkuoji bent vieną svogūną ir nepagaili druskos.",
    secondImage: "../img/details/image-35.svg",
  },
  {
    id: 36,
    category: 4,
    title: "FORTUNA",
    image: "../img/FORTUNA.webp",
    description:
      "36. Saldainis „Fortūna“ – tai kultinis „Rūtos“ fabriko kūrinys, kuris yra ne šiaip saldumynas, o tikras lietuviškas desertų pasaulio sunkiasvoris, savo vafliniuose šarvuose slepiantis solidų riešutų ir šokolado užtaisą. Šis saldainis yra stabilumo simbolis: kol pasaulio ekonomikos krenta ir kyla, „Fortūna“ išlieka tokia pat didelė, soti ir sunkiai įveikiama vienu kąsniu, todėl idealiai tinka prie karčios kavos, kai vieno vieneto užtenka visai popietės energijai palaikyti. Tai saldainis-asmenybė, kurio žalia pakuotė išduoda, kad viduje rasi ne kokį nors trapų orinuką, o rimtą, laiko patikrintą skonio derinį, kuris priverčia tave jaustis laimėjusiu gyvenimo loterijoje bent jau tą akimirką, kol traška jo storas šokolado sluoksnis.",
    secondImage: "../img/details/image-36.svg",
  },
  {
    id: 37,
    category: 4,
    title: "JONAS BASANAVIČIUS",
    image: "../img/Jonas_Basanavičius.webp",
    description:
      "37. Jonas Basanavičius – tai vyriausiasis Lietuvos „patriarchas“ ir mūsų valstybės atgimimo „atidarymo meistras“, kurio įspūdinga barzda tapo neoficialiu lietuviškos išminties ir kantrybės matu. Jis ne tik subūrė vyrus pasirašyti Vasario 16-osios aktą, bet ir visą gyvenimą dirbo kaip užsispyręs istorijos detektyvas, bandydamas įrodyti, kad lietuviai kilę iš romėnų (nes kodėl gi mums nepasvajojus apie imperiją?). Šiandien jis ramiai stebi Vilnių iš savo paminklo priešais Filharmoniją, likdamas amžinu priminimu, kad tikras lietuvis niekada nepasiduoda, kolekcionuoja dainas, gydo žmones ir, jei labai reikia, vienas pats „užkuria“ visą tėvynės laisvės variklį.",
    secondImage: "../img/details/image-37.svg",
  },
  {
    id: 38,
    category: 4,
    title: "ROTUŠĖ",
    image: "../img/rotuse.webp",
    description:
      "38. Rotušė – tai pagrindinė miesto vieta, kur senovėje virė politinės aistros, prekyba ir bendruomenės reikalai. Jei katedros skliautai saugojo ramybę ir dvasinę atmintį, tai rotušė buvo miesto administracijos, sprendimų ir kasdienio gyvenimo centras. Šiandien ji išlieka miesto simboliu, kuriame susitinka praeities didybė ir dabarties iškilmės, primindama, kad net ir moderniame pasaulyje miestui reikia vietos, kurioje jaučiasi jo istorinis stuburas.",
    secondImage: "../img/details/image-38.svg",
  },
  {
    id: 39,
    category: 4,
    title: "UŽGAVĖNĖS",
    image: "../img/Uzgavenes.webp",
    description:
      "39. Užgavėnės – tai triukšmingas lietuviškas „išvarymo vakarėlis“, kurio metu mes legaliai galime persirengti pabaisomis, gąsdinti kaimynus ir kimšti blynus tol, kol sagos pradeda braškėti. Tai diena, kai Kanapinis (pavasario ir salotų fanas) stoja į epinę dvikovą prieš Lašininį (žiemos ir riebaus gyvenimo ambasadorių), o mes visi vieningai palaikome pirmąjį, nors patys tuo metu įnirtingai kramtome dešrą. Šventės kulminacija – vargšės Morės sudeginimas ant laužo, kuris simbolizuoja visų tamsių jėgų, žiemos depresijos ir tų papildomų kilogramų, kuriuos ką tik suvalgėme, sunaikinimą, kad pagaliau galėtume ramiai laukti pavasario (arba bent jau pradėti galvoti apie dietą iki Velykų).",
    secondImage: "../img/details/image-39.svg",
  },
  {
    id: 40,
    category: 4,
    title: "RŪTA",
    image: "../img/Ruta.webp",
    description:
      "40. Rūta – tai nacionalinis nekaltybės ir moteriškumo „sargas“, kurio šakelė nuotakos nuomete senovėje buvo svarbesnė už bet kokius parašus. Melsvai žalias, aštraus kvapo krūmelis dainose tapo moralės simboliu: vešintis rūtų darželis reiškė gerą šeimininkę, o nuvytęs – garantuotas kaimo apkalbas. Tai augalas-legenda, primenantis, kad lietuviškas grožis yra žalias, ištvermingas ir šiek tiek aitrus.",
    secondImage: "../img/details/image-40.svg",
  },
  {
    id: 41,
    category: 5,
    title: "KREGŽDUTĖ",
    image: "../img/KREGZDUTE.webp",
    description:
      "41. Saldainis „Kregždutė“ – tai desertinė lietuviška klasika, kurios pakuotė žada lengvą skrydį, bet vidus pasiūlo rimtą, saldų ir šiek tiek tąsų „paukščių pieno“ tipo nuotykį. Šis saldainis yra tikras vaikystės nostalgijos simbolis: jame rasi tą specifinį citrinos gaivumą, paslėptą po šokoladiniu glaistu, kuris tirpsta burnoje greičiau, nei tikra kregždė spėja sugrįžti pavasarį. Tai saldumynas tiems, kurie vertina lengvumą, tradiciją ir tą akimirką, kai nuėmus popierėlį supranti, kad viena „Kregždutė“ pavasario (ir sočių pietų) dar nedaro, todėl tenka imti antrą.",
    secondImage: "../img/details/image-41.svg",
  },
  {
    id: 42,
    category: 5,
    title: "ŠALTIBARŠČIAI",
    image: "../img/ŠALTIBARŠČIAI.webp",
    description:
      "42. Šaltibarščiai – tai ryškiai rožinė lietuviška „šventoji sriuba“, kurios spalva tokia intensyvi, jog atrodo, kad į lėkštę kas nors netyčia išliejo neoninius dažus arba visą barbių pasaulio estetiką. Tai patiekalas-ritualas: kol užsieniečiai įtartinai žiūri į šį šaltą, kefyru užpiltą daržovių derinį, tikras lietuvis jau tiesia šaukštą, žinodamas, kad viduje slepiasi vasaros gaiva ir tobulas marinuotų burokėlių bei krapų balansas. Šaltibarščiai neatsiejami nuo karštų, druska pabarstytų bulvių, kurios patiekiamos atskirai kaip ištikimas ginklanešys, sukurdamas tą magišką temperatūrų kontrastą, priverčiantį užsimerkti iš malonumo. Tai daugiau nei maistas – tai mūsų nacionalinis vėsumos simbolis, dėl kurio kiekvieną vasarą socialiniai tinklai nusidažo rožine spalva, o kiekviena kavinė tampa neoficialiu „geriausių šaltibarščių mieste“ čempionato dalyviu.",
    secondImage: "../img/details/image-42.svg",
  },
  {
    id: 43,
    category: 5,
    title: "GIRA",
    image: "../img/Gira_.webp",
    description:
      "43. Gira – tai senovinis lietuviškas „skystas auksas“ ir natūralus energetikas, kuris savo putojančia galia priverčia bet kokį gazuotą gėrimą iš vakarų pasitraukti į šalį. Tai gėrimas su charakteriu: tikra naminė gira kvepia tamsia, gerai paskrudinta rugine duona, o jos skonis – tai subtilus balansas tarp saldumo, ramybės ir tos lengvos rūgštelės, kuri geriausiai numalšina troškulį po sunkių ūkio darbų ar varginančių krepšinio rungtynių. Gira yra tikra laiko mašina – vienas gurkšnis iš rudo stiklo butelio ar molinio ąsočio akimirksniu sugrąžina į kaimą pas močiutę, kur gėrimas rūgdavo tiesiog ant palangės, o razinos dugne būdavo didžiausias desertinis lobis. Tai gėrimas, kuris simbolizuoja mūsų kantrybę (nes gerai girai reikia laiko „subręsti“) ir gebėjimą iš paprastos duonos riekės sukurti šventę kiekvienam gomuriui.",
    secondImage: "../img/details/image-43.svg",
  },
  {
    id: 44,
    category: 5,
    title: "BALANDĖLIAI",
    image: "../img/BALANDELIAI.webp",
    description:
      "44. Balandėliai – tai lietuviškas kulinarinis „vystyklas“, kuriame kopūsto lapas atlieka saugaus seifo vaidmenį, saugodamas sultingą mėsos ir ryžių lobį. Tai patiekalas, reikalaujantis kantrybės ir beveik inžinerinių įgūdžių, nes suvynioti tobulą, neišyrantį „paukštelį“ yra tikra šeimininkės garbės reikalas. Nors jų gaminimas užtrunka visą pusdienį, o virtuvė prisipildo specifinio virto kopūsto aromato, rezultatas – troškintas tirštame grietinės ir pomidorų padaže – priverčia pasijusti tarsi grįžus į sekmadienio pietus pas mamą. Balandėliai yra mūsų kantrybės įrodymas: mes žinome, kad geriausi dalykai gyvenime ateina tada, kai juos ilgai troškini ant lėtos ugnies.",
    secondImage: "../img/details/image-44.svg",
  },
  {
    id: 45,
    category: 5,
    title: "GINTARAS",
    image: "../img/Jantar.webp",
    description:
      "45. Gintaras – tai „Lietuvos auksas“, kurį Baltijos jūra po kiekvienos audros išspjauna į krantą kaip mažas, sustingusias saulės ašaras. Šis suakmenėjęs sakas yra mūsų šalies DNR dalis: jame gali rasti įkalintą priešistorinį uodą arba tiesiog pajusti tūkstantmečių ramybę, kai šildai jį delne. Gintaras mums nėra tiesiog papuošalas – tai ir vaistas, ir talismanas, ir tas privalomas suvenyras, kurį gauna kiekvienas užsienio svečias, kad išsivežtų dalelę mūsų vėsaus, smėlėto pajūrio. Tai simbolis, primenantis, kad net ir paprasčiausia sakų derva per ilgą laiką gali tapti brangenybe, jei tik turi pakankamai druskos ir bangų užnugaryje.",
    secondImage: "../img/details/image-45.svg",
  },
  {
    id: 46,
    category: 5,
    title: "VINCAS KUDIRKA",
    image: "../img/Kudirka.webp",
    description:
      "46. Vincas Kudirka – tai vyras, kuris įrodė, kad varpas gali skambėti garsiau už patrankas, o smuikas yra puikus įrankis tautos žadinimui. Jis buvo tikras lietuviškas „influenceris“ dar tada, kai tai nebuvo madinga: rašė satyras, redagavo „Varpą“ ir, žinoma, padovanojo mums „Tautišką giesmę“, kurią giedodami visi staiga pasitempiame ir pasijuntame vieningi. Kudirka – tai idealisto pavyzdys, kuris savo sveikatą paaukojo vardan to, kad mes šiandien galėtume laisvai kalbėti savo kalba, primindamas, jog didžiausi pokyčiai prasideda nuo vieno užsispyrusio žmogaus ir labai aštrios plunksnos.",
    secondImage: "../img/details/image-46.svg",
  },
  {
    id: 47,
    category: 5,
    title: "DARIUS IR GIRĖNAS",
    image: "../img/Darius_Girenas.webp",
    description:
      "47. Darius ir Girėnas – tai mūsų nacionaliniai superherojai be apsiaustų, kurie nusprendė, kad vandenynas yra tik nedidelė kliūtis kelyje į Lietuvos garsinimą. Su savo oranžine „Lituanica“ jie pakilo ne tik į dangų, bet ir į amžinąją mūsų atmintį, tapdami drąsos, rizikos ir beribio patriotizmo simboliais. Nors jų skrydis baigėsi tragiškai Soldino miškuose, jie pasiekė svarbiausią tikslą – įrodė pasauliui (ir mums patiems), kad lietuvis gali skristi aukščiau už visus, o jų portretai ant buvusių dešimties litų banknotų visada primindavo, jog didžios svajonės reikalauja plieninių nervų ir šiek tiek oranžinio užsispyrimo.",
    secondImage: "../img/details/image-47.svg",
  },
  {
    id: 48,
    category: 5,
    title: "GAIDELIS",
    image: "../img/Gaidelis.webp",
    description:
      "48. Sausainiai „Gaidelis“ – tai desertinė Lietuvos konstanta, kurios kvadratinė forma ir išspaustas paukštelis lydi mus nuo pat darželio laikų. Tai sausainis-chameleonas: jis gali būti ir kuklus užkandis prie arbatos, ir prabangaus naminio „Tinginio“ pamatas, ir netgi improvizuotas sumuštinis, kai tarp dviejų „Gaidelių“ storai užtepamas sviestas. Nors konditerijos mados keičiasi, šis sausainis išlieka ištikimas savo traškumui ir tam specifiniam vaniliniam kvapui, kuris turi galią akimirksniu sugrąžinti į vaikystę, primindamas, kad geriausiems dalykams gyvenime nereikia jokių įmantrių įdarų.",
    secondImage: "../img/details/image-48.svg",
  },
  {
    id: 49,
    category: 5,
    title: "LITAI",
    image: "../img/Litai.webp",
    description:
      "49. Litai – tai mūsų buvusi nacionalinė valiuta, kuri turėjo tiek daug „svorio“ ir nostalgijos, kad net ir praėjus dešimtmečiui po euro įvedimo, mes vis dar slapta mintyse viską perskaičiuojame santykiu 3,45. Litai buvo ne tik popieriaus gabalėliai, bet ir maža istorijos pamoka kišenėje: nuo lakūnų iki rašytojų, kiekvienas banknotas pasakojo apie Lietuvos didybę. Tai buvo pinigai, kurie turėjo sielą, o tas skambus jų pavadinimas vis dar sukelia lengvą ilgesį laikams, kai už vieną monetą su vyčiu galėjai nusipirkti bent jau porciją ledų ar tą patį „Gaidelio“ pakelį.",
    secondImage: "../img/details/image-49.svg",
  },
  {
    id: 50,
    category: 5,
    title: "MINDAUGAS",
    image: "../img/30Mindaugas.webp",
    description:
      "50. Mindaugas – tai vienintelis ir nepakartojamas Lietuvos karalius, kuris sugebėjo suvienyti peštynes mėgstančias gentis ir gauti karūną tiesiai iš popiežiaus rankų, taip oficialiai įrašydamas mus į Europos „aukštuomenės“ sąrašą. Jis buvo politinis didmeistris, supratęs, kad krikštas ir karūna yra geriausi šarvai nuo kryžiuočių, net jei tai reiškė kelis strateginius posūkius. Liepos 6-oji šiandien mums yra ne tik laisvadienis, bet ir priminimas, kad be Mindaugo ambicijų ir jo sugebėjimo užsidėti karūną, mes dabar galbūt giedotume ne „Tautišką giesmę“, o visai kitas dainas.",
    secondImage: "../img/details/image-50.svg",
  },
  {
    id: 51,
    category: 6,
    title: "TROLEIBUSAS",
    image: "../img/Troleibusas.webp",
    description:
      "51. Troleibusai – tai Vilniaus ir Kauno gatvių „raguoti milžinai“, kurie savo ūžesiu ir specifiniu stabdžių cypimu kuria unikalų miesto garso takelį. Tai transportas tiems, kurie niekur neskuba ir vertina tą azartišką akimirką, kai „ūsai“ nukrenta nuo laidų ir vairuotojas, apsimovęs darbines pirštines, eina jų „gaudyti“ vidury sankryžos. Troleibusas yra tarsi lėtas, ekologiškas miestas viduje: čia susitinka visos kartos, o pro langą slenkantys vaizdai leidžia ramiai apmąstyti gyvenimą, kol transporto priemonė lėtai, bet užtikrintai juda link galinės stotelės.",
    secondImage: "../img/details/image-51.svg",
  },
  {
    id: 52,
    category: 6,
    title: "ŽALGIRIS",
    image: "../img/Zalgiris.webp",
    description:
      "52. Kauno „Žalgiris“ – tai ne tiesiog krepšinio komanda, o antroji Lietuvos religija, kurios „šventovė“ Nemuno saloje kaskart prisipildo žaliai baltos energijos. Tai komanda-legenda, išmokiusi mus, kad net ir būdami maži galime nugalėti didžiausius Europos milžinus, jei tik turime „žalgirietišką“ charakterį ir pilną areną užnugaryje. Kai žaidžia „Žalgiris“, gatvės ištuštėja, o kiekvienas lietuvis tampa vyriausiuoju treneriu, nes šios komandos pergalės yra mūsų visų pergalės, o jų kovingumas – mūsų nacionalinio pasididžiavimo matas.",
    secondImage: "../img/details/image-52.svg",
  },
  {
    id: 53,
    category: 6,
    title: "TRIJŲ KRYŽIŲ KALNAS",
    image: "../img/trix.webp",
    description:
      "53. Trijų kryžių kalnas – tai Vilniaus panoramos sargybinis ir dvasinis miesto švyturys, nuo kurio atsiveria vaizdas, priverčiantis net ir didžiausią skeptiką išsitraukti telefoną nuotraukai. Šie trys balti milžinai, stūksantys virš senamiesčio stogų, yra ne tik paminklas praeičiai, bet ir geriausia vieta romantiškiems pasimatymams ar giliems apmąstymams po ilgo lipimo laiptais. Tai vieta, kur miesto triukšmas nuslopsta, o vėjas primena, kad Vilnius turi ne tik mūrus, bet ir sielą, kuri, kaip ir šie kryžiai, visada žiūri į viršų, nepaisant jokių istorinių audrų.",
    secondImage: "../img/details/image-53.svg",
  },
  {
    id: 54,
    category: 6,
    title: "TRISPALVĖ",
    image: "../img/Trispalvė.webp",
    description:
      "54. Trispalvė – tai mūsų laisvės ir tapatybės „šventoji trejybė“, kurioje geltona saulė, žalia gamta ir raudonas kraujas susipina į vieną audinį. Tai vėliava, kurią pamačius svetimoje šalyje širdis pradeda plakti greičiau, o per valstybines šventes ji tampa pagrindiniu namų, gatvių ir net skruostų aksesuaru. Trispalvė mums yra priminimas, kad esame ryškūs, ištvermingi ir kad mūsų laisvė turi savo spalvas, kurias saugome taip pat stipriai, kaip savo kalbą ar močiutės receptų knygą.",
    secondImage: "../img/details/image-54.svg",
  },
  {
    id: 55,
    category: 6,
    title: "BALTOJI MIŠRAINĖ",
    image: "../img/misraine.webp",
    description:
      "55. Baltoji mišrainė – tai lietuviškas švenčių „paminklas“, be kurio neįsivaizduojamos nei Kūčios, nei Velykos, nei jubiliejus pas krikšto mamą. Tai sudėtinga, pjaustymo kantrybės reikalaujanti architektūra iš bulvių, žirnelių, morkų ir agurkų, kurią galutinai sutvirtina storas majonezo sluoksnis. Baltoji mišrainė yra tikrasis bendruomeniškumo simbolis: kiekviena šeima turi savo „teisingą“ receptą (su obuoliu ar be?), bet visi sutinka, kad skaniausia ji tampa antrąją šventės dieną, kai skoniai pagaliau „susidraugauja“.",
    secondImage: "../img/details/image-55.svg",
  },
  {
    id: 56,
    category: 6,
    title: "RYTAS",
    image: "../img/Rytas.webp",
    description:
      "56. Vilniaus „Rytas“ – tai sostinės krepšinio ambicija ir pagrindinis „Žalgirio“ oponentas, be kurio Lietuvos krepšinio padangė būtų gerokai nuobodesnė. Juoda-balta-raudona spalvos simbolizuoja Vilniaus užsispyrimą ir tą nepakartojamą derbių įkarštį, kai emocijos verda per kraštus, o sirgalių balsai užpildo areną iki paskutinio centimetro. „Rytas“ yra komanda tiems, kurie mėgsta kovoti iki galo, laužyti prognozes ir įrodyti, kad sostinė turi savo krepšinio širdį, kuri plaka garsiai, ritmingai ir niekada nepasiduoda be mūšio.",
    secondImage: "../img/details/image-56.svg",
  },
  {
    id: 57,
    category: 6,
    title: "DŽIUGAS",
    image: "../img/Dziugas.webp",
    description:
      "57. Sūris „Džiugas“ – tai lietuviškas atsakymas itališkam parmezanui, įrodantis, kad Telšiuose kantrybės ir pieno meistriškumo yra ne mažiau nei geriausiuose Europos ūkiuose. Tai kietasis sūris-aristokratas, kurio skonis su kiekvienu brandinimo mėnesiu tampa vis aštresnis, sodresnis ir labiau „traškantis“ dėl susidariusių kalcio kristalų. „Džiugas“ yra mūsų kulinarinis ambasadorius: jis puikiai tinka ir prie vyno taurės, ir į makaronus, ir tiesiog kaip vienišas skanėstas, primenantis, kad geriausiems dalykams reikia laiko, ramybės ir šiek tiek žemaitiško užsispyrimo.",
    secondImage: "../img/details/image-57.svg",
  },
  {
    id: 58,
    category: 6,
    title: "GRYBUKAI",
    image: "../img/Grybukai.webp",
    description:
      "58. Grybukai – tai lietuviškas konditerijos stebuklas, priverčiantis suabejoti botanikos dėsniais, nes šie grybai auga ne miške, o ant šventinio stalo. Tai kruopštaus rankų darbo šedevras: rudos, šokoladinės kepurėlės ir balti, cukrine glazūra nulieti koteliai su aguonų „žemių“ pėdsakais apačioje yra tikras vaikystės džiaugsmo simbolis. Nors jų gamyba reikalauja kantrybės ir specialių formų, galutinis rezultatas – minkštas, prieskoniais kvepiantis vidus ir traškus glajus – paverčia juos laukiamiausiu svečiu bet kuriose vestuvėse ar krikštynose, kur dėl paskutinio „grybo“ pasiruošę kovoti tiek vaikai, tiek suaugę.",
    secondImage: "../img/details/image-58.svg",
  },
  {
    id: 59,
    category: 6,
    title: "ŠVYTURYS",
    image: "../img/Švyturys_.webp",
    description:
      "59. Švyturys – tai ne tik pajūrio naktinis gidas, bet ir romantiškas Lietuvos pamario simbolis, kantriai stovintis prieš vėją ir Baltijos bangas. Nesvarbu, ar tai būtų Nidos, ar Klaipėdos švyturys, jis primena mums, kad esame jūrinė valstybė, turinti savo saugų uostą. Šis raudonai baltas bokštas yra tarsi stabilumo ašis kintančiame smėlyje, kviečiantis pasivaikščioti pakrante, paklausyti jūros ošimo ir bent akimirkai pasijusti didelio, paslaptingo vandens pasaulio dalimi.",
    secondImage: "../img/details/image-59.svg",
  },
  {
    id: 60,
    category: 6,
    title: "GELEŽINIS VILKAS",
    image: "../img/Geležinis_Vilkas.webp",
    description:
      "60. Geležinis vilkas – tai Vilniaus „kaltininkas“ ir pirmasis sostinės vizionierius, kuris Gedimino sapne staugė taip garsiai, kad jo balsas aidi iki šiol. Šis šarvuotas žvėris yra mūsų valstybinio užsispyrimo ir ambicijų simbolis: jis pranašavo miestą, kuris bus žinomas visame pasaulyje, ir, žiūrint į šiuolaikinį Vilnių, akivaizdu, kad vilkas nemelavo. Šiandien jis yra ne tik legenda, bet ir miesto dvasia, primenanti, kad kiekvienas didis darbas prasideda nuo drąsaus sapno ir garsaus pareiškimo apie save.",
    secondImage: "../img/details/image-60.svg",
  },
  {
    id: 61,
    category: 7,
    title: "VILNIAUS UNIVERSITETAS",
    image: "../img/VU.webp",
    description:
      "61. Vilniaus universitetas – tai mūsų mokslo „Vatikanas“ ir viena seniausių žinių kalvių Europoje, kurio barokiniai kiemeliai matė daugiau šviesių protų nei vidutinis žmogus – knygų. Tai vieta, kurioje susitinka senovinė lotynų kalbos ramybė ir modernus studentų šurmulys, o kiekviena freska ar senoji bibliotekos skliautų arka pasakoja apie laikus, kai žinių troškimas buvo stipresnis už bet kokias negandas. VU yra mūsų intelektualinis stuburas, įrodantis, kad Lietuva visada buvo ir bus didžių idėjų ir laisvos minties namais.",
    secondImage: "../img/details/image-61.svg",
  },
  {
    id: 62,
    category: 7,
    title: "KEPTA DUONA",
    image: "../img/Kepta_Duona.webp",
    description:
      "62. Kepta duona su sūriu – tai neoficialus Lietuvos nacionalinis užkandis, be kurio bet koks pasisėdėjimas bare praranda prasmę. Tai riebus, česnakinis ir beprotiškai skanus „nuodėmės“ gabalėlis, kuris, paskendęs lydytame sūryje ir majoneze, tampa geriausiu draugu prie stiklinės giros ar alaus. Kepta duona turi unikalią savybę – ji vienija žmones: nesvarbu, kas tu toks, pamatęs prieš save lėkštę šių auksinių pagaliukų, tu tiesiog privalai paimti vieną, kol sūris dar tįsta, ir dar kartą sau pažadėti, kad dieta prasidės rytoj.",
    secondImage: "../img/details/image-62.svg",
  },
  {
    id: 63,
    category: 7,
    title: "SUVENYRAI",
    image: "../img/Suvenyras.webp",
    description:
      "63. Suvenyrai – tai tie maži, dažniausiai gintariniai arba moliniai niekučiai, kurie po atostogų Lietuvoje nugula ant užsieniečių lentynų, primindami jiems apie mūsų vėjuotą pajūrį ir viduramžių pilis. Tai gali būti bet kas: nuo lino staltiesės, kurią gaila tepti, iki magnetuko su krepšinio kamuoliu, tačiau tikroji jų vertė slypi tame, kad jie bando į vieną mažą objektą sutalpinti visą lietuvišką svetingumą ir šiek tiek ilgesio mūsų žaliems miškams.",
    secondImage: "../img/details/image-63.svg",
  },
  {
    id: 64,
    category: 7,
    title: "BARBORA RADVILAITĖ",
    image: "../img/Barbora_Radvilaitė.webp",
    description:
      "64. Barbora Radvilaitė – tai lietuviškoji Džuljeta ir mūsų istorijos romantiškiausia ikona, kurios meilės istorija su Žygimantu Augustu įrodė, kad net karališkos karūnos nublanksta prieš tikrus jausmus. Jos grožis ir paslaptingumas tapo Vilniaus legenda, o tragiškas likimas – amžinu priminimu, kad meilė gali būti stipresnė už politines intrigas, paliekant mums romantikos prieskonį kiekvienoje senamiesčio gatvelėje, kuria ji kadaise vaikščiojo.",
    secondImage: "../img/details/image-64.svg",
  },
  {
    id: 65,
    category: 7,
    title: "CEPELINAI",
    image: "../img/Cepelinai.webp",
    description:
      "65. Cepelinai – tai lietuviškas virtuvės „sunkioji artilerija“, tie didingi tarkuotų bulvių lėktuvnešiai, plaukiantys grietinės ir spirgučių padažo jūroje. Jų gaminimas yra tikras šeimos kantrybės testas (ypač tarkuojant bulves), tačiau pirmas kąsnis to minkšto, mėsingo pilnumo priverčia pamiršti visas kalorijų skaičiuokles. Cepelinas yra mūsų nacionalinio charakterio simbolis: sotus, užtikrintas ir garantuojantis, kad po tokių pietų vienintelis tavo noras bus ramiai „pailsėti“ ant sofos.",
    secondImage: "../img/details/image-65.svg",
  },
  {
    id: 66,
    category: 7,
    title: "MIGLĖ",
    image: "../img/Miglė.webp",
    description:
      "66. Saldainis „Miglė“ – tai desertinė nostalgija, kurios traškus vaflinis korpusas ir švelnus riešutinis kremas burnoje sukuria mažą, saldžią šventę. Tai saldainis-diplomatas, kuris tinka ir prie arbatos su kaimyne, ir kaip saldi kyšio dalis močiutei, kad ši leistų dar valandą pažaisti lauke. „Miglė“ yra lengvumo ir tradicijos derinys, primenantis, kad kartais laimei užtenka tik vieno mažo, mėlyname popierėlyje paslėpto kąsnio.",
    secondImage: "../img/details/image-66.svg",
  },
  {
    id: 67,
    category: 7,
    title: "VYTAUTAS DIDYSIS",
    image: "../img/Vytautas_Didysis.webp",
    description:
      "67. Vytautas Didysis – tai mūsų didžiausias istorinis „vadybininkas“ ir strategas, kuris sugebėjo Lietuvos sienas išplėsti tiek, kad mūsų žirgai gėrė vandenį iš Juodosios jūros (arba mes bent jau labai mėgstame tuo tikėti). Jis yra Lietuvos galybės įsikūnijimas – griežtas, ryžtingas ir toks įtakingas, kad jo vardas iki šiol suteikiamas stipriausiam mineraliniam vandeniui ir geriausiems universitetams. Vytautas mums primena, kad lietuviai moka valdyti, nugalėti ir kurti imperijas, net jei šiandien tos imperijos telpa į 65 tūkstančius kvadratinių kilometrų.",
    secondImage: "../img/details/image-67.svg",
  },
  {
    id: 68,
    category: 7,
    title: "VARLĖ.LT",
    image: "../img/Varlė.webp",
    description:
      "68. Varlė.lt – tai šiuolaikinis lietuviškos e-prekybos simbolis, kurio žalias logotipas ir energingas pavadinimas išduoda, kad čia „šokama“ paskui geriausias kainas ir technologijų naujoves. Tai vieta, kurioje lietuvis ieško visko – nuo naujausio telefono iki virdulio, tikėdamasis rasti tą magišką nuolaidą, kuri širdį paglostys labiau nei bet koks komplimentas. Varlė.lt tapo mūsų modernaus gyvenimo būdo dalimi, primenančia, kad dabar viskas – net ir didžiausi pirkiniai – prasideda nuo vieno „klyk“ internete.",
    secondImage: "../img/details/image-68.svg",
  },
  {
    id: 69,
    category: 7,
    title: "ŽEMAIČIŲ BLYNAI",
    image: "../img/Žemaičių_Blynai.webp",
    description:
      "69. Žemaičių blynai – tai bulviniai „pagalvėliai“, kurie nuo paprastų blynų skiriasi savo virtų bulvių švelnumu ir paslaptingu mėsos (arba grybų) įdaru viduje. Tai patiekalas, kuris reikalauja meilės ir kruopštumo formuojant kiekvieną blyną, bet užtat atsilygina tokiu komfortišku skoniu, kuris geriausiai tinka lietingą rudens popietę. Žemaičių blynai yra kulinarinis įrodymas, kad net ir iš paprastos bulvės galima sukurti kažką tokio delikačiai minkšto, jog grietinės padažas čia tampa ne priedu, o būtinybe.",
    secondImage: "../img/details/image-69.svg",
  },
  {
    id: 70,
    category: 7,
    title: "TINGINYS",
    image: "../img/Tinginys.webp",
    description:
      "70. Tinginys – tai genialiausias Lietuvos virtuvės kūrinys, gimęs iš nenoro kepti sudėtingus pyragus, bet virtęs kultiniu desertu. Tai paprasčiausias „Gaidelių“, kakavos, sviesto ir kondensuoto pieno sąjungos rezultatas, kuris po nakties šaldytuve tampa kiečiausia ir skaniausia valiuta bet kuriame gimtadienyje. Tinginys yra mūsų praktiškumo viršūnė: minimalios pastangos – maksimalus malonumas, ypač jei nepagaili riešutų ar šlakelio romo suaugusiųjų versijai.",
    secondImage: "../img/details/image-70.svg",
  },
  {
    id: 71,
    category: 8,
    title: "ŠAKOTIS",
    image: "../img/SAKOTIS.webp",
    description:
      "71. Šakotis – tai lietuviškas konditerijos „dangoraižis“ ir spygliuotas desertų karalius, be kurio vestuvių stalas atrodytų tiesiog tuščias. Jo gamyba ant besisukančio iešmo yra beveik magiškas procesas, o tie trapūs „rageliai“ yra didžiausias skanėstas, kurį visi bando slapčia nulaužti dar šventei neprasidėjus. Šakotis simbolizuoja kantrybę ir lietuvišką dosnumą – jis didelis, tvirtas ir toks skanus, kad jį valgyti galima pamažu, sluoksnis po sluoksnio, mėgaujantis kiekvienu kiaušininio tešlos „spygliuku“.",
    secondImage: "../img/details/image-71.svg",
  },
  {
    id: 72,
    category: 8,
    title: "KEFYRAS",
    image: "../img/Kefiras.webp",
    description:
      "72. Kefyras – tai tas stebuklingas, rūgštus baltas gėrimas, kuris lietuviui yra ir vaistas, ir geriausias šaltibarščių pagrindas, ir rytinė „gelbėjimo priemonė“ po triukšmingo vakarėlio. Tai gėrimas-gyvybė, kupinas gerųjų bakterijų ir gaivos, kuris puikiai dera su karštomis bulvėmis ar tiesiog duonos rieke. Kefyras yra paprastumo simbolis – jokių nereikalingų priedų, tik grynas, tirštas skonis, kuris primena, kad sveikata prasideda nuo vienos stiklinės balto balanso.",
    secondImage: "../img/details/image-72.svg",
  },
  {
    id: 73,
    category: 8,
    title: "VĖLYKOS",
    image: "../img/Velykos.webp",
    description:
      "73. Velykos – tai didysis pavasario „atsibudimo vakarėlis“, kurio pagrindinis veiksmas sukasi aplink margučių ridenimą ir jų stiprumo testavimą. Tai metas, kai visa šeima virsta menininkais (su svogūnų lukštais ar vašku) ir vėliau sėda prie stalo, užkrauto balta mišraine ir krienais. Velykos mums yra apie viltį, saulę ir tą vaikišką azartą laimėti margučių kovas, įrodant, kad tavo kiaušinis yra kiečiausias visame rajone.",
    secondImage: "../img/details/image-73.svg",
  },
  {
    id: 74,
    category: 8,
    title: "LIETUVOS PAŠTAS",
    image: "../img/Lp_.webp",
    description:
      "74. Lietuvos paštas – tai geltonoji mūsų komunikacijos arterija, kuri, nepaisant skaitmeninio amžiaus, vis dar nešioja popierinius laiškus, siuntinius iš Kinijos ir senolių pensijas. Nors kartais tenka pastovėti eilėje kartu su visomis miesto aktualijomis besidalinančiomis kaimynėmis, paštas išlieka ta vieta, kuri jungia mus su pasauliu. Tai įstaiga su istorija, primenanti, kad geriausios žinios kartais ateina ne „Messengeriu“, o užklijuotame voke su gražiu pašto ženklu.",
    secondImage: "../img/details/image-74.svg",
  },
  {
    id: 75,
    category: 8,
    title: "AŽUOLAS",
    image: "../img/AŽUOLAS.webp",
    description:
      "75. Ąžuolas – tai mūsų miškų patriarchas ir tvirtybės etalonas, po kurio laja lietuviai senovėje kalbėdavosi su dievais, o šiandien tiesiog ieško pavėsio. Ąžuolas mums nėra tik medis – tai nacionalinis charakteris: lėtai augantis, giliai šaknis įleidęs ir nepalaužiamas jokių vėjų. Turėti ąžuolą kieme yra garbė, o pamatyti senąjį Stelmužės milžiną – privaloma piligrimystė kiekvienam, norinčiam pajusti, kas iš tiesų yra lietuviška ištvermė.",
    secondImage: "../img/details/image-75.svg",
  },
  {
    id: 76,
    category: 8,
    title: "KUGELIS",
    image: "../img/Kugelis.webp",
    description:
      "76. Kugelis – tai bulvinis „pyragas“, kuris savo sotumu gali konkuruoti su bet kokiu pasaulio patiekalu. Tarkuotos bulvės, šlakelis karšto pieno (kad nepatamsėtų!), daug spirgučių ir kepimas krosnyje paverčia šį valgį tikra skonio bomba, kuri geriausiai „sprogsta“ užpilta tiršta grietine. Kugelis yra šilumos ir namų jaukumo simbolis, primenantis, kad kai už lango lyja, nėra nieko geriau už kvapnų, apskrudusį bulvių plokštainį, dalinamą dideliais gabalais visai šeimai.",
    secondImage: "../img/details/image-76.svg",
  },
  {
    id: 77,
    category: 8,
    title: "TRAKŲ PILIS",
    image: "../img/Trakų_Pilis_.webp",
    description:
      "77. Trakų pilis – tai mūsų atvirukų gražuolė, stūksanti vidury ežero ir primenanti laikus, kai Lietuva buvo didinga ir neįveikiama. Tai vienintelė salos pilis Rytų Europoje, kurioje kiekvienas akmuo šnabžda apie Vytautą Didįjį ir viduramžių riterius. Šiandien Trakai mums yra apie kibinus, pasiplaukiojimą jachtomis ir tą nepakartojamą jausmą, kai eini per tiltą link raudonų plytų mūro, jausdamasis tarsi būtum grįžęs į savo valstybės aukso amžių.",
    secondImage: "../img/details/image-77.svg",
  },
  {
    id: 78,
    category: 8,
    title: "VYTAUTAS VANDUO",
    image: "../img/Vytautas_Vanduo.webp",
    description:
      "78. Mineralinis vanduo „Vytautas“ – tai gėrimas tiems, kurie nebijo „tikro“ skonio ir nori pajusti visą žemės druskų jėgą viename gurkšnyje. Tai mineralizuotas užtaisas, kuris savo specifiniu sūrumu ir burbuliukų gausa gali prikelti net ir labiausiai pavargusį keliautoją. „Vytautas“ yra mūsų ištvermės gėrimas: jis nesistengia įtikti visiems, bet tie, kurie jį pėmė mėgti, lieka ištikimi visam gyvenimui, žinodami, kad tai – tikra, koncentruota Lietuvos gamtos energija.",
    secondImage: "../img/details/image-78.svg",
  },
  {
    id: 79,
    category: 8,
    title: "PERGALĖ",
    image: "../img/Pergalė_.webp",
    description:
      "79. Saldainis „Pergalė“ – tai saldus triumfas ir mūsų šokolado pramonės pasididžiavimas, kurio dėžutė yra saugiausia dovana einant į svečius, kai nežinai, ką nunešti. Tai prekės ženklas, apjungiantis viską: nuo klasikinių pieniško šokolado plytelių iki prabangių rinkinių su įvairiausiais įdarais. „Pergalė“ mums asocijuojasi su kokybe ir tomis mažomis kasdienėmis pergalėmis, kurias verta atšvęsti su gabalėliu gero šokolado, tirpstančio burnoje ir paliekančio saldų pasitenkinimo jausmą.",
    secondImage: "../img/details/image-79.svg",
  },
];

export default cards;

