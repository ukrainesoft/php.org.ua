- [« Міграція з PHP 8.0.x на PHP 8.1.x](migration81.md)
- [Нові класи та інтерфейси »](migration81.new-classes.md)

- [PHP Manual](index.md)
- [Міграція з PHP 8.0.x на PHP 8.1.x](migration81.md)
- Нова функціональність

## Нова функціональність

### Ядро PHP

#### Літерний префікс вісімкових цілих чисел

Восьмеричні цілі числа тепер можуть використати явний префікс
`0o`/`0O` в цілісних літералах, аналогічно двійковим і
шістнадцятковим цілим літералам.

`<?php014; //Восьмеричний літерал без префіксу0o14; // Восьмеричний літерал з префіксом?> `

#### Розпакування масиву за допомогою рядкових ключів

Додано підтримку [розпакування масивів з рядковими
ключами](language.types.array.md#language.types.array.unpacking).

` <?php$arr1 u003d [1, 'a' u003d> 'b'];$arr2 u003d [...$arr1, 'c' u003d> 'd']; //[1, 'a' u003d> 'b', 'c' u003d> 'd']?> `

#### Іменований аргумент після розпакування аргументу

Тепер можна вказати іменовані аргументи після розпакування аргументів.
наприклад: foo(...$args, named: $arg).

#### Ключ з повним шляхом при завантаженні файлів

При завантаженні файлів з'явився новий ключ full_path, який містить
повний шлях (а не лише відносний) завантаженого файлу. Призначений
для використання разом з HTML-атрибутом webkitdirectory.

#### Перерахування

Додано підтримку [перерахувань](language.enumerations.md).

#### Файбери

Додано підтримку [файберів](language.fibers.md).

#### Callback-функції як об'єкти першого класу

Замикання для callback-функцій тепер можна створювати за допомогою
синтаксису `myFunc(...)`, який ідентичний [синтаксису
`Closure::fromCallable('myFunc')`](functions.first_class_callable_syntax.md).

> **Примітка**: `...` є частиною синтаксису, а не перепусткою.

#### Перетин типів

Додано підтримку [перетину
типів](language.types.declarations.md#language.types.declarations.composite.intersection).

**Застереження**

[Перетинання
типів](language.types.declarations.md#language.types.declarations.composite.intersection)
не можна використовувати разом з [об'єднаними
типами](language.types.declarations.md#language.types.declarations.composite.union).

#### Тип never

Доданий новий тип значення, що повертається never. Тип вказує на те,
що функція або викликає [exit()](function.exit.md), або викидає
виняток, або завершується.

#### [`new`](language.oop5.basic.md#language.oop5.basic.new) в ініціалізації класу

Тепер можна використовувати вирази `new ClassName()` як
значення за замовчуванням для статичної змінної параметра,
ініціалізаторів глобальних констант і як аргументи атрибутів.
Тепер об'єкти також можна передавати в
[define()](function.define.md).

#### Readonly-властивості

Додана підтримка
[readonly](language.oop5.properties.md#language.oop5.properties.readonly-properties)-властивостей.

#### Остаточні константи класу

Додано підтримку [модифікатора final при визначенні констант
класу](language.oop5.final.md#language.oop5.final.example.php81).
Крім того, константи стандартного інтерфейсу стають
перевизначуваними.

### CURL

Додано опцію **`CURLOPT_DOH_URL`**.

Додані параметри для сертифіката BLOB-об'єкта, доступні з libcurl
\>u003d 7.71.0:

- **`CURLOPT_ISSUERCERT_BLOB`**
- **`CURLOPT_PROXY_ISSUERCERT`**
- **`CURLOPT_PROXY_ISSUERCERT_BLOB`**
- **`CURLOPT_PROXY_SSLCERT_BLOB`**
- **`CURLOPT_PROXY_SSLKEY_BLOB`**
- **`CURLOPT_SSLCERT_BLOB`**
- **`CURLOPT_SSLKEY_BLOB`**

Додано клас [CURLStringFile](class.curlstringfile.md), який
можна використовувати для надсилання файлу з рядка (string), а не з файлу:

` <?php$file u003d new CURLStringFile($data, 'filename.txt', 'text/plain');curl_setopt($curl, CURLOPT_POSTFIELDS, ['file' u003d> $file]);?> `

### FPM

Доданий формат статусу openmetrics. Prometheus може використовувати його
для одержання метрик FPM.

Додано новий пул для диспетчера динамічних процесів під назвою
`pm.max_spawn_rate`. Він дозволяє запускати кілька дочірніх процесів
швидшими темпами, якщо вибрано динамічний pm. Значення по
замовчуванням - `32`, яке раніше було фіксованим значенням.

### GD

Підтримка Avif тепер доступна за допомогою
[imagecreatefromavif()](function.imagecreatefromavif.md) та
[imageavif()](function.imageavif.md), якщо libgd був зібраний з
підтримкою Avif.

### Hash

Наступні функції [hash()](function.hash.md),
[hash_file()](function.hash-file.md) та
[hash_init()](function.hash-init.md) тепер підтримують
додатковий необов'язковий аргумент `options`, який можна
використовуватиме передачі специфічних для алгоритму даних.

#### MurmurHash3

Додано підтримку `MurmurHash3` з підтримкою потокової передачі.
Реалізовано такі варіанти:

- murmur3a, 32-бітний хеш
- murmur3c, 128-розрядний хеш для x86
- murmur3f, 128-розрядний хеш для x64

Початковий стан хешування можна передати за допомогою ключа `seed`
масиві `options`, наприклад:

` <?php$h u003d hash("murmur3f", $data, options: ["seed" u003d> 42]);echo $h, "
";?> `

Допустиме початкове значення знаходиться в діапазоні від `0` до
визначеного платформою значення **`UINT_MAX`**, зазвичай - `4294967295`.

#### xxHash

Додано підтримку `xxHash`. Реалізовано такі варіанти:

- xxh32, 32-bit hash
- xxh64, 64-bit hash
- xxh3, 64-bit hash
- xxh128, 128-bit hash

Початковий стан хешування можна передати за допомогою ключа `seed`
масиві `options`, наприклад:

` <?php$h u003d hash("xxh3", $data, options: ["seed" u003d> 42]);echo $h, "
";?> `

Використання секрету також підтримується шляхом передачі ключа `secret`
в масиві `options`:

` <?php$h u003d hash("xxh3", $data, options: ["secret" u003d> "як мінімум 136 байт секрету"]);echo $h, "
";?> `

Якість секрету користувача має вирішальне значення для якості
хеш результату. Для секрету рекомендується використовувати
максимально можливу ентропію.

### MySQLi

#### Нова INI-директива `mysqli.local_infile_directory`

Додано INI-директиву
[mysqli.local_infile_directory](mysqli.configuration.md#ini.mysqli.local-infile-directory),
за допомогою якої можна вказати каталог, з якого дозволено завантаження
файлів. Це має сенс тільки якщо
[mysqli.allow_local_infile](mysqli.configuration.md#ini.mysqli.allow-local-infile)
не включено, оскільки в цьому випадку дозволено всі каталоги.

#### Прив'язка параметрів під час виконання

Тепер можна прив'язувати параметри, передавши їх у вигляді масиву
[mysqli_stmt::execute()](mysqli-stmt.execute.md). Усі значення будуть
прив'язані як рядки. Дозволено лише спискові масиви. Ця нова
функція недоступна, якщо MySQLi скомпільовано з libmysqlclient.

` <?php$stmt u003d $mysqli->prepare('INSERT INTO users(id, name) VALUES(?,?)');$stmt->execute([1, $username]);?> `

#### Новий метод [mysqli_result::fetch_column()](mysqli-result.fetch-column.md)

Доданий
[mysqli_result::fetch_column()](mysqli-result.fetch-column.md) для
вибірки єдиного скалярного значення набору результатів. новий
метод приймає необов'язковий параметр `column`, що починається з 0,
вигляді цілого числа (int), що вказує з якого стовпця виробляти
вибірку.

` <?php$result u003d $mysqli->query('SELECT username FROM users WHERE id u003d 123');echo $result->fetch_column();?> `

### PDO

Доданий атрибут **`PDO::MYSQL_ATTR_LOCAL_INFILE_DIRECTORY`**, який
можна використовувати для вказівки каталогу, з якого можуть бути
завантажено файли. Це має сенс лише в тому випадку, якщо
**`PDO::MYSQL_ATTR_LOCAL_INFILE`** не включено, оскільки в цьому випадку
дозволено всі каталоги.

### PDO_SQLite

Підтримується новий елемент ``file:`` у DSN-префіксі SQLite, який
дозволяє вказувати додаткові прапори. Він не буде працювати, якщо
включено опцію open_basedir.

` <?phpnew PDO('sqlite:file:path/to/sqlite.db?modeu003dro')?> `

### POSIX

Додані константи **`POSIX_RLIMIT_KQUEUES`** та
**`POSIX_RLIMIT_NPTS`**. Ці обмеження доступні лише у FreeBSD.

### Стандартні функції

[fputcsv()](function.fputcsv.md) тепер приймає новий аргумент
`eol`, який дозволяє визначати послідовність, що настроюється
кінця рядка, значення за замовчуванням залишається незмінним - `"
"`.

### SPL

[SplFileObject::fputcsv()](splfileobject.fputcsv.md) тепер приймає
новий аргумент `eol`, який дозволяє визначати настроювану
послідовність кінця рядка, значення за замовчуванням залишається
колишнім - ``
"`.
