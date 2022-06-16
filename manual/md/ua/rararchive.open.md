- [« RarArchive::isSolid](rararchive.issolid.md)
- [RarArchive::setAllowBroken »](rararchive.setallowbroken.md)

- [PHP Manual](index.md)
- [RarArchive](class.rararchive.md)
- Відкриває архів RAR

# RarArchive::open

#rar_open

(PECL rar \>u003d 2.0.0)

RarArchive::open -- rar_open — Відкриває архів RAR

### Опис

Об'єктно-орієнтований стиль (метод):

public static **RarArchive::open**(string `$filename`, string
`$password` u003d NULL, [callable](language.types.callable.md)
`$volume_callback` u003d NULL): [RarArchive](class.rararchive.md)\|false

Процедурний стиль:

**rar_open**(string `$filename`, string `$password` u003d NULL,
[callable](language.types.callable.md) `$volume_callback` u003d NULL):
[RarArchive](class.rararchive.md)\|false

Відкриває зазначений RAR-архів та повертає об'єкт
[RarArchive](class.rararchive.md), що представляє його.

> **Примітка**:
>
> При відкритті багатотомного архіву шлях до першого тому має бути
> передано першим параметром. Інакше не буде видно всіх файлів.

### Список параметрів

`filename`
Шлях до архіву Rar.

`password`
Пароль, якщо потрібно розшифрувати заголовки архіву. Цей же пароль
буде використовуватись за замовчуванням, якщо будуть знайдені зашифровані
файли. Зверніть увагу, що файли можуть бути зашифровані з різними паролями.

`volume_callback`
Функція, якою передається єдиний параметр – шлях до того, що
не був знайдений, і повертає рядок із правильним шляхом для цього тому
або **`null`**, якщо цей том не існує або невідомий.
Розробник повинен бути впевнений, що ця функція не призведе до
зациклювання, оскільки вона викликається повторно, якщо шлях отриманий
попереднім викликом відповідає потрібному тому. Вказівка цього
параметра усуває попередження, які з'являлися б, якби тому
не було б знайдено. Якщо функція повертає тільки **`null`**,
то не буде жодного попередження.

**Увага**

До версії 2.0.0 ця функція не обробляла правильно.
шляхи. У такому разі використовуйте [realpath()](function.realpath.md).

### Значення, що повертаються

Повертає запитуваний об'єкт [RarArchive](class.rararchive.md) або
**`false`** у разі виникнення помилки.

### Список змін

| Версія | Опис |
|----------------|-------------------------------- -|
| PECL rar 3.0.0 | Було додано `volume_callback`. |

### Приклади

**Приклад #1 Об'єктно-орієнтований стиль**

` <?php$rar_arch u003dRarArchive::open('encrypted_headers.rar', 'samplepassword');if ($rar_arch u003du003du003du003dFALSE)   die("Невдале відкриття файлу");$$ );if ($entries u003du003du003d FALSE)    die("Невдале отримання записів");echo "Знайдено " . count($entries) . "Файлів.
";if (empty($entries))    die("Не найдено коректних записів.");$stream u003dreset($entries)->getStream();if ($stream u003du003du003d FALSE)  пере  die("Недач| файлу");$rar_arch->close();echo "Вміст першого файлу:
";echo stream_get_contents($stream);fclose($stream);?> `

Результатом виконання цього прикладу буде щось подібне:

Знайдено 2 файли.
Вміст першого файлу:
Encrypted file 1 contents.

**Приклад #2 Процедурний стиль**

` <?php$rar_arch u003d rar_open('encrypted_headers.rar', 'samplepassword');if ($rar_arch u003du003du003d FALSE)   die("Невдале відкриття файла");$entries u003d$ entriesu003du003du003du003dFALSE)  die("Failed fetching entries");echo "Знайдено " . count($entries) . "Файлів.
";if (empty($entries))    die("Не найдено коректних записів.");$stream u003dreset($entries)->getStream();if ($stream u003du003du003d FALSE)  пере  die("Недач| файлу");rar_close($rar_arch);echo "Вміст першого файлу:
";echo stream_get_contents($stream);fclose($stream);?> `

**Приклад #3 Callback-функція для тома**

` <?php/* У цьому прикладі є том з іменем multi_broken.part1.rar, * а наступний том має ім'я multi.part2.rar */function resolve($vol)    vol))      return str_replace('_broken', '', $vol); else         return null;}$rar_file1 u003d rar_open(dirname(__FILE__).'/multi_broken.part1.rar', null, 'resolve');$entry u003d $rar_file1->get$try >extract(null, dirname(__FILE__) . "/temp_file2.txt");?> `

### Дивіться також

- [`rar://`wrapper](wrappers.rar.md)
