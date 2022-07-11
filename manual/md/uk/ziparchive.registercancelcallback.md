- [« ZipArchive::open](ziparchive.open.md)
- [ZipArchive::registerProgressCallback
»](ziparchive.registerprogresscallback.md)

- [PHP Manual](index.md)
- [ZipArchive](class.ziparchive.md)
- Реєструє callback-функцію для дозволу скасування під час
закриття архіву

# ZipArchive::registerCancelCallback

(PHP \>u003d 8.0.0, PECL zip \>u003d 1.17.0)

ZipArchive::registerCancelCallback — Реєструє callback-функцію для
дозволу скасування під час закриття архіву

### Опис

public
**ZipArchive::registerCancelCallback**([callable](language.types.callable.md)
`$callback`): bool

Реєструє callback-функцію для дозволу скасування під час закриття
архів.

### Список параметрів

`callback`
Якщо функція поверне 0, операція продовжиться, за іншого значення вона
буде скасовано.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

У цьому прикладі створюється ZIP-архів `php.zip` та скасовується операція при
деяких умовах запуску.

**Приклад #1 Архівація файлу**

` <?php$zip u003d new ZipArchive();if ($zip->open('php.zip', ZipArchive::CREATE | ZipArchive::OVERWRITE)) {    $zip->addFile(PHP_BINA ; $zip->registerCancelCallback(function () {        return ($someruncondition ? -1 :1):    }); $zip->close();} `

### Примітки

> **Примітка**:
>
> Функція доступна, якщо PHP скомпільовано з libzip ≥ 1.6.0.

### Дивіться також

- [ZipArchive::registerProgressCallback()](ziparchive.registerprogresscallback.md) -
Реєструє callback-функцію для надання оновлень при
закриття архіву
