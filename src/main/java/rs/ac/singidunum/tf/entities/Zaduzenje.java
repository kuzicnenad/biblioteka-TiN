package rs.ac.singidunum.tf.entities;

import java.sql.Date;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity (name = "zaduzenje") // This tells Hibernate to make a table out of this class
public class Zaduzenje {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer zaduzenje_ID;
	private Integer broj_clana;
	private String ISBN_knjige;
	private Date knjiga_zaduzena;
	private Date knjiga_razduzena;
	
	public Zaduzenje() {
		
	}

	public Integer getZaduzenje_ID() {
		return zaduzenje_ID;
	}

	public void setZaduzenje_ID(Integer zaduzenje_ID) {
		this.zaduzenje_ID = zaduzenje_ID;
	}

	public Integer getBroj_clana() {
		return broj_clana;
	}

	public void setBroj_clana(Integer broj_clana) {
		this.broj_clana = broj_clana;
	}

	public String getISBN_knjige() {
		return ISBN_knjige;
	}

	public void setISBN_knjige(String ISBN_Knjige) {
		ISBN_knjige = ISBN_Knjige;
	}

	public Date getKnjiga_zaduzena() {
		return knjiga_zaduzena;
	}

	public void setKnjiga_zaduzena(Date knjiga_zaduzena) {
		this.knjiga_zaduzena = knjiga_zaduzena;
	}

	public Date getKnjiga_razduzena() {
		return knjiga_razduzena;
	}

	public void setKnjiga_razduzena(Date knjiga_razduzena) {
		this.knjiga_razduzena = knjiga_razduzena;
	}
	
	
	

}
