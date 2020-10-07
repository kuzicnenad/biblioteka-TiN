package rs.ac.singidunum.tf.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import rs.ac.singidunum.tf.entities.Knjiga;

@Repository
public interface KnjigaRepository extends CrudRepository<Knjiga, Integer>{

}
