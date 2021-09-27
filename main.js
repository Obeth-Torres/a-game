document.addEventListener('DOMContentLoaded', () => {
    const gridDisplay = document.querySelector('.grid')
    const width = 4
    let squares = []
    //random number
    let listOfNumbers = [];
    let times = 17
    function randomNumber(){
        let number = Math.floor(Math.random()*16)
        const found = listOfNumbers.find(element => element === number)
        if (found != number){
            listOfNumbers.push(number)
            times -= 1
        } 
    }
    while(times > 1){
        randomNumber()
    }
    //Create a playing board
    function createBoard(){
        for(let i = 0; i < width * width; i++){
            let square = document.createElement('div')
            square.innerHTML = 0;
            gridDisplay.appendChild(square)
            squares.push(square)
        } 
        generate()
    }
    createBoard();    

    //generate random number
    function generate(){
        for(i =0; i < 16;i++){
            squares[i].innerHTML = listOfNumbers[i]
        }     
    }

    //addClass 
    function addClass () {
        for(i=0; i<squares.length;i++){
            if(squares[i].innerHTML === '0'){
                squares[i].classList.add('fichaNegra')
                squares[i].classList.remove('ficha')
            } else {
                squares[i].classList.add('ficha')
                squares[i].classList.add('fichaNegra')
            }
        }
    }
    


    //move to right
    function moveRight(){
        for(i=0;i<16;i++){
            if(i % 4 === 0){
                let totalOne = squares[i].innerHTML
                let totalTwo = squares[i+1].innerHTML
                let totalThree = squares[i+2].innerHTML
                let totalFour = squares[i+3].innerHTML

                let row = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]
              
                if(row.includes(0)){
                    let ceroIndex = row.indexOf(0)
                    let leftValue = row[ceroIndex - 1]                    
                    if(ceroIndex > 0){
                        let start = ceroIndex
                        let deletCount = 1
                        let item1 = leftValue
                        row.splice(start, deletCount, item1)                  
                        row.splice(start -1, deletCount, 0) 
                    }                    
                }
                squares[i].innerHTML = row[0]
                squares[i+1].innerHTML = row[1]
                squares[i+2].innerHTML = row[2]
                squares[i+3].innerHTML = row[3]   

            }
        }       
      
    }
    

    //move to the left
    function moveLeft(){
        for(i=0;i<16;i++){
            if(i % 4 === 0){
                let totalOne = squares[i].innerHTML
                let totalTwo = squares[i+1].innerHTML
                let totalThree = squares[i+2].innerHTML
                let totalFour = squares[i+3].innerHTML

                let row = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]
              
                if(row.includes(0)){
                    let ceroIndex = row.indexOf(0)
                    let rightValue = row[ceroIndex + 1]                    
                    if(ceroIndex < 3){
                        let start = ceroIndex
                        let deletCount = 1
                        let item1 = rightValue
                        row.splice(start, deletCount, item1)                    
                        row.splice(start +1, deletCount, 0)                       
                    }                    
                }

                squares[i].innerHTML = row[0]
                squares[i+1].innerHTML = row[1]
                squares[i+2].innerHTML = row[2]
                squares[i+3].innerHTML = row[3]
            }
        }
    }

    //move to down
    function moveDown (){
        for(i = 0; i < 4; i++){
            let totalOne = squares[i].innerHTML
            let totalTwo = squares[i + width].innerHTML
            let totalThree = squares[i + (width * 2)].innerHTML
            let totalFour = squares[i + (width * 3)].innerHTML

            let colum = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]

            if(colum.includes(0)){
                let ceroIndex = colum.indexOf(0)
                let beforeValue = colum[ceroIndex -1]
                if(ceroIndex > 0){
                    let start = ceroIndex
                    let delateCount = 1
                    let item1 = beforeValue
                    colum.splice(start, delateCount, item1)
                    colum.splice(start -1, delateCount, 0)
                }
            }
            squares[i].innerHTML = colum[0]
            squares[i + width].innerHTML = colum[1]
            squares[i + (width * 2)].innerHTML = colum[2]
            squares[i + (width * 3)].innerHTML = colum[3]
        }
    }

    //move to up
    function moveUp (){
        for(i = 0; i < 4; i++){
            let totalOne = squares[i].innerHTML
            let totalTwo = squares[i + width].innerHTML
            let totalThree = squares[i + (width * 2)].innerHTML
            let totalFour = squares[i + (width * 3)].innerHTML

            let colum = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]

            if(colum.includes(0)){
                let ceroIndex = colum.indexOf(0)
                let afterValue = colum[ceroIndex +1]
                if(ceroIndex < 3){
                    let start = ceroIndex
                    let delateCount = 1
                    let item1 = afterValue
                    colum.splice(start, delateCount, item1)
                    colum.splice(start +1, delateCount, 0)
                    
                }
            }
            squares[i].innerHTML = colum[0]
            squares[i + width].innerHTML = colum[1]
            squares[i + (width * 2)].innerHTML = colum[2]
            squares[i + (width * 3)].innerHTML = colum[3]
            
        }
    }

    //assing keycodes
    function control(e){
        if(e.keyCode === 39){
            keyRight()
        } else if (e.keyCode === 37){
            keyLeft()
        } else if (e.keyCode === 40){
            keyDown()
        } else if(e.keyCode === 38){
            Up()
        }
    }

    window.addEventListener('keyup', control)


    addClass()
    function keyRight(){
        moveRight()
        addClass()
    }
    function keyLeft(){
        moveLeft()
        addClass()
    }
    function keyDown(){
        moveDown()
        addClass()
    }
    function Up(){
        moveUp()
        addClass()
    }    
    
    //squares[0].classList.add('fichaNegra')
    
})
