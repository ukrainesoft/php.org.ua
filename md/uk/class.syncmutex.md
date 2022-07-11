- [«Зумовлені константи](sync.constants.md)
- [SyncMutex::\_\_construct »](syncmutex.construct.md)

- [PHP Manual](index.md)
- [Sync](book.sync.md)
- Клас SyncMutex

# Клас SyncMutex

(PECL sync \>u003d 1.0.0)

## Вступ

Кросплатформова, нативна реалізація іменованих та безіменних рахункових
об'єктів м'ютексу.

М'ютекс – це об'єкт взаємного виключення, який обмежує доступ до
спільний ресурс (наприклад, файл) для одного екземпляра. Рахункові мьютекси
отримують м'ютекс один раз і внутрішньо відстежують, скільки разів м'ютекс
було заблоковано. М'ютекс розблокується, як тільки він виходить із
області дії або розблокується стільки разів, скільки він був
заблоковано.

## Огляд класів

class **SyncMutex** {

/\* Методи \*/

public [\_\_construct](syncmutex.construct.md)(string `$name` u003d ?)

public [lock](syncmutex.lock.md)(int `$wait` u003d -1): bool

public [unlock](syncmutex.unlock.md)(bool `$all` u003d **`false`**): bool

}

## Зміст

- [SyncMutex::\_\_construct](syncmutex.construct.md) — Створює новий
об'єкт SyncMutex
- [SyncMutex::lock](syncmutex.lock.md) — Чекає на ексклюзивну
блокування
- [SyncMutex::unlock](syncmutex.unlock.md) — Розблокує м'ютекс
