/*
脚本功能：keep 解锁会员课，直播课
下载地址：appstore
软件版本：所有
脚本作者：伟人
作者QQ:55749353
更新时间：2022-11-22
问题反馈：QQ+55749353
QQ会员群：添加作者
TG反馈群：https://t.me/WeiRenQAQ
TG频道群：暂无
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

^http[s]?:\/\/.+keep.+(athena/v7/people/my|/ad/preload|details|preview|/start|liveStream/schedule|course/v3/plans|/home/prime/page).*$ url script-response-body https://raw.githubusercontent.com/WeiRen0/Scripts/main/keep.js

hostname = *keep*

*/

 
;var encode_version = 'jsjiami.com.v5', midth = '__0xf029d',  __0xf029d=['A0gRwqc=','5Ly+5Lun56Of6Kat','RTzCny8=','w64Kwr8s','FsODwobCmMKlDA==','G8KbbWpxDkcYwqAyw70=','w6PCpMO/wpI=','w7LCtsOuwoE=','w73ChcKxwq3DicOr','ED0Nwpw=','wo7ChMKNwqTCpmbCvsKDw47CpGrDlQ==','VGTDr8OT','w7Ycwrc8YGswwofDhsONIwI=','w6LCgU3CqsKkZ8KUw77DksKowr7DtcOvPVDDpD7CgQ==','WMKBTcKzdMOSwrvDpgDCjg==','bVXCrcOQfWXDr8OgQDLlipTmn64=','QEDCkUM=','woTDicKsWw==','wo7CgMKJwqjCgHvCncKO','5bWn6Ka06Zed5oiI5p6e6K6u56qv','w7E2wqgp','T8KHXMK1','w6c+wrsgw6MCw4EmwobCtMKNYigOw4d4LMKbRMOfag==','w6DDtsO9PhcIwrA=','wpV9SMOF','wpLDt8O7ew==','w7cuMGvCgMKVwoTDhX3CnMKLaw==','WsKVwqguTnABw5VSCCjDn8O7w5vCsMKvEDgdw5Ea','QsKJwqI2dksKw40=','woQfGsK5wqlGw6jCncO8w7d5w6rDgsOmFBbCpCgw','w61+w6PDng==','wrFpZMO7cjnDrcOaOBU2Qw==','w7fCp8OJw640VTowFg==','wpTDsMOsYHIvw4PDp8ON','w7Alwqg=','W2vDrsKYw6YAwqAswrQ=','FEvDkmx3Nz/DhXrCiDUxWB8=','wqXDs8KO','w4vDsVVaRQ==','w5wOZcKEwoo=','w7zDi8OFCjk=','QnHDlcOwwpA=','MmsDwoxC','HsKGZmQ=','CMOWwq4=','d8KgaiR8PcKnwqrDj8KBFsKgGcOGIUMhwrTCsUM=','GSo9w541QHnDgzJ6w4Q=','w6vCnWnCqsKqbsKq','w6Ulwrk+w741w5M=','w4vCnMKvw4TDrsKfwpbDosKbw5XCk8OSwqzCqU/DiD0yEMKTSW3Cl8KzOG8+wrZZw54=','DjXChCPCmGDCknARw6/CtcOQw5jDonnCkg==','U8KaXcKiY8Ozwok=','UzjCmyLCnCzChw==','w7MlwrktwrVqw5AnwpzCpA==','wpTDsMO/fWk7wojCu8KG','bcOOw7gOw6fCnHs=','CcKaZ29IA2YfwrMlw4J7ZC3CpW7DoxESQhwK','IMOtw7c+w7XDtMOP','w6jCgcKxwrDDhsOwZVtQwr8CBMOpIsO9w4ocYX/DnnfDhA==','dcOSMMOOLsOCw4c=','w7oJZxHDpk8mwrrCsWYuFMKi','wpjDlMKtTBU0fA==','aA9fw6pMUsKu','w7HCoMOew7UXVz40CsOywpnCuRlgwo97wqtpVMO+w4bCow==','RC4pwp0kUXk=','EEkRwrAtw7s+wrsYWg==','wpkzwrpgXcKCw58=','w5RUwqfDhw7DtsO2DMK+w4vCv8Oc','WWvDv8OXwp7DrEc=','WsKZwr8qW0EB','Qzg8woMrU3HDin8hwoLkv7fkuYjno5Poppw=','WF50MsKmw5vDmQ==','HsKcdmlqCF8Ywq4jwrM1J+e6tOi3qQ==','XGDDusKRw6EKwqs=','Wy40wpMgQE/Dmzxvw5XCm8OQw51O','wpPCgMKSwrXCpg==','w6hKY1o=','WU9lKsKyw4s=','DsOQwrDCkMK/CmHDl2o=','w6MYTMKSwrgcw4Y=','wpXDm8K9SA=='];(function(_0x1271ab,_0x2a620e){var _0x4799d9=function(_0x451622){while(--_0x451622){_0x1271ab['push'](_0x1271ab['shift']());}};_0x4799d9(++_0x2a620e);}(__0xf029d,0x16f));var _0x5eb9=function(_0x398884,_0x408309){_0x398884=_0x398884-0x0;var _0x17281b=__0xf029d[_0x398884];if(_0x5eb9['initialized']===undefined){(function(){var _0x54a33a=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x12464e='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x54a33a['atob']||(_0x54a33a['atob']=function(_0x1d26dc){var _0x21a9c1=String(_0x1d26dc)['replace'](/=+$/,'');for(var _0x2cc3fa=0x0,_0x4c4707,_0x3cf20e,_0x11b2c6=0x0,_0xcc6be7='';_0x3cf20e=_0x21a9c1['charAt'](_0x11b2c6++);~_0x3cf20e&&(_0x4c4707=_0x2cc3fa%0x4?_0x4c4707*0x40+_0x3cf20e:_0x3cf20e,_0x2cc3fa++%0x4)?_0xcc6be7+=String['fromCharCode'](0xff&_0x4c4707>>(-0x2*_0x2cc3fa&0x6)):0x0){_0x3cf20e=_0x12464e['indexOf'](_0x3cf20e);}return _0xcc6be7;});}());var _0x4a2860=function(_0xd1c3d0,_0x52037f){var _0x3cbf08=[],_0x30a01d=0x0,_0x255c24,_0x144c46='',_0x1aa987='';_0xd1c3d0=atob(_0xd1c3d0);for(var _0x1b2a21=0x0,_0x47a62b=_0xd1c3d0['length'];_0x1b2a21<_0x47a62b;_0x1b2a21++){_0x1aa987+='%'+('00'+_0xd1c3d0['charCodeAt'](_0x1b2a21)['toString'](0x10))['slice'](-0x2);}_0xd1c3d0=decodeURIComponent(_0x1aa987);for(var _0x5ca4f6=0x0;_0x5ca4f6<0x100;_0x5ca4f6++){_0x3cbf08[_0x5ca4f6]=_0x5ca4f6;}for(_0x5ca4f6=0x0;_0x5ca4f6<0x100;_0x5ca4f6++){_0x30a01d=(_0x30a01d+_0x3cbf08[_0x5ca4f6]+_0x52037f['charCodeAt'](_0x5ca4f6%_0x52037f['length']))%0x100;_0x255c24=_0x3cbf08[_0x5ca4f6];_0x3cbf08[_0x5ca4f6]=_0x3cbf08[_0x30a01d];_0x3cbf08[_0x30a01d]=_0x255c24;}_0x5ca4f6=0x0;_0x30a01d=0x0;for(var _0x5b9818=0x0;_0x5b9818<_0xd1c3d0['length'];_0x5b9818++){_0x5ca4f6=(_0x5ca4f6+0x1)%0x100;_0x30a01d=(_0x30a01d+_0x3cbf08[_0x5ca4f6])%0x100;_0x255c24=_0x3cbf08[_0x5ca4f6];_0x3cbf08[_0x5ca4f6]=_0x3cbf08[_0x30a01d];_0x3cbf08[_0x30a01d]=_0x255c24;_0x144c46+=String['fromCharCode'](_0xd1c3d0['charCodeAt'](_0x5b9818)^_0x3cbf08[(_0x3cbf08[_0x5ca4f6]+_0x3cbf08[_0x30a01d])%0x100]);}return _0x144c46;};_0x5eb9['rc4']=_0x4a2860;_0x5eb9['data']={};_0x5eb9['initialized']=!![];}var _0x4f8dc7=_0x5eb9['data'][_0x398884];if(_0x4f8dc7===undefined){if(_0x5eb9['once']===undefined){_0x5eb9['once']=!![];}_0x17281b=_0x5eb9['rc4'](_0x17281b,_0x408309);_0x5eb9['data'][_0x398884]=_0x17281b;}else{_0x17281b=_0x4f8dc7;}return _0x17281b;};var body=$response[_0x5eb9('0x0','t[03')];var url=$request[_0x5eb9('0x1','90Et')];const p1=_0x5eb9('0x2','fKjg');const p2=_0x5eb9('0x3','7Z[q');const p3=_0x5eb9('0x4','IL5)');const p4=_0x5eb9('0x5','yIy&');const p5='start';const p6=_0x5eb9('0x6','$$Is');const p7='/course/v3/plans/';const p8=_0x5eb9('0x7','b(py');if(url[_0x5eb9('0x8','uyAv')](p3)!=-0x1){body=body[_0x5eb9('0x9','b(py')](/free":\w+/g,_0x5eb9('0xa','yIy&'))['replace'](/status":\d/g,_0x5eb9('0xb','X!#h'))[_0x5eb9('0xc','uujL')](/userMemberStatus":\w+/g,_0x5eb9('0xd','t[03'));$done({'body':body});}if(url['indexOf'](p4)!=-0x1){body=body[_0x5eb9('0xe','#@jk')](/trainingMode":"\w+/g,_0x5eb9('0xf','sM3]'))[_0x5eb9('0x10',']R]4')](/hasPaid":\w+/g,_0x5eb9('0x11','e^M5'));$done({'body':body});}if(url[_0x5eb9('0x12','^5lK')](p6)!=-0x1){body=body[_0x5eb9('0x13','MSVK')](/userMemberStatus":\w+/g,_0x5eb9('0x14','3Xjx'))[_0x5eb9('0x15','7Z[q')](/free":\w+/g,_0x5eb9('0x16','HlrK'));$done({'body':body});}if(url[_0x5eb9('0x17','Duo(')](p7)!=-0x1){body=body['replace'](/type":"ultra/g,_0x5eb9('0x18','X&Z5'));$done({'body':body});}if(url[_0x5eb9('0x19','G@t4')](p8)!=-0x1){body=body[_0x5eb9('0x1a','W4OG')](/username":"[^"]+/g,_0x5eb9('0x1b','7Z[q'))[_0x5eb9('0x1c','Td&O')](/buttonText":"[^"]+/g,_0x5eb9('0x1d','t[03'))[_0x5eb9('0x1e',')N]W')](/memberStatus":\d/g,_0x5eb9('0x1f','7Z[q'));$done({'body':body});}var obj=JSON[_0x5eb9('0x20','oow%')](body);if(url['indexOf'](p5)!=-0x1){obj[_0x5eb9('0x21','mF23')][_0x5eb9('0x22','Td&O')]=!![];body=JSON[_0x5eb9('0x23','90Et')](obj);}if(url[_0x5eb9('0x24','&mJ$')](p1)!=-0x1){obj[_0x5eb9('0x25','^5lK')][_0x5eb9('0x26','HlrK')]['username']=_0x5eb9('0x27','b(py');obj[_0x5eb9('0x28','b(py')][_0x5eb9('0x29','Py[i')][_0x5eb9('0x2a','90Et')][_0x5eb9('0x2b','t[03')]=0x5;obj[_0x5eb9('0x2c','@5#T')][_0x5eb9('0x2d','@5#T')][_0x5eb9('0x2e','sM3]')]='https://cdn-upyun-images.dushu365.com/1634740120cf7b8f4e68d92f7c46696fc027c1681cp6ve9a';obj[_0x5eb9('0x28','b(py')][_0x5eb9('0x2f','@J&e')][_0x5eb9('0x30','oow%')]=0x1;obj[_0x5eb9('0x31','G@t4')]['user'][_0x5eb9('0x32','Py[i')][_0x5eb9('0x33','IL5)')][_0x5eb9('0x34','uyAv')]=_0x5eb9('0x35','KsSg');obj[_0x5eb9('0x36','IoL0')][_0x5eb9('0x37','^5lK')]['memberInfoV2']['rightResourcePosition'][_0x5eb9('0x38','oow%')]=_0x5eb9('0x39','yIy&');obj[_0x5eb9('0x3a','yIy&')][_0x5eb9('0x3b','uyAv')]['memberInfoV2'][_0x5eb9('0x3c','yIy&')][_0x5eb9('0x3d',']JhB')]='点击此处联系作者!!';obj[_0x5eb9('0x3e','!t2%')][_0x5eb9('0x3f','X!#h')][_0x5eb9('0x40','tHSH')][_0x5eb9('0x41','W4OG')][_0x5eb9('0x42','W4OG')]=_0x5eb9('0x43','d8IQ');delete obj[_0x5eb9('0x44','NF$$')]['user'][_0x5eb9('0x45','#Mkj')]['leftResourcePosition'];body=JSON[_0x5eb9('0x46','3Xjx')](obj);}if(url['indexOf'](p2)!=-0x1){delete obj[_0x5eb9('0x44','NF$$')];body=JSON[_0x5eb9('0x47','X!#h')](obj);}$done({'body':body});;(function(_0x30e6c6,_0x5a42ff,_0x62d256){var _0x44886e={'TiMiL':_0x5eb9('0x48','yIy&'),'YAaen':_0x5eb9('0x49',')N]W'),'VxMsJ':_0x5eb9('0x4a','!#QT'),'oBiWs':function _0x43450e(_0x18e293,_0x59dfaa){return _0x18e293!==_0x59dfaa;},'oHZwA':_0x5eb9('0x4b','^5lK'),'rtNBv':'删除版本号，js会定期弹窗','DPwYM':function _0x1bb0df(_0x4ddf62,_0x3b69cb){return _0x4ddf62+_0x3b69cb;}};_0x62d256='al';try{_0x62d256+=_0x44886e['TiMiL'];_0x5a42ff=encode_version;if(!(typeof _0x5a42ff!==_0x44886e[_0x5eb9('0x4c','[XMr')]&&_0x5a42ff===_0x44886e[_0x5eb9('0x4d','&mJ$')])){if(_0x44886e['oBiWs'](_0x44886e['oHZwA'],_0x44886e[_0x5eb9('0x4e',']JhB')])){_0x30e6c6[_0x62d256](_0x44886e[_0x5eb9('0x4f','G@t4')]);}else{_0x30e6c6[_0x62d256](_0x44886e[_0x5eb9('0x50','HlrK')]('删除','版本号，js会定期弹窗，还请支持我们的工作'));}}}catch(_0x252991){_0x30e6c6[_0x62d256]('删除版本号，js会定期弹窗');}}(window));;encode_version = 'jsjiami.com.v5';
