global.spawnupgrader = function() {

        var newUpgraderName = Game.spawns['Base'].createCreep([WORK, CARRY, MOVE], undefined, {role: 'upgrader', IsHarvesting : true});
        console.log('Spawning new upgrader: ' + newUpgraderName);
}