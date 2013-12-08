/// <reference path="lib/angular.d.ts" />
/// <reference path="lib/underscore.d.ts" />
var app = angular.module("lottery", []);

app.controller("LotteryController", function ($scope) {
    $scope.participants = [
        { name: "Tester", active: true }
    ];

    $scope.addParticipant = function () {
        var newName = $scope.newParticipant;
        $scope.participants.push({ name: newName, active: true });
        $scope.newParticipant = "";
    };
});
//# sourceMappingURL=lottery.js.map
