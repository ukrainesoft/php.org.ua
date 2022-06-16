- [«
ZipArchive::registerCancelCallback](ziparchive.registercancelcallback.md)
- [ZipArchive::renameIndex »](ziparchive.renameindex.md)

- [PHP Manual](index.md)
- [ZipArchive](class.ziparchive.md)
- Реєструє callback-функцію для надання оновлень при
закриття архіву

# ZipArchive::registerProgressCallback

(PHP \>u003d 8.0.0, PECL zip \>u003d 1.17.0)

ZipArchive::registerProgressCallback — Реєструє callback-функцію для
надання оновлень під час закриття архіву

### Опис

public **ZipArchive::registerProgressCallback**(float `$rate`,
[callable](language.types.callable.md) `$callback`): bool

Реєструє `callback`-функцію для надання оновлень при
закриття архіву.

### Список параметрів

`rate`
Зміна між кожним викликом callback-функції (від 0,0 до 1,0).

`callback`
Функція буде отримувати поточний стан (state) у вигляді числа з
плаваючою точкою (float) (від 0,0 до 1,0).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

У цьому прикладі створюється ZIP-архів `php.zip` та відображається прогресія.

**Приклад #1 Архівація файлу**

` $zip u003d new ZipArchive();if ($zip->open('php.zip', ZipArchive::CREATE | ZipArchive::OVERWRITE)) {    $zip->addFile(PHP_BINARY, ' $zip->registerProgressCallback(0.05, function ($r) {         printf("%d%%
", $r * 100);    });    $zip->close();}`

### Примітки

> **Примітка**:
>
> Функція доступна, якщо PHP скомпільовано з libzip ≥ 1.6.0.

### Дивіться також

- [ZipArchive::registerCancelCallback()](ziparchive.registercancelcallback.md) -
Реєструє callback-функцію для дозволу скасування під час
закриття архіву
