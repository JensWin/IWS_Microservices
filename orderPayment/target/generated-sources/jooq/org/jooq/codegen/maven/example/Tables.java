/*
 * This file is generated by jOOQ.
 */
package org.jooq.codegen.maven.example;


import javax.annotation.processing.Generated;

import org.jooq.codegen.maven.example.tables.FlywaySchemaHistory;
import org.jooq.codegen.maven.example.tables.Order;


/**
 * Convenience access to all tables in iws
 */
@Generated(
    value = {
        "http://www.jooq.org",
        "jOOQ version:3.12.3"
    },
    comments = "This class is generated by jOOQ"
)
@SuppressWarnings({ "all", "unchecked", "rawtypes" })
public class Tables {

    /**
     * The table <code>iws.flyway_schema_history</code>.
     */
    public static final FlywaySchemaHistory FLYWAY_SCHEMA_HISTORY = FlywaySchemaHistory.FLYWAY_SCHEMA_HISTORY;

    /**
     * The table <code>iws.order</code>.
     */
    public static final Order ORDER = Order.ORDER;
}
