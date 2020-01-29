package edu.iws.productcatalog.resource

import edu.iws.productcatalog.model.Product
import edu.iws.productcatalog.repository.ProductRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RestController
import java.util.*

@RestController
class ProductResource(@Autowired var productRepository: ProductRepository) {

    @GetMapping(value = ["/"])
    fun getAllProducts(): List<Product> {
        return productRepository.findAll();
    }

    @GetMapping(value = ["/{id}"])
    fun getProduct(@PathVariable id: Long): Optional<Product> {
        return productRepository.findById(id);
    }
}
