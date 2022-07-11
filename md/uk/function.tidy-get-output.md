- [« tidy_error_count](function.tidy-error-count.md)
- [tidy_warning_count »](function.tidy-warning-count.md)

- [PHP Manual](index.md)
- [Tidy](ref.tidy.md)
- Повертає рядок, який представляє розібрану tidy-розмітку

# tidy_get_output

(PHP 5, PHP 7, PHP 8, PECL tidy u003d 0.5.2)

tidy_get_output - Повертає рядок, що представляє розібраний
tidy-розмітку

### Опис

**tidy_get_output**([tidy](class.tidy.md) `$tidy`): string

Отримати рядок з відновленим HTML.

### Список параметрів

`tidy`
Об'єкт [Tidy](class.tidy.md).

### Значення, що повертаються

Повертає розібрану розмітку.

### Приклади

**Приклад #1 Приклад використання **tidy_get_output()****

` <?php$html u003d '<p>параграф</i>';$tidy u003d tidy_parse_string($html);$tidy->cleanRepair();echo tidy_get_output($tidy);?> `

Результат виконання цього прикладу:

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 3.2//EN">
<html>
<head>
<title></title>
</head>
<body>
<p>параграф</p>
</body>
</html>
