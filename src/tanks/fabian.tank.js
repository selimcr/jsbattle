function _0x54ef(){var _0x5e7263=['bullets','SKIN','140QRdRVo','collisions','12981pUFgPY','sin','abs','7ZFFrUH','deg','normalize','RADAR_TURN','GUN_TURN','1416915FotXdV','forest','speed','453614XiLQqY','THROTTLE','lib/tank.js','angle','random','radar','enemy','age','atan2','wall','BOOST','distance','7295870vESKfB','cos','253904uxssUV','216278meVDIJ','loop','SHOOT','TURN','tankDistance','63dNMmDy','5100888gBJySB'];_0x54ef=function(){return _0x5e7263;};return _0x54ef();}var _0x24dcb6=_0x367b;(function(_0x3d9df9,_0x5c96fa){var _0x30bb4a=_0x367b,_0x267028=_0x3d9df9();while(!![]){try{var _0x229dd5=parseInt(_0x30bb4a(0x10e))/0x1*(parseInt(_0x30bb4a(0x100))/0x2)+parseInt(_0x30bb4a(0x10b))/0x3*(parseInt(_0x30bb4a(0x109))/0x4)+-parseInt(_0x30bb4a(0x113))/0x5+parseInt(_0x30bb4a(0x106))/0x6+-parseInt(_0x30bb4a(0x116))/0x7+-parseInt(_0x30bb4a(0xff))/0x8*(parseInt(_0x30bb4a(0x105))/0x9)+-parseInt(_0x30bb4a(0xfd))/0xa;if(_0x229dd5===_0x5c96fa)break;else _0x267028['push'](_0x267028['shift']());}catch(_0x1f6ce5){_0x267028['push'](_0x267028['shift']());}}}(_0x54ef,0x6ff84),importScripts(_0x24dcb6(0x118)));var bulletMap,avoidDirection,turnTime;tank['init'](function(_0x3250a2,_0x52ac25){var _0xad41a1=_0x24dcb6;_0x3250a2[_0xad41a1(0x108)]=_0xad41a1(0x114),bulletMap=[],changeAvoidDirection();});function changeAvoidDirection(){var _0x165979=_0x24dcb6;setInterval(avoidDirection=Math[_0x165979(0xf5)]()>0.5?-0x1:0x1,0x1f4);}function _0x367b(_0x559e14,_0x194e87){var _0x54ef56=_0x54ef();return _0x367b=function(_0x367b80,_0x481554){_0x367b80=_0x367b80-0xf4;var _0x1244be=_0x54ef56[_0x367b80];return _0x1244be;},_0x367b(_0x559e14,_0x194e87);}function exploreBattlefield(_0x3a2f96,_0x4764ef){var _0x4fa633=_0x24dcb6;if(_0x3a2f96[_0x4fa633(0xf6)][_0x4fa633(0xf7)])return;_0x3a2f96[_0x4fa633(0x10a)]['wall']||turnTime>0x0||_0x3a2f96[_0x4fa633(0xf6)][_0x4fa633(0xf7)]?_0x4764ef[_0x4fa633(0x117)]=0x0:_0x4764ef[_0x4fa633(0x117)]=0x1,_0x3a2f96[_0x4fa633(0x10a)][_0x4fa633(0xfa)]&&(turnTime=0xa),turnTime>0x0?(_0x4764ef[_0x4fa633(0x103)]=0x1,turnTime--):_0x4764ef[_0x4fa633(0x103)]=0x0;}tank[_0x24dcb6(0x101)](function(_0x5ab303,_0x61a681){var _0x2a2b14=_0x24dcb6,_0xa281fd,_0x310fc9,_0x2e3b19;if(_0x5ab303[_0x2a2b14(0xf6)][_0x2a2b14(0xf7)]){var _0x295109=Math['deg'][_0x2a2b14(0xf9)](_0x5ab303[_0x2a2b14(0xf6)][_0x2a2b14(0xf7)]['y']-_0x5ab303['y'],_0x5ab303['radar'][_0x2a2b14(0xf7)]['x']-_0x5ab303['x']),_0x59970f=Math[_0x2a2b14(0x10f)][_0x2a2b14(0x110)](_0x295109-(_0x5ab303[_0x2a2b14(0xf6)]['angle']+_0x5ab303[_0x2a2b14(0xf4)]));_0x61a681[_0x2a2b14(0x111)]=_0x59970f*0.2,_0x2e3b19=Math[_0x2a2b14(0x10f)][_0x2a2b14(0x110)](_0x295109-0x5a-_0x5ab303[_0x2a2b14(0xf4)]);if(Math[_0x2a2b14(0x10d)](_0x2e3b19)>0x5a)_0x2e3b19+=0xb4;_0x61a681[_0x2a2b14(0x103)]=_0x2e3b19*0.2;var _0x251d5f=Math[_0x2a2b14(0x10f)][_0x2a2b14(0x110)](_0x295109-(_0x5ab303['gun'][_0x2a2b14(0xf4)]+_0x5ab303[_0x2a2b14(0xf4)]));_0x61a681[_0x2a2b14(0x112)]=_0x251d5f*0.2,_0x61a681[_0x2a2b14(0x102)]=0.1,_0x61a681[_0x2a2b14(0x103)]=0x1,_0x61a681['THROTTLE']=avoidDirection;}else _0x61a681['TURN']=0x0,_0x61a681[_0x2a2b14(0x111)]=0x1,_0x2e3b19=0xb4;for(_0xa281fd in _0x5ab303[_0x2a2b14(0xf6)][_0x2a2b14(0x107)]){_0x310fc9=_0x5ab303['radar'][_0x2a2b14(0x107)][_0xa281fd],_0x310fc9[_0x2a2b14(0xf8)]=0x0,bulletMap[_0x310fc9['id']]=_0x310fc9,_0x310fc9['vx']=_0x310fc9[_0x2a2b14(0x115)]*Math[_0x2a2b14(0xfe)](_0x310fc9[_0x2a2b14(0xf4)]*(Math['PI']/0xb4)),_0x310fc9['vy']=_0x310fc9[_0x2a2b14(0x115)]*Math[_0x2a2b14(0x10c)](_0x310fc9[_0x2a2b14(0xf4)]*(Math['PI']/0xb4)),_0x310fc9[_0x2a2b14(0x104)]=Math[_0x2a2b14(0xfc)](_0x5ab303['x'],_0x5ab303['y'],_0x310fc9['x'],_0x310fc9['y']);}var _0x1f1d4d=0x0;for(_0xa281fd in bulletMap){_0x310fc9=bulletMap[_0xa281fd];if(!_0x310fc9)continue;if(_0x310fc9[_0x2a2b14(0xf8)]>0x32){bulletMap[_0xa281fd]=null;continue;}_0x310fc9['age']++,_0x310fc9['x']+=_0x310fc9['vx'],_0x310fc9['y']+=_0x310fc9['vy'];var _0x3fc328=Math['distance'](_0x5ab303['x'],_0x5ab303['y'],_0x310fc9['x'],_0x310fc9['y']);_0x310fc9['approachingSpeed']=_0x310fc9['tankDistance']-_0x3fc328,_0x310fc9[_0x2a2b14(0x104)]=_0x3fc328;if(_0x310fc9['approachingSpeed']<3.85){bulletMap[_0xa281fd]=null;continue;}_0x1f1d4d++;}_0x1f1d4d&&Math['abs'](_0x2e3b19)<0x2d?(_0x61a681['BOOST']=0x1,_0x61a681['THROTTLE']=avoidDirection):(_0x61a681[_0x2a2b14(0xfb)]=0x0,_0x61a681['THROTTLE']=0x0,changeAvoidDirection()),exploreBattlefield(_0x5ab303,_0x61a681);});