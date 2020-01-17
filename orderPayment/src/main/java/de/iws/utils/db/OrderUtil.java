package de.iws.utils.db;

import de.iws.jdbc.ResourceManager;
import org.jooq.Configuration;
import org.jooq.SQLDialect;
import org.jooq.codegen.maven.example.tables.daos.OrderDao;
import org.jooq.codegen.maven.example.tables.pojos.Order;
import org.jooq.impl.DefaultConfiguration;

import java.sql.Connection;
import java.sql.SQLException;

public class OrderUtil {

    // Prevent instantiation
    private OrderUtil() {

    }

    /**
     * Get order for a given userId
     *
     * @param orderId the id of the order
     * @return the searched order
     */
    public static Order fetchOrderForOrderId(int orderId) throws SQLException {
        OrderDao orderDao;
        try (Connection conn = ResourceManager.getConnection()) {
            Configuration configuration = new DefaultConfiguration().set(conn).set(SQLDialect.POSTGRES);
            orderDao = new OrderDao(configuration);
            return orderDao.fetchOneByOrderId(orderId);
        }
    }
}
