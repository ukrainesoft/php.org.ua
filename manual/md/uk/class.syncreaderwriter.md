- [«SyncEvent::wait](syncevent.wait.md)
- [SyncReaderWriter::\_\_construct »](syncreaderwriter.construct.md)

- [PHP Manual](index.md)
- [Sync](book.sync.md)
- Клас SyncReaderWriter

# Клас SyncReaderWriter

(PECL sync \>u003d 1.0.0)

## Вступ

Кросплатформова, нативна реалізація іменованих та безіменних
об'єктів читання-запису.

Об'єкт читач-письменник дозволяє багатьом читачам чи одному письменнику
отримати доступ до ресурсів. Це ефективне рішення для управління
ресурсами, де доступ буде головним чином лише для читання, але іноді
потрібний ексклюзивний доступ для запису.

## Огляд класів

class **SyncReaderWriter** {

/\* Методи \*/

public [\_\_construct](syncreaderwriter.construct.md)(string `$name` u003d
?, int `$autounlock` u003d 1)

public [readlock](syncreaderwriter.readlock.md)(int `$wait` u003d -1):
bool

public [readunlock](syncreaderwriter.readunlock.md)(): bool

public [writelock](syncreaderwriter.writelock.md)(int `$wait` u003d -1):
bool

public [writeunlock](syncreaderwriter.writeunlock.md)(): bool

}

## Зміст

- [SyncReaderWriter::\_\_construct](syncreaderwriter.construct.md) -
Створює новий об'єкт SyncReaderWriter
- [SyncReaderWriter::readlock](syncreaderwriter.readlock.md) -
Чекає на блокування читання
- [SyncReaderWriter::readunlock](syncreaderwriter.readunlock.md) -
Знімає блокування читання
- [SyncReaderWriter::writelock](syncreaderwriter.writelock.md) -
Чекає ексклюзивного блокування запису
- [SyncReaderWriter::writeunlock](syncreaderwriter.writeunlock.md) -
Знімає блокування запису
