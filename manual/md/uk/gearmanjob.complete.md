- [« GearmanJob](class.gearmanjob.md)
- [GearmanJob::\_\_construct »](gearmanjob.construct.md)

- [PHP Manual](index.md)
- [GearmanJob](class.gearmanjob.md)
- Надсилання результату та статусу завершення (застарілий метод)

# GearmanJob::complete

(PECL gearman \<u003d 0.5.0)

GearmanJob::complete — Надсилання результату та статусу завершення
(застарілий метод)

### Опис

public **GearmanJob::complete**(string `$result`): bool

Відправляє результати обробки клієнту та оновлює статус роботи на
завершений.

> **Примітка**:
>
> Цей метод було замінено на
> [GearmanJob::sendComplete()](gearmanjob.sendcomplete.md) у випуску
> Gearman модуля 0.6.0.

### Список параметрів

`result`
Серіалізовані результати опрацювання.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [GearmanJob::sendFail()](gearmanjob.sendfail.md) - Надсилання
статусу невдалої операції
- [GearmanJob::setReturn()](gearmanjob.setreturn.md) - Установка
значення, що повертається
