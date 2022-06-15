var pizzaMan, leftVeh, rightVeh, pizza, npc, bg, houseBg,  frontWalk, backWalk
var bound1, bound2, bound3, bound4,pizzaPlace, houseBlock1, houseBlock2,houseBlock3
var rCarFront, rCarBack, bCarFront, bCarBack, gCarFront, gCarBack
var houses = []
var npcs = []
var houseNum, touchedHouse
var gameState = "start"
var oc = true
var fcc = 1 
var t = true
var dMissed = false
cTouch = false
var money = 10
var move = true
var bounds, cars
var vCar1, vCar2, vCar3
var time = "night" 
var nightBox, okButton, shopButton, returnButton
var bckgrnd
var bookShelf, desk, cabinent, plant1, plant2, displayPrice = true
var furniture, moneyList = []
var displayPriceB = true
var displayPriceC = true
var displayPriceP1 = true
var displayPriceP2 = true
var displayPriceD = true
var displayPriceTv = true
var sad1, sad2, sad3, happy1, happy2, happy3, bckbttn, c1, c2, c3 

function preload(){
    bg = loadImage ("assets/map.png")
    houseBg = loadImage("assets/insideHouse.png")

    frontWalk = loadAnimation("assets/front walk1.png","assets/front walk2.png","assets/front walk3.png","assets/front walk4.png")
    backWalk = loadAnimation("assets/back walk1.png","assets/back walk2.png","assets/back walk3.png","assets/back walk4.png")
    leftWalk = loadAnimation("assets/left walk1.png","assets/left walk2.png","assets/left walk3.png","assets/left walk4.png")
    rightWalk = loadAnimation("assets/right walk1.png","assets/right walk2.png","assets/right walk3.png","assets/right walk4.png")

    rCarFront = loadAnimation("assets/rCar front.png")
    bCarFront = loadAnimation("assets/bCar front.png") 
    gCarFront = loadAnimation("assets/gCar front.png")

    rCarBack = loadAnimation("assets/rCar back.png")
    bCarBack = loadAnimation("assets/bCar back.png")
    gCarBack = loadAnimation("assets/gCar back.png")

    bookShelf = loadImage("assets/bookshelf.PNG")
    cabinent = loadImage("assets/cabinent.PNG")
    desk = loadImage("assets/deskandchair.PNG")
    plant1 = loadImage("assets/plant1.JPG")
    plant2 = loadImage("assets/plant2.JPG")
    tv = loadImage("assets/tv.png")

    sad1 = loadAnimation("assets/sad1.png")
    sad2 = loadAnimation("assets/sad2.png")
    sad3 = loadAnimation("assets/sad3.png")

    happy1 = loadAnimation("assets/happy1.png")
    happy2 = loadAnimation("assets/happy2.png")
    happy3 = loadAnimation("assets/happy3.png")

    bckbttn = loadImage("assets/backButton.png")

}   
function setup(){
    createCanvas (1400, 700)

    bckgrnd = bg

    bound1 = createSprite(680,110,1200,2)
    bound1.shapeColor="blue"
    bound1.visible = false

    bound2 = createSprite(83,300,2,380)
    bound2.shapeColor="blue"
    bound2.visible = false

    bound3 = createSprite(1295,350,2,500)
    bound3.shapeColor="blue"
    bound3.visible = false

    bound4 = createSprite(850,600,875,2)
    bound4.shapeColor="blue"
    bound4.visible = false

    
    bound5 = createSprite(404,646,2,90)
    bound5.shapeColor="blue"
    bound5.visible = false
    
    bound6 = createSprite(355,688,100,2)
    bound6.shapeColor="blue"
    bound6.visible = false

    houseBlock1 = createSprite(315,302,266,223)
    houseBlock1.shapeColor="blue"
    houseBlock1.visible = false

    houseBlock2 = createSprite(707,350,293,320)
    houseBlock2.shapeColor="blue"
    houseBlock2.visible = false

    houseBlock3 = createSprite(1071,350,250,319)
    houseBlock3.shapeColor="blue"
    houseBlock3.visible = false

    pizzaPlace = createSprite(154,579,300,199)
    pizzaPlace.shapeColor="blue"
    pizzaPlace.visible = false

    bounds = new Group()

    cars = new Group()

    bounds.add(bound1)
    bounds.add(bound2)
    bounds.add(bound3)
    bounds.add(bound4)
    bounds.add(bound5)
    bounds.add(bound6)
    bounds.add(pizzaPlace)

    vCar1= createSprite(120,Math.round(random(150,420)),10,20)
    vCar1.shapeColor = "blue"
    vCar1.velocityY = Math.round(random(3,7));

    cars.add(vCar1)

    vCar2= createSprite(500,Math.round(random(150,550)),10,20)
    vCar2.shapeColor = "blue"
    vCar2.velocityY = Math.round(random(3,7));

    cars.add(vCar2)

    vCar3= createSprite(1250,Math.round(random(150,550)),10,20)
    vCar3.shapeColor = "blue"
    vCar3.velocityY = Math.round(random(3,7));

    cars.add(vCar3)
    
    
    for (var h = 0; h < 6; h++){
        house1 = createSprite(60, 400 - h*62, 60, 20)
        houses.push (house1)
        npc1 = createSprite (house1.x,house1.y,30,30)
        npc1.shapeColor = "green"
        npc1.visible = false
        npcs.push (npc1)

        house1.visible = false
    }

    for (var h = 0; h < 15; h++){
        house2 = createSprite(120 + h*82, 80, 20, 70)
        houses.push (house2)
        npc2 = createSprite (house2.x,house2.y,30,30)
        npc2.shapeColor = "green"
        npc2.visible = false
        npcs.push (npc2)

        house2.visible = false


    }

    for (var h = 0; h < 8; h++){
        house3 = createSprite(1310, 540 - h*62, 60, 20)
        houses.push (house3)
        npc3 = createSprite (house3.x,house3.y,30,30)
        npc3.shapeColor = "green"
        npc3.visible = false
        npcs.push (npc3)

        house3.visible = false

    }

    for (var h = 0; h < 11; h++){
        house4 = createSprite(442 + h*82, 620, 20, 70)
        houses.push (house4)
        npc4 = createSprite (house4.x,house4.y,30,30)
        npc4.shapeColor = "green"
        npc4.visible = false
        npcs.push (npc4)

        house4.visible = false

    }

    for (var h = 0; h < 2; h++){
        house5 = createSprite(205, 320- h*62, 70, 20)
        houses.push (house5)
        npc5 = createSprite (house5.x,house5.y,30,30)
        npc5.shapeColor = "green"
        npc5.visible = false
        npcs.push (npc5)

        house5.visible = false

    }

    for (var h = 0; h < 2; h++){
        house6 = createSprite(425, 320- h*62, 70, 20)
        houses.push (house6)
        npc6 = createSprite (house6.x,house6.y,30,30)
        npc6.shapeColor = "green"
        npc6.visible = false
        npcs.push (npc6)

        house6.visible = false

    }

    for (var h = 0; h < 3; h++){
        house7 = createSprite(230 + h*85, 212, 20, 70)
        houses.push (house7)
        npc7 = createSprite (house7.x,house7.y,30,30)
        npc7.shapeColor = "green"
        npc7.visible = false
        npcs.push (npc7)

        house7.visible = false

    }

    for (var h = 0; h < 3; h++){
        house8 = createSprite(230 + h*85, 390, 20, 70)
        houses.push (house8)
        npc8 = createSprite (house8.x,house8.y,30,30)
        npc8.shapeColor = "green"
        npc8.visible = false
        npcs.push (npc8)

        house8.visible = false

    }

    for (var h = 0; h < 4; h++){
        house5 = createSprite(585, 440- h*62, 70, 20)
        houses.push (house5)
        npc5 = createSprite (house5.x,house5.y,30,30)
        npc5.shapeColor = "green"
        npc5.visible = false
        npcs.push (npc5)
        house5.visible = false

    }

    for (var h = 0; h < 4; h++){
        house5 = createSprite(830, 440- h*62, 70, 20)
        houses.push (house5)
        npc5 = createSprite (house5.x,house5.y,30,30)
        npc5.shapeColor = "green"
        npc5.visible = false
        npcs.push (npc5)

        house5.visible = false

    }
    
    for (var h = 0; h < 3; h++){
        house7 = createSprite(623 + h*85, 212, 20, 70)
        houses.push (house7)
        npc7 = createSprite (house7.x,house7.y,30,30)
        npc7.shapeColor = "green"
        npc7.visible = false
        npcs.push (npc7)
        house7.visible = false

    }

    for (var h = 0; h < 3; h++){
        house7 = createSprite(615 + h*85, 480, 20, 70)
        houses.push (house7)
        npc7 = createSprite (house7.x,house7.y,30,30)
        npc7.shapeColor = "green"
        npc7.visible = false
        npcs.push (npc7)

        house7.visible = false

    }
    
    for (var h = 0; h < 4; h++){
        house5 = createSprite(965, 440- h*62, 70, 20)
        houses.push (house5)
        npc5 = createSprite (house5.x,house5.y,30,30)
        npc5.shapeColor = "green"
        npc5.visible = false
        npcs.push (npc5)

        house5.visible = false

    }

    for (var h = 0; h < 4; h++){
        house5 = createSprite(1175, 440- h*62, 70, 20)
        houses.push (house5)
        npc5 = createSprite (house5.x,house5.y,30,30)
        npc5.shapeColor = "green"
        npc5.visible = false
        npcs.push (npc5)

        house5.visible = false

    }

    for (var h = 0; h < 3; h++){
        house7 = createSprite(985 + h*85, 212, 20, 70)
        houses.push (house7)
        npc7 = createSprite (house7.x,house7.y,30,30)
        npc7.shapeColor = "green"
        npc7.visible = false
        npcs.push (npc7)

        house7.visible = false

    }

    for (var h = 0; h < 3; h++){
        house7 = createSprite(985 + h*85, 480, 20, 70)
        houses.push (house7)
        npc7 = createSprite (house7.x,house7.y,30,30)
        npc7.shapeColor = "green"
        npc7.visible = false
        npcs.push (npc7)

        house7.visible = false

    }

    //console.log(houses.length)

    //text("First order"+10,300,300)

    pizzaMan = createSprite(370,650,30,30)
    pizzaMan.scale = 0.15
    pizzaMan.addAnimation("front", frontWalk)
    pizzaMan.addAnimation("back", backWalk)
    pizzaMan.addAnimation("left", leftWalk)
    pizzaMan.addAnimation("right", rightWalk)

    vCar1.addAnimation("front",rCarFront)
    vCar1.addAnimation("back",rCarBack)
    vCar1.scale = 0.019
    vCar2.addAnimation("front",bCarFront)
    vCar2.addAnimation("back",bCarBack)
    vCar2.scale = 0.07
    vCar3.addAnimation("front",gCarFront)
    vCar3.addAnimation("back",gCarBack)
    vCar3.scale = 0.15

    sBookshelf = createSprite(200,100,200,200)
    sBookshelf.addImage(bookShelf)
    sBookshelf.scale = 0.5
    sPlant1 = createSprite(400,100,200,200)
    sPlant1.addImage(plant1)
    sPlant1.scale = 0.3
    sPlant2 = createSprite(500,100,200,200)
    sPlant2.addImage(plant2)
    sPlant2.scale = 0.3
    sDesk = createSprite(650,100,200,200)
    sDesk.addImage(desk)
    sDesk.scale = 0.5
    sCabinent = createSprite(900,100,200,200)        
    sCabinent.addImage(cabinent)
    sCabinent.scale = 0.5
    sTV = createSprite(1100,100,200,200)
    sTV.addImage(tv)
    sTV.scale = 0.75

    furniture = new Group()
    furniture.add(sBookshelf)
    furniture.add(sPlant1)
    furniture.add(sPlant2)
    furniture.add(sDesk)
    furniture.add(sCabinent)
    furniture.add(sTV)
    //furniture.add()

    for(i=0;i<furniture.length;i++){
        furniture[i].visible = false
         }

    //pizzaMan.debug = true
    pizzaMan.setCollider("rectangle",0,0,120,220)

    console.log(bounds)

    okButton = createSprite(width/4*1.35,height/4*2.75,350,150)
    shopButton = createSprite(width/4*2.65,height/4*2.75,350,150)
    returnButton = createSprite(width - 100, 100, 100,100)
    
    okButton.shapeColor = "#e64d27"
    shopButton.shapeColor = "#e64d27"
    returnButton.shapeColor = "#f0c581"

    okButton.visible = false
    shopButton.visible = false
    returnButton.visible = false

    returnButton.addImage(bckbttn)
    returnButton.scale = 0.75

}
function draw(){

    background(bckgrnd)
    //console.log(gameState)

    houses.visible = false
    drawSprites()

    pizzaMan.bounceOff(pizzaPlace)
    pizzaMan.bounceOff(bound5)
    pizzaMan.bounceOff(bound6)

    pizzaMan.bounceOff(houseBlock1)
    pizzaMan.bounceOff(houseBlock2)
    pizzaMan.bounceOff(houseBlock3)

    for(i=0;i<houses.length;i++){
        fill("white")
        if(gameState !== "shop"){
            push()
            textAlign(CENTER)
            textSize(20)
            stroke("green")
            fill("white")
            strokeWeight(2)
            text(i,houses[i].position.x,houses[i].position.y)
            pop()
        }

    }

    if(keyDown(UP_ARROW)&&move == true){
        pizzaMan.y = pizzaMan.y-2
        pizzaMan.changeAnimation("back")
    }

    if(keyDown(DOWN_ARROW)&&move == true){
        pizzaMan.y = pizzaMan.y+2
        pizzaMan.changeAnimation("front")
    }

    if(keyDown(LEFT_ARROW)&&move == true){
        pizzaMan.x = pizzaMan.x-2
        pizzaMan.changeAnimation("left")

    }

    if(keyDown(RIGHT_ARROW)&&move == true){
        pizzaMan.x = pizzaMan.x+2
        pizzaMan.changeAnimation("right")

    }

    fill("red")
    text("Money: "+money,10,20)


    if(gameState == "start" && oc == true){
        bckgrnd = bg
        for(i=0;i<furniture.length;i++){
            furniture[i].visible = false
             }
        //console.log(bg)
        //console.log(bckgrnd)
        houseNum = Math.round(random(0,houses.length))
        oc = false 
        gameState = "play"
        
        
    }

    if(oc == false && gameState !== "shop" ){
        fill("black")
        stroke("yellow")
        strokeWeight(8)
        textSize(20)
        text("You have a new order from:",70,590)
        text("House "+ houseNum,70, 610)
        //console.log("test")
        //console.log(frameCount)

        startTimer()
        
        

    }

    if(gameState == "play"){
        bckgrnd = bg
        for(i=0;i<furniture.length;i++){
            furniture[i].visible = false
             }
        touchedHouse = order()
        //console.log(houseNum, touchedHouse)   
        if(houseNum == touchedHouse){
            //fill("blue")
            //text("Yay",700,350)
            money = money + 15
            fcc = 0
            pizzaMan.x = 370 
            pizzaMan.y = 650
            gameState = "start"
            oc = true
            h = random([happy1,happy2,happy3])
            c1 = createSprite(houses[houseNum].x,houses[houseNum].y)
            c1.addAnimation("happy", h)
            c1.lifetime = 50
            c1.scale = 0.75


        }

        if(fcc == 900){
            fill("red")
            text("Time up!",100,500)
            stopTimer()
            dMissed = true
        }

        if (dMissed == true||(hTouch == true &&houseNum !== touchedHouse)||cTouch == true){
            money = money - 10
            fcc = 0
            dMissed = false
            t = true
            gameState = "start"
            oc = true
            cTouch = false
            pizzaMan.x = 370 
            pizzaMan.y = 650
            s = random([sad1,sad2,sad3])
            c2 = createSprite(houses[houseNum].x,houses[houseNum].y)
            c2.scale = 0.75
            c2.addAnimation("sad",s)
            c2.lifetime = 50

        }

        if (pizzaMan.isTouching(cars)){
            cTouch = true
        }

        if(money<0){
            text("Game Over",700,350)
            gameState = "gameOver"

        }

        if(time == "night"){
            dayCycle()
            console.log ("daycycle started")
            time = "day"
        }

        okButton.visible = false
        shopButton.visible = false
    }

    if (gameState == "gameOver"){
        bckgrnd = bg
        stopTimer()
        move = false
        vCar1.velocityY = 0
        vCar2.velocityY = 0
        vCar3.velocityY = 0

        swal(
            {
              title:`Game Over!!!`,
              text:"Thanks for playing!",
              imageUrl:"assets/cry1.png",
              imageSize:"200x200",
              confirmButtonText:"Play Again",
            }, function(isConfirm){
              if(isConfirm){
                location.reload()
              }
            }
        )
    }

    if (gameState == "nightTime"){
        bckgrnd = bg
        //show stats(?)
        //create box with options of continuing or shopping
        move = false
        vCar1.velocityY = 0
        vCar2.velocityY = 0
        vCar3.velocityY = 0

        for(i=0;i<furniture.length;i++){
            furniture[i].visible = false
             }

        stopTimer()

        rectMode(CENTER)
        strokeWeight(20)
        stroke("#bd5740")
        fill("#f0ab7d")
        nightBox = rect(width/2,height/2, 1000, 500)

        textAlign(CENTER);
        textFont("Courier")
        strokeWeight(5)
        textSize(50)
        fill("#d67302")
        text("Day Complete!",width/2,200)
        text("Money: $" + money, width/2,250)

        okButton.visible = true
        shopButton.visible = true

        okButton.display()
        shopButton.display()

        textFont("Tahoma")
        textSize(70)
        fill("#ffaf59")
        text("Continue",okButton.x,okButton.y+25)
        text("Shop",shopButton.x,shopButton.y+25)


        if (mousePressedOver(okButton)){
            pizzaMan.x = 370 
            pizzaMan.y = 650

            move = true

            vCar1.velocityY = Math.round(random(3,7));
            vCar2.velocityY = Math.round(random(3,7));
            vCar3.velocityY = Math.round(random(3,7));

            time == "night"

            gameState = "start"
            oc = true

            resetTimer()
        }

        if (mousePressedOver(shopButton)){
            gameState = "shop"
        }



    }

    if (gameState == "shop"){
        move = true
        bckgrnd = houseBg
        okButton.visible = false
        shopButton.visible = false
        returnButton.visible = true


        for(i=0;i<furniture.length;i++){
            furniture[i].visible = true
             }

        for(i=0;i<houses.length;i++){
       houses[i].visible = false
        }

        for(i=0;i<cars.length;i++){
            cars[i].visible = false
             }
        //prices of each furniture

        pB = 90
        pP1 = 70
        pP2 = 50
        pD = 230
        pC = 130
        pTv = 350

        moneyList = [pB,pP1,pP2,pD,pC,pTv]
        



        if(displayPrice == true){
            textAlign(CENTER)
            textSize(30)
            fill("#f56505")
            if(displayPriceB == true){
                text("$" + pB,200,240)
            }
            if(displayPriceP1 == true){
                text("$" + pP1,400,210)
            }
            if(displayPriceP2 == true){
                text("$" + pP2,500,210)
            }
            if(displayPriceD == true){
                text("$" + pD,650,210)
            }
            if(displayPriceC == true){
                text("$" + pC,900,190)
            }
            if(displayPriceTv == true){
                text("$" + pTv,1100,190)

            }
        }

        for(i=0;i<furniture.length;i++){
            if(mousePressedOver(furniture[i])){


                if(moneyList[i]<money){
                    console.log(moneyList[i])
                    switch(moneyList[i]){
                        default: text("default",700,350)
                        break;
                        case 90: 
                        sBookshelf.x = 400
                        sBookshelf.y = 450
                        money = money - moneyList[i]
                        displayPriceB = false
                        break;
                        case 230:
                        sDesk.x = 240
                        sDesk.y = 500
                        money = money - moneyList[i]
                        displayPriceD = false
                        break;
                        case 130:
                        sCabinent.x = 1000
                        sCabinent.y = 500
                        money = money - moneyList[i]
                        displayPriceC = false
                        break;
                        case 350:
                        sTV.x = 1000
                        sTV.y = 350
                        money = money - moneyList[i]
                        displayPriceTv = false
                        break;
                        case 50:
                        sPlant2.x = 1200
                        sPlant2.y = 450
                        money = money - moneyList[i]
                        displayPriceP2 = false
                        break;
                        case 70:
                        sPlant1.x = 800
                        sPlant1.y = 450
                        money = money - moneyList[i]
                        displayPriceP1 = false
                        break;
                    }
                }
                else{
                    textSize(40)
                    fill("red")
                    text("Insufficent funds",width/2,height/2)
                }
            
            }
             }
       

        if(mousePressedOver(returnButton)){
            console.log("return test")
            bckgrnd = bg
            for(i=0;i<furniture.length;i++){
                furniture[i].visible = false
                 }
            pizzaMan.x = 370 
            pizzaMan.y = 650

            move = true

            for(i=0;i<cars.length;i++){
                cars[i].visible = true
                 }

            vCar1.velocityY = Math.round(random(3,7));
            vCar2.velocityY = Math.round(random(3,7));
            vCar3.velocityY = Math.round(random(3,7));

            for(i=0;i<houses.length;i++){
                houses[i].visible = true
                 } 

            returnButton.visible = false
            gameState = "start"

            oc = true

        }


    }

    //console.log(cars)
    //console.log(bounds)
    if (vCar1.isTouching(bounds)){
        vCar1.velocityY = vCar1.velocityY*-1
    }

    if (vCar2.isTouching(bounds)){
        vCar2.velocityY = vCar2.velocityY*-1
    }

    if (vCar3.isTouching(bounds)){
        vCar3.velocityY = vCar3.velocityY*-1
    }

}

function order(){

    for(i=0;i<houses.length;i++){
        //console.log(houses[i].position.x)
        if(pizzaMan.isTouching(houses[i])){
            //console.log(i,houses[i].position)
            npcs[i].visible = true
            hTouch = true
            return i
            
            
        }

        if(!pizzaMan.isTouching(houses[i])){
            npcs[i].visible = false
            hTouch = false
        }


    }

    if (vCar1.velocityY>0){
        vCar1.changeAnimation("front")
    }
    else {
        vCar1.changeAnimation("back")
    }

    if (vCar2.velocityY>0){
        vCar2.changeAnimation("front")
    }
    else {
        vCar2.changeAnimation("back")
    }

    if (vCar3.velocityY>0){
        vCar3.changeAnimation("front")
    }
    else {
        vCar3.changeAnimation("back")
    }
    
}

function startTimer(){
    if (t==true){
        fcc = fcc+1
        console.log(fcc)
    }
    
}

function stopTimer(){
    t = false
}

function resetTimer(){
    fcc = 0
    t = true
}

function dayCycle(){
    setInterval(function(){
        if (gameState == "play"){
           gameState = "nightTime"
        }
    },90000)
}

