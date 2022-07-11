- [« GearmanJob::returnCode](gearmanjob.returncode.md)
- [GearmanJob::sendData »](gearmanjob.senddata.md)

- [PHP Manual](index.md)
- [GearmanJob](class.gearmanjob.md)
- Надсилання результату та статусу завершення

# GearmanJob::sendComplete

(PECL gearman \>u003d 0.6.0)

GearmanJob::sendComplete — Надсилання результату та статусу завершення

### Опис

public **GearmanJob::sendComplete**(string `$result`): bool

Відправляє результати роботи клієнту та оновлює статус об'єкту на
завершений.

### Список параметрів

`result`
Серіалізовані результати роботи.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [GearmanJob::sendFail()](gearmanjob.sendfail.md) - Надсилання
статусу невдалої операції
- [GearmanJob::setReturn()](gearmanjob.setreturn.md) - Установка
значення, що повертається
