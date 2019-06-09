let turn = 0

function player() {
   if (turn % 2 === 0) {
      turn++
      return "X"
   } else if (turn % 2 === 1) {
      turn++
      return "O"
   }
}

function updateState(element) {
   element.innerHTML = player()
}

function setMessage(msg) {
   document.querySelector("div#message").innerHTML = msg
}

function allX(currentValue) {
   return currentValue === "X"
}

function allO(currentValue) {
   return currentValue === "O"
}

function checkWinner() {
   const collection = document.querySelectorAll("td")
   const gameState = []
   collection.forEach(function(el) {
      gameState.push(el.innerHTML)
   })
   const row1 = gameState.slice(0, 3)
   const row2 = gameState.slice(3, 6)
   const row3 = gameState.slice(6, 9)
   const rows = [row1, row2, row3]

   const col1 = [gameState[0], gameState[3], gameState[6]]
   const col2 = [gameState[1], gameState[4], gameState[7]]
   const col3 = [gameState[2], gameState[5], gameState[8]]
   const cols = [col1, col2, col3]

   const diag1 = [gameState[0], gameState[4], gameState[8]]
   const diag2 = [gameState[2], gameState[4], gameState[6]]

   const allArray = [row1, row2, row3, col1, col2, col3, diag1, diag2]


   allArray.forEach(function(element) {
      if (element.every(allX)) {
          setMessage("Player X Won!")
          return true
      } else if (element.every(allO)) {
         setMessage("Player O Won!")
         return true
      } else {
         return false
      }
   })

}