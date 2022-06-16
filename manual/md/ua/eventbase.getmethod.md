- [«EventBase::getFeatures](eventbase.getfeatures.md)
- [EventBase::getTimeOfDayCached »](eventbase.gettimeofdaycached.md)

- [PHP Manual](index.md)
- [EventBase](class.eventbase.md)
- Повертає використовуваний метод події

# EventBase::getMethod

(PECL event \>u003d 1.2.6-beta)

EventBase::getMethod — Повертає використовуваний метод події

### Опис

public **EventBase::getMethod**(): string

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Рядок, що представляє метод події (backend).

### Приклади

**Приклад #1 Приклад використання **EventBase::getMethod()****

` <?php$cfg u003d new EventConfig();if ($cfg->avoidMethod("select")) {    echo "Метод 'select' буде ігноруватися
";}// Створюємо базу подій, з конфігурацією$baseu003du003dnew EventBase($cfg);echo "Використовуваний метод події: ", $base->getMethod(), PHP_E;

Результатом виконання цього прикладу буде щось подібне:

`select' method avoided
Метод події, що використовується: epoll

### Дивіться також

- [EventBase::getFeatures()](eventbase.getfeatures.md) - Повертає
бітову маску підтримуваних функцій
