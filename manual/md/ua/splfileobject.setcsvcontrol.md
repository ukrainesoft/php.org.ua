- [« SplFileObject::seek](splfileobject.seek.md)
- [SplFileObject::setFlags »](splfileobject.setflags.md)

- [PHP Manual](index.md)
- [SplFileObject](class.splfileobject.md)
- Встановлює символи роздільника, обгортання та екранування для
CSV

# SplFileObject::setCsvControl

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8)

SplFileObject::setCsvControl — Встановлює символи роздільника,
обгортання та екранування для CSV

### Опис

public **SplFileObject::setCsvControl**(string `$separator` u003d ",",
string `$enclosure` u003d "\"", string `$escape` u003d "\"): void

Встановлює символи роздільника, обмежувача та екранування для CSV.
Символ обмежувача використовується для розміщення значень полів.
Наприклад, рядок 'рядок' обгорнутий в одиночні лапки (').

### Список параметрів

`separator`
Розділювач поля (тільки один однобайтовий символ).

`enclosure`
Символ обмежувача поля (лише один однобайтовий символ).

`escape`
Екрануючий символ (не більше одного однобайтового символу). Порожня
рядок (`````) відключає пропрієтарний механізм екранування.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ---------------------|
| 7.4.0 | Тепер параметр escape може приймати порожній рядок для відключення пропрієтарного механізму екранування. |

### Приклади

**Приклад #1 Приклад використання **SplFileObject::setCsvControl()****

` <?php$file u003d new SplFileObject("data.csv");$file->setFlags(SplFileObject::READ_CSV);$file->setCsvControl('|');foreach ($file as $row) {    List ($fruit, $quantity) u003d $row; // Щось робимо зі значеннями}?> `

Вміст data.csv

``` txtcode
<?php
apples|20
bananas|14
cherries|87
?>
````

### Дивіться також

- [SplFileObject::getCsvControl()](splfileobject.getcsvcontrol.md) -
Отримує символи роздільника, обгортання та екранування для CSV
- [SplFileObject::fgetcsv()](splfileobject.fgetcsv.md) - Отримати
рядок з файлу та його розбір як поля CSV
