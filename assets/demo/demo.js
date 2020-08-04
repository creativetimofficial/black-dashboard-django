
type = ['','info','success','warning','danger'];

demo = {
    initPickColor: function(){
        $('.pick-class-label').click(function(){
            var new_class = $(this).attr('new-class');
            var old_class = $('#display-buttons').attr('data-class');
            var display_div = $('#display-buttons');
            if(display_div.length) {
            var display_buttons = display_div.find('.btn');
            display_buttons.removeClass(old_class);
            display_buttons.addClass(new_class);
            display_div.attr('data-class', new_class);
            }
        });
    },

    checkFullPageBackgroundImage: function(){
        $page = $('.full-page');
        image_src = $page.data('image');

        if(image_src !== undefined){
            image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>';
            $page.append(image_container);
        }
    },

    initFullCalendar: function(){
      document.addEventListener('DOMContentLoaded', function() {
      var calendarEl = document.getElementById('fullCalendar');
      $calendar = $('#fullCalendar');

      var today = new Date();
      var y = today.getFullYear();
      var m = today.getMonth();
      var d = today.getDate();

      var calendar = new FullCalendar.Calendar(calendarEl, {
        plugins: [ 'interaction', 'dayGrid', 'timeGridPlugin' ],
        editable: true,
        header: {
          left: 'title',
          center: 'dayGridMonth,dayGridWeek,dayGridDay',
          right: 'prev,next,today'
        },

        selectable: true,
        droppable: true,
        rendering: 'background',


        defaultDate: today,
        selectable: true,
        selectHelper: true,

        select: function(info) {
          // on select we show the Sweet Alert modal with an input
          Swal.fire({
            title: 'Create an Event',
            html: '<div class="form-group">' +
              '<input class="form-control text-default" placeholder="Event Title" id="input-field">' +
              '</div>',
            showCancelButton: true,
            confirmButtonClass: 'btn btn-success',
            cancelButtonClass: 'btn btn-danger',
            buttonsStyling: false
          }).then(function(result) {

            var eventData;
            event_title = $('#input-field').val();

            if (event_title) {
              eventData = {
                title: event_title,
                start: info.startStr,
                end: info.endStr
              };
              calendar.addEvent(eventData);
            }
          });
        },
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        events: [
          {
            title: 'All Day Event',
            start: new Date(y, m, 1),
            className: 'event-default'
          },
          {
            title: 'Meeting',
            start: new Date(y, m, d-1, 10, 30),
            allDay: false,
            className: 'event-green'
          },
          {
            title: 'Lunch',
            start: new Date(y, m, d+7, 12, 0),
            end: new Date(y, m, d+7, 14, 0),
            allDay: false,
            className: 'event-red'
          },
          {
            title: 'BD-pro Launch',
            start: new Date(y, m, d-2, 12, 0),
            allDay: true,
            className: 'event-azure'
          },
          {
            title: 'Birthday Party',
            start: new Date(y, m, d+1, 19, 0),
            end: new Date(y, m, d+1, 22, 30),
            allDay: false,
                      className: 'event-azure'
          },
          {
            title: 'Click for Creative Tim',
            start: new Date(y, m, 21),
            end: new Date(y, m, 22),
            url: 'http://www.creative-tim.com/',
            className: 'event-orange'
          },
          {
            title: 'Click for Google',
            start: new Date(y, m, 21),
            end: new Date(y, m, 22),
            url: 'http://www.creative-tim.com/',
            className: 'event-orange'
          }
        ]
      });

        calendar.render();
      });

    },

    initDocChart: function(){
      chartColor = "#FFFFFF";

      // General configuration for the charts with Line gradientStroke
      gradientChartOptionsConfiguration =  {
        maintainAspectRatio: false,
        legend: {
              display: false
         },

         tooltips: {
           backgroundColor: '#f5f5f5',
           titleFontColor: '#333',
           bodyFontColor: '#666',
           bodySpacing: 4,
           xPadding: 12,
           mode: "nearest",
           intersect: 0,
           position: "nearest"
         },
         responsive: true,
         scales:{
           yAxes: [{
             barPercentage: 1.6,
                 gridLines: {
                   drawBorder: false,
                     color: 'rgba(29,140,248,0.0)',
                     zeroLineColor: "transparent",
                 },
                 ticks: {
                   suggestedMin:50,
                   suggestedMax: 110,
                     padding: 20,
                     fontColor: "#9a9a9a"
                 }
               }],

           xAxes: [{
             barPercentage: 1.6,
                 gridLines: {
                   drawBorder: false,
                     color: 'rgba(220,53,69,0.1)',
                     zeroLineColor: "transparent",
                 },
                 ticks: {
                     padding: 20,
                     fontColor: "#9a9a9a"
                 }
               }]
           }
      };

      var ctx = document.getElementById("lineChartExample").getContext("2d");

      var gradientStroke = ctx.createLinearGradient(0,230,0,50);

      gradientStroke.addColorStop(1, 'rgba(72,72,176,0.2)');
      gradientStroke.addColorStop(0.2, 'rgba(72,72,176,0.0)');
      gradientStroke.addColorStop(0, 'rgba(119,52,169,0)'); //purple colors

      var data = {
        labels: ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'],
        datasets: [{
          label: "Data",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: '#d048b6',
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: '#d048b6',
          pointBorderColor:'rgba(255,255,255,0)',
          pointHoverBackgroundColor: '#d048b6',
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [ 60,110,70,100, 75, 90, 80, 100, 70, 80, 120, 80],
        }]
      };

      var myChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: gradientChartOptionsConfiguration
      });
    },

    initChartPageCharts: function(){

      gradientChartOptionsConfigurationPurple =  {
        maintainAspectRatio: false,
        legend: {
              display: false
         },

         tooltips: {
           backgroundColor: '#f5f5f5',
           titleFontColor: '#333',
           bodyFontColor: '#666',
           bodySpacing: 4,
           xPadding: 12,
           mode: "nearest",
           intersect: 0,
           position: "nearest"
         },
         responsive: true,
        scales:{
          yAxes: [{
            barPercentage: 1.6,
                gridLines: {
                  drawBorder: false,
                    color: 'rgba(186,84,245,0.1)',
                    zeroLineColor: "transparent",
                },
                ticks: {
                    suggestedMin: 60,
                    suggestedMax: 125,
                    padding: 20,
                    fontColor: "#9e9e9e"
                }
              }],

          xAxes: [{
            barPercentage: 1.6,
                gridLines: {
                  drawBorder: false,
                    color: 'rgba(186,84,245,0.1)',
                    zeroLineColor: "transparent",
                },
                ticks: {
                    padding: 20,
                    fontColor: "#9e9e9e"
                }
              }]
          }
      };


      gradientChartOptionsConfigurationBlue =  {
       maintainAspectRatio: false,
        legend: {
              display: false
         },

         tooltips: {
           backgroundColor: '#f5f5f5',
           titleFontColor: '#333',
           bodyFontColor: '#666',
           bodySpacing: 4,
           xPadding: 12,
           mode: "nearest",
           intersect: 0,
           position: "nearest"
         },
         responsive: true,
        scales:{
          yAxes: [{
            barPercentage: 1.6,
                gridLines: {
                  drawBorder: false,
                    color: 'rgba(29,140,248,0.0)',
                    zeroLineColor: "transparent",
                },
                ticks: {
                  suggestedMin: 60,
                  suggestedMax: 125,
                    padding: 20,
                    fontColor: "#9e9e9e"
                }
              }],

          xAxes: [{
            barPercentage: 1.6,
                gridLines: {
                  drawBorder: false,
                    color: 'rgba(29,140,248,0.1)',
                    zeroLineColor: "transparent",
                },
                ticks: {
                    padding: 20,
                    fontColor: "#9e9e9e"
                }
              }]
          }
      };

      gradientBarChartConfiguration =  {
        maintainAspectRatio: false,
        legend: {
              display: false
         },

         tooltips: {
           backgroundColor: '#f5f5f5',
           titleFontColor: '#333',
           bodyFontColor: '#666',
           bodySpacing: 4,
           xPadding: 12,
           mode: "nearest",
           intersect: 0,
           position: "nearest"
         },
         responsive: true,
        scales:{
          yAxes: [{
                gridLines: {
                  drawBorder: false,
                    color: 'rgba(253,93,147,0.1)',
                    zeroLineColor: "transparent",
                },
                ticks: {
                  suggestedMin: 60,
                  suggestedMax: 125,
                    padding: 20,
                    fontColor: "#9e9e9e"
                }
              }],

          xAxes: [{
                gridLines: {
                  drawBorder: false,
                    color: 'rgba(253,93,147,0.1)',
                    zeroLineColor: "transparent",
                },
                ticks: {
                    padding: 20,
                    fontColor: "#9e9e9e"
                }
              }]
          }
      };

      gradientBarChartConfigurationWithGrid =  {
        maintainAspectRatio: false,
        legend: {
              display: false
         },

         tooltips: {
           backgroundColor: '#f5f5f5',
           titleFontColor: '#333',
           bodyFontColor: '#666',
           bodySpacing: 4,
           xPadding: 12,
           mode: "nearest",
           intersect: 0,
           position: "nearest"
         },
         responsive: true,
        scales:{
          yAxes: [{
                gridLines: {
                  drawBorder: false,
                    color: 'rgba(253,93,147,0.1)',
                    zeroLineColor: "transparent",
                },
                ticks: {
                  suggestedMin: 60,
                  suggestedMax: 125,
                    padding: 20,
                    fontColor: "#9e9e9e"
                }
              }],

          xAxes: [{
                gridLines: {
                  drawBorder: false,
                    color: 'rgba(253,93,147,0.1)',
                    zeroLineColor: "transparent",
                },
                ticks: {
                    padding: 20,
                    fontColor: "#9e9e9e"
                }
              }]
          }
      };



      var ctx = document.getElementById("chartSimpleWithGradient").getContext("2d");

      var gradientStroke = ctx.createLinearGradient(0,230,0,50);

      gradientStroke.addColorStop(1, 'rgba(72,72,176,0.4)');
      gradientStroke.addColorStop(0.8, 'rgba(72,72,176,0.2)');
      gradientStroke.addColorStop(0, 'rgba(119,52,169,0)'); //purple colors



      var myChart = new Chart(ctx, {
        type: 'line',
        responsive: true,
        data: {
          labels: ['JUL','AUG','SEP','OCT','NOV','DEC'],
          datasets: [{
            label: "Data",
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: '#ba54f5',
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: '#be55ed',
            pointBorderColor:'rgba(255,255,255,0)',
            pointHoverBackgroundColor: '#be55ed',
            //pointHoverBorderColor:'rgba(35,46,55,1)',
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [ 80, 100, 70, 80, 120, 80],
          }]
        },
        options: gradientChartOptionsConfigurationPurple
      });

      var ctx = document.getElementById("chartWithNumbersAndGrid").getContext("2d");

      var gradientStroke = ctx.createLinearGradient(0,230,0,50);

      gradientStroke.addColorStop(1, 'rgba(0,135,191,0.2)');
      gradientStroke.addColorStop(0.8, 'rgba(0,135,191,0.1)');
      gradientStroke.addColorStop(0, 'rgba(0,84,119,0)'); //blue colors


      var myChart = new Chart(ctx, {
        type: 'line',
        responsive: true,
        data: {
          labels: ['JUL','AUG','SEP','OCT','NOV','DEC'],
          datasets: [{
            label: "Data",
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: '#2380f7',
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: '#2380f7',
            pointBorderColor:'rgba(255,255,255,0)',
            pointHoverBackgroundColor: '#2380f7',
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            pointRadius: 4,
            data: [ 80, 100, 70, 80, 120, 80],
          }]
        },
        options: gradientChartOptionsConfigurationBlue
      });

      var ctx = document.getElementById("BarChart").getContext("2d");

      var gradientStroke = ctx.createLinearGradient(0,230,0,50);

      gradientStroke.addColorStop(1, 'rgba(253,93,147,0.8)');
      gradientStroke.addColorStop(0, 'rgba(253,93,147,0)'); //blue colors


      var myChart = new Chart(ctx, {
        type: 'bar',
        responsive: true,
        data: {
          labels: ['JUL','AUG','SEP','OCT','NOV','DEC'],
          datasets: [{
            label: "Data",
            fill: true,
            backgroundColor: gradientStroke,
            hoverBackgroundColor: gradientStroke,
            borderColor: '#ff5991',
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            data: [ 80, 100, 70, 80, 120, 80],
          }]
        },
        options: gradientBarChartConfigurationWithGrid
      });


      var ctx = document.getElementById("MultipleBarsChart").getContext("2d");


      var myChart = new Chart(ctx, {
        type: 'bar',
        responsive: true,
        data: {
          labels: ['JUL','AUG','SEP','OCT','NOV','DEC'],
          datasets: [{
            label: "Data",
            fill: true,
            backgroundColor: '#ff8a76',
            hoverBackgroundColor: ' #ff8a76',
            borderColor: '#ff8a76',
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            data: [ 80, 100, 70, 80, 120, 80],
          },
          {
            label: "Data",
            fill: true,
            backgroundColor: '#2782f0',
            hoverBackgroundColor: ' #2782f0',
            borderColor: '#2782f0',
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            data: [ 60, 110, 90, 70, 90, 100],
          }]
        },
        options: gradientBarChartConfiguration
      });


      var ctx = document.getElementById("PieChart").getContext("2d");


      var myChart = new Chart(ctx, {
          type: 'pie',
          data: {
              labels: [1,2],
              datasets: [{
                  label: "Emails",
                  pointRadius: 0,
                  pointHoverRadius: 0,
                  backgroundColor:['#00c09d','#e2e2e2'],
                  borderWidth: 0,
                  data: [60,40]
              }]
          },
          options: {
            cutoutPercentage: 70,
            legend: {

                  display: false
             },

             tooltips: {
               backgroundColor: '#f5f5f5',
               titleFontColor: '#333',
               bodyFontColor: '#666',
               bodySpacing: 4,
               xPadding: 12,
               mode: "nearest",
               intersect: 0,
               position: "nearest"
             },

            scales:{
                  yAxes: [{
                      display: 0,
                      ticks: {
                          display: false
                      },
                      gridLines: {
                        drawBorder: false,
                        zeroLineColor: "transparent",
                        color:'rgba(255,255,255,0.05)'
                      }

                  }],

                  xAxes: [{
                    display: 0,
                    barPercentage: 1.6,
                      gridLines: {
                        drawBorder: false,
                          color: 'rgba(255,255,255,0.1)',
                          zeroLineColor: "transparent"
                      },
                      ticks: {
                          display: false,
                      }
                  }]
              },
          }
      });

      var ctx = document.getElementById("PieChartGradient").getContext("2d");


      var myChart = new Chart(ctx, {
          type: 'pie',
          data: {
              labels: [1,2,3],
              datasets: [{
                  label: "Emails",
                  pointRadius: 0,
                  pointHoverRadius: 0,
                  backgroundColor:['#ff8779','#2a84e9','#e2e2e2'],
                  borderWidth: 0,
                  data: [60,40,20]
              }]
          },
          options: {
            cutoutPercentage: 70,
            legend: {

                  display: false
             },

             tooltips: {
               backgroundColor: '#f5f5f5',
               titleFontColor: '#333',
               bodyFontColor: '#666',
               bodySpacing: 4,
               xPadding: 12,
               mode: "nearest",
               intersect: 0,
               position: "nearest"
             },

            scales:{
                  yAxes: [{
                      display: 0,
                      ticks: {
                          display: false
                      },
                      gridLines: {
                        drawBorder: false,
                        zeroLineColor: "transparent",
                        color:'rgba(255,255,255,0.05)'
                      }

                  }],

                  xAxes: [{
                    display: 0,
                    barPercentage: 1.6,
                      gridLines: {
                        drawBorder: false,
                          color: 'rgba(255,255,255,0.1)',
                          zeroLineColor: "transparent"
                      },
                      ticks: {
                          display: false,
                      }
                  }]
              },
          }
      });
    },

    initDashboardPageCharts: function(){

      gradientChartOptionsConfigurationWithTooltipBlue =  {
        maintainAspectRatio: false,
        legend: {
              display: false
         },

         tooltips: {
           backgroundColor: '#f5f5f5',
           titleFontColor: '#333',
           bodyFontColor: '#666',
           bodySpacing: 4,
           xPadding: 12,
           mode: "nearest",
           intersect: 0,
           position: "nearest"
         },
         responsive: true,
         scales:{
           yAxes: [{
             barPercentage: 1.6,
                 gridLines: {
                   drawBorder: false,
                     color: 'rgba(29,140,248,0.0)',
                     zeroLineColor: "transparent",
                 },
                 ticks: {
                   suggestedMin: 60,
                   suggestedMax: 125,
                     padding: 20,
                     fontColor: "#2380f7"
                 }
               }],

           xAxes: [{
             barPercentage: 1.6,
                 gridLines: {
                   drawBorder: false,
                     color: 'rgba(29,140,248,0.1)',
                     zeroLineColor: "transparent",
                 },
                 ticks: {
                     padding: 20,
                     fontColor: "#2380f7"
                 }
               }]
           }
      };

      gradientChartOptionsConfigurationWithTooltipPurple =  {
        maintainAspectRatio: false,
        legend: {
              display: false
         },

         tooltips: {
           backgroundColor: '#f5f5f5',
           titleFontColor: '#333',
           bodyFontColor: '#666',
           bodySpacing: 4,
           xPadding: 12,
           mode: "nearest",
           intersect: 0,
           position: "nearest"
         },
         responsive: true,
         scales:{
           yAxes: [{
             barPercentage: 1.6,
                 gridLines: {
                   drawBorder: false,
                     color: 'rgba(29,140,248,0.0)',
                     zeroLineColor: "transparent",
                 },
                 ticks: {
                   suggestedMin: 60,
                   suggestedMax: 125,
                     padding: 20,
                     fontColor: "#9a9a9a"
                 }
               }],

           xAxes: [{
             barPercentage: 1.6,
                 gridLines: {
                   drawBorder: false,
                     color: 'rgba(225,78,202,0.1)',
                     zeroLineColor: "transparent",
                 },
                 ticks: {
                     padding: 20,
                     fontColor: "#9a9a9a"
                 }
               }]
           }
      };

      gradientChartOptionsConfigurationWithTooltipOrange =  {
        maintainAspectRatio: false,
        legend: {
              display: false
         },

         tooltips: {
           backgroundColor: '#f5f5f5',
           titleFontColor: '#333',
           bodyFontColor: '#666',
           bodySpacing: 4,
           xPadding: 12,
           mode: "nearest",
           intersect: 0,
           position: "nearest"
         },
         responsive: true,
         scales:{
           yAxes: [{
             barPercentage: 1.6,
                 gridLines: {
                   drawBorder: false,
                     color: 'rgba(29,140,248,0.0)',
                     zeroLineColor: "transparent",
                 },
                 ticks: {
                   suggestedMin:50,
                   suggestedMax: 110,
                     padding: 20,
                     fontColor: "#ff8a76"
                 }
               }],

           xAxes: [{
             barPercentage: 1.6,
                 gridLines: {
                   drawBorder: false,
                     color: 'rgba(220,53,69,0.1)',
                     zeroLineColor: "transparent",
                 },
                 ticks: {
                     padding: 20,
                     fontColor: "#ff8a76"
                 }
               }]
           }
      };

      gradientChartOptionsConfigurationWithTooltipGreen =  {
        maintainAspectRatio: false,
        legend: {
              display: false
         },

         tooltips: {
           backgroundColor: '#f5f5f5',
           titleFontColor: '#333',
           bodyFontColor: '#666',
           bodySpacing: 4,
           xPadding: 12,
           mode: "nearest",
           intersect: 0,
           position: "nearest"
         },
         responsive: true,
         scales:{
           yAxes: [{
             barPercentage: 1.6,
                 gridLines: {
                   drawBorder: false,
                     color: 'rgba(29,140,248,0.0)',
                     zeroLineColor: "transparent",
                 },
                 ticks: {
                   suggestedMin: 50,
                   suggestedMax: 125,
                     padding: 20,
                     fontColor: "#9e9e9e"
                 }
               }],

           xAxes: [{
             barPercentage: 1.6,
                 gridLines: {
                   drawBorder: false,
                     color: 'rgba(0,242,195,0.1)',
                     zeroLineColor: "transparent",
                 },
                 ticks: {
                     padding: 20,
                     fontColor: "#9e9e9e"
                 }
               }]
           }
      };


      gradientBarChartConfiguration =  {
        maintainAspectRatio: false,
        legend: {
              display: false
         },

         tooltips: {
           backgroundColor: '#f5f5f5',
           titleFontColor: '#333',
           bodyFontColor: '#666',
           bodySpacing: 4,
           xPadding: 12,
           mode: "nearest",
           intersect: 0,
           position: "nearest"
         },
         responsive: true,
         scales:{
           yAxes: [{

                 gridLines: {
                   drawBorder: false,
                     color: 'rgba(29,140,248,0.1)',
                     zeroLineColor: "transparent",
                 },
                 ticks: {
                     suggestedMin: 60,
                     suggestedMax: 120,
                     padding: 20,
                     fontColor: "#9e9e9e"
                 }
               }],

           xAxes: [{

                 gridLines: {
                   drawBorder: false,
                     color: 'rgba(29,140,248,0.1)',
                     zeroLineColor: "transparent",
                 },
                 ticks: {
                     padding: 20,
                     fontColor: "#9e9e9e"
                 }
               }]
           }
      };

      var ctx = document.getElementById("chartLinePurple").getContext("2d");

      var gradientStroke = ctx.createLinearGradient(0,230,0,50);

      gradientStroke.addColorStop(1, 'rgba(72,72,176,0.2)');
      gradientStroke.addColorStop(0.2, 'rgba(72,72,176,0.0)');
      gradientStroke.addColorStop(0, 'rgba(119,52,169,0)'); //purple colors

      var data = {
        labels: ['JUL','AUG','SEP','OCT','NOV','DEC'],
        datasets: [{
          label: "Data",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: '#d048b6',
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: '#d048b6',
          pointBorderColor:'rgba(255,255,255,0)',
          pointHoverBackgroundColor: '#d048b6',
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [ 80, 100, 70, 80, 120, 80],
        }]
      };

      var myChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: gradientChartOptionsConfigurationWithTooltipPurple
      });


			var ctxGreen = document.getElementById("chartLineGreen").getContext("2d");

			var gradientStroke = ctx.createLinearGradient(0,230,0,50);

		  gradientStroke.addColorStop(1, 'rgba(66,134,121,0.15)');
      	gradientStroke.addColorStop(0.4, 'rgba(66,134,121,0.0)'); //green colors
			gradientStroke.addColorStop(0, 'rgba(66,134,121,0)'); //green colors

			var data = {
			  labels: ['JUL','AUG','SEP','OCT','NOV'],
			  datasets: [{
			    label: "My First dataset",
			    fill: true,
			    backgroundColor: gradientStroke,
			    borderColor: '#00d6b4',
					borderWidth: 2,
			    borderDash: [],
			    borderDashOffset: 0.0,
          pointBackgroundColor: '#00d6b4',
          pointBorderColor:'rgba(255,255,255,0)',
          pointHoverBackgroundColor: '#00d6b4',
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
					data: [ 90, 27, 60, 12, 80],
			  }]
			};

			var myChart = new Chart(ctxGreen, {
			  type: 'line',
			  data: data,
			  options: gradientChartOptionsConfigurationWithTooltipGreen

			});



var chart_labels = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
    var chart_data = [ 100, 70, 90, 70, 85, 60, 75, 60, 90, 80,110, 100];


var ctx = document.getElementById("chartBig1").getContext('2d');

var gradientStroke = ctx.createLinearGradient(0,230,0,50);

gradientStroke.addColorStop(1, 'rgba(72,72,176,0.1)');
gradientStroke.addColorStop(0.4, 'rgba(72,72,176,0.0)');
gradientStroke.addColorStop(0, 'rgba(119,52,169,0)'); //purple colors
var config = {
  type: 'line',
  data: {
    labels: chart_labels,
    datasets: [{
      label: "My First dataset",
      fill: true,
      backgroundColor: gradientStroke,
      borderColor: '#d346b1',
      borderWidth: 2,
      borderDash: [],
      borderDashOffset: 0.0,
      pointBackgroundColor: '#d346b1',
      pointBorderColor:'rgba(255,255,255,0)',
      pointHoverBackgroundColor: '#d346b1',
      pointBorderWidth: 20,
      pointHoverRadius: 4,
      pointHoverBorderWidth: 15,
      pointRadius: 4,
      data: chart_data,
    }]
  },
  options: gradientChartOptionsConfigurationWithTooltipPurple
};
      var myChartData = new Chart(ctx, config);
      $("#0").click(function() {
        var data = myChartData.config.data;
        data.datasets[0].data = chart_data;
        data.labels = chart_labels;
        myChartData.update();
      });
      $("#1").click(function() {
       var chart_data = [ 80, 120, 105, 110, 95, 105, 90, 100, 80, 95,70, 120];
        var data = myChartData.config.data;
        data.datasets[0].data = chart_data;
        data.labels = chart_labels;
        myChartData.update();
      });

      $("#2").click(function() {
       var chart_data = [ 60, 80, 65, 130, 80, 105, 90, 130, 70, 115,60, 130];
        var data = myChartData.config.data;
        data.datasets[0].data = chart_data;
        data.labels = chart_labels;
        myChartData.update();
      });


      var ctx = document.getElementById("CountryChart").getContext("2d");

      var gradientStroke = ctx.createLinearGradient(0,230,0,50);

      gradientStroke.addColorStop(1, 'rgba(29,140,248,0.2)');
      gradientStroke.addColorStop(0.4, 'rgba(29,140,248,0.0)');
      gradientStroke.addColorStop(0, 'rgba(29,140,248,0)'); //blue colors


      var myChart = new Chart(ctx, {
        type: 'bar',
        responsive: true,
        legend: {
              display: false
        },
        data: {
          labels: ['USA','GER','AUS','UK','RO','BR'],
          datasets: [{
            label: "Countries",
            fill: true,
            backgroundColor: gradientStroke,
            hoverBackgroundColor: gradientStroke,
            borderColor: '#1f8ef1',
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            data: [ 53, 20, 10, 80, 100, 45],
          }]
        },
          options: gradientBarChartConfiguration
      });

    },


    showSwal: function(type) {
        if(type == 'basic') {
          Swal.fire({
            title: 'Here is a message!',
            customClass: {
              confirmButton: 'btn btn-info'
            },
            buttonsStyling: false

          })

    	}else if(type == 'title-and-text') {

        Swal.fire({
          title: 'The Internet?',
          text: 'That thing is still around?',
          type: 'question',
          customClass: {
            confirmButton: 'btn btn-primary'
          },
          buttonsStyling: false,
        })

    	}else if(type == 'success-message'){

        Swal.fire({
          position: 'center',
          type: 'success',
          title: 'Good job!',
          showConfirmButton: false,
          timer: 1500
        })

    	}else if(type == 'warning-message-and-confirmation'){
        const swalWithBootstrapButtons = Swal.mixin({
          customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
          },
          buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          type: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, delete it!',
          cancelButtonText: 'No, cancel!',
          reverseButtons: true
        }).then((result) => {
          if (result.value) {
            swalWithBootstrapButtons.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire(
              'Cancelled',
              'Your imaginary file is safe :)',
              'error'
            )
          }
        })
    	}else if(type == 'warning-message-and-cancel'){
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          type: 'warning',
          showCancelButton: true,
          customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
          },
          buttonsStyling: false,
          confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
          if (result.value) {
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          }
          })
    	}else if(type == 'custom-html'){
        Swal.fire({
          title: '<strong>HTML <u>example</u></strong>',
          type: 'info',
          html:
            'You can use <b>bold text</b>, ' +
            '<a href="//sweetalert2.github.io">links</a> ' +
            'and other HTML tags',
          showCloseButton: true,
          showCancelButton: true,
          customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
          },
          buttonsStyling: false,
          focusConfirm: false,
          confirmButtonText:
            '<i class="fa fa-thumbs-up"></i> Great!',
          confirmButtonAriaLabel: 'Thumbs up, great!',
          cancelButtonText:
            '<i class="fa fa-thumbs-down"></i>',
          cancelButtonAriaLabel: 'Thumbs down'
        })
    	}else if(type == 'auto-close'){
        let timerInterval
        Swal.fire({
          title: 'Auto close alert!',
          html: 'I will close in <strong></strong> milliseconds.',
          timer: 2000,
          onBeforeOpen: () => {
            Swal.showLoading()
            timerInterval = setInterval(() => {
              Swal.getContent().querySelector('strong')
                .textContent = Swal.getTimerLeft()
            }, 100)
          },
          onClose: () => {
            clearInterval(timerInterval)
          }
        }).then((result) => {
          if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.timer
          ) {
            console.log('I was closed by the timer')
          }
        })
    	} else if(type == 'input-field'){
        Swal.fire({
        title: 'Submit your Github username',
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Look up',
        customClass: {
          confirmButton: 'btn btn-primary',
          cancelButton: 'btn btn-default'
        },
        buttonsStyling: false,
        showLoaderOnConfirm: true,
        preConfirm: (login) => {
          return fetch(`//api.github.com/users/${login}`)
            .then(response => {
              if (!response.ok) {
                throw new Error(response.statusText)
              }
              return response.json()
            })
            .catch(error => {
              Swal.showValidationMessage(
                `Request failed: ${error}`
              )
            })
        },
        allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
        if (result.value) {
          Swal.fire({
            title: `${result.value.login}'s avatar`,
            imageUrl: result.value.avatar_url
          })
        }
      })}
        },

    initNowUiWizard: function(){
        // Code for the Validator
        var $validator = $('.card-wizard form').validate({
    		  rules: {
    		    firstname: {
    		      required: true,
    		      minlength: 3
    		    },
    		    lastname: {
    		      required: true,
    		      minlength: 3
    		    },
    		    email: {
    		      required: true,
    		      minlength: 3,
    		    },
            number: {
              required: true,
              minlength: 3,
            }

            },
            highlight: function(element) {
                $(element).closest('.input-group').removeClass('has-success').addClass('has-danger');
            },
            success: function(element) {
                $(element).closest('.input-group').removeClass('has-danger').addClass('has-success');
            }
    	});

        // Wizard Initialization
        $('.card-wizard').bootstrapWizard({
            'tabClass': 'nav nav-pills',
            'nextSelector': '.btn-next',
            'previousSelector': '.btn-previous',

            onNext: function(tab, navigation, index) {
            	var $valid = $('.card-wizard form').valid();
            	if(!$valid) {
            		$validator.focusInvalid();
            		return false;
            	}
            },

            onInit : function(tab, navigation, index){
              //check number of tabs and fill the entire row
              var $total = navigation.find('li').length;
              $width = 100/$total;

              navigation.find('li').css('width',$width + '%');

           },

            onTabClick : function(tab, navigation, index){
                var $valid = $('.card-wizard form').valid();

                if(!$valid){
                    return false;
                } else{
                    return true;
                }
            },

            onTabShow: function(tab, navigation, index) {
                var $total = navigation.find('li').length;
                var $current = index+1;

                var $wizard = navigation.closest('.card-wizard');

                // If it's the last tab then hide the last button and show the finish instead
                if($current >= $total) {
                    $($wizard).find('.btn-next').hide();
                    $($wizard).find('.btn-finish').show();
                } else {
                    $($wizard).find('.btn-next').show();
                    $($wizard).find('.btn-finish').hide();
                }

                //update progress
                var move_distance = 100 / $total;
                move_distance = move_distance * (index) + move_distance / 2;

                $wizard.find($('.progress-bar')).css({width: move_distance + '%'});
                //e.relatedTarget // previous tab

                $wizard.find($('.card-wizard .nav-pills li .nav-link.active')).addClass('checked');

            }
      	});


        // Prepare the preview for profile picture
        $("#wizard-picture").change(function(){
            readURL(this);
        });

        $('[data-toggle="wizard-radio"]').click(function(){
            wizard = $(this).closest('.card-wizard');
            wizard.find('[data-toggle="wizard-radio"]').removeClass('active');
            $(this).addClass('active');
            $(wizard).find('[type="radio"]').removeAttr('checked');
            $(this).find('[type="radio"]').attr('checked','true');
        });

        $('[data-toggle="wizard-checkbox"]').click(function(){
            if( $(this).hasClass('active')){
                $(this).removeClass('active');
                $(this).find('[type="checkbox"]').removeAttr('checked');
            } else {
                $(this).addClass('active');
                $(this).find('[type="checkbox"]').attr('checked','true');
            }
        });

        $('.set-full-height').css('height', 'auto');

         //Function to show image before upload

        function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('#wizardPicturePreview').attr('src', e.target.result).fadeIn('slow');
                }
                reader.readAsDataURL(input.files[0]);
            }
        }

    },

    initSliders: function(){
        // Sliders for demo purpose in refine cards section
        var slider = document.getElementById('sliderRegular');

        noUiSlider.create(slider, {
            start: 40,
            connect: [true,false],
            range: {
                min: 0,
                max: 100
            }
        });

        var slider2 = document.getElementById('sliderDouble');

        noUiSlider.create(slider2, {
            start: [ 20, 60 ],
            connect: true,
            range: {
                min:  0,
                max:  100
            }
        });
    },

    initVectorMap: function(){
         var mapData = {
                "AU": 760,
                "BR": 550,
                "CA": 120,
                "DE": 1300,
                "FR": 540,
                "GB": 690,
                "GE": 200,
                "IN": 200,
                "RO": 600,
                "RU": 300,
                "US": 2920,
            };

            $('#worldMap').vectorMap({
                map: 'world_mill_en',
                backgroundColor: "transparent",
                zoomOnScroll: false,
                regionStyle: {
                    initial: {
                        fill: '#e4e4e4',
                        "fill-opacity": 0.9,
                        stroke: 'none',
                        "stroke-width": 0,
                        "stroke-opacity": 0
                    }
                },

                series: {
                    regions: [{
                        values: mapData,
                        scale: ["#AAAAAA","#444444"],
                        normalizeFunction: 'polynomial'
                    }]
                },
            });
	},


    initGoogleMaps: function(){
        var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
        var mapOptions = {
          zoom: 13,
          center: myLatlng,
          scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
          styles: [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8ec3b9"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1a3646"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#4b6878"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#64779e"
      }
    ]
  },
  {
    "featureType": "administrative.province",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#4b6878"
      }
    ]
  },
  {
    "featureType": "landscape.man_made",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#334e87"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#283d6a"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#6f9ba5"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3C7680"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#304a7d"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#98a5be"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2c6675"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#9d2a80"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#9d2a80"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#b0d5ce"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#98a5be"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#283d6a"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3a4762"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#0e1626"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#4e6d70"
      }
    ]
  }
]
        };

        var map = new google.maps.Map(document.getElementById("map"), mapOptions);

        var marker = new google.maps.Marker({
            position: myLatlng,
            title:"Hello World!"
        });

        // To add the marker to the map, call setMap();
        marker.setMap(map);
    },

    initSmallGoogleMaps: function(){

        // Regular Map
        var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
        var mapOptions = {
            zoom: 8,
            center: myLatlng,
            scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
        }

        var map = new google.maps.Map(document.getElementById("regularMap"), mapOptions);

        var marker = new google.maps.Marker({
            position: myLatlng,
            title:"Regular Map!"
        });

        marker.setMap(map);


        // Custom Skin & Settings Map
        var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
        var mapOptions = {
            zoom: 13,
            center: myLatlng,
            scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
            disableDefaultUI: true, // a way to quickly hide all controls
            zoomControl: true,
            styles: [{"featureType":"water","stylers":[{"saturation":43},{"lightness":-11},{"hue":"#0088ff"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"},{"saturation":-100},{"lightness":99}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#808080"},{"lightness":54}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ece2d9"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#ccdca1"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#767676"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#b8cb93"}]},{"featureType":"poi.park","stylers":[{"visibility":"on"}]},{"featureType":"poi.sports_complex","stylers":[{"visibility":"on"}]},{"featureType":"poi.medical","stylers":[{"visibility":"on"}]},{"featureType":"poi.business","stylers":[{"visibility":"simplified"}]}]

        }

        var map = new google.maps.Map(document.getElementById("customSkinMap"), mapOptions);

        var marker = new google.maps.Marker({
            position: myLatlng,
            title:"Custom Skin & Settings Map!"
        });

        marker.setMap(map);



        // Satellite Map
        var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
        var mapOptions = {
            zoom: 3,
            scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
            center: myLatlng,
             mapTypeId: google.maps.MapTypeId.SATELLITE,

        }

        var map = new google.maps.Map(document.getElementById("satelliteMap"), mapOptions);

        var marker = new google.maps.Marker({
            position: myLatlng,
            title:"Satellite Map!"
        });

        marker.setMap(map);


    },

	showNotification: function(from, align){
    	color = Math.floor((Math.random() * 4) + 1);

    	$.notify({
        	icon: "tim-icons icon-bell-55",
        	message: "Welcome to <b>Black Dashboard Pro</b> - a beautiful freebie for every web developer."

        },{
            type: type[color],
            timer: 8000,
            placement: {
                from: from,
                align: align
            }
        });
	}

};
