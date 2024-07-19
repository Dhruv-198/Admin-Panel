// MENU-1
$(document).ready(function () {
  $("#i1").click(function () {
    $(".sub-m1").slideToggle();
  });
  $("#p1").click(function () {
    $(".sub-m1").slideToggle();
  });
  $("#i2").click(function () {
    $(".sub-m1").slideToggle();
  });
});
// MENU-2
$(document).ready(function () {
  $("#i3").click(function () {
    $(".sub-m2").slideToggle();
  });
  $("#p2").click(function () {
    $(".sub-m2").slideToggle();
  });
  $("#i4").click(function () {
    $(".sub-m2").slideToggle();
  });
});
// MENU-3
$(document).ready(function () {
  $("#i5").click(function () {
    $(".sub-m3").slideToggle();
  });
  $("#p3").click(function () {
    $(".sub-m3").slideToggle();
  });
  $("#i6").click(function () {
    $(".sub-m3").slideToggle();
  });
});
// MENU-4
$(document).ready(function () {
  $("#i7").click(function () {
    $(".sub-m4").slideToggle();
  });
  $("#p4").click(function () {
    $(".sub-m4").slideToggle();
  });
  $("#i8").click(function () {
    $(".sub-m4").slideToggle();
  });
});
// MENU-5
$(document).ready(function () {
  $("#i9").click(function () {
    $(".sub-m5").slideToggle();
  });
  $("#p5").click(function () {
    $(".sub-m5").slideToggle();
  });
  $("#i10").click(function () {
    $(".sub-m5").slideToggle();
  });
});
// MENU-6
$(document).ready(function () {
  $("#i11").click(function () {
    $(".sub-m6").slideToggle();
  });
  $("#p6").click(function () {
    $(".sub-m6").slideToggle();
  });
  $("#i12").click(function () {
    $(".sub-m6").slideToggle();
  });
});
// MENU-7
$(document).ready(function () {
  $("#i13").click(function () {
    $(".sub-m7").slideToggle();
  });
  $("#p7").click(function () {
    $(".sub-m7").slideToggle();
  });
  $("#i14").click(function () {
    $(".sub-m7").slideToggle();
  });
});
// MENU-8
$(document).ready(function () {
  $("#i15").click(function () {
    $(".sub-m8").slideToggle();
  });
  $("#p8").click(function () {
    $(".sub-m8").slideToggle();
  });
  $("#i16").click(function () {
    $(".sub-m8").slideToggle();
  });
});
// MENU-9
$(document).ready(function () {
  $("#i17").click(function () {
    $(".sub-m9").slideToggle();
  });
  $("#p9").click(function () {
    $(".sub-m9").slideToggle();
  });
  $("#i18").click(function () {
    $(".sub-m9").slideToggle();
  });
});
// MENU-10
$(document).ready(function () {
  $("#i19").click(function () {
    $(".sub-m10").slideToggle();
  });
  $("#p10").click(function () {
    $(".sub-m10").slideToggle();
  });
  $("#i20").click(function () {
    $(".sub-m10").slideToggle();
  });
});
// MENU-11
$(document).ready(function () {
  $("#i21").click(function () {
    $(".sub-m11").slideToggle();
  });
  $("#p11").click(function () {
    $(".sub-m11").slideToggle();
  });
  $("#i22").click(function () {
    $(".sub-m11").slideToggle();
  });
});
// MENU-12
$(document).ready(function () {
  $("#i23").click(function () {
    $(".sub-m12").slideToggle();
  });
  $("#p12").click(function () {
    $(".sub-m12").slideToggle();
  });
  $("#i24").click(function () {
    $(".sub-m12").slideToggle();
  });
});
// MENU-13
$(document).ready(function () {
  $("#i25").click(function () {
    $(".sub-m13").slideToggle();
  });
  $("#p13").click(function () {
    $(".sub-m13").slideToggle();
  });
  $("#i26").click(function () {
    $(".sub-m13").slideToggle();
  });
});
// MENU-14
$(document).ready(function () {
  $("#i27").click(function () {
    $(".sub-m14").slideToggle();
  });
  $("#p14").click(function () {
    $(".sub-m14").slideToggle();
  });
  $("#i28").click(function () {
    $(".sub-m14").slideToggle();
  });
});
// MENU-15
$(document).ready(function () {
  $("#i29").click(function () {
    $(".sub-m15").slideToggle();
  });
  $("#p15").click(function () {
    $(".sub-m15").slideToggle();
  });
  $("#i30").click(function () {
    $(".sub-m15").slideToggle();
  });
});
// MENU-16
$(document).ready(function () {
  $("#i31").click(function () {
    $(".sub-m16").slideToggle();
  });
  $("#p16").click(function () {
    $(".sub-m16").slideToggle();
  });
  $("#i32").click(function () {
    $(".sub-m16").slideToggle();
  });
});

// NAVIGATION CLOCK

function showTime() {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  var time = h + ":" + m + ":" + s;

  $("#clock").html(time);
  setTimeout(showTime, 1000);
}
showTime();

$(document).ready(function () {
  $(".sub-n1").click(function () {
    $("nav").toggleClass("two");
    $(".cont").toggleClass("two")
    $(".slidebar").toggleClass("one")
  });
});

$(document).ready(function () {
  $("#t1").click(function () {
    $("#t1").toggleClass("three");
    $("h6").css({ "background-color": "white", opacity: "0.6" });
    $(".sub-slide").slideToggle(500);
  });
});
$(document).ready(function () {
  $("#ic1").click(function () {
    $(".mail").slideToggle();
    $(".bell").hide();
    $(".picture").hide();
  });
});
$(document).ready(function () {
  $("#ic2").click(function () {
    $(".bell").slideToggle();
    $(".mail").hide();
    $(".picture").hide();
  });
});
$(document).ready(function () {
  $("#ic4").click(function () {
    $(".picture").slideToggle();
    $(".mail").hide();
    $(".bell").hide();
  });
});
$(document).ready(function () {
  $(".cont").click(function () {
    $(".picture").hide(1000);
    $(".mail").hide(1000);
    $(".bell").hide(1000);
  });
});



$(document).ready(function () {
  $("#weedo").click(function () {
    $(".dashboad").show();
    $(".order").hide();
    $(".product").hide();
    $(".map").hide();
    $(".celendar").hide();
    $(".content-area").hide();
  });
});

$(document).ready(function () {
  $("#ord").click(function () {
    $(".dashboad").hide();
    $(".order").show();
    $(".product").hide();
    $(".map").hide();
    $(".celendar").hide();
    $(".content-area").hide();
  });
});
$(document).ready(function () {
  $("#prd").click(function () {
    $(".dashboad").hide();
    $(".order").hide();
    $(".product").show();
    $(".map").hide();
    $(".content-area").hide();
    $(".celendar").hide();
  });
});
$(document).ready(function () {
  $("#mp").click(function () {
    $(".dashboad").hide();
    $(".order").hide();
    $(".product").hide();
    $(".map").show();
    $(".content-area").hide();
    $(".celendar").hide();
  });
});
$(document).ready(function () { 
  $("#cel").click(function () {
    $(".dashboad").hide();
    $(".order").hide();
    $(".product").hide();
    $(".map").hide();
    $(".content-area").hide();
    $(".celendar").show();
  });
});
// $(document).ready(function () {
//   $("#cus").click(function () {
//     $(".dashboad").hide();
//     $(".order").hide();
//     $(".product").hide();
//     $(".map").hide();
//     $(".celendar").hide();
//     $(".content-area").show();
//   });
// });

// CONTENT

// CHARTS

var options = {
  series: [
    {
      name: "Inflation",
      data: [25, 50, 15, 33, 13],
    },
  ],
  chart: {
    height: 450,
    type: "bar",
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      dataLabels: {
        position: "top", // top, center, bottom
      },
    },
  },
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return val + "%";
    },
    offsetY: -20,
    style: {
      fontSize: "12px",
      colors: ["#304758"],
    },
  },

  xaxis: {
    categories: ["January", "February", "March", "April", "May"],
    position: "top",
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    crosshairs: {
      fill: {
        type: "gradient",
        gradient: {
          colorFrom: "#D8E3F0",
          colorTo: "#BED1E6",
          stops: [0, 100],
          opacityFrom: 0.4,
          opacityTo: 0.5,
        },
      },
    },
    tooltip: {
      enabled: true,
    },
  },
  yaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: false,
      formatter: function (val) {
        return val + "%";
      },
    },
  },
};

var chart = new ApexCharts(document.querySelector("#sw1"), options);
chart.render();

// ORDER

var options = {
  series: [44, 35, 13, 33, 20],
  chart: {
    width: 380,
    type: "donut",
  },
  dataLabels: {
    enabled: false,
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          show: false,
        },
      },
    },
  ],
  legend: {
    position: "right",
    offsetY: 0,
    height: 230,
  },
};

var chart = new ApexCharts(document.querySelector("#osd3"), options);
chart.render();

function appendData() {
  var arr = chart.w.globals.series.slice();
  arr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1);
  return arr;
}

function removeData() {
  var arr = chart.w.globals.series.slice();
  arr.pop();
  return arr;
}

function randomize() {
  return chart.w.globals.series.map(function () {
    return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  });
}

function reset() {
  return options.series;
}

document.querySelector("#randomize").addEventListener("click", function () {
  chart.updateSeries(randomize());
});

document.querySelector("#add").addEventListener("click", function () {
  chart.updateSeries(appendData());
});

document.querySelector("#remove").addEventListener("click", function () {
  chart.updateSeries(removeData());
});

document.querySelector("#reset").addEventListener("click", function () {
  chart.updateSeries(reset());
});

