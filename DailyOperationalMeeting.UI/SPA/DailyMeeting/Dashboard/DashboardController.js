app.controller("DashboardController", function ($scope, $http) {
    var UserData = sessionStorage.getItem("UserDataSession");
    if (UserData != null) {
        $scope.LoginUser = JSON.parse(sessionStorage.UserDataSession);
    }

    Clear();
    function Clear() {
        
		//GetAllDashboardGraphForDayWiseTaskCount(FromDate, ToDate);
		//GetAllDashboardGraphForPreviousDayWiseTaskCount(FromDate, ToDate);
    }
	function GetAllDashboardGraphForDayWiseTaskCount(FromDate, ToDate) {

		//$http({
		//	url: "/PosDashboard/GetAllDashboardGraphForSoIwoSi?FromDate=" + FromDate + "&ToDate=" + ToDate,
		//	method: "Get",
		//	headers: { 'Content-Type': "application/json" }
		//}).success(function (data) {
			$scope.DashboardGraphForSoIwoSiList = data;
			if ($scope.DashboardGraphForSoIwoSiList.length > 0) {
				$scope.monthsArray = $scope.DashboardGraphForSoIwoSiList.map(function (obj) {
					return obj.Months;
				});
				$scope.YearsArray = $scope.DashboardGraphForSoIwoSiList.map(function (obj) {
					return obj.Years;
				}).map(String);
				$scope.OngoingCountArray = $scope.DashboardGraphForSoIwoSiList.map(function (obj) {
					return obj.TotalSO;
				});
				$scope.PendingCountArray = $scope.DashboardGraphForSoIwoSiList.map(function (obj) {
					return obj.TotalIWO;
				});
				$scope.CompleteCountArray = $scope.DashboardGraphForSoIwoSiList.map(function (obj) {
					return obj.TotalSi;
				});

				$scope.ThisMonth = $scope.monthsArray.map((d, i) => `${d}-${$scope.YearsArray[i]}`);
				LineGraphForDayWiseTaskCount();
			} else {
				$scope.monthsArray = [];
				$scope.YearsArray = [];
				$scope.OngoingCountArray = [];
				$scope.PendingCountArray = [];
				$scope.CompleteCountArray = [];
				$scope.ThisMonth = [];
				LineGraphForDayWiseTaskCount();
			}


		/*})*/
	}
	LineGraphForDayWiseTaskCount();
	function LineGraphForDayWiseTaskCount() {
		var CountCanvas = document.getElementById("CountLineChartThisMonth");

		Chart.defaults.global.defaultFontFamily = "Lato";
		Chart.defaults.global.defaultFontSize = 18;

		var dataOngoing = {
			label: "Ongoing",
			data: $scope.OngoingCountArray = [2, 4, 5, 6, 7, 9, 2, 3, 4, 7, 1, 6, 4, 8, 3, 4, 9, 6, 8, 2, 4, 5, 6, 8, 4, 6, 4, 8, 2, 7, 9],
			lineTension: 0.3,
			fill: true,
			borderColor: '#00a65a'

		};

		var dataPending = {
			label: "Pending",
			data: $scope.PendingCountArray = [8, 6, 4, 7, 6, 1, 7, 6, 8, 2, 4, 7, 3, 1, 5, 4, 7, 2, 5, 3, 6, 9, 7, 4, 1, 2, 4, 9, 4, 3, 7],
			lineTension: 0.3,
			fill: true,
			borderColor: '#f39c12'

		};

		var dataComplete = {
			label: "Complete",
			data: $scope.CompleteCountArray = [4, 5, 7, 5, 7, 6, 1, 8, 7, 4, 5, 3, 7, 8, 9, 6, 4, 1, 5, 7, 6, 8, 3, 9, 4, 1, 3, 4, 7, 8,3],
			lineTension: 0.3,
			fill: true,
			borderColor: '#d9534f'
		};

		var CountData = {

			labels: $scope.ThisMonth = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
			datasets: [dataOngoing, dataPending, dataComplete]
		};

		var chartOptions = {
			legend: {
				display: true,
				position: 'top',
				labels: {
					//boxWidth: 80,
					fontColor: 'black'
				}
			},
			title: {
				display: true,
				text: 'This Day Wise Task Count',
				position: 'left'
			},
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true
					}
				}]
			}
		};

		if (window.MyChartLineThisCount != undefined) {
			window.MyChartLineThisCount.destroy();
		}
		window.MyChartLineThisCount = new Chart(CountCanvas, {
			type: 'line',
			data: CountData,
			options: chartOptions
		});
	}



	function GetAllDashboardGraphForPreviousDayWiseTaskCount(FromDate, ToDate) {

		//$http({
		//	url: "/PosDashboard/GetAllDashboardGraphForSoIwoSi?FromDate=" + FromDate + "&ToDate=" + ToDate,
		//	method: "Get",
		//	headers: { 'Content-Type': "application/json" }
		//}).success(function (data) {
			$scope.DashboardGraphForSoIwoSiList = data;
			if ($scope.DashboardGraphForSoIwoSiList.length > 0) {
				$scope.monthsArray = $scope.DashboardGraphForSoIwoSiList.map(function (obj) {
					return obj.Months;
				});
				$scope.YearsArray = $scope.DashboardGraphForSoIwoSiList.map(function (obj) {
					return obj.Years;
				}).map(String);
				$scope.OngoingCountArray = $scope.DashboardGraphForSoIwoSiList.map(function (obj) {
					return obj.TotalSO;
				});
				$scope.PendingCountArray = $scope.DashboardGraphForSoIwoSiList.map(function (obj) {
					return obj.TotalIWO;
				});
				$scope.CompleteCountArray = $scope.DashboardGraphForSoIwoSiList.map(function (obj) {
					return obj.TotalSi;
				});

				$scope.ThisMonth = $scope.monthsArray.map((d, i) => `${d}-${$scope.YearsArray[i]}`);
				LineGraphForDayWiseTaskCount();
			} else {
				$scope.monthsArray = [];
				$scope.YearsArray = [];
				$scope.OngoingCountArray = [];
				$scope.PendingCountArray = [];
				$scope.CompleteCountArray = [];
				$scope.ThisMonth = [];
				LineGraphForDayWiseTaskCount();
			}


		/*})*/
	}
	LineGraphForPreviousDayWiseTaskCount();
	function LineGraphForPreviousDayWiseTaskCount() {
		var CountCanvas = document.getElementById("CountLineChartPreviousMonth");

		Chart.defaults.global.defaultFontFamily = "Lato";
		Chart.defaults.global.defaultFontSize = 18;

		var dataOngoing = {
			label: "Ongoing",
			data: $scope.OngoingCountArray = [2, 4, 5, 6, 7, 9, 2, 3, 4, 7, 1, 6, 4, 8, 3, 4, 9, 6, 8, 2, 4, 5, 6, 8, 4, 6, 4, 8, 2, 7, 9],
			lineTension: 0.3,
			fill: true,
			borderColor: '#00a65a'

		};

		var dataPending = {
			label: "Pending",
			data: $scope.PendingCountArray = [8, 6, 4, 7, 6, 1, 7, 6, 8, 2, 4, 7, 3, 1, 5, 4, 7, 2, 5, 3, 6, 9, 7, 4, 1, 2, 4, 9, 4, 3, 7],
			lineTension: 0.3,
			fill: true,
			borderColor: '#f39c12'

		};

		var dataComplete = {
			label: "Complete",
			data: $scope.CompleteCountArray = [4, 5, 7, 5, 7, 6, 1, 8, 7, 4, 5, 3, 7, 8, 9, 6, 4, 1, 5, 7, 6, 8, 3, 9, 4, 1, 3, 4, 7, 8,3],
			lineTension: 0.3,
			fill: true,
			borderColor: '#d9534f'
		};

		var CountData = {

			labels: $scope.ThisMonth = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
			datasets: [dataOngoing, dataPending, dataComplete]
		};

		var chartOptions = {
			legend: {
				display: true,
				position: 'top',
				labels: {
					//boxWidth: 80,
					fontColor: 'black'
				}
			},
			title: {
				display: true,
				text: 'Previous Day Wise Task Count',
				position: 'left'
			},
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true
					}
				}]
			}
		};

		if (window.MyChartLinePreviousCount != undefined) {
			window.MyChartLinePreviousCount.destroy();
		}
		window.MyChartLinePreviousCount = new Chart(CountCanvas, {
			type: 'line',
			data: CountData,
			options: chartOptions
		});
	}

});
