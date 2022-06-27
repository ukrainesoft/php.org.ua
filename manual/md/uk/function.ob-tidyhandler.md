- [« Tidy] (ref.tidy.md)
- [tidy_access_count »](function.tidy-access-count.md)

- [PHP Manual](index.md)
- [Tidy](ref.tidy.md)
- Функція зворотного виклику ob_start для відновлення буфера

#ob_tidyhandler

(PHP 5, PHP 7, PHP 8)

ob_tidyhandler — Функція зворотного виклику ob_start для відновлення
буфера

### Опис

**ob_tidyhandler**(string `$input`, int `$mode` u003d ?): string

Функція зворотного виклику [ob_start()](function.ob-start.md)
відновлення буфера.

### Список параметрів

`input`
Буфер.

`mode`
Режим буфера

### Значення, що повертаються

Повертає видозмінений буфер.

### Приклади

**Приклад #1 Приклад використання **ob_tidyhandler()****

` <?phpob_start('ob_tidyhandler');echo '<p>test</i>';?> `

Результат виконання цього прикладу:

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 3.2//EN">
<html>
<head>
<title></title>
</head>
<body>
<p>test</p>
</body>
</html>

### Дивіться також

- [ob_start()](function.ob-start.md) - Увімкнення буферизації виводу
