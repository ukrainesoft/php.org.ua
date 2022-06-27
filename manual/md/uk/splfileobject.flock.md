- [« SplFileObject::fgetss](splfileobject.fgetss.md)
- [SplFileObject::fpassthru »](splfileobject.fpassthru.md)

- [PHP Manual](index.md)
- [SplFileObject](class.splfileobject.md)
- Портоване блокування файлу

# SplFileObject::flock

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

SplFileObject::flock — Портоване блокування файлу

### Опис

public **SplFileObject::flock**(int `$operation`, int `&$wouldBlock` u003d
**`null`**): bool

Блокує або розблокує файл тим же портованим способом, що і
[flock()](function.flock.md).

### Список параметрів

`operation`
`operation` може приймати такі значення:

- **`LOCK_SH`** для отримання блокування (читання).
- **`LOCK_EX`** для отримання ексклюзивного блокування (запис).
- **`LOCK_UN`** для зняття блокування (розділюваного або ексклюзивного).

Також можна додати **`LOCK_NB`** як бітову маску до однієї
з вищезгаданих операцій, якщо [flock()](function.flock.md) не повинен
блокуватись під час спроби блокування.

`wouldBlock`
Буде встановлено **`true`**, якщо блокування буде блокуючим (код
помилки EWOULDBLOCK).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **SplFileObject::flock()****

` <?php$file u003d new SplFileObject("/tmp/lock.txt", "w");if ($file->flock(LOCK_EX)) { // виконуємо ексклюзивне блокування    $file->ftruncate(0 // очищаємо файл    $file->fwrite("Що-небудь пишем|сюди
");   $file->flock(LOCK_UN);  // знімаємо блокування} else {    echo "Не удалося отримати блокування!";}?> `

### Дивіться також

- [flock()](function.flock.md) - Портована консультативна
блокування файлів
