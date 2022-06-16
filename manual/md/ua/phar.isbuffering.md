- [« Phar::interceptFileFuncs](phar.interceptfilefuncs.md)
- [Phar::isCompressed »](phar.iscompressed.md)

- [PHP Manual](index.md)
- [Phar](class.phar.md)
- Перевірити, чи будуть операції з Phar-архівом буферизовані
записані безпосередньо на диск

# Phar::isBuffering

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL phar u003d 1.0.0)

Phar::isBuffering — Перевірити, чи будуть операції з Phar-архівом
буферизовані або записані безпосередньо на диск

### Опис

public **Phar::isBuffering**(): bool

Перевіряє, чи будуть операції з Phar-архівом відразу записані на диск
для цього треба викликати
[Phar::stopBuffering()](phar.stopbuffering.md).

Настроювання буферизації індивідуальні для кожного архіву. Увімкнена
буферизація для `foo.phar` ніяк не впливає на режим роботи з `bar.phar`.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`** або **`false`**.

### Приклади

**Приклад #1 Приклад використання **Phar::isBuffering()****

` <?php$p u003d new Phar(dirname(__FILE__) . '/brandnewphar.phar', 0, 'brandnewphar.phar');$p2 u003d new Phar('existingphar.phar');$p['file1. txt'] u003d 'hi';var_dump($p->isBuffering());var_dump($p2->isBuffering());?>u003d2u003d<?php$p->startBuffering();var_dump($p ->isBuffering());var_dump($p2->isBuffering());$p->stopBuffering();?>u003d3u003d<?phpvar_dump($p->isBuffering());var_dump($p2-> isBuffering());?> `

Результат виконання цього прикладу:

bool(false)
bool(false)
u003d2u003d
bool(true)
bool(false)
u003d3u003d
bool(false)
bool(false)

### Дивіться також

- [Phar::startBuffering()](phar.startbuffering.md) - Запускає
буферизацію операцій запису, відключаючи запис змін Phar-архіву
на диск
- [Phar::stopBuffering()](phar.stopbuffering.md) - Зупиняє
буферизацію та записує всі зміни на диск
