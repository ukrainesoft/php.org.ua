- [«
ZipArchive::isEncryptionMethodSupported](ziparchive.isencryptionmethoddupported.md)
- [ZipArchive::open »](ziparchive.open.md)

- [PHP Manual](index.md)
- [ZipArchive](class.ziparchive.md)
- Повертає індекс елемента до архіву

# ZipArchive::locateName

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8, PECL zip \>u003d 1.5.0)

ZipArchive::locateName — Повертає індекс елемента до архіву

### Опис

public **ZipArchive::locateName**(string `$name`, int `$flags` u003d 0):
int\|false

Знаходить елемент на його ім'я.

### Список параметрів

`name`
Назва елемента для пошуку.

`flags`
Прапори, що визначаються бітовою маскою з наступних значень, або 0 для ні
одного з них.

- **`ZipArchive::FL_NOCASE`**

- **`ZipArchive::FL_NODIR`**

### Значення, що повертаються

Повертає індекс елемента у разі успішного виконання або **`false`**
у разі виникнення помилки.

### Приклади

**Приклад #1 Створюється архів і потім використовується метод
**ZipArchive::locateName()****

` <?php$file u003d 'testlocate.zip';$zip u003d new ZipArchive;if ($zip->open($file, ZipArchive::CREATE) !u003du003d TRUE) {    exit('помилка');} zip->addFromString('entry1.txt', 'entry #1');$zip->addFromString('entry2.txt', 'entry #2');$zip->addFromString('dir/entry2d.txt' , 'entry #2');if ($zip->status !u003du003d ZipArchive::ER_OK) {    echo "Помилка запису в zip
";}$zip->close();if($zip->open($file) !u003du003d TRUE) {    exit('помилка');}echo $zip->locateName('entry1.txt') . "
";echo $zip->locateName('eNtry2.txt') . "
";echo $zip->locateName('eNtry2.txt', ZipArchive::FL_NOCASE) . "
";echo $zip->locateName('enTRy2d.txt', ZipArchive::FL_NOCASE|ZipArchive::FL_NODIR) . "
";$zip->close();?> `

Результат виконання цього прикладу:

    0

1
2
