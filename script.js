const reminder = [
    {
      name: 'Понедельник',
      id: '1',
      time: '',
    },
    {
      name: 'Вторник',
      id: '2',
      time: '',
    },
    {
      name: 'Среда',
      id: '3',
      time: '',
    },
    {
      name: 'Четверг',
      id: '4',
      time: '',
    },
    {
      name: 'Пятница',
      id: '5',
      time: '',
    },
    {
      name: 'Суббота',
      id: '6',
      time: '',
    },
    {
      name: 'Воскресенье',
      id: '7',
      time: '',
    },
  ];
  
  const time_data = document.querySelectorAll('.day');
  const choice_time = document.querySelectorAll('.choice_time');
  const choice_time_button = document.querySelectorAll('.choice_time img');
  const input = document.querySelectorAll('input');
  
  function buildList() {
    for (let i = 0; i < input.length; i++) {
      if (reminder[i].time !== '') {
        input[i].value = reminder[i].time;
        time_data[i].classList = 'day day-data_active';
        choice_time[i].classList =
          'choice-time choice-time_open';
      }
    }
  }
  
  const checkActive = () => {
    const test = reminder.every((value) => {
      return value.time === '';
    });
    if (test) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  };
  
  time_data.forEach((value, key) =>
    value.addEventListener('click', function () {
      const time_dataHover = document.querySelector('.day.day-data_active');
      reminder[key].time = input[key].value;
      if (time_dataHover) {
        choice_time.forEach((text, index) =>
          value.classList.remove('choice-time_open'),
        );
      }
      choice_time[key].classList.add('choice-time_open');
      value.classList.add('day-data_active');
  
      checkActive();
    }),
  );
  
  choice_time_button.forEach((value, key) =>
    value.addEventListener('click', function (e) {
      reminder[key].time = '';
      e.stopPropagation();
      checkActive();
      input[key].value = '10:00';
      if (choice_time[key].classList.contains('choice-time_open'))
        choice_time[key].classList.remove('choice-time_open');
      if (reminder[key].time === '') {
        time_data[key].classList.remove('day-data_active');
      }
    }),
  );
  
  input.forEach((value, key) => {
    function updateValue(e) {
      reminder[key].time = e.target.value;
    }
  
    value.addEventListener('change', updateValue);
  });
  
  function encodeSelected() {
    const days = reminder
      .filter((v) => v.time)
      .map((v) => {
        const arr = v.time.split(':');
        return {
          dayNum: +v.id,
          timeMinutes: +arr[0] * 60 + +arr[1],
        };
      });
  
    return {
      days,
    };
  }
  
  function timeFormat(v) {
    const s = '0' + v;
    return s.substring(s.length - 2);
  }
  function decodeSelected(schedule) {
    const days = schedule.days;
  
    for (let i = 0; i < days.length; i++) {
      const { dayNum, timeMinutes } = days[i];
      const h = Math.floor(timeMinutes / 60);
      const m = timeMinutes - h * 60;
      reminder[dayNum - 1].time = timeFormat(h) + ':' + timeFormat(m);
    }
  
    console.log('reminder', reminder);
  }
  
  let tg = window.Telegram?.WebApp;
  if (tg) {
    tg.onEvent('mainButtonClicked', () => {
      tg.MainButton.showProgress(false);
      console.log('reminder1', reminder);
      const schedule = encodeSelected();
      console.log('reminder2', reminder);
      console.log('schedule', schedule);
  
      api
        .editTrainSchedule({
          schedule,
        })
        .then((res) => {
          if (res.error) {
            console.log('error', res.error);
            tg.MainButton.hideProgress();
          } else {
            tg.close();
          }
        });
    });
  
    tg.MainButton.setText('Завершить');
  }
  
  checkActive();
  
  let client;
  function init() {
    api.getClient().then((res) => {
      client = res.client;
      if (client && client.schedule) decodeSelected(client.schedule);
      buildList();
  
      tg.expand();
      document.getElementById('mainMenu').style.display = '';
    });
  }
  
  init();