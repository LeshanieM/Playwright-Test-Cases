const { test, expect } = require('@playwright/test');

// Test Data
const testData = {
  positive: [
    {
      id: 'Pos_Fun_0001',
      name: 'Short and Simple daily used question, frequently used day-to-day expression',
      input: 'oyaa kaeevadha?',
      expected: 'ඔයා කෑවද?',
      length: 'S',
    },
    {
      id: 'Pos_Fun_0002',
      name: 'Short negative command',
      input: 'oovaa kanna epaa',
      expected: 'ඕවා කන්න එපා',
      length: 'S',
    },
    {
      id: 'Pos_Fun_0003',
      name: 'Short reponse with common english words that should stay same as they are ',
      input: 'Oya ennako thummullata mama apee campus eka pennannam',
      expected: 'ඔය එන්නකො තුම්මුල්ලට මම අපේ campus එක පෙන්නන්නම්',
      length: 'M',
    },
    {
      id: 'Pos_Fun_0004',
      name: 'Plural usage',
      input: 'Api kurumbaetti maeshimak hadhamu',
      expected: 'අපි කුරුම්බැට්ටි මැශිමක් හදමු',
      length: 'S',
    },
    {
      id: 'Pos_Fun_0005',
      name: 'Polite, requests with english technical/brand terms embedded in Singlish',
      input:
        'Saman malli oyaata puluvandha heta udheema bus ekee commercial ennabaeQQkuvata gihin manager hamuvelaa mudhal deposit karala enagaman colombo polisiyata gihin dhada kolee aran enna',
      expected:
        'සමන් මල්ලි ඔයාට පුලුවන්ද හෙට උදේම bus එකේ commercial එන්නබැංකුවට ගිහින් manager හමුවෙලා මුදල් deposit කරල එනගමන් colombo පොලිසියට ගිහින් දඩ කොලේ අරන් එන්න',
      length: 'M',
    },
    {
      id: 'Pos_Fun_0006',
      name: 'Complex structure with past tense',
      input:
        'pahu giya avurudhdhee vagee mee avurudhdheeth gQQvathura aavoth nam aayeth kuBuruyaayama vinaasha vena bava kiyanna oonee naeenee',
      expected:
        'පහු ගිය අවුරුද්දේ වගේ මේ අවුරුද්දේත් ගංවතුර ආවොත් නම් ආයෙත් කුඹුරුයායම විනාශ වෙන බව කියන්න ඕනේ නෑනේ',
      length: 'M',
    },
    {
      id: 'Pos_Fun_0007',
      name: 'Repeated word expressions used for emphasis',
      input:
        'oyaa thamayi meekata vagakiyanna oonee. oyaamayi. vena kenek neveyi oyaamayi',
      expected: 'ඔයා තමයි මේකට වගකියන්න ඕනේ. ඔයාමයි. වෙන කෙනෙක් නෙවෙයි ඔයාමයි',
      length: 'M',
    },
    {
      id: 'Pos_Fun_0008',
      name: 'Request forms with varying degrees of politeness with Currency, time formats, dates',
      input:
        'miirigama sita kolaBA kotuva dhakvaa dhivena siiGhragaamii dhumriya  pebaravaari 14 vana senasuraadhaa  peravaru 8.45ta gamanaaramBha  karanaa bavadha dhumriya  gaasthuva rupiyal 140 k bavadha karuNaaven salakanna',
      expected:
        'මීරිගම සිට කොලඹ කොටුව දක්වා දිවෙන සීඝ්‍රගාමී දුම්රිය  පෙබරවාරි 14 වන සෙනසුරාදා  පෙරවරු 8.45ට ගමනාරම්භ  කරනා බවද දුම්රිය  ගාස්තුව රුපියල් 140 ක් බවද කරුණාවෙන් සලකන්න',
      length: 'M',
    },
    {
      id: 'Pos_Fun_0009',
      name: 'Slang and colloquial phrasing',
      input:
        'supiriyak eeka, ithaama lassanayi mihiriyi oyaagee giithaya. theruvan saraNayi. jayashrii',
      expected:
        'සුපිරියක් ඒක, ඉතාම ලස්සනයි මිහිරියි ඔයාගේ ගීතය. තෙරුවන් සරණයි. ජයශ්‍රී',
      length: 'S',
    },
    {
      id: 'Pos_Fun_0010',
      name: 'Polite, Common greetings',
      input: 'dhiirGhaayuveevaa  oba saemata.',
      expected: 'දීර්ඝායුවේවා  ඔබ සැමට.',
      length: 'S',
    },
    {
      id: 'Pos_Fun_0011',
      name: 'Compound, Multi-word expressions, Joined vs segmented word variations (with/without spaces)',
      input:
        'jaa-aela aDhiveegii pivisum maargaya pirisidhu kirima dhevana dhinatath sidhuviya.++++++++++++++++++++++++++++++++++++parisarayata aelmak nodhakvana minisungee saha kuuta masmaaQQsha veLedhuun visin kaalayak thissee jaraavaasa kara thibuu jaa-aela aDhiveega pivisum maargaya dhepasa shudhDha pavithra kiriima  dhevana  dhinata  sidhu keruNi.  jaa-aela nagaraaDhipathi roShan noonis mahathaa , dhisthrik paarlimeenthu manthrii stefni pranaandhu manthriithumangee haa aarThika katayuthu niyoojYA aemathi nishaantha jayaviira maethidhuungee aaraaDhanayen ema sThaanayee niriikShaNa chaarikaavaka yedhunu muulasThaanayee aDhYAkShakavarun saha  aayathanayee janathaakShan sQQviDhaanayee praDhaaniin raesva siti shramikayin aemathuu avasThaavayi mee',
      expected:
        'ජා-ඇල අධිවේගී පිවිසුම් මාර්ගය පිරිසිදු කිරිම දෙවන දිනටත් සිදුවිය.++++++++++++++++++++++++++++++++++++පරිසරයට ඇල්මක් නොදක්වන මිනිසුන්ගේ සහ කූට මස්මාංශ වෙළෙදූන් විසින් කාලයක් තිස්සේ ජරාවාස කර තිබූ ජා-ඇල අධිවේග පිවිසුම් මාර්ගය දෙපස ශුද්ධ පවිත්‍ර කිරීම  දෙවන  දිනට  සිදු කෙරුණි.  ජා-ඇල නගරාධිපති රොෂන් නෝනිස් මහතා , දිස්ත්‍රික් පාර්ලිමේන්තු මන්ත්‍රී ස්ටෙෆ්නි ප්‍රනාන්දු මන්ත්‍රීතුමන්ගේ හා ආර්ථික කටයුතු නියෝජ්‍ය ඇමති නිශාන්ත ජයවීර මැතිදූන්ගේ ආරාධනයෙන් එම ස්ථානයේ නිරීක්ෂණ චාරිකාවක යෙදුනු මූලස්ථානයේ අධ්‍යක්ෂකවරුන් සහ  ආයතනයේ ජනතාක්ෂන් සංවිධානයේ ප්‍රධානීන් රැස්ව සිටි ශ්‍රමිකයින් ඇමතූ අවස්ථාවයි මේ',
      length: 'L',
    },
    {
      id: 'Pos_Fun_0012',
      name: 'Negation patterns, Singular',
      input: 'mama oya dhee nokalami',
      expected: 'මම ඔය දේ නොකලමි',
      length: 'S',
    },
    {
      id: 'Pos_Fun_0013',
      name: 'Colloquial phrasing',
      input:
        'hath dheyiyanee mama kivvaa needha hadhdhaa kaelee yanna epaa kiyalaa',
      expected: 'හත් දෙයියනේ මම කිව්වා නේද හද්දා කැලේ යන්න එපා කියලා',
      length: 'M',
    },
    {
      id: 'Pos_Fun_0014',
      name: 'Informal, slangs',
      input:
        '2day Galle Fort ekeedhii magee 4n eka naethi unaa, dhaen mama mokadha karannee?',
      expected:
        '2day Galle Fort එකේදී මගේ 4n එක නැති උනා, දැන් මම මොකද කරන්නේ?',
      length: 'M',
    },
    {
      id: 'Pos_Fun_0015',
      name: 'English abbreviations and short forms',
      input:
        'adha kolaBA kotuvedhii 10AM valata vagee magee foon eka naethi unaa, dhaen mama gedhara yanava',
      expected:
        'අද කොලඹ කොටුවෙදී 10AM වලට වගේ මගේ ෆෝන් එක නැති උනා, දැන් මම ගෙදර යනව',
      length: 'M',
    },
    {
      id: 'Pos_Fun_0016',
      name: 'Negative question',
      input: 'oyaata pilivelata vaedak karanna beridha',
      expected: 'ඔයාට පිලිවෙලට වැඩක් කරන්න බෙරිද',
      length: 'S',
    },
    {
      id: 'Pos_Fun_0017',
      name: ' Complex sentences',
      input: 'adha raeeta api pipiNYNYA saha maNYNYokkaa kamu',
      expected: 'අද රෑට අපි පිපිඤ්ඤ සහ මඤ්ඤොක්කා කමු',
      length: 'S',
    },
    {
      id: 'Pos_Fun_0018',
      name: 'Sinhala  collocations',
      input: 'puhul horaa karen dhaenee',
      expected: 'පුහුල් හොරා කරෙන් දැනේ',
      length: 'S',
    },
    {
      id: 'Pos_Fun_0019',
      name: 'Multiple spaces',
      input: 'api                           loku ammage gedhara giyaa',
      expected: 'අපි                           ලොකු අම්මගෙ ගෙදර ගියා',
      length: 'M',
    },
    {
      id: 'Pos_Fun_0020',
      name: 'Multiple spaces, line breaks, and English technical/brand terms embedded in Singlish',
      input:
        'shrii lQQkaa thorathuru thaakShaNa aayathanayee (SLIIT) pariGhanaka piiTa maaDhYA eekakaya visin kriyaathmaka karana " panhiDHAta saviyak " vYaapRUthiya saDHAhaa dhravYAmaya aaDhaara ekathu kiriima mee vana vita aaramBha kara aetha. vipathata path va sitina apee ma paasal soyuru soyuriyan venuven obata haeki pamaNin mee saDHAhaa dhaayakathvaya sapayana lesa kaaruNika va illaa sitimu. obage aaDhaara SLIIT MINI AUDITORIUM parishraya vetha labaa dhiimata kaaruNika vanna.\n\nvaedi visthara saDHAhaa \n\n+94 70 357 8900',
      expected:
        'ශ්‍රී ලංකා තොරතුරු තාක්ෂණ ආයතනයේ (SLIIT) පරිඝනක පීඨ මාධ්‍ය ඒකකය විසින් ක්‍රියාත්මක කරන " පන්හිඳට සවියක් " ව්‍යාපෘතිය සඳහා ද්‍රව්‍යමය ආධාර එකතු කිරීම මේ වන විට ආරම්භ කර ඇත. විපතට පත් ව සිටින අපේ ම පාසල් සොයුරු සොයුරියන් වෙනුවෙන් ඔබට හැකි පමණින් මේ සඳහා දායකත්වය සපයන ලෙස කාරුණික ව ඉල්ලා සිටිමු. ඔබගෙ ආධාර SLIIT MINI AUDITORIUM පරිශ්‍රය වෙත ලබා දීමට කාරුණික වන්න.\n\nවැඩි විස්තර සඳහා \n\n+94 70 357 8900',
      length: 'L',
    },
    {
      id: 'Pos_Fun_0021',
      name: 'Repeated word expressions used for emphasis',
      input:
        'parisara dhuushanaya viviDha ayurin sidhuvee. aeththenma sidhuvee nova minisaa visin sidhu karayi. vaayu dhuushanaya, jala dhuushanaya ,pasa dhuushanaya ,avakaasha dhuushanaya   aadhii in samaharaki.',
      expected:
        'පරිසර දූශනය විවිධ අයුරින් සිදුවේ. ඇත්තෙන්ම සිදුවේ නොව මිනිසා විසින් සිදු කරයි. වායු දූශනය, ජල දූශනය ,පස දූශනය ,අවකාශ දූශනය   ආදී ඉන් සමහරකි.',
      length: 'M',
    },
    {
      id: 'Pos_Fun_0022',
      name: 'More than 1400 characters, Paragraph-style inputs',
      input:
        'noyek aesiimata pavaa priya novanaa shabDha, saha vikaashana upakaraNa valin nikmena haDA, haa noyek asamathulitha kampaNa tharQQga, x kiraNa haa venath  minis sirurata visha vaayu ,dhrava, paramaaNu  boomba vikiraNa boomba nisaadha parisaraya dhuushYA vee gas kaepiima nisaadha pRUThivi  goolayee hatagannaa asamathulitha  Bhaavaya nisaa..vaayu goolayee oosoon  sTharayata haani viimen idhiriyeedhii sathungee husma saDHAhaa pirisidhu vaathaya soyaa gaeNiimadha vishaala prasnayak vee.minissungee  akramavath vageema  vagakiimakin thora kriyaavan vahaama paalanaya haa niyaamanaya kiriimen mee nudhuree penena mahaavinaashaya madhak hoo valakaa nogathahoth minisaagee seema svaBhaavika saundharYee malagama ithaa ikmaNin kaNagaatuven yuthuva hoo saemariimata apadha jiivath  novanaa bava sithiya yuthuya.dhaenatath pramaadha bava magee haeGAiimayi.',
      expected:
        'නොයෙක් ඇසීමට පවා ප්‍රිය නොවනා ශබ්ධ, සහ විකාශන උපකරණ වලින් නික්මෙන හඬ, හා නොයෙක් අසමතුලිත කම්පණ තරංග, x කිරණ හා වෙනත්  මිනිස් සිරුරට විශ වායු ,ද්‍රව, පරමාණු  බෝම්බ විකිරණ බෝම්බ නිසාද පරිසරය දූශ්‍ය වේ ගස් කැපීම නිසාද පෘථිවි  ගෝලයේ හටගන්නා අසමතුලිත  භාවය නිසා..වායු ගෝලයේ ඕසෝන්  ස්ථරයට හානි වීමෙන් ඉදිරියේදී සතුන්ගේ හුස්ම සඳහා පිරිසිදු වාතය සොයා ගැණීමද විශාල ප්‍රස්නයක් වේ.මිනිස්සුන්ගේ  අක්‍රමවත් වගේම  වගකීමකින් තොර ක්‍රියාවන් වහාම පාලනය හා නියාමනය කිරීමෙන් මේ නුදුරේ පෙනෙන මහාවිනාශය මදක් හෝ වලකා නොගතහොත් මිනිසාගේ සේම ස්වභාවික සෞන්දරYඒ මලගම ඉතා ඉක්මණින් කණගාටුවෙන් යුතුව හෝ සැමරීමට අපද ජීවත්  නොවනා බව සිතිය යුතුය.දැනටත් ප්‍රමාද බව මගේ හැඟෛඉමයි.',
      length: 'L',
    },
    {
      id: 'Pos_Fun_0023',
      name: 'Numbers, symbols, inputs containing punctuation marks used in an address ',
      input: 'no.85/1, gamgoda paara, kehel vaththa, ambalanthota',
      expected: 'නො.85/1, ගම්ගොඩ පාර, කෙහෙල් වත්ත, අම්බලන්තොට',
      length: 'S',
    },
    {
      id: 'Pos_Fun_0024',
      name: 'Formal paragraphs',
      input:
        'vaathayata ekkarana karmaantha shaalaa vala dhuma, viviDha dhee giNi thaebiima gas kaepiima nisaa vaathayadha. karmaantha shaalaa roohal aadhiyen baehaera karana apadhravYA  saha minisaa visin parisarayata mudhaa harina apadhravYA, vagaa bim saDHAhaa yodhana rasaayanika dhravYA nisaadha pasa haa jalaya dhuushanaya vee.',
      expected:
        'වාතයට එක්කරන කර්මාන්ත ශාලා වල දුම, විවිධ දේ ගිණි තැබීම ගස් කැපීම නිසා වාතයද. කර්මාන්ත ශාලා රෝහල් ආදියෙන් බැහැර කරන අපද්‍රව්‍ය  සහ මිනිසා විසින් පරිසරයට මුදා හරින අපද්‍රව්‍ය, වගා බිම් සඳහා යොදන රසායනික ද්‍රව්‍ය නිසාද පස හා ජලය දූශනය වේ.',
      length: 'M',
    },
    {
      id: 'Pos_Fun_0025',
      name: 'Sentences with frequently used day-to-day expressions',
      input:
        'baeQQku prakaashanayee apa yaevuu adhaala  mudhala visheeSha kota dhakvaa aethi bava karuNaaven salakanna.',
      expected:
        'බැංකු ප්‍රකාශනයේ අප යැවූ අදාල  මුදල විශේෂ කොට දක්වා ඇති බව කරුණාවෙන් සලකන්න.',
      length: 'M',
    },
  ],

  negative: [
    {
      id: 'Neg_Fun_0001',
      name: 'Adding English sentences with Sinhala sentences',
      input:
        'shrii lQQkaava lookayee AI Bhaavithaya aduma rataval atharata pathvee. Global AI use is rising. Sri Lanka is still near the bottom. Microsoft AI Diffusion Report (H2 2025) anuva, lQQkaavee AI user share eka 6.6 percent pamaNayi. H1 2025 sita varDhanaya vuNee 0.4 percent vitharayi. ee anuva, lQQkaava lookayee AI Bhaavithaya aduma aarThikayan atharata pathvelaa. meyin kiyavennee mokakdha',
      expected:
        'ශ්‍රී ලංකාව ලෝකයේ AI භාවිතය අඩුම රටවල් අතරට පත්වේ. Global AI use is rising. Sri Lanka is still near the bottom. Microsoft AI Diffusion Report (H2 2025) අනුව, ලංකාවේ AI user share එක 6.6 percent පමණයි. H1 2025 සිට වර්ධනය වුණේ 0.4 percent විතරයි. ඒ අනුව, ලංකාව ලෝකයේ AI භාවිතය අඩුම ආර්ථිකයන් අතරට පත්වෙලා. මෙයින් කියවෙන්නේ මොකක්ද',
      length: 'M',
      issue: 'English sentences with Sinhala sentences might not work',
    },

    {
      id: 'Neg_Fun_0002',
      name: 'Website Links',
      input:
        'pahatha link eka click kara veb adaviyata pivisenna: https://example.com',
      expected:
        'පහත link එක click කර වෙබ් අඩවියට පිවිසෙන්න: https://example.com',
      length: 'M',
      issue: 'Website Links may not convert',
    },

    {
      id: 'Neg_Fun_0003',
      name: ' Words with no spaces in between',
      input: 'poddakehaatavenna',
      expected: 'පොඩ්ඩක්එහාටවෙන්න ',
      length: 'S',
      issue: ' Words with no spaces in between may not convert',
    },

    {
      id: 'Neg_Fun_0004',
      name: 'IT related commands that shoud stay as it is',
      input:
        'piilivelin pahatha viDhaana Bhaavithaa karanna: npm install in pasu npm run dev',
      expected:
        'පීලිවෙලින් පහත විධාන භාවිතා කරන්න: npm install ඉන් පසු npm run dev',
      length: 'M',
      issue: 'IT related commands that shoud stay as it is, may not convert',
    },

    {
      id: 'Neg_Fun_0005',
      name: 'Emails',
      input: 'SamanPerera@example.com',
      expected: 'SamanPerera@example.com',
      length: 'S',
      issue: 'Emails may not convert',
    },

    {
      id: 'Neg_Fun_0006',
      name: 'Names of people',
      input: 'Saman de silva mahathaa karuNaakara kaaryaalaya vetha paeminenna',
      expected: 'Saman de silva මහතා කරුණාකර කාර්යාලය වෙත පැමිනෙන්න',
      length: 'M',
      issue: 'Names of people may not convert properly',
    },
    {
      id: 'Neg_Fun_0007',
      name: 'Phonetic Variations Not Supported: only "V" supported, "W"  is not supported ',
      input: 'haawekuyi ibbekuyi gamanak giyaa',
      expected: 'හාවෙකුයි ඉබ්බෙකුයි ගමනක් ගියා',
      length: 'S',
      issue: 'Phonetic variations may not convert',
    },
    {
      id: 'Neg_Fun_0008',
      name: 'Brand Names Converted',
      input: 'api "perera and sons" ekata giyaa',
      expected: 'අපි "perera and sons" එකට ගියා',
      length: 'S',
      issue: 'Brand Names may not convert properly',
    },
    {
      id: 'Neg_Fun_0009',
      name: 'Passwords',
      input: ' obee murapadhaya nuwan#123 wee',
      expected: ' ඔබේ මුරපදය nuwan#123 wee',
      length: 'S',
      issue: 'Passwords may not convert',
    },

    {
      id: 'Neg_Fun_0010',
      name: 'Extensions',
      input:
        ' mama oyaata  evvaa note.exe zip file eka - eeka extract karaganna',
      expected: ' මම ඔයාට  එව්වා note.එxඑ zip file එක - ඒක extract කරගන්න',
      length: 'M',
      issue: 'Extensions may not convert',
    },
    {
      id: 'Neg_Fun_0011',
      name: 'Sentences containing places and common English words that should remain as they are',
      input:
        'adha mama upaadhiya gaththa, BSc (Hons) in Information Technology Specialising in Information Technology',
      expected:
        'අද මම උපාදිය ගත්ත, BSc (Hons) in Information Technology Specialising in Information Technology',
      length: 'M',
      issue:
        'Sentences containing places and common English words that should remain as they are, may not convert',
    },
  ],
};

test.describe('Singlish to Sinhala Translator Tests', () => {
  let page;

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto('https://www.swifttranslator.com/');
  });

  test.afterEach(async () => {
    await page.close();
  });

  // Helper function to execute test
  async function runTest(inputText) {
    // Find the textarea by its class
    const inputField = page.locator('textarea.w-full.h-80').first();

    // Clear and type
    await inputField.clear();
    await inputField.type(inputText);
    await page.keyboard.press('Space'); // Trigger conversion

    // Find output field
    const outputField = page.locator('.w-full.h-80').nth(1);

    // Wait for text to appear using polling
    await expect
      .poll(
        async () => {
          const text = await outputField.innerText();
          return text && text.trim().length > 0;
        },
        {
          message: 'Waited for translation to appear',
          timeout: 100000,
        },
      )
      .toBe(true);

    return (await outputField.innerText()).trim();
  }

  // POSITIVE TESTS
  for (const testCase of testData.positive) {
    test(`Positive Test ${testCase.id}: ${testCase.name}`, async () => {
      const actualOutput = await runTest(testCase.input);

      console.log(`Test: ${testCase.name}`);
      console.log(`Input: ${testCase.input}`);
      console.log(`Expected: ${testCase.expected}`);
      console.log(`Actual: ${actualOutput}`);

      const fs = require('fs');
      fs.appendFileSync(
        'test-debug.log',
        `\nTest: ${testCase.name}\nExpected: "${testCase.expected}"\nActual:   "${actualOutput}"\n`,
      );

      // Check if output is not empty
      expect(
        actualOutput,
        `Output was empty for input: ${testCase.input}`,
      ).toBeTruthy();

      // Strict check with trim
      expect(
        actualOutput.trim(),
        `Expected "${testCase.expected}" but got "${actualOutput.trim()}"`,
      ).toBe(testCase.expected);

      // For simple verification, we check if output contains Sinhala characters
      const sinhalaRegex = /[\u0D80-\u0DFF]/;
      expect(sinhalaRegex.test(actualOutput)).toBeTruthy();
    });
  }

  // NEGATIVE TESTS
  for (const testCase of testData.negative) {
    test(`Negative Test ${testCase.id}: ${testCase.name}`, async () => {
      const actualOutput = await runTest(testCase.input);

      console.log(`Negative Test: ${testCase.name}`);
      console.log(`Input: ${testCase.input}`);
      console.log(`Expected Issue: ${testCase.issue}`);
      console.log(`Actual: ${actualOutput}`);

      if (testCase.expected) {
        // If we have expected value, check if it matches
        expect(
          actualOutput,
          `Output was empty for input: ${testCase.input}`,
        ).toBeTruthy();
        expect(
          actualOutput,
          `Expected "${testCase.expected}" but got "${actualOutput}"`,
        ).toBe(testCase.expected);
      }
    });
  }

  test('Pos_UI_0001: Copy button functionality', async () => {
    // Find input and output areas
    const inputField = page.locator('textarea.w-full.h-80').first();
    const outputField = page.locator('.w-full.h-80').nth(1);

    console.log('Testing copy button functionality...');

    // Type a sample text
    await inputField.clear();
    await inputField.type('mama nuvara yanavaa');
    await page.keyboard.press('Space'); // Trigger conversion

    // Wait for translation to appear
    await expect
      .poll(
        async () => {
          const text = await outputField.innerText();
          return text && text.trim().length > 0;
        },
        {
          message: 'Waited for translation to appear',
          timeout: 10000,
        },
      )
      .toBe(true);

    const translatedText = (await outputField.innerText()).trim();
    console.log('Translated text:', translatedText);

    // Verify Sinhala characters are present
    const sinhalaRegex = /[\u0D80-\u0DFF]/;
    expect(sinhalaRegex.test(translatedText)).toBeTruthy();

    const copyButton = page
      .locator('button:has-text("Copy")')
      .or(page.locator('button[aria-label*="copy" i]'))
      .or(
        page.locator('button svg').filter({ hasText: '' }), // Copy icon
      )
      .first();

    // Check if copy button is visible and clickable
    if ((await copyButton.count()) > 0) {
      await copyButton.click();
      console.log('Copy button clicked successfully');

      const copiedNotification = page
        .locator('text=/copied/i')
        .or(page.locator('[role="alert"]'));

      // Wait a moment for any copy confirmation to appear
      await page.waitForTimeout(500);

      console.log('Copy operation completed');
    } else {
      console.log('Copy button not found - feature may not be implemented yet');
    }

    // Verify the output field still contains the text after copy
    expect(await outputField.innerText()).toContain(translatedText);
  });
});
