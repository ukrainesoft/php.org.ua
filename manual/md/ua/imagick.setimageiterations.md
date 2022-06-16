- [«
Imagick::setImageInterpolateMethod](imagick.setimageinterpolatemethod.md)
- [Imagick::setImageMatte »](imagick.setimagematte.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Встановлює ітерацію зображення

# Imagick::setImageIterations

(PECL imagick 2, PECL imagick 3)

Imagick::setImageIterations — Встановлює ітерацію зображення

### Опис

public **Imagick::setImageIterations**(int `$iterations`): bool

Встановлює кількість ітерацій, коли анімоване зображення
повторюється.

### Список параметрів

`iterations`
Число ітерацій, які зображення має повторити. Використовуйте
значення '0' для безперервного повторення.

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Помилки

Викликає ImagickException у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **Imagick::setImageIterations()****

` <?php$imagick u003d new Imagick(realpath("Test.gif"));$imagick u003d $imagick->coalesceImages();$imagick->setImageIterations(1);$imagick u003d $imagick->deconstructImages() ;$imagick->writeImages('/path/to/save/OnceOnly.gif', true);?> `
