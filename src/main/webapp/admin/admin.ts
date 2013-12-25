/// <reference path="../lib/angular/angular.d.ts" />
/// <reference path="../lib/lodash/lodash.d.ts" />

interface Named {
	name : string;
}

var app = angular.module("admin", []);

app.controller("WichtelnController", ['$scope', function ($scope) {
	$scope.closed = false;
	$scope.participants = [];
	$scope.presents = [];

	function addToListIfUnique(collection : Named[], newName : string) {
		if (newName.length === 0) {
			alert("Kein Name angegeben");
		}
		else if (_.find(collection, x => x.name === newName)) {
			alert("Name schon in Liste vorhanden");
		} else {
			collection.push({name: newName});
			$scope.newParticipant = "";
			$scope.newPresent = "";
		}
	}

	$scope.addParticipant = function () {
		addToListIfUnique($scope.participants, $scope.newParticipant);
	}

	$scope.addPresent = function () {
		addToListIfUnique($scope.presents, $scope.newPresent);
	}

	$scope.draw = function () {
		if ($scope.participants.length === 0) {
			alert("Keine Teilnehmer angegeben!");
			return;
		}
		if ($scope.participants.length != $scope.presents.length) {
			alert("Die Anzahl der Teilnehmer muss gleich der Anzahl der Gewinne sein!");
			return;
		}

		var presents = _.map($scope.presents, x => x.name);

		$scope.shuffledPresents = _.shuffle(presents);
		$scope.closed = true;
	}
}]);
