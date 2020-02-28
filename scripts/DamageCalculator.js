let type1Scaling = [ 100, 90, 80, 70, 60, 50, 40, 30, 30, 30, 30, 25, 25, 25, 20, 20, 20, 15 ];
let type2Scaling = [ 100, 80, 70, 60, 50, 40, 30, 20, 20, 20, 20, 15, 15, 15, 10 ];
let type3Scaling = [ 100, 70, 60, 50, 40, 30, 20, 10 ];

let moveList = [
    {
        "5L": {
            "damage": 400,
            "type": 2,
            "numberOfHits": null,
            "minimumDamage": null,
            "scalingIncrement": null,
        },
        "5LL": {
            "damage": 700,
            "type": 1,
            "numberOfHits": null,
            "minimumDamage": null,
            "scalingIncrement": null,
        },
        "5LLL": {
            "damage": 1000,
            "type": 1,
            "numberOfHits": null,
            "minimumDamage": null,
            "scalingIncrement": null,
        },
        "2L": {
            "damage": 400,
            "type": 2,
            "numberOfHits": null,
            "minimumDamage": null,
            "scalingIncrement": null,
        },
        "5M": {
            "damage": 700,
            "type": 1,
            "numberOfHits": null,
            "minimumDamage": null,
            "scalingIncrement": null,
        },
        "2M" : {
            "damage" : 700,
            "type" : 1,
            "numberOfHits" : null,
            "minimumDamage" : null,
            "scalingIncrement" : null,
        },
        "6M" : {
            "damage" : 850,
            "type" : 3,
            "numberOfHits" : null,
            "minimumDamage" : null,
            "scalingIncrement" : null,
        },
        "5H" : {
            "damage" : 850,
            "type" : 1,
            "numberOfHits" : null,
            "minimumDamage" : null,
            "scalingIncrement" : null,
        },
        "2H" : {
            "damage" : 850,
            "type" : 1,
            "numberOfHits" : null,
            "minimumDamage" : null,
            "scalingIncrement" : null,
        },
        "2S(1)" : {
            "damage" : 600,
            "type" : 2,
            "numberOfHits" : null,
            "minimumDamage" : null,
            "scalingIncrement" : null,
        },
        "2S(2)" : {
            "damage" : 700,
            "type" : 2,
            "numberOfHits" : null,
            "minimumDamage" : null,
            "scalingIncrement" : null,
        },
        "JL" : {
            "damage" : 400,
            "type" : 2,
            "numberOfHits" : null,
            "minimumDamage" : null,
            "scalingIncrement" : null,
        },
        "JM" : {
            "damage" : 700,
            "type" : 2,
            "numberOfHits" : null,
            "minimumDamage" : null,
            "scalingIncrement" : null,
        },
        "JH" : {
            "damage" : 850,
            "type" : 2,
            "numberOfHits" : null,
            "minimumDamage" : null,
            "scalingIncrement" : null,
        },
        "J2H" : {
            "damage" : 850,
            "type" : 2,
            "numberOfHits" : null,
            "minimumDamage" : null,
            "scalingIncrement" : null,
        },
        "JS" : {
            "damage" : 400,
            "type" : 2,
            "numberOfHits" : null,
            "minimumDamage" : null,
            "scalingIncrement" : null,
        },
        "J2S(1)" : {
            "damage" : 600,
            "type" : 2,
            "numberOfHits" : null,
            "minimumDamage" : null,
            "scalingIncrement" : null,
        },
        "J2S(2)" : {
            "damage" : 700,
            "type" : 2,
            "numberOfHits" : null,
            "minimumDamage" : null,
            "scalingIncrement" : null,
        },
        "236L(1)" : {
            "damage" : 500,
            "type" : 1,
            "numberOfHits" : null,
            "minimumDamage" : null,
            "scalingIncrement" : null,
        },
        "236L(2)" : {
            "damage" : 700,
            "type" : 1,
            "numberOfHits" : null,
            "minimumDamage" : null,
            "scalingIncrement" : null,
        },
        "236M(1)" : {
            "damage" : 500,
            "type" : 1,
            "numberOfHits" : null,
            "minimumDamage" : null,
            "scalingIncrement" : null,
        },
        "236M(2)" : {
            "damage" : 700,
            "type" : 1,
            "numberOfHits" : null,
            "minimumDamage" : null,
            "scalingIncrement" : null,
        },
        "236H(1)" : {
            "damage" : 300,
            "type" : 2,
            "numberOfHits" : 4,
            "minimumDamage" : null,
            "scalingIncrement" : null,
        },
        "236H(2)" : {
            "damage" : 700,
            "type" : 1,
            "numberOfHits" : null,
            "minimumDamage" : null,
            "scalingIncrement" : null,
        },
        "214L" : {
            "damage" : 1000,
            "type" : 1,
            "numberOfHits" : null,
            "minimumDamage" : null,
            "scalingIncrement" : null,
        },
        "214M" : {
            "damage" : 1350,
            "type" : 3,
            "numberOfHits" : null,
            "minimumDamage" : null,
            "scalingIncrement" : null,
        },
        "214H(1)" : {
            "damage" : 1000,
            "type" : 3,
            "numberOfHits" : null,
            "minimumDamage" : null,
            "scalingIncrement" : null,
        },
        "214H(2)" : {
            "damage" : 200,
            "type" : 3,
            "numberOfHits" : null,
            "minimumDamage" : null,
            "scalingIncrement" : null,
        },
        "J236L" : {
            "damage" : 350,
            "type" : 1,
            "numberOfHits" : null,
            "minimumDamage" : null,
            "scalingIncrement" : null,
        },
        "J236M(1)" : {
            "damage" : 80,
            "type" : 1,
            "numberOfHits" : 7,
            "minimumDamage" : null,
            "scalingIncrement" : null,
        },
        "J236M(2)" : {
            "damage" : 600,
            "type" : 1,
            "numberOfHits" : null,
            "minimumDamage" : null,
            "scalingIncrement" : 0,
        },
        "J236H(1)" : {
            "damage" : 80,
            "type" : 1,
            "numberOfHits" : 13,
            "minimumDamage" : null,
            "scalingIncrement" : null,
        },
        "J236H(2)" : {
            "damage" : 900,
            "type" : 1,
            "numberOfHits" : null,
            "minimumDamage" : null,
            "scalingIncrement" : 0,
        },
        "LVL1(TOHAN)" : {
            "damage" : 340,
            "type" : 1,
            "numberOfHits" : 10,
            "minimumDamage" : 910,
            "scalingIncrement" : null,
        },
        "LVL3(TOHAN)" : {
            "damage" : 230,
            "type" : 1,
            "numberOfHits" : 20,
            "minimumDamage" : 1740,
            "scalingIncrement" : null,
        },
        "LVL5(TOHAN)" : {
            "damage" : 110,
            "type" : 1,
            "numberOfHits" : 20,
            "minimumDamage" : 1100,
            "scalingIncrement" : null,
        },
        "DR(START)" : {
            "damage" : 1100,
            "type" : 1,
            "numberOfHits" : null,
            "minimumDamage" : null,
            "scalingIncrement" : 8,
        },
        "DR(COMBO)" : {
            "damage" : 1460,
            "type" : 1,
            "numberOfHits" : null,
            "minimumDamage" : null,
            "scalingIncrement" : 8,
        },
        "SD" : {
            "damage" : 300,
            "type" : 2,
            "numberOfHits" : null,
            "minimumDamage" : null,
            "scalingIncrement" : 8,
        },
        "V" : {
            "damage" : 850,
            "type" : 1,
            "numberOfHits" : null,
            "minimumDamage" : 170,
            "scalingIncrement" : 5,
        },
        "$" : {
            "damage" : 0,
            "type" : 3,
            "numberOfHits" : null,
            "minimumDamage" : null,
            "scalingIncrement" : 1,
        },
        "BASEKU" : {
            "damage" : 800,
            "type" : 2,
            "numberOfHits" : null,
            "minimumDamage" : null,
            "scalingIncrement" : 2,
        },
        "LVL1(BASEKU)" : {
            "damage" : 2320,
            "type" : 2,
            "numberOfHits" : null,
            "minimumDamage" : 783,
            "scalingIncrement" : null,
        },
        "LVL3(BASEKU)" : {
            "damage" : 5605,
            "type" : 1,
            "numberOfHits" : null,
            "minimumDamage" : 1985,
            "scalingIncrement" : null,
        },
        "SSJGOKU" : {
            "damage" : 200,
            "type" : 2,
            "numberOfHits" : 5,
            "minimumDamage" : null,
            "scalingIncrement" : 2,
        },
        "LVL1(SSJGOKU)(STRAIGHT)" : {
            "damage" : 250,
            "type" : 2,
            "numberOfHits" : 10,
            "minimumDamage" : 750,
            "scalingIncrement" : null,
        },
        "LVL1(SSJGOKU)(DIAGONAL)" : {
            "damage" : 270,
            "type" : 2,
            "numberOfHits" : 10,
            "minimumDamage" : 810,
            "scalingIncrement" : null,
        },
        "LVL3(SSJGOKU)" : {
            "damage" : 4208,
            "type" : 1,
            "numberOfHits" : null,
            "minimumDamage" : 1759,
            "scalingIncrement" : null,
        },
        "TIEN" : {
            "damage" : 800,
            "type" : 2,
            "numberOfHits" : null,
            "minimumDamage" : null,
            "scalingIncrement" : 2,
        },
        "LVL1(TIEN)" : {
            "damage" : 2400,
            "type" : 2,
            "numberOfHits" : null,
            "minimumDamage" : 1032,
            "scalingIncrement" : null,
        },
        "LVL1+1(TIEN)" : {
            "damage" : 3058,
            "type" : 2,
            "numberOfHits" : null,
            "minimumDamage" : 1426,
            "scalingIncrement" : null,
        },
        "LVL3(TIEN)" : {
            "damage" : 3600,
            "type" : 1,
            "numberOfHits" : null,
            "minimumDamage" : 1872,
            "scalingIncrement" : null,
        },
        "LVL3+1(TIEN)" : {
            "damage" : 900,
            "type" : 1,
            "numberOfHits" : null,
            "minimumDamage" : 600,
            "scalingIncrement" : null,
        },
        "LVL3+2(TIEN)" : {
            "damage" : 800,
            "type" : 1,
            "numberOfHits" : null,
            "minimumDamage" : 600,
            "scalingIncrement" : null,
        },
        "LVL3+3(TIEN)" : {
            "damage" : 700,
            "type" : 1,
            "numberOfHits" : null,
            "minimumDamage" : 600,
            "scalingIncrement" : null,
        },
        "LVL3+4(TIEN)" : {
            "damage" : 600,
            "type" : 1,
            "numberOfHits" : null,
            "minimumDamage" : 600,
            "scalingIncrement" : null,
        },
    }];


function getDamageAfterScaling(scalingTable, moveData, scalingIndex, isLvl1, isSparking) {

    let damageToReturn;
    let scalingToUse;

    // Get the move's base damage
    let moveDamage = moveData["damage"];

    // If we're in sparking
    if (isSparking) {
        // Apply sparking damage
        moveDamage = Math.round(moveDamage * 1.2);
    }

    // Now let's decide how much scaling to use
    // If we aren't at the point of max scaling
    if (scalingIndex < scalingTable.length)
    {
        // Set the current scaling to the intended value within the scaling table
        scalingToUse = scalingTable[scalingIndex];
    }
    else
    {
        // If we instead are past the point of max scaling
        // Set the current scaling to be the max possible scaling
        scalingToUse = scalingTable[scalingTable.length - 1];
    }

    // Apply the calculated scaling to the damage to return
    damageToReturn =  moveDamage * scalingToUse / 100;

    // If the move hits multiple times
    let numberOfHits = moveData["numberOfHits"];
    if (numberOfHits > 1) {
        // if we're not at max scaling
        if (scalingIndex < scalingTable.length - 1) {
            // If the move is a lvl1, the followups skip an additional scaling step
            // This is only a special case if we're using a super and we're 2 hits or more from max scaling
            if (isLvl1 && scalingIndex < scalingTable.length - 2) {
                damageToReturn += (moveDamage * scalingTable[scalingIndex + 2] / 100) * (numberOfHits - 1);
            }
            else {
                // Add the remaining hits to the damage, but scaled to the next hit's scaling
                damageToReturn += (moveDamage * scalingTable[scalingIndex + 1] / 100) * (numberOfHits - 1);
            }
        }
        else {
            // If we are at max scaling
            // Add the remaining hits to the damage using maximum scaling
            damageToReturn += (moveDamage * scalingTable[scalingTable.length-1] / 100) * (numberOfHits - 1);
        }
    }

    // Now in case the move has minimum damage
    let moveMinDmg = moveData["minimumDamage"];
    // If our calculated damage as less than the move's minimum damage
    if (damageToReturn < moveMinDmg) {
        // Set the damage to return to be the minimum damage allowed by the move
        damageToReturn = moveMinDmg;
    }

    // Now we've calculated scaling, adjusted for minimum damage, and accounted for multiple hit moves
    // We then added every hit's damage to the return value

    // Return the calculated damage to return
    return damageToReturn;
}


function calculateComboDamage(combo) {

    // Split the moves in the combo string based on the delimiter
    let movesInCombo = combo.split('-');

    return movesInCombo[0];

    let isSparking;
    // Before calculating, lets see if we're in sparking before starting the combo
    // If the first move in the combo is sparking
    if (movesInCombo[0].startsWith("$"))
    {
        // Turn sparking on
        isSparking = true;
        // Skip the first move in the combo so we dont count sparking for scaling
        movesInCombo.shift();
    }
    else
    { // If the first move in the combo isn't sparking
        // Set sparking off
        isSparking = false;
    }

    // Get the scaling type of the combo, depending on the first move used
    let scalingType = moveList[movesInCombo[0]]["type"];
    let scalingToUse;
    switch (scalingType)
    {
        case 1:
            scalingToUse = type1Scaling;
            break;
        case 2:
            scalingToUse = type2Scaling;
            break;
        case 3:
            scalingToUse = type3Scaling;
            break;
        default:
            scalingToUse = type1Scaling;
            break;
    }

    // Prepare variables for the loop
    let currentMoveData;
    let totalDamage = 0;
    let scalingIndex = 0;
    let isLvl1 = false;

    let damageToAdd;


    movesInCombo.forEach(function(move) {
        // Get the moveData of the move in question
        currentMoveData = moveList[move];

        // If the move involves Sparking
        if (move === "$") {
            // Flip sparking
            isSparking = !isSparking;
            // If we're now not in sparking
            if (!isSparking){
                // It means sparking ran off
                // Continue to the next move
                return;
            }
            else {
                // If we activated sparking
                // Increment scaling and continue
                scalingIndex += currentMoveData["scalingIncrement"];
                // And move onto the next move
                return;
            }
        }

        // Check if the move is a super
        isLvl1 = move.startsWith("LVL1");
        // Apply scaling
        damageToAdd = getDamageAfterScaling(scalingToUse, currentMoveData, scalingIndex, isLvl1, isSparking);
        // Add the damage to the total
        totalDamage += damageToAdd;
        // Increment the hit number by the prorationhits of the move
        scalingIndex += currentMoveData.getScalingIncrement();

    });

    return totalDamage;

}