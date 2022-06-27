- [«SyncReaderWriter](class.syncreaderwriter.md)
- [SyncReaderWriter::readlock »](syncreaderwriter.readlock.md)

- [PHP Manual](index.md)
- [SyncReaderWriter](class.syncreaderwriter.md)
- Створює новий об'єкт SyncReaderWriter

# SyncReaderWriter::\_\_construct

(PECL sync \>u003d 1.0.0)

SyncReaderWriter::\_\_construct — Створює новий об'єкт SyncReaderWriter

### Опис

public **SyncReaderWriter::\_\_construct**(string `$name` u003d ?, int
`$autounlock` u003d 1)

Створює іменований чи безіменний об'єкт читання-запису.

### Список параметрів

`name`
Ім'я засобу читання-запису, якщо це іменований об'єкт читання-запису.

> **Примітка**:
>
> Якщо ім'я вже існує, воно має бути доступним для відкриття поточним
> користувачем, від імені якого запущено процес, інакше буде
> викинуто виняток із безглуздим повідомленням про помилку.

> **Примітка**: У Windows параметр `name` не повинен містити зворотних
> слідів.

`autounlock`
Вказує, чи слід автоматично розблокувати засіб
читання-запису при завершенні скрипта PHP.

**Увага**
Якщо об'єкт: Іменований засіб читання-запису з автоматичним
блокуванням FALSE, об'єкт заблокований для читання або запису, та скрипт
PHP завершується до того, як об'єкт буде розблокований, тоді базові
об'єкти виявляться у неузгодженому стані.

### Значення, що повертаються

Новий об'єкт [SyncReaderWriter](class.syncreaderwriter.md).

### Помилки

Виняток викидається, якщо засіб читання-запису не може бути
створено чи відкрито.

### Приклади

**Приклад #1 Приклад використання **SyncReaderWriter::\_\_construct()****

` <?php$readwrite u003d new SyncReaderWriter("FileCacheLock");$readwrite->readlock();/* ... */$readwrite->readunlock();$readwrite->writelock();/* .. . */$readwrite->writeunlock();?> `

### Дивіться також

- [SyncReaderWriter::readlock()](syncreaderwriter.readlock.md) -
Чекає на блокування читання
- [SyncReaderWriter::readunlock()](syncreaderwriter.readunlock.md) -
Знімає блокування читання
- [SyncReaderWriter::writelock()](syncreaderwriter.writelock.md) -
Чекає ексклюзивного блокування запису
- [SyncReaderWriter::writeunlock()](syncreaderwriter.writeunlock.md) -
Знімає блокування запису
