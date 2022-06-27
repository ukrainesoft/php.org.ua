- [«
MongoDB\Driver\ReadPreference::unserialize](mongodb-driver-readpreference.unserialize.md)
- [MongoDB\Driver\ReadConcern::bsonSerialize
»](mongodb-driver-readconcern.bsonserialize.md)

- [PHP Manual](index.md)
- [MongoDB\Driver](book.mongodb.md)
- Клас MongoDB\Driver\ReadConcern

# Клас MongoDB\Driver\ReadConcern

(mongodb \>u003d1.1.0)

## Вступ

**MongoDB\Driver\ReadConcern** контролює рівень ізоляції для
операцій читання для наборів реплік та сегментів наборів реплік. Ця опція
вимагає MongoDB 3.2 чи новіше.

## Огляд класів

final class **MongoDB\Driver\ReadConcern** implements
[MongoDB\BSON\Serializable](class.mongodb-bson-serializable.md),
[Serializable](class.serializable.md) {

/\* Константи \*/

const string `AVAILABLE` u003d "available";

const string `LINEARIZABLE` u003d "linearizable";

const string `LOCAL` u003d "local";

const string `MAJORITY` u003d "majority";

const string `SNAPSHOT` u003d "snapshot";

/\* Методи \*/

final public
[bsonSerialize](mongodb-driver-readconcern.bsonserialize.md)(): object

final public
[\_\_construct](mongodb-driver-readconcern.construct.md)(string
`$level` u003d ?)

final public [getLevel](mongodb-driver-readconcern.getlevel.md)():
?string

final public [isDefault](mongodb-driver-readconcern.isdefault.md)():
bool

final public [serialize](mongodb-driver-readconcern.serialize.md)():
string

final public
[unserialize](mongodb-driver-readconcern.unserialize.md)(string
`$serialized`): void

}

## Зумовлені константи

**`MongoDB\Driver\ReadConcern::AVAILABLE`**
За промовчанням для читання проти вторинних, коли `afterClusterTime` і
`level` не вказано.

Запит повертає останні дані екземпляра. Не гарантує, що
дані були записані більшості членів набору реплік (тобто можуть
бути відкати).

Для колекцій, що не охороняються (включаючи колекції в автономному розгортанні
або розгортання набору реплік), ``local'` і ``available'' гарантії
Читання поводяться однаково.

Для сегментованого кластера ``available'' гарантії читання
забезпечує велику терпимість для розділів, оскільки вона не очікує
гарантій узгодженості. Проте запит з ``available'' гарантіями
читання може повернути втрачені документи, якщо у сегменті виконується
міграція фрагментів, оскільки "available" гарантій читання, на відміну
від ``local'` гарантій читання, не пов'язується з первинним сервером
сегменту або серверами конфігурації для отримання оновлених
метаданих.

**`MongoDB\Driver\ReadConcern::LINEARIZABLE`**
Запит повертає дані, що відображають усі успішні записи,
випущені з гарантіями записи ``majority'` *і* підтверджені до початку
операції читання. Для наборів реплік, що виконуються з параметром
`writeConcernMajorityJournalDefault`, встановленим у значення
**`true`**, лінеаризовані гарантії читання повертають дані, які
ніколи не будуть відкочуватися.

Якщо для `writeConcernMajorityJournalDefault` встановлено значення
**`false`**, MongoDB не буде очікувати, що `w: "majority"` записів буде
стійким, перш ніж підтвердити запис. Таким чином, операції
записи ``majority'` можуть відкочуватися у разі втрати члена набору
реплік.

Ви можете вказати лінеаризовані гарантії читання для операцій читання
лише на основному сервері.

Лінеаризовані гарантії читання застосовуються тільки в тому випадку, якщо в
операціях читання вказано фільтр запиту, який однозначно
ідентифікує один документ.

**Підказка**
Завжди використовуйте `maxTimeMS` з лінеаризованими гарантіями читання, якщо
більшість елементів, що несуть дані, недоступні. `maxTimeMS`
гарантує, що операція не блокується нескінченно, і натомість
гарантує, що операція повертає помилку, якщо проблема читання не
може бути виконана.

Для лінеаризованих гарантій читання потрібен MongoDB 3.4.

**`MongoDB\Driver\ReadConcern::LOCAL`**
За промовчанням для читання по первинному, якщо `level` не вказано, і для
читання з вторинного, якщо 'level' не вказано, але задано
`afterClusterTime`.

Запит повертає останні дані екземпляра. Не гарантує, що
дані були записані більшості членів набору реплік (тобто можуть
бути відкати).

**`MongoDB\Driver\ReadConcern::MAJORITY`**
Запит повертає останні дані екземпляра, які були
визнані записаними більшості членів набору реплік.

Щоб використати рівень гарантій читання ``majority'`, набори реплік
повинні використовувати механізм зберігання WiredTiger та протокол вибору
Версія 1.

**`MongoDB\Driver\ReadConcern::SNAPSHOT`**
Гарантія читання "snapshot" доступна для транзакцій з декількома
документами, а починаючи з MongoDB 5.0, також доступна для деяких
операцій читання як для транзакцій з кількома документами.

Якщо транзакція не є частиною причинно-узгодженого сесії, після
фіксації транзакції з проблемою запису ``majority'`, операції транзакції
гарантовано прочитають із моментального знімку зафіксованих
більшістю даних.

Якщо транзакція є частиною причинно-узгодженої сесії,
фіксації транзакції з проблемою запису ``majority'`, операції транзакції
гарантовано зчитують із моментального знімку дані, підтверджені
більшістю, що забезпечує причинну узгодженість з операцій,
безпосередньо попередньої початку транзакції.

Поза транзакціями з кількома документами, проблема читання ``snapshot'`
доступна на первинних та вторинних серверах для наступних операцій
читання: `find`, `aggregate` та `distinct` (для необроблених колекцій).
Всі інші команди читання забороняють "snapshot".

## Список змін

[TABLE]

## Дивіться також

- [» Довідка за гарантіями
читання](https://www.mongodb.com/docs/manual/reference/read-concern/)

## Зміст

- [MongoDB\Driver\ReadConcern::bsonSerialize](mongodb-driver-readconcern.bsonserialize.md)
— Повертає об'єкт для серіалізації BSON
- [MongoDB\Driver\ReadConcern::\_\_construct](mongodb-driver-readconcern.construct.md)
- Створює новий ReadConcern
- [MongoDB\Driver\ReadConcern::getLevel](mongodb-driver-readconcern.getlevel.md)
- Повертає опцію "level" ReadConcern
- [MongoDB\Driver\ReadConcern::isDefault](mongodb-driver-readconcern.isdefault.md)
— Перевіряє, чи є гарантією прочитання за замовчуванням
- [MongoDB\Driver\ReadConcern::serialize](mongodb-driver-readconcern.serialize.md)
- Серіалізація ReadConcern
- [MongoDB\Driver\ReadConcern::unserialize](mongodb-driver-readconcern.unserialize.md)
- Десеріалізація ReadConcern
