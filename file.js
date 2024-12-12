// Function to update the calendar range dates
    $scope.updateCalendarRangeDates = function() {
        if ($scope.startDate) {
            let startDate = new Date($scope.startDate);
            // Update the min and max date range based on the start date
            $scope.minEndDate = startDate.toISOString().split('T')[0];
            let maxDate = new Date(startDate);
            maxDate.setDate(maxDate.getDate() + 60); // 60 days limit for the end date
            $scope.maxEndDate = maxDate.toISOString().split('T')[0];
        } else {
            $scope.minEndDate = null;
            $scope.maxEndDate = null;
        }

        if ($scope.endDate) {
            let endDate = new Date($scope.endDate);
            // Update the start date limits based on the selected end date
            $scope.maxStartDate = endDate.toISOString().split('T')[0];
        } else {
            $scope.maxStartDate = null;
        }
    };
});