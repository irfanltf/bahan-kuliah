function tugas1() {
    console.log("Mulai tugas 1");
    setTimeout(() => {
      console.log("Selesai tugas 1");
    }, 1000);
  }
  
  function tugas2() {
    console.log("Mulai tugas 2");
    setTimeout(() => {
      console.log("Selesai tugas 2");
    }, 5000);
  }
  
  function tugas3() {
    console.log("Mulai tugas 3");
    setTimeout(() => {
      console.log("Selesai tugas 3");
    }, 100);
  }


console.log("Mulai program");
tugas1();
tugas2();
tugas3();
console.log("Selesai program");