


var myRover = {
  position: [5,5],
  direction: 'N'
}

var movingRover; //= ["f","b","l","r"]
function choose(choice){
    console.log(choice);
    movingRover= choice;

      if (movingRover==="f"){
        goForward(myRover);
        }else if(movingRover==="b"){
        goBack(myRover);
        }else if(movingRover==="l"){
        goLeft(myRover);
        }else if (movingRover==="r"){
        goRight(myRover);
        } else {
        console.log("Put some petrol on it")
        }

      function goForward(rover) {
        switch(rover.direction) {
          case 'N':
            rover.position[0]++
            break;
          case 'E':
            rover.position[1]++
            break;
          case 'S':
            rover.position[0]--
            break;
          case 'W':
            rover.position[1]--
            break;
        };

        console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
      }

      function goBack(rover) {
        switch(rover.direction) {
          case 'N':
            rover.position[0]--
            break;
            case 'E':
              rover.position[1]--
              break;
          case 'S':
            rover.position[0]++
            break;
          case 'W':
            rover.position[1]--
            break;
        };

        console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")

      }
      function goLeft(rover) {
        switch(rover.direction) {
          case 'N':
            rover.direction="E"
            break;
            case 'E':
              rover.direction="S"
              break;
          case 'S':
            rover.direction="W"
            break;
          case 'W':
            rover.direction="N"
            break;
        };
        console.log("New Rover Direction: [" + rover.direction + "]")
        console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
      }
      function goRight(rover) {
        switch(rover.direction) {
          case 'N':
            rover.direction= "W"
            break;
            case 'E':
              rover.direction= "N"
              break;
          case 'S':
            rover.direction= "E"
            break;
          case 'W':
            rover.direction = "S"
            break;
        };
        console.log("New Rover Direction: [" + rover.direction + "]")
        console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
      }
      // coches de choque
      if (myRover.position[0]<0) {
        console.log("STOP: you cannot go beyon the limits")
        choose ("f")
      }
      if (myRover.position[0]>10) {
        console.log("STOP: you cannot go beyon the limits")
        choose ("b")
      }
      if (myRover.position[1]<0) {
        console.log("STOP: you cannot go beyon the limits")
        choose ("f")
      }
      if (myRover.position[1]>10) {
        console.log("STOP: you cannot go beyon the limits")
        choose ("b")
      }
      // obstaculo 1 [2,3]
      if (myRover.position[0]==[2] && myRover.position[1]==[3])
      {
          console.log("STOP: you are going to colisionate with a rock")
            }
      // obstaculo 2 [7,8]
            if (myRover.position[0]==[7] && myRover.position[1]==[8])
            {
                console.log("upps! that was a martians foot?")
                  }

}
