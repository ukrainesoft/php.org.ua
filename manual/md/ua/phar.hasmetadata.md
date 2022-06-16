- [« Phar::getVersion](phar.getversion.md)
- [Phar::interceptFileFuncs »](phar.interceptfilefuncs.md)

- [PHP Manual](index.md)
- [Phar](class.phar.md)
- Перевірити, чи містить phar-архів глобальні метадані

# Phar::hasMetadata

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL phar u003d 1.2.0)

Phar::hasMetadata — Перевірити, чи містить phar-архів глобальні
метадані

### Опис

public **Phar::hasMetadata**(): bool

Перевіряє, чи phar-архів містить глобальні метадані.

### Список параметрів

Без параметрів.

### Значення, що повертаються

Повертає **`true`** або **`false`**.

### Приклади

**Приклад #1 Приклад використання **Phar::hasMetadata()****

`<?phptry {   $phar u003d new Phar('myphar.phar'); var_dump($phar->hasMetadata()); $phar->setMetadata(array('thing' u003d> 'hi')); var_dump($phar->hasMetadata()); $phar->delMetadata(); var_dump($phar->hasMetadata());} catch (Exception $e) {    // handle error}?> `

Результат виконання цього прикладу:

bool(false)
bool(true)
bool(false)

### Дивіться також

- [Phar::getMetadata()](phar.getmetadata.md) - Витягти метадані
phar-архіву
- [Phar::setMetadata()](phar.setmetadata.md) - Встановити метадані
phar-архіву
- [Phar::delMetadata()](phar.delmetadata.md) - Видалити глобальні
метадані в архіві phar
