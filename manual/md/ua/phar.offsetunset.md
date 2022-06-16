- [« Phar::offsetSet](phar.offsetset.md)
- [Phar::running »](phar.running.md)

- [PHP Manual](index.md)
- [Phar](class.phar.md)
- Видалити файл із phar-архіву

# Phar::offsetUnset

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL phar u003d 1.0.0)

Phar::offsetUnset — Видалити файл із phar-архіву

### Опис

public **Phar::offsetUnset**(string `$localName`): void

> **Примітка**:
>
> Для коректної роботи з об'єктами [Phar](class.phar.md) цим методом
> необхідна установка значення `php.ini` `phar.readonly` у `0`. В
> інакше, буде викинуто виняток
> [PharException](class.pharexception.md).

Це реалізація інтерфейсу [ArrayAccess](class.arrayaccess.md),
що дозволяє маніпулювати вмістом Phar-архіву в стилі доступу до
елементів масиву. offsetUnset використовується для видалення файлів та
запускається щоразу, коли використовується конструкція
[unset()](function.unset.md).

### Список параметрів

`localName`
Назва файлу (відносний шлях).

### Значення, що повертаються

Функція не повертає значення після виконання.

### Помилки

Якщо опція [phar.readonly](phar.configuration.md#ini.phar.readonly)
встановлений в `1`, то буде викинуто виняток
[BadMethodCallException](class.badmethodcallexception.md), оскільки
модифікувати Phar-архів можна лише, якщо phar.readonly дорівнює `0`.
Якщо виникнуть якісь проблеми із записом на диск - викидається
виняток [PharException](class.pharexception.md).

### Приклади

**Приклад #1 Приклад використання **Phar::offsetUnset()****

` <?php$p u003d new Phar('/path/to/my.phar', 0, 'my.phar');try {    /// удаляє file.txt з my.phar шляхом дзвінка offsetUnset 'file.txt']);} catch (Exception $e) {    echo 'Не удалося видалити file.txt: ', $e;}?> `

### Дивіться також

- [Phar::offsetExists()](phar.offsetexists.md) - Визначити, чи є
файл в архіві
- [Phar::offsetGet()](phar.offsetget.md) - Отримати об'єкт
PharFileInfo для конкретного файлу
- [Phar::offsetSet()](phar.offsetset.md) - Зміна вмісту
файлу
- [Phar::unlinkArchive()](phar.unlinkarchive.md) - Повністю видалити
архів з пам'яті та з диска
- [Phar::delete()](phar.delete.md) - Видаляє файл усередині phar-архіву
