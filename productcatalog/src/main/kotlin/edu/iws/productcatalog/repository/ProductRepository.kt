package edu.iws.productcatalog.repository

import edu.iws.productcatalog.model.Product
import org.springframework.data.repository.CrudRepository
import java.util.*

interface ProductRepository: CrudRepository<Product, Long> {
    override fun findAll(): List<Product>;
    override fun findById(id: Long): Optional<Product>
}