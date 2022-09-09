importScripts('lib/tank.js');

const Moving = {
  East: 0,
  South: 90,
  North: -90,
  West: 180,
}

const Radar = {
  Front: 0,
  Right: 90,
  Left: -90,
  Back: 180,
}

const BulletPower = {
  None: 0,
  Min: 0.1,
  Mid: 0.5,
  Max: 1,
}

const Direction = {
  Right: 1,
  Left: -1
}

const Speed = {
  Slow: 0.5,
  Fast: 1,
}

const State = {
  InFight: 1,
  Discovering: 0,
}

const RadarSpeed = {
  Stop: 0,
  Fast: 0.5,
}

let currentControl = {
  state: State.Discovering,
  throttle: Speed.Slow,
  turnTimer: 0,
  turnDirection: Moving.West,
  radarSpeed: Radar.Fast,
  bulletPower: BulletPower.None,
  gunDirection: 0,
};

tank.init(function(settings, info) {
  settings.SKIN = 'lava';
})

tank.loop(function(state, control) {
  
  
  // when hit an obstacle, start turning until
  // time of turnTimer doesn't run out
  if (state.collisions.wall) {
    currentControl.turnTimer = Math.round(Math.randomRange(20, 50));
    currentControl.throttle = Speed.Fast;
    currentControl.turnDirection = Moving.South;
  } else {
    // Shoot whenever you see an enemy
    if (state.radar.enemy) {
      setAtackMode(state);
    } else {
      setDiscoveringMode();
    }
  }

  control.THROTTLE = currentControl.throttle;
  control.RADAR_TURN = currentControl.radarSpeed;
  control.SHOOT = currentControl.bulletPower;
  control.TURN = currentControl.turnDirection;
  control.GUN_TURN = currentControl.gunDirection;
});

const setAtackMode = (state) => {
  currentControl.state = State.InFight;
  //currentControl.radarSpeed = RadarSpeed.Stop;

  // calculate angle of the enemy relating to your tank
  // this is the angle that you should aim your radar and gun to
  const enemyAngle = Math.deg.atan2(
    state.radar.enemy.y - state.y,
    state.radar.enemy.x - state.x
  );

  // calculate the difference between current and desired angle
  // of the radar.
  const radarAngleDelta = Math.deg.normalize(enemyAngle - (state.radar.angle + state.angle));

  // Turn the radar. If the difference between current and desired
  // angle is getting smaller, speed of turning will get lower too.
  // When the difference will be zero, turning will stop.
  //control.RADAR_TURN = radarAngleDelta * 0.2;
  currentControl.radarSpeed = radarAngleDelta * 0.2;

  // Turn body of the tank so it is perpendicular to the enemyAngle
  // it will be easier to dodge bullets by moving back and forth
  const variableAngle = Math.round(Math.randomRange(70, 110));
  let bodyAngleDelta = Math.deg.normalize(enemyAngle - variableAngle - state.angle);
  if(Math.abs(bodyAngleDelta) > 90) bodyAngleDelta += 180;
  //control.TURN = bodyAngleDelta * 0.2;
  currentControl.turnDirection = bodyAngleDelta * 0.5;

  // aim your gun at the enemy
  const gunAngleDelta = Math.deg.normalize(enemyAngle - (state.gun.angle + state.angle));
  //control.GUN_TURN = gunAngleDelta*0.2;
  currentControl.gunDirection = gunAngleDelta*0.2;

  // shoot if you have aimed at the enemy
  //control.SHOOT = 0.1;
  if (calculateEnemyDistance(state) < 1000) {
    currentControl.bulletPower = BulletPower.Max;
  } else {
    currentControl.bulletPower = BulletPower.Mid;
  }
};

const calculateEnemyDistance = (state) => {
  const minX = Math.min(state.x, state.radar.enemy.x);
  const maxX = Math.max(state.x, state.radar.enemy.x);
  const difX = maxX - minX;
  const minY = Math.min(state.y, state.radar.enemy.y);
  const maxY = Math.max(state.y, state.radar.enemy.y);
  const difY = maxY - minY;
  return difX * difY;
}

const setDiscoveringMode = () => {
  currentControl.throttle = Speed.Slow;
  currentControl.turnDirection = 0.3;
  currentControl.state = State.Discovering;
  currentControl.radarSpeed = RadarSpeed.Fast;
  currentControl.bulletPower = BulletPower.None;
};