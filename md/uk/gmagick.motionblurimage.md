- [«Gmagick::modulateimage](gmagick.modulateimage.md)
- [Gmagick::newimage »](gmagick.newimage.md)

- [PHP Manual](index.md)
- [Gmagick](class.gmagick.md)
- Імітує розмиття під час руху

# Gmagick::motionblurimage

(PECL gmagick \>u003d Unknown)

Gmagick::motionblurimage — Імітує розмиття під час руху

### Опис

public **Gmagick::motionblurimage**(float `$radius`, float `$sigma`,
float `$angle`): [Gmagick](class.gmagick.md)

Імітує розмиття під час руху. Згортає зображення за допомогою
гаусівського оператора заданого радіусу та стандартного відхилення
(Sigma). Для отримання прийнятних результатів radius має бути більшим
sigma. При використанні значення radius, що дорівнює 0,
**Gmagick::motionblurimage()** вибере для вас відповідний радіус.
Параметр angle визначає кут розмиття руху.

### Список параметрів

`radius`
Радіус у пікселях, крім центрального пікселя.

`sigma`
Стандартне відхилення у пікселях.

`angle`
Кут, під яким застосовується ефект.

### Значення, що повертаються

Об'єкт [Gmagick](class.gmagick.md) у разі успішного виконання.

### Помилки

Викликає **GmagickException** у разі виникнення помилки.
