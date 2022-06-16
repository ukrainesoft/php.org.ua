- [« ZipArchive::setMtimeIndex](ziparchive.setmtimeindex.md)
- [ZipArchive::setPassword »](ziparchive.setpassword.md)

- [PHP Manual](index.md)
- [ZipArchive](class.ziparchive.md)
- Встановити час модифікації файлу на його ім'я

# ZipArchive::setMtimeName

(PHP \>u003d 8.0.0, PECL zip \>u003d 1.16.0)

ZipArchive::setMtimeName — Встановити час модифікації файлу на його
імені

### Опис

public **ZipArchive::setMtimeName**(string `$name`, int `$timestamp`,
int `$flags` u003d 0): bool

Встановити час модифікації файлу на ім'я.

### Список параметрів

`name`
Ім'я файлу.

`timestamp`
Час модифікації (тимчасова мітка unix) файлу.

`flags`
Необов'язкові прапори. На даний момент не використовуються.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

Приклад створення ZIP-архіву `test.zip`, додавання до нього файлу
`test.txt` та встановлення часу модифікації для нього.

**Приклад #1 Архівування файлу**

` <?php$zip u003d new ZipArchive();if ($zip->open('test.zip', ZipArchive::CREATE) u003du003du003d TRUE) {    $zip->addFile('text.txt'); $zip->setMtimeName('text.txt', mktime(0,0,0,12,25,2019)); $zip->close(); echo "Ok
";} else {    echo "KO
";}?> `

### Примітки

> **Примітка**:
>
> Функція доступна, лише якщо збірка була з libzip ≥ 1.0.0.

### Дивіться також

- [ZipArchive::setMtimeIndex()](ziparchive.setmtimeindex.md) -
Встановити час модифікації файлу за його індексом
