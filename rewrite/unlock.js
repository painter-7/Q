#############################################################################
# 个人整理
#############################################################################

hostname = *kuwo*, *lrts*, pan.baidu.com, *wps*, account.wps.cn,*account.wps.com , *.docer.wps.cn, vipapi.wps.cn, account.wps.cn,dq.xiangha.com,apiios_dq.xiangha.com,testflight.apple.com,biz.caiyunapp.com,license.pdfexpert.com,buy.itunes.apple.com,fufei.fengyunsoft.cn,buy.itunes.apple.com


#>>>>>>>>>>>>>>>>生活类VIP
# 完美解锁酷我音乐     *.kuwo.cn, *.lrts.me 
^https?:\/\/.*(kuwo|lrts).*(music\.pay\?ne|\/a\.p|v\d\/api\/(user\/in|pay\/vi)|\w{3}\/v\d\/user\/vi|\w{3}\/spi\/ms|\w{3}\/v\d\/the|\w{3}\/enc\/use) url script-response-body https://raw.githubusercontent.com/painter-7/Q/main/Cuttlefish/Script/kwyy.js
^https?:\/\/.*(kuwo|lrts).*(music\.pay\?ui) url script-request-header https://raw.githubusercontent.com/painter-7/Q/main/Cuttlefish/Script/kwyy.js

# 菜谱大全(dq.xiangha.com,apiios_dq.xiangha.com)
^https:\/\/apiios_dq\.xiangha\.com url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/cpdq.js



#>>>>>>>>>>>>>>>>新闻类VIP



#>>>>>>>>>>>>>>>>图影类VIP
# aptv(buy.itunes.apple.com)
^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/aptv.js

# 音频剪辑- 音乐剪辑大师+解锁订阅(buy.itunes.apple.com)
^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/ypjj.js

# > Picsew解锁专业版
^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/PicsewProCrack.js




#>>>>>>>>>>>>>>>>工具类VIP
#!desc=WPS解锁本地会员,支持大陆版以及非大陆版(2022.07.10)
^https?:\/\/.*?account\.wps\.(com|cn)(:\d+)?\/api\/users\/\w+\/overview$ url script-response-body https://raw.githubusercontent.com/I-am-R-E/Functional-Store-Hub/Master/WPSOffice/Script/WPS.js

# > WPS解锁稻壳会员(account.wps.cn,*account.wps.com , *.docer.wps.cn, vipapi.wps.cn, account.wps.cn)
^https?:\/\/account\.wps\.cn\/api\/v3\/mine\/vips url script-response-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/WPSDocerVIPuserCrack.js
^https?:\/\/.+\.(docer.)?wps.cn\/(user\/v1\/vip|android\/mb\/buy|download\/v1\/ios|partner\/invoke\/usable|(api|rank)\/v1(\/mobile\/mb)?\/detail) url script-request-header https://raw.githubusercontent.com/yqc007/QuantumultX/master/WPSDocerVIPowerCrack.js

#国区TF无法下载已下架app规则(testflight.apple.com)
^https?:\/\/testflight\.apple\.com\/v2\/accounts\/.*\/apps\/\d*/builds/\d*/install url request-body storefrontId" : ".*", request-body storefrontId" : "143441-1,29",

#彩云（解锁VIP）(biz.caiyunapp.com)
^https:\/\/biz\.caiyunapp\.com\/v2\/user.+ url script-response-body https://gjds.vip/QX/pojie/cytq.js

# documents+解锁订阅(license.pdfexpert.com)
^https:\/\/license\.pdfexpert\.com\/api\/2\.0\/documents\/subscription\/refresh url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/documents.js

# 最美证件照(fufei.fengyunsoft.cn)
^https:\/\/fufei\.fengyunsoft\.cn\/api\/client\/info url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/zmzjz.js

# 扫描全能王 pro    ap*.intsig.net
^https:\/\/(api|api-cs)\.intsig\.net\/purchase\/cs\/query_property\? url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/CamScanner.js

