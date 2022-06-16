- [« Imagick::paintFloodfillImage](imagick.paintfloodfillimage.md)
- [Imagick::paintTransparentImage
»](imagick.painttransparentimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Змінює будь-який піксель, що відповідає кольору

# Imagick::paintOpaqueImage

(PECL imagick 2, PECL imagick 3)

Imagick::paintOpaqueImage — Змінює будь-який піксель, відповідний
кольору

**Увага**

Функція оголошена *УСТАРШЕНОЮ* в Imagick 3.4.4. Покладатись на цю
функцію не рекомендується.

### Опис

public **Imagick::paintOpaqueImage**(
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$target`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$fill`,
float `$fuzz`,
int `$channel` u003d Imagick::CHANNEL_DEFAULT
): bool

Змінює будь-який піксель, який відповідає кольору, на колір, визначений
заливкою.

### Список параметрів

`target`
Змінює цільовий колір на колір заливки зображення. Об'єкт ImagickPixel
або рядок, що становить цільовий колір.

`fill`
Об'єкт ImagickPixel або рядок, який представляє колір заливки.

`fuzz`
Міра заокруглення (fuzz) зображення визначає, наскільки прийнятно
розглядати два кольори як один і той самий.

`channel`
Вкажіть будь-яку константу каналу, яка відповідає вашому режиму
каналу. Щоб застосувати до одного каналу, об'єднайте константи
типу каналу за допомогою бітових операторів. Зверніться до цього списку
[констант каналу](imagick.constants.md#imagick.constants.channel).

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Помилки

Викликає ImagickException у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------------------|---------------------------- -------------------------------------------------- -------------------------------------------------- ----------------|
| PECL imagick 2.1.0 Тепер допускається передавати рядок, що представляє колір, перший і другий параметр. Попередні версії допускали лише об'єкт ImagickPixel. |
