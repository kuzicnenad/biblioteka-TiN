package rs.ac.singidunum.tf.entities;

import java.sql.Date;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity (name = "clan") // This tells Hibernate to make a table out of this class
public class Clan {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer broj_clana;
	private String ime;
	private String prezime;
	private String telefon;
	private Date datum_registracije;
	
	public Clan() {
		
	}

	public Integer getBroj_clana() {
		return broj_clana;
	}

	public void setBroj_clana(Integer broj_clana) {
		this.broj_clana = broj_clana;
	}

	public String getIme() {
		return ime;
	}

	public void setIme(String ime) {
		this.ime = ime;
	}

	public String getPrezime() {
		return prezime;
	}

	public void setPrezime(String prezime) {
		this.prezime = prezime;
	}

	public String getTelefon() {
		return telefon;
	}

	public void setTelefon(String telefon) {
		this.telefon = telefon;
	}

	public Date getDatum_registracije() {
		return datum_registracije;
	}

	public void setDatum_registracije(Date datum_registracije) {
		this.datum_registracije = datum_registracije;
	}
	
	
}
