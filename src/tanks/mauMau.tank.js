function _0x4b43(_0x310e3c,_0x164a1f){const _0x4ffecb=_0x4ffe();return _0x4b43=function(_0x4b433f,_0x3d7274){_0x4b433f=_0x4b433f-0xcf;let _0x5992c8=_0x4ffecb[_0x4b433f];return _0x5992c8;},_0x4b43(_0x310e3c,_0x164a1f);}const _0x39f60a=_0x4b43;(function(_0x3fe76c,_0xc6266d){const _0x38a52b=_0x4b43,_0x1052f5=_0x3fe76c();while(!![]){try{const _0x49dbc8=-parseInt(_0x38a52b(0xd2))/0x1*(-parseInt(_0x38a52b(0xe9))/0x2)+-parseInt(_0x38a52b(0xd3))/0x3+parseInt(_0x38a52b(0xf3))/0x4*(-parseInt(_0x38a52b(0xea))/0x5)+-parseInt(_0x38a52b(0xd9))/0x6+-parseInt(_0x38a52b(0xe6))/0x7+parseInt(_0x38a52b(0xd1))/0x8+parseInt(_0x38a52b(0xde))/0x9*(parseInt(_0x38a52b(0xe4))/0xa);if(_0x49dbc8===_0xc6266d)break;else _0x1052f5['push'](_0x1052f5['shift']());}catch(_0x257e2e){_0x1052f5['push'](_0x1052f5['shift']());}}}(_0x4ffe,0x86196),importScripts(_0x39f60a(0xee)));function _0x4ffe(){const _0xa59e6c=['forest','2828472kEhAFC','deg','bullets','speed','init','945vTIgqn','approachingSpeed','wall','radar','cos','gun','129380uPNloD','angle','954569ogQMFE','distance','collisions','498qSFEVB','185LbNxjj','SKIN','BOOST','atan2','lib/tank.js','RADAR_TURN','TURN','abs','tankDistance','28612mEgQnA','normalize','THROTTLE','7588880caDtyh','71HltFVz','2709207cWWUMs','deg2rad','GUN_TURN','enemy','age'];_0x4ffe=function(){return _0xa59e6c;};return _0x4ffe();}let bulletMap,avoidDirection,turnTime;tank[_0x39f60a(0xdd)](function(_0x388f16,_0x17a0fe){const _0x20c476=_0x39f60a;_0x388f16[_0x20c476(0xeb)]=_0x20c476(0xd8),bulletMap=[],changeAvoidDirection(),turnTime=0x0;}),tank['loop'](function(_0xebd5c5,_0x4bcf6a){dodge(_0xebd5c5,_0x4bcf6a);});const dodge=(_0x1664d0,_0x14d916)=>{const _0x3951dd=_0x39f60a;let _0x3668f5,_0x5edb85,_0x1b4d25;if(_0x1664d0[_0x3951dd(0xe1)][_0x3951dd(0xd6)]){let _0x15bdc8=Math[_0x3951dd(0xda)]['atan2'](_0x1664d0[_0x3951dd(0xe1)][_0x3951dd(0xd6)]['y']-_0x1664d0['y'],_0x1664d0[_0x3951dd(0xe1)][_0x3951dd(0xd6)]['x']-_0x1664d0['x']),_0x4d485c=Math[_0x3951dd(0xda)][_0x3951dd(0xcf)](_0x15bdc8-(_0x1664d0[_0x3951dd(0xe1)][_0x3951dd(0xe5)]+_0x1664d0[_0x3951dd(0xe5)]));_0x14d916[_0x3951dd(0xef)]=_0x4d485c*0.2,_0x1b4d25=Math[_0x3951dd(0xda)]['normalize'](_0x15bdc8-0x5a-_0x1664d0[_0x3951dd(0xe5)]);if(Math['abs'](_0x1b4d25)>0x5a)_0x1b4d25+=0xb4;_0x14d916[_0x3951dd(0xf0)]=_0x1b4d25*0.2,shootEnemy(_0x1664d0,_0x14d916);}else _0x14d916['TURN']=0x0,_0x14d916['RADAR_TURN']=0x1,_0x1b4d25=0xb4;for(_0x3668f5 in _0x1664d0[_0x3951dd(0xe1)][_0x3951dd(0xdb)]){_0x5edb85=_0x1664d0[_0x3951dd(0xe1)][_0x3951dd(0xdb)][_0x3668f5],_0x5edb85[_0x3951dd(0xd7)]=0x0,bulletMap[_0x5edb85['id']]=_0x5edb85,_0x5edb85['vx']=_0x5edb85['speed']*Math[_0x3951dd(0xe2)](_0x5edb85['angle']*(Math['PI']/0xb4)),_0x5edb85['vy']=_0x5edb85[_0x3951dd(0xdc)]*Math['sin'](_0x5edb85['angle']*(Math['PI']/0xb4)),_0x5edb85['tankDistance']=Math[_0x3951dd(0xe7)](_0x1664d0['x'],_0x1664d0['y'],_0x5edb85['x'],_0x5edb85['y']);}var _0x21cb14=0x0;for(_0x3668f5 in bulletMap){_0x5edb85=bulletMap[_0x3668f5];if(!_0x5edb85)continue;if(_0x5edb85[_0x3951dd(0xd7)]>0x32){bulletMap[_0x3668f5]=null;continue;}_0x5edb85[_0x3951dd(0xd7)]++,_0x5edb85['x']+=_0x5edb85['vx'],_0x5edb85['y']+=_0x5edb85['vy'];var _0x229bec=Math[_0x3951dd(0xe7)](_0x1664d0['x'],_0x1664d0['y'],_0x5edb85['x'],_0x5edb85['y']);_0x5edb85[_0x3951dd(0xdf)]=_0x5edb85[_0x3951dd(0xf2)]-_0x229bec,_0x5edb85[_0x3951dd(0xf2)]=_0x229bec;if(_0x5edb85['approachingSpeed']<3.85){bulletMap[_0x3668f5]=null;continue;}_0x21cb14++;}_0x21cb14&&Math[_0x3951dd(0xf1)](_0x1b4d25)<0x2d?(_0x14d916[_0x3951dd(0xec)]=0x1,_0x14d916[_0x3951dd(0xd0)]=avoidDirection):exploreBattlefiield(_0x1664d0,_0x14d916);},shootEnemy=(_0x245a7b,_0x386e93)=>{const _0xb128d3=_0x39f60a;let _0x35281c=_0x245a7b['radar']['enemy'];if(!_0x35281c)return;let _0x2d72fa=0x4,_0x33d08c=Math[_0xb128d3(0xe7)](_0x245a7b['x'],_0x245a7b['y'],_0x35281c['x'],_0x35281c['y']),_0x2c1af0=_0x33d08c/_0x2d72fa,_0x3d50db=_0x35281c['x']+_0x2c1af0*_0x35281c[_0xb128d3(0xdc)]*Math[_0xb128d3(0xe2)](Math[_0xb128d3(0xd4)](_0x35281c['angle'])),_0x4f1d00=_0x35281c['y']+_0x2c1af0*_0x35281c[_0xb128d3(0xdc)]*Math['sin'](Math[_0xb128d3(0xd4)](_0x35281c[_0xb128d3(0xe5)])),_0x355620=Math[_0xb128d3(0xda)][_0xb128d3(0xed)](_0x4f1d00-_0x245a7b['y'],_0x3d50db-_0x245a7b['x']),_0x152e40=Math['deg']['normalize'](_0x355620-_0x245a7b[_0xb128d3(0xe5)]),_0x2b35f2=Math[_0xb128d3(0xda)][_0xb128d3(0xcf)](_0x152e40-_0x245a7b[_0xb128d3(0xe3)]['angle']);_0x386e93[_0xb128d3(0xd5)]=0.3*_0x2b35f2,Math[_0xb128d3(0xf1)](_0x2b35f2)<0x1&&(_0x386e93['SHOOT']=0x1);},exploreBattlefiield=(_0x5a437c,_0x5dac4b)=>{const _0x8d77dd=_0x39f60a;if(_0x5a437c[_0x8d77dd(0xe1)][_0x8d77dd(0xd6)]){_0x5dac4b[_0x8d77dd(0xd0)]=0x0;return;}_0x5a437c[_0x8d77dd(0xe8)][_0x8d77dd(0xe0)]||turnTime>0x0||_0x5a437c[_0x8d77dd(0xe1)]['enemy']?_0x5dac4b[_0x8d77dd(0xd0)]=0x0:_0x5dac4b[_0x8d77dd(0xd0)]=0x1,_0x5a437c[_0x8d77dd(0xe8)][_0x8d77dd(0xe0)]&&(turnTime=0xa),turnTime>0x0?(_0x5dac4b[_0x8d77dd(0xf0)]=0x1,turnTime--):_0x5dac4b['TURN']=0x0;},changeAvoidDirection=()=>{avoidDirection=Math['random']()>0.5?-0x1:0x1;};
