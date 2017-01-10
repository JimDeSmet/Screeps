global.spawnupgrader = function() {

        var newUpgraderName = Game.spawns['Base'].createCreep([WORK, CARRY, MOVE], undefined, {role: 'upgrader'});
        console.log('Spawning new upgrader: ' + newUpgraderName);
}