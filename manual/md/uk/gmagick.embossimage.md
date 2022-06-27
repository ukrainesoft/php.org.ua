- [«Gmagick::edgeimage](gmagick.edgeimage.md)
- [Gmagick::enhanceimage »](gmagick.enhanceimage.md)

- [PHP Manual](index.md)
- [Gmagick](class.gmagick.md)
- Повертає зображення у градаціях сірого з тривимірним ефектом

# Gmagick::embossimage

(PECL gmagick \>u003d Unknown)

Gmagick::embossimage — Повертає зображення в градаціях сірого с
тривимірним ефектом

### Опис

public **Gmagick::embossimage**(float `$radius`, float `$sigma`):
[Gmagick](class.gmagick.md)

Повертає зображення у градаціях сірого із тривимірним ефектом. Ми
згортаємо зображення за допомогою оператора гауса, заданого
радіуса та стандартного відхилення (сигма). Для отримання розумних
результатів радіус повинен бути більшим за сигму. При використанні радіусу
0, відповідний радіус вибереться автоматично.

### Список параметрів

`radius`
Радіус ефекту.

`sigma`
Сигма ефект.

### Значення, що повертаються

Рельєфний об'єкт [Gmagick](class.gmagick.md).

### Помилки

Викликає **GmagickException** у разі виникнення помилки.
