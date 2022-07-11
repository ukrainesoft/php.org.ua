- [«cubrid_rollback](function.cubrid-rollback.md)
- [cubrid_seq_drop »](function.cubrid-seq-drop.md)

- [PHP Manual](index.md)
- [Функції CUBRID](ref.cubrid.md)
- Отримує запитану інформацію про схему

#cubrid_schema

(PECL CUBRID u003d 8.3.0)

cubrid_schema — Отримує запитану інформацію про схему

### Опис

**cubrid_schema**(
resource `$conn_identifier`,
int `$schema_type`,
string `$class_name` u003d ?,
string `$attr_name` u003d ?
): array

Функція **cubrid_schema()** використовується для отримання запитаної
інформації про схему із бази даних. Ви повинні вказати `class_name`, якщо
ви хочете отримати інформацію про певний клас, `attr_name`, якщо
ви хочете отримати інформацію про певний атрибут (може
використовуватись тільки з **`CUBRID_SCH_ATTR_PRIVILEGE`**).

Результат функції **cubrid_schema()** повертається як двомірного
масиву (стовпець (асоціативний масив) \* рядок (числовий масив)). В
наступних таблицях показані типи схем та структура стовпців
результуючого масиву, які мають бути повернені на основі типу
схеми.

| Схема Номер стовпчика | Ім'я шпальти | Значення |
|------------------------------------------------- ---------------------------------|---------------| ------------------------|------------------------- --------------------------|
| CUBRID_SCH_CLASS | 1 | NAME | |
| | 2 | TYPE | 0:system class 1:vclass 2:class |
| CUBRID_SCH_VCLASS | 1 | NAME | |
| | 2 | TYPE | 1:vclass |
| CUBRID_SCH_QUERY_SPEC | 1 | QUERY_SPEC | |
| CUBRID_SCH_ATTRIBUTE/CUBRID_SCH_CLASS_ATTRIBUTE | 1 | ATTR_NAME | |
| | 2 | DOMAIN | |
| | 3 | SCALE | |
| | 4 | PRECISION | |
| | 5 | INDEXED | 1:indexed |
| | 6 | NOT NULL | 1:not null |
| | 7 | SHARED | 1:shared |
| | 8 | UNIQUE | 1: unique |
| | 9 | DEFAULT | |
| | 10 | ATTR_ORDER | Base:1 |
| | 11 | CLASS_NAME | |
| | 12 | SOURCE_CLASS | |
| | 13 | IS_KEY | 1:key |
| CUBRID_SCH_METHOD/CUBRID_SCH_CLASS_METHOD | 1 | NAME | |
| | 2 | RET_DOMAIN | |
| | 3 | ARG_DOMAIN | |
| CUBRID_SCH_METHOD_FILE | 1 | METHOD_FILE | |
| CUBRID_SCH_SUPERCLASS/CUBRID_SCH_DIRECT_SUPER_CLASS/CUBRID_SCH_SUBCLASS | 1 | CLASS_NAME | |
| | 2 | TYPE | 0:system class 1:vclass 2:class |
| CUBRID_SCH_CONSTRAINT | 1 | TYPE | 0: unique 1: index 2: reverse unique 3: reverse index |
| | 2 | NAME | |
| | 3 | ATTR_NAME | |
| | 4 | NUM_PAGES | |
| | 5 | NUM_KEYS | |
| | 6 | PRIMARY_KEY | 1:primary key |
| | 7 | KEY_ORDER | Base:1 |
| CUBRID_SCH_TRIGGER | 1 | NAME | |
| | 2 | STATUS | |
| | 3 | EVENT | |
| | 4 | TARGET_CLASS | |
| | 5 | TARGET_ATTR | |
| | 6 | ACTION_TIME | |
| | 7 | ACTION | |
| | 8 | PRIORITY | |
| | 9 | CONDITION_TIME | |
| | 10 | CONDITION | |
| CUBRID_SCH_CLASS_PRIVILEGE/CUBRID_SCH_ATTR_PRIVILEGE | 1 | CLASS_NAME/ATTR_NAME | |
| | 2 | PRIVILEGE | |
| | 3 | GRANTABLE | |
| CUBRID_SCH_PRIMARY_KEY | 1 | CLASS_NAME | |
| | 2 | ATTR_NAME | |
| | 3 | KEY_SEQ | Base:1 |
| | 4 | KEY_NAME | |
| CUBRID_SCH_IMPORTED_KEYS/CUBRID_SCH_EXPORTED_KEYS/CUBRID_SCH_CROSS_REFERENCE | 1 | PKTABLE_NAME | |
| | 2 | PKCOLUMN_NAME | |
| | 3 | FKTABLE_NAME | Base:1 |
| | 4 | FKCOLUMN_NAME | |
| | 5 | KEY_SEQ | Base:1 |
| | 6 | UPDATE_ACTION | 0:cascade 1:restrict 2:no action 3:set null |
| | 7 | DELETE_ACTION | 0:cascade 1:restrict 2:no action 3:set null |
| | 8 | FK_NAME | |
| | 9 | PK_NAME | |

**Склад результату кожного типу**

### Список параметрів

`conn_identifier`
Ідентифікатор з'єднання.

`schema_type`
Дані схеми, які ви хочете дізнатися.

`class_name`
Клас, для якого ви хочете дізнатися про схему.

`attr_name`
Атрибут, для якого ви хочете дізнатися про схему.

### Значення, що повертаються

Масив, що містить інформацію про схему, у разі успішного виконання або
**`false`** у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------|
| 8.3.1 | Змінено значення, що повертається: якщо процес завершився з помилкою, повертається false, а не -1. |

### Приклади

**Приклад #1 Приклад використання **cubrid_schema()****

` <?php$conn u003d cubrid_connect("localhost", 33000, "demodb", "dba");printf("
--- Первинний ключ ---
");$pk u003d cubrid_schema($conn, CUBRID_SCH_PRIMARY_KEY, "game");var_dump($pk);printf("
--- Зовнішні ключи ---
");$fk u003d cubrid_schema($conn, CUBRID_SCH_IMPORTED_KEYS, "game");var_dump($fk);printf("
--- Атрибут стовпця ---
");$attru003du003dcubrid_schema($conn, CUBRID_SCH_ATTRIBUTE, "stadium", "area");var_dump($attr);cubrid_disconnect($conn);?> `

Результат виконання цього прикладу:


--- Первинний ключ ---
array(3) {
[0]u003d>
array(4) {
["CLASS_NAME"]u003d>
string(4) "game"
["ATTR_NAME"]u003d>
string(12) "athlete_code"
["KEY_SEQ"]u003d>
string(1) "3"
["KEY_NAME"]u003d>
string(41) "pk_game_host_year_event_code_athlete_code"
}
[1]u003d>
array(4) {
["CLASS_NAME"]u003d>
string(4) "game"
["ATTR_NAME"]u003d>
string(10) "event_code"
["KEY_SEQ"]u003d>
string(1) "2"
["KEY_NAME"]u003d>
string(41) "pk_game_host_year_event_code_athlete_code"
}
[2]u003d>
array(4) {
["CLASS_NAME"]u003d>
string(4) "game"
["ATTR_NAME"]u003d>
string(9) "host_year"
["KEY_SEQ"]u003d>
string(1) "1"
["KEY_NAME"]u003d>
string(41) "pk_game_host_year_event_code_athlete_code"
}
}

--- Зовнішні ключі ---
array(2) {
[0]u003d>
array(9) {
["PKTABLE_NAME"]u003d>
string(7) "athlete"
["PKCOLUMN_NAME"]u003d>
string(4) "code"
["FKTABLE_NAME"]u003d>
string(4) "game"
["FKCOLUMN_NAME"]u003d>
string(12) "athlete_code"
["KEY_SEQ"]u003d>
string(1) "1"
["UPDATE_RULE"]u003d>
string(1) "1"
["DELETE_RULE"]u003d>
string(1) "1"
["FK_NAME"]u003d>
string(20) "fk_game_athlete_code"
["PK_NAME"]u003d>
string(15) "pk_athlete_code"
}
[1]u003d>
array(9) {
["PKTABLE_NAME"]u003d>
string(5) "event"
["PKCOLUMN_NAME"]u003d>
string(4) "code"
["FKTABLE_NAME"]u003d>
string(4) "game"
["FKCOLUMN_NAME"]u003d>
string(10) "event_code"
["KEY_SEQ"]u003d>
string(1) "1"
["UPDATE_RULE"]u003d>
string(1) "1"
["DELETE_RULE"]u003d>
string(1) "1"
["FK_NAME"]u003d>
string(18) "fk_game_event_code"
["PK_NAME"]u003d>
string(13) "pk_event_code"
}
}

--- Атрибут стовпця ---
array(1) {
[0]u003d>
array(13) {
["ATTR_NAME"]u003d>
string(4) "area"
["DOMAIN"]u003d>
string(1) "7"
["SCALE"]u003d>
string(1) "2"
["PRECISION"]u003d>
string(2) "10"
["INDEXED"]u003d>
string(1) "0"
["NON_NULL"]u003d>
string(1) "0"
["SHARED"]u003d>
string(1) "0"
["UNIQUE"]u003d>
string(1) "0"
["DEFAULT"]u003d>
NULL
["ATTR_ORDER"]u003d>
string(1) "4"
["CLASS_NAME"]u003d>
string(7) "stadium"
["SOURCE_CLASS"]u003d>
string(7) "stadium"
["IS_KEY"]u003d>
string(1) "0"
}
}
