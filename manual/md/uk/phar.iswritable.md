- [« Phar::isValidPharFilename](phar.isvalidpharfilename.md)
- [Phar::loadPhar »](phar.loadphar.md)

- [PHP Manual](index.md)
- [Phar](class.phar.md)
- Перевіряє, чи можна модифікувати phar-архів

# Phar::isWritable

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL phar u003d 2.0.0)

Phar::isWritable — Перевіряє, чи можна модифікувати phar-архів

### Опис

public **Phar::isWritable**(): bool

Цей метод повертає **`true`**, якщо `phar.readonly` встановлений у `0`,
архів існує та доступний для запису.

### Список параметрів

Параметрів немає.

### Значення, що повертаються

Повертає **`true`**, якщо архів можна модифікувати

### Дивіться також

- [Phar::canWrite()](phar.canwrite.md) - Перевіряє, чи підтримує
модуль phar збереження та створення phar-архівів
- [PharData::isWritable()](phardata.iswritable.md) - Перевірити,
можна модифікувати tar/zip-архів
