- [«PDO_CUBRID DSN](ref.pdo-cubrid.connection.md)
- [MS SQL Server (PDO_DBLIB) »](ref.pdo-dblib.md)

- [PHP Manual](index.md)
- [CUBRID (PDO)](ref.pdo-cubrid.md)
- Отримати запитану інформацію про схему

# PDO::cubrid_schema

(PECL PDO_CUBRID \>u003d 8.3.0.0001)

PDO::cubrid_schema — Отримати запитану інформацію про схему

### Опис

public **PDO::cubrid_schema**(int `$schema_type`, string `$table_name` u003d
?, string `$col_name` u003d ?): array

Ця функція використовується для отримання інформації про схему бази даних.
Якщо потрібна інформація про конкретну таблицю, то буде необхідно
вказати її ім'я у параметрі `table_name`. Якщо потрібна інформація про
конкретному стовпці таблиці, то його ім'я необхідно вказати у параметрі
`col_name` (може використовуватись тільки з
PDO::CUBRID_SCH_COL_PRIVILEGE).

Результат буде повернутий у вигляді двовимірного масиву (стовпець
(асоціативний масив) \* рядок (асоціативний масив)). У наступному
таблиці наводяться типи схеми та структура стовпців результуючого
масиву, який буде повернутий залежно від використовуваного типу
схеми.

| Схема Номер стовпчика | Ім'я шпальти | Значення |
|------------------------------------------------- ------------------------------------------------|- --------------|------------------------|---------- -----------------------------------------|
| PDO::CUBRID_SCH_TABLE | 1 | NAME | |
| | 2 | TYPE | 0:system table 1:view 2:table |
| PDO::CUBRID_SCH_VIEW | 1 | NAME | |
| | 2 | TYPE | 1:view |
| PDO::CUBRID_SCH_QUERY_SPEC | 1 | QUERY_SPEC | |
| PDO::CUBRID_SCH_ATTRIBUTE / PDO::CUBRID_SCH_TABLE_ATTRIBUTE | 1 | ATTR_NAME | |
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
| PDO::CUBRID_SCH_METHOD / PDO::CUBRID_SCH_TABLE_METHOD | 1 | NAME | |
| | 2 | RET_DOMAIN | |
| | 3 | ARG_DOMAIN | |
| PDO::CUBRID_SCH_METHOD_FILE | 1 | METHOD_FILE | |
| PDO::CUBRID_SCH_SUPER_TABLE / PDO::CUBRID_SCH_DIRECT_SUPER_TABLE / PDO::CUBRID_SCH_SUB_TABLE | 1 | CLASS_NAME | |
| | 2 | TYPE | 0:system table 1:view 2:table |
| PDO::CUBRID_SCH_CONSTRAINT | 1 | TYPE | 0: unique 1: index 2: reverse unique 3: reverse index |
| | 2 | NAME | |
| | 3 | ATTR_NAME | |
| | 4 | NUM_PAGES | |
| | 5 | NUM_KEYS | |
| | 6 | PRIMARY_KEY | 1:primary key |
| | 7 | KEY_ORDER | Base:1 |
| PDO::CUBRID_SCH_TRIGGER | 1 | NAME | |
| | 2 | STATUS | |
| | 3 | EVENT | |
| | 4 | TARGET_CLASS | |
| | 5 | TARGET_ATTR | |
| | 6 | ACTION_TIME | |
| | 7 | ACTION | |
| | 8 | PRIORITY | |
| | 9 | CONDITION_TIME | |
| | 10 | CONDITION | |
| PDO::CUBRID_SCH_TABLE_PRIVILEGE / PDO::CUBRID_SCH_COL_PRIVILEGE | 1 | CLASS_NAME/ATTR_NAME | |
| | 2 | PRIVILEGE | |
| | 3 | GRANTABLE | |
| PDO::CUBRID_SCH_PRIMARY_KEY | 1 | CLASS_NAME | |
| | 2 | ATTR_NAME | |
| | 3 | KEY_SEQ | Base:1 |
| | 4 | KEY_NAME | |
| PDO::CUBRID_SCH_IMPORTED_KEYS / PDO::CUBRID_SCH_EXPORTED_KEYS / PDO::CUBRID_SCH_CROSS_REFERENCE | 1 | PKTABLE_NAME | |
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

`schema_type`
Необхідний тип схеми.

`table_name`
Назва таблиці, схему якої ви хочете отримати.

`col_name`
Ім'я шпальти, схему якої ви хочете отримати.

### Значення, що повертаються

У разі успішного виконання буде повернено асоціативний масив з
схемою.

У разі невдачі буде повернено **`false`**

### Приклади

**Приклад #1 Приклад використання **PDO::cubrid_schema()****

У цьому прикладі демонструється отримання інформації про первинні та
вторинних ключах таблиці "Гама".

` <?php$pk_list u003d $dbh->cubrid_schema(PDO::CUBRID_SCH_PRIMARY_KEY, "game");print_r($pk_list);$fk_list u003d $dbh->cubrid_schema(PDO::CUBRID_SCH" $fk_list);?> `

Результат виконання цього прикладу:

Result:
Array
(
[0] u003d> Array
(
[CLASS_NAME] u003d> game
[ATTR_NAME] u003d> athlete_code
[KEY_SEQ] u003d> 3
[KEY_NAME] u003d> pk_game_host_year_event_code_athlete_code
)

[1] u003d> Array
(
[CLASS_NAME] u003d> game
[ATTR_NAME] u003d> event_code
[KEY_SEQ] u003d> 2
[KEY_NAME] u003d> pk_game_host_year_event_code_athlete_code
)

[2] u003d> Array
(
[CLASS_NAME] u003d> game
[ATTR_NAME] u003d> host_year
[KEY_SEQ] u003d> 1
[KEY_NAME] u003d> pk_game_host_year_event_code_athlete_code
)

)
Array
(
[0] u003d> Array
(
[PKTABLE_NAME] u003d> athlete
[PKCOLUMN_NAME] u003d> code
[FKTABLE_NAME] u003d> game
[FKCOLUMN_NAME] u003d> athlete_code
[KEY_SEQ] u003d> 1
[UPDATE_RULE] u003d> 1
[DELETE_RULE] u003d> 1
[FK_NAME] u003d> fk_game_athlete_code
[PK_NAME] u003d> pk_athlete_code
)

[1] u003d> Array
(
[PKTABLE_NAME] u003d> event
[PKCOLUMN_NAME] u003d> code
[FKTABLE_NAME] u003d> game
[FKCOLUMN_NAME] u003d> event_code
[KEY_SEQ] u003d> 1
[UPDATE_RULE] u003d> 1
[DELETE_RULE] u003d> 1
[FK_NAME] u003d> fk_game_event_code
[PK_NAME] u003d> pk_event_code
)

)
