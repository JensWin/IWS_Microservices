package edu.iws.productcatalog.model

import org.springframework.lang.NonNull
import javax.persistence.*

@Entity
data class Product(
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @NonNull
        var id: Long,
        var name: String,
        var description: String,
        var quantity: Long,
        var price: Double,

        @OneToMany
        var attributes: List<ProductAttribute>,

        @OneToMany
        var ratings: List<Rating>
)