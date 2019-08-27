<!--require frappe.js and css-->

<html lang="en">
  <head>
  </head>
<body>
<svg id="gantt">

</svg>
<script>
  var tasks = [
  {
    id: ' Project',
    name: 'Main Project',
    start: '2016-12-30',
    end: '2017-01-20',
  },
  {
    id: 'Task 1',
    name: 'Smaple Task 1',
    start: '2016-12-30',
    end: '2017-01-03',
    progress: 100,
    //dependencies: 'Task 2, Task 3'
  },
  {
    id: 'Task 2',
    name: 'Smaple Task 2',
    start: '2017-01-03',
    end: '2017-01-08',
    progress: 40,
  },
  {
    id: 'Task 3',
    name: 'Smaple Task 3',
    start: '2017-01-09',
    end: '2017-01-12',
    progress: 20,
    dependencies: 'Task 2'
  },
  {
    id: 'Task 4',
    name: 'Smaple Task 4',
    start: '2016-12-30',
    end: '2016-12-31',
    progress: 20,
    dependencies: 'Task 2'
  },

]
var gantt = new Gantt("#gantt", tasks, {
    header_height: 100,
    column_width: 30,
    step: 20,
    view_modes: ['Quarter Day', 'Half Day', 'Day', 'Week', 'Month'],
    bar_height: 40,
    bar_corner_radius: 5,
    arrow_curve: 5,
    padding: 20,
    view_mode: 'Day',   
    date_format: 'YYYY-MM-DD',
    custom_popup_html: null
});
</script>
</body>
</html>
