- [«
ZipArchive::setEncryptionIndex](ziparchive.setencryptionindex.md)
- [ZipArchive::setExternalAttributesIndex
»](ziparchive.setexternalattributesindex.md)

- [PHP Manual](index.md)
- [ZipArchive](class.ziparchive.md)
- Встановити метод шифрування запису на його ім'я

# ZipArchive::setEncryptionName

(PHP \>u003d 7.2.0, PHP 8, PECL zip \>u003d 1.14.0)

ZipArchive::setEncryptionName — Встановити метод шифрування запису за його
імені

### Опис

public **ZipArchive::setEncryptionName**(string `$name`, int `$method`,
?string `$password` u003d **`null`**): bool

Встановити метод шифрування запису, вказаного на його ім'я.

### Список параметрів

`name`
Назва запису.

`method`
Метод шифрування, заданий однією із констант ZipArchive::EM\_.

`password`
Пароль. Якщо не вказувати, буде використано пароль за замовчуванням.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- ----|
| 8.0.0 | `password` тепер припускає значення null. |

### Приклади

У цьому прикладі створюється ZIP-архів `test.zip`, що містить файл
`test.txt`, зашифрований за допомогою AES 256.

**Приклад #1 Архівуємо та шифруємо файл**

` <?php$zip u003d new ZipArchive();if ($zip->open('test.zip', ZipArchive::CREATE) u003du003du003d TRUE) {    $zip->setPassword('secret'); $zip->addFile('text.txt'); $zip->setEncryptionName('text.txt', ZipArchive::EM_AES_256); $zip->close(); echo "готово
";} else {    echo "помилка
";}?> `

### Примітки

> **Примітка**:
>
> Функція доступна лише якщо скомпільовано за допомогою libzip ≥
>1.2.0.

### Дивіться також

- [ZipArchive::setPassword()](ziparchive.setpassword.md) - Установка
пароля для активного архіву
- [ZipArchive::setEncryptionIndex()](ziparchive.setencryptionindex.md) -
Встановити метод шифрування запису за його індексом
