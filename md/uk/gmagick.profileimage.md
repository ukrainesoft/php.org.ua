- [«Gmagick::previousimage](gmagick.previousimage.md)
- [Gmagick::quantizeimage »](gmagick.quantizeimage.md)

- [PHP Manual](index.md)
- [Gmagick](class.gmagick.md)
- Додає або видаляє профіль із зображення

# Gmagick::profileimage

(PECL gmagick \>u003d Unknown)

Gmagick::profileimage — Додає або видаляє профіль із зображення.

### Опис

public **Gmagick::profileimage**(string `$name`, string `$profile`):
[Gmagick](class.gmagick.md)

Додає або видаляє ICC, IPTC або загальний профіль зображення. Якщо
значення profile дорівнює **`null`**, профіль видаляється із зображення,
в іншому випадку додається. Використовуйте значення * для параметра
name і **`null`** для параметра profile, щоб видалити всі профілі з
зображення.

### Список параметрів

`name`
Ім'я профілю, який потрібно додати або видалити: ICC, IPTC або загальний
профіль.

`profile`
Профiль.

### Значення, що повертаються

Об'єкт [Gmagick](class.gmagick.md) у разі успішного виконання.

### Помилки

Викликає **GmagickException** у разі виникнення помилки.
