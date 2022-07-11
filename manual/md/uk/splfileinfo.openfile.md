- [« SplFileInfo::isWritable](splfileinfo.iswritable.md)
- [SplFileInfo::setFileClass »](splfileinfo.setfileclass.md)

- [PHP Manual](index.md)
- [SplFileInfo](class.splfileinfo.md)
- Отримує об'єкт SplFileObject для файлу

# SplFileInfo::openFile

(PHP 5 \>u003d 5.1.2, PHP 7, PHP 8)

SplFileInfo::openFile — Отримує об'єкт SplFileObject для файлу

### Опис

public **SplFileInfo::openFile**(string `$mode` u003d "r", bool
`$useIncludePath` u003d **`false`**, ?resource `$context` u003d **`null`**):
[SplFileObject](class.splfileobject.md)

Створює об'єкт (object) [SplFileObject](class.splfileobject.md) файлу.
Це корисно, тому що [SplFileObject](class.splfileobject.md)
містить додаткові методи для роботи з файлом, у той час як
[SplFileInfo](class.splfileinfo.md) корисний лише для отримання
інформації, наприклад, чи файл для запису.

### Список параметрів

`mode`
Режим відкриття файлу. Дивіться документацію з
[fopen()](function.fopen.md) із описом можливих режимів. за
замовчуванням тільки для читання.

`useIncludePath`
Якщо встановлено в **`true`**, ім'я файлу також шукається в
[include_path](ini.core.md#ini.include-path)

`context`
Для опису `контекстів` зверніться до наступного розділу посібника:
[контекст](context.md).

### Значення, що повертаються

Відкритий файл як об'єкт (object)
[SplFileObject](class.splfileobject.md).

### Помилки

Викидає [RuntimeException](class.runtimeexception.md), якщо файл
не може бути відкрито (наприклад, недостатньо прав доступу).

### Список змін

| Версія | Опис |
|--------|---------------------------------------- ---|
| 8.0.0 | 'context' тепер допускає значення null. |

### Приклади

**Приклад #1 Приклад використання **SplFileInfo::openFile()****

` <?php$fileinfo u003d new SplFileInfo('/tmp/foo.txt');if ($fileinfo->isWritable()) {   $fileobj u003d $fileinfo->openFile('a'); $fileobj->fwrite("зразок тексту");}?> `

### Дивіться також

- [SplFileObject](class.splfileobject.md)
- [stream_context_create()](function.stream-context-create.md) -
Створює контекст потоку
- [fopen()](function.fopen.md) - Відкриває файл або URL
