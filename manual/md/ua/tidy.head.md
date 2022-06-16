- [« tidy::getStatus](tidy.getstatus.md)
- [tidy::html »](tidy.md.md)

- [PHP Manual](index.md)
- [Tidy] (class.tidy.md)
- Повертає об'єкт tidyNode, починаючи з тега \<head\> розібраного
tidy-дерева

# tidy::head

# tidy_get_head

(PHP 5, PHP 7, PHP 8, PECL tidy 0.5.2-1.0.0)

tidy::head -- tidy_get_head — Повертає об'єкт
[tidyNode](class.tidynode.md), починаючи з тега \<head\> розібраного
tidy-дерева

### Опис

Об'єктно-орієнтований стиль

public **tidy::head**(): ?[tidyNode](class.tidynode.md)

Процедурний стиль

**tidy_get_head**([tidy](class.tidy.md) `$tidy`):
?[tidyNode](class.tidynode.md)

Повертає об'єкт [tidyNode](class.tidynode.md), починаючи з тега
\<head\> розібраного tidy-дерева.

### Список параметрів

`tidy`
Об'єкт [Tidy](class.tidy.md).

### Значення, що повертаються

Повертає об'єкт [tidyNode](class.tidynode.md).

### Приклади

**Приклад #1 Приклад використання **tidy::head()****

` <?php$html u003d '<html>  <head>   <title>тест</title>  </head>  <body>    <p>параграф</p>  </body></html>';$tidy u003d tidy_parse_string($html);$head u003d $tidy->head();echo $head->value;?> `

Результат виконання цього прикладу:

<head>
<title>тест</title>
</head>

### Дивіться також

- [tidy::body()](tidy.body.md) - Повертає об'єкт tidyNode, починаючи
з тега \<body\> розібраного tidy-дерева
- [tidy::html()](tidy.md.md) - Повертає об'єкт tidyNode, починаючи
з тега \<html\> розібраного tidy-дерева
