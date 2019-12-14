package edu.iws.productcatalog.model

import org.springframework.lang.NonNull
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

@Entity
data class ProductAttribute(
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @NonNull
        var id: Long,
        var name: String,
        var value: String,
        var description: String
)