- [«sys_getloadavg](function.sys-getloadavg.md)
- [time_sleep_until »](function.time-sleep-until.md)

- [PHP Manual](index.md)
- [Різні функції](ref.misc.md)
- Затримка на задане число секунд та наносекунд

#time_nanosleep

(PHP 5, PHP 7, PHP 8)

time_nanosleep — Затримка на задану кількість секунд і наносекунд

### Опис

**time_nanosleep**(int `$seconds`, int `$nanoseconds`): array\|bool

Відкладає виконання програми на задані в параметрах `seconds` та
`nanoseconds` число секунд і наносекунд відповідно.

### Список параметрів

`seconds`
Має бути цілим позитивним числом.

`nanoseconds`
Має бути цілим позитивним числом, меншим за один мільярд.

> **Примітка**: У Windows система може відкладати виконання довше
> вказаної кількості наносекунд, залежно від апаратного
> Забезпечення.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

Якщо відкладене виконання було перервано сигналом, то повертається
асоціативний масив з наступними компонентами:

- `seconds` - число секунд, що залишилися
- `nanoseconds` - число наносекунд, що залишилися.

### Приклади

**Приклад #1 Приклад використання **time_nanosleep()****

`<?php// Увага! Якщо буде повернений масив, та така функція не спрацює, як очікувалосяif (time_nanosleep(0, 500000000)) {    echo "Затримка на |
";}//Так краще:if (time_nanosleep(0, 500000000) u003du003du003d true) {    echo "Затримка на півсекунди.
";}// А так краще всього:$nano u003d time_nanosleep(2, 100000);if ($nano u003du003du003d true) {    echo "Затримка на 2 секунди, 1.
";} elseif ($nano u003du003du003d false) {    echo "Затримка не удалася.
";} elseif (is_array($nano)) {    $seconds u003d $nano['seconds'];    $nanoseconds u003d $nano['nanoseconds'];    echo |"
";    echo "Залишилося: $seconds секунд, $nanoseconds наносекунд.";}?> `

### Дивіться також

- [sleep()](function.sleep.md) - Затримка виконання
- [usleep()](function.usleep.md) - Затримка виконання в
мікросекундах
- [time_sleep_until()](function.time-sleep-until.md) - Відкладає
виконання скрипту до заданого часу
- [set_time_limit()](function.set-time-limit.md) - Обмеження
часу виконання скрипту
