- [« ibase_fetch_row](function.ibase-fetch-row.md)
- [ibase_free_event_handler »](function.ibase-free-event-handler.md)

- [PHP Manual](index.md)
- [Функції Firebird/InterBase](ref.ibase.md)
- Отримує інформацію про поле

# ibase_field_info

(PHP 5, PHP 7 \< 7.4.0)

ibase_field_info — Отримує інформацію про поле

### Опис

**ibase_field_info**(resource `$result`, int `$field_number`): array

Повертає масив із інформацією про поле після виконання запиту select.

### Список параметрів

`result`
Ідентифікатор результату InterBase.

`field_number`
Усунення поля.

### Значення, що повертаються

Повертає масив з такими ключами: `name`, `alias`, `relation`,
`length` та `type`.

### Приклади

**Приклад #1 Приклад використання **ibase_field_info()****

` <?php$rs u003d ibase_query("SELECT * FROM tablename");$coln u003d ibase_num_fields($rs);for ($i u003d 0; $i < $coln; $i++) $ , $i); echo "Ім'я: ". $col_info['name']. "
";    echo "Псевдонім: ". $col_info['alias']. "
";    echo "Зв'язок: ". $col_info['relation']. "
";    echo "Довжина: ". $col_info['length']. "
";    echo "Тип: ". $col_info['type']. "
";}?> `

### Дивіться також

- [ibase_num_fields()](function.ibase-num-fields.md) - Повертає
кількість полів у результуючому наборі
