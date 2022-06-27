- [« Imagick::setProgressMonitor](imagick.setprogressmonitor.md)
- [Imagick::setResolution »](imagick.setresolution.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Опис

# Imagick::setRegistry

(PECL imagick 3 \>u003d 3.3.0)

Imagick::setRegistry — Опис

### Опис

public static **Imagick::setRegistry**(string `$key`, string `$value`):
bool

Встановлює запис реєстру ImageMagick з ім'ям key значення.
Найбільш корисно для встановлення тимчасового шляху, який визначає, де
ImageMagick створює часові зображення, наприклад, при обробці
PDF-файли.

### Список параметрів

`key`

`value`

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.
