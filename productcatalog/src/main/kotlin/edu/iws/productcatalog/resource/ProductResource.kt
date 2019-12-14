package edu.iws.productcatalog.resource

import edu.iws.productcatalog.model.Product
import edu.iws.productcatalog.repository.ProductRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController(value = "/product")
class ProductResource(@Autowired var productRepository: ProductRepository) {

    @GetMapping(value = ["/"])
    fun getAllProducts(): List<Product> {
        return productRepository.findAll();
    }
}
