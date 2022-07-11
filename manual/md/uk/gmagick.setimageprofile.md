- [« Gmagick::setimageiterations](gmagick.setimageiterations.md)
- [Gmagick::setimageredprimary »](gmagick.setimageredprimary.md)

- [PHP Manual](index.md)
- [Gmagick](class.gmagick.md)
- Додає іменований профіль в об'єкт Gmagick

# Gmagick::setimageprofile

(PECL gmagick \>u003d Unknown)

Gmagick::setimageprofile — Додає іменований профіль в об'єкт
Gmagick

### Опис

public **Gmagick::setimageprofile**(string `$name`, string `$profile`):
[Gmagick](class.gmagick.md)

Додає іменований профіль об'єкт Gmagick. Якщо профіль з таким
ім'ям вже існує, він замінюється. Метод відрізняється від методу
Gmagick::profileimage() тим, що він не застосовує колірні профілі CMS.

### Список параметрів

`name`
Ім'я профілю для додавання або видалення: ICC, IPTC або загальний профіль.

`profile`
Профiль.

### Значення, що повертаються

Об'єкт Gmagick у разі успішного виконання.

### Помилки

Викликає **GmagickException** у разі виникнення помилки.
