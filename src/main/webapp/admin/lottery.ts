/// <reference path="../lib/angular/angular.d.ts" />
/// <reference path="lib/lodash/lodash.d.ts" />

var app = angular.module("lottery", []);

app.controller("LotteryController", ['$scope', 'LotteryService', function ($scope, service) {
	$scope.closed = false;
	$scope.participants = [];

	$scope.addParticipant = function () {
		var newName = $scope.newParticipant;
		var exists = _.find($scope.participants, x => x.name === newName)
		if (exists) {
			alert("Name schon in Liste vorhanden")
		} else {
			$scope.participants.push({name: newName, active: true});
			$scope.newParticipant = "";
		}
	}

	$scope.draw = function () {
		var chosen = _.filter($scope.participants, x => x.active);
		var names = _.map(chosen, x => x.name);
		if (names.length > 0) {
			$scope.closed = true;
			$scope.winner = service.draw(names);
		}
	}
}]);

app.service("LotteryService", function () {
	return {
		draw: function (names) {
			var randomized = _.shuffle(names);
			return _.first(randomized);
		}
	}
});