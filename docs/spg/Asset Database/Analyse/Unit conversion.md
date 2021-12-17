
title: Unit conversion
created at: Fri Nov 08 2019 15:24:09 GMT+0000 (Coordinated Universal Time)
updated at: Thu Dec 10 2020 00:44:55 GMT+0000 (Coordinated Universal Time)
---

# Unit conversion

Field values will be stored in a specified `unit type` and can be converted to any known unit in that `unit type` using the defined conversion rules.

Unit types are stored in the database and will define several `unit`s that they can be converted to. Each unit type will have a default unit that determines how values for this unit type will be stored.

E.g.:

    const field = {
      nominalValue: 402,
      unitType: 'weight',
      system: 'metric',
      defaultUnit: 'kg'
    };

This field has a `nominalValue` of **402**, which has unitType `weight` and has to be shown in `kg` by default.

Since the **unit type** is `weight` and the `nominalUnit` for weight is `g`, the stored value translates to **402g**. When this field is displayed in its `defaultUnit`, it will be shown as **0.402kg**.

To convert `g` to `kg`, we go through these steps:

-   look up the `unit type` for the field
-   look up the desired `unit` (kg) for the field value in the `unit type`
-   convert the field value using the `fromNominal` conversion rule found on the `unit`


    402
    => unit.fromNominal()
    => 0.402

When converting a value from a `unit` to another `unit`, the value will always have to be converted back to its `nominalValue`, according to the `nominalUnit` found on its `unit type` before a subsequent conversion to another `unit` can happen.

    0.402kg
    => unit.toNominal()
    => 402g
    => unit.fromNominal()
    => 0.8823 lbs

Values can only be converted to `unit`s defined in their `unit type`.

          