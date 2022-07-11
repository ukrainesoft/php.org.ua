- [« Imagick::clipPathImage](imagick.clippathimage.md)
- [Imagick::clutImage »](imagick.clutimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Створює точну копію об'єкту Imagick

# Imagick::clone

(PECL imagick 2, PECL imagick 3)

Imagick::clone — Створює точну копію об'єкту Imagick

### Опис

public **Imagick::clone**(): [Imagick](class.imagick.md)

Створює точну копію об'єкту Imagick.

**Увага**

Функція застаріла (*DEPRECATED*) з imagick версії 3.1.0, замість неї
використовуйте ключове слово [clone](language.oop5.cloning.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повернеться копія об'єкту Imagick.

### Список змін

| Версія | Опис |
|--------------------|---------------------------- -------------------------------------------------|
| PECL imagick 3.1.0 | Метод застарів на користь ключового слова [clone] (language.oop5.cloning.md). |

### Приклади

**Приклад #1 Клонування об'єкту Imagick у різних версіях**

`<?php// Клонування об'єкта Imagick в imagick 2.x і 3.0:$newImage u003d $image->clone();// Клонування об'єкта Imagick з версії 3.1.0:$ne
