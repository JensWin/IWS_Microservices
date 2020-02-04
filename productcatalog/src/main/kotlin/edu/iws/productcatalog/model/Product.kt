package edu.iws.productcatalog.model

import org.springframework.lang.NonNull
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

@Entity
data class Product(
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @NonNull
        var productId: Long,
        var productName: String,
        var productDescription: String,
        var productQuantity: Long,
        var productPrice: Double
)