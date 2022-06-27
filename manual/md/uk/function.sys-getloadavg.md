- [« sleep](function.sleep.md)
- [time_nanosleep »](function.time-nanosleep.md)

- [PHP Manual](index.md)
- [Різні функції](ref.misc.md)
- Отримує середнє завантаження системи

#sys_getloadavg

(PHP 5 \>u003d 5.1.3, PHP 7, PHP 8)

sys_getloadavg — Отримує середнє завантаження системи

### Опис

**sys_getloadavg**(): array\|false

Повертає три зразки, що представляють середнє завантаження системи (число
процесів у черзі системних процесів) за останні 1, 5 та 15 хвилин,
відповідно. Повертає **`false`** у разі виникнення помилки.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає масив (array) із трьома зразками (останні 1, 5 та 15 хвилин).

### Приклади

**Приклад #1 Приклад використання **sys_getloadavg()****

` <?php$load u003d sys_getloadavg();if ($load[0] > 0.80) {    header('HTTP/1.1 503 Too busy, try again later'); die('Server too busy. Please try again later.');}?> `

### Примітки

> **Примітка**: Для Windows-платформ ця функція не реалізована.
