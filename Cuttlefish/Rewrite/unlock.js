#############################################################################
# 个人整理
#############################################################################

hostname = *xiaozujian, lchttpapi.xczim.com, *kuwo*, *lrts*, gateway.caixin.com, notability.com, pan.baidu.com, spclient.wg.spotify.com, *wps*, ticktick.com, ap*.intsig.net, ipadcms.caixin.com, server.yoyiapp.com, *.aoscdn.com, *.xiuxiu.meitu.com, claritywallpaper.com, api.meiease.cn, restore-access.indream.app, appraven.net,account.wps.cn,*account.wps.com , *.docer.wps.cn, vipapi.wps.cn, account.wps.cn,dq.xiangha.com,apiios_dq.xiangha.com,testflight.apple.com,biz.caiyunapp.com,license.pdfexpert.com,buy.itunes.apple.com,fufei.fengyunsoft.cn,buy.itunes.apple.com


#>>>>>>>>>>>>>>>>生活类VIP
# ✅ Spotify
^https:\/\/spclient\.wg\.spotify\.com\/(bootstrap\/v1\/bootstrap|user-customization-service\/v1\/customize)$ url script-response-body https://raw.githubusercontent.com/app2smile/rules/master/js/spotify-proto.js

# ✅ 酷我音乐(会员共享)[vip至2023-05-07]
^https?:\/\/.*(kuwo|lrts).*(music\.pay\?ne|\/a\.p|v\d\/api\/(user\/in|pay\/vi)|\w{3}\/v\d\/user\/vi|\w{3}\/spi\/ms|\w{3}\/v\d\/the|\w{3}\/enc\/use) url script-response-body https://codeberg.org/ddgksf2013/Cuttlefish/raw/branch/master/Script/kwyy.js
^https?:\/\/.*(kuwo|lrts).*(music\.pay\?ui) url script-request-header https://codeberg.org/ddgksf2013/Cuttlefish/raw/branch/master/Script/kwyy.js

# 菜谱大全(dq.xiangha.com,apiios_dq.xiangha.com)
^https:\/\/apiios_dq\.xiangha\.com url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/cpdq.js



#>>>>>>>>>>>>>>>>新闻类VIP
# ✅ 财新周刊
http://ipadcms.caixin.com/tmp/articles/* url script-response-body https://codeberg.org/ddgksf2013/Cuttlefish/raw/branch/master/Crack/cxzk.js

# ✅ 财新(会员共享)[vip至2023-06-06]
#^https?:\/\/gateway\.caixin\.com\/api\/app\-api\/auth\/(validate|validateAudioAuth) url script-request-header https://raw.githubusercontent.com/I-am-R-E/Functional-Store-Hub/Master/CaiXin/Script/CaiXin.js



#>>>>>>>>>>>>>>>>图影类VIP
# ✅ Fimo(need登录)
^https://server.yoyiapp.com/fimo-user/user$ url script-response-body https://codeberg.org/ddgksf2013/Cuttlefish/raw/branch/master/Crack/fimo.js

# ✅ 傲软抠图(need登录)
https?:\/\/.*\.aoscdn\.com\/base\/vip\/client\/authorizations$ url script-response-body https://codeberg.org/ddgksf2013/Cuttlefish/raw/branch/master/Crack/apowersoft.js

# ✅ 美图秀秀(need登录)
^https?:\/\/(h5|api)\.xiuxiu\.meitu\.com\/v\d\/(h\d\/vip|vip|user)\/ url script-response-body https://raw.githubusercontent.com/I-am-R-E/QuantumultX/main/JavaScript/MeiTuXiuXiu.js

# ✅ 克拉壁纸
^https:\/\/claritywallpaper\.com\/clarity\/api\/(userInfo|special\/queryByCatalogAll) url script-response-body https://codeberg.org/ddgksf2013/Cuttlefish/raw/branch/master/Crack/clarity.js

# ✅ Picsart
^https?:\/\/api\.meiease\.cn\/shop\/subscription\/validate url script-response-body https://codeberg.org/ddgksf2013/Cuttlefish/raw/branch/master/Crack/picsart.js

# aptv(buy.itunes.apple.com)
^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/aptv.js

# 音频剪辑- 音乐剪辑大师+解锁订阅(buy.itunes.apple.com)
^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/ypjj.js

# > Picsew解锁专业版
^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/PicsewProCrack.js




#>>>>>>>>>>>>>>>>工具类VIP
# ✅ TopWidgets
^https?:\/\/.*xiaozujian\.com\/api\/app\/config\/userConfig url script-response-body https://codeberg.org/ddgksf2013/Cuttlefish/raw/branch/master/Crack/topwidgets.js

# ✅ Notability
https://notability.com/subscriptions url script-response-body https://codeberg.org/ddgksf2013/Cuttlefish/raw/branch/master/Crack/notability.js

# ✅ 百度网盘(倍速)
https:\/\/pan\.baidu\.com\/rest\/\d\.\d\/membership\/user url script-response-body https://codeberg.org/ddgksf2013/Cuttlefish/raw/branch/master/Crack/bdcloud.js

# ✅ WPS(国区)
^https?:\/\/[a-z-]*account\.wps\.c(n|om)(:\d+|)\/api\/users url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/Wps.js

# > WPS解锁稻壳会员(account.wps.cn,*account.wps.com , *.docer.wps.cn, vipapi.wps.cn, account.wps.cn)
^https?:\/\/account\.wps\.cn\/api\/v3\/mine\/vips url script-response-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/WPSDocerVIPuserCrack.js
^https?:\/\/.+\.(docer.)?wps.cn\/(user\/v1\/vip|android\/mb\/buy|download\/v1\/ios|partner\/invoke\/usable|(api|rank)\/v1(\/mobile\/mb)?\/detail) url script-request-header https://raw.githubusercontent.com/yqc007/QuantumultX/master/WPSDocerVIPowerCrack.js

# ✅ Nicegram
https?:\/\/restore-access\.indream\.app\/restoreAccess\?id=\d{5,10} url echo-response text/json echo-response https://codeberg.org/ddgksf2013/Cuttlefish/raw/branch/master/Crack/nicegram_body.js

# ✅ Appraven(美化)
^https?:\/\/appraven\.net\/AppRaven\/(app|social|buy) url script-response-body https://codeberg.org/ddgksf2013/Cuttlefish/raw/branch/master/Crack/appraven.js

# ✅ 扫描全能王
^https:\/\/(api|api-cs)\.intsig\.net\/purchase\/cs\/query_property\? url script-response-body https://codeberg.org/ddgksf2013/Cuttlefish/raw/branch/master/Crack/camscanner.js

#国区TF无法下载已下架app规则(testflight.apple.com)
^https?:\/\/testflight\.apple\.com\/v2\/accounts\/.*\/apps\/\d*/builds/\d*/install url request-body storefrontId" : ".*", request-body storefrontId" : "143441-1,29",

#彩云（解锁VIP）(biz.caiyunapp.com)
^https:\/\/biz\.caiyunapp\.com\/v2\/user.+ url script-response-body https://gjds.vip/QX/pojie/cytq.js

# documents+解锁订阅(license.pdfexpert.com)
^https:\/\/license\.pdfexpert\.com\/api\/2\.0\/documents\/subscription\/refresh url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/documents.js

# 最美证件照(fufei.fengyunsoft.cn)
^https:\/\/fufei\.fengyunsoft\.cn\/api\/client\/info url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/zmzjz.js
