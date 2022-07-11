- [«Зумовлені константи](yaml.constants.md)
- [Callback-функції »](yaml.callbacks.md)

- [PHP Manual](index.md)
- [Yaml](book.yaml.md)
- Приклади

# Приклади

**Приклад #1 Приклад роботи з Yaml**

` <?php$addr u003d array(    "given" u003d> "Chris",    "family"u003d> "Dumars",    "address"u003d> array(        "lines"u003d> "458 Walkman Dr.        Suite #292",        " city"u003d> "Royal Oak",        "state"u003d> "MI",        "postal"u003d> 48046,      ),  );$invoice u003d array (    "invoice"u003d> 34843,    "date"u003d> "2001-01 -23",    "bill-to"u003d> $addr,    "ship-to"u003d> $addr,    "product"u003d> array(        array(            "sku"u003d> "BL394D",            "quantity"u003d> 4,            " description"u003d> "Basketball",            "price"u003d> 450,          ),        array(            "sku"u003d> "BL4438H",            "quantity"u003d> 1,            "description"u003d> "Super Hoop",            "price"u003d> 2392,          ),      ),    "tax"u003d> 251.42,    "total"u003d> 4443.52,    "comments"u003d> "Late afternoon is best. Backup contact is Nancy Billsmer @ 338-4338.",    );// создание YAML- подання замовлення$yaml u003d yaml_emit($invoice);var_dump($yaml);// перетворення YAML назад в PHP-змінну$parsed u003d yaml_parse($yaml);// перевірка на ори а і результату конвертації в YAML і обратноvar_dump($parsed u003du003d $invoice);?> `

Результатом виконання цього прикладу буде щось подібне:

string(631) "---
invoice: 34843
date: "2001-01-23"
bill-to:
given: Chris
family: Dumars
address:
lines: |-
458 Walkman Dr.
Suite #292
city: Royal Oak
state: MI
postal: 48046
ship-to:
given: Chris
family: Dumars
address:
lines: |-
458 Walkman Dr.
Suite #292
city: Royal Oak
state: MI
postal: 48046
product:
- sku: BL394D
quantity: 4
description: Basketball
price: 450
- sku: BL4438H
quantity: 1
description: Super Hoop
price: 2392
tax: 251.420000
total: 4443.520000
comments: Late afternoon is best. Backup contact is Nancy Billsmer @ 338-4338.
...
"
bool(true)
