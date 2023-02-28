#############################################################################
# 个人整理
#############################################################################

hostname = *kuwo*, *lrts*, pan.baidu.com, *wps*, account.wps.cn,*account.wps.com , *.docer.wps.cn, vipapi.wps.cn, account.wps.cn,dq.xiangha.com,apiios_dq.xiangha.com,testflight.apple.com,license.pdfexpert.com,fufei.fengyunsoft.cn,pan.baidu.com, *faceu*,*retouchpics*,*.ulikecam.com


#>>>>>>>>>>>>>>>>生活类VIP
# 完美解锁酷我音乐     *.kuwo.cn, *.lrts.me 
^https?:\/\/.*(kuwo|lrts).*(music\.pay\?ne|\/a\.p|v\d\/api\/(user\/in|pay\/vi)|\w{3}\/v\d\/user\/vi|\w{3}\/spi\/ms|\w{3}\/v\d\/the|\w{3}\/enc\/use) url script-response-body https://raw.githubusercontent.com/painter-7/Q/main/Cuttlefish/Script/kwyy.js
^https?:\/\/.*(kuwo|lrts).*(music\.pay\?ui) url script-request-header https://raw.githubusercontent.com/painter-7/Q/main/Cuttlefish/Script/kwyy.js
#^https?:\/\/.*(kuwo|lrts).*(music\.pay\?ne|\/a\.p|v\d\/api\/(user\/in|pay\/vi)|\w{3}\/v\d\/user\/vi|\w{3}\/spi\/ms|\w{3}\/v\d\/the|\w{3}\/enc\/use) url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/break/kuwo.js
#^https?:\/\/.*(kuwo|lrts).*(music\.pay\?ui) url script-request-header https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/break/kuwo.js

# 菜谱大全(dq.xiangha.com,apiios_dq.xiangha.com)
^https:\/\/apiios_dq\.xiangha\.com url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/cpdq.js

#>>>>>>>>>>>>>>>>新闻类VIP


#>>>>>>>>>>>>>>>>图影类VIP
# 音频剪辑- 音乐剪辑大师+解锁订阅(buy.itunes.apple.com)
^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/ypjj.js

# > Picsew解锁专业版
^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/PicsewProCrack.js

#醒图+剪映会员+轻颜相机会员  *faceu*,*retouchpics*,*.ulikecam.com
#^http[s]?:\/\/.+((retouchpics)|(faceu)|(ulikecam)).(com|cn|mobi)\/.+(user|\/v1\/homepage\/pro|ever_photo\/space_info).*$ url script-response-body https://raw.githubusercontent.com/WeiRen0/Scripts/main/XTJY.js
#^http[s]?:\/\/commerce-api\.faceu\.mobi\/commerce\/v1\/subscription\/user_info\?(iid|.&aid|.&iid).*$ url script-request-header https://raw.githubusercontent.com/WeiRen0/Scripts/main/xintu.js
#^http[s]?:\/\/commerce-api-.*\.faceu\.mobi\/commerce\/v1\/.*$ url script-request-header https://raw.githubusercontent.com/WeiRen0/Scripts/main/JY.js
#^http[s]?:\/\/commerce-api.faceu.mobi\/commerce\/v1\/subscription\/user_info.*total_memory.*$ url script-request-header https://raw.githubusercontent.com/WeiRen0/Scripts/main/jxyq.js


#>>>>>>>>>>>>>>>>工具类VIP
#!desc=WPS解锁本地会员,支持大陆版以及非大陆版(2022.07.10)
^https?:\/\/.*?account\.wps\.(com|cn)(:\d+)?\/api\/users\/\w+\/overview$ url script-response-body https://raw.githubusercontent.com/I-am-R-E/Functional-Store-Hub/Master/WPSOffice/Script/WPS.js

# > WPS解锁稻壳会员(account.wps.cn,*account.wps.com , *.docer.wps.cn, vipapi.wps.cn, account.wps.cn)
^https?:\/\/account\.wps\.cn\/api\/v3\/mine\/vips url script-response-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/WPSDocerVIPuserCrack.js
^https?:\/\/.+\.(docer.)?wps.cn\/(user\/v1\/vip|android\/mb\/buy|download\/v1\/ios|partner\/invoke\/usable|(api|rank)\/v1(\/mobile\/mb)?\/detail) url script-request-header https://raw.githubusercontent.com/yqc007/QuantumultX/master/WPSDocerVIPowerCrack.js

#国区TF无法下载已下架app规则(testflight.apple.com)
^https?:\/\/testflight\.apple\.com\/v2\/accounts\/.*\/apps\/\d*/builds/\d*/install url request-body storefrontId" : ".*", request-body storefrontId" : "143441-1,29",

# documents+解锁订阅(license.pdfexpert.com)
^https:\/\/license\.pdfexpert\.com\/api\/2\.0\/documents\/subscription\/refresh url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/documents.js

# 最美证件照(fufei.fengyunsoft.cn)
^https:\/\/fufei\.fengyunsoft\.cn\/api\/client\/info url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/zmzjz.js

# 扫描全能王 pro    ap*.intsig.net
^https:\/\/(api|api-cs)\.intsig\.net\/purchase\/cs\/query_property\? url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/CamScanner.js

#百度网盘解锁部分vip功能
^https:\/\/pan\.baidu\.com\/rest\/\d\.\d\/membership\/user url script-response-body https://raw.githubusercontent.com/510004015/Quantumult_X/Remote/Premium/BaiduCloud.js
