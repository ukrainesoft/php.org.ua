- [« Imagick::setResolution](imagick.setresolution.md)
- [Imagick::setSamplingFactors »](imagick.setsamplingfactors.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- встановлює ліміт для конкретного ресурсу

# Imagick::setResourceLimit

(PECL imagick 2, PECL imagick 3)

Imagick::setResourceLimit — Встановлює ліміт для конкретного ресурсу

### Опис

public static **Imagick::setResourceLimit**(int `$type`, int `$limit`):
bool

Цей метод використовується для зміни ліміту ресурсів вихідної
бібліотеки ImageMagick.

### Список параметрів

`type`
Зверніться до списку [констант
RESOURCETYPE](imagick.constants.md#imagick.constants.resourcetypes).

`limit`
Одна з [констант
RESOURCETYPE](imagick.constants.md#imagick.constants.resourcetypes).
Одиниця виміру залежить від типу ресурсу, що обмежується.

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Дивіться також

- [Imagick::getResourceLimit()](imagick.getresourcelimit.md) -
Повертає заданий ліміт ресурсів
