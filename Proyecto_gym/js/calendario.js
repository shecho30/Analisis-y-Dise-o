document.addEventListener('DOMContentLoaded', function() {
   var calendarEl = document.getElementById('calendar');

   var calendar = new FullCalendar.Calendar(calendarEl, {
     headerToolbar: {
       left: 'prev,next today',
       center: 'title',
       right: 'dayGridMonth,timeGridWeek,timeGridDay'
     },
     initialDate: '2021-04-01',
     navLinks: true, // can click day/week names to navigate views
     selectable: true,
     selectMirror: true,
     select: function(arg) {
       var title = prompt('Ingrese Titulo:');
       if (title) {
         calendar.addEvent({
           title: title,
           start: arg.start,
           end: arg.end,
           allDay: arg.allDay
         })
       }
       calendar.unselect()
     },
     eventClick: function(arg) {
       if (confirm('esta Seguro que quiere cancelar el evento')) {
         arg.event.remove()
       }
     },
     editable: true,
     dayMaxEvents: true, // allow "more" link when too many events
     events: [
       {
         title: 'Ejercicio de Pierna',
         start: '2021-04-01'
       },
       {
         title: 'Correr / Cardio',
         start: '2021-04-07',
         end: '2021-04-10'
       },
       {
         groupId: 999,
         title: 'Clase de natación',
         start: '2021-04-09T16:00:00'
       },
       {
         groupId: 999,
         title: 'Clase de Boxeo',
         start: '2021-04-16T16:00:00'
       },
       {
         title: 'Correr / Cardio',
         start: '2021-04-11',
         end: '2021-04-13'
       },
       {
         title: 'TRX',
         start: '2021-04-12T10:30:00',
         end: '2021-04-12T12:30:00'
       },
       {
         title: 'Almuerzo Equipo',
         start: '2021-04-12T12:00:00'
       },
       {
         title: 'Pecho',
         start: '2021-04-12T14:30:00'
       },
       {
         title: 'Descanso',
         start: '2021-04-12T17:30:00'
       },
       {
         title: 'Comida',
         start: '2021-04-12T20:00:00'
       },
       {
         title: 'Dia de descanso',
         start: '2021-04-13T07:00:00'
       },
       {
         title: 'Agendar Clase',
         url: 'menu.html',
         start: '2021-04-28'
       }
     ]
   });

   calendar.render();
 });