- [«tidy](class.tidy.md)
- [tidy::cleanRepair »](tidy.cleanrepair.md)

- [PHP Manual](index.md)
- [Tidy] (class.tidy.md)
- Повертає об'єкт tidyNode, починаючи з тега \<body\> розібраного
tidy-дерева

# tidy::body

# tidy_get_body

(PHP 5, PHP 7, PHP 8, PECL tidy 0.5.2-1.0)

tidy::body -- tidy_get_body — Повертає об'єкт
[tidyNode](class.tidynode.md), починаючи з тега \<body\> розібраного
tidy-дерева

### Опис

Об'єктно-орієнтований стиль

public **tidy::body**(): ?[tidyNode](class.tidynode.md)

Процедурний стиль

**tidy_get_body**([tidy](class.tidy.md) `$tidy`):
?[tidyNode](class.tidynode.md)

Повертає об'єкт [tidyNode](class.tidynode.md), починаючи з тега
\<body\> розібраного tidy-дерева.

### Список параметрів

`tidy`
Об'єкт [Tidy](class.tidy.md).

### Значення, що повертаються

Повертає об'єкт [tidyNode](class.tidynode.md), починаючи з тега
\<body\> розібраного tidy-дерева.

### Приклади

**Приклад #1 Приклад використання **tidy::getBody()****

` <?php$html u003d '<html>  <head>   <title>тест</title>  </head>  <body>    <p>параграф</p>  </body></html>';$tidy u003d tidy_parse_string($html);$body u003d $tidy->Body();echo $body->value;?> `

Результат виконання цього прикладу:

<body>
<p>параграф</p>
</body>

### Дивіться також

- [tidy::head()](tidy.head.md) - Повертає об'єкт tidyNode, починаючи
з тега \<head\> розібраного tidy-дерева
- [tidy::html()](tidy.md.md) - Повертає об'єкт tidyNode, починаючи
з тега \<html\> розібраного tidy-дерева
