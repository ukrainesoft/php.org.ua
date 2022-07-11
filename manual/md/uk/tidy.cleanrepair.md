- [« tidy::body](tidy.body.md)
- [tidy::\_\_construct »](tidy.construct.md)

- [PHP Manual](index.md)
- [Tidy] (class.tidy.md)
- Виконати налаштоване очищення та відновлення розібраної розмітки

# tidy::cleanRepair

# tidy_clean_repair

(PHP 5, PHP 7, PHP 8, PECL tidy u003d 0.5.2)

tidy::cleanRepair -- tidy_clean_repair — Виконати налаштоване очищення та
відновлення розібраної розмітки

### Опис

Об'єктно-орієнтований стиль

public **tidy::cleanRepair**(): bool

Процедурний стиль

**tidy_clean_repair**([tidy](class.tidy.md) `$tidy`): bool

Функція очищає та відновлює отриманий tidy-об'єкт `tidy`.

### Список параметрів

`tidy`
Об'єкт [Tidy](class.tidy.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **tidy::cleanrepair()****

` <?php$html u003d '<p>тест</I>';$tidy u003d tidy_parse_string($html);$tidy->cleanRepair();echo $tidy;?> `

Результат виконання цього прикладу:

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 3.2//EN">
<html>
<head>
<title></title>
</head>
<body>
<p>тест</p>
</body>
</html>

### Дивіться також

- [tidy::repairFile()](tidy.repairfile.md) - Відновлює
розмітку файлу та повертає його у вигляді рядка
- [tidy::repairString()](tidy.repairstring.md) - Відновлює
рядок, використовуючи наскільки можна конфігураційний файл
