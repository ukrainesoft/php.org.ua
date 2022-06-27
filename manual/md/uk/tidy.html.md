- [« tidy::head](tidy.head.md)
- [tidy::isXhtml »](tidy.isxhtml.md)

- [PHP Manual](index.md)
- [Tidy] (class.tidy.md)
- Повертає об'єкт tidyNode, починаючи з тега \<html\> розібраного
tidy-дерева

# tidy::html

#tidy_get_html

(PHP 5, PHP 7, PHP 8, PECL tidy 0.5.2-1.0.0)

tidy::html -- tidy_get_html — Повертає об'єкт
[tidyNode](class.tidynode.md), починаючи з тега \<html\> розібраного
tidy-дерева

### Опис

Об'єктно-орієнтований стиль

public **tidy::html**(): ?[tidyNode](class.tidynode.md)

Процедурний стиль

**tidy_get_html**([tidy](class.tidy.md) `$tidy`):
?[tidyNode](class.tidynode.md)

Повертає об'єкт [tidyNode](class.tidynode.md), починаючи з тега
\<html\> розібраного tidy-дерева.

### Список параметрів

`tidy`
Об'єкт [Tidy](class.tidy.md).

### Значення, що повертаються

Повертає об'єкт [tidyNode](class.tidynode.md).

### Приклади

**Приклад #1 Приклад використання **tidy::html()****

` <?php$html u003d '<html>  <head>    <title>тест</title>  </head>  <body>    <p>параграф</p>  </body></html>';$tidy u003du003d tidy_parse_string($html);$html u003d $tidy->html();echo $html->value;?> `

Результат виконання цього прикладу:

<html>
<head>
<title>тест</title>
</head>
<body>
<p>параграф</p>
</body>
</html>

### Дивіться також

- [tidy::body()](tidy.body.md) - Повертає об'єкт tidyNode, починаючи
з тега \<body\> розібраного tidy-дерева
- [tidy::head()](tidy.head.md) - Повертає об'єкт tidyNode, починаючи
з тега \<head\> розібраного tidy-дерева
