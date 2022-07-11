- [« date_date_set](function.date-date-set.md)
- [date_default_timezone_set
»](function.date-default-timezone-set.md)

- [PHP Manual](index.md)
- [Функції дати та часу](ref.datetime.md)
- Повертає часовий пояс, який використовується за замовчуванням усіма функціями
дати/часу у скрипті

# date_default_timezone_get

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

date_default_timezone_get — Повертає часовий пояс, використовуваний за
замовчуванням усіма функціями дати/часу в скрипті

### Опис

**date_default_timezone_get**(): string

Функція намагається отримати часовий пояс за промовчанням
наступними способами:

- Читання налаштування часового поясу за допомогою функції
[date_default_timezone_set()](function.date-default-timezone-set.md)
(якщо можна застосувати)

- Читання значення ini-налаштування
[date.timezone](datetime.configuration.md#ini.date.timezone) (якщо
задана)

Якщо жоден із способів не приніс результату,
**date_default_timezone_get()** поверне часовий пояс `UTC`.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає рядок (string).

### Приклади

**Приклад #1 Отримання часового поясу за замовчуванням**

` <?phpdate_default_timezone_set('Europe/London');if(date_default_timezone_get()) {    echo 'date_default_timezone_set: ' . date_default_timezone_get() . '<br />';}if (ini_get('date.timezone')) {    echo 'date.timezone: ' . ini_get('date.timezone');}?> `

Результатом виконання цього прикладу буде щось подібне:

date_default_timezone_set: Європа/Лондон
date.timezone: Європа/Лондон

**Приклад #2 Отримання абревіатури часового поясу**

` <?phpdate_default_timezone_set('America/Los_Angeles');echo date_default_timezone_get() . ' u003d> ' . date('e') . ' u003d> ' . date('T');?> `

Результат виконання цього прикладу:

America/Los_Angeles u003d> America/Los_Angeles u003d> PST

### Дивіться також

- [date_default_timezone_set()](function.date-default-timezone-set.md) -
Встановлює часовий пояс за промовчанням для всіх функцій
дати/часу у скрипті
- [Список підтримуваних часових поясів](timezones.md)
