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
var lst = ["fytc.txt", "1.txt", "1-1.txt", "1-1.txt", "1-2.txt", "1-3.txt", "1-4.txt", "1-5.txt", "1-6.txt", "1-7.txt", "1-8.txt", "1-9.txt", "1-10.txt", "2!.txt", "2.txt", "2-1.txt", "2-2.txt", "2-3.txt", "3-4.txt", "3!.txt", "3.txt", "3-1.txt", "3-2.txt", "3-3.txt", "4-2.txt", "4!.txt", "4.txt", "4-1.txt", "5!.txt", "5.txt", "5-1.txt", "5-2.txt", "5-3.txt", "5-4.txt", "5-5.txt", "5-6.txt", "5-7.txt", "5-8.txt", "6.txt", "6-1.txt", "6-2.txt", "6-3.txt", "6-4.txt", "7.txt", "7-1.txt", "7-2.txt", "8.txt", "8-1.txt", "9.txt", "9-1.txt", "9-2.txt", "9-3.txt", "10.txt", "10-1.txt"]
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
        .replace(/<\/?[標史粗篇]>/g, '')
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
        .replace(/經>/g, 'article>')
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
    if (/<article/.test(z[i]) || i == 1 || s2 > 1023) {
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
fs.writeFileSync('D:/GitHub/china_buddhist-corpus/okfytc.xml', '<file>\n' + z.join('\n') + '\n</file>', wu)

// 全部完成時返回通知
console.log('All is OK')

// 'test'名字要和time()中的名字保持一致
console.timeEnd('共耗費了')