var roleUpgrader = {

    /** @param {Creep} creep **/
    run: function(creep) {
        if(creep.carry.energy < creep.carryCapacity || creep.memory.IsHarvesting) {
            
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[1]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[1]);
            }
            creep.IsHarvesting = false;
            
        }
        else {
               if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(creep.room.controller);
                     }
                creep.IsHarvesting = true;
             }
    }
};

module.exports = roleUpgrader;

