describe("Tic-Tac-Toe Game", function() {
 

  it("should handle a click and update the board with 'X' or 'O'", function() {
      const firstBox = document.getElementById("1");
      firstBox.click();
      expect(firstBox.querySelector('p').innerHTML).toBe('X');
      expect(xAttempts).toContain(0);

      const secondBox = document.getElementById("2");
      secondBox.click();
      expect(secondBox.querySelector('p').innerHTML).toBe('O');
      expect(oAttempts).toContain(1);
  });

  it("should declare a tie when all boxes are filled with no winner", function() {
      // Simulate a tie game
      const moves = [1, 2, 3, 5, 4, 6, 8, 7, 9];
      moves.forEach(id => {
          document.getElementById(id).click();
      });
      expect(message.innerHTML).toBe("It's a tie 🤝 ");
      expect(gameResult.style.visibility).toBe("visible");
  });

  it("should declare a winner when a winning combination is achieved", function() {
      const attempts = [0, 1, 2];
      result(winningCombinations, attempts, 'X');
      expect(message.innerHTML).toBe("'X' Won the game!");
      expect(gameResult.style.visibility).toBe("visible");
      expect(wonTheGame).toBe(1);
  });



  it("should reload the page when the restart button is clicked", function() {
      spyOn(history, 'go');
      restart.click();
      expect(history.go).toHaveBeenCalledWith(0);
  });
});
