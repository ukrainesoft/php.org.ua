- [« Типи ресурсів](runkit7.resources.md)
- [Функції runkit7»] (ref.runkit7.md)

- [PHP Manual](index.md)
- [runkit7](book.runkit7.md)
- Обумовлені константи

# Зумовлені константи

Наведені нижче константи визначені даним модулем і можуть бути
доступні лише в тому випадку, якщо PHP був зібраний за допомогою цього
модуля або в тому випадку, якщо даний модуль був динамічно завантажений
під час виконання.

**`RUNKIT7_IMPORT_FUNCTIONS`** (int)
[runkit7_import()](function.runkit7-import.md) прапор, що вказує, що
нормальні функції мають бути імпортовані із зазначеного файлу.

**`RUNKIT7_IMPORT_CLASS_METHODS`** (int)
[runkit7_import()](function.runkit7-import.md) прапор, що вказує, що
методи класу повинні бути імпортовані із зазначеного файлу.

**`RUNKIT7_IMPORT_CLASS_CONSTS`** (int)
[runkit7_import()](function.runkit7-import.md) прапор, що вказує, що
константи класу повинні бути імпортовані із зазначеного файлу.

**`RUNKIT7_IMPORT_CLASS_PROPS`** (int)
[runkit7_import()](function.runkit7-import.md) прапор, що вказує, що
стандартні властивості класу повинні бути імпортовані із зазначеного
файлу.

**`RUNKIT7_IMPORT_CLASS_STATIC_PROPS`** (int)
[runkit7_import()](function.runkit7-import.md) прапор, що вказує, що
статичні властивості класу повинні бути імпортовані із зазначеного
файлу. Доступно з Runkit 1.0.1.

**`RUNKIT7_IMPORT_CLASSES`** (int)
[runkit7_import()](function.runkit7-import.md) прапор, що представляє
побітове значення АБО константи **`RUNKIT7_IMPORT_CLASS_*`**.

**`RUNKIT7_IMPORT_OVERRIDE`** (int)
[runkit7_import()](function.runkit7-import.md) прапор, що вказує, що
якщо будь-які імпортовані функції, методи, константи чи властивості
вже існують, вони мають бути замінені новими визначеннями. Якщо цей
прапор не встановлено, будь-які імпортовані визначення, які вже
існують, будуть відкинуті.

**`RUNKIT7_ACC_RETURN_REFERENCE`** (int)
Увімкніть цей прапор, щоб створювана або повторно оголошена функція
або метод повертали посилання.

**`RUNKIT7_ACC_PUBLIC`** (int)
Прапор для [runkit7_method_add()](function.runkit7-method-add.md) та
[runkit7_method_redefine()](function.runkit7-method-redefine.md),
щоб зробити спосіб публічним.

**`RUNKIT7_ACC_PROTECTED`** (int)
Прапор для [runkit7_method_add()](function.runkit7-method-add.md) and
[runkit7_method_redefine()](function.runkit7-method-redefine.md),
щоб зробити метод захищеним.

**`RUNKIT7_ACC_PRIVATE`** (int)
Прапор для [runkit7_method_add()](function.runkit7-method-add.md) and
[runkit7_method_redefine()](function.runkit7-method-redefine.md),
щоб зробити метод приватним.

**`RUNKIT7_ACC_STATIC`** (int)
Прапор для [runkit7_method_add()](function.runkit7-method-add.md) and
[runkit7_method_redefine()](function.runkit7-method-redefine.md),
щоб зробити метод статичним.

**`RUNKIT7_FEATURE_MANIPULATION`** (int)
дорівнює 1, якщо включена маніпуляція під час виконання і 0 в іншому
випадку.

**`RUNKIT7_FEATURE_SUPERGLOBALS`** (int)
дорівнює 1, якщо користувацькі суперглобальні змінні включені і 0
інакше.

**`RUNKIT7_FEATURE_SANDBOX`** (int)
Завжди 0, неможливо продати функцію пісочниці в php 7.
