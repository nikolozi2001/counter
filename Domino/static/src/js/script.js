const dominoCards = [
    "0:0", "0:1", "0:2", "0:3", "0:4", "0:5", "0:6",
    "1:1", "1:2", "1:3", "1:4", "1:5", "1:6",
    "2:2", "2:3", "2:4", "2:5", "2:6",
    "3:3", "3:4", "3:5", "3:6",
    "4:4", "4:5", "4:6",
    "5:5", "5:6",
    "6:6"
  ];
  
  const dominoContainer = document.getElementById('dominoContainer');
  
  let currentRow = document.createElement('div');
  currentRow.classList.add('row');
  dominoContainer.appendChild(currentRow);
  
  dominoCards.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('domino-card');
    cardElement.textContent = card;
  
    cardElement.addEventListener('click', () => {
      cardElement.style.display = 'none';
    });
  
    currentRow.appendChild(cardElement);
  
    if (card === "0:6" || card === "1:6" || card === "2:6" || card === "3:6" || card === "4:6" || card === "5:6") {
      currentRow = document.createElement('div');
      currentRow.classList.add('row');
      dominoContainer.appendChild(currentRow);
    }
  });
  