var roleUpgrader = {

    /** @param {Creep} creep **/
    run: function(creep) {

        if(creep.memory.working == true && creep.carry.energy == 0){
            creep.memory.working = false;
        }
        else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity){
            creep.memory.working == true;
        }

        if(creep.memory.working == true) {
            if (creep.upgradeController(Game.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(Game.room.controller);
            }
        }
        else{
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0]);
            }
        }

    }
};

module.exports = roleUpgrader;

