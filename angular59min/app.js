var app =  angular.module('HangmanApp', []);
app.controller('GameController', ['$scope', '$timeout', function($scope, $timeout) {
    var words = ['rat', 'cat', 'bat', 'mat'];
    $scope.incorrectLettersChosen = [];
    $scope.correctLettersChosen = [];
    $scope.guesses = 6;
    $scope.displayWord = '';
    $scope.input = {
        letter: ''
    };
    var selectRandomWord = function() {
        var index =  Math.round(Math.random() * words.length);
        return words[index];
    }
    var newGame = function() {
        $scope.incorrectLettersChosen = [];
        $scope.correctLettersChosen = [];
        $scope.guesses = 6;
        $scope.displayWord = '';
        var selectedWord = selectRandomWord();
        var tempDisplayWord = '';
        tempDisplayWord = selectedWord.replace(/./g, '*');
        $scope.selectedWord = selectedWord;
        $scope.displayWord = tempDisplayWord;
    }

    $scope.letterChosen = function() {
        $scope.correctLettersChosen.forEach(element => {
            if(element.toLowerCase() == $scope.input.letter.toLowerCase()) {
                $scope.input.letter = '';
                return;
            }
        });
        $scope.incorrectLettersChosen.forEach(element => {
            if(element.toLowerCase() == $scope.input.letter.toLowerCase()) {
                $scope.input.letter = '';
                return;
            }
        });
        var selectedWord =  $scope.selectedWord;
        var letter = $scope.input.letter;
        if(letter != '') {
            if(selectedWord.match(new RegExp(letter, 'ig'))) {
                $scope.correctLettersChosen.push(letter);
                for(var i = 0; i < selectedWord.length; i++) {
                    if(selectedWord[i].toLowerCase() == $scope.input.letter) {
                        $scope.displayWord = $scope.displayWord.slice(0,i) + $scope.input.letter + $scope.displayWord.slice(i+1);
                    }
                }
            }
            else {
                $scope.incorrectLettersChosen.push(letter);
                $scope.guesses -= 1;
            }
            $scope.input.letter = '';
            if($scope.guesses <= 0) {
                alert('You lost the game');
                $timeout(function() {
                    newGame();
                }, 500); 
            }
            if($scope.displayWord.indexOf('*') == -1) {
                alert('You won the game');
                $timeout(function() {
                    newGame();
                }, 500);
            }
        }
    }
    newGame();
}]);