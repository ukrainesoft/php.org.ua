- [«getimagesizefromstring](function.getimagesizefromstring.md)
- [image_type_to_mime_type »](function.image-type-to-mime-type.md)

- [PHP Manual](index.md)
- [Функції GD та функції для роботи із зображеннями](ref.image.md)
- Отримання розширення файлу для типу зображення

#image_type_to_extension

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8)

image_type_to_extension — отримання розширення файлу для типу
зображення

### Опис

**image_type_to_extension**(int `$image_type`, bool `$include_dot` u003d
**`true`**): string\|false

Повертає розширення файлу для заданої `IMAGETYPE_XXX` константи.

### Список параметрів

`image_type`
Одна із констант `IMAGETYPE_XXX`.

`include_dot`
Додавати крапку до розширення чи ні. За промовчанням **`true`**.

### Значення, що повертаються

Рядок з розширенням файлу, що відповідає типу зображення або
**`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **image_type_to_extension()****

`<?php// Створення зображення$im u003d imagecreatetruecolor(100, 100);// Збереження зображенняimagepng($im, './test' . image_type_to_extension(IMAGETYPE_PNG));imagedesy

### Примітки

> **Примітка**:
>
> Ця функція не потребує бібліотеки GD.
