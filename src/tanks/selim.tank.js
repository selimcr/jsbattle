var _0x13b397=_0x2604;(function(_0x266a2b,_0x4981ec){var _0x22eecd=_0x2604,_0x285596=_0x266a2b();while(!![]){try{var _0x18200e=parseInt(_0x22eecd(0xcd))/0x1+parseInt(_0x22eecd(0xb8))/0x2+parseInt(_0x22eecd(0xc8))/0x3*(parseInt(_0x22eecd(0xc7))/0x4)+-parseInt(_0x22eecd(0xb9))/0x5*(parseInt(_0x22eecd(0xb4))/0x6)+-parseInt(_0x22eecd(0xcf))/0x7+-parseInt(_0x22eecd(0xc5))/0x8+parseInt(_0x22eecd(0xc6))/0x9;if(_0x18200e===_0x4981ec)break;else _0x285596['push'](_0x285596['shift']());}catch(_0x2c69b8){_0x285596['push'](_0x285596['shift']());}}}(_0x507e,0x7e0f2),importScripts(_0x13b397(0xbc)));var bulletMap,avoidDirection;tank['init'](function(_0x2d98d3,_0x1c4157){var _0x13aff1=_0x13b397;_0x2d98d3['SKIN']=_0x13aff1(0xb5),bulletMap=[],changeAvoidDirection();});function changeAvoidDirection(){avoidDirection=Math['random']()>0.5?-0x1:0x1;}function _0x2604(_0x3ffc9e,_0x3045d3){var _0x507e7c=_0x507e();return _0x2604=function(_0x2604f4,_0x3c25b3){_0x2604f4=_0x2604f4-0xb1;var _0x5974d7=_0x507e7c[_0x2604f4];return _0x5974d7;},_0x2604(_0x3ffc9e,_0x3045d3);}tank[_0x13b397(0xb1)](function(_0x4985cd,_0x3d7ed0){var _0x141820=_0x13b397,_0x53f7ae,_0x5584bb,_0x4c3ce2;if(_0x4985cd[_0x141820(0xc3)]['enemy']){var _0x4f2a95=Math['deg']['atan2'](_0x4985cd[_0x141820(0xc3)][_0x141820(0xc0)]['y']-_0x4985cd['y'],_0x4985cd[_0x141820(0xc3)][_0x141820(0xc0)]['x']-_0x4985cd['x']),_0x3419a6=Math['deg'][_0x141820(0xb3)](_0x4f2a95-(_0x4985cd[_0x141820(0xc3)][_0x141820(0xc2)]+_0x4985cd[_0x141820(0xc2)]));_0x3d7ed0['RADAR_TURN']=_0x3419a6*0.2,_0x4c3ce2=Math['deg']['normalize'](_0x4f2a95-0x5a-_0x4985cd['angle']);if(Math[_0x141820(0xbd)](_0x4c3ce2)>0x5a)_0x4c3ce2+=0xb4;_0x3d7ed0[_0x141820(0xb7)]=_0x4c3ce2*0.2;var _0x2027b9=Math[_0x141820(0xbe)][_0x141820(0xb3)](_0x4f2a95-(_0x4985cd[_0x141820(0xc9)][_0x141820(0xc2)]+_0x4985cd[_0x141820(0xc2)]));_0x3d7ed0['GUN_TURN']=_0x2027b9*0.2,_0x3d7ed0[_0x141820(0xc4)]=0.1;}else _0x3d7ed0[_0x141820(0xb7)]=0x0,_0x3d7ed0[_0x141820(0xcb)]=0x1,_0x4c3ce2=0xb4;for(_0x53f7ae in _0x4985cd[_0x141820(0xc3)]['bullets']){_0x5584bb=_0x4985cd[_0x141820(0xc3)][_0x141820(0xca)][_0x53f7ae],_0x5584bb[_0x141820(0xbf)]=0x0,bulletMap[_0x5584bb['id']]=_0x5584bb,_0x5584bb['vx']=_0x5584bb[_0x141820(0xb2)]*Math[_0x141820(0xc1)](_0x5584bb[_0x141820(0xc2)]*(Math['PI']/0xb4)),_0x5584bb['vy']=_0x5584bb[_0x141820(0xb2)]*Math['sin'](_0x5584bb['angle']*(Math['PI']/0xb4)),_0x5584bb[_0x141820(0xce)]=Math[_0x141820(0xcc)](_0x4985cd['x'],_0x4985cd['y'],_0x5584bb['x'],_0x5584bb['y']);}var _0x489066=0x0;for(_0x53f7ae in bulletMap){_0x5584bb=bulletMap[_0x53f7ae];if(!_0x5584bb)continue;if(_0x5584bb[_0x141820(0xbf)]>0x32){bulletMap[_0x53f7ae]=null;continue;}_0x5584bb['age']++,_0x5584bb['x']+=_0x5584bb['vx'],_0x5584bb['y']+=_0x5584bb['vy'];var _0x100a4e=Math[_0x141820(0xcc)](_0x4985cd['x'],_0x4985cd['y'],_0x5584bb['x'],_0x5584bb['y']);_0x5584bb[_0x141820(0xba)]=_0x5584bb[_0x141820(0xce)]-_0x100a4e,_0x5584bb[_0x141820(0xce)]=_0x100a4e;if(_0x5584bb[_0x141820(0xba)]<3.85){bulletMap[_0x53f7ae]=null;continue;}_0x489066++;}_0x489066&&Math[_0x141820(0xbd)](_0x4c3ce2)<0x2d?(_0x3d7ed0['BOOST']=0x1,_0x3d7ed0[_0x141820(0xb6)]=avoidDirection):(_0x3d7ed0[_0x141820(0xbb)]=0x0,_0x3d7ed0[_0x141820(0xb6)]=0x0,changeAvoidDirection());});function _0x507e(){var _0x48d7b4=['cos','angle','radar','SHOOT','5442448LnZsBH','1940121DAMjbm','58276gEqmtJ','192GxuDxG','gun','bullets','RADAR_TURN','distance','787856xyMtYO','tankDistance','916762iggbqz','loop','speed','normalize','544716mGEfvF','forest','THROTTLE','TURN','54542LSSpXX','35QykKDk','approachingSpeed','BOOST','lib/tank.js','abs','deg','age','enemy'];_0x507e=function(){return _0x48d7b4;};return _0x507e();}