- [«imagecreate](function.imagecreate.md)
- [imagecreatefrombmp »] (function.imagecreatefrombmp.md)

- [PHP Manual](index.md)
- [Функції GD та функції для роботи із зображеннями](ref.image.md)
- Створює нове зображення із файлу або URL

#imagecreatefromavif

(PHP 8 \>u003d 8.1.0)

imagecreatefromavif — Створення нового зображення з файлу або URL

### Опис

**imagecreatefromavif**(string `$filename`):
[GdImage](class.gdimage.md)\|false

**imagecreatefromavif()** повертає об'єкт зображення, що представляє
зображення, отримане з цього імені файлу.

### Список параметрів

`filename`
Дорога до растрового зображення AVIF.

### Значення, що повертаються

Повертає об'єкт зображення у разі успішного виконання або
**`false`** у разі виникнення помилки.
