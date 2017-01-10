global.spawnbuilder = function() {

    var newBuilderName = Game.spawns['Base'].createCreep([WORK, CARRY, MOVE], undefined, {role: 'builder'});
    console.log('Spawning new builder: ' + newBuilderName);
}