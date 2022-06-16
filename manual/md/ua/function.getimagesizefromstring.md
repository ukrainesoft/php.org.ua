- [«getimagesize](function.getimagesize.md)
- [image_type_to_extension »](function.image-type-to-extension.md)

- [PHP Manual](index.md)
- [Функції GD та функції для роботи із зображеннями](ref.image.md)
- Отримання розміру зображення з рядка даних

#getimagesizefromstring

(PHP 5 \>u003d 5.4.0, PHP 7, PHP 8)

getimagesizefromstring — Отримання розміру зображення з рядка даних

### Опис

**getimagesizefromstring**(string `$string`, array `&$image_info` u003d
**`null`**): array\|false

Функція працює ідентично функції
[getimagesize()](function.getimagesize.md) з тією різницею, що
**getimagesizefromstring()** приймає дані зображення у вигляді рядка
як перший аргумент замість імені файлу.

Щоб уточнити, як функція працює, звертайтеся до документації до
функції [getimagesize()](function.getimagesize.md).

### Список параметрів

`string`
Дані зображення у вигляді рядка.

`image_info`
Дивіться [getimagesize()](function.getimagesize.md).

### Значення, що повертаються

Дивіться [getimagesize()](function.getimagesize.md).

### Приклади

**Приклад #1 Приклад використання **getimagesizefromstring()****

`<?php$img u003d '/path/to/test.png';// Відкрити як файл$size_info1 u003d getimagesize($img);// Відкрити як рядок$data         u003d ($data);?> `

### Дивіться також

- [getimagesize()](function.getimagesize.md) - Отримання розміру
зображення
