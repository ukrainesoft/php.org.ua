- [«SyncSemaphore::unlock](syncsemaphore.unlock.md)
- [SyncEvent::\_\_construct »](syncevent.construct.md)

- [PHP Manual](index.md)
- [Sync](book.sync.md)
- Клас SyncEvent

# Клас SyncEvent

(PECL sync \>u003d 1.0.0)

## Вступ

Кросплатформова, нативна реалізація іменованих та безіменних
об'єктів подій Підтримуються як автоматичні, так і ручні
об'єкти подій.

Об'єкт події без опитування очікує на запуск/установку об'єкта. Один
екземпляр чекає на об'єкт події, а інший запускає/встановлює
подія. Об'єкти подій корисні там, де інакше тривалий
процес міг би опитати ресурс (наприклад, перевірити, чи потрібно
обробляти завантажені дані).

## Огляд класів

class **SyncEvent** {

/\* Методи \*/

public [\_\_construct](syncevent.construct.md)(string `$name` u003d ?,
bool `$manual` u003d **`false`**, bool `$prefire` u003d **`false`**)

public [fire](syncevent.fire.md)(): bool

public [reset](syncevent.reset.md)(): bool

public [wait](syncevent.wait.md)(int `$wait` u003d -1): bool

}

## Зміст

- [SyncEvent::\_\_construct](syncevent.construct.md) — Створює новий
об'єкт SyncEvent
- [SyncEvent::fire](syncevent.fire.md) — Запускає/встановлює
подія
- [SyncEvent::reset](syncevent.reset.md) — Скидає ручну подію
- [SyncEvent::wait](syncevent.wait.md) — Очікує запуску/установки
події
