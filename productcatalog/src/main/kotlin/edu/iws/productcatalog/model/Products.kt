package edu.iws.productcatalog.model

import org.springframework.lang.NonNull
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id

@Entity
data class Products(
        @Id
        @GeneratedValue
        @NonNull
        var id: Long,
        var name: String
)