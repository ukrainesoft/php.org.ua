- [«odbc_foreignkeys](function.odbc-foreignkeys.md)
- [odbc_gettypeinfo »](function.odbc-gettypeinfo.md)

- [PHP Manual](index.md)
- [Функції ODBC](ref.uodbc.md)
- звільняє ресурси, пов'язані з результатом

#odbc_free_result

(PHP 4, PHP 5, PHP 7, PHP 8)

odbc_free_result — Визволяє ресурси, пов'язані з результатом

### Опис

**odbc_free_result**(resource `$statement`): bool

Визволяє ресурси, пов'язані з результатом.

**odbc_free_result()** потрібно викликати лише в тому випадку, якщо під час
роботи вашого скрипта використовується надто багато пам'яті. Вся пам'ять,
що зберігає результат, буде автоматично звільнено після завершення
скрипт.

### Список параметрів

`statement`
Ідентифікатор результату.

### Значення, що повертаються

Завжди повертає **`true`**.

### Примітки

> **Примітка**:
>
> Якщо автоматичну фіксацію вимкнено (див.
> [odbc_autocommit()](function.odbc-autocommit.md)), та
> **odbc_free_result()** викликається перед фіксацією, всі, хто чекає
> транзакції відкочуються.
