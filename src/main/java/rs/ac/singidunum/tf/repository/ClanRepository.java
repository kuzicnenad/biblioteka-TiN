package rs.ac.singidunum.tf.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import rs.ac.singidunum.tf.entities.Clan;

@Repository
public interface ClanRepository extends CrudRepository<Clan, Integer>{

}
