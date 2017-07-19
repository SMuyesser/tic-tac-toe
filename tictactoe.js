$( document ).ready(function() {
	var turn = 'X';
	var turnCount = 1;
	var gameStatus = 'playing';

	function endTurn() {
		turnCount ++;
		$('h2#js-status').html('<h2>Turn Count: ' + turnCount + '</h2>');
		if (turn === 'X') {
			$('h2#js-turn').html('<h2>Current turn: O</h2>');
			return turn = 'O';
		} else if (turn === 'O') {
			$('h2#js-turn').html('<h2>Current turn: X</h2>');
			return turn = 'X';
		}
	}

	function checkForWin() {
		var a1 = $('input#1').val();
		var a2 = $('input#2').val();
		var a3 = $('input#3').val();
		var b1 = $('input#4').val();
		var b2 = $('input#5').val();
		var b3 = $('input#6').val();
		var c1 = $('input#7').val();
		var c2 = $('input#8').val();
		var c3 = $('input#9').val();


		if (a1===a2 && a2===a3 && a1==="X" || 
			b1===b2 && b2===b3 && b1==="X" ||
			c1===c2 && c2===c3 && c1==="X" ||
			a1===b1 && b1===c1 && a1==="X" ||
			a2===b2 && b2===c2 && a2==="X" ||
			a3===b3 && b3===c3 && a3==="X" ||
			a1===b2 && b2===c3 && a1==="X" ||
			a3===b2 && b2===c1 && a3==="X" ||
			a1===a2 && a2===a3 && a1==="O" || 
			b1===b2 && b2===b3 && b1==="O" ||
			c1===c2 && c2===c3 && c1==="O" ||
			a1===b1 && b1===c1 && a1==="O" ||
			a2===b2 && b2===c2 && a2==="O" ||
			a3===b3 && b3===c3 && a3==="O" ||
			a1===b2 && b2===c3 && a1==="O" ||
			a3===b2 && b2===c1 && a3==="O") {
			$('h2#js-status').replaceWith("<h2>" + turn + "'s Is The Winner!</h2>");
			gameStatus="end";
		}
	}

	$('input').click(function(event) {
		var boxVal = $(this).val();
		if (boxVal !== "X" && boxVal !== "O") {
			if(turn === "X") {
				$(this).val('X');
			} else {
				$(this).val('O');
			}
			checkForWin();
			endTurn();
			if(gameStatus==="end") {
				alert('Game Over');
			}
		}
	});
});