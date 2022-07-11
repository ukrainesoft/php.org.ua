- [«Imagick::edgeImage](imagick.edgeimage.md)
- [Imagick::encipherImage »](imagick.encipherimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Повертає зображення у градаціях сірого з тривимірним ефектом

# Imagick::embossImage

(PECL imagick 2, PECL imagick 3)

Imagick::embossImage — Повертає зображення у градаціях сірого с
тривимірним ефектом

### Опис

public **Imagick::embossImage**(float `$radius`, float `$sigma`): bool

Повертає зображення у градаціях сірого із тривимірним ефектом. Ми
згортаємо зображення за допомогою гаусівського оператора заданого
радіуса та стандартного відхилення (сигма). Для отримання розумних
результатів радіус повинен бути більшим за сигму. Використовуйте радіус 0 і він
буде вибрано автоматично.

### Список параметрів

`radius`
Радіус ефекту

`sigma`
Сигма ефекту

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Помилки

Викликає ImagickException у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **Imagick::embossImage()****

` <?phpfunction embossImage($imagePath, $radius, $sigma) {   $imagick u003d new \Imagick(realpath($imagePath)); $imagick->embossImage($radius, $sigma); header("Content-Type: image/jpg"); echo $imagick->getImageBlob();}?> `
