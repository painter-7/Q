hostname = api.weibo.cn, boot.biz.weibo.com, sdkapp.uve.weibo.com, wbapp.uve.weibo.com, card.weibo.com, weibo.com, weibo.cn, shop.sc.weibo.com, t.cn, sinaurl.cn, -redirector*.googlevideo.com,*.googlevideo.com,www.youtube.com,s.youtube.com,youtubei.googleapis.com
#微博
# 首页 签到,发布按钮,侧边栏,右上角红包,侧边栏提醒,超话tab悬浮,顶部直播
^https:\/\/api\.weibo\.cn\/2\/(checkin\/show|client\/publisher_list|push\/active)\? url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/weibo.js
^https:\/\/api\.weibo\.cn\/2\/(ug\/checkin\/list|push\/daily)\? url reject-dict
^https:\/\/api\.weibo\.cn\/2\/!\/live\/media_homelist\? url reject-dict

# 详情页 超话,评论区,看图界面,个人主页,我的页面,信息流,商品橱窗,视频流,视频号,话题卡片
^https:\/\/api\.weibo\.cn\/2\/(cardlist|page)\? url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/weibo.js
^https:\/\/api\.weibo\.cn\/2\/comments\/build_comments\? url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/weibo.js
^https:\/\/api\.weibo\.cn\/2\/photo\/info\? url reject-dict
^https:\/\/api\.weibo\.cn\/2\/profile\/(container_timeline|me)\? url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/weibo.js
^https:\/\/api\.weibo\.cn\/2\/statuses\/(container_timeline(_topic|_unread|_hot)?|unread_hot_timeline)\? url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/weibo.js
^https:\/\/api\.weibo\.cn\/2\/statuses\/(extend|show)\? url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/weibo.js
^https:\/\/api\.weibo\.cn\/2\/video\/tiny_stream_video_list\? url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/weibo.js
^https:\/\/api\.weibo\.cn\/2\/!\/huati\/discovery_home_bottom_channels\? url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/weibo.js
^https:\/\/api\.weibo\.cn\/2\/!\/huati\/(discovery_home_bottom_getdotinfo|mobile_discovery_searchchange)\? url reject-dict

# 消息页
^https:\/\/api\.weibo\.cn\/2\/messageflow\/notice\? url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/weibo.js

# 发现页 热门微博信息流,搜索列表,热搜提醒,猜你想搜,视频流红包
^https:\/\/api\.weibo\.cn\/2\/search\/container_discover\? url reject-dict
^https:\/\/api\.weibo\.cn\/2\/search\/(container_timeline|finder)\? url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/weibo.js
^https:\/\/api\.weibo\.cn\/2\/searchall\? url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/weibo.js
^https:\/\/api\.weibo\.cn\/2\/hot\/hours_spotlight\? url reject-dict
^https:\/\/api\.weibo\.cn\/2\/video\/redpacket\? url reject-dict
^https:\/\/api\.weibo\.cn\/!\/sug\/list\/finderchange\? url reject-dict

# 开屏广告
^https:\/\/boot\.biz\.weibo\.com\/v1\/ad\/realtime$ url reject-dict
^https:\/\/sdkapp\.uve\.weibo\.com\/interface\/sdk\/(get-lbs-cell-info\.php$|sdkconfig\.php\?) url reject
^https:\/\/sdkapp\.uve\.weibo\.com\/interface\/sdk\/sdkad\.php$ url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/weibo.js
^https:\/\/wbapp\.uve\.weibo\.com\/wbapplua\/wbpullad\.lua\? url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/weibo.js

# 微博长文章推广
^https:\/\/card\.weibo\.com\/article\/m\/aj\/(reward|uvead)\? url reject-dict
^https:\/\/weibo\.com\/ttarticle\/x\/m\/aj\/(reward|uvead)\? url reject-dict

# 跳过重定向页面以直接访问 //weibo.cn, shop.sc.weibo.com, t.cn, sinaurl.cn
^https:\/\/weibo\.cn\/sinaurl\?(.*&)?(u|toasturl|goto)= url script-echo-response https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/noRedirect.js
^https:\/\/shop\.sc\.weibo\.com\/h5\/jump\/error\?(.*&)?url= url script-echo-response https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/noRedirect.js
^https:\/\/(sinaurl|t)\.cn\/ url script-response-header https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/noRedirect.js

#YouTube去广告
# ======= 视频广告请求 ======= #
(^https?:\/\/[\w-]+\.googlevideo\.com\/(?!dclk_video_ads).+?)&ctier=L(&.+?),ctier,(.+) url 302 $1$2$3
^https?:\/\/[\w-]+\.googlevideo\.com\/(?!(dclk_video_ads|videoplayback\?)).+&oad url reject-200


# ======= 视频PIP|后台播放|瀑布流|搜索页|播放页|短视频|贴片广告  ======= #
^https?:\/\/youtubei\.googleapis\.com\/youtubei\/v1\/(browse|next|player|search|reel\/reel_watch_sequence|guide|account\/get_setting) url script-response-body https://raw.githubusercontent.com/Maasea/sgmodule/master/Script/Youtube/youtube.js


# ======= 通用广告请求 ======= #
^https?:\/\/(www|s)\.youtube\.com\/api\/stats\/ads url reject-200
^https?:\/\/(www|s)\.youtube\.com\/(pagead|ptracking) url reject-200
^https?:\/\/s\.youtube\.com\/api\/stats\/qoe\?adcontext url reject-200
