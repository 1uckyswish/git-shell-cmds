$scope.updateCalendarRangeDates = function() {
    if ($scope.startDate) {
        // Calculate the max end date based on the start date
        let startDate = new Date($scope.startDate);
        $scope.minEndDate = startDate.toISOString().split('T')[0];
        
        let maxDate = new Date(startDate);
        maxDate.setDate(maxDate.getDate() + 60);
        $scope.maxEndDate = maxDate.toISOString().split('T')[0];
        
        // If an end date is already selected, validate it
        if ($scope.endDate) {
            let endDate = new Date($scope.endDate);
            if (endDate < startDate || endDate > maxDate) {
                $scope.endDate = ""; // Reset end date if out of range
            }
        }
    } else {
        $scope.minEndDate = null;
        $scope.maxEndDate = null;
    }
    
    if ($scope.endDate) {
        // Calculate the max start date based on the end date
        let endDate = new Date($scope.endDate);
        $scope.maxStartDate = endDate.toISOString().split('T')[0];
        
        // If a start date is already selected, validate it
        if ($scope.startDate) {
            let startDate = new Date($scope.startDate);
            if (startDate > endDate) {
                $scope.startDate = ""; // Reset start date if out of range
            }
        }
    } else {
        $scope.maxStartDate = null;
    }
};