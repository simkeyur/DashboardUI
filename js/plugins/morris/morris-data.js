// Morris.js Charts sample data for SB Admin template

$(function() {

   
    
     // hold-trend
    Morris.Line({
      element: 'hold-trend',
      data: ,
      xkey: 'date',
      ykeys: ['avs_hold', 'tax_loop'],
      labels: ['AVS Hold', 'Tax Loop'],
      pointSize: 2,
      hideHover: 'auto',
      resize: true
    });
    
     // fullfillment-trend
    Morris.Line({
      element: 'exception-trend',
      data: [{
          "date": "2017-05-11 00:00:00",
          "duplicate_order": 95,
          "exceptions": 3
        }, {
          "date": "2017-05-11 01:00:00",
          "duplicate_order": 40,
          "exceptions": 29
        }, {
          "date": "2017-05-11 02:00:00",
          "duplicate_order": 90,
          "exceptions": 42
        }, {
          "date": "2017-05-11 03:00:00",
          "duplicate_order": 16,
          "exceptions": 19
        }, {
          "date": "2017-05-11 04:00:00",
          "duplicate_order": 63,
          "exceptions": 50
        }, {
          "date": "2017-05-11 05:00:00",
          "duplicate_order": 30,
          "exceptions": 31
        }, {
          "date": "2017-05-11 06:00:00",
          "duplicate_order": 22,
          "exceptions": 24
        }, {
          "date": "2017-05-11 07:00:00",
          "duplicate_order": 56,
          "exceptions": 19
        }, {
          "date": "2017-05-11 08:00:00",
          "duplicate_order": 22,
          "exceptions": 22
        }, {
          "date": "2017-05-11 09:00:00",
          "duplicate_order": 90,
          "exceptions": 17
        }, {
          "date": "2017-05-11 10:00:00",
          "duplicate_order": 64,
          "exceptions": 34
        }, {
          "date": "2017-05-11 11:00:00",
          "duplicate_order": 97,
          "exceptions": 39
        }, {
          "date": "2017-05-11 12:00:00",
          "duplicate_order": 60,
          "exceptions": 14
        }, {
          "date": "2017-05-11 13:00:00",
          "duplicate_order": 18,
          "exceptions": 29
        }, {
          "date": "2017-05-11 14:00:00",
          "duplicate_order": 23,
          "exceptions": 12
        }, {
          "date": "2017-05-11 15:00:00",
          "duplicate_order": 33,
          "exceptions": 1
        }, {
          "date": "2017-05-11 16:00:00",
          "duplicate_order": 20,
          "exceptions": 48
        }, {
          "date": "2017-05-11 17:00:00",
          "duplicate_order": 41,
          "exceptions": 3
        }, {
          "date": "2017-05-11 18:00:00",
          "duplicate_order": 27,
          "exceptions": 1
        }, {
          "date": "2017-05-11 19:00:00",
          "duplicate_order": 3,
          "exceptions": 42
        }, {
          "date": "2017-05-11 20:00:00",
          "duplicate_order": 26,
          "exceptions": 18
        }, {
          "date": "2017-05-11 21:00:00",
          "duplicate_order": 59,
          "exceptions": 37
        }, {
          "date": "2017-05-11 22:00:00",
          "duplicate_order": 98,
          "exceptions": 21
        }, {
          "date": "2017-05-11 23:00:00",
          "duplicate_order": 36,
          "exceptions": 35
        }],
      xkey: 'date',
      ykeys: ['duplicate_order', 'exceptions'],
      labels: ['Duplicate Orders', 'Exceptions'],
      pointSize: 3,
      hideHover: 'auto',
      resize: true
    });

    

});
