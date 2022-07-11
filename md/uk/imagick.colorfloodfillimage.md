- [« Imagick::coalesceImages](imagick.coalesceimages.md)
- [Imagick::colorizeImage »](imagick.colorizeimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Змінює значення кольору будь-якого пікселя, що відповідає цільовому

# Imagick::colorFloodfillImage

(PECL imagick 2, PECL imagick 3)

Imagick::colorFloodfillImage — Змінює значення кольору будь-якого пікселя,
відповідного цільового

**Увага**

Функція оголошена *УСТАРШЕНОЮ* в Imagick 3.4.4. Покладатись на цю
функцію не рекомендується.

### Опис

public **Imagick::colorFloodfillImage**(
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$fill`,
float `$fuzz`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
$bordercolor,
int `$x`,
int `$y`
): bool

Змінює значення кольору будь-якого пікселя, що відповідає цільовому та
що є найближчим сусідом.

### Список параметрів

`fill`
Об'єкт ImagickPixel, що містить колір заливки.

`fuzz`
Міра заокруглення (fuzz). Наприклад, надайте fuzz значення, що дорівнює 10, і
червоний колір з інтенсивністю 100 та 102 відповідно тепер буде
інтерпретуватися як той самий колір для цілей заливки.

'bordercolor'
Об'єкт ImagickPixel, який містить колір кордону.

`x`
Початкова позиція заливки X.

`y`
Початкова позиція заливання Y.

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Помилки

Викликає ImagickException у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------------------|---------------------------- -------------------------------------------------- -------------------------------------------------- -----------------------------------------|
| PECL imagick 2.1.0 Тепер дозволяє використовувати рядок, що представляє колір, як перший і третій параметри. Попередні версії дозволяли використовувати лише об'єкт ImagickPixel. |
