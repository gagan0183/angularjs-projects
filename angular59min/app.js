var app =  angular.module('HangmanApp', []);
app.controller('GameController', ['$scope', function($scope) {
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
                $scope.input.letter = '';
                //$scope.selectedWord = selectedWord.replace(new RegExp(letter, 'g'), letter);
            }
            else {
                $scope.incorrectLettersChosen.push(letter);
                $scope.input.letter = '';
                $scope.guesses -= 1;
            }
        }
    }
    newGame();
}]);