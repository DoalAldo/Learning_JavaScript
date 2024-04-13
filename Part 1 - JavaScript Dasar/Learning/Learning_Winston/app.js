const { transport } = require("winston");

const winston = require("winston");

//! contoh destructuring beberapa function yang bisa di pakai di winston logging
const{combine,timestamp,printf,json,prettyPrint}=winston.format;

const logger = winston.createLogger({
  //! Default Level Winston set in debug
  level:'debug',

  //* Contoh Memformat Logging nya kedalam bentuk JSON (DEFAULT)
 // format:winston.format.json(),

  //* Contoh Memformat Logging kedalam bentuk CLI
  // format:winston.format.cli(),

  //* Contoh Memformat Logging kedalam bentuk combine (custom)
  format:combine(

    //* Menggunakan TimeStamp Bawaan Dari Winston 
    //  timestamp(),

    //* Menggunakan timestamps dengan format yang lebih mudah di mengerti
    timestamp({format: 'YYYY-MM-DD HH:mm:ss:ms'}),

    //* Menggunakan printf Untuk mengcustom Tampilan Format nya mau seperti apa
    //printf((info)=> `${info.timestamp} - ${info.level} : ${info.message}`)

    //* Ketika Menggunakan tampilan dalam bentuk JSON()
    json(),
    prettyPrint()
  ),
  transports:[
    //* mengtransport kan Hasil Logging nya ke console dan ke dalam file app.log
    new winston.transports.Console(),

    //! Kalau format winston dalam CLI jgn transport nya ke dalam file dikarenakan bakal aneh bentuk nya
     //* mengtransport kan Hasil Logging nya ke dalam file app.log
    //new winston.transports.File({filename:'app.log'}),

    //* contoh Mengtransportkan Hasil Logging nya kendalam file application.log ketika LEVEL info
    new winston.transports.File({filename:'application.log',level : 'info'}),

     //* contoh Mengtransportkan Hasil Logging nya kendalam file application_error.log ketika LEVEL error
    new winston.transports.File({filename:'application_error.log',level : 'error'}),
  
  ]
});

const requestLog={method: "GET", isAuthenticated : false, URL:"youtube.com"};

logger.verbose(`LDO- Memunculkan Logging di CLI dalam bentuk JSON \n`)

logger.verbose(`LDO- Contoh Logger.info \n`)
logger.info(`An Info Logging => akan masuk ke file application.log`,requestLog);

logger.verbose(`LDO- Contoh Logger.error \n`)
logger.error(`An error Logging => akan masuk ke file application_error.log`,requestLog);

/**
 * ! Catatan Penggunaan Winston As A logger Libary
 * 
 * @param Level
 *  * * 1. level Untuk Menentukan Level darimana yang akan di mulai catet logging nya
 * 
 * @param format
 *  * * 2. format Untuk Menentukan Bentukan Hasil Format Logging nya
    * *    => Bisa Menggunakan Format JSON()
    * *    => Bisa Menggunakan Format CLI()
    * *    => Bisa Di Custom Sesuai Kemauan Pengguna Bisa Menggunakan Combine()
    * 
 * @param transports
 * * * 3. transports untuk menentukan Logger nya akan di tampilkan atau akan di insert ke dalam file


 * 
 */