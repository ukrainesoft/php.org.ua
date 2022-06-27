- [«imagecreatefromstring](function.imagecreatefromstring.md)
- [imagecreatefromwbmp »](function.imagecreatefromwbmp.md)

- [PHP Manual](index.md)
- [Функції GD та функції для роботи із зображеннями](ref.image.md)
- Створює нове зображення із файлу або URL

#imagecreatefromtga

(PHP 7 \>u003d 7.4.0, PHP 8)

imagecreatefromtga — Створення нового зображення з файлу або URL

### Опис

**imagecreatefromtga**(string `$filename`):
[GdImage](class.gdimage.md)\|false

**imagecreatefromtga()** повертає об'єкт зображення, що представляє
зображення, отримане з цього імені файлу.

### Список параметрів

`filename`
Шлях до зображення Truevision TGA.

### Значення, що повертаються

Повертає об'єкт зображення у разі успішного виконання або
**`false`** у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------------------------|
| 8.0.0 | У разі успішного виконання, функція тепер повертає екземпляр [GDImage](class.gdimage.md); раніше повертався ресурс ([resource](language.types.resource.md)). |
