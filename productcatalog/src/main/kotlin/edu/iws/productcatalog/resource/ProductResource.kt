package edu.iws.productcatalog.resource

import edu.iws.productcatalog.model.Product
import edu.iws.productcatalog.repository.ProductRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*
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

    @PostMapping()
    fun putProduct(@RequestBody newProduct: Product): Product {
        return productRepository.save(newProduct);
    }
}
