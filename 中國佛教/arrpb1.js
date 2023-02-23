// 配合timeEnd()成對出現。 打印出代碼執行的時間
console.time('共耗費了')
// 導入模組
var fs = require('fs')
var path = require('path')
// 可改寫副檔名及編碼
var x = '.txt'
var ru = 'utf16le'
var wu = 'utf8'
// 子目錄名，如果有的話
var mula = 'ThonZu/'
// 完成後的副檔名
var afterName = '.xml'
// 裝載運算結果的物件
var okfile = ''
// 取得目錄列表
// var h = path.normalize('./xml')

// var lst = fs.readFileSync(mula + 'paauk.lst', wu).split('\n')
// fs.writeFileSync('p.lst', lst.join('\n'), wu)
// lst = fs.readFileSync('p.lst', wu).split('\n')
var lst = ["index.txt", "mode-zhgfjshinue-index.txt", "zhgfjshinue01.txt", "zhgfjshinue02.txt", "zhgfjshinue03.txt", "zhgfjshinue04.txt", "zhgfjshinue05.txt", "zhgfjshinue06.txt", "zhgfjshinue07.txt", "zhgfjshinue08.txt", "zhgfjshinue09.txt", "zhgfjshinue10.txt", "zhgfjshinue11.txt", "zhgfjshinue12.txt", "zhgfjshinue13.txt", "zhgfjshinue14.txt", "zhgfjshinue15.txt", "zhgfjshinue16.txt", "zhgfjshinue17.txt", "mode-fjzhongwai-index.txt", "fjzhongwai01.txt", "fjzhongwai02.txt", "fjzhongwai03.txt", "fjzhongwai04.txt", "fjzhongwai05.txt", "fjzhongwai06.txt", "fjzhongwai07.txt", "fjzhongwai08.txt", "fjzhongwai09.txt", "fjzhongwai10.txt", "mode-zhgfjzongpai-index.txt", "zhgfjzongpai01.txt", "zhgfjzongpai02.txt", "zhgfjzongpai03.txt", "zhgfjzongpai04.txt", "zhgfjzongpai05.txt", "zhgfjzongpai06.txt", "zhgfjzongpai07.txt", "zhgfjzongpai08.txt", "mode-fjyigui-index.txt", "fjyigui01.txt", "fjyigui02.txt", "fjyigui03.txt", "fjyigui04.txt", "fjyigui05.txt", "fjyigui06.txt", "fjyigui07.txt", "fjyigui08.txt", "fjyigui09.txt", "fjyigui10.txt", "fjyigui11.txt", "fjyigui12.txt", "fjyigui13.txt", "fjyigui14.txt", "fjyigui15.txt", "mode-fjrenwu-index.txt", "fjrenwu01.txt", "fjrenwu02.txt", "fjrenwu03.txt", "fjrenwu04.txt", "fjrenwu05.txt", "fjrenwu06.txt", "fjrenwu07.txt", "fjrenwu08.txt", "fjrenwu09.txt", "fjrenwu10.txt", "fjrenwu11.txt", "fjrenwu12.txt", "fjrenwu13.txt", "fjrenwu14.txt", "fjrenwu15.txt", "fjrenwu16.txt", "fjrenwu17.txt", "fjrenwu18.txt", "fjrenwu19.txt", "fjrenwu20.txt", "fjrenwu21.txt", "fjrenwu22.txt", "fjrenwu23.txt", "fjrenwu24.txt", "fjrenwu25.txt", "fjrenwu26.txt", "fjrenwu27.txt", "fjrenwu28.txt", "fjrenwu29.txt", "fjrenwu30.txt", "fjrenwu31.txt", "fjrenwu32.txt", "fjrenwu33.txt", "fjrenwu34.txt", "fjrenwu35.txt", "fjrenwu36.txt", "fjrenwu37.txt", "fjrenwu38.txt", "fjrenwu39.txt", "fjrenwu40.txt", "fjrenwu41.txt", "fjrenwu42.txt", "fjrenwu43.txt", "fjrenwu44.txt", "fjrenwu45.txt", "fjrenwu46.txt", "fjrenwu47.txt", "fjrenwu48.txt", "fjrenwu49.txt", "fjrenwu50.txt", "fjrenwu51.txt", "fjrenwu52.txt", "fjrenwu53.txt", "fjrenwu54.txt", "fjrenwu55.txt", "fjrenwu56.txt", "fjrenwu57.txt", "fjrenwu58.txt", "fjrenwu59.txt", "fjrenwu60.txt", "fjrenwu61.txt", "fjrenwu62.txt", "fjrenwu63.txt", "fjrenwu64.txt", "fjrenwu65.txt", "fjrenwu66.txt", "fjrenwu67.txt", "fjrenwu68.txt", "fjrenwu69.txt", "fjrenwu70.txt", "fjrenwu71.txt", "fjrenwu72.txt", "fjrenwu73.txt", "fjrenwu74.txt", "fjrenwu75.txt", "fjrenwu76.txt", "fjrenwu77.txt", "fjrenwu78.txt", "fjrenwu79.txt", "fjrenwu80.txt", "fjrenwu81.txt", "fjrenwu82.txt", "fjrenwu83.txt", "fjrenwu84.txt", "fjrenwu85.txt", "fjrenwu86.txt", "fjrenwu87.txt", "fjrenwu88.txt", "fjrenwu89.txt", "fjrenwu90.txt", "fjrenwu91.txt", "fjrenwu92.txt", "mode-fjjingdian-index.txt", "fjjingdian001.txt", "fjjingdian002.txt", "fjjingdian003.txt", "fjjingdian004.txt", "fjjingdian005.txt", "fjjingdian006.txt", "fjjingdian007.txt", "fjjingdian008.txt", "fjjingdian009.txt", "fjjingdian010.txt", "fjjingdian011.txt", "fjjingdian012.txt", "fjjingdian013.txt", "fjjingdian014.txt", "fjjingdian015.txt", "fjjingdian016.txt", "fjjingdian017.txt", "fjjingdian018.txt", "fjjingdian019.txt", "fjjingdian020.txt", "fjjingdian021.txt", "fjjingdian022.txt", "fjjingdian023.txt", "fjjingdian024.txt", "fjjingdian025.txt", "fjjingdian026.txt", "fjjingdian027.txt", "fjjingdian028.txt", "fjjingdian029.txt", "fjjingdian030.txt", "fjjingdian031.txt", "fjjingdian032.txt", "fjjingdian033.txt", "fjjingdian034.txt", "fjjingdian035.txt", "fjjingdian036.txt", "fjjingdian037.txt", "fjjingdian038.txt", "fjjingdian039.txt", "fjjingdian040.txt", "fjjingdian041.txt", "fjjingdian042.txt", "fjjingdian043.txt", "fjjingdian044.txt", "fjjingdian045.txt", "fjjingdian046.txt", "fjjingdian047.txt", "fjjingdian048.txt", "fjjingdian049.txt", "fjjingdian050.txt", "fjjingdian051.txt", "fjjingdian052.txt", "fjjingdian053.txt", "fjjingdian054.txt", "fjjingdian055.txt", "fjjingdian056.txt", "fjjingdian057.txt", "fjjingdian058.txt", "fjjingdian059.txt", "fjjingdian060.txt", "fjjingdian061.txt", "fjjingdian062.txt", "fjjingdian063.txt", "fjjingdian064.txt", "fjjingdian065.txt", "fjjingdian066.txt", "fjjingdian067.txt", "fjjingdian068.txt", "fjjingdian069.txt", "fjjingdian070.txt", "fjjingdian071.txt", "fjjingdian072.txt", "fjjingdian073.txt", "fjjingdian074.txt", "fjjingdian075.txt", "fjjingdian076.txt", "fjjingdian077.txt", "fjjingdian078.txt", "fjjingdian079.txt", "fjjingdian080.txt", "fjjingdian081.txt", "fjjingdian082.txt", "fjjingdian083.txt", "fjjingdian084.txt", "fjjingdian085.txt", "fjjingdian086.txt", "fjjingdian087.txt", "fjjingdian088.txt", "fjjingdian089.txt", "fjjingdian090.txt", "fjjingdian091.txt", "fjjingdian092.txt", "fjjingdian093.txt", "fjjingdian094.txt", "fjjingdian095.txt", "fjjingdian096.txt", "fjjingdian097.txt", "fjjingdian098.txt", "fjjingdian099.txt", "fjjingdian100.txt", "fjjingdian101.txt", "fjjingdian102.txt", "fjjingdian103.txt", "fjjingdian104.txt", "fjjingdian105.txt", "fjjingdian106.txt", "fjjingdian107.txt", "fjjingdian108.txt", "fjjingdian109.txt", "fjjingdian110.txt", "fjjingdian111.txt", "fjjingdian112.txt", "fjjingdian113.txt", "fjjingdian114.txt", "fjjingdian115.txt", "fjjingdian116.txt", "fjjingdian117.txt", "fjjingdian118.txt", "fjjingdian119.txt", "fjjingdian120.txt", "fjjingdian121.txt", "fjjingdian122.txt", "fjjingdian123.txt", "fjjingdian124.txt", "fjjingdian125.txt", "fjjingdian126.txt", "fjjingdian127.txt", "fjjingdian128.txt", "fjjingdian129.txt", "mode-fjjiaoli-index.txt", "fjjiaoli01.txt", "fjjiaoli02.txt", "fjjiaoli03.txt", "fjjiaoli04.txt", "fjjiaoli05.txt", "fjjiaoli06.txt", "fjjiaoli07.txt", "fjjiaoli08.txt", "fjjiaoli09.txt", "fjjiaoli10.txt", "fjjiaoli11.txt", "fjjiaoli12.txt", "fjjiaoli13.txt", "fjjiaoli14.txt", "fjjiaoli15.txt", "fjjiaoli16.txt", "fjjiaoli17.txt", "fjjiaoli18.txt", "fjjiaoli19.txt", "fjjiaoli20.txt", "fjjiaoli21.txt", "fjjiaoli22.txt", "fjjiaoli23.txt", "fjjiaoli24.txt", "fjjiaoli25.txt", "fjjiaoli26.txt", "fjjiaoli27.txt", "fjjiaoli28.txt", "fjjiaoli29.txt", "fjjiaoli30.txt", "fjjiaoli31.txt", "fjjiaoli32.txt", "fjjiaoli33.txt", "fjjiaoli34.txt", "fjjiaoli35.txt", "fjjiaoli36.txt", "fjjiaoli37.txt", "fjjiaoli38.txt", "fjjiaoli39.txt", "fjjiaoli40.txt", "fjjiaoli41.txt", "fjjiaoli42.txt", "fjjiaoli43.txt", "fjjiaoli44.txt", "fjjiaoli45.txt", "fjjiaoli46.txt", "fjjiaoli47.txt"]
// ===============================================
// 開始讀檔
// for (var k = 0; k < lst.length; k++) {
for (var k of lst) {
    // 用絕對路徑讀入檔案，使用陣列中的檔名
    // var n = path.normalize(h + '/' + k)
    var a = fs.readFileSync(k, ru)
    // 導入陣列，準備編輯
    // 刪除過多的空行，及<頁<段
    // 因為《續藏》第1行是頁碼，必須刪除第1行的頁碼，但先要在最前面加一行，不然在後面的for b[0]會轉換不到
    // a = '<file>\n' + a + '\n</file>'
    var b = a
        // .replace(/<頁碼? [^>]+>[\n|\r]*/g, '')
        // .replace(/<段\/?>[\n|\r]*/g, '')
        // .replace(/[\n|\r]{3,}/g, '\n\n')
        // 接合標記內的斷行
        .replace(/(<[^>]*)[\n|\r]([^>]*>)/g, '$1$2\n')
        .replace(/<頁碼? [^>]+>/g, '')
        .replace(/<段\/?>/g, '')
        // .replace(/<聯 i/g, '<k to')
        // .replace(/<聯 l/g, '<a href')
        // .replace(/聯>/g, 'a>')
        .replace(/<_-書 .+/g, '')
        .replace(/_-章>/g, 'le>')
        .replace(/_-節>/g, 'je>')
        .replace(/<檔>/g, '======')
        .replace(/<\/檔>/g, '====')
        .replace(/&/g, '＆')
        .replace(/粗>/g, 'b>')
        .replace(/經>/g, 'xa>')
        // .replace(/字母>/g, 'h1>')
        .replace(/編目資訊>/g, 'ml>')
        .replace(/編輯>/g, 'kai>')
        .replace(/原書分頁>/g, 'hr>')
        .replace(/相應部>/g, 'sep>')
        .replace(/英文名>/g, 'eng>')
        .replace(/<嵌?圖 f/g, '<img n')
        .replace(/<註/g, '<fn')
        .replace(/註>/g, 'fn>')
        // .replace(/<釋([^>]+)\/>(.*)/g, '<h1$1>$2</h1>')
        .replace(/<釋/g, '<a')
        .replace(/釋>/g, 'a>')
        .replace(/<頁碼>/g, '<rubynote t="')
        .replace(/<\/頁碼>/g, '"/>')
        .replace(/<偏右字>/g, '<rubynote t="')
        .replace(/<\/偏右字>/g, '"/>')
        .replace(/序>/g, 'talk>')
        .replace(/分>/g, 'pv>')
        .replace(/跋>/g, 'ba>')
        .replace(/會>/g, 'va>')
        .replace(/其他>/g, 'other>')
        .replace(/附文>/g, 'ps>')
        .replace(/科判>/g, 'h0>')
        .replace(/卷>/g, 'sarticle>')
        .replace(/<冊/g, '<book')
        .replace(/冊>/g, 'book>')
        .replace(/<集/g, '<group')
        .replace(/集>/g, 'group>')
        .replace(/<編/g, '<group')
        .replace(/編>/g, 'group>')
        .replace(/大>/g, 'tag>')
        .replace(/表>/g, 'kai>')
        .replace(/<書/g, '<group')
        .replace(/書>/g, 'group>')
        .replace(/章>/g, 'article>')
        .replace(/節>/g, 'h1>')
        .replace(/類>/g, 'h2>')
        .replace(/項>/g, 'h3>')
        .replace(/文>/g, 'h4>')
        .replace(/篇>/g, 'h5>')
        .replace(/年>/g, 'year>')
        .replace(/詩>/g, 'si>')
        .replace(/著者>/g, 'sr>')
        .replace(/詞>/g, 'tag>')
        .replace(/人名>/g, 'name>')
        .replace(/問>/g, 'ask>')
        .replace(/答>/g, 'rep>')
        .replace(/小字>/g, 'little>')
        .replace(/字>/g, 'zi>')
        .replace(/原出處>/g, 'ptr>')
        .replace(/參考書>/g, 'def>')
        .replace(/期>/g, 'l>')
        .replace(/藥>/g, 'by>')
        .replace(/方>/g, 'bf>')
        .replace(/症>/g, 'bz>')
        // .replace(/甲>/g, 'h1>')
        // .replace(/乙>/g, 'h2>')
        // .replace(/丙>/g, 'h3>')
        // .replace(/丁>/g, 'h4>')
        // .replace(/戊>/g, 'h5>')
        // .replace(/己>/g, 'h6>')
        // .replace(/庚>/g, 'h7>')
        // .replace(/辛>/g, 'h8>')
        // .replace(/壬>/g, 'h9>')
        // .replace(/癸>/g, 'h10>')
        // .replace(/子>/g, 'h11>')
        // .replace(/丑>/g, 'h12>')
        // .replace(/寅>/g, 'h13>')
        // .replace(/卯>/g, 'h14>')
        // .replace(/辰>/g, 'h15>')
        // .replace(/巳>/g, 'h16>')
        // .replace(/午>/g, 'h17>')
        // .replace(/未>/g, 'h18>')
        // .replace(/申>/g, 'h19>')
        // .replace(/酉>/g, 'h20>')
        // .replace(/戌>/g, 'h21>')
        // .replace(/亥>/g, 'h22>')
        // .replace(/日>/g, 'h23>')
        // .replace(/月>/g, 'h24>')
        // .replace(/火>/g, 'h25>')
        // .replace(/水>/g, 'h26>')
        // .replace(/木>/g, 'h27>')
        // .replace(/金>/g, 'h28>')
        // .replace(/土>/g, 'h29>')
        // .replace(/春>/g, 'h30>')
        // .replace(/夏>/g, 'h31>')
        // .replace(/秋>/g, 'h32>')
        // .replace(/冬>/g, 'h33>')
        // .replace(/東>/g, 'h34>')
        // .replace(/《/g, '<bf>《')
        // .replace(/》/g, '》</bf>')
        // .replace(/〈/g, '<by>〈')
        // .replace(/〉/g, '〉</by>')
        // .replace(/〔/g, '<bz>〔')
        // .replace(/〕/g, '〕</bz>')
        .replace(/(<\/by>)<\/by>/g, '$1')
        .replace(/(<\/bf>)<\/bf>/g, '$1')
        .replace(/(<\/bz>)<\/bz>/g, '$1')
        .replace(/(<by>)<by>/g, '$1')
        .replace(/(<bf>)<bf>/g, '$1')
        .replace(/(<bz>)<bz>/g, '$1')
        .split('\n')

    // 100字切行
    for (var i = 0; i < b.length; i++) {
        // 刪除行首空白
        b[i] = b[i].replace(/^　　/g, '')
            // 刪除不要的聯結
            .replace(/<聯[^聯]+聯>/g, '')

        // b[i] = b[i].replace(/(.{100})/g, '$1\n')
        //     // 接合標記內的斷行
        //     .replace(/(<[^>]*)[\n|\r]([^>]*>)/g, '$1$2\n')
    }

    // 導入陣列內
    okfile += b.join('\n')
    // 各檔完成時返回通知
    console.log('arrpb is OK: ' + k)
}

// ===============================================
// 因為整合寫入一個檔內，所以等全部寫入後再上頁碼
// 刪除空行
var z = okfile.replace(/[\n\r]+/g, '\n').split('\n')
// 加上批次冊碼頁碼
// 預設變量，才能累加冊碼頁碼
var s0 = 0
var s1 = 0
var s2 = 1
var sfn = 1
var sa = 1

// 第1行不好轉換，會出現亂碼，所以從第2行開始
for (var i = 1; i < z.length; i++) {
    // 刪除行首空白
    // z[i] = z[i].replace(/^ +/g, '')
    // 加上冊碼頁碼
    // 多個檔案的時候，不好算出冊碼，就省去冊碼
    if (/<group/.test(z[i]) || i == 1 || s2 > 1023) {
        s2 = 1
        // s1++
        // z[i] = '<pb n="' + s1 + '.' + s2 + '"/>\n' + z[i]
        z[i] = '<pb n="' + s2 + '"/>\n' + z[i]
        s0 = i + 30
    }
    if (i == s0) {
        s2++
        // z[i] = '<pb n="' + s1 + '.' + s2 + '"/>\n' + z[i]
        z[i] = '<pb n="' + s2 + '"/>\n' + z[i]
        s0 = i + 30
    }
}
// 用絕對路徑寫入檔案
fs.writeFileSync('D:/GitHub/china_buddhist-corpus/okchina.xml', '<file>\n' + z.join('\n') + '\n</file>', wu)

// 全部完成時返回通知
console.log('All is OK')

// 'test'名字要和time()中的名字保持一致
console.timeEnd('共耗費了')