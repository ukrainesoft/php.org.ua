- [« Phar::getSupportedSignatures](phar.getsupportedsignatures.md)
- [Phar::hasMetadata »](phar.hasmetadata.md)

- [PHP Manual](index.md)
- [Phar](class.phar.md)
- Отримати версію Phar-архіву

# Phar::getVersion

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL phar u003d 1.0.0)

Phar::getVersion — Отримати версію Phar-архіву

### Опис

public **Phar::getVersion**(): string

Повертає версію API відкритого Phar-архіву.

### Список параметрів

### Значення, що повертаються

Версія API відкритого архіву. Не переплутайте з версією завантаженого API
модуля phar. Кожен Phar-архів має жорстко прописану версію API
допомогою якого його створювали, у маніфесті. Детальну документацію
можна прочитати на сторінці [Формат файлу Phar](phar.fileformat.md).

### Дивіться також

- [Phar::apiVersion()](phar.apiversion.md) - Повертає версію API
