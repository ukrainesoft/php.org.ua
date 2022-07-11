- [« Imagick::getResource](imagick.getresource.md)
- [Imagick::getSamplingFactors »](imagick.getsamplingfactors.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Повертає заданий ліміт ресурсів

# Imagick::getResourceLimit

(PECL imagick 2, PECL imagick 3)

Imagick::getResourceLimit — Повертає заданий ліміт ресурсів

### Опис

public static **Imagick::getResourceLimit**(int `$type`): int

Повертає заданий ліміт ресурсів.

### Список параметрів

`type`
Одна з [констант типів
ресурсов](imagick.constants.md#imagick.constants.resourcetypes). Блок
(Unit) залежить від типу обмеженого ресурсу.

### Значення, що повертаються

Повертає заданий ліміт ресурсів у мегабайтах.

### Помилки

Викликає ImagickException у разі виникнення помилки.

### Дивіться також

- [Imagick::setResourceLimit()](imagick.setresourcelimit.md) -
Встановлює ліміт для конкретного ресурсу
