- [« ibase_name_result](function.ibase-name-result.md)
- [ibase_num_params »](function.ibase-num-params.md)

- [PHP Manual](index.md)
- [Функції Firebird/InterBase](ref.ibase.md)
- Повертає кількість полів у результуючому наборі

# ibase_num_fields

(PHP 5, PHP 7 \< 7.4.0)

ibase_num_fields — Повертає кількість полів у результуючому наборі

### Опис

**ibase_num_fields**(resource `$result_id`): int

Повертає кількість полів у результуючому наборі.

### Список параметрів

`result_id`
Ідентифікатор результату InterBase.

### Значення, що повертаються

Повертає кількість полів як цілого числа.

### Приклади

**Приклад #1 Приклад використання **ibase_num_fields()****

` <?php$rs u003d ibase_query("SELECT * FROM tablename");$coln u003d ibase_num_fields($rs);for ($i u003d 0; $i < $coln; $i++) $ , $i); echo "Ім'я: " . $col_info['name'] . "
";    echo "Псевдонім: " . $col_info['alias'] . "
";    echo "Зв'язок: " . $col_info['relation'] . "
";    echo "Довжина: " . $col_info['length'] . "
";    echo "Тип: " . $col_info['type'] . "
";}?> `

### Дивіться також

- [ibase_field_info()](function.ibase-field-info.md) - Отримує
інформацію про поле
