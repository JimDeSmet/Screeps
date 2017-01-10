global.spawnharvester = function() {

     var newHarvesterName = Game.spawns['Base'].createCreep([WORK, CARRY, MOVE], undefined, {role : 'harvester'});
     console.log('Spawning new harvester: ' + newHarvesterName);
}