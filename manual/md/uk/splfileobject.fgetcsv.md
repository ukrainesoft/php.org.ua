- [« SplFileObject::fgetc](splfileobject.fgetc.md)
- [SplFileObject::fgets »](splfileobject.fgets.md)

- [PHP Manual](index.md)
- [SplFileObject](class.splfileobject.md)
- Отримати рядок із файлу та його розбір як поля CSV

# SplFileObject::fgetcsv

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

SplFileObject::fgetcsv — Отримати рядок із файлу та його розбір як поля
CSV

### Опис

public **SplFileObject::fgetcsv**(string `$separator` u003d ",", string
`$enclosure` u003d "\"", string `$escape` u003d "\\"): array\|false

Отримує рядок із файлу та розбирає його відповідно до формату CSV.
Результати аналізу повертає у вигляді масиву.

> **Примітка**:
>
> Ця функція враховує налаштування локалі. Наприклад, якщо
> `LC_CTYPE` встановлена в `en_US.UTF-8`, то файли в однобайтовій
> кодування будуть неправильно прочитані цією функцією.

### Список параметрів

`separator`
Розділювач полів (тільки один однобайтовий символ). За замовчуванням це
кома або символ, який був заданий методом
[SplFileObject::setCsvControl()](splfileobject.setcsvcontrol.md).

`enclosure`
Символ обмежувача полів (лише один однобайтовий символ). за
замовчуванням це подвійна лапка або символ, який був заданий методом
[SplFileObject::setCsvControl()](splfileobject.setcsvcontrol.md).
Порожній рядок (`````) відключає пропрієтарний механізм екранування.

> **Примітка**: Зазвичай символ `enclosure` екранується всередині поля
> шляхом його подвоювання; проте, символ `escape` як альтернатива.
> Тому значення за промовчанням цих параметрів ````` та `\'` мають
> однакове значення. Крім дозволу екранувати символ `enclosure`
> символ `escape` немає особливого сенсу; він навіть не призначений для
> самого екранування.

`escape`
Екрануючий символ (не більше одного однобайтового символу). за
замовчуванням це зворотний сліш (`\`) або символ, який був заданий методом
[SplFileObject::setCsvControl()](splfileobject.setcsvcontrol.md).

### Значення, що повертаються

Повертає масив містить дані прочитаного рядка або **`false`**
у разі помилки.

> **Примітка**:
>
> Порожній рядок CSV-файлу повертатиметься у вигляді масиву, що містить
> єдиний елемент **`null`**, якщо не використовується
> **`SplFileObject::SKIP_EMPTY | SplFileObject::DROP_NEW_LINE`**, і в
> у разі порожні рядки пропускаються.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ---------------------|
| 7.4.0 | Тепер параметр escape може приймати порожній рядок для відключення пропрієтарного механізму екранування. |

### Приклади

**Приклад #1 Приклад використання **SplFileObject::fgetcsv()****

` <?php$file u003d new SplFileObject("data.csv");while (!$file->eof()){{   var_dump($file->fgetcsv());}?> `

**Приклад #2 Приклад використання **`SplFileObject::READ_CSV`****

` <?php$file u003d new SplFileObject("animals.csv");$file->setFlags(SplFileObject::READ_CSV);foreach ($file as $row) {    list($animal, $class, $legs) $row; printf("A%s|is|a|%s|with%dlegs
", $animal, $class, $legs);}?> `

Contents of animals.csv

``` txtcode
crocodile,reptile,4
dolphin,mammal,0
duck,bird,2
koala,mammal,4
salmon,fish,0
````

Результатом виконання цього прикладу буде щось подібне:

A crocodile is a reptile with 4 ноги
A dolphin is a mammal with 0 ноги
A duck is a bird with 2 legs
A koala is a mammal with 4 ноги
A salmon is a fish with 0 ноги

### Дивіться також

- [SplFileObject::setCsvControl()](splfileobject.setcsvcontrol.md) -
Встановлює символи роздільника, обгортання та екранування для
CSV
- [SplFileObject::setFlags()](splfileobject.setflags.md) -
Встановлює прапори для SplFileObject
- [SplFileObject::READ_CSV](class.splfileobject.md#splfileobject.constants.read-csv)
- [SplFileObject::current()](splfileobject.current.md) - Отримати
поточний рядок файлу
