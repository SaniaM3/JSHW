function converFloor(floor){
    if (floor >= 0 && floor <= 13) {
        console.log(floor + 1);
    }
    else {
        console.log(floor);
    }
}
converFloor(-1);
converFloor(0);
converFloor(2);
converFloor(12);
converFloor(14);