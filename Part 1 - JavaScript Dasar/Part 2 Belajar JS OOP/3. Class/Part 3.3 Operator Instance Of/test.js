class Configuration{
  static name= "Learning JS Basic and OOP";
  static version= "1.2.0";
  static author="Darmatius Aldo Gunawan, S.Kom";

  // untuk 3 static class field tersebut bersifat jadi global
  // dan seharus nya bisa di akses dari class mana saja
}
// contoh mengakses static Class field nya

console.info(Configuration.name);
console.info(Configuration.version);
console.info(Configuration.author);