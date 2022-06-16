- [«
MongoDB\Driver\WriteConcern::bsonSerialize](mongodb-driver-writeconcern.bsonserialize.md)
- [MongoDB\Driver\WriteConcern::getJournal
»](mongodb-driver-writeconcern.getjournal.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\WriteConcern](class.mongodb-driver-writeconcern.md)
- Створити новий WriteConcern

# MongoDB\Driver\WriteConcern::\_\_construct

(mongodb \>u003d1.0.0)

MongoDB\Driver\WriteConcern::\_\_construct — Створити новий WriteConcern

### Опис

final public **MongoDB\Driver\WriteConcern::\_\_construct**(string\|int
`$w`, int `$wtimeout` u003d ?, bool `$journal` u003d ?)

Створює новий
[MongoDB\Driver\WriteConcern](class.mongodb-driver-writeconcern.md),
який є незмінним об'єктом значення.

### Список параметрів

`w`
[TABLE]

**Гарантія запису**

`wtimeout`
Скільки чекати (у мілісекундах) відповіді від вторинних вузлів перед тим, як
видати помилку.

`wtimeout` призводить до того, що операції запису повертаються з помилкою
(**WriteConcernError**) після вказаного періоду, навіть якщо потрібна
гарантія запису в кінцевому рахунку буде успішною. Коли ці гарантії
записи повертаються, MongoDB не скасовує успішні зміни даних,
виконані до того, як гарантія запису перевищила тимчасовий ліміт
`wtimeout`

Якщо зазначено, `wtimeout` має бути 64-бітним цілим числом зі знаком,
більше або дорівнює нулю.

| Значення | Опис |
|-------------------------------|----------------- -----------------------------------|
| 0 | Блокувати нескінченно. Це значення за промовчанням. |
| \<ціле число більше, ніж 0\> | Мілісекунди до очікування повернення. |

**Час очікування гарантії запису**

`journal`
Чекати, поки mongod не застосує запис до журналу.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).
- При неправильному `w` або негативному `wtimeout` або якщо вони більше,
ніж 32-бітове ціле число зі знаком, викидає
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md)

### Список змін

| Версія | Опис |
|--------------------|---------------------------- ------------------------------|
| PECL mongodb 1.7.0 | Параметр `wTimeout` тепер набуває 64-бітових значень. |

### Приклади

**Приклад #1 Приклад використання
**MongoDB\Driver\WriteConcern::\_\_construct()****

` <?php/* Запит підтвердження запису від більшості вузлів набору реплік */$wc u003d new MongoDB\Driver\WriteConcern(MongoDB\Driver\WriteConcern: МайорITY,  | MultipleDC" */$wc u003d new MongoDB\Driver\WriteConcern("MultipleDC", 500);?> `

### Дивіться також

- [» Довідкова інформація щодо гарантії
запису](https://www.mongodb.com/docs/manual/reference/write-concern/)
