- [« PharData::extractTo](phardata.extractto.md)
- [PharData::offsetSet »](phardata.offsetset.md)

- [PHP Manual](index.md)
- [PharData](class.phardata.md)
- Перевірити, чи можна модифікувати tar/zip-архів

# PharData::isWritable

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL phar u003d 2.0.0)

PharData::isWritable — Перевірити, чи можна модифікувати tar/zip-архів

### Опис

public **PharData::isWritable**(): bool

Цей метод повертає **`true`**, якщо tar/zip-архів існує та
доступний для запису. На відміну від
[Phar::isWritable()](phar.iswritable.md), tar/zip-архіви з даними
можна змінювати навіть якщо `phar.readonly` встановлений у `1`.

### Список параметрів

Параметри відсутні.

### Значення, що повертаються

Повертає **`true`** або **`false`**

### Дивіться також

- [Phar::canWrite()](phar.canwrite.md) - Перевіряє, чи підтримує
модуль phar збереження та створення phar-архівів
- [Phar::isWritable()](phar.iswritable.md) - Перевіряє, чи можливо
модифікувати phar-архів
