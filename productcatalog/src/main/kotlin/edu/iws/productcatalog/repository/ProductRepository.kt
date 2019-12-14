package edu.iws.productcatalog.repository

import edu.iws.productcatalog.model.Product
import org.springframework.data.repository.CrudRepository

interface ProductRepository: CrudRepository<Product, Long> {
    override fun findAll(): List<Product>;
}