- [«get_headers](function.get-headers.md)
- [http_build_query »](function.http-build-query.md)

- [PHP Manual](index.md)
- [Функції URL](ref.url.md)
- Витягує вміст всіх метатегів з файлу та повертає масив

#get_meta_tags

(PHP 4, PHP 5, PHP 7, PHP 8)

get_meta_tags — Витягує вміст усіх метатегів з файлу та
повертає масив

### Опис

**get_meta_tags**(string `$filename`, bool `$use_include_path` u003d
**`false`**): array\|false

Відкриває `filename` і розбирає його рядками у пошуках тегів
\<meta\>. Розбір файлу зупиняється на тегу `</head>`.

### Список параметрів

`filename`
Шлях до HTML-файлу у вигляді рядка. Може бути як локальним файлом, так і
URL.

**Приклад #1 Що обробляє функція **get_meta_tags()****

```htmlcode
<meta nameu003d"author" contentu003d"name">
<meta nameu003d"keywords" contentu003d"php documentation">
<meta nameu003d"DESCRIPTION" contentu003d"a php manual">
<meta nameu003d"geo.position" contentu003d"49.33;-86.59">
</head> <!-- розбір файлу буде зупинено тут -->
````

`use_include_path`
Якщо `use_include_path` дорівнює **`true`**, PHP шукатиме файл
використовуючи стандартні шляхи пошуку з директиви `php.ini`
[include_path](ini.core.md#ini.include-path). Це актуально лише для
локальних файлів, але не URL.

### Значення, що повертаються

Повертає асоціативний масив із значеннями розібраних метатегів.

Значення атрибута name стає ключем масиву, а значення атрибута
content – значенням цього елемента. Ви можете використовувати стандартні
функції роботи з масивами для обходу чи доступу до конкретних
значенням. Спеціальні символи в іменах (ключах масиву) замінюються на
'\_', і ключі наводяться до нижнього регістру. Якщо два метатеги мають
однакові імена, буде повернено лише останній.

Повертає **`false`** у разі виникнення помилки.

### Приклади

**Приклад #2 Що повертає функція **get_meta_tags()****

`<?php// Припустимо, вказані вище метатеги розташовані на www.example.com$tags u003d get_meta_tags('http://www.example.com/');// Зверніть увага, у // а точки ('.') в ключах замінені на '_'echo $tags['author']; // nameecho $tags['keywords']; // php documentationecho $tags['description']; // a php manualecho $tags['geo_position']; // 49.33;-86.59?> `

### Примітки

> **Примітка**:
>
> Обробляються лише метатеги з атрибутом name. Лапки не потрібні.

### Дивіться також

- [htmlentities()](function.mdentities.md) - Перетворює всі
можливі символи у відповідні HTML-сутності
- [urlencode()](function.urlencode.md) - URL-кодування рядка
